"use client";

import { useCallback, useEffect, useState } from "react";

// Notas del equipo de una página interna. El texto se cifra aquí con la clave de la página antes de salir del navegador;
// al servidor solo le llega un token sacado de la clave (para dejar pasar) y el texto cifrado.
export const EQUIPO = ["Daniel", "Maura", "Pame", "Joel", "Mario"];
export const RE_MENCION = new RegExp(`@(${EQUIPO.join("|")})\\b`, "gi");

const aB64 = (u8) => { let s = ""; for (let i = 0; i < u8.length; i += 8192) s += String.fromCharCode.apply(null, u8.subarray(i, i + 8192)); return btoa(s); };
const deB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const deB64url = (s) => deB64(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
const aB64url = (u8) => aB64(u8).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

export function menciones(texto) {
  const set = new Set();
  for (const m of String(texto).matchAll(RE_MENCION)) set.add(EQUIPO.find((n) => n.toLowerCase() === m[1].toLowerCase()));
  return [...set].filter(Boolean);
}

export default function useNotas(pagina, clave) {
  const [notas, setNotas] = useState([]);
  const [error, setError] = useState(null);
  const [llaves, setLlaves] = useState(null);

  // Llave AES de la página y token de acceso (SHA-256 de "innovartis-notas:" + clave).
  useEffect(() => {
    if (!clave) return;
    (async () => {
      const aes = await crypto.subtle.importKey("raw", deB64url(clave), "AES-GCM", false, ["encrypt", "decrypt"]);
      const h = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode("innovartis-notas:" + clave)));
      setLlaves({ aes, token: aB64url(h) });
    })().catch(() => setError("No se pudo preparar el cifrado de las notas."));
  }, [clave]);

  const pedir = useCallback(
    async (metodo, cuerpo) => {
      const url = metodo === "GET" ? `/api/gestion/notas?pagina=${pagina}` : "/api/gestion/notas";
      const r = await fetch(url, {
        method: metodo,
        cache: "no-store",
        headers: { "x-gestion-token": llaves.token, ...(cuerpo ? { "Content-Type": "application/json" } : {}) },
        body: cuerpo ? JSON.stringify({ pagina, ...cuerpo }) : undefined,
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Error");
      return j;
    },
    [pagina, llaves]
  );

  const recargar = useCallback(async () => {
    if (!llaves) return;
    try {
      const { notas: crudas } = await pedir("GET");
      const abiertas = await Promise.all(
        (crudas || []).map(async (n) => {
          try {
            const plano = await crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(n.iv) }, llaves.aes, deB64(n.ct));
            const { texto, refTitulo } = JSON.parse(new TextDecoder().decode(plano));
            return { ...n, texto, refTitulo };
          } catch {
            return null;
          }
        })
      );
      setNotas(abiertas.filter(Boolean).sort((a, b) => a.ts - b.ts));
      setError(null);
    } catch (e) {
      setError(e.message === "No autorizado." ? "Esta clave no puede ver las notas." : "No se pudieron cargar las notas. Reintenta en un momento.");
    }
  }, [llaves, pedir]);

  useEffect(() => {
    recargar();
    const t = setInterval(() => { if (document.visibilityState === "visible") recargar(); }, 45000);
    return () => clearInterval(t);
  }, [recargar]);

  const enviar = useCallback(
    async ({ ref, refTitulo, autor, texto }) => {
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, llaves.aes, new TextEncoder().encode(JSON.stringify({ texto, refTitulo }))));
      await pedir("POST", { ref, autor, menciones: menciones(texto), iv: aB64(iv), ct: aB64(ct) });
      await recargar();
    },
    [llaves, pedir, recargar]
  );

  const marcar = useCallback(async (id, hecho, por) => { await pedir("PATCH", { id, hecho, por }); await recargar(); }, [pedir, recargar]);
  const borrar = useCallback(async (id) => { await pedir("DELETE", { id }); await recargar(); }, [pedir, recargar]);

  return { notas, error, listo: Boolean(llaves), enviar, marcar, borrar, recargar };
}
