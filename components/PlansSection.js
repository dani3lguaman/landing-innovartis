"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { WA_NUMBER } from "./constants";

// Precios al público, tomados de los contratos firmados.
// NO confundir con las tarifas internas de producción ni con los márgenes
// (agencia/metodologia/...) — esos números no van nunca a la web.
const PLANS = [
  {
    id: "basico",
    tier: "Nivel 01",
    name: "Básico",
    price: { sin: 130, con: 160 },
    focus: "El punto de partida para una presencia sólida.",
    features: [
      "2 artes estáticos + 2 videos cortos",
      "1 carrusel estratégico (hasta 3 imágenes)",
      "2 campañas activas en Meta Ads",
      "Instagram, Facebook y TikTok",
      "Copys de venta y reporte mensual",
    ],
    // Lo que cambia según haya o no grabación:
    sinGrabacion: "Tú nos envías el material y nosotros lo editamos",
    conGrabacion: "1 hora de grabación en tu negocio — luz, micrófono y movilización incluidos",
    highlight: false,
  },
  {
    id: "crecimiento",
    tier: "Nivel 02",
    name: "Crecimiento",
    price: { sin: 160, con: 190 },
    focus: "Presencia completa en las tres redes, con volumen real de contenido.",
    features: [
      "3 artes estáticos + 3 videos cortos (reels)",
      "2 carruseles — o 2 videos más, tú eliges, sin cambio de precio",
      "Redes creadas y gestionadas: Instagram, Facebook y TikTok",
      "Campañas activas en Meta Ads + TikTok Ads",
      "Grupo de WhatsApp directo con el equipo",
    ],
    sinGrabacion: "Tú nos envías el material y nosotros lo editamos",
    conGrabacion: "2 horas de grabación mensual en tu negocio",
    highlight: true,
  },
  {
    id: "estandar",
    tier: "Nivel 03",
    name: "Estándar",
    price: { sin: 230, con: 260 },
    focus: "Que además te encuentren cuando te buscan en Google.",
    features: [
      "4 artes estáticos + 4 videos cortos (reels)",
      "2 carruseles estratégicos",
      "Campañas en Meta Ads + TikTok Ads + Google Ads",
      "Google Maps: ficha creada, verificada y optimizada",
      "Reporte con CTR, CPL y costo por resultado",
    ],
    sinGrabacion: "Tú nos envías el material y nosotros lo editamos",
    conGrabacion: "3 horas de grabación mensual en tu negocio",
    highlight: false,
  },
  {
    id: "avanzado",
    tier: "Nivel 04",
    name: "Avanzado",
    price: { sin: 300, con: 330 },
    focus: "Todos los canales activos y ningún cliente perdido en el camino.",
    features: [
      "5 artes estáticos + 5 videos cortos (reels)",
      "3 carruseles estratégicos",
      "Campañas en Meta Ads + TikTok Ads + Google Ads",
      "CRM HubSpot montado: cada lead con seguimiento",
      "Google Maps optimizado y gestionado",
    ],
    sinGrabacion: "Tú nos envías el material y nosotros lo editamos",
    conGrabacion: "4 horas de grabación mensual en tu negocio",
    highlight: false,
  },
];

// Volumen alto: se venden hablando, no por clic. Se muestran compactos.
const HIGH_VOLUME = [
  {
    id: "plus",
    name: "Plus",
    price: { sin: 390, con: 420 },
    resumen: "20 piezas al mes · hasta 2 marcas · Meta + Google + TikTok Ads",
  },
  {
    id: "gold",
    name: "Gold",
    price: { sin: 480, con: 510 },
    resumen: "26 piezas · todo lo del Plus + agente IA de WhatsApp 24/7",
  },
  {
    id: "diamante",
    name: "Diamante",
    price: { sin: 540, con: 570 },
    resumen: "32 piezas · equipo dedicado + estrategia comercial acompañada",
  },
];

const CORPORATE = {
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
};

const ALL_PLANS = [...PLANS, ...HIGH_VOLUME, CORPORATE];

