"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

// Resultados reales leídos en Meta Ads Manager el 5-oct-2026 (rango 1-oct-2025 → 3-oct-2026).
// Evidencia: agencia/comercial/metricas-portafolio-2026-10-05.md. Nunca inventar ni redondear hacia arriba.
// NO se muestra el importe gastado de ningún cliente (es dato del cliente).
const CLIENTS = [
  {
    id: "remy",
    name: "Cabello Remy EC",
    rubro: "Extensiones de cabello · Quito y Guayaquil",
    resultLabel: "Conversaciones por WhatsApp",
    campaigns: [
      { name: "Campaña Guayaquil", value: 4803, cost: 0.32 },
      { name: "Campaña Quito Sur", value: 2981, cost: 0.38 },
      { name: "Campaña Quito Norte", value: 1728, cost: 0.69 },
    ],
  },
  {
    id: "pachy",
    name: "Pachy Limpieza Profesional",
    rubro: "Limpieza profesional · Quito",
    resultLabel: "Conversaciones por WhatsApp",
    campaigns: [
      { name: "Campaña septiembre 2026", value: 2697, cost: 0.69 },
      { name: "Campaña diciembre 2025", value: 663, cost: 0.75 },
      { name: "Campaña diciembre 2025 · B", value: 188, cost: 0.44 },
    ],
  },
  {
    id: "damavid",
    name: "Damavid Aqua",
    rubro: "Agua purificada · Quito y valles",
    resultLabel: "Conversaciones por WhatsApp",
    campaigns: [
      { name: "Campaña septiembre 2026", value: 437, cost: 0.85 },
      { name: "Anuncio de la vertiente · A", value: 30, cost: 0.38 },
      { name: "Anuncio de la vertiente · B", value: 16, cost: 0.25 },
    ],
  },
  {
    id: "metallum",
    name: "Metallum",
    rubro: "Estructuras metálicas y pérgolas · Quito",
    resultLabel: "Clientes potenciales (formulario)",
    campaigns: [{ name: "Campaña septiembre 2026", value: 452, cost: 0.73 }],
  },
];

const fmtInt = (n) => Math.round(n).toLocaleString("es-EC");
const fmtUsd = (n) => `$${n.toFixed(2).replace(".", ",")}`;

// 'static' = cifras finales (sin JS, SEO, panel ya visible al cargar) · 'ready' = en 0 esperando · 'run' = animando.
// Igual que Reveal: solo se anima lo que todavía está fuera de pantalla al hidratar.
function useInView(ref) {
  const [phase, setPhase] = useState("static");
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    setPhase("ready");
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPhase("run");
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    // Red de seguridad: si el observador nunca dispara, a los 4 s se muestran las cifras.
    const t = setTimeout(() => setPhase((ph) => (ph === "ready" ? "static" : ph)), 4000);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, [ref]);
  return phase;
}

// Cuenta desde 0 hasta la cifra final al entrar en pantalla y cada vez que se cambia de cliente.
function CountUp({ to, format = fmtInt, phase }) {
  const [v, setV] = useState(phase === "static" ? to : 0);
  useEffect(() => {
    if (phase === "static") return setV(to);
    if (phase !== "run") return setV(0);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || document.hidden) return setV(to);
    let raf;
    const t0 = performance.now();
    const dur = 1100;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, phase]);
  return <>{format(v)}</>;
}

