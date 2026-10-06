"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, WA_ASESORIA } from "./constants";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() || "/";
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

  // Escape cierra el menú móvil.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || open ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"}`}
    >
      <div className="max-w-[1150px] mx-auto px-4 md:px-6 h-[68px] flex items-center justify-between gap-6">
        <Link
          href="/"
          onClick={close}
          className="font-heading text-[22px] tracking-[0.08em] text-navy shrink-0"
          aria-label="INNOVARTIS, ir al inicio"
        >
          INNOV<span className="text-accent">ARTIS</span>
        </Link>

        <nav aria-label="Menú principal" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`link-underline text-[14px] ${
                  active ? "text-accent-deep" : "text-ink-soft hover:text-accent-deep"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            aria-current={pathname === "/contacto" ? "page" : undefined}
            className="link-underline text-[14px] text-ink-soft hover:text-accent-deep"
          >
            Contacto
          </Link>
          <a
            href={WA_ASESORIA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid !py-2 !px-5"
          >
            Asesoría gratis
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={WA_ASESORIA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid !py-2 !px-4 !text-[13px] whitespace-nowrap"
          >
            Asesoría gratis
          </a>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-navy text-[22px] leading-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú principal"
          className="lg:hidden border-t border-line bg-paper px-4 md:px-6 pt-2 pb-6 flex flex-col"
        >
          {[...NAV_LINKS, { href: "/contacto", label: "Contacto" }].map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={`py-3 border-b border-line text-[16px] ${
                  active ? "text-accent-deep" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={WA_ASESORIA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-solid mt-5"
          >
            Quiero mi asesoría gratis
          </a>
        </nav>
      )}
    </header>
  );
}
