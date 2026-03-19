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
      style={{ backgroundColor: "#0F2236" }}
    >
      {/* Left content */}
      <div className="flex-1">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Nuevo servicio</p>
        <h2 className="text-white font-black text-[40px] leading-[1.1] tracking-[-1px] max-w-[480px] mb-5">
          Diseñamos tu sitio web que convierte visitas en clientes
        </h2>
        <p
          className="text-[16px] font-medium leading-[1.7] max-w-[460px] mb-8"
          style={{ color: "#7A8FA0" }}
        >
          Landing pages, sitios corporativos y e-commerce diseñados con foco en conversión. Tu web como
          herramienta de ventas activa.
        </p>
        <div className="flex flex-col gap-3">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-brand font-black text-[13px]">✓</span>
              <span className="text-[14px] font-medium" style={{ color: "#CCCCCC" }}>
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: visual placeholder */}
      <div
        className="w-[480px] h-[380px] rounded-[16px] flex-shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          border: "1px solid rgba(232,98,26,0.2)",
          background: "linear-gradient(135deg, rgba(26,58,92,0.6) 0%, rgba(13,31,48,0.9) 100%)",
        }}
      >
        <div className="text-center">
          <div className="text-[72px] mb-4">💻</div>
          <p className="text-[14px] font-medium" style={{ color: "#7A8FA0" }}>
            Diseño web de alto impacto
          </p>
          <p className="text-[12px] mt-1" style={{ color: "#555555" }}>
            Estrategia · Conversión · Resultados
          </p>
        </div>
      </div>
    </section>
  );
}
