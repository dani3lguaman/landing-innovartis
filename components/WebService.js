const features = [
  "Landing pages de alto rendimiento",
  "Sitios corporativos B2B",
  "Integración con WhatsApp y formularios",
  "SEO básico incluido",
];

export default function WebService() {
  return (
    <section
      className="py-[90px] px-[120px] flex gap-[80px] items-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Left content */}
      <div className="flex-1">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Nuevo servicio</p>
        <h2 className="font-black text-[40px] leading-[1.1] tracking-[-1px] max-w-[480px] mb-5" style={{ color: "#0F2236" }}>
          Diseñamos tu sitio web que convierte visitas en clientes
        </h2>
        <p
          className="text-[16px] font-medium leading-[1.7] max-w-[460px] mb-8"
          style={{ color: "#4A5568" }}
        >
          Landing pages, sitios corporativos y e-commerce diseñados con foco en conversión. Tu web como
          herramienta de ventas activa.
        </p>
        <div className="flex flex-col gap-3">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-brand font-black text-[13px]">✓</span>
              <span className="text-[14px] font-medium" style={{ color: "#4A5568" }}>
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: visual */}
      <div
        className="w-[480px] h-[380px] rounded-[16px] flex-shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          border: "1px solid #E2E8F0",
          background: "linear-gradient(135deg, #F4F7FA 0%, #FFFFFF 100%)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        <div className="text-center">
          <div className="text-[72px] mb-4">💻</div>
          <p className="text-[14px] font-medium" style={{ color: "#4A5568" }}>
            Diseño web de alto impacto
          </p>
          <p className="text-[12px] mt-1" style={{ color: "#7A8FA0" }}>
            Estrategia · Conversión · Resultados
          </p>
        </div>
      </div>
    </section>
  );
}
