"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { WA_NUMBER } from "./constants";

const PLANS = [
  {
    id: "corporativo",
    tier: "A la medida",
    name: "Corporativo",
    price: null,
    priceLabel: "Cotización personalizada",
    focus: "Estrategia integral con datos para empresas que quieren escalar en serio.",
    features: [
      "Estrategia y acompañamiento dedicados",
      "Campañas Meta + TikTok + Google",
      "CRM HubSpot con embudo completo",
      "Automatización y agentes IA",
      "Producción audiovisual a la escala que necesites",
    ],
    highlight: false,
    corporate: true,
  },
  {
    id: "profesional",
    tier: "Nivel 03",
    name: "Profesional",
    price: 250,
    focus: "Crecimiento agresivo: Meta + TikTok con producción completa.",
    features: [
      "5 artes + 3 carruseles + 5 videos",
      "Grabación profesional incluida",
      "Campañas Meta Ads + TikTok Ads",
      "Reporte con CTR, CPL y ROAS",
      "Optimización continua de presupuesto",
    ],
    highlight: false,
  },
  {
    id: "estandar",
    tier: "Nivel 02",
    name: "Estándar",
    price: 180,
    focus: "Contenido y pauta juntos, con grabación incluida.",
    features: [
      "3 artes + 2 carruseles + 3 videos",
      "Grabación profesional incluida",
      "Campañas en Meta Ads",
      "Calendario + reporte mensual",
      "Optimización enfocada en ventas",
    ],
    highlight: true,
  },
  {
    id: "basico",
    tier: "Nivel 01",
    name: "Básico",
    price: 130,
    focus: "El punto de partida para una presencia sólida.",
    features: [
      "2 artes + 1 carrusel + 2 videos",
      "Instagram, Facebook y TikTok",
      "Calendario de publicación",
      "El cliente envía el material",
    ],
    highlight: false,
  },
];

const EXTRAS = [
  { id: "arte", label: "Arte adicional", unit: 3, type: "count", max: 10 },
  { id: "pieza", label: "Carrusel o reel adicional", unit: 6, type: "count", max: 10 },
  { id: "jornada", label: "Jornada extra de grabación", unit: 20, type: "count", max: 4 },
  { id: "crm", label: "CRM HubSpot para tu empresa", type: "quote" },
  { id: "web", label: "Diseño y desarrollo web", type: "quote" },
  { id: "ia", label: "Agente IA de WhatsApp", type: "quote" },
];

