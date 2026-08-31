"use client";

import { useEffect, useRef } from "react";

// React no escribe el atributo `muted` en el HTML del servidor, y sin él
// Chrome bloquea el autoplay. Se fuerza por propiedad al montar.
export default function AutoVideo({ src, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
    />
  );
}
