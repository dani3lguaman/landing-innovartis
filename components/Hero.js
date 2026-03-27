export default function Hero() {
  return (
    <section
      className="relative pt-24 md:pt-[172px] px-5 md:px-[140px] pb-12 md:pb-[90px] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F7FA 100%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(232,98,26,0.07) 0%, transparent 60%)",
          animation: "pulseGlow 6s ease-in-out infinite",
        }}
      />

      {/* Badge */}
      <div
        className="inline-flex items-center mb-6 md:mb-8 px-4 py-1.5 rounded-[50px] text-brand text-[11px] font-semibold tracking-[2px] animate-bounceIn border-glow-animate"
        style={{ backgroundColor: "rgba(232,98,26,0.07)", border: "1px solid rgba(232,98,26,0.35)" }}
      >
        📍 Quito, Ecuador · Agencia de Marketing Digital
      </div>

      {/* H1 */}
      <h1 className="flex flex-col mb-5 md:mb-6">
        <span
          className="font-black leading-none tracking-[-2px] md:tracking-[-3px] animate-fadeInUp delay-100 text-[44px] md:text-[96px]"
          style={{ color: "#0F2236" }}
        >
          Estrategias que sí
        </span>
        <span
          className="text-shimmer font-black leading-none tracking-[-2px] md:tracking-[-3px] animate-fadeInUp delay-200 text-[44px] md:text-[96px]"
        >
          generan resultados
        </span>
      </h1>

      {/* Línea decorativa */}
      <div
        className="w-[60px] md:w-[80px] h-[3px] rounded-full mb-6 md:mb-8 animate-fadeIn delay-400"
        style={{ background: "linear-gradient(90deg, #E8621A, transparent)" }}
      />

      {/* Subtitle */}
      <p
        className="font-medium leading-[1.65] max-w-[600px] mb-6 md:mb-8 animate-fadeInUp delay-400 text-[17px] md:text-[22px]"
        style={{ color: "#4A5568" }}
      >
        Convierte tu inversión en clientes reales con{" "}
        <strong style={{ color: "#0F2236", fontWeight: 800 }}>estrategia y datos</strong>.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 md:mb-10 animate-fadeInUp delay-500">
        <a
          href="https://wa.me/593998620536?text=Hola%2C%20quiero%20agendar%20mi%20asesor%C3%ADa%20gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-3 text-white font-black rounded-[10px] w-full sm:w-auto justify-center"
          style={{
            backgroundColor: "#E8621A",
            fontSize: "15px",
            padding: "16px 28px",
            letterSpacing: "0.5px",
          }}
        >
          Agenda tu asesoría gratuita →
        </a>
        <a
          href="#planes"
          className="font-black rounded-[10px] transition-all hover:bg-brand hover:border-brand hover:text-white w-full sm:w-auto text-center"
          style={{
            fontSize: "14px",
            padding: "15px 28px",
            border: "1px solid #E2E8F0",
            color: "#0F2236",
            letterSpacing: "0.5px",
            backgroundColor: "#FFFFFF",
          }}
        >
          Ver planes
        </a>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 md:flex md:items-center gap-3 md:gap-6 mb-10 md:mb-14 animate-fadeIn delay-600">
        {[
          { icon: "🔒", text: "Trabajamos con contrato" },
          { icon: "📋", text: "RUC activo · Empresa legal" },
          { icon: "👥", text: "+8 clientes activos en Quito" },
          { icon: "📊", text: "Reportes mensuales reales" },
        ].map((badge) => (
          <div key={badge.text} className="flex items-center gap-2">
            <span className="text-[13px]">{badge.icon}</span>
            <span className="text-[12px] font-semibold" style={{ color: "#4A5568" }}>
              {badge.text}
            </span>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="flex items-center gap-3 mb-10 md:mb-14 animate-fadeIn delay-600">
        <span className="text-[10px] font-bold tracking-[2px]" style={{ color: "#7A8FA0" }}>
          SÍGUENOS
        </span>
        <div className="w-8 h-px" style={{ backgroundColor: "#E2E8F0" }} />
        {[
          {
            href: "https://www.instagram.com/innovartis.ec",
            label: "Instagram",
            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
          },
          {
            href: "https://www.tiktok.com/@innovartis.ec",
            label: "TikTok",
            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>,
          },
          {
            href: "https://www.facebook.com/innovartis.ec",
            label: "Facebook",
            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
          },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="w-[34px] h-[34px] rounded-[7px] flex items-center justify-center hover:text-brand hover:scale-110 transition-all"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              color: "#7A8FA0",
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Stats */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 pt-10 md:pt-14 animate-fadeIn delay-700"
        style={{ borderTop: "1px solid #E2E8F0" }}
      >
        {[
          { value: "Meta + TikTok", label: "Campañas activas" },
          { value: "100%", label: "Resultados medibles" },
          { value: "Contratos", label: "Transparencia total" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && (
              <div className="hidden sm:block w-px h-10 mx-8 md:mx-12" style={{ backgroundColor: "#E2E8F0" }} />
            )}
            <div className="flex flex-col gap-1">
              <span className="text-brand font-black text-[20px] md:text-[22px]">{stat.value}</span>
              <span className="text-[11px] font-medium" style={{ color: "#7A8FA0" }}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
