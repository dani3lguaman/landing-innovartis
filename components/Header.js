"use client";

import { useState } from "react";
import { WA_LINK } from "./constants";

const links = [
  { href: "#casos", label: "Casos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#planes", label: "Planes" },
  { href: "#equipo", label: "Equipo" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-[1150px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="font-heading text-[22px] tracking-[0.08em] text-navy">
          INNOV<span className="text-accent">ARTIS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink-soft hover:text-accent-deep transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2.5 !px-6">
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
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline w-fit">
            Hablemos
          </a>
        </nav>
      )}
    </header>
  );
}
