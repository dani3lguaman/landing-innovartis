// POST /api/brief — "Aterrizamos tus ideas": valida → límites → arma el brief → guarda → avisa.
// Todo corre en el servidor: la clave de Anthropic nunca llega al navegador.
import { validarEntrada } from "@/lib/brief/validar";
import { revisarLimites, guardarBrief, nuevoId } from "@/lib/brief/almacen";
import { generarBrief } from "@/lib/brief/generar";
import { avisarEquipo } from "@/lib/brief/aviso";
import { enviarAHubspot } from "@/lib/brief/hubspot";
import { SITE_URL } from "@/components/constants";

export const runtime = "nodejs";
export const maxDuration = 60; // el brief tarda 15–30 s

const MAX_BYTES = 8_000;

function ipDe(req) {
  const xff = req.headers.get("x-forwarded-for");
  return (xff ? xff.split(",")[0] : req.headers.get("x-real-ip") || "local").trim().slice(0, 64);
}

const json = (cuerpo, status = 200) => Response.json(cuerpo, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req) {
  const crudo = await req.text();
  if (crudo.length > MAX_BYTES) return json({ error: "La solicitud es demasiado grande." }, 413);

  let cuerpo;
  try {
    cuerpo = JSON.parse(crudo);
  } catch {
    return json({ error: "Solicitud no válida." }, 400);
  }

  // Campo trampa: las personas no lo ven; los bots lo llenan. Se responde "ok" sin hacer nada.
  if (cuerpo?.sitio_web) return json({ estado: "pendiente" });

  const v = validarEntrada(cuerpo);
  if (!v.ok) return json({ error: "Revisa tus respuestas.", errores: v.errores }, 400);
  const { respuestas, contacto } = v.datos;

  const limite = await revisarLimites({ ip: ipDe(req), whatsapp: contacto.whatsapp });
  if (!limite.ok) {
    const msg =
      limite.motivo === "tope_mes"
        ? "Hoy tenemos muchas solicitudes. Escríbenos por WhatsApp y te armamos tu plan a mano."
        : "Ya preparaste varios planes hoy. Escríbenos por WhatsApp y seguimos por ahí.";
    return json({ error: msg, limite: limite.motivo }, 429);
  }

  const id = nuevoId();
  const resultado = await generarBrief(respuestas);
  const registro = {
    id,
    creado: new Date().toISOString(),
    estado: resultado.estado, // "borrador" | "pendiente" → luego "aprobado" (fase 2)
    respuestas,
    contacto,
    consentimiento: { aceptado: true, fecha: new Date().toISOString() },
    brief: resultado.estado === "borrador" ? resultado.brief : null,
    referencias: resultado.estado === "borrador" ? resultado.referencias : [],
    simulado: Boolean(resultado.simulado),
    motivo: resultado.motivo || "",
  };

  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const enlace = `${base}/aterriza/${id}`;
  const [guardado] = await Promise.all([
    guardarBrief(registro),
    avisarEquipo(registro, enlace),
    enviarAHubspot(registro, enlace, req.headers.get("referer") || ""),
  ]);

  // Al cliente no se le devuelven las búsquedas internas de la Biblioteca de Anuncios.
  const paraCliente = registro.brief ? { ...registro.brief, busquedas_biblioteca: undefined } : null;
  return json({
    id,
    estado: registro.estado,
    creado: registro.creado,
    negocio: contacto.negocio,
    nombre: contacto.nombre,
    brief: paraCliente,
    referencias: registro.referencias,
    enlace: guardado.guardado ? `/aterriza/${id}` : null,
  });
}
