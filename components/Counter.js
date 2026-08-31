"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ value, duration = 1600, prefix = "", suffix = "", className = "" }) {
  const ref = useRef(null);
  // SSR muestra el valor final; la animación de conteo es un extra del cliente.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(el);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(value * eased));
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  const final = `${prefix}${value.toLocaleString("es-EC")}${suffix}`;

  // El valor final, invisible, reserva el ancho: contar de 0 a 6.991 cambia el
  // número de dígitos y sin esto la línea se movería mientras corre (CLS).
  return (
    <span ref={ref} className={`relative inline-grid ${className}`}>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {final}
      </span>
      <span className="col-start-1 row-start-1">
        {prefix}
        {display.toLocaleString("es-EC")}
        {suffix}
      </span>
    </span>
  );
}