export default function PlansSection() {
  const [selected, setSelected] = useState("estandar");
  const [counts, setCounts] = useState({ arte: 0, pieza: 0, jornada: 0 });
  const [quotes, setQuotes] = useState({ crm: false, web: false, ia: false });

  const plan = PLANS.find((p) => p.id === selected);

  const extrasTotal = useMemo(
    () => EXTRAS.filter((e) => e.type === "count").reduce((sum, e) => sum + counts[e.id] * e.unit, 0),
    [counts]
  );

  const quoteItems = EXTRAS.filter((e) => e.type === "quote" && quotes[e.id]);
  const total = plan.price != null ? plan.price + extrasTotal : null;

  const waMessage = useMemo(() => {
    const lines = [`Hola InnovArtis, armé mi plan en la web:`, `• Plan ${plan.name}${plan.price != null ? ` ($${plan.price}/mes)` : " (cotización personalizada)"}`];
    EXTRAS.forEach((e) => {
      if (e.type === "count" && counts[e.id] > 0)
        lines.push(`• ${e.label} × ${counts[e.id]} (+$${counts[e.id] * e.unit})`);
    });
    quoteItems.forEach((e) => lines.push(`• ${e.label} (a cotizar)`));
    if (total != null) lines.push(`Total estimado: $${total}/mes`);
    lines.push("¿Me ayudan con el siguiente paso?");
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [plan, counts, quoteItems, total]);

  return (
    <section id="planes" className="max-w-[1150px] mx-auto px-6 py-20">
      <Reveal>
        <p className="kicker mb-4">Planes y calculadora</p>
        <h2 className="font-heading text-navy text-[36px] md:text-[44px] leading-[1.12] mb-4 max-w-[680px]">
          Inversión transparente y estandarizada.
        </h2>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-12">
          Precios claros, sin regateo: elige tu punto de partida y arma tu plan al instante. ¿Tu
          empresa necesita algo más grande? Los proyectos corporativos se cotizan a la medida.
        </p>
      </Reveal>

      {/* Planes: premium primero */}
      <div className="grid md:grid-cols-4 gap-5 mb-14">
        {PLANS.map((p, i) => (
          <Reveal key={p.id} delay={i * 90} className="h-full">
            <button
              onClick={() => setSelected(p.id)}
              className={`text-left w-full h-full flex flex-col p-7 transition-colors border ${
                p.corporate ? "bg-navy-deep" : "bg-white"
              } ${
                selected === p.id
                  ? "border-accent shadow-[0_0_0_1px_#ee7b4d]"
                  : p.corporate
                    ? "border-navy-deep hover:border-accent/60"
                    : "border-line hover:border-accent/60"
              }`}
            >
              <p className={`kicker !text-[10px] mb-2 ${p.corporate ? "!text-accent" : ""}`}>{p.tier}</p>
              <h3 className={`font-heading text-[26px] mb-1 ${p.corporate ? "text-white" : "text-navy"}`}>
                {p.name}
                {p.highlight && (
                  <span className="ml-2 align-middle text-[10px] font-body font-semibold tracking-[0.08em] uppercase bg-accent/15 text-accent-deep px-2 py-1">
                    Más elegido
                  </span>
                )}
              </h3>
              {p.price != null ? (
                <p className="mb-3">
                  <span className={`display-num text-[36px] ${p.corporate ? "text-white" : "text-navy"}`}>
                    ${p.price}
                  </span>
                  <span className={`text-[13px] ${p.corporate ? "text-white/60" : "text-ink-soft"}`}>/mes</span>
                </p>
              ) : (
                <p className={`text-[15px] italic mb-3 ${p.corporate ? "text-white/85" : "text-ink-soft"}`}>
                  {p.priceLabel}
                </p>
              )}
              <p className={`text-[13.5px] leading-[1.65] mb-4 ${p.corporate ? "text-white/70" : "text-ink-soft"}`}>
                {p.focus}
              </p>
              <ul className={`text-[13px] leading-[1.9] mt-auto ${p.corporate ? "text-white/80" : "text-ink-soft"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Calculadora */}
      <Reveal>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] border border-line bg-white">
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-line">
            <h3 className="font-heading text-navy text-[26px] mb-1.5">Arma tu plan en vivo</h3>
            <p className="text-[14px] text-ink-soft mb-7">
              Plan base: <strong className="text-ink">{plan.name}</strong>
              {plan.price != null ? ` — $${plan.price}/mes` : " — cotización personalizada"} (cámbialo
              arriba). Suma lo que necesites:
            </p>

            <div className="space-y-4">
              {EXTRAS.filter((e) => e.type === "count").map((e) => (
                <div key={e.id} className="flex items-center justify-between gap-4">
                  <p className="text-[14.5px] text-ink">
                    {e.label} <span className="text-ink-soft text-[13px]">(+${e.unit} c/u)</span>
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCounts((c) => ({ ...c, [e.id]: Math.max(0, c[e.id] - 1) }))}
                      className="w-8 h-8 border border-line text-navy hover:border-accent transition-colors"
                      aria-label={`Quitar ${e.label}`}
                    >
                      −
                    </button>
                    <span className="display-num text-[18px] text-navy w-6 text-center">{counts[e.id]}</span>
                    <button
                      onClick={() => setCounts((c) => ({ ...c, [e.id]: Math.min(e.max, c[e.id] + 1) }))}
                      className="w-8 h-8 border border-line text-navy hover:border-accent transition-colors"
                      aria-label={`Agregar ${e.label}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <hr className="hairline !my-6" />

              {EXTRAS.filter((e) => e.type === "quote").map((e) => (
                <label key={e.id} className="flex items-center justify-between gap-4 cursor-pointer">
                  <p className="text-[14.5px] text-ink">
                    {e.label} <span className="text-ink-soft text-[13px]">(se cotiza aparte)</span>
                  </p>
                  <input
                    type="checkbox"
                    checked={quotes[e.id]}
                    onChange={(ev) => setQuotes((q) => ({ ...q, [e.id]: ev.target.checked }))}
                    className="w-4.5 h-4.5 accent-[#ee7b4d]"
                  />
                </label>
              ))}
            </div>

            <p className="mt-7 text-[12.5px] leading-[1.7] text-ink-soft">
              La inversión en pauta publicitaria (lo que se paga directamente a Meta, Google o TikTok)
              es adicional y la cubre el cliente. El valor mensual se cancela 50% al inicio y 50% al
              finalizar el mes.
            </p>
          </div>

          <div className="p-8 md:p-10 bg-paper-soft flex flex-col">
            <p className="kicker !text-[10.5px] mb-3">Tu estimado</p>
            {total != null ? (
              <p className="mb-2">
                <span className="display-num text-navy text-[56px] leading-none">${total}</span>
                <span className="text-[14px] text-ink-soft">/mes</span>
              </p>
            ) : (
              <p className="font-heading text-navy text-[30px] leading-tight mb-2">A la medida de tu empresa</p>
            )}
            {quoteItems.length > 0 && (
              <p className="text-[13px] text-ink-soft mb-2">
                + {quoteItems.map((e) => e.label).join(" · ")} (cotización aparte)
              </p>
            )}
            <p className="text-[13.5px] leading-[1.7] text-ink-soft mb-7">
              Sin letra pequeña: este es el mismo precio estandarizado que firmamos en contrato.
            </p>
            <a
              href={waMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid w-full mt-auto"
            >
              Enviar mi plan por WhatsApp
            </a>
            <p className="text-[12px] text-ink-soft mt-3 text-center">
              Te llega directo a nuestro WhatsApp con el detalle de tu selección.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
