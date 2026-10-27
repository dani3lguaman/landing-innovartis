"use client";

import { useMemo, useState } from "react";
import useDatosCifrados, { AvisoAcceso } from "./useDatosCifrados";
import useNotas from "./useNotas";
import { useYo, NotasDe, PanelNotas } from "./Notas";
import { Chips, Tile, Pastilla, Cargando, fechaCorta, diasHasta } from "./ui";

const PERSONAS = ["Joel", "Mario", "Maura"];
const RANGOS = [
  { valor: "14", texto: "Próximos 14 días" },
  { valor: "30", texto: "Próximos 30 días" },
  { valor: "todo", texto: "Todo" },
  { valor: "pasadas", texto: "Ya pasaron" },
];

// Lunes de la semana de una fecha ISO, también en ISO.
function lunes(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const f = new Date(Date.UTC(y, m - 1, d));
  f.setUTCDate(f.getUTCDate() - ((f.getUTCDay() + 6) % 7));
  return f.toISOString().slice(0, 10);
}

function BriefNuevo() {
  const [copiado, setCopiado] = useState(false);
  const enlace = "https://innovartis.lat/aterriza";
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(enlace);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(false);
    }
  };
  return (
    <div className="bg-white border border-line p-5 md:p-6 grid gap-3 md:flex md:items-center md:justify-between">
      <div className="max-w-[640px]">
        <p className="kicker mb-1.5">Cliente nuevo</p>
        <p className="text-[14.5px] text-ink leading-[1.65]">
          Antes de la primera reunión, mándale el brief <span className="font-semibold text-navy">innovartis.lat/aterriza</span>: en 3 minutos aterriza sus ideas
          y llegamos con ideas en la mente.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={copiar} className="btn-solid">{copiado ? "Copiado" : "Copiar enlace"}</button>
        <a href={enlace} target="_blank" rel="noreferrer" className="px-4 py-2.5 text-[14px] font-semibold border border-navy text-navy hover:bg-navy hover:text-white transition-colors">Abrir</a>
      </div>
    </div>
  );
}

