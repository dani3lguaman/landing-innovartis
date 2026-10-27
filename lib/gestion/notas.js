// Notas del equipo en las páginas internas (/gestion/calendario y /gestion/cobros), como los comentarios de ClickUp:
// cada nota cuelga de una pieza, de un cliente o de lo "general", y puede mencionar a compañeros.
// El texto llega ya cifrado desde el navegador con la clave de la página: aquí solo se guarda y se devuelve.
// Acceso: el navegador manda un token sacado de la clave (nunca la clave) y aquí se compara su SHA-256 con la huella
// de abajo, que es pública pero no deja reconstruir ni el token ni la clave.
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { redis } from "@/lib/brief/almacen";

export const EQUIPO = ["Daniel", "Maura", "Pame", "Joel", "Mario"];

const HUELLAS = {
  calendario: "6db49601f4b643ed627a6c349702a11b5afcc670a0df33a5695b2c4b6db94eb5",
  cobros: "1190229f2f9b885615eac1669158ebf28c960d3b32e2b6456da0e3b2125afc30",
};

const MAX_NOTAS = 3000;
const llave = (pagina) => `gestion:notas:${pagina}`;
const memoria = new Map(); // respaldo para desarrollo (sin Upstash)

export function autorizado(pagina, token) {
  const esperada = HUELLAS[pagina];
  if (!esperada || typeof token !== "string" || token.length < 20 || token.length > 200) return false;
  const a = Buffer.from(createHash("sha256").update(token).digest("hex"), "hex");
  const b = Buffer.from(esperada, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

const deMemoria = (pagina) => {
  if (!memoria.has(pagina)) memoria.set(pagina, new Map());
  return memoria.get(pagina);
};

export async function listar(pagina) {
  if (!redis) return [...deMemoria(pagina).values()];
  const todo = (await redis.hgetall(llave(pagina))) || {};
  return Object.values(todo).map((v) => (typeof v === "string" ? JSON.parse(v) : v));
}

async function leer(pagina, id) {
  if (!redis) return deMemoria(pagina).get(id) || null;
  const v = await redis.hget(llave(pagina), id);
  return v ? (typeof v === "string" ? JSON.parse(v) : v) : null;
}

async function guardar(pagina, nota) {
  if (!redis) { deMemoria(pagina).set(nota.id, nota); return; }
  await redis.hset(llave(pagina), { [nota.id]: JSON.stringify(nota) });
}

// Valida lo que manda el navegador; el texto viene cifrado (iv + ct en base64).
export function validarNueva(c) {
  const b64 = /^[A-Za-z0-9+/=]+$/;
  if (!c || typeof c !== "object") return null;
  const ref = String(c.ref || "").slice(0, 160);
  if (!ref) return null;
  if (!EQUIPO.includes(c.autor)) return null;
  if (typeof c.iv !== "string" || !b64.test(c.iv) || c.iv.length > 40) return null;
  if (typeof c.ct !== "string" || !b64.test(c.ct) || c.ct.length > 12000) return null;
  const menciones = Array.isArray(c.menciones) ? [...new Set(c.menciones.filter((m) => EQUIPO.includes(m)))] : [];
  return { ref, autor: c.autor, menciones, iv: c.iv, ct: c.ct };
}

export async function crear(pagina, datos) {
  const actuales = redis ? await redis.hlen(llave(pagina)) : deMemoria(pagina).size;
  if (actuales >= MAX_NOTAS) throw new Error("lleno");
  const nota = { id: randomBytes(8).toString("hex"), ts: Date.now(), hecho: false, ...datos };
  await guardar(pagina, nota);
  return nota;
}

export async function marcar(pagina, id, hecho, por) {
  const nota = await leer(pagina, String(id || ""));
  if (!nota) return null;
  nota.hecho = Boolean(hecho);
  nota.hechoPor = nota.hecho && EQUIPO.includes(por) ? por : null;
  nota.hechoTs = nota.hecho ? Date.now() : null;
  await guardar(pagina, nota);
  return nota;
}

export async function borrar(pagina, id) {
  if (!redis) return deMemoria(pagina).delete(String(id || ""));
  return (await redis.hdel(llave(pagina), String(id || ""))) > 0;
}
