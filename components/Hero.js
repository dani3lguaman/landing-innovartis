export default function Hero() {
  return (
    <section
      className="relative pt-[172px] px-[140px] pb-[80px] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D1F30 0%, #162C42 100%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(232,98,26,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Badge */}
      <div
        className="inline-flex items-center mb-8 px-4 py-1.5 rounded-[50px] text-brand text-[11px] font-semibold tracking-[2px]"
        style={{ backgroundColor: "rgba(232,98,26,0.12)", border: "1px solid rgba(232,98,26,0.3)" }}
      >
        📍 Quito, Ecuador · Especialistas B2B
      </div>

      {/* H1 */}
      <h1 className="flex flex-col mb-6">
        <span className="text-white font-black text-[80px] leading-none tracking-[-3px]">Más Clientes.</span>
        <span className="text-brand font-black text-[80px] leading-none tracking-[-3px]">Más Ingresos.</span>
        <span
          className="font-black text-[80px] leading-none tracking-[-3px]"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Menos Esfuerzo.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[18px] font-medium leading-[1.7] max-w-[580px] mb-8" style={{ color: "#9AAABB" }}>
        Estrategia, producción y campañas pagadas (Meta Ads + TikTok Ads) para empresas que quieren crecer.
        También diseñamos tu sitio web.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-[14px] mb-14">
        <a
          href="#planes"
          className="bg-brand text-white text-[15px] font-black px-8 py-4 rounded-[8px] hover:opacity-90 transition-opacity"
        >
          Ver planes y precios →
        </a>
        <a
          href="#contacto"
          className="text-[14px] font-medium px-7 py-[15px] rounded-[8px] hover:opacity-80 transition-opacity"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Agendar llamada gratis
        </a>
      </div>

      {/* Stats */}
      <div
        className="flex items-center gap-0 pt-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {[
          { value: "Meta + TikTok", label: "Campañas pagadas" },
          { value: "100%", label: "Enfoque en ventas" },
          { value: "Web + Ads", label: "Solución integral" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && (
              <div className="w-px h-10 mx-12" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            )}
            <div className="flex flex-col gap-1">
              <span className="text-brand font-black text-[22px]">{stat.value}</span>
              <span className="text-[11px] font-medium" style={{ color: "#666666" }}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
