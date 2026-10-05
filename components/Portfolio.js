"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { PORTFOLIO, RUBROS } from "./portfolio-data";

// Portafolio filtrable por rubro + visor en grande (flechas, Esc, deslizar en celular).
// El visor recorre solo lo que deja ver el filtro activo.
export default function Portfolio() {
  const [rubro, setRubro] = useState("Todos");
  const [open, setOpen] = useState(null); // índice dentro de `items` o null
  const [touchX, setTouchX] = useState(null);

  const items = rubro === "Todos" ? PORTFOLIO : PORTFOLIO.filter((p) => p.rubro === rubro);
  const rubros = RUBROS.filter((r) => r === "Todos" || PORTFOLIO.some((p) => p.rubro === r));

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <section id="portafolio" className="max-w-[1150px] mx-auto px-6 section-y">
      <Reveal>
        <p className="kicker mb-4">Portafolio · Trabajo real</p>
      </Reveal>
      <Reveal mask delay={80}>
        <h2 className="font-heading text-navy text-heading mb-4 max-w-[680px]">
          Mira lo que hacemos en un negocio como el tuyo.
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-8">
          Elige tu rubro y toca cualquier pieza para verla en grande. Todo lo que ves aquí lo
          produjimos para clientes reales.
        </p>
      </Reveal>

      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filtrar por rubro">
        {rubros.map((r) => (
          <button
            key={r}
            role="tab"
            aria-selected={rubro === r}
            onClick={() => setRubro(r)}
            className={`px-4 py-2 text-[13.5px] border transition-colors ${
              rubro === r
                ? "bg-navy text-white border-navy"
                : "bg-white text-ink border-line hover:border-accent"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
        {items.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOpen(i)}
            className="group block w-full text-left break-inside-avoid border border-line bg-white hover:border-accent transition-colors"
            aria-label={`Ver en grande: ${p.piece} para ${p.client}`}
          >
            <div className="card-zoom relative">
              {p.type === "video" ? (
                <video src={p.src} muted playsInline preload="metadata" className="block w-full" />
              ) : (
                <img src={p.src} alt={`${p.piece} para ${p.client}`} loading="lazy" className="block w-full" />
              )}
              {p.type === "video" && (
                <span className="absolute top-2 right-2 bg-navy/85 text-white text-[11px] px-2 py-1">Reel</span>
              )}
            </div>
            <div className="px-3.5 py-3">
              <p className="text-[13px] text-ink font-semibold leading-snug">{p.client}</p>
              <p className="text-[12px] text-ink-soft">{p.piece}</p>
              {p.metric && (
                <p className="mt-1.5 text-[12px] text-accent-deep">
                  <span className="display-num text-[18px]">{typeof p.metric.value === "number" ? p.metric.value.toLocaleString("es-EC") : p.metric.value}</span> {p.metric.label}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] bg-navy-darker/95 flex flex-col items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.piece} para ${current.client}`}
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <div className="max-w-[900px] w-full flex-1 min-h-0 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {current.type === "video" ? (
              <video src={current.src} controls autoPlay playsInline className="max-h-[78vh] max-w-full" />
            ) : (
              <img src={current.src} alt={`${current.piece} para ${current.client}`} className="max-h-[78vh] max-w-full object-contain" />
            )}
          </div>
          <div className="text-center text-white mt-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-[15px] font-semibold">{current.client}</p>
            <p className="text-[13px] text-white/75">
              {current.piece} · {open + 1} de {items.length}
            </p>
            {current.href && (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[13px] text-accent underline underline-offset-4"
              >
                Ver la publicación original
              </a>
            )}
          </div>
          <button onClick={close} aria-label="Cerrar" className="absolute top-4 right-5 text-white text-[32px] leading-none">×</button>
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Anterior"
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white text-[40px] px-3"
              >‹</button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Siguiente"
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white text-[40px] px-3"
              >›</button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
