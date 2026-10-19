// Referencias "Así se ve cuando lo hacemos": SOLO piezas reales de components/portfolio-data.js
// (que ya excluye a los clientes vetados). El modelo elige IDs de esta lista cerrada; si elige
// mal o no elige, se completan aquí de forma determinista. Nunca se inventan casos ni enlaces.
import { PORTFOLIO } from "../../components/portfolio-data.js";

// Rubro del formulario → rubros del portafolio, en orden de parecido.
const MAPA_RUBROS = {
  "Belleza y estética": ["Belleza", "Salud"],
  Salud: ["Salud", "Belleza"],
  Gastronomía: ["Gastronomía", "Alimentos"],
  "Alimentos y bebidas": ["Alimentos", "Gastronomía"],
  "Limpieza y servicios": ["Limpieza"],
  "Industria y construcción": ["Industria"],
  "Inmobiliario y lotes": ["Industria"],
  "Autos y transporte": ["Limpieza", "Industria"],
  "Decoración y hogar": ["Industria", "Limpieza"],
  Educación: ["Educación"],
  "Servicios profesionales": ["Educación", "Industria", "Limpieza"],
  Tecnología: ["Industria", "Educación"],
  Comercio: ["Alimentos", "Belleza", "Industria"],
  Otro: [],
};

/** ID estable: la ruta de la imagen sin carpeta raíz ni extensión ("pachy/post-1"). */
export function idDePieza(pieza) {
  return pieza.src.replace(/^\/portafolio\//, "").replace(/\.[a-z0-9]+$/i, "");
}

export const PIEZAS = PORTFOLIO.filter((p) => p.type === "img" && p.src).map((p) => ({
  id: idDePieza(p),
  rubro: p.rubro,
  cliente: p.client,
  pieza: p.piece,
  src: p.src,
  href: p.href || "",
  metrica: p.metric ? `${p.metric.value} ${p.metric.label}` : "",
}));

const POR_ID = new Map(PIEZAS.map((p) => [p.id, p]));

/** Candidatas para el rubro: primero las del rubro más parecido, con métrica primero. */
export function candidatas(rubroFormulario, max = 12) {
  const rubros = MAPA_RUBROS[rubroFormulario] ?? [];
  const orden = (p) => (p.metrica ? 0 : 1);
  const delRubro = rubros.flatMap((r) => PIEZAS.filter((p) => p.rubro === r).sort((a, b) => orden(a) - orden(b)));
  // Sin rubro parecido: las piezas con métrica de todo el portafolio, una por cliente.
  const base = delRubro.length ? delRubro : unaPorCliente(PIEZAS.filter((p) => p.metrica));
  return base.slice(0, max);
}

function unaPorCliente(lista) {
  const vistos = new Set();
  return lista.filter((p) => (vistos.has(p.cliente) ? false : vistos.add(p.cliente)));
}

/** Texto compacto para el prompt (una línea por pieza). */
export function listaParaPrompt(piezas) {
  return piezas
    .map((p) => `- id: ${p.id} | rubro: ${p.rubro} | cliente: ${p.cliente} | pieza: ${p.pieza}${p.metrica ? ` | resultado: ${p.metrica}` : ""}`)
    .join("\n");
}

/**
 * Deja entre 2 y 3 referencias válidas: las que eligió el modelo si existen en la lista de
 * candidatas, y si faltan, completa con las primeras candidatas (prefiriendo clientes distintos).
 */
export function resolverReferencias(idsElegidos, rubroFormulario) {
  const lista = candidatas(rubroFormulario);
  const permitidas = new Set(lista.map((p) => p.id));
  const elegidas = [];
  for (const id of Array.isArray(idsElegidos) ? idsElegidos : []) {
    if (typeof id === "string" && permitidas.has(id) && !elegidas.some((e) => e.id === id)) elegidas.push(POR_ID.get(id));
    if (elegidas.length === 3) break;
  }
  const resto = [...unaPorCliente(lista), ...lista];
  for (const p of resto) {
    if (elegidas.length >= 3) break;
    if (!elegidas.some((e) => e.id === p.id)) elegidas.push(p);
  }
  return elegidas.slice(0, 3);
}