const EXTRA_GROUPS = [
  {
    title: "Contenido adicional",
    hint: "Piezas sueltas que se suman a tu plan del mes",
    items: [
      { id: "arte", label: "Arte adicional", unit: 15, type: "count", max: 10 },
      { id: "video", label: "Video adicional", unit: 30, type: "count", max: 10 },
      { id: "carrusel", label: "Carrusel de 3 imágenes", unit: 30, type: "count", max: 10 },
    ],
  },
  {
    title: "Producción en campo",
    hint: "Nuestro equipo va a tu local a grabar",
    items: [{ id: "jornada", label: "Jornada extra de grabación", unit: 40, type: "count", max: 4 }],
  },
  {
    title: "Web, CRM y automatización",
    hint: "Proyectos que se cobran aparte del plan mensual",
    items: [
      { id: "web", label: "Página web para tu negocio", note: "$150 único, dominio a tu nombre", type: "quote" },
      { id: "tienda", label: "Tienda online", note: "desde $300, dominio a tu nombre", type: "quote" },
      { id: "ia", label: "Agente IA de WhatsApp", note: "desde $150 + mensualidad", type: "quote" },
      { id: "crm", label: "CRM HubSpot montado a tu medida", note: "desde $200 + $50/mes", type: "quote" },
    ],
  },
];

const EXTRAS = EXTRA_GROUPS.flatMap((g) => g.items);
const COUNT_EXTRAS = EXTRAS.filter((e) => e.type === "count");