export default function CalendarioMaura() {
  const { cargando, error, datos, clave } = useDatosCifrados("calendario");
  const api = useNotas("calendario", clave);
  const [yo, setYo] = useYo();
  const [rango, setRango] = useState("14");
  const [estado, setEstado] = useState("Todos");
  const [persona, setPersona] = useState("Todos");
  const [cliente, setCliente] = useState("Todos");

  const piezas = useMemo(() => (datos?.piezas || []).map((p) => ({ ...p, dias: diasHasta(p.fecha) })), [datos]);
  const clientes = useMemo(() => [...new Set(piezas.map((p) => p.cliente))].sort((a, b) => a.localeCompare(b)), [piezas]);
  const estados = useMemo(() => [...new Set(piezas.map((p) => p.estado))], [piezas]);

  const filtradas = useMemo(
    () =>
      piezas
        .filter((p) => {
          if (rango === "pasadas") return p.dias !== null && p.dias < 0;
          if (rango !== "todo" && (p.dias === null || p.dias < 0 || p.dias > Number(rango))) return false;
          return true;
        })
        .filter((p) => estado === "Todos" || p.estado === estado)
        .filter((p) => persona === "Todos" || String(p.quien).includes(persona))
        .filter((p) => cliente === "Todos" || p.cliente === cliente)
        .sort((a, b) => String(a.fecha).localeCompare(String(b.fecha)) || String(a.hora || "").localeCompare(String(b.hora || ""))),
    [piezas, rango, estado, persona, cliente]
  );

  const semanas = useMemo(() => {
    const g = new Map();
    filtradas.forEach((p) => {
      const k = /^\d{4}-\d{2}-\d{2}$/.test(p.fecha) ? lunes(p.fecha) : "sin-fecha";
      if (!g.has(k)) g.set(k, []);
      g.get(k).push(p);
    });
    return [...g.entries()];
  }, [filtradas]);

  if (cargando) return <Cargando />;
  if (error) return <AvisoAcceso error={error} />;

  const proximos7 = piezas.filter((p) => p.dias !== null && p.dias >= 0 && p.dias <= 7).length;

  return (
    <div className="grid gap-7">
      <header className="grid gap-2">
        <p className="kicker">Para Maura</p>
        <h1 className="font-heading text-heading text-navy">Calendario de contenido</h1>
        <p className="text-[14.5px] text-ink-soft leading-[1.7] max-w-[760px]">
          Lo define y aprueba solo Maura; el resto del equipo lo lee y reporta lo suyo. Se actualiza con lo que se decide en los WhatsApp.
          Actualizado: {datos.actualizado}.
        </p>
      </header>

      <BriefNuevo />

      <PanelNotas api={api} yo={yo} setYo={setYo} />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Tile etiqueta="Piezas con este filtro" valor={filtradas.length} />
        <Tile etiqueta="Por hacer" valor={piezas.filter((p) => p.estado === "Por hacer").length} tono="ok" />
        <Tile etiqueta="En espera de una condición" valor={piezas.filter((p) => p.estado === "En espera").length} tono="naranja" />
        <Tile etiqueta="En los próximos 7 días" valor={proximos7} tono="neutro" />
      </section>

      <section className="bg-white border border-line p-5 md:p-6 grid gap-5">
        <Chips titulo="Cuándo" opciones={RANGOS} valor={rango} onChange={setRango} />
        <Chips titulo="Estado" opciones={["Todos", ...estados]} valor={estado} onChange={setEstado} />
        <Chips titulo="Quién" opciones={["Todos", ...PERSONAS]} valor={persona} onChange={setPersona} />
        <Chips titulo="Cliente" opciones={["Todos", ...clientes]} valor={cliente} onChange={setCliente} />
      </section>

      {!filtradas.length && <p className="text-[14px] text-ink-soft">No hay piezas con este filtro. Prueba con «Todo».</p>}

      {semanas.map(([sem, lista]) => (
        <section key={sem} className="grid gap-3">
          <h2 className="font-heading text-[17px] text-navy">{sem === "sin-fecha" ? "Sin fecha" : `Semana del ${fechaCorta(sem)}`}</h2>
          <div className="grid gap-2.5">
            {lista.map((p) => (
              <article key={p.id} className={`bg-white border border-line p-4 grid gap-2 md:grid-cols-[150px_1fr_auto] md:items-start ${p.dias !== null && p.dias < 0 ? "opacity-60" : ""}`}>
                <div>
                  <p className="display-num text-navy text-[16px] leading-tight">{fechaCorta(p.fecha)}</p>
                  {p.hora && <p className="text-[12.5px] text-ink-soft">{p.hora}</p>}
                  {p.dias === 0 && <p className="text-[12px] font-bold text-accent mt-0.5">Hoy</p>}
                </div>
                <div className="min-w-0 grid gap-1">
                  <p className="text-[15px] text-ink">
                    <span className="font-bold text-navy">{p.cliente}</span>
                    <span className="text-ink-soft"> · {p.formato}{p.tipo ? ` · tipo ${p.tipo}` : ""}</span>
                  </p>
                  <p className="text-[14px] text-ink leading-[1.55]">{p.tema}</p>
                  <p className="text-[12.5px] text-ink-soft">{p.quien}</p>
                  {p.condicion && <p className="text-[12.5px] text-[#b54708]">Condición: {p.condicion}</p>}
                  {p.aviso && <p className="text-[12.5px] text-ink-soft italic">{p.aviso}</p>}
                </div>
                <div>
                  <Pastilla nivel={p.estado === "En espera" ? "naranja" : "ok"}>{p.estado}</Pastilla>
                </div>
                <div className="md:col-span-3 border-t border-line pt-2">
                  <NotasDe refId={p.id} refTitulo={`${p.cliente} · ${fechaCorta(p.fecha)} · ${p.formato}`} api={api} yo={yo} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
