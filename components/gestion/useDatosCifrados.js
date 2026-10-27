"use client";

import { useEffect, useState } from "react";

// Abre los datos cifrados de una página interna (/gestion/…). La clave llega en el enlace (#k=…), nunca va al
// servidor, se guarda en este navegador para la próxima vez y se borra de la barra de direcciones.
const deB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const deB64url = (s) => deB64(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));

export default function useDatosCifrados(nombre) {
  const [estado, setEstado] = useState({ cargando: true, error: null, datos: null });

  useEffect(() => {
    let vivo = true;
    const memoria = `innovartis-gestion-${nombre}`;
    (async () => {
      try {
        let clave = new URLSearchParams(window.location.hash.slice(1)).get("k");
        if (clave) {
          try { localStorage.setItem(memoria, clave); } catch {}
          window.history.replaceState(null, "", window.location.pathname);
        } else {
          try { clave = localStorage.getItem(memoria); } catch {}
        }
        if (!clave) throw new Error("sin-clave");
        const r = await fetch(`/gestion-datos/${nombre}.enc.json`, { cache: "no-store" });
        if (!r.ok) throw new Error("sin-datos");
        const { iv, ct } = await r.json();
        const llave = await crypto.subtle.importKey("raw", deB64url(clave), "AES-GCM", false, ["decrypt"]);
        const plano = await crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(iv) }, llave, deB64(ct));
        const datos = JSON.parse(new TextDecoder().decode(plano));
        if (vivo) setEstado({ cargando: false, error: null, datos });
      } catch (e) {
        if (e && e.name === "OperationError") { try { localStorage.removeItem(memoria); } catch {} }
        if (vivo) setEstado({ cargando: false, error: e && e.message === "sin-clave" ? "sin-clave" : e && e.message === "sin-datos" ? "sin-datos" : "clave", datos: null });
      }
    })();
    return () => { vivo = false; };
  }, [nombre]);

  return estado;
}

// Mensaje común cuando no se puede abrir la página.
export function AvisoAcceso({ error }) {
  const texto =
    error === "sin-clave"
      ? "Esta página es interna. Ábrela con el enlace completo que te dio Daniel (termina en #k=…)."
      : error === "sin-datos"
      ? "Todavía no hay datos publicados. Vuelve a intentar en unos minutos."
      : "El enlace no es el correcto o cambió. Pídele a Daniel el enlace actualizado.";
  return (
    <div className="bg-white border border-line p-6 md:p-8 max-w-[640px]">
      <p className="kicker mb-3">Acceso</p>
      <p className="text-[15px] text-ink leading-[1.7]">{texto}</p>
    </div>
  );
}
