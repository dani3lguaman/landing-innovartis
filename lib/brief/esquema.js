// Formato fijo del brief (salida JSON estricta del modelo). Todo es obligatorio y no se aceptan
// campos extra. Los topes de cantidad (3 ideas, 4 semanas, ≤45 s) se comprueban en revisarForma().

export const FORMATOS = ["Reel", "Post", "Carrusel"];
export const QUIEN = ["Usted", "InnovArtis", "Usted e InnovArtis"];

const texto = { type: "string" };

export const ESQUEMA_BRIEF = {
  type: "object",
  additionalProperties: false,
  required: [
    "objetivo",
    "llamado_del_mes",
    "publico",
    "tono",
    "mensaje_clave",
    "ideas",
    "cronograma",
    "necesitamos",
    "referencias",
    "busquedas_biblioteca",
  ],
  properties: {
    objetivo: texto,
    llamado_del_mes: texto,
    publico: texto,
    tono: {
      type: "object",
      additionalProperties: false,
      required: ["palabras", "asi_si", "asi_no"],
      properties: {
        palabras: { type: "array", items: texto },
        asi_si: texto,
        asi_no: texto,
      },
    },
    mensaje_clave: texto,
    ideas: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: [
          "formato",
          "titulo",
          "gancho",
          "beneficios",
          "por_que_elegirnos",
          "llamado",
          "duracion_segundos",
          "guion",
          "que_se_necesita",
          "de_donde_sale",
        ],
        properties: {
          formato: { type: "string", enum: FORMATOS },
          titulo: texto,
          gancho: texto,
          beneficios: { type: "array", items: texto },
          por_que_elegirnos: texto,
          llamado: texto,
          duracion_segundos: { type: "integer" },
          guion: texto,
          que_se_necesita: texto,
          de_donde_sale: texto,
        },
      },
    },
    cronograma: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["semana", "que_pasa", "quien"],
        properties: {
          semana: { type: "integer" },
          que_pasa: texto,
          quien: { type: "string", enum: QUIEN },
        },
      },
    },
    necesitamos: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["que", "falta"],
        properties: { que: texto, falta: { type: "boolean" } },
      },
    },
    referencias: { type: "array", items: texto },
    busquedas_biblioteca: { type: "array", items: texto },
  },
};

/** Comprueba lo que el esquema JSON no puede expresar. Devuelve lista de problemas. */
export function revisarForma(b) {
  const p = [];
  if (!b || typeof b !== "object") return ["El brief no es un objeto."];
  if (!Array.isArray(b.ideas) || b.ideas.length < 3) p.push("Debe haber 3 ideas.");
  else
    b.ideas.slice(0, 3).forEach((idea, i) => {
      if (!Number.isInteger(idea.duracion_segundos) || idea.duracion_segundos < 5 || idea.duracion_segundos > 45)
        p.push(`La idea ${i + 1} debe durar entre 5 y 45 segundos.`);
      if (!Array.isArray(idea.beneficios) || !idea.beneficios.length || idea.beneficios.length > 3)
        p.push(`La idea ${i + 1} debe tener de 1 a 3 beneficios.`);
    });
  if (!Array.isArray(b.cronograma) || b.cronograma.length < 4) p.push("El cronograma debe tener 4 semanas.");
  if (!b.tono || !Array.isArray(b.tono.palabras) || b.tono.palabras.length < 1) p.push("Falta el tono.");
  return p;
}

/** Recorta a la forma exacta que se muestra (3 ideas, 4 semanas, 3 palabras de tono). */
export function normalizar(b) {
  return {
    ...b,
    tono: { ...b.tono, palabras: b.tono.palabras.slice(0, 3) },
    ideas: b.ideas.slice(0, 3).map((i) => ({ ...i, beneficios: i.beneficios.slice(0, 3) })),
    cronograma: b.cronograma.slice(0, 4).map((s, n) => ({ ...s, semana: n + 1 })),
    necesitamos: (b.necesitamos || []).slice(0, 10),
    busquedas_biblioteca: (b.busquedas_biblioteca || []).slice(0, 3),
  };
}
