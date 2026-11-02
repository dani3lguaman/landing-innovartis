// Lee los briefs que llenaron los clientes en /brief-mes (para el barrido de Claude y para Maura).
// Uso (desde web-innovartis):  node scripts/leer-briefs.mjs [horas=24] [sitio=https://innovartis.lat]
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

const token = createHash("sha256").update("innovartis-notas:" + claves.cobros).digest("base64url");
const r = await fetch(`${sitio}/api/brief-mes`, { headers: { "x-gestion-token": token } });
if (!r.ok) {
  console.log(`brief-mes: HTTP ${r.status}`);
  process.exit(1);
}
const { briefs } = await r.json();
const recientes = (briefs || []).filter((b) => Date.parse(b.creado) >= desde);
console.log(`brief-mes: ${briefs?.length || 0} guardados, ${recientes.length} en las últimas ${horas} h`);
for (const b of recientes) {
  console.log(`\n${hora(Date.parse(b.creado))} · ${b.contacto.negocio} · ${b.contacto.nombre} · ${b.contacto.whatsapp} · ${b.tipo}`);
  for (const [k, v] of Object.entries(b.respuestas)) if (v) console.log(`  ${k}: ${v}`);
}
