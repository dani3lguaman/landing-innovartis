"use client";

import { useEffect, useRef, useState } from "react";

// El contenido es visible por defecto (SSR / sin JS). La animación de entrada
// solo se aplica a elementos que aún están fuera del viewport al hidratar.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("static"); // static | hidden | shown

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    setPhase("hidden");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPhase("shown");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cls =
    phase === "static"
      ? className
      : `reveal ${phase === "shown" ? "is-visible" : ""} ${className}`;

  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
