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
    <section id="testimonios" className="py-14 md:py-[80px] px-5 md:px-[120px]" style={{ backgroundColor: "#F4F7FA" }}>
      {/* Header row */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-[44px] mb-8 md:mb-11 items-start">
        <div className="flex-1">
          <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
            ¿Para quién trabajamos?
          </p>
          <h2 className="font-black text-[32px] md:text-[46px] leading-[1.05] tracking-[-1.5px]" style={{ color: "#0F2236" }}>
            Negocios que invierten
            <br />
            para crecer
          </h2>
        </div>
        <div
          className="w-full md:w-[340px] md:flex-shrink-0 rounded-[10px] p-5 md:self-center md:mt-10"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <p className="text-[14px] font-medium leading-[1.6]" style={{ color: "#4A5568" }}>
            Trabajamos con empresas que entienden que la publicidad bien segmentada es inversión, no gasto.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="rounded-[10px] px-4 py-3 text-[12px] md:text-[13px] font-semibold"
            style={{
              color: "#0F2236",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
