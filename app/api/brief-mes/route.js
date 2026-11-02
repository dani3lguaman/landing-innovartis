// /api/brief-mes — POST: el cliente envía su brief del mes. GET: lo lee el equipo con el token de la página de cobros.
import { validarBriefMes, guardarBriefMes, listarBriefsMes } from "@/lib/brief/mes";
import { autorizado } from "@/lib/gestion/notas";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 12_000;

const json = (cuerpo, status = 200) =>
  Response.json(cuerpo, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

export async function POST(req) {
  const crudo = await req.text();
  if (crudo.length > MAX_BYTES) return json({ error: "La solicitud es demasiado grande." }, 413);

  let cuerpo;
  try {
    cuerpo = JSON.parse(crudo);
  } catch {
    return json({ error: "Solicitud no válida." }, 400);
  }

  // Campo trampa: las personas no lo ven; los bots lo llenan.
  if (cuerpo?.sitio_web) return json({ ok: true });

  const v = validarBriefMes(cuerpo);
  if (!v.ok) return json({ error: "Faltan respuestas.", faltan: v.faltan }, 400);

  try {
    await guardarBriefMes({ ...v.datos, creado: new Date().toISOString() });
    return json({ ok: true });
  } catch (e) {
    console.error("[brief-mes] No se pudo guardar:", e?.message);
    return json({ error: "No se pudo guardar." }, 503);
  }
}

export async function GET(req) {
  if (!autorizado("cobros", req.headers.get("x-gestion-token") || "")) return json({ error: "No autorizado." }, 401);
  try {
    return json({ briefs: await listarBriefsMes() });
  } catch (e) {
    console.error("[brief-mes] No se pudieron leer:", e?.message);
    return json({ error: "No se pudieron leer." }, 503);
  }
}
