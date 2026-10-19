// Pruebas mínimas de "Aterrizamos tus ideas" (sin red ni claves): `npm test`.
import { test } from "node:test";
import assert from "node:assert/strict";
import { validarEntrada, limpiarTexto } from "../lib/brief/validar.js";
import { revisarTexto } from "../lib/brief/candados.js";
import { revisarForma, normalizar } from "../lib/brief/esquema.js";
import { candidatas, resolverReferencias, PIEZAS } from "../lib/brief/referencias.js";
import { briefSimulado } from "../lib/brief/simulado.js";
import { mensajeUsuario, SISTEMA } from "../lib/brief/prompt.js";
import { seccionDelRubro, RUBROS_CONOCIMIENTO } from "../lib/brief/conocimiento.js";
import { PREGUNTAS } from "../lib/brief/opciones.js";

const valido = () => ({
  respuestas: {
    rubro: "Belleza y estética",
    objetivo: "Llenar mi agenda de citas",
    que_vende: "Extensiones de cabello natural para novias de diciembre",
    publico: ["Adultos 30–50"],
    tono: "Cercana y cálida",
    formato: ["Reels / videos cortos", "Carruseles"],
    material: "Puedo grabar con el celular",
    extra: "",
  },
  contacto: { nombre: "Ana", negocio: "Salón Prueba", whatsapp: "099 123 4567", email: "ana@example.com" },
  consentimiento: true,
});

test("acepta una entrada válida y sanea el WhatsApp", () => {
  const v = validarEntrada(valido());
  assert.equal(v.ok, true);
  assert.equal(v.datos.contacto.whatsapp, "0991234567");
});

test("rechaza opciones que no existen y la falta de consentimiento", () => {
  const e = valido();
  e.respuestas.rubro = "Hackers";
  e.respuestas.formato = ["Reels / videos cortos", "<script>"];
  e.consentimiento = false;
  const v = validarEntrada(e);
  assert.equal(v.ok, false);
  assert.ok(v.errores.length >= 3);
});

test("rechaza más opciones de las permitidas", () => {
  const e = valido();
  e.respuestas.publico = ["Jóvenes 18–30", "Adultos 30–50", "Mayores de 50"];
  assert.equal(validarEntrada(e).ok, false);
});

test("recorta textos libres y quita etiquetas", () => {
  const t = limpiarTexto("<b>hola</b>\u0000 mundo " + "x".repeat(500), 200);
  assert.ok(t.length <= 200);
  assert.ok(!t.includes("<"));
});

test("candados: detecta IA y promesas de resultados", () => {
  const malos = [
    "Contenido hecho con IA",
    "Usamos inteligencia artificial",
    "Resultados garantizados",
    "Duplique sus ventas",
    "Le aseguramos 100 clientes nuevos",
    "30% más de ventas",
  ];
  for (const m of malos) assert.ok(revisarTexto({ x: m }).length > 0, m);
  const buenos = ["Escríbanos por WhatsApp", "Familia, día, guía e iniciativa", "MEDIA hora de grabación"];
  for (const b of buenos) assert.equal(revisarTexto({ x: b }).length, 0, b);
});

test("el brief simulado pasa forma y candados", () => {
  const r = validarEntrada(valido()).datos.respuestas;
  const b = briefSimulado(r, candidatas(r.rubro));
  assert.deepEqual(revisarForma(b), []);
  assert.deepEqual(revisarTexto(normalizar(b)), []);
});

test("revisarForma rechaza guiones de más de 45 s", () => {
  const r = validarEntrada(valido()).datos.respuestas;
  const b = briefSimulado(r, candidatas(r.rubro));
  b.ideas[0].duracion_segundos = 60;
  assert.ok(revisarForma(b).length > 0);
});

