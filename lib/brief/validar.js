// Valida y sanea lo que llega del formulario. Los clics solo pueden ser opciones exactas de
// opciones.js; los textos libres se recortan, se limpian de caracteres de control y de etiquetas.
import { PREGUNTAS, CONTACTO } from "./opciones.js";

/** Quita caracteres de control, etiquetas tipo <xml>, espacios repetidos y recorta. */
export function limpiarTexto(valor, max) {
  if (typeof valor !== "string") return "";
  return valor
    .normalize("NFC")
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F\u200B-\u200F\u2028\u2029]/g, " ")
    .replace(/[<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * @returns {{ ok: true, datos: object } | { ok: false, errores: string[] }}
 */
export function validarEntrada(cuerpo) {
  const errores = [];
  if (!cuerpo || typeof cuerpo !== "object") return { ok: false, errores: ["Solicitud vacía."] };

  const respuestas = {};
  const entrada = cuerpo.respuestas && typeof cuerpo.respuestas === "object" ? cuerpo.respuestas : {};

  for (const p of PREGUNTAS) {
    const v = entrada[p.id];
    if (p.tipo === "uno") {
      if (typeof v === "string" && p.opciones.includes(v)) respuestas[p.id] = v;
      else if (p.obligatoria) errores.push(`Falta o no es válida: ${p.pregunta}`);
    } else if (p.tipo === "varios") {
      const lista = Array.isArray(v) ? [...new Set(v.filter((x) => typeof x === "string" && p.opciones.includes(x)))] : [];
      if (Array.isArray(v) && lista.length !== new Set(v).size) errores.push(`Opción no válida en: ${p.pregunta}`);
      if (lista.length > p.maxElegir) errores.push(`Máximo ${p.maxElegir} opciones en: ${p.pregunta}`);
      if (!lista.length && p.obligatoria) errores.push(`Falta: ${p.pregunta}`);
      respuestas[p.id] = lista.slice(0, p.maxElegir);
    } else {
      const t = limpiarTexto(v, p.max);
      if (p.obligatoria && t.length < 5) errores.push(`Cuéntanos un poco más en: ${p.pregunta}`);
      respuestas[p.id] = t;
    }
  }

  // "Otro" rubro: texto corto opcional que escribe el cliente.
  respuestas.rubro_otro = respuestas.rubro === "Otro" ? limpiarTexto(entrada.rubro_otro, 60) : "";

  const contacto = {};
  const c = cuerpo.contacto && typeof cuerpo.contacto === "object" ? cuerpo.contacto : {};
  for (const f of CONTACTO) {
    contacto[f.k] = limpiarTexto(c[f.k], f.max);
    if (f.obligatorio && !contacto[f.k]) errores.push(`Falta: ${f.label}`);
  }
  contacto.whatsapp = contacto.whatsapp.replace(/[^\d+]/g, "");
  if (contacto.whatsapp && !/^\+?\d{7,15}$/.test(contacto.whatsapp)) errores.push("El WhatsApp no parece válido.");
  if (contacto.email && !RE_EMAIL.test(contacto.email)) errores.push("El correo no parece válido.");

  if (cuerpo.consentimiento !== true) errores.push("Necesitamos tu autorización para usar tus datos.");

  return errores.length ? { ok: false, errores } : { ok: true, datos: { respuestas, contacto } };
}
