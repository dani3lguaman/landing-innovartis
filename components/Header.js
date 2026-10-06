"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, WA_LINK, WA_ASESORIA, WA_NUMBER_DISPLAY } from "./constants";

// Cabecera estilo AQUABEC v2: franja de datos + barra blanca con logo + barra navy con las páginas.

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const isActive = (href) => (href === "/" ? path === "/" : path?.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? "shadow-[0_2px_16px_rgba(44,74,99,0.12)]" : ""}`}>
      {/* Franja de datos */}
      <div className="hidden md:block bg-paper-soft border-b border-line text-[12.5px] text-ink-soft">
        <div className="max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-between">
          <p>Agencia de marketing · Quito, Ecuador · Atendemos todo el país</p>
          <div className="flex items-center gap-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-deep">
              WhatsApp {WA_NUMBER_DISPLAY}
            </a>
            <a href="mailto:innuevate@gmail.com" className="hover:text-accent-deep">
              innuevate@gmail.com
            </a>
            <a href="/planes#oferta" className="bg-navy text-white px-3 h-9 inline-flex items-center font-semibold">
              Oferta de octubre
            </a>
          </div>
        </div>
      </div>

      {/* Logo + acciones */}
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
        <Link href="/" className="text-[24px] font-extrabold tracking-[0.06em] text-navy" aria-label="INNOVARTIS, inicio">
          <span className="text-accent">INNOV</span>ARTIS
        </Link>
        <div className="hidden md:flex items-center gap-5">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-navy hover:text-accent-deep">
            {WA_NUMBER_DISPLAY}
          </a>
          <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid !py-2.5 !px-6">
            Quiero mi asesoría gratis
          </a>
        </div>
        <button
          className="md:hidden text-navy text-[24px] leading-none w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Barra de páginas */}
      <nav className="hidden md:block bg-navy" aria-label="Páginas">
        <ul className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-1">
          {NAV.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 px-3.5 h-11 text-[13.5px] font-semibold transition-colors ${
                  isActive(l.href) ? "text-white bg-white/10 shadow-[inset_0_-3px_0_#ee7b4d]" : "text-white/85 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
                {l.badge && <span className="badge bg-accent text-white !text-[9px] !px-1.5 !py-0.5">{l.badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="md:hidden border-t border-line bg-white px-6 py-3 flex flex-col" aria-label="Páginas">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 border-b border-line text-[15px] font-semibold flex items-center gap-2 ${
                isActive(l.href) ? "text-accent-deep" : "text-navy"
              }`}
            >
              {l.label}
              {l.badge && <span className="badge bg-accent text-white !text-[9px] !px-1.5 !py-0.5">{l.badge}</span>}
            </Link>
          ))}
          <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid mt-4 mb-2">
            Quiero mi asesoría gratis
          </a>
        </nav>
      )}
    </header>
  );
}