test("referencias: solo piezas reales del portafolio, 3 como máximo", () => {
  const refs = resolverReferencias(["inventada/123", "pachy/post-1"], "Belleza y estética");
  assert.ok(refs.length >= 2 && refs.length <= 3);
  const ids = new Set(PIEZAS.map((p) => p.id));
  for (const r of refs) assert.ok(ids.has(r.id));
  assert.ok(!refs.some((r) => r.id === "inventada/123"));
  // Pachy no es del rubro belleza: no entra aunque el modelo lo pida.
  assert.ok(!refs.some((r) => r.id === "pachy/post-1"));
});

test("cada rubro del formulario tiene referencias y conocimiento", () => {
  for (const rubro of PREGUNTAS[0].opciones) {
    assert.ok(candidatas(rubro).length >= 2, rubro);
    assert.ok(seccionDelRubro(rubro).length > 50, rubro);
  }
  assert.ok(RUBROS_CONOCIMIENTO.length > 0);
});

test("el prompt etiqueta las respuestas como datos y no filtra contacto", () => {
  const { respuestas } = validarEntrada(valido()).datos;
  const m = mensajeUsuario(respuestas, candidatas(respuestas.rubro));
  assert.ok(m.includes("<respuestas_del_cliente>"));
  assert.ok(!m.includes("ana@example.com"));
  assert.ok(SISTEMA.includes("45 segundos"));
});

// ---- Camino real de la API con un cliente falso (sin red ni clave) ----
import { generarBrief } from "../lib/brief/generar.js";

function clienteFalso(respuestasJSON) {
  const llamadas = [];
  return {
    llamadas,
    beta: {
      messages: {
        create: async (params) => {
          llamadas.push(params);
          const texto = respuestasJSON[Math.min(llamadas.length - 1, respuestasJSON.length - 1)];
          return { model: params.model, stop_reason: "end_turn", content: [{ type: "text", text: texto }], usage: {} };
        },
      },
    },
  };
}

test("API: usa el modelo configurado, salida JSON estricta y respuestas como datos", async () => {
  const r = validarEntrada(valido()).datos.respuestas;
  const bueno = briefSimulado(r, candidatas(r.rubro));
  const c = clienteFalso([JSON.stringify(bueno)]);
  const res = await generarBrief(r, { cliente: c });
  assert.equal(res.estado, "borrador");
  assert.equal(c.llamadas.length, 1);
  const p = c.llamadas[0];
  assert.equal(p.model, process.env.BRIEF_MODEL || "claude-opus-5-5");
  assert.equal(p.output_config.format.type, "json_schema");
  assert.ok(p.messages[0].content.includes("<respuestas_del_cliente>"));
  assert.equal(res.brief.busquedas_biblioteca.length <= 3, true);
});

test("API: si la salida dice IA o promete resultados, reintenta y luego queda pendiente", async () => {
  const r = validarEntrada(valido()).datos.respuestas;
  const malo = briefSimulado(r, candidatas(r.rubro));
  malo.mensaje_clave = "Contenido con IA que garantiza ventas";
  const c = clienteFalso([JSON.stringify(malo)]);
  const res = await generarBrief(r, { cliente: c });
  assert.equal(c.llamadas.length, 2);
  assert.ok(c.llamadas[1].messages[0].content.includes("no pasó los controles"));
  assert.equal(res.estado, "pendiente");
});

test("API: corrige en el segundo intento", async () => {
  const r = validarEntrada(valido()).datos.respuestas;
  const bueno = briefSimulado(r, candidatas(r.rubro));
  const largo = { ...bueno, ideas: bueno.ideas.map((i) => ({ ...i, duracion_segundos: 90 })) };
  const c = clienteFalso([JSON.stringify(largo), JSON.stringify(bueno)]);
  const res = await generarBrief(r, { cliente: c });
  assert.equal(res.estado, "borrador");
  assert.equal(c.llamadas.length, 2);
});

test("API: JSON inválido no rompe el flujo", async () => {
  const r = validarEntrada(valido()).datos.respuestas;
  const res = await generarBrief(r, { cliente: clienteFalso(["{no es json"]) });
  assert.equal(res.estado, "pendiente");
});
