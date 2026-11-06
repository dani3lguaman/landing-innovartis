"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Tilt from "./Tilt";
import { WA_NUMBER } from "./constants";

// Oferta del mes (fuente: agencia/comercial/proforma/oferta-vigente.md).
// Candados: el regalo es la web, NO posts de regalo; el Básico es Facebook e Instagram (sin TikTok).
// Se apaga sola al vencer: cambiar OFERTA cada día 1 con lo que diga Daniel.
// 5-nov-2026 (Daniel: 8 piezas, 5 posts estáticos): el Básico trae 5 posts estáticos + 1 carrusel + 2 reels.
// Promo de noviembre: la web de regalo vuelve en los DOS planes (130 y 160), firmando hasta el vie 27-nov.
// En el de 160 la web y el catálogo digital son lo mismo (no se suman). Si quiere su .com, lo compra a su nombre y lo conectamos.
const OFERTA = {
  mes: "noviembre",
  hasta: "2026-11-27",
};

const wa = (t) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;

const CARDS = [
  {
    tag: "Promo de noviembre",
    title: "Tu página web de regalo",
    body: "Con el plan Básico de USD 130 o el de USD 160 al mes. Una página con tu material, lista para recibir clientes por WhatsApp.",
    img: "/portafolio/webs/gruas-montacargas-escritorio.webp",
    href: wa("Hola InnovArtis, quiero la promo de noviembre: plan Básico + página web de regalo."),
    promo: true,
  },
  {
    tag: "Nuevo servicio",
    title: "Google Ads",
    body: "Aparece cuando te buscan en Google. Campañas de búsqueda que llevan a tu WhatsApp o a una llamada.",
    img: "/portafolio/webs/fisioclub-quito-escritorio.webp",
    href: "/google-ads",
  },
  {
    tag: "Plan más pedido",
    title: "Básico: USD 130 / 160",
    body: "8 piezas al mes: 5 posts estáticos, 2 reels y 1 carrusel, con 2 campañas en Meta Ads hacia tu WhatsApp.",
    img: "/portafolio/medcentral/d-post-1.webp",
    href: "/planes",
  },
  {
    tag: "Tu marca, tu dominio",
    title: "Dominio .com a tu nombre",
    body: "¿Quieres tu propio .com? Lo compras a tu nombre y nosotros lo conectamos a tu página. El dominio queda siempre tuyo.",
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
              Válida para quien firma hasta el <strong className="text-ink">viernes 27 de noviembre de 2026</strong>, con
              el plan de USD 130 o el de USD 160. Un regalo por plan; la web se entrega después del primer pago completo.
            </p>
          )}
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <Tilt key={c.title}>
            <a
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
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