export default function AdsResults() {
  const [active, setActive] = useState(CLIENTS[0].id);
  const [hover, setHover] = useState(null);
  const panelRef = useRef(null);
  const phase = useInView(panelRef);
  const run = phase !== "ready";

  const c = CLIENTS.find((x) => x.id === active);
  const total = c.campaigns.reduce((s, x) => s + x.value, 0);
  const best = Math.min(...c.campaigns.map((x) => x.cost));
  const max = Math.max(...c.campaigns.map((x) => x.value));

  return (
    <section id="resultados" className="max-w-[1200px] mx-auto px-6 section-y">
      <Reveal>
        <p className="kicker mb-4">Resultados reales · Meta Ads</p>
      </Reveal>
      <Reveal mask delay={80}>
        <h2 className="font-heading text-navy text-heading mb-4 max-w-[720px]">
          Así se ven nuestras campañas por dentro.
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-8">
          Números tomados del Administrador de anuncios de cada cliente, tal como Meta los reporta.
          Elige un negocio.
        </p>
      </Reveal>

      <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Elegir cliente">
        {CLIENTS.map((x) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={active === x.id}
            onClick={() => {
              setActive(x.id);
              setHover(null);
            }}
            className={`px-4 py-2 text-[13.5px] border transition-colors ${
              active === x.id
                ? "bg-navy text-white border-navy"
                : "bg-white text-ink border-line hover:border-accent"
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>

      <div ref={panelRef} className="bg-white border border-line shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        {/* Barra superior estilo panel de anuncios */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-4 border-b border-line">
          <div>
            <p className="text-[15px] font-semibold text-ink">Información del rendimiento</p>
            <p className="text-[12.5px] text-ink-soft">{c.rubro}</p>
          </div>
          <span className="text-[12px] text-ink-soft border border-line px-3 py-1.5">
            1 oct 2025 – 3 oct 2026
          </span>
        </div>

        <div className="grid md:grid-cols-[minmax(0,300px)_1fr]">
          {/* Cifras grandes */}
          <div className="px-6 md:px-8 py-7 border-b md:border-b-0 md:border-r border-line flex flex-col gap-6">
            <div className="border border-accent/60 bg-accent/5 px-4 py-3">
              <p className="text-[12.5px] text-ink-soft">{c.resultLabel}</p>
              <p className="display-num text-navy text-[48px] leading-none mt-1">
                <CountUp key={c.id + "t"} to={total} phase={phase} />
              </p>
            </div>
            <div className="px-4">
              <p className="text-[12.5px] text-ink-soft">Costo por resultado, desde</p>
              <p className="display-num text-navy text-[40px] leading-none mt-1">
                <CountUp key={c.id + "c"} to={best} phase={phase} format={fmtUsd} />
              </p>
            </div>
            <p className="px-4 text-[12px] leading-relaxed text-ink-soft">
              La pauta la paga cada cliente directo a Meta. Nosotros ponemos la estrategia, los
              anuncios y el seguimiento.
            </p>
          </div>

          {/* Barras por campaña: una sola serie, sin leyenda; etiqueta directa en cada barra */}
          <div className="px-6 md:px-8 py-7">
            <p className="text-[13px] font-semibold text-ink mb-5">{c.resultLabel} por campaña</p>
            <ul className="flex flex-col gap-5">
              {c.campaigns.map((k, i) => {
                const pct = (k.value / max) * 100;
                const on = hover === i;
                return (
                  <li
                    key={c.id + k.name}
                    className="relative"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    tabIndex={0}
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <span className="text-[13.5px] text-ink">{k.name}</span>
                      <span className="text-[13px] text-ink-soft whitespace-nowrap">
                        <strong className="text-ink">{fmtInt(k.value)}</strong> · {fmtUsd(k.cost)} c/u
                      </span>
                    </div>
                    <div className="h-3 bg-paper-soft rounded-r-[4px] overflow-hidden">
                      <div
                        className={`h-full rounded-r-[4px] transition-[width,background-color] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          on ? "bg-navy" : "bg-accent-deep"
                        }`}
                        style={{ width: run ? `${Math.max(pct, 1.5)}%` : "0%", transitionDelay: run ? `${i * 120}ms, 0ms` : "0ms" }}
                      />
                    </div>
                    {on && (
                      <div className="absolute right-0 -top-9 z-10 bg-navy-darker text-white text-[12px] px-3 py-1.5 shadow-lg pointer-events-none whitespace-nowrap">
                        {fmtInt(k.value)} {c.resultLabel.toLowerCase()} · {fmtUsd(k.cost)} cada uno
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-7 text-[11.5px] text-ink-soft">
              Fuente: Administrador de anuncios de Meta de cada cliente, leído el 5 de octubre de 2026.
              Atribución: 7 días tras clic o 1 día tras visualización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
