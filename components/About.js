const certifications = [
  { title: "Diplomado en Community Management", issuer: "Letrada Communication · UTE", year: "2024", image: "/cert1.jpg" },
  { title: "Analista de Marketing Digital", issuer: "APEM — Escuela de Marketing", year: "2024", image: "/cert2.jpg" },
  { title: "Certificado en Ventas Inbound", issuer: "HubSpot Academy", year: "2025", image: "/cert3.jpg" },
  { title: "Curso Completo Meta ADS Pro", issuer: "Letrada Academy Brasil", year: "2024", image: "/cert4.jpg" },
];

const trustBadges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Trabajamos con contrato",
    description: "Cada cliente firma un contrato de servicios. Sin sorpresas, sin letra chica.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    title: "RUC activo",
    description: "Empresa legalmente constituida en Ecuador. Emitimos facturas.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-3 3"/>
      </svg>
    ),
    title: "Reportes reales",
    description: "Cada mes recibes un reporte con métricas reales: alcance, leads y costo por venta.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Equipo dedicado",
    description: "No somos freelancers. Tienes un equipo: estratega, diseñadora y ejecutiva de cuentas.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-14 md:py-[90px] px-5 md:px-[120px]"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Header */}
      <div className="mb-10 md:mb-[52px]" data-animate>
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
          Quiénes somos
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
          <h2
            className="font-black text-[36px] md:text-[64px] tracking-[-2px] leading-[0.95]"
            style={{ color: "#0F2236" }}
          >
            No somos una<br />
            <span className="text-brand">agencia común.</span>
          </h2>
          <p
            className="text-[15px] md:text-[17px] font-medium leading-[1.7] md:max-w-[460px] md:mb-1"
            style={{ color: "#4A5568" }}
          >
            Somos un equipo especializado en publicidad digital con certificaciones reales, contratos firmados y compromiso total con tus resultados.
          </p>
        </div>
      </div>

      {/* Daniel + equipo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-14">
        {/* Daniel card */}
        <div
          className="md:col-span-1 rounded-[18px] p-6 md:p-7 flex flex-col gap-5 relative overflow-hidden"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(232,98,26,0.3)",
            boxShadow: "0 4px 20px rgba(232,98,26,0.08)",
          }}
          data-animate
        >
          <div className="w-full aspect-square rounded-[12px] overflow-hidden mb-2">
            <img
              src="/daniel.jpg"
              alt="Daniel Guamán — CEO InnovArtis"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="text-brand text-[10px] font-bold tracking-[2px] uppercase">CEO · Fundador</span>
            <h3 className="font-black text-[20px] md:text-[22px] mt-1" style={{ color: "#0F2236" }}>Daniel Guamán</h3>
            <p className="text-[13px] font-medium mt-1.5" style={{ color: "#4A5568" }}>
              Especialista certificado en Meta Ads y publicidad digital. La cara y garantía de cada campaña.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Meta ADS Pro", "HubSpot", "APEM", "UTE"].map((cert) => (
              <span
                key={cert}
                className="text-[10px] font-bold px-2.5 py-1 rounded-[4px]"
                style={{ backgroundColor: "rgba(232,98,26,0.08)", color: "#E8621A", border: "1px solid rgba(232,98,26,0.2)" }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="rounded-[14px] p-5 md:p-6 flex flex-col gap-3"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
              data-animate
            >
              <div
                className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(232,98,26,0.08)" }}
              >
                {badge.icon}
              </div>
              <h4 className="font-black text-[15px] md:text-[16px]" style={{ color: "#0F2236" }}>{badge.title}</h4>
              <p className="text-[13px] font-medium leading-[1.6]" style={{ color: "#4A5568" }}>
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div data-animate>
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-6 uppercase">
          Certificaciones oficiales
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-[14px] p-4 md:p-5 flex flex-col gap-3"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {cert.image ? (
                <div className="w-full h-[110px] md:h-[130px] rounded-[8px] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-[110px] md:h-[130px] rounded-[8px] flex flex-col items-center justify-center gap-1"
                  style={{ backgroundColor: "#F4F7FA", border: "1px dashed #E2E8F0" }}
                >
                  <span className="text-[10px]" style={{ color: "#7A8FA0" }}>Próximamente</span>
                </div>
              )}
              <div>
                <p className="font-bold text-[11px] md:text-[12px] leading-tight" style={{ color: "#0F2236" }}>{cert.title}</p>
                <p className="text-[10px] md:text-[11px] mt-1" style={{ color: "#7A8FA0" }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galería del equipo */}
      <div className="mt-12 md:mt-16" data-animate>
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-6 uppercase">
          El equipo en acción
        </p>
        <div className="rounded-[16px] overflow-hidden" style={{ height: "260px", maxHeight: "340px" }}>
          <img
            src="/servicio1.jpg"
            alt="Equipo InnovArtis en sesión de grabación con cliente"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
