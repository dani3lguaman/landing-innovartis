"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 transition-all duration-300"
      style={{
        height: "72px",
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-[6px] bg-brand flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <span className="text-white font-bold text-[13px]">IA</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-black text-[18px] tracking-[2px]" style={{ color: "#0F2236" }}>INNOVARTIS</span>
          <span className="text-[9px] tracking-[1px]" style={{ color: "#7A8FA0" }}>
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
            className="text-[13px] font-medium transition-colors hover:text-brand relative group"
            style={{ color: "#4A5568" }}
          >
            {link.label}
            <span
              className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand rounded-full transition-all duration-300 group-hover:w-full"
            />
          </a>
        ))}
      </nav>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/593998620536?text=Hola%2C%20quiero%20m%C3%A1s%20clientes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[13px] font-bold px-5 py-[10px] rounded-[6px] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#25D366" }}
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
