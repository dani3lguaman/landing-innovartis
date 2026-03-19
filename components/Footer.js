const serviceLinks = ["Meta Ads", "TikTok Ads", "Diseño Web", "Producción de Contenido"];
const companyLinks = ["Planes y Precios", "Quiénes Somos", "Contacto"];
const contactInfo = ["📞 099 862 0536", "✉️ innuevate@gmail.com", "📍 Quito, Ecuador"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080F18", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      {/* Main */}
      <div className="px-[120px] pt-[52px] pb-[48px] flex gap-[80px]">
        {/* Brand */}
        <div className="w-[280px] flex flex-col gap-[14px]">
          <div className="flex items-center gap-3">
            <div
              className="w-[34px] h-[34px] rounded-[6px] bg-brand flex items-center justify-center flex-shrink-0"
            >
              <span className="text-white font-bold text-[12px]">IA</span>
            </div>
            <span className="text-white font-black text-[17px] tracking-[1px]">INNOVARTIS</span>
          </div>
          <p className="text-[13px] leading-[1.6] max-w-[240px]" style={{ color: "#555555" }}>
            Estrategia que sí genera resultados.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-2.5 pt-1">
            {[
              { label: "f", title: "Facebook" },
              { label: "in", title: "LinkedIn" },
              { label: "tt", title: "TikTok" },
            ].map((s) => (
              <button
                key={s.title}
                title={s.title}
                className="w-[34px] h-[34px] rounded-[6px] flex items-center justify-center font-bold text-[13px] hover:text-white transition-colors cursor-pointer"
                style={{ backgroundColor: "#1A1A1A", color: "#666666" }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex gap-[80px] flex-1">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-[12px] tracking-[1px]">Servicios</h4>
            {serviceLinks.map((item) => (
              <a key={item} href="#servicios" className="text-[13px] hover:text-white transition-colors" style={{ color: "#555555" }}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-[12px] tracking-[1px]">Empresa</h4>
            {companyLinks.map((item) => (
              <a key={item} href="#" className="text-[13px] hover:text-white transition-colors" style={{ color: "#555555" }}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-[12px] tracking-[1px]">Contacto</h4>
            {contactInfo.map((item) => (
              <p key={item} className="text-[13px]" style={{ color: "#555555" }}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bar */}
      <div
        className="h-[52px] px-[120px] flex items-center justify-between"
        style={{ backgroundColor: "#050C14", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-[12px]" style={{ color: "#333333" }}>
          © 2026 Innovartis. Todos los derechos reservados.
        </p>
        <p className="text-[12px]" style={{ color: "#333333" }}>
          Quito, Ecuador · Agencia de Marketing Digital
        </p>
      </div>
    </footer>
  );
}
