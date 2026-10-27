"use client";

import { useEffect, useState } from "react";
import { EQUIPO, RE_MENCION } from "./useNotas";

// Quién está escribiendo en este navegador (se elige una vez; sirve para firmar notas y ver "mis menciones").
export function useYo() {
  const [yo, setYoEstado] = useState("");
  useEffect(() => { try { setYoEstado(localStorage.getItem("innovartis-gestion-yo") || ""); } catch {} }, []);
  const setYo = (v) => { setYoEstado(v); try { localStorage.setItem("innovartis-gestion-yo", v); } catch {} };
  return [yo, setYo];
}

export function hace(ts) {
  const min = Math.round((Date.now() - ts) / 60000);
  if (min < 1) return "ahora";
  if (min < 60) return `hace ${min} min`;
  const h = Math.round(min / 60);
  if (h < 24) return `hace ${h} h`;
  const d = new Date(ts);
  return d.toLocaleDateString("es-EC", { day: "numeric", month: "short" }) + " " + d.toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit" });
}

function TextoConMenciones({ texto }) {
  const partes = String(texto).split(RE_MENCION);
  // split con grupo de captura: los índices impares son los nombres mencionados.
  return (
    <p className="text-[13.5px] text-ink leading-[1.6] whitespace-pre-wrap break-words">
      {partes.map((p, i) => (i % 2 ? <span key={i} className="font-semibold text-accent-deep">@{p}</span> : <span key={i}>{p}</span>))}
    </p>
  );
}

export function SelectorYo({ yo, setYo }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[12.5px] text-ink-soft">Soy:</span>
      {EQUIPO.map((n) => (
        <button key={n} type="button" aria-pressed={yo === n} onClick={() => setYo(n)}
          className={`px-3 py-1 text-[12.5px] font-semibold border ${yo === n ? "bg-accent text-white border-accent" : "bg-white text-navy border-line hover:border-navy"}`}>
          {n}
        </button>
      ))}
    </div>
  );
}

function Nota({ n, yo, api }) {
  const [ocupado, setOcupado] = useState(false);
  const hacer = async (f) => { setOcupado(true); try { await f(); } catch {} setOcupado(false); };
  return (
    <div className={`border-l-2 pl-3 py-1.5 grid gap-1 ${n.hecho ? "border-l-line opacity-70" : "border-l-accent"}`}>
      <p className="text-[12px] text-ink-soft">
        <span className="font-bold text-navy">{n.autor}</span> · {hace(n.ts)}
        {n.hecho && <span> · resuelta{n.hechoPor ? ` por ${n.hechoPor}` : ""}</span>}
      </p>
      <TextoConMenciones texto={n.texto} />
      <div className="flex gap-3 text-[12px]">
        <button type="button" disabled={ocupado || !yo} onClick={() => hacer(() => api.marcar(n.id, !n.hecho, yo))} className="font-semibold text-navy underline underline-offset-2 disabled:opacity-40">
          {n.hecho ? "Reabrir" : "Marcar como resuelta"}
        </button>
        {yo && yo === n.autor && (
          <button type="button" disabled={ocupado} onClick={() => hacer(() => api.borrar(n.id))} className="text-ink-soft underline underline-offset-2 disabled:opacity-40">Borrar</button>
        )}
      </div>
    </div>
  );
}

function Redactor({ yo, onEnviar, bloqueado }) {
  const [texto, setTexto] = useState("");
  const [estado, setEstado] = useState("");
  const enviar = async () => {
    if (!texto.trim() || !yo) return;
    setEstado("guardando");
    try { await onEnviar(texto.trim()); setTexto(""); setEstado(""); } catch { setEstado("error"); }
  };
  if (bloqueado) return <p className="text-[12.5px] text-[#b54708]">Las notas se activan cuando la web tenga su base de datos conectada (lo hace Daniel). Por ahora no se pueden escribir.</p>;
  if (!yo) return <p className="text-[12.5px] text-[#b54708]">Para escribir, elige arriba quién eres («Soy: …»).</p>;
  return (
    <div className="grid gap-2">
      <textarea value={texto} onChange={(e) => setTexto(e.target.value)} rows={2} maxLength={2000}
        placeholder="Escribe una nota. Menciona con @Maura, @Pame, @Joel, @Mario o @Daniel"
        className="w-full border border-line px-3 py-2 text-[13.5px] text-ink bg-white focus:border-accent focus:outline-none resize-y" />
      <div className="flex flex-wrap items-center gap-2">
        {EQUIPO.filter((n) => n !== yo).map((n) => (
          <button key={n} type="button" onClick={() => setTexto((t) => (t && !t.endsWith(" ") ? t + " " : t) + "@" + n + " ")}
            className="px-2.5 py-1 text-[12px] font-semibold border border-line text-navy bg-white hover:border-navy">@{n}</button>
        ))}
        <button type="button" onClick={enviar} disabled={!texto.trim() || estado === "guardando"} className="ml-auto px-4 py-1.5 text-[13px] font-semibold bg-navy text-white disabled:opacity-50">
          {estado === "guardando" ? "Guardando…" : "Publicar nota"}
        </button>
      </div>
      {estado === "error" && <p className="text-[12px] text-[#b42318]">No se pudo guardar. Revisa tu conexión y vuelve a intentar.</p>}
    </div>
  );
}

