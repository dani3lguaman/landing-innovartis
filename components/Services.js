const services = [
  {
    icon: "🧠",
    title: "Estrategia",
    description:
      "Plan de contenido mensual, guiones para reels, segmentación de audiencias y enfoque total en conversión.",
  },
  {
    icon: "🎥",
    title: "Producción de Contenido",
    description:
      "Grabación profesional dentro de Quito, fotografías comerciales, videos publicitarios y diseño gráfico.",
  },
  {
    icon: "📈",
    title: "Campañas Meta Ads",
    description:
      "Campañas activas en Facebook, Instagram y WhatsApp. Optimización constante y reporte mensual de resultados reales.",
  },
  {
    icon: "🎵",
    title: "TikTok Ads",
    description:
      "Campañas publicitarias en TikTok para negocios que quieren llegar a audiencias de rápido crecimiento.",
  },
  {
    icon: "📍",
    title: "Google Maps",
    description:
      "Optimizamos y gestionamos su perfil en Google Maps para que aparezca primero cuando sus clientes lo buscan.",
  },
  {
    icon: "🌐",
    title: "Diseño Web",
    description:
      "Landing pages y sitios corporativos diseñados para convertir visitas en clientes. Integración con WhatsApp, formularios y SEO básico.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-14 md:py-[90px] px-5 md:px-[120px]" style={{ backgroundColor: "#F4F7FA" }}>
      {/* Header */}
      <div className="mb-10 md:mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Lo que hacemos</p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
          <h2 className="font-black text-[30px] md:text-[46px] tracking-[-1.5px] leading-tight" style={{ color: "#0F2236" }}>
            Agencia integral de principio a fin
          </h2>
          <p className="text-[15px] md:text-[17px] font-medium leading-[1.7] md:max-w-[520px] md:mt-1" style={{ color: "#4A5568" }}>
            Cubrimos todo el proceso para que tú solo te enfoques en atender los clientes que te conseguimos.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <div
            key={i}
            className="rounded-[14px] p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="w-12 h-12 rounded-[10px] flex items-center justify-center text-[24px]"
              style={{ backgroundColor: "rgba(232,98,26,0.08)" }}
            >
              {svc.icon}
            </div>
            <h3 className="font-black text-[20px] md:text-[22px]" style={{ color: "#0F2236" }}>{svc.title}</h3>
            <p className="text-[14px] font-medium leading-[1.6]" style={{ color: "#4A5568" }}>
              {svc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
