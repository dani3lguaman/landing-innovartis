// Aviso al equipo por correo (Resend). Sin RESEND_API_KEY no se envía nada: se deja el
// resumen en la consola del servidor (los registros de Vercel) y el flujo sigue igual.
import { Resend } from "resend";

const escapar = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export function textoResumen(registro) {
  const { contacto, respuestas, brief, estado, referencias } = registro;
  const lineas = [
    `Brief ${estado === "borrador" ? "BORRADOR" : "PENDIENTE (el sistema no lo armó; hacerlo a mano)"} · ${contacto.negocio}`,
    `Contacto: ${contacto.nombre} · WhatsApp ${contacto.whatsapp} · ${contacto.email}`,
    "",
    "RESPUESTAS",
    `- Rubro: ${respuestas.rubro}${respuestas.rubro_otro ? ` (${respuestas.rubro_otro})` : ""}`,
    `- Objetivo: ${respuestas.objetivo}`,
    `- Qué vende: ${respuestas.que_vende}`,
    `- Público: ${respuestas.publico.join(", ")}`,
    `- Tono: ${respuestas.tono}`,
    `- Formato: ${respuestas.formato.join(", ")}`,
    `- Material: ${respuestas.material}`,
    `- Extra: ${respuestas.extra || "—"}`,
  ];
  if (brief) {
    lineas.push(
      "",
      "BRIEF",
      `Objetivo: ${brief.objetivo}`,
      `Llamado del mes: ${brief.llamado_del_mes}`,
      `Público: ${brief.publico}`,
      `Tono: ${brief.tono.palabras.join(" · ")}`,
      `Mensaje clave: ${brief.mensaje_clave}`,
      ...brief.ideas.flatMap((i, n) => [
        "",
        `Idea ${n + 1} · ${i.formato} · ${i.duracion_segundos} s · ${i.titulo}`,
        `  Gancho: ${i.gancho}`,
        `  Guion: ${i.guion}`,
        `  Llamado: ${i.llamado}`,
      ]),
      "",
      "Cronograma:",
      ...brief.cronograma.map((s) => `  Semana ${s.semana} (${s.quien}): ${s.que_pasa}`),
      "",
      `Necesitamos: ${brief.necesitamos.map((x) => `${x.que}${x.falta ? " (FALTA)" : ""}`).join("; ")}`,
      `Referencias: ${(referencias || []).map((r) => `${r.cliente} – ${r.pieza}`).join(" | ")}`,
      `Búsquedas para la Biblioteca de Anuncios (solo equipo): ${brief.busquedas_biblioteca.join(" | ")}`
    );
  }
  return lineas.join("\n");
}

export async function avisarEquipo(registro, enlace) {
  const resumen = textoResumen(registro);
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info(`[aterriza] Sin RESEND_API_KEY: no se envía correo. Resumen del brief ${registro.id}:\n${resumen}\nEnlace: ${enlace}`);
    return { enviado: false };
  }
  const para = (process.env.BRIEF_CORREOS_AVISO || "innuevate@gmail.com").split(",").map((s) => s.trim()).filter(Boolean);
  const de = process.env.BRIEF_CORREO_REMITENTE || "Sistema InnovArtis <onboarding@resend.dev>";
  const vence = new Date(Date.now() + 86400000).toLocaleDateString("es-EC", { timeZone: "America/Guayaquil", day: "numeric", month: "short" });
  try {
    const { error } = await new Resend(key).emails.send({
      from: de,
      to: para,
      replyTo: registro.contacto.email,
      subject: `Brief nuevo · ${registro.contacto.negocio} · revisar antes del ${vence}`,
      text: `${resumen}\n\nVer el brief: ${enlace}`,
      html: `<pre style="font:14px/1.5 Arial,sans-serif;white-space:pre-wrap">${escapar(resumen)}</pre><p><a href="${escapar(enlace)}">Ver el brief</a></p>`,
    });
    if (error) throw new Error(error.message);
    return { enviado: true };
  } catch (e) {
    console.error("[aterriza] No se pudo enviar el correo:", e?.message, `\n${resumen}`);
    return { enviado: false };
  }
}
