const planGroups = [
  {
    label: "SOLO CAMPAÑAS",
    plans: [
      {
        tier: "NIVEL ADS",
        name: "Campañas Ilimitadas",
        subtitle: "Facebook + Instagram + TikTok. Sin contenido incluido.",
        price: "$150",
        popular: false,
        features: [
          "Manejo ilimitado de campañas en Facebook e Instagram",
          "Manejo ilimitado de campañas en TikTok Ads",
          "Optimización continua de presupuesto",
          "Segmentación de audiencias personalizada",
          "Reporte mensual con métricas reales",
          "Comunicación 24/7",
        ],
      },
    ],
  },
  {
    label: "PLANES BÁSICOS",
    plans: [
      {
        tier: "NIVEL 1",
        name: "Plan Básico",
        subtitle: "Sin grabación — el cliente envía su material.",
        price: "$130",
        popular: false,
        features: [
          "2 artes estáticos",
          "2 videos cortos publicitarios (máx. 45 seg.)",
          "1 carrusel (máx. 3 imágenes)",
          "Manejo de Instagram y Facebook",
          "2 campañas en Meta Ads",
          "Copys publicitarios incluidos",
          "Monitoreo y ajustes 24/7",
          "Reporte mensual de resultados",
        ],
      },
      {
        tier: "NIVEL 2A",
        name: "Plan Básico con Grabación",
        subtitle: "El mismo Plan Básico pero InnovArtis va a grabar a su negocio dentro de Quito.",
        price: "$160",
        popular: false,
        features: [
          "2 artes estáticos",
          "2 videos cortos publicitarios (máx. 45 seg.) — grabados por InnovArtis",
          "1 carrusel (máx. 3 imágenes)",
          "Manejo de Instagram y Facebook",
          "2 campañas en Meta Ads",
          "Grabación de 2 horas profesional incluida en Quito",
          "Copys publicitarios incluidos",
          "Monitoreo y ajustes 24/7",
          "Reporte mensual de resultados",
        ],
      },
      {
        tier: "NIVEL 2B",
        name: "Plan Crecimiento sin Grabación",
        subtitle: "Meta + TikTok. El cliente envía su material.",
        price: "$160",
        popular: false,
        features: [
          "3 artes estáticos",
          "3 videos cortos publicitarios (máx. 45 seg.)",
          "2 carruseles (máx. 3 imágenes)",
          "Manejo de Instagram, Facebook y TikTok",
          "2 campañas en Meta Ads",
          "Copys publicitarios incluidos",
          "Monitoreo y ajustes 24/7",
          "Reporte mensual de resultados",
        ],
      },
      {
        tier: "NIVEL 3",
        name: "Plan Crecimiento con Grabación",
        subtitle: "Meta + TikTok + grabación incluida.",
        price: "$190",
        popular: true,
        features: [
          "3 artes estáticos",
          "3 videos cortos publicitarios (máx. 45 seg.) — grabados por InnovArtis",
          "2 carruseles (máx. 3 imágenes)",
          "Manejo de Instagram, Facebook y TikTok",
          "2 campañas en Meta Ads",
          "Grabación de 2 horas profesional incluida en Quito",
          "Copys publicitarios incluidos",
          "Monitoreo y ajustes 24/7",
          "Reporte mensual de resultados",
        ],
      },
    ],
  },
  {
    label: "PLANES ESTÁNDAR",
    plans: [
      {
        tier: "NIVEL 4A",
        name: "Plan Estándar sin Cobertura",
        subtitle: "Meta + TikTok + Google Maps.",
        price: "$230",
        popular: false,
        features: [
          "4 artes estáticos",
          "3 carruseles",
          "4 videos cortos publicitarios",
          "3 campañas Meta Ads activo y optimizado",
          "1 campaña TikTok Ads incluido",
          "Gestión de perfil Google Maps",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
      {
        tier: "NIVEL 4B",
        name: "Plan Estándar con Cobertura",
        subtitle: "Meta + TikTok + Google Maps + grabación incluida.",
        price: "$260",
        popular: false,
        features: [
          "4 artes estáticos",
          "3 carruseles",
          "4 videos cortos publicitarios",
          "1 grabación de 3 horas profesional incluida en Quito",
          "3 campañas Meta Ads activo y optimizado",
          "1 campaña TikTok Ads incluido",
          "Gestión de perfil Google Maps",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
    ],
  },
  {
    label: "PLANES AVANZADOS",
    plans: [
      {
        tier: "NIVEL 5A",
        name: "Plan Avanzado sin Cobertura",
        subtitle: "Meta + TikTok + Google Maps + Google Ads.",
        price: "$300",
        popular: false,
        features: [
          "6 artes estáticos",
          "4 carruseles",
          "6 videos cortos publicitarios",
          "4 campañas Meta Ads activo y personalizado",
          "2 campañas TikTok Ads incluido",
          "1 campaña Google Maps o Google Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
      {
        tier: "NIVEL 5B",
        name: "Plan Avanzado con Cobertura",
        subtitle: "Meta + TikTok + Google Maps + Google Ads + grabación incluida.",
        price: "$330",
        popular: false,
        features: [
          "6 artes estáticos",
          "4 carruseles",
          "6 videos cortos publicitarios",
          "1 grabación de 3 horas profesional incluida en Quito",
          "4 campañas Meta Ads activo y optimizado",
          "2 campañas TikTok Ads incluido",
          "1 campaña Google Maps o Google Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
    ],
  },
  {
    label: "PLANES PLUS",
    plans: [
      {
        tier: "NIVEL 6A",
        name: "Plan Plus sin Cobertura",
        subtitle: "",
        price: "$390",
        popular: false,
        features: [
          "8 artes estáticos",
          "4 carruseles",
          "8 videos cortos publicitarios",
          "5 campañas Meta Ads activo y optimizado",
          "3 campañas TikTok Ads incluido",
          "2 campañas Google Maps o Google Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
      {
        tier: "NIVEL 6B",
        name: "Plan Plus con Cobertura",
        subtitle: "",
        price: "$420",
        popular: false,
        features: [
          "8 artes estáticos",
          "4 carruseles",
          "8 videos cortos publicitarios",
          "1 grabación de 5 horas profesional incluida en Quito",
          "5 campañas Meta Ads activo y optimizado",
          "3 campañas TikTok Ads incluido",
          "2 campañas Google Maps o Google Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
    ],
  },
  {
    label: "PLANES GOLD",
    plans: [
      {
        tier: "NIVEL 7A",
        name: "Plan Gold sin Cobertura",
        subtitle: "",
        price: "$480",
        popular: false,
        features: [
          "10 artes estáticos",
          "5 carruseles",
          "10 videos cortos publicitarios",
          "Campañas ilimitadas Meta Ads, Google Ads y TikTok Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
      {
        tier: "NIVEL 7B",
        name: "Plan Gold con Cobertura",
        subtitle: "",
        price: "$510",
        popular: false,
        features: [
          "10 artes estáticos",
          "5 carruseles",
          "10 videos cortos publicitarios",
          "1 grabación de 6 horas profesional incluida en Quito",
          "Campañas ilimitadas Meta Ads, Google Ads y TikTok Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
    ],
  },
  {
    label: "PLANES DIAMANTE",
    plans: [
      {
        tier: "NIVEL 8A",
        name: "Plan Diamante sin Cobertura",
        subtitle: "",
        price: "$540",
        popular: false,
        features: [
          "12 artes estáticos",
          "6 carruseles",
          "12 videos cortos publicitarios",
          "Campañas ilimitadas Meta Ads, Google Ads y TikTok Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
      {
        tier: "NIVEL 8B",
        name: "Plan Diamante con Cobertura",
        subtitle: "",
        price: "$570",
        popular: false,
        features: [
          "12 artes estáticos",
          "6 carruseles",
          "12 videos cortos publicitarios",
          "1 grabación de 6 horas profesional incluida en Quito",
          "Campañas ilimitadas Meta Ads, Google Ads y TikTok Ads",
          "Reporte mensual detallado con métricas reales",
          "Optimización avanzada y escalamiento de presupuesto",
          "Comunicación 24/7",
        ],
      },
    ],
  },
];

const adsPlatforms = [
  {
    name: "Manejo TikTok Ads",
    price: "$100",
    period: "/mes",
    description: "Creación, optimización y seguimiento de campañas pagadas en TikTok. Resultados medibles cada semana.",
    badge: null,
    waText: "Manejo+TikTok+Ads+%24100%2Fmes",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#E8621A">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
      </svg>
    ),
  },
  {
    name: "Manejo Google Maps + Ads",
    price: "$100",
    period: "/mes",
    description: "Optimización de perfil en Google Maps + campañas en Google Ads. Aparece primero cuando te buscan.",
    badge: null,
    waText: "Manejo+Google+Maps+%2B+Ads+%24100%2Fmes",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    name: "Manejo Meta Ads",
    price: "$120",
    period: "/mes",
    description: "Gestión exclusiva de campañas en Facebook e Instagram. Sin contenido incluido — solo campañas.",
    badge: null,
    waText: "Manejo+Meta+Ads+%24120%2Fmes",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#E8621A">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const aiService = {
  name: "Chatbot / Agente IA",
  price: "Desde $200",
  period: "",
  description: "Automatiza la atención al cliente con inteligencia artificial. Tu negocio responde 24/7 en WhatsApp, Instagram y web — sin intervención humana.",
  badge: "NUEVO",
  waText: "Chatbot+Agente+IA",
  icon: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      <line x1="12" y1="15" x2="12" y2="17"/><circle cx="12" cy="14" r="1" fill="#E8621A"/>
    </svg>
  ),
};

const crmServices = [
  {
    name: "Capacitación CRM Online",
    price: "$25",
    period: "/hora",
    description: "Aprende a gestionar tu CRM desde cero. Sesiones personalizadas en vivo por Zoom. Flexible, a tu ritmo.",
    badge: "ZOOM",
    waText: "Capacitaci%C3%B3n+CRM+Online+%2425%2Fhora",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
  {
    name: "Capacitación CRM Presencial",
    price: "$35",
    period: "/hora",
    description: "Sesión presencial en tu negocio en Quito. Aprende con todo tu equipo en tiempo real, cara a cara.",
    badge: "PRESENCIAL",
    waText: "Capacitaci%C3%B3n+CRM+Presencial+%2435%2Fhora",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function ServiceCard({ svc, fullWidth = false }) {
  return (
    <div
      className={`rounded-[18px] flex ${fullWidth ? "flex-row items-center gap-10" : "flex-col"} gap-5 relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        padding: fullWidth ? "36px 40px" : "32px 28px",
        minHeight: fullWidth ? "auto" : "280px",
      }}
    >
      {svc.badge && (
        <span
          className="absolute top-5 right-5 text-[10px] font-black uppercase px-3 py-1 rounded-[4px] animate-bounceIn"
          style={{ backgroundColor: "#E8621A", color: "#fff", letterSpacing: "1px" }}
        >
          {svc.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className={`${fullWidth ? "w-20 h-20 flex-shrink-0" : "w-14 h-14"} rounded-[14px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        style={{ backgroundColor: "rgba(232,98,26,0.08)" }}
      >
        {svc.icon}
      </div>

      <div className={`flex flex-col gap-3 ${fullWidth ? "flex-1" : "flex-1"}`}>
        <div>
          <h3 className="font-black leading-tight" style={{ fontSize: "22px", color: "#0F2236" }}>
            {svc.name}
          </h3>
          <p className="text-[15px] font-medium leading-relaxed mt-2" style={{ color: "#4A5568" }}>
            {svc.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-brand font-black" style={{ fontSize: "48px", lineHeight: 1 }}>
            {svc.price}
          </span>
          {svc.period && (
            <span className="text-[14px]" style={{ color: "#7A8FA0" }}>{svc.period}</span>
          )}
        </div>

        <a
          href={`https://wa.me/593998620536?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${svc.waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 h-[46px] rounded-[10px] text-[13px] font-black text-white uppercase tracking-wide hover:scale-105 transition-all ${fullWidth ? "max-w-[260px]" : "w-full"}`}
          style={{ backgroundColor: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}
        >
          {WA_ICON}
          Quiero este servicio
        </a>
      </div>
    </div>
  );
}

function PlanCard({ plan }) {
  return (
    <div
      className="rounded-[18px] flex flex-col gap-4 relative"
      style={{
        background: plan.popular ? "rgba(232,98,26,0.03)" : "#FFFFFF",
        border: `1px solid ${plan.popular ? "#E8621A" : "#E2E8F0"}`,
        boxShadow: plan.popular
          ? "0 4px 24px rgba(232,98,26,0.12)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        padding: "28px 24px",
      }}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-6">
          <span className="bg-brand text-white text-[10px] font-black px-[18px] py-[5px] rounded-[50px]">
            ⭐ MÁS ELEGIDO
          </span>
        </div>
      )}

      <div>
        <p className="text-[10px] font-bold tracking-[3px] mb-1" style={{ color: "#7A8FA0" }}>
          {plan.tier}
        </p>
        <h3 className="font-black text-[20px] leading-tight" style={{ color: "#0F2236" }}>{plan.name}</h3>
        {plan.subtitle && (
          <p className="text-[12px] font-medium mt-1" style={{ color: "#7A8FA0" }}>
            {plan.subtitle}
          </p>
        )}
      </div>

      <div className="flex items-baseline gap-1">
        <span className="font-black text-[52px] leading-none" style={{ color: "#0F2236" }}>{plan.price}</span>
        <span className="text-[13px]" style={{ color: "#7A8FA0" }}>/mes</span>
      </div>

      <div className="w-full h-px" style={{ backgroundColor: "#E2E8F0" }} />

      <div className="flex flex-col gap-[8px] flex-1">
        {plan.features.map((feat, j) => (
          <div key={j} className="flex items-start gap-2">
            <span className="text-brand font-bold text-[12px] flex-shrink-0 mt-0.5">✓</span>
            <p className="text-[12px] font-medium leading-[1.5]" style={{ color: "#4A5568" }}>
              {feat}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[10px] italic" style={{ color: "#7A8FA0" }}>
        La pauta publicitaria no está incluida. El cliente la invierte directamente.
      </p>

      <a
        href={`https://wa.me/593998620536?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(plan.name)}%20de%20${encodeURIComponent(plan.price)}%2Fmes`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 h-[46px] rounded-[10px] text-[13px] font-black text-white uppercase tracking-wide hover:scale-105 transition-all"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Quiero este plan
      </a>
    </div>
  );
}

export default function Plans() {
  return (
    <section
      id="planes"
      className="py-[90px] px-[120px]"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Header */}
      <div className="mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
          Planes y Precios 2026
        </p>
        <div className="flex items-end justify-between gap-12">
          <h2 className="font-black tracking-[-2px] leading-[0.95]" style={{ fontSize: "64px", color: "#0F2236" }}>
            Elige tu plan<br />de crecimiento
          </h2>
          <p className="text-[16px] font-medium leading-[1.6] max-w-[520px] mb-1" style={{ color: "#4A5568" }}>
            Estrategia + Producción + Distribución en cada plan. La pauta publicitaria no está incluida.
          </p>
        </div>
      </div>

      {/* Plan groups */}
      <div className="flex flex-col gap-14">
        {planGroups.map((group, gi) => (
          <div key={gi}>
            <p
              className="text-[10px] font-bold tracking-[3px] mb-5 uppercase"
              style={{ color: "#7A8FA0" }}
            >
              {group.label}
            </p>
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: `repeat(${group.plans.length === 1 ? 1 : group.plans.length <= 2 ? 2 : 4}, 1fr)`,
              }}
            >
              {group.plans.map((plan, pi) => (
                <PlanCard key={pi} plan={plan} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional services */}
      <div className="mt-24" data-animate>
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
          Servicios Adicionales
        </p>
        <div className="flex items-end justify-between gap-12 mb-12">
          <h2
            className="font-black tracking-[-2px] leading-[0.95]"
            style={{ fontSize: "64px", color: "#0F2236" }}
          >
            Todo lo que tu negocio<br />
            <span className="text-brand">necesita</span>
          </h2>
          <p className="text-[16px] font-medium leading-[1.6] max-w-[460px] mb-1" style={{ color: "#4A5568" }}>
            Suma cualquier servicio a tu plan actual o contrátalo de forma independiente.
          </p>
        </div>

        {/* Gestión de plataformas — 3 cols */}
        <p className="text-[10px] font-bold tracking-[3px] uppercase mb-5" style={{ color: "#7A8FA0" }}>
          Gestión de plataformas
        </p>
        <div className="grid grid-cols-3 gap-5 mb-5">
          {adsPlatforms.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </div>

        {/* Agente IA — full width */}
        <p className="text-[10px] font-bold tracking-[3px] uppercase mb-5 mt-10" style={{ color: "#7A8FA0" }}>
          Tecnología e IA
        </p>
        <ServiceCard svc={aiService} fullWidth />

        {/* CRM — 2 cols */}
        <p className="text-[10px] font-bold tracking-[3px] uppercase mb-5 mt-10" style={{ color: "#7A8FA0" }}>
          Capacitación CRM
        </p>
        <div className="grid grid-cols-2 gap-5">
          {crmServices.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </div>

        {/* Nota pauta */}
        <div className="flex items-start gap-2 mt-8">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p className="text-[12px] italic" style={{ color: "#7A8FA0" }}>
            El presupuesto publicitario se paga directamente a Meta, Google o TikTok. InnovArtis cobra únicamente sus honorarios de gestión.
          </p>
        </div>
      </div>
    </section>
  );
}
