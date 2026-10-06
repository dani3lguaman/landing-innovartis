"use client";

import { useEffect, useState } from "react";
import { WA_ASESORIA } from "./constants";

// Portada estilo AQUABEC v2: banda navy, titular con remate naranja y un carrusel de fotos reales
// (cada foto con el dato de ESE cliente; nunca mezclar foto de uno con cifra de otro). Cambia sola cada 5 s; se pausa al pasar el mouse; puntos para elegir.
const SLIDES = [
  { img: "/img/hero-produccion.webp", alt: "Grabación en el local de Remy EC", num: "9.512", txt: "conversaciones por WhatsApp para Remy EC en 12 meses" },
  { img: "/portafolio/inyecpro/reel-vasos-1mil.webp", alt: "Reel de InyecPro en Facebook", num: "1.729", txt: "conversaciones para InyecPro, fábrica de plásticos" },
  { img: "/portafolio/webs/gruas-montacargas-escritorio.webp", alt: "Página web de Grúas y Montacargas Joel Trans", num: "11", txt: "páginas en la web de Grúas Joel Trans, con cotizador" },
  { img: "/portafolio/pachy/d-mateo-post-1.webp", alt: "Arte de Pachy Limpieza Profesional", num: "2.508", txt: "conversaciones para Pachy Limpieza en 2026" },
  { img: "/portafolio/metallum/d-post-propuesta.webp", alt: "Arte para Metallum", num: "452", txt: "clientes potenciales para Metallum en 12 meses" },
];

export default function HomeHero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const s = SLIDES[i];

  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-white/70 mb-5 flex items-center gap-3">
            <span className="w-8 h-[3px] bg-accent rounded" /> Agencia de marketing · Quito, Ecuador
          </p>
          <h1 className="font-heading text-display mb-6">
            Más clientes por WhatsApp, <span className="text-accent">con estrategia</span> y no con suerte.
          </h1>
          <p className="text-[17px] leading-[1.75] text-white/80 max-w-[540px] mb-9">
            Campañas en Meta y Google, contenido grabado en tu negocio, páginas web y asistentes
            automáticos de WhatsApp. Todo medido con los números reales de tu cuenta.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Quiero mi asesoría gratis
            </a>
            <a href="/resultados" className="btn-outline-light">
              Ver resultados reales
            </a>
          </div>
        </div>

        <figure
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carrusel"
          aria-label="Trabajo real de InnovArtis"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl bg-navy-deep">
            {SLIDES.map((x, k) => (
              <img
                key={x.img}
                src={x.img}
                alt={x.alt}
                loading={k === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ${
                  k === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                aria-hidden={k !== i}
              />
            ))}
          </div>
          <figcaption
            key={s.num}
            className="absolute -bottom-5 left-5 right-5 md:right-auto bg-white text-navy rounded-xl shadow-xl px-5 py-4 flex items-center gap-4 animate-[fadeUp_0.6s_ease]"
          >
            <span className="display-num text-[30px] text-accent-deep leading-none">{s.num}</span>
            <span className="text-[12.5px] leading-snug text-ink-soft max-w-[220px]">{s.txt}</span>
          </figcaption>
          <div className="absolute top-4 right-4 flex gap-1.5" role="tablist" aria-label="Elegir foto">
            {SLIDES.map((x, k) => (
              <button
                key={x.img}
                role="tab"
                aria-selected={k === i}
                aria-label={`Foto ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? "w-7 bg-accent" : "w-2 bg-white/70 hover:bg-white"}`}
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
