export default function Header() {
  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20"
      style={{ height: "72px", backgroundColor: "rgba(13,31,48,0.95)", backdropFilter: "blur(12px)" }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-[6px] bg-brand flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-[13px]">IA</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-black text-[18px] tracking-[2px]">INNOVARTIS</span>
          <span className="text-[13px] tracking-[1px]" style={{ color: "#666666", fontSize: "9px" }}>
            Agencia de Marketing · Quito
          </span>
        </div>
      </a>

      {/* Nav */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] font-medium transition-colors hover:text-white"
            style={{ color: "#AAAAAA" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/593998620536"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-wa text-white text-[13px] font-bold px-5 py-[10px] rounded-[6px] hover:opacity-90 transition-opacity"
        >
          WhatsApp
        </a>
        <a
          href="#planes"
          className="bg-brand text-white text-[13px] font-bold px-[22px] py-[10px] rounded-[6px] hover:opacity-90 transition-opacity"
        >
          Ver Planes →
        </a>
      </div>
    </header>
  );
}