// Botón "Notas (n)" + hilo de una pieza o de un cliente.
export function NotasDe({ refId, refTitulo, api, yo }) {
  const [abierto, setAbierto] = useState(false);
  const mias = api.notas.filter((n) => n.ref === refId);
  const paraMi = yo ? mias.filter((n) => !n.hecho && n.menciones?.includes(yo)).length : 0;
  const abiertas = mias.filter((n) => !n.hecho).length;
  return (
    <div className="grid gap-2">
      <button type="button" onClick={() => setAbierto((a) => !a)} className="justify-self-start text-[12.5px] font-semibold text-navy underline underline-offset-2">
        {abierto ? "Ocultar notas" : `Notas${mias.length ? ` (${abiertas} abiertas de ${mias.length})` : ""}`}
        {paraMi > 0 && <span className="ml-2 no-underline inline-block px-1.5 bg-accent text-white">{paraMi} para ti</span>}
      </button>
      {abierto && (
        <div className="grid gap-2.5 bg-paper-soft border border-line p-3">
          {mias.length ? mias.map((n) => <Nota key={n.id} n={n} yo={yo} api={api} />) : <p className="text-[12.5px] text-ink-soft">Todavía no hay notas aquí.</p>}
          <Redactor yo={yo} bloqueado={api.persistente === false} onEnviar={(texto) => api.enviar({ ref: refId, refTitulo, autor: yo, texto })} />
        </div>
      )}
    </div>
  );
}

// Panel de arriba: quién soy, mis menciones pendientes, lo último del equipo y las notas generales.
export function PanelNotas({ api, yo, setYo }) {
  const [vista, setVista] = useState("mias");
  const paraMi = yo ? api.notas.filter((n) => !n.hecho && n.menciones?.includes(yo)) : [];
  const recientes = [...api.notas].sort((a, b) => b.ts - a.ts).slice(0, 15);
  const VISTAS = [
    { v: "mias", t: `Menciones para mí${paraMi.length ? ` (${paraMi.length})` : ""}` },
    { v: "recientes", t: "Lo último del equipo" },
    { v: "generales", t: "Notas generales" },
  ];
  return (
    <section className="bg-white border border-line p-5 md:p-6 grid gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="kicker mb-1">Notas del equipo</p>
          <p className="text-[13.5px] text-ink-soft max-w-[620px]">Como los comentarios de ClickUp: deja una nota en cada pieza o cliente y menciona a quien tiene que verla. Se guardan cifradas y las ve quien tenga esta página.</p>
        </div>
        <SelectorYo yo={yo} setYo={setYo} />
      </div>
      {api.error && <p className="text-[12.5px] text-[#b42318]">{api.error}</p>}
      {api.persistente === false && (
        <p className="text-[13px] text-[#b54708] bg-[#fffaeb] border border-[#fedf89] px-3 py-2">
          Las notas todavía no se pueden guardar de forma permanente: falta conectar la base de datos de la web. En cuanto Daniel la conecte, se activan solas.
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {VISTAS.map((x) => (
          <button key={x.v} type="button" aria-pressed={vista === x.v} onClick={() => setVista(x.v)}
            className={`px-3.5 py-1.5 text-[13px] font-semibold border ${vista === x.v ? "bg-navy text-white border-navy" : "bg-white text-navy border-line hover:border-navy"}`}>
            {x.t}
          </button>
        ))}
      </div>
      {vista === "mias" && (
        !yo ? <p className="text-[13px] text-ink-soft">Elige quién eres para ver lo que te mencionaron.</p>
        : paraMi.length ? <div className="grid gap-3">{paraMi.map((n) => <div key={n.id} className="grid gap-1"><p className="text-[12px] font-bold text-ink-soft">{n.refTitulo || "General"}</p><Nota n={n} yo={yo} api={api} /></div>)}</div>
        : <p className="text-[13px] text-ink-soft">No tienes menciones pendientes.</p>
      )}
      {vista === "recientes" && (
        recientes.length ? <div className="grid gap-3">{recientes.map((n) => <div key={n.id} className="grid gap-1"><p className="text-[12px] font-bold text-ink-soft">{n.refTitulo || "General"}</p><Nota n={n} yo={yo} api={api} /></div>)}</div>
        : <p className="text-[13px] text-ink-soft">Todavía no hay notas.</p>
      )}
      {vista === "generales" && <NotasGenerales api={api} yo={yo} />}
    </section>
  );
}

function NotasGenerales({ api, yo }) {
  const generales = api.notas.filter((n) => n.ref === "general");
  return (
    <div className="grid gap-2.5">
      {generales.length ? generales.map((n) => <Nota key={n.id} n={n} yo={yo} api={api} />) : <p className="text-[13px] text-ink-soft">Sin notas generales todavía.</p>}
      <Redactor yo={yo} bloqueado={api.persistente === false} onEnviar={(texto) => api.enviar({ ref: "general", refTitulo: "General", autor: yo, texto })} />
    </div>
  );
}
