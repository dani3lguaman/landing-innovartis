"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#casos", label: "Casos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#web", label: "Web y asistentes" },
  { href: "#metodo", label: "Método" },
  { href: "#planes", label: "Planes" },
  { href: "#equipo", label: "Equipo" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // Se oculta al bajar y reaparece al subir, salvo con el menú abierto.
      setHidden(!open && y > 200 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"}`}
    >
      <div className="max-w-[1150px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="font-heading text-[22px] tracking-[0.08em] text-navy">
          INNOV<span className="text-accent">ARTIS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[14px] text-ink-soft hover:text-accent-deep"
            >
              {l.label}
            </a>
          ))}
          <a href="#conocerte" className="btn-outline !py-2 !px-6">
            Hablemos
          </a>
        </nav>

        <button
          className="md:hidden text-navy text-[22px] leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a href="#conocerte" onClick={() => setOpen(false)} className="btn-outline w-fit">
            Hablemos
          </a>
        </nav>
      )}
    </header>
  );
}
