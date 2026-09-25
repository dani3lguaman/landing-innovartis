import Reveal from "./Reveal";
import { WA_NUMBER } from "./constants";

const offers = [
  {
    name: "Página Express",
    price: "$60",
    priceNote: "pago único · en dirección tunegocio.pages.dev",
    focus: "Tu negocio en internet en días, con botón de WhatsApp.",
    features: [
      "1 página con tus servicios, fotos y contacto",
      "Botón de WhatsApp y llamada",
      "Diseño adaptado a celular",
      "1 ronda de cambios antes de publicar",
      "Pasas a tu .com cuando quieras pagando solo la diferencia",
    ],
    wa: "Hola InnovArtis, quiero la Página Express ($60) para mi negocio.",
  },
  {
    name: "Página Profesional",
    price: "$120",
    priceNote: "pago único · tu dominio .com a tu nombre",
    focus: "Tu negocio en Google, listo para recibir clientes.",
    features: [
      "1 página profesional a tu marca",
      "El dominio .com se registra a TU nombre — es tuyo, no nuestro",
      "WhatsApp, llamada, cotizador y preguntas frecuentes",
      "Preparada para Google y Google Maps",
      "3 rondas de cambios · primer año al aire incluido",
    ],
    wa: "Hola InnovArtis, quiero la Página Profesional ($120, con el dominio a mi nombre) para mi negocio.",
    featured: true,
  },
  {
    name: "Tienda online",
    price: "$250",
    priceNote: "pago único · el dominio queda a tu nombre",
    focus: "Catálogo, carrito y pedidos directo a tu WhatsApp.",
    features: [
      "Catálogo de productos administrable",
      "El dominio se registra a TU nombre — es tuyo, no nuestro",
      "Pedidos por WhatsApp o pasarela de pago",
      "Diseño a tu marca, rápido y en celular",
      "Capacitación para que la manejes tú",
    ],
    wa: "Hola InnovArtis, quiero cotizar una tienda online ($250).",
  },
  {
    name: "Asistente automático de WhatsApp",
    price: "desde $150",
    priceNote: "instalación + mensualidad",
    focus: "Atiende, agenda y registra clientes 24/7 — como la demo de arriba.",
    features: [
      "Configurado con tus precios, horarios y tono",
      "Responde al instante, de día y de noche",
      "Cada contacto queda ordenado en tu CRM",
      "Mantenimiento y ajustes mensuales incluidos",
    ],
    wa: "Hola InnovArtis, quiero un asistente automático de WhatsApp para mi negocio.",
  },
];

export default function WebOffers() {
  return (
    <section id="web" className="max-w-[1150px] mx-auto px-6 py-20">
      <Reveal>
        <p className="kicker mb-4">Nuevo · Páginas web y asistentes de WhatsApp</p>
        <h2 className="font-heading text-navy text-[36px] md:text-[44px] leading-[1.12] mb-4 max-w-[680px]">
          Tienes online lo que necesita tu negocio.
        </h2>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-12">
          Esta misma página que estás viendo la diseñamos y desarrollamos nosotros. Hacemos lo mismo
          por tu negocio: precios claros, entrega rápida y todo conectado a tu WhatsApp.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
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
        <p className="mt-8 text-[13px] leading-[1.8] text-ink-soft italic">
          Los números completos, desde hoy: la página se construye una sola vez. Con la{" "}
          <strong className="not-italic text-ink">Profesional ($120)</strong> tu dominio .com queda
          registrado a tu nombre: si un día te quieres ir, te lo llevas. Desde el segundo año,
          mantenerla al aire cuesta <strong className="not-italic text-ink">$100 al año</strong>, con
          hosting, seguridad y dos rondas de cambios. La{" "}
          <strong className="not-italic text-ink">Express ($60)</strong> vive en una dirección
          .pages.dev y pasa a .com pagando solo la diferencia. ¿Das clases? Tu plataforma de cursos
          propia cuesta $500. La mensualidad del asistente depende del volumen de conversaciones de tu
          negocio.
        </p>
      </Reveal>
    </section>
  );
}
