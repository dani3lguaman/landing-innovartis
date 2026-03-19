const plans = [
  {
    tier: "NIVEL 01",
    name: "Plan Básico",
    focus: "Presencia digital profesional.",
    price: "$130",
    period: "/mes",
    discount: "Descuento especial disponible -$30*",
    popular: false,
    features: [
      { ok: true, text: "2 artes estáticos", sub: "Diseño digital estático para publicaciones" },
      { ok: true, text: "1 carrusel", sub: "Secuencia de imágenes con narrativa" },
      { ok: true, text: "2 videos cortos publicitarios", sub: "Reels cortos editados para Instagram/Facebook" },
      { ok: true, text: "Instagram y Facebook", sub: "Publicación en ambas plataformas Meta" },
      { ok: false, text: "Grabación (cliente envía fotos)", sub: "El cliente envía fotos/videos propios" },
      { ok: false, text: "Campañas Meta Ads", sub: "No incluye gestión de campañas pagadas" },
    ],
    cardBg: "rgba(255,255,255,0.04)",
    cardBorder: "rgba(255,255,255,0.08)",
    btnBg: "rgba(255,255,255,0.06)",
    btnBorder: "rgba(255,255,255,0.12)",
  },
  {
    tier: "NIVEL 02",
    name: "Plan Estándar",
    focus: "Clientes con Meta Ads + grabación incluida.",
    price: "$180",
    period: "/mes",
    discount: "Descuento especial disponible -$30*",
    popular: true,
    features: [
      { ok: true, text: "3 artes estáticos", sub: "Artes visuales optimizados para conversión" },
      { ok: true, text: "2 carruseles + 3 videos publicitarios", sub: "2 carruseles + 3 reels publicitarios editados" },
      { ok: true, text: "Grabación profesional incluida", sub: "Sesión de grabación con equipo Innovartis" },
      { ok: true, text: "Campañas en Meta Ads", sub: "Gestión y optimización de campañas Meta" },
      { ok: true, text: "Calendario + Reporte mensual", sub: "Planificación mensual + métricas reales" },
      { ok: true, text: "Optimización enfocada en ventas", sub: "A/B testing y ajuste continuo de campañas" },
    ],
    cardBg: "linear-gradient(150deg, rgba(232,98,26,0.15) 0%, rgba(26,58,92,0.4) 100%)",
    cardBorder: "#E8621A",
    btnBg: "#E8621A",
    btnBorder: "transparent",
  },
  {
    tier: "NIVEL 03",
    name: "Plan Profesional",
    focus: "Crecimiento agresivo. Meta + TikTok + web.",
    price: "$250",
    period: "/mes",
    discount: "Descuento especial disponible -$30*",
    popular: false,
    features: [
      { ok: true, text: "5 artes estáticos + 3 carruseles", sub: "5 artes + 3 carruseles de alta conversión" },
      { ok: true, text: "5 videos cortos publicitarios", sub: "5 reels para Meta + TikTok Ads" },
      { ok: true, text: "Grabación profesional incluida", sub: "Producción audiovisual completa en estudio" },
      { ok: true, text: "Meta Ads + TikTok Ads", sub: "Campañas activas en ambas plataformas" },
      { ok: true, text: "Reporte mensual detallado", sub: "Reporte detallado con CTR, CPL y ROAS" },
      { ok: true, text: "Optimización avanzada en ventas", sub: "Escalamiento inteligente de presupuesto" },
    ],
    cardBg: "rgba(255,255,255,0.04)",
    cardBorder: "rgba(255,255,255,0.08)",
    btnBg: "rgba(255,255,255,0.06)",
    btnBorder: "rgba(255,255,255,0.12)",
  },
];

export default function Plans() {
  return (
    <section
      id="planes"
      className="py-[90px] px-[120px]"
      style={{ background: "linear-gradient(180deg, #0D1F30 0%, #0A1828 100%)" }}
    >
      {/* Header */}
      <div className="mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
          Planes y Precios 2026
        </p>
        <div className="flex items-end justify-between gap-12">
          <h2 className="text-white font-black text-[46px] tracking-[-1.5px] leading-tight">
            Elige tu plan de crecimiento
          </h2>
          <p className="text-[16px] font-medium leading-[1.6] max-w-[520px] mb-1" style={{ color: "#7A8FA0" }}>
            Estrategia + Producción + Distribución en cada plan. La pauta publicitaria no está incluida.
          </p>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="rounded-[18px] flex flex-col gap-5 relative"
            style={{
              background: plan.cardBg,
              border: `1px solid ${plan.cardBorder}`,
              padding: "32px 26px",
            }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3.5 left-6">
                <span className="bg-brand text-white text-[10px] font-black px-[18px] py-[5px] rounded-[50px]">
                  ⭐ MÁS ELEGIDO
                </span>
              </div>
            )}

            {/* Tier + name */}
            <div>
              <p className="text-[10px] font-bold tracking-[3px] mb-1" style={{ color: "#666666" }}>
                {plan.tier}
              </p>
              <h3 className="text-white font-black text-[24px]">{plan.name}</h3>
              <p className="text-[13px] font-medium mt-1" style={{ color: "#888888" }}>
                {plan.focus}
              </p>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-white font-black text-[40px] leading-none">{plan.price}</span>
                <span className="text-[14px]" style={{ color: "#666666" }}>
                  {plan.period}
                </span>
              </div>
              <p className="text-brand text-[11px] font-semibold mt-1">{plan.discount}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

            {/* Features */}
            <div className="flex flex-col gap-[10px] flex-1">
              {plan.features.map((feat, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <span
                    className="text-[13px] font-bold flex-shrink-0 mt-0.5"
                    style={{ color: feat.ok ? "#E8621A" : "#444444" }}
                  >
                    {feat.ok ? "✓" : "—"}
                  </span>
                  <div>
                    <p className="text-[13px] font-medium" style={{ color: "#CCCCCC" }}>
                      {feat.text}
                    </p>
                    <p className="text-[11px] mt-0.5" style={{ color: "#555555" }}>
                      {feat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contacto"
              className="flex items-center justify-center h-[46px] rounded-[10px] text-[13px] font-black text-white transition-opacity hover:opacity-90 text-center"
              style={{
                backgroundColor: plan.btnBg,
                border: `1px solid ${plan.btnBorder}`,
              }}
            >
              Me interesa →
            </a>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-[13px] font-medium" style={{ color: "#555555" }}>
        * La pauta publicitaria no está incluida en el plan · El descuento aplica bajo autorización del equipo
        Innovartis
      </p>
    </section>
  );
}
