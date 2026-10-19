// Guardado de briefs y límites anti-abuso. Si existen las variables de Upstash
// (KV_REST_API_URL/TOKEN, las que pone la integración de Vercel, o UPSTASH_REDIS_REST_URL/TOKEN)
// se usa Redis; si no, todo funciona igual en memoria del proceso y se registra en consola.
import { Redis } from "@upstash/redis";

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = REDIS_URL && REDIS_TOKEN ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) : null;

const DIA = 86400;
const CADUCIDAD = 365 * DIA; // 12 meses (protección de datos: no se guarda para siempre)

// Respaldo en memoria (solo sirve en desarrollo o dentro de una misma instancia).
const memoria = { contadores: new Map(), briefs: new Map() };

async function incrementar(clave, segundos) {
  if (redis) {
    const n = await redis.incr(clave);
    if (n === 1) await redis.expire(clave, segundos);
    return n;
  }
  const ahora = Date.now();
  const c = memoria.contadores.get(clave);
  if (!c || c.vence < ahora) {
    memoria.contadores.set(clave, { n: 1, vence: ahora + segundos * 1000 });
    return 1;
  }
  c.n += 1;
  return c.n;
}

/**
 * Límite simple: N briefs por IP al día, N por WhatsApp al día y un tope mensual global.
 * @returns {{ ok: boolean, motivo?: "ip" | "whatsapp" | "tope_mes" }}
 */
export async function revisarLimites({ ip, whatsapp }) {
  const porIp = Number(process.env.BRIEF_LIMITE_IP_DIA || 3);
  const porWa = Number(process.env.BRIEF_LIMITE_WHATSAPP_DIA || 3);
  const topeMes = Number(process.env.BRIEF_TOPE_MES || 300);
  const mes = new Date().toISOString().slice(0, 7);
  try {
    if ((await incrementar(`brief:lim:ip:${ip}`, DIA)) > porIp) return { ok: false, motivo: "ip" };
    if (whatsapp && (await incrementar(`brief:lim:wa:${whatsapp}`, DIA)) > porWa) return { ok: false, motivo: "whatsapp" };
    if ((await incrementar(`brief:lim:mes:${mes}`, 40 * DIA)) > topeMes) return { ok: false, motivo: "tope_mes" };
  } catch (e) {
    // Si Redis falla no se bloquea al cliente: se registra y se deja pasar.
    console.error("[aterriza] No se pudo revisar límites:", e?.message);
  }
  return { ok: true };
}

/** id aleatorio y largo: la página del brief es privada por enlace. */
export function nuevoId() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function guardarBrief(registro) {
  if (!redis) {
    memoria.briefs.set(registro.id, registro);
    console.info(`[aterriza] Sin Upstash: brief ${registro.id} guardado solo en memoria del proceso.`);
    return { guardado: false };
  }
  try {
    await redis.set(`brief:${registro.id}`, registro, { ex: CADUCIDAD });
    await redis.zadd("briefs", { score: Date.now(), member: registro.id });
    return { guardado: true };
  } catch (e) {
    console.error("[aterriza] No se pudo guardar en Redis:", e?.message);
    memoria.briefs.set(registro.id, registro);
    return { guardado: false };
  }
}

export async function leerBrief(id) {
  if (!/^[a-f0-9]{32}$/.test(id || "")) return null;
  if (redis) {
    try {
      return (await redis.get(`brief:${id}`)) || null;
    } catch (e) {
      console.error("[aterriza] No se pudo leer de Redis:", e?.message);
    }
  }
  return memoria.briefs.get(id) || null;
}
