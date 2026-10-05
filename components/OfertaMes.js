"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { WA_NUMBER } from "./constants";

// Oferta del mes (fuente: agencia/comercial/proforma/oferta-vigente.md).
// Candados: el regalo es la web, NO posts de regalo; el Básico es Facebook e Instagram (sin TikTok).
// Se apaga sola al vencer: cambiar OFERTA cada día 1 con lo que diga Daniel.
const OFERTA = {
  mes: "octubre",
  hasta: "2026-10-31",
};

const wa = (t) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;

const CARDS = [
  {
    tag: "Promo de octubre",
    title: "Tu página web de regalo",
    body: "Con el plan Básico con grabación (USD 160/mes). Una página con tu material, lista para recibir clientes por WhatsApp.",
    img: "/portafolio/webs/gruas-montacargas-escritorio.webp",
    href: wa("Hola InnovArtis, quiero la promo de octubre: plan con grabación + página web de regalo."),
    promo: true,
  },
  {
    tag: "Nuevo servicio",
    title: "Google Ads",
    body: "Aparece cuando te buscan en Google. Campañas de búsqueda que llevan a tu WhatsApp o a una llamada.",
    img: "/evidencia/foto-set-fabrica.jpg",
    href: "/google-ads",
  },
  {
    tag: "Plan más pedido",
    title: "Básico: USD 130 / 160",
    body: "2 reels, 2 posts y 1 carrusel al mes, con 2 campañas en Meta Ads hacia tu WhatsApp.",
    img: "/evidencia/foto-sesion-salon.jpg",
    href: "/planes",
  },
  {
    tag: "Tu marca, tu dominio",
    title: "Dominio .com a tu nombre",
    body: "Súmale a la web tu propio .com por USD 40, pago único. El dominio queda registrado a tu nombre.",
    img: "/portafolio/webs/pachy-escritorio.webp",
    href: "/webs",
    promo: true,
  },
];

export default function OfertaMes({ id = "oferta" }) {
  const [vigente, setVigente] = useState(true);
  useEffect(() => {
    // La fecha se mira en el navegador: la página puede haberse construido antes de que venza la promo.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVigente(new Date() <= new Date(`${OFERTA.hasta}T23:59:59-05:00`));
  }, []);

  const cards = vigente ? CARDS : CARDS.filter((c) => !c.promo);

  return (
    <section id={id} className="section-y">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle
          kicker={vigente ? `Oferta del mes · ${OFERTA.mes}` : "Destacados"}
          title="Promociones y destacados"
          action={
            <a href="/planes" className="text-[14px] font-bold text-navy hover:text-accent-deep">
              Ver todos los planes →
            </a>
          }
        >
          {vigente && (
            <p>
              Válida para quien firma hasta el <strong className="text-ink">31 de octubre de 2026</strong>. La web se
              entrega después del primer pago completo.
            </p>
          )}
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative block h-[340px] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(44,74,99,0.14)]"
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-darker via-navy-darker/70 to-navy-darker/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="badge bg-accent text-white mb-3">{c.tag}</span>
                <h3 className="text-[21px] font-extrabold leading-tight mb-2">{c.title}</h3>
                <p className="text-[13.5px] leading-[1.6] text-white/85">{c.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
