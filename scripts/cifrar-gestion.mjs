// Cifra los datos de las páginas internas /gestion/calendario (Maura) y /gestion/cobros (Pame).
// Este repositorio es público: los datos de clientes solo se publican cifrados (AES-256-GCM) y se abren
// con el enlace secreto (#k=…) que tienen Daniel, Maura y Pame.
//
// Uso (desde la carpeta web-innovartis):  node scripts/cifrar-gestion.mjs
// Lee los JSON del Tablero en ../agencia/operacion/tablero/ (repo privado del workspace) y las claves de
// ../agencia/operacion/tablero/claves-paginas-web.json (si no existen, las crea). Escribe public/gestion-datos/*.enc.json.
// Después: commit + push de este repo y Vercel publica solo.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { randomBytes, createCipheriv } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const tablero = path.resolve(aqui, "../../agencia/operacion/tablero");
const salida = path.resolve(aqui, "../public/gestion-datos");
const rutaClaves = path.join(tablero, "claves-paginas-web.json");

const leer = (n) => JSON.parse(readFileSync(path.join(tablero, n), "utf8"));
const claves = existsSync(rutaClaves) ? JSON.parse(readFileSync(rutaClaves, "utf8")) : {};
for (const k of ["calendario", "cobros"]) if (!claves[k]) claves[k] = randomBytes(32).toString("base64url");
writeFileSync(rutaClaves, JSON.stringify(claves, null, 1) + "\n", "utf8");

const cifrar = (obj, clave) => {
  const iv = randomBytes(12);
  const c = createCipheriv("aes-256-gcm", Buffer.from(clave, "base64url"), iv);
  const ct = Buffer.concat([c.update(JSON.stringify(obj), "utf8"), c.final(), c.getAuthTag()]);
  return { v: 1, iv: iv.toString("base64"), ct: ct.toString("base64") };
};

// Hora de Ecuador (UTC-5) para el sello "actualizado".
const ahora = new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 16).replace("T", " ");

// Calendario de Maura: las piezas sin la ruta interna del repositorio.
const piezas = leer("calendario.json").map(({ fuente, ...p }) => p);

// Cobros de Pame: contratos + quién lleva a cada cliente (de la cartera) + la lista de cobros de la semana.
const base = (n) => String(n).split(" (")[0].split(" / ")[0].trim().toLowerCase();
const cartera = leer("cartera.json");
const contratos = leer("contratos.json").map((c) => {
  const b = base(c.cliente);
  const x = cartera.find((r) => b.startsWith(base(r.cliente)) || base(r.cliente).startsWith(b)) || {};
  return { ...c, ejecutiva: x.ejecutiva || "—", disenador: x.disenador || "—" };
});
const cobros = leer("cobros.json");

mkdirSync(salida, { recursive: true });
writeFileSync(path.join(salida, "calendario.enc.json"), JSON.stringify(cifrar({ actualizado: ahora, piezas }, claves.calendario)) + "\n");
writeFileSync(path.join(salida, "cobros.enc.json"), JSON.stringify(cifrar({ actualizado: ahora, contratos, cobros }, claves.cobros)) + "\n");

const sinPersona = contratos.filter((c) => c.ejecutiva === "—").map((c) => c.cliente);
console.log(JSON.stringify({ actualizado: ahora, piezas: piezas.length, contratos: contratos.length, cobros: cobros.length, sin_persona_a_cargo: sinPersona }));
