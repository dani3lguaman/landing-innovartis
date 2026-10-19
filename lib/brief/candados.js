// Candados sobre el texto que arma el sistema, antes de mostrarlo al cliente
// (mismo espíritu que scripts/armar-proforma.mjs): nada de "IA" de cara al cliente
// y nada de prometer resultados que no dependen de la agencia.

const PROHIBIDOS = [
  { re: /\bI\.\s?A\b/, motivo: 'menciona "IA"' },
  { re: /\bIAs?\b/, motivo: 'menciona "IA"' },
  { re: /inteligencia\s+artificial/i, motivo: 'menciona "inteligencia artificial"' },
  { re: /\b(chat\s?gpt|openai|claude|anthropic|gemini|copilot)\b/i, motivo: "nombra una herramienta" },
  { re: /\bgaranti[zc]/i, motivo: "promete con garantía" },
  { re: /\b(le|te|les)\s+aseguramos\b/i, motivo: "asegura un resultado" },
  { re: /\bresultados?\s+(asegurados?|seguros?)\b/i, motivo: "asegura un resultado" },
  { re: /\b(dupli[cq]|tripli[cq]|cuadrupli[cq]|multipli[cq])\w*/i, motivo: "promete multiplicar resultados" },
  { re: /\b(chat\s?)?bots?\b/i, motivo: 'menciona "bot" (se dice "asistente automático de WhatsApp")' },
  { re: /\b(aprobado\s+seguro|sin\s+bur[oó]|milagro\w*|cura\s+(definitiva|total))/i, motivo: "promesa prohibida" },
  { re: /\b\d+([.,]\d+)?\s?%\s*(más|de\s+(aumento|crecimiento))/i, motivo: "promete un porcentaje" },
  { re: /\b(aumenta|sube|crece|crecer|aumentar|subir)\w*\s+(sus|tus|las)?\s*ventas\s+(un|en|al)\s+\d/i, motivo: "promete cifras de ventas" },
  { re: /\b\d[\d.,]*\s+(nuevos\s+)?(clientes|ventas|seguidores|mensajes|citas|pedidos)\s+(nuevos|más|seguros|al\s+mes|por\s+semana)/i, motivo: "promete cifras" },
  { re: /\b(sin\s+falta|100\s?%\s+(seguro|efectivo|garantizado))\b/i, motivo: "promete un resultado" },
];

/** Recorre todas las cadenas de un objeto (el brief) y devuelve una lista de hallazgos. */
export function revisarTexto(valor, ruta = "brief") {
  const hallazgos = [];
  if (typeof valor === "string") {
    for (const { re, motivo } of PROHIBIDOS) {
      const m = valor.match(re);
      if (m) hallazgos.push({ ruta, motivo, fragmento: m[0] });
    }
  } else if (Array.isArray(valor)) {
    valor.forEach((v, i) => hallazgos.push(...revisarTexto(v, `${ruta}[${i}]`)));
  } else if (valor && typeof valor === "object") {
    for (const [k, v] of Object.entries(valor)) hallazgos.push(...revisarTexto(v, `${ruta}.${k}`));
  }
  return hallazgos;
}
