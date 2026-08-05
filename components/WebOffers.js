import Reveal from "./Reveal";
import { WA_NUMBER } from "./constants";

const offers = [
  {
    name: "Landing page",
    price: "$120",
    priceNote: "pago único",
    focus: "Tu negocio online en una semana, listo para vender.",
    features: [
      "1 página profesional a tu marca",
      "Botón de WhatsApp y formulario de contacto",
      "Diseño adaptado a celular",
      "Publicada en tu dominio",
    ],
    wa: "Hola InnovArtis, quiero una landing page ($120) para mi negocio.",
  },
  {
    name: "Tienda online",
    price: "desde $300",
    priceNote: "según catálogo",
    focus: "Catálogo, carrito y pedidos directo a tu WhatsApp.",
    features: [
      "Catálogo de productos administrable",
      "Pedidos por WhatsApp o pasarela de pago",
      "Diseño a tu marca, rápido y en celular",
      "Capacitación para que la manejes tú",
    ],
    wa: "Hola InnovArtis, quiero cotizar una tienda online (desde $300).",
  },
  {
    name: "Agente IA de WhatsApp",
    price: "desde $150",
    priceNote: "instalación + mensualidad",
    focus: "Atiende, agenda y registra clientes 24/7 — como la demo de arriba.",
    features: [
      "Configurado con tus precios, horarios y tono",
      "Responde al instante, de día y de noche",
      "Cada contacto queda ordenado en tu CRM",
      "Mantenimiento y ajustes mensuales incluidos",
    ],
    wa: "Hola InnovArtis, quiero un agente IA de WhatsApp para mi negocio.",
    featured: true,
  },
];

export default function WebOffers() {
  return (
    <section id="web" className="max-w-[1150px] mx-auto px-6 py-20">
      <Reveal>
        <p className="kicker mb-4">Nuevo · Páginas web y agentes IA</p>
        <h2 className="font-heading text-navy text-[36px] md:text-[44px] leading-[1.12] mb-4 max-w-[680px]">
          Tienes online lo que necesita tu negocio.
        </h2>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-12">
          Esta misma página que estás viendo la diseñamos y desarrollamos nosotros. Hacemos lo mismo
          por tu negocio: precios claros, entrega rápida y todo conectado a tu WhatsApp.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((o, i) => (
          <Reveal key={o.name} delay={i * 100} className="h-full">
            <div
              className={`h-full flex flex-col bg-white border p-8 transition-colors hover:border-accent ${
                o.featured ? "border-accent" : "border-line"
              }`}
            >
              <h3 className="font-heading text-navy text-[26px] mb-1">{o.name}</h3>
              <p className="mb-1">
                <span className="display-num text-navy text-[34px]">{o.price}</span>
              </p>
              <p className="text-[12px] uppercase tracking-[0.12em] text-accent-deep mb-4">
                {o.priceNote}
              </p>
              <p className="text-[14.5px] leading-[1.7] text-ink-soft mb-5">{o.focus}</p>
              <ul className="text-[13.5px] leading-[2] text-ink-soft mb-7">
                {o.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(o.wa)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${o.featured ? "btn-solid" : "btn-outline"} w-full mt-auto`}
              >
                Lo quiero →
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-[13px] text-ink-soft italic">
          El dominio (tu dirección .com) lo paga el cliente — te asesoramos para comprarlo. La
          mensualidad del agente IA depende del volumen de conversaciones de tu negocio.
        </p>
      </Reveal>
    </section>
  );
}
