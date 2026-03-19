const services = [
  {
    icon: "🧠",
    title: "Estrategia",
    description:
      "Plan de contenido, guiones para reels, segmentación de audiencias y enfoque total en conversión.",
    bg: "rgba(232,98,26,0.08)",
    border: "rgba(232,98,26,0.22)",
  },
  {
    icon: "🎥",
    title: "Producción",
    description:
      "Grabación profesional de reels, fotografías comerciales, videos promocionales y diseño gráfico de alto impacto.",
    bg: "rgba(26,58,92,0.5)",
    border: "rgba(26,58,92,0.8)",
  },
  {
    icon: "📈",
    title: "Distribución",
    description:
      "Campañas Meta Ads y TikTok Ads, manejo de redes sociales, optimización de presupuesto y reportes reales.",
    bg: "rgba(15,55,35,0.3)",
    border: "rgba(25,100,55,0.2)",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-navy py-[90px] px-[120px]">
      {/* Header */}
      <div className="mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Lo que hacemos</p>
        <div className="flex items-start justify-between gap-12">
          <h2 className="text-white font-black text-[46px] tracking-[-1.5px] leading-tight">
            Agencia integral de principio a fin
          </h2>
          <p className="text-[17px] font-medium leading-[1.7] max-w-[520px] mt-1" style={{ color: "#7A8FA0" }}>
            Cubrimos todo el proceso para que tú solo te enfoques en atender los clientes que te conseguimos.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <div
            key={i}
            className="rounded-[14px] p-8 flex flex-col gap-4"
            style={{ backgroundColor: svc.bg, border: `1px solid ${svc.border}` }}
          >
            <span className="text-[32px]">{svc.icon}</span>
            <h3 className="text-white font-black text-[22px]">{svc.title}</h3>
            <p className="text-[14px] font-medium leading-[1.6]" style={{ color: "#7A8FA0" }}>
              {svc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
