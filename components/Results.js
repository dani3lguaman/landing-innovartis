const stats = [
  { value: "8+", label: "Clientes activos en Quito", icon: "🏪" },
  { value: "3", label: "Plataformas de publicidad activas", icon: "📡" },
  { value: "24/7", label: "Monitoreo de campañas", icon: "📊" },
  { value: "100%", label: "Reportes con métricas reales", icon: "✅" },
];

const pillars = [
  {
    icon: "📈",
    title: "Resultados medibles",
    description:
      "Cada campaña tiene KPIs claros desde el día uno: alcance, costo por lead, costo por venta y ROAS. No trabajamos con números inventados.",
  },
  {
    icon: "⚡",
    title: "Escalables",
    description:
      "Cuando una campaña funciona, escalamos el presupuesto de forma inteligente. El objetivo es que tú crezcas, no que nosotros cobremos más sin resultados.",
  },
  {
    icon: "🔄",
    title: "Consistentes",
    description:
      "No hacemos campañas aisladas. Gestionamos tu presencia digital mes a mes con estrategia continua, ajustes semanales y reporte mensual detallado.",
  },
  {
    icon: "🎯",
    title: "Hipersegmentados",
    description:
      "Llegamos a tu cliente ideal, no a todo el mundo. Segmentación por ubicación, intereses, comportamiento y audiencias similares a tus clientes reales.",
  },
];

export default function Results() {
  return (
    <section
      className="py-[90px] px-[120px]"
      style={{ backgroundColor: "#0F2236" }}
    >
      {/* Encabezado */}
      <div className="mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
          ¿Por qué InnovArtis?
        </p>
        <div className="flex items-end justify-between gap-12">
          <h2 className="text-white font-black text-[46px] tracking-[-1.5px] leading-tight max-w-[560px]">
            No prometemos.<br />
            <span className="text-brand">Entregamos resultados.</span>
          </h2>
          <p
            className="text-[16px] font-medium leading-[1.7] max-w-[480px] mb-1"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Somos especialistas en publicidad digital con foco total en ventas. Cada peso que inviertes en pauta lo gestionamos como si fuera nuestro.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-[14px] px-6 py-5 flex flex-col gap-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span className="text-[22px]">{s.icon}</span>
            <span className="text-brand font-black text-[36px] leading-none tracking-[-1px]">
              {s.value}
            </span>
            <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-4 gap-4">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="rounded-[14px] p-6 flex flex-col gap-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(232,98,26,0.18)",
            }}
          >
            <span className="text-[28px]">{p.icon}</span>
            <h3 className="text-white font-black text-[17px]">{p.title}</h3>
            <p className="text-[13px] font-medium leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
