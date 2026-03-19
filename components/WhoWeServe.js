const industries = [
  "🦷 Clínicas y dentistas",
  "🏗️ Arquitectos e ingenieros",
  "🧠 Psicólogos y coaches",
  "💪 Gimnasios y fitness",
  "🛍️ Tiendas y e-commerce",
  "💇 Salones de belleza",
  "🏪 Negocios mayoristas",
  "🚀 Emprendedores que escalan",
];

export default function WhoWeServe() {
  return (
    <section id="testimonios" className="py-[80px] px-[120px]" style={{ backgroundColor: "#0F2236" }}>
      {/* Header row */}
      <div className="flex gap-[44px] mb-11 items-start">
        <div className="flex-1">
          <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
            ¿Para quién trabajamos?
          </p>
          <h2 className="text-white font-black text-[46px] leading-[1.05] tracking-[-1.5px]">
            Negocios que invierten
            <br />
            para crecer
          </h2>
        </div>
        <div
          className="w-[340px] flex-shrink-0 rounded-[10px] p-5 self-center mt-10"
          style={{
            backgroundColor: "rgba(232,98,26,0.08)",
            border: "1px solid rgba(232,98,26,0.2)",
          }}
        >
          <p className="text-[14px] font-medium leading-[1.6]" style={{ color: "#7A8FA0" }}>
            Trabajamos con empresas que entienden que la publicidad bien segmentada es inversión, no gasto.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-4 gap-3">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="rounded-[10px] px-5 py-4 text-[13px] font-semibold"
            style={{
              color: "#CCCCCC",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