export default function PlansSection() {
  const [selected, setSelected] = useState("crecimiento");
  const [conGrabacion, setConGrabacion] = useState(true);
  const [counts, setCounts] = useState(() =>
    Object.fromEntries(COUNT_EXTRAS.map((e) => [e.id, 0]))
  );
  const [quotes, setQuotes] = useState({ web: false, tienda: false, ia: false, crm: false });

  const plan = ALL_PLANS.find((p) => p.id === selected);
  const priceOf = (p) => (p.price == null ? null : conGrabacion ? p.price.con : p.price.sin);
  const planPrice = priceOf(plan);

  const extrasTotal = useMemo(
    () => COUNT_EXTRAS.reduce((sum, e) => sum + counts[e.id] * e.unit, 0),
    [counts]
  );

  const quoteItems = EXTRAS.filter((e) => e.type === "quote" && quotes[e.id]);
  const total = planPrice != null ? planPrice + extrasTotal : null;

  const waMessage = useMemo(() => {
    const modalidad = conGrabacion ? "con grabación" : "sin grabación";
    const lines = [
      "Hola InnovArtis, armé mi plan en la web:",
      `• Plan ${plan.name}${
        planPrice != null ? ` ${modalidad} ($${planPrice}/mes)` : " (cotización personalizada)"
      }`,
    ];
    COUNT_EXTRAS.forEach((e) => {
      if (counts[e.id] > 0) lines.push(`• ${e.label} × ${counts[e.id]} (+$${counts[e.id] * e.unit})`);
    });
    quoteItems.forEach((e) => lines.push(`• ${e.label} (${e.note})`));
    if (total != null) lines.push(`Total estimado: $${total}/mes`);
    lines.push("¿Me ayudan con el siguiente paso?");
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [plan, planPrice, conGrabacion, counts, quoteItems, total]);

  const planCard = (p) => (
    <button
      onClick={() => setSelected(p.id)}
      className={`text-left w-full h-full flex flex-col p-8 bg-white transition-colors border ${
        selected === p.id
          ? "border-accent shadow-[0_0_0_1px_#ee7b4d]"
          : "border-line hover:border-accent/60"
      }`}
    >
      <p className="kicker !text-[10px] mb-2">{p.tier}</p>
      <h3 className="font-heading text-navy text-[27px] mb-1">
        {p.name}
        {p.highlight && (
          <span className="ml-2 align-middle text-[10px] font-body font-semibold tracking-[0.08em] uppercase bg-accent/15 text-accent-deep px-2 py-1">
            Más elegido
          </span>
        )}
      </h3>
      <p className="mb-4">
        <span className="display-num text-navy text-[38px]">${priceOf(p)}</span>
        <span className="text-[13px] text-ink-soft">/mes</span>
      </p>
      <p className="text-[13.5px] leading-[1.65] text-ink-soft mb-5">{p.focus}</p>
      <ul className="text-[13px] leading-[1.9] text-ink-soft mt-auto">
        {p.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-accent">›</span>
            <span>{f}</span>
          </li>
        ))}
        <li
          className={`flex gap-2 mt-2 pt-2 border-t border-line ${
            conGrabacion ? "text-accent-deep font-medium" : ""
          }`}
        >
          <span className="text-accent">{conGrabacion ? "🎥" : "›"}</span>
          <span>{conGrabacion ? p.conGrabacion : p.sinGrabacion}</span>
        </li>
      </ul>
    </button>
  );

  return (
    <section id="planes" className="max-w-[1150px] mx-auto px-6 section-y">
      <Reveal>
        <p className="kicker mb-4">Planes y calculadora</p>
      </Reveal>
      <Reveal mask delay={80}>
        <h2 className="font-heading text-navy text-heading mb-4 max-w-[680px]">
          Inversión transparente y estandarizada.
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-8">
          Precios claros, sin regateo: elige tu punto de partida y arma tu plan al instante. ¿Tu
          empresa necesita algo más grande? Los proyectos corporativos se cotizan a la medida.
        </p>
      </Reveal>

      {/* Un solo control cambia todos los precios: con o sin grabación */}
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <div className="inline-flex border border-line bg-white">
            <button
              onClick={() => setConGrabacion(false)}
              className={`px-5 py-3 text-[14px] transition-colors ${
                !conGrabacion ? "bg-navy-deep text-white" : "text-ink-soft hover:text-navy"
              }`}
            >
              Tú envías el material
            </button>
            <button
              onClick={() => setConGrabacion(true)}
              className={`px-5 py-3 text-[14px] transition-colors ${
                conGrabacion ? "bg-navy-deep text-white" : "text-ink-soft hover:text-navy"
              }`}
            >
              Nosotros vamos a grabar
            </button>
          </div>
          <p className="text-[13px] text-ink-soft max-w-[420px]">
            {conGrabacion
              ? "Vamos a tu negocio con cámara, luz y micrófono. La movilización va incluida."
              : "Tú nos mandas fotos y videos desde tu celular; nosotros los convertimos en contenido."}
          </p>
        </div>
      </Reveal>

      {/* Los niveles mensuales */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PLANS.map((p, i) => (
          <Reveal key={p.id} delay={i * 90} className="h-full">
            {planCard(p)}
          </Reveal>
        ))}
      </div>

      {/* El gancho de cierre: solo para quien entra por primera vez */}
      <Reveal delay={80}>
        <div className="mt-6 border border-accent bg-accent/5 px-7 py-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[20px]">🎁</span>
          <p className="text-[14.5px] leading-[1.7] text-ink flex-1 min-w-[280px]">
            <strong>Si es tu primer mes con nosotros:</strong> te regalamos{" "}
            <strong>3 publicaciones adicionales</strong>, sin costo, sobre lo que ya incluye tu plan.
          </p>
          <span className="text-[12.5px] text-ink-soft italic">
            Beneficio de bienvenida para clientes nuevos.
          </span>
        </div>
      </Reveal>

      {/* Alto volumen: una línea por plan, sin robarle aire a los de arriba */}
      <Reveal delay={100}>
        <div className="mt-6 border border-line bg-white">
          <div className="px-7 py-4 border-b border-line bg-paper-soft">
            <p className="kicker !text-[10px] mb-1">¿Necesitas más volumen?</p>
            <p className="text-[13px] text-ink-soft">
              Para negocios con varias marcas o mucha demanda. Todo lo del nivel Avanzado, a mayor
              escala.
            </p>
          </div>
          {HIGH_VOLUME.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`w-full text-left px-7 py-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line last:border-b-0 transition-colors ${
                selected === p.id ? "bg-paper-soft" : "hover:bg-paper-soft/60"
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span className="font-heading text-navy text-[21px]">{p.name}</span>
                <span className="text-[13px] text-ink-soft">{p.resumen}</span>
              </span>
              <span className="shrink-0">
                <span className="display-num text-navy text-[24px]">${priceOf(p)}</span>
                <span className="text-[12.5px] text-ink-soft">/mes</span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Corporativo: fuera de la escalera, con su propio aire */}
      <Reveal delay={120}>
        <button
          onClick={() => setSelected(CORPORATE.id)}
          className={`text-left w-full mt-6 mb-14 bg-navy-deep border p-8 md:p-10 grid md:grid-cols-[0.9fr_1.1fr] gap-8 transition-colors ${
            selected === CORPORATE.id
              ? "border-accent shadow-[0_0_0_1px_#ee7b4d]"
              : "border-navy-deep hover:border-accent/60"
          }`}
        >
          <div>
            <p className="kicker !text-[10px] !text-accent mb-2">{CORPORATE.tier}</p>
            <h3 className="font-heading text-white text-[30px] mb-2">{CORPORATE.name}</h3>
            <p className="text-[15px] italic text-white/85 mb-3">{CORPORATE.priceLabel}</p>
            <p className="text-[13.5px] leading-[1.7] text-white/70">{CORPORATE.focus}</p>
          </div>
          <ul className="text-[13px] leading-[1.9] text-white/80 grid sm:grid-cols-2 gap-x-6 self-center">
            {CORPORATE.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-accent">›</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </button>
      </Reveal>

      {/* Calculadora */}
      <Reveal>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] border border-line bg-white">
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-line">
            <h3 className="font-heading text-navy text-[26px] mb-1.5">Arma tu plan en vivo</h3>
            <p className="text-[14px] text-ink-soft mb-8">
              Plan base: <strong className="text-ink">{plan.name}</strong>
              {planPrice != null
                ? ` ${conGrabacion ? "con grabación" : "sin grabación"} — $${planPrice}/mes`
                : " — cotización personalizada"}{" "}
              (cámbialo arriba). Suma lo que necesites:
            </p>

            <div className="space-y-9">
              {EXTRA_GROUPS.map((group) => (
                <div key={group.title}>
                  <div className="mb-4 pb-3 border-b border-line">
                    <p className="kicker !text-[10px] mb-1">{group.title}</p>
                    <p className="text-[12.5px] text-ink-soft">{group.hint}</p>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((e) =>
                      e.type === "count" ? (
                        <div key={e.id} className="flex items-center justify-between gap-4">
                          <p className="text-[14.5px] text-ink">
                            {e.label}{" "}
                            <span className="text-ink-soft text-[13px]">(+${e.unit} c/u)</span>
                          </p>
                          <div className="flex items-center gap-3 shrink-0">
                            <button
                              onClick={() =>
                                setCounts((c) => ({ ...c, [e.id]: Math.max(0, c[e.id] - 1) }))
                              }
                              className="w-8 h-8 border border-line text-navy hover:border-accent transition-colors"
                              aria-label={`Quitar ${e.label}`}
                            >
                              −
                            </button>
                            <span className="display-num text-[18px] text-navy w-6 text-center">
                              {counts[e.id]}
                            </span>
                            <button
                              onClick={() =>
                                setCounts((c) => ({ ...c, [e.id]: Math.min(e.max, c[e.id] + 1) }))
                              }
                              className="w-8 h-8 border border-line text-navy hover:border-accent transition-colors"
                              aria-label={`Agregar ${e.label}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ) : (
                        <label
                          key={e.id}
                          className="flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <p className="text-[14.5px] text-ink">
                            {e.label}{" "}
                            <span className="text-ink-soft text-[13px]">({e.note})</span>
                          </p>
                          <input
                            type="checkbox"
                            checked={quotes[e.id]}
                            onChange={(ev) =>
                              setQuotes((q) => ({ ...q, [e.id]: ev.target.checked }))
                            }
                            className="w-4.5 h-4.5 accent-[#ee7b4d] shrink-0"
                          />
                        </label>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[12.5px] leading-[1.7] text-ink-soft">
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
              <p className="font-heading text-navy text-[30px] leading-tight mb-2">
                A la medida de tu empresa
              </p>
            )}
            {quoteItems.length > 0 && (
              <p className="text-[13px] text-ink-soft mb-2">
                + {quoteItems.map((e) => e.label).join(" · ")} (se cotiza aparte)
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
