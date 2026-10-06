"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { WA_ASESORIA } from "./constants";

const INTERVALO = 6500;

// Ofertas vigentes (oct-2026). Fuente: agencia/comercial/proforma/oferta-vigente.md.
const SLIDES = [
  {
    id: "promo-octubre",
    kicker: "Promoción de octubre",
    titulo: "Tu página web va de regalo.",
    texto:
      "Contrata tu plan con grabación y te entregamos una página para tu negocio, lista para recibir clientes por WhatsApp. Valor regular $120.",
    detalle: "Válida para quienes firman hasta el 31 de octubre de 2026 · se entrega después del primer pago completo.",
    precio: { valor: "Gratis", nota: "tu página web (valor regular $120) con el plan con grabación" },
    secundario: { href: "/planes", label: "Ver los planes" },
  },
  {
    id: "plan-basico",
    kicker: "Plan Básico · Facebook e Instagram",
    titulo: "Estrategia, contenido y campañas desde $130 al mes.",
    texto:
      "Asesoría con nuestra estratega, 2 reels, 2 posts, 1 carrusel y 2 campañas en Meta Ads que llevan a tu WhatsApp. Con reporte mensual.",
    detalle: "$130/mes con tu material · $160/mes con 1 hora de grabación en tu negocio. La pauta se paga aparte, directo a Meta.",
    precio: { valor: "$130", nota: "al mes, con tu material" },
    secundario: { href: "/planes", label: "Ver qué incluye" },
  },
  {
    id: "asesoria",
    kicker: "Sin compromiso",
    titulo: "Asesoría gratis de 10 minutos.",
    texto:
      "Te llamamos por WhatsApp, revisamos tu negocio y te decimos qué haríamos en tu caso y cuánto costaría. Tú decides después.",
    detalle: "Una conversación con alguien de nuestro equipo, no un vendedor leyendo un guion.",
    precio: { valor: "10", nota: "minutos por WhatsApp, sin costo y sin compromiso" },
    secundario: { href: "/servicios", label: "Ver servicios" },
  },
  {
    id: "web",
    kicker: "Páginas web · pago único",
    titulo: "Tu página web desde $60.",
    texto:
      "Express $60 · Profesional $120 con tu dominio .com registrado a tu nombre · Tienda online $250. Todas con botón de WhatsApp y adaptadas a celular.",
    detalle: "Desde el segundo año, mantenerla al aire cuesta $100 al año.",
    precio: { valor: "$60", nota: "pago único, Página Express" },
    secundario: { href: "/planes#web", label: "Comparar páginas" },
  },
];

export default function OfferSlider() {
  const [actual, setActual] = useState(0);
  const [pausadoUsuario, setPausadoUsuario] = useState(false);
  const [pausadoHover, setPausadoHover] = useState(false);
  const [reducido, setReducido] = useState(false);
  const toque = useRef(null);
  const total = SLIDES.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducido(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const ir = useCallback((i) => setActual(((i % total) + total) % total), [total]);

  const corriendo = !pausadoUsuario && !pausadoHover && !reducido;

  useEffect(() => {
    if (!corriendo) return;
    const t = setTimeout(() => setActual((a) => (a + 1) % total), INTERVALO);
    return () => clearTimeout(t);
  }, [corriendo, actual, total]);

  const onTouchStart = (e) => {
    toque.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (toque.current == null) return;
    const dx = e.changedTouches[0].clientX - toque.current;
    if (Math.abs(dx) > 45) ir(actual + (dx < 0 ? 1 : -1));
    toque.current = null;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") ir(actual + 1);
    if (e.key === "ArrowLeft") ir(actual - 1);
  };

  return (
    <section className="max-w-[1150px] mx-auto px-4 md:px-6 pb-14 md:pb-20" aria-labelledby="ofertas-titulo">
      <h2 id="ofertas-titulo" className="sr-only">
        Ofertas vigentes
      </h2>
      <div
        role="region"
        aria-roledescription="carrusel"
        aria-label="Ofertas de InnovArtis"
        className="relative bg-navy-deep text-white overflow-hidden"
        onMouseEnter={() => setPausadoHover(true)}
        onMouseLeave={() => setPausadoHover(false)}
        onFocus={() => setPausadoHover(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPausadoHover(false);
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
      >
        <div className="grid" aria-live={corriendo ? "off" : "polite"}>
          {SLIDES.map((s, i) => {
            const activo = i === actual;
            return (
              <div
                key={s.id}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${total}: ${s.kicker}`}
                aria-hidden={!activo}
                inert={!activo}
                className={`col-start-1 row-start-1 px-6 pt-10 pb-24 md:px-14 md:pt-14 md:pb-24 grid md:grid-cols-[1.35fr_0.65fr] gap-8 md:gap-12 items-center ${
                  reducido ? "" : "transition-opacity duration-700"
                } ${activo ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div>
                  <p className="kicker mb-4">{s.kicker}</p>
                  <p className="font-heading text-white text-[32px] md:text-[46px] leading-[1.08] mb-4">
                    {s.titulo}
                  </p>
                  <p className="text-[15.5px] leading-[1.75] text-white/80 max-w-[560px] mb-3">
                    {s.texto}
                  </p>
                  <p className="text-[12.5px] leading-[1.6] text-white/55 max-w-[560px] mb-7">
                    {s.detalle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={WA_ASESORIA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid"
                    >
                      Quiero mi asesoría gratis
                    </a>
                    <Link href={s.secundario.href} className="btn-outline-light">
                      {s.secundario.label}
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block border-l border-white/15 pl-10">
                  <p className="display-num text-accent text-[88px] leading-none mb-3">
                    {s.precio.valor}
                  </p>
                  <p className="text-[14px] text-white/70 max-w-[200px]">{s.precio.nota}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles */}
        <div className="absolute left-0 right-0 bottom-0 px-6 md:px-14 pb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => ir(i)}
                aria-label={`Ir a la oferta ${i + 1}: ${s.kicker}`}
                aria-current={i === actual ? "true" : undefined}
                className="w-8 h-8 flex items-center justify-center"
              >
                <span
                  className={`block h-[3px] transition-all ${
                    i === actual ? "w-6 bg-accent" : "w-3 bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPausadoUsuario((p) => !p)}
              aria-label={pausadoUsuario ? "Reanudar el carrusel" : "Pausar el carrusel"}
              className="w-10 h-10 border border-white/25 flex items-center justify-center text-white/80 hover:border-accent hover:text-white transition-colors"
            >
              {pausadoUsuario ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 4v16l14-8z" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => ir(actual - 1)}
              aria-label="Oferta anterior"
              className="w-10 h-10 border border-white/25 flex items-center justify-center text-white/80 hover:border-accent hover:text-white transition-colors"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => ir(actual + 1)}
              aria-label="Oferta siguiente"
              className="w-10 h-10 border border-white/25 flex items-center justify-center text-white/80 hover:border-accent hover:text-white transition-colors"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
