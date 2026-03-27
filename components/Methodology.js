const steps = [
  {
    number: "01",
    title: "Investigación de mercado",
    description: "Analizamos tu negocio, competencia y audiencia objetivo para identificar las oportunidades reales de crecimiento.",
  },
  {
    number: "02",
    title: "Estrategia personalizada",
    description: "Diseñamos un plan específico para tus metas de ventas, con canales, presupuesto y mensajes definidos.",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Lanzamos campañas, contenido y publicidad con precisión. Cada pieza tiene un propósito claro.",
  },
  {
    number: "04",
    title: "Optimización constante",
    description: "Medimos, ajustamos y escalamos lo que funciona. Los resultados mejoran cada mes.",
  },
];

export default function Methodology() {
  return (
    <section
      className="py-14 md:py-[90px] px-5 md:px-[120px]"
      style={{ backgroundColor: "#F4F7FA" }}
    >
      {/* Header */}
      <div className="mb-10 md:mb-[52px]" data-animate>
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
          Cómo trabajamos
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
          <h2
            className="font-black text-[30px] md:text-[46px] tracking-[-1.5px] leading-tight"
            style={{ color: "#0F2236" }}
          >
            Nuestra metodología
            <br />
            en 4 pasos
          </h2>
          <p
            className="text-[15px] md:text-[17px] font-medium leading-[1.7] md:max-w-[460px] md:mb-1"
            style={{ color: "#4A5568" }}
          >
            Un proceso claro y probado que convierte tu inversión en clientes reales. Sin improviso, sin humo.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-[16px] p-6 md:p-8 flex flex-col gap-5 relative"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
            data-animate
          >
            <span
              className="font-black leading-none"
              style={{ fontSize: "64px", color: "#E8621A", opacity: 0.15, lineHeight: 1 }}
            >
              {step.number}
            </span>
            <span
              className="font-black text-brand"
              style={{ fontSize: "13px", marginTop: "-52px", position: "relative" }}
            >
              PASO {step.number}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-black text-[18px] md:text-[20px] leading-tight" style={{ color: "#0F2236" }}>
                {step.title}
              </h3>
              <p className="text-[14px] font-medium leading-[1.65]" style={{ color: "#4A5568" }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
