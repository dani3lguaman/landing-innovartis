// Lee y descifra las notas del equipo de las páginas internas (para el barrido de Claude y el reporte a Daniel).
// Uso (desde web-innovartis):  node scripts/leer-notas.mjs [horas=24] [sitio=https://innovartis.lat]
// Las claves salen de ../agencia/operacion/tablero/claves-paginas-web.json (repo privado del workspace).
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const claves = JSON.parse(readFileSync(path.resolve(aqui, "../../agencia/operacion/tablero/claves-paginas-web.json"), "utf8"));
const horas = Number(process.argv[2] || 24);
const sitio = process.argv[3] || "https://innovartis.lat";
const desde = Date.now() - horas * 3600e3;
const hora = (ts) => new Date(ts - 5 * 3600e3).toISOString().slice(5, 16).replace("T", " ");

for (const pagina of ["calendario", "cobros"]) {
  const token = createHash("sha256").update("innovartis-notas:" + claves[pagina]).digest("base64url");
  const r = await fetch(`${sitio}/api/gestion/notas?pagina=${pagina}`, { headers: { "x-gestion-token": token } });
  if (!r.ok) { console.log(`${pagina}: HTTP ${r.status}`); continue; }
  const { notas } = await r.json();
  const aes = await crypto.subtle.importKey("raw", Buffer.from(claves[pagina], "base64url"), "AES-GCM", false, ["decrypt"]);
  const abiertas = [];
  for (const n of notas || []) {
    try {
      const plano = await crypto.subtle.decrypt({ name: "AES-GCM", iv: Buffer.from(n.iv, "base64") }, aes, Buffer.from(n.ct, "base64"));
      abiertas.push({ ...n, ...JSON.parse(new TextDecoder().decode(plano)) });
    } catch {}
  }
  const recientes = abiertas.filter((n) => n.ts >= desde).sort((a, b) => a.ts - b.ts);
  console.log(`${pagina}: ${abiertas.length} notas (${abiertas.filter((n) => !n.hecho).length} sin resolver), ${recientes.length} en las últimas ${horas} h`);
  for (const n of recientes) {
    const m = n.menciones?.length ? ` → @${n.menciones.join(" @")}` : "";
    console.log(`  ${hora(n.ts)} · ${n.autor}${m} · ${n.refTitulo || n.ref}${n.hecho ? " · resuelta" : ""}: ${n.texto}`);
  }
}
