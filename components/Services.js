"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { WA_ASESORIA } from "./constants";

// Frente: el servicio y lo que gana el cliente. Reverso: qué incluye + el llamado.
const services = [
  {
    name: "Estrategia y asesoría comercial",
    benefit: "Saber qué decir, a quién y por qué, antes de gastar un dólar.",
    incluye: [
      "Reunión con nuestra estratega",
      "Análisis de tu mercado y tu competencia",
      "Brief que tú apruebas antes de producir",
      "Acompañamiento comercial para que cierres mejor",
    ],
  },
  {
    name: "Campañas publicitarias",
    benefit: "Que te escriba gente interesada, no solo que te vean.",
    incluye: [
      "Meta Ads; TikTok y Google Ads según tu plan",
      "Campañas que llevan a tu WhatsApp o formulario",
      "Reporte mensual: cuánto se invirtió y qué se consiguió",
      "La pauta la pagas tú, directo a la plataforma",
    ],
  },
  {
    name: "Producción de contenido",
    benefit: "Contenido 100% humano que muestra tu negocio real.",
    incluye: [
      "Reels, posts y carruseles con copys de venta",
      "Grabación en tu negocio con cámara, luz y micrófono",
      "O editamos el material que tú nos envías",
      "Hasta 3 correcciones por pieza",
    ],
  },
  {
    name: "Gestión de redes",
    benefit: "Tus redes activas y ordenadas, sin que tengas que pensar en ellas.",
    incluye: [
      "Facebook e Instagram desde el plan Básico",
      "TikTok desde el plan Crecimiento",
      "Calendario y publicación de cada pieza",
      "Grupo de WhatsApp directo con el equipo",
    ],
  },
  {
    name: "Google Maps para tu negocio",
    benefit: "Que te encuentren cuando buscan lo que vendes cerca.",
    incluye: [
      "Ficha creada y verificada",
      "Optimizada con fotos, horarios y servicios",
      "Incluida desde el plan Estándar",
      "Gestionada en el plan Avanzado",
    ],
  },
  {
    name: "Páginas web",
    benefit: "Tu negocio en internet, listo para recibir clientes por WhatsApp.",
    incluye: [
      "Página Express: $60, pago único",
      "Profesional: $120, con tu .com a tu nombre",
      "Tienda online: $250, pago único",
      "Desde el 2.º año: $100 al año de mantenimiento",
    ],
  },
  {
    name: "Asistente automático de WhatsApp",
    benefit: "Respondes al instante, de día y de noche.",
    incluye: [
      "Configurado con tus precios, horarios y tono",
      "Cada contacto queda ordenado",
      "Mantenimiento y ajustes mensuales",
      "Desde $150 de instalación + mensualidad",
    ],
  },
  {
    name: "CRM HubSpot",
    benefit: "Ni un cliente perdido en el camino.",
    incluye: [
      "Implementación a la medida de tu negocio",
      "Cada lead con su seguimiento y su historial",
      "Embudo de ventas claro para tu equipo",
      "Desde $200 + $50/mes de gestión",
    ],
  },
];

// En pantallas con mouse la tarjeta se voltea al pasar; en táctiles, al tocar.
const conMouse = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function FlipCard({ s }) {
  const [volteada, setVolteada] = useState(false);

  return (
    <div
      className={`flip h-full ${volteada ? "is-flipped" : ""}`}
      onMouseEnter={() => conMouse() && setVolteada(true)}
      onMouseLeave={() => conMouse() && setVolteada(false)}
    >
      <div className="flip-inner h-full">
        {/* Frente */}
        <button
          type="button"
          onClick={() => setVolteada(true)}
          aria-expanded={volteada}
          inert={volteada}
          className="flip-front text-left bg-white border border-line p-7 flex flex-col min-h-[260px] hover:border-accent transition-colors"
        >
          <h3 className="font-heading text-navy text-[24px] leading-tight mb-3">{s.name}</h3>
          <p className="text-[15px] leading-[1.7] text-ink-soft flex-1">{s.benefit}</p>
          <span className="mt-6 text-[13px] text-accent-deep tracking-[0.02em]">
            Ver qué incluye <span aria-hidden="true">↻</span>
          </span>
        </button>

        {/* Reverso */}
        <div
          inert={!volteada}
          aria-hidden={!volteada}
          className="flip-back bg-navy-deep border border-navy-deep p-7 flex flex-col min-h-[260px]"
        >
          <p className="kicker !text-[10.5px] mb-3">{s.name}</p>
          <ul className="text-[13.5px] leading-[1.75] text-white/85 space-y-1.5 flex-1">
            {s.incluye.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={WA_ASESORIA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid mt-5 !px-4 !text-[13px]"
          >
            Quiero mi asesoría gratis
          </a>
          <button
            type="button"
            onClick={() => setVolteada(false)}
            className="mt-3 text-[12.5px] text-white/60 hover:text-white transition-colors"
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20 md:pb-28">
      <Reveal>
        <p className="kicker mb-4">Servicios</p>
      </Reveal>
      <Reveal mask delay={80}>
        <h2 className="font-heading text-navy text-heading mb-4 max-w-[640px]">
          Mucho más que piezas gráficas.
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="text-[15px] leading-[1.75] text-ink-soft max-w-[600px] mb-10">
          Toca o pasa el mouse por cada tarjeta para ver qué incluye. Todo se combina en un plan
          mensual, o se contrata por separado.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={(i % 4) * 90} className="h-full">
            <FlipCard s={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
