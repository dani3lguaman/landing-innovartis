"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    name: "Diagnóstico",
    body: "Auditamos tu presencia, tus datos y tu embudo antes de proponer nada.",
  },
  {
    n: "02",
    name: "Estrategia",
    body: "Definimos públicos, mensajes y canales con objetivos de negocio, no de vanidad.",
  },
  {
    n: "03",
    name: "Producción y pauta",
    body: "Grabamos, diseñamos y activamos campañas — todo con calendario y evidencia.",
  },
  {
    n: "04",
    name: "Datos y optimización",
    body: "Reporte mensual con métricas reales y ajustes continuos: lo que no funciona, se corrige.",
  },
];

// 7-oct-2026: el método se recorre solo (un paso cada 3,5 s mientras se ve) y con el cursor.
// Una línea arriba se llena hasta el paso activo. Sin JS / movimiento reducido: los 4 iguales.
const MS = 3500;

export default function Method() {
  const ref = useRef(null);
  const [activo, setActivo] = useState(0);
  const [visible, setVisible] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!visible || manual || quieto) return;
    const t = setTimeout(() => setActivo((a) => (a + 1) % steps.length), MS);
    return () => clearTimeout(t);
  }, [visible, manual, activo]);

  return (
    <section id="metodo" className="bg-navy-deep section-y">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <Reveal>
          <p className="kicker mb-4">Cómo trabajamos</p>
        </Reveal>
        <Reveal mask delay={80}>
          <h2 className="font-heading text-white text-heading mb-12 max-w-[620px]">
            Un método, cualquier industria.
          </h2>
        </Reveal>

        <div ref={ref} onMouseLeave={() => setManual(false)}>
          {/* Línea de avance */}
          <div className="hidden md:block relative h-[3px] bg-white/10 mb-6" aria-hidden="true">
            <div
              className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out"
              style={{ width: `${((activo + 1) / steps.length) * 100}%` }}
            />
          </div>
          <ol className="grid md:grid-cols-4 gap-4">
            {steps.map((s, i) => {
              const on = i === activo;
              const hecho = i < activo;
              return (
                <li key={s.n}>
                  <button
                    type="button"
                    onMouseEnter={() => { setManual(true); setActivo(i); }}
                    onFocus={() => { setManual(true); setActivo(i); }}
                    onClick={() => { setManual(true); setActivo(i); }}
                    aria-pressed={on}
                    className={`metodo-paso w-full h-full flex flex-col justify-start text-left p-7 border transition-all duration-500 ${
                      on
                        ? "bg-white/[0.07] border-accent -translate-y-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                        : "bg-transparent border-white/15 hover:border-white/35"
                    }`}
                  >
                    <span
                      className={`display-num block text-[44px] leading-none mb-4 transition-colors duration-500 ${
                        on ? "text-accent" : hecho ? "text-accent/60" : "text-white/25"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span className="block font-heading text-white text-[22px] mb-2.5">{s.name}</span>
                    <span
                      className={`block text-[14px] leading-[1.75] transition-colors duration-500 ${
                        on ? "text-white" : "text-white/60"
                      }`}
                    >
                      {s.body}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
