"use client";

import { useState } from "react";

const clients = [
  {
    name: "Remy",
    category: "Belleza",
    categoryColor: "#E8621A",
    services: "Meta Ads + TikTok + Google Maps",
    description: "Marca de belleza en Quito. Gestión completa de campañas pagadas y presencia digital.",
    ig: "https://instagram.com",
  },
  {
    name: "Pachy",
    category: "Servicios de Limpieza",
    categoryColor: "#3B9EFF",
    services: "Meta Ads + Google Maps",
    description: "Empresa de servicios de limpieza en Quito. Captación de clientes locales mediante Meta Ads.",
    ig: "https://instagram.com",
  },
  {
    name: "Controlfrio",
    category: "B2B / Servicios Industriales",
    categoryColor: "#6C63FF",
    services: "Meta Ads + Contenido",
    description: "Empresa B2B de servicios industriales de climatización. Estrategia de contenido + campañas.",
    ig: "https://instagram.com",
  },
  {
    name: "SERTEC",
    category: "Mantenimiento Industrial",
    categoryColor: "#F59E0B",
    services: "Meta Ads + Contenido",
    description: "Mantenimiento industrial de generadores eléctricos. Posicionamiento digital B2B.",
    ig: "https://instagram.com",
  },
  {
    name: "Óptica Única Visión",
    category: "Óptica / Salud Visual",
    categoryColor: "#10B981",
    services: "Meta Ads + Contenido",
    description: "Óptica especializada en Quito. Campañas de atracción de clientes y producción visual.",
    ig: "https://instagram.com",
  },
  {
    name: "Solugraf",
    category: "Publicidad / Rótulos / PVC",
    categoryColor: "#EC4899",
    services: "Meta Ads",
    description: "Empresa de publicidad, rótulos y stands dirigida a empresas. Captación B2B digital.",
    ig: "https://instagram.com",
  },
  {
    name: "Plastic Ide",
    category: "Fábrica / Manufactura",
    categoryColor: "#8B5CF6",
    services: "Campañas Meta",
    description: "Fábrica de productos plásticos. Visibilidad digital y generación de leads industriales.",
    ig: "https://instagram.com",
  },
  {
    name: "Estación 5 Barber Shop",
    category: "Barbería",
    categoryColor: "#E8621A",
    services: "Meta Ads",
    description: "Barbería premium en Quito. Captación de clientes locales con Meta Ads.",
    ig: "https://instagram.com",
  },
];

function Modal({ client, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[680px] rounded-[20px] overflow-hidden animate-fadeInUp"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          boxShadow: "0 24px 80px rgba(0,0,0,0.15)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 md:px-8 pt-6 md:pt-7 pb-5" style={{ borderBottom: "1px solid #E2E8F0" }}>
          <div>
            <span
              className="text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-[4px] mb-3 inline-block"
              style={{ backgroundColor: `${client.categoryColor}12`, color: client.categoryColor, border: `1px solid ${client.categoryColor}25` }}
            >
              {client.category}
            </span>
            <h3 className="font-black text-[22px] md:text-[26px] leading-tight" style={{ color: "#0F2236" }}>{client.name}</h3>
            <p className="text-[13px] mt-1" style={{ color: "#4A5568" }}>{client.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 mt-1 hover:bg-gray-100 transition-colors"
            style={{ color: "#7A8FA0" }}
          >
            ✕
          </button>
        </div>

        <div className="px-6 md:px-8 py-4" style={{ borderBottom: "1px solid #E2E8F0" }}>
          <p className="text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: "#7A8FA0" }}>Servicios prestados</p>
          <span
            className="text-[12px] font-semibold px-3 py-1.5 rounded-[6px]"
            style={{ backgroundColor: "rgba(232,98,26,0.08)", border: "1px solid rgba(232,98,26,0.2)", color: "#E8621A" }}
          >
            {client.services}
          </span>
        </div>

        <div className="px-6 md:px-8 py-6">
          <p className="text-[10px] font-bold tracking-[2px] uppercase mb-4" style={{ color: "#7A8FA0" }}>Trabajo realizado</p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="aspect-square rounded-[10px] flex flex-col items-center justify-center gap-1"
                style={{ backgroundColor: "#F4F7FA", border: "1px dashed #E2E8F0" }}
              >
                <span className="text-[20px]">🖼</span>
                <span className="text-[10px]" style={{ color: "#7A8FA0" }}>Próximamente</span>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/593998620536"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 h-[42px] rounded-[10px] text-[13px] font-black text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#25D366" }}
          >
            Pedir información
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="portafolio"
      className="py-14 md:py-[90px] px-5 md:px-[120px]"
      style={{ backgroundColor: "#F4F7FA" }}
    >
      {selected && <Modal client={selected} onClose={() => setSelected(null)} />}

      <div className="mb-10 md:mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Portafolio</p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
          <h2 className="font-black text-[30px] md:text-[46px] tracking-[-1.5px] leading-tight" style={{ color: "#0F2236" }}>
            Negocios reales que<br />confían en InnovArtis
          </h2>
          <p className="text-[15px] md:text-[17px] font-medium leading-[1.7] md:max-w-[400px] md:mt-1" style={{ color: "#4A5568" }}>
            Haz clic en cualquier cliente para conocer el trabajo que hicimos juntos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {clients.map((client, i) => (
          <button
            key={i}
            onClick={() => setSelected(client)}
            className="text-left rounded-[14px] px-4 py-4 md:px-5 md:py-5 flex flex-col gap-2 md:gap-3 group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = `1px solid ${client.categoryColor}50`;
              e.currentTarget.style.backgroundColor = `${client.categoryColor}05`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid #E2E8F0";
              e.currentTarget.style.backgroundColor = "#FFFFFF";
            }}
          >
            <span
              className="text-[9px] font-bold tracking-[2px] uppercase px-2 py-1 rounded-[4px] self-start"
              style={{
                backgroundColor: `${client.categoryColor}12`,
                color: client.categoryColor,
                border: `1px solid ${client.categoryColor}25`,
              }}
            >
              {client.category}
            </span>
            <span className="font-black text-[14px] md:text-[16px] leading-tight" style={{ color: "#0F2236" }}>{client.name}</span>
            <span className="text-[11px] font-medium" style={{ color: "#7A8FA0" }}>
              {client.services}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
