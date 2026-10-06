"use client";

import { useRef } from "react";

// Inclina la tarjeta hacia el mouse (máx. 8°). En celular y con movimiento reducido no hace nada.
export default function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) scale(1.02)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={(e) => e.pointerType === "mouse" && onMove(e)} onPointerLeave={reset}>
      {children}
    </div>
  );
}
