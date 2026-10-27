// /api/gestion/notas — notas del equipo de las páginas internas. Solo con el token de la página (cabecera x-gestion-token).
import { autorizado, listar, crear, marcar, borrar, validarNueva } from "@/lib/gestion/notas";
import { redis } from "@/lib/brief/almacen";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (cuerpo, status = 200) =>
  Response.json(cuerpo, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

const token = (req) => req.headers.get("x-gestion-token") || "";

async function cuerpoDe(req) {
  const crudo = await req.text();
  if (crudo.length > 16_000) return null;
  try { return JSON.parse(crudo); } catch { return null; }
}

export async function GET(req) {
  const pagina = new URL(req.url).searchParams.get("pagina");
  if (!autorizado(pagina, token(req))) return json({ error: "No autorizado." }, 401);
  try {
    // "persistente" dice si las notas se guardan en Redis (si es false, se perderían: falta configurar Upstash).
    return json({ notas: await listar(pagina), persistente: Boolean(redis) });
  } catch (e) {
    console.error("[gestion] No se pudieron leer las notas:", e?.message);
    return json({ error: "No se pudieron leer las notas." }, 503);
  }
}

export async function POST(req) {
  const c = await cuerpoDe(req);
  if (!c || !autorizado(c.pagina, token(req))) return json({ error: "No autorizado." }, 401);
  const datos = validarNueva(c);
  if (!datos) return json({ error: "Nota no válida." }, 400);
  try {
    return json({ nota: await crear(c.pagina, datos) });
  } catch (e) {
    console.error("[gestion] No se pudo guardar la nota:", e?.message);
    return json({ error: "No se pudo guardar la nota." }, 503);
  }
}

export async function PATCH(req) {
  const c = await cuerpoDe(req);
  if (!c || !autorizado(c.pagina, token(req))) return json({ error: "No autorizado." }, 401);
  try {
    const nota = await marcar(c.pagina, c.id, c.hecho, c.por);
    return nota ? json({ nota }) : json({ error: "No existe." }, 404);
  } catch (e) {
    console.error("[gestion] No se pudo actualizar la nota:", e?.message);
    return json({ error: "No se pudo actualizar la nota." }, 503);
  }
}

export async function DELETE(req) {
  const c = await cuerpoDe(req);
  if (!c || !autorizado(c.pagina, token(req))) return json({ error: "No autorizado." }, 401);
  try {
    return json({ borrada: await borrar(c.pagina, c.id) });
  } catch (e) {
    console.error("[gestion] No se pudo borrar la nota:", e?.message);
    return json({ error: "No se pudo borrar la nota." }, 503);
  }
}
