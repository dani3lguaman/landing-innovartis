// Brief del mes: lo llena el propio cliente desde /brief-mes (renovaciones) o /brief-mes?tipo=nuevo.
// Sin IA: guarda las respuestas tal cual para que el equipo produzca con ellas.
import { redis } from "./almacen";
import { CAMPOS_MES, CAMPOS_NUEVO } from "./campos-mes";

const CONTACTO = ["negocio", "nombre", "whatsapp"];
const MAX_LARGO = 800;
const MAX_CORTO = 120;
const CADUCIDAD = 365 * 86400;
const LLAVE = "briefmes:lista";
const MAX_GUARDADOS = 500;
const memoria = [];

const limpiar = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function validarBriefMes(c) {
  const tipo = c?.tipo === "nuevo" ? "nuevo" : "renovacion";
  const campos = tipo === "nuevo" ? [...CAMPOS_NUEVO, ...CAMPOS_MES] : CAMPOS_MES;
  const contacto = Object.fromEntries(CONTACTO.map((k) => [k, limpiar(c?.contacto?.[k], MAX_CORTO)]));
  const respuestas = {};
  const faltan = CONTACTO.filter((k) => !contacto[k]);
  for (const q of campos) {
    const v = limpiar(c?.respuestas?.[q.id], q.tipo === "largo" ? MAX_LARGO : MAX_CORTO);
    respuestas[q.id] = q.tipo === "opciones" && v && !q.opciones.includes(v) ? "" : v;
    if (q.requerido && !respuestas[q.id]) faltan.push(q.id);
  }
  if (!/^\+?[\d\s-]{7,20}$/.test(contacto.whatsapp)) faltan.push("whatsapp");
  return faltan.length ? { ok: false, faltan } : { ok: true, datos: { tipo, contacto, respuestas } };
}

export async function guardarBriefMes(registro) {
  if (!redis) {
    memoria.unshift(registro);
    return;
  }
  await redis.lpush(LLAVE, JSON.stringify(registro));
  await redis.ltrim(LLAVE, 0, MAX_GUARDADOS - 1);
  await redis.expire(LLAVE, CADUCIDAD);
}

export async function listarBriefsMes() {
  if (!redis) return memoria;
  const filas = await redis.lrange(LLAVE, 0, MAX_GUARDADOS - 1);
  return filas.map((f) => (typeof f === "string" ? JSON.parse(f) : f));
}
