// Arma el brief: llama a la API de Anthropic con salida JSON estricta, revisa la forma y los
// candados, y si algo falla devuelve "pendiente" (el equipo lo hace a mano; el lead no se pierde).
// Sin ANTHROPIC_API_KEY en desarrollo (o con BRIEF_MOCK=1) usa un brief simulado.
import Anthropic from "@anthropic-ai/sdk";
import { ESQUEMA_BRIEF, revisarForma, normalizar } from "./esquema.js";
import { revisarTexto } from "./candados.js";
import { SISTEMA, mensajeUsuario } from "./prompt.js";
import { candidatas, resolverReferencias } from "./referencias.js";
import { briefSimulado } from "./simulado.js";

const MODELO = process.env.BRIEF_MODEL || "claude-opus-5-5";

export function modoSimulado() {
  if (process.env.BRIEF_MOCK === "1") return true;
  return !process.env.ANTHROPIC_API_KEY && process.env.NODE_ENV !== "production";
}

let cliente = null;
function anthropic() {
  // Lee ANTHROPIC_API_KEY del entorno. Sin reintentos automáticos: el reintento lo controla generarBrief.
  cliente ??= new Anthropic({ maxRetries: 0 });
  return cliente;
}

async function llamar(api, respuestas, piezas, correcciones, timeout) {
  const params = {
    model: MODELO,
    max_tokens: 8000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "low", format: { type: "json_schema", schema: ESQUEMA_BRIEF } },
    system: [{ type: "text", text: SISTEMA, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: mensajeUsuario(respuestas, piezas, correcciones) }],
  };
  const res = await api.beta.messages.create(params, { timeout });
  if (res.stop_reason === "refusal" || res.stop_reason === "max_tokens") {
    throw new Error(`respuesta incompleta (${res.stop_reason})`);
  }
  const texto = res.content.flatMap((b) => (b.type === "text" ? [b.text] : [])).join("");
  console.info(`[aterriza] ${res.model} · entrada ${res.usage?.input_tokens} (caché ${res.usage?.cache_read_input_tokens ?? 0}) · salida ${res.usage?.output_tokens}`);
  return JSON.parse(texto);
}

/** Problemas de forma + candados en un solo listado legible. */
export function problemasDe(brief) {
  const forma = revisarForma(brief);
  if (forma.length) return forma;
  return revisarTexto(normalizar(brief)).map((h) => `En ${h.ruta}: ${h.motivo} ("${h.fragmento}").`);
}

/**
 * @returns {Promise<{ estado: "borrador", brief: object, referencias: object[], simulado?: boolean }
 *                  | { estado: "pendiente", motivo: string }>}
 */
export async function generarBrief(respuestas, { cliente: clientePrueba } = {}) {
  const piezas = candidatas(respuestas.rubro);

  // `cliente` solo se pasa en las pruebas (cliente falso de la API).
  if (!clientePrueba && modoSimulado()) {
    console.info("[aterriza] Modo simulado: no se llama a la API de Anthropic.");
    const brief = briefSimulado(respuestas, piezas);
    return { estado: "borrador", brief, referencias: resolverReferencias(brief.referencias, respuestas.rubro), simulado: true };
  }
  if (!clientePrueba && !process.env.ANTHROPIC_API_KEY) return { estado: "pendiente", motivo: "falta ANTHROPIC_API_KEY" };
  const api = clientePrueba || anthropic();

  // La ruta tiene 60 s (maxDuration): todo, reintento incluido, debe caber en ~55 s.
  const limite = Date.now() + 55_000;
  let correcciones = [];
  for (let intento = 1; intento <= 2; intento++) {
    const quedan = limite - Date.now();
    if (intento > 1 && quedan < 20_000) break;
    try {
      const brief = await llamar(api, respuestas, piezas, correcciones, quedan);
      const problemas = problemasDe(brief);
      if (!problemas.length) {
        const limpio = normalizar(brief);
        return { estado: "borrador", brief: limpio, referencias: resolverReferencias(limpio.referencias, respuestas.rubro) };
      }
      console.warn(`[aterriza] Intento ${intento} rechazado:`, problemas);
      correcciones = problemas;
    } catch (e) {
      console.error(`[aterriza] Intento ${intento} falló:`, e?.message);
      if (e instanceof Anthropic.APIError && e.status && e.status < 500 && e.status !== 429) break;
    }
  }
  return { estado: "pendiente", motivo: "el sistema no pudo armar un borrador que pase los controles" };
}
