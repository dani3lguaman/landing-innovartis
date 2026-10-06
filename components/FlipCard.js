"use client";

import { useState } from "react";

// Tarjeta que gira: mouse encima (escritorio), toque (celular) o Tab/Enter (teclado).
// El frente y el reverso reciben su propio contenido; la altura la fija `height`.
export default function FlipCard({ front, back, height = "h-[300px]", label, className = "" }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip ${flipped ? "is-flipped" : ""} ${height} ${className}`}
      onClick={(e) => {
        // Los enlaces del reverso navegan; el resto de la tarjeta la gira.
        if (e.target.closest("a")) return;
        setFlipped((f) => !f);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (e.target.closest("a")) return;
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={label}
    >
      <div className="flip-inner">
        <div className="flip-face">{front}</div>
        <div className="flip-face flip-back">{back}</div>
      </div>
    </div>
  );
}
