"use client";

import { useEffect, useMemo, useState } from "react";
import { CAMPOS_MES, CAMPOS_NUEVO } from "@/lib/brief/campos-mes";
import { WA_NUMBER } from "./constants";

// El cliente llena su brief en una sola página. Si el guardado falla, puede enviarlo por WhatsApp.

const CLASE_CAMPO = "w-full border border-line px-4 py-3 text-[15px] text-ink bg-white focus:border-accent focus:outline-none";

export default function BriefMesForm() {
  const [tipo, setTipo] = useState("renovacion");
  const [contacto, setContacto] = useState({ negocio: "", nombre: "", whatsapp: "" });
  const [respuestas, setRespuestas] = useState({});
  const [trampa, setTrampa] = useState("");
  const [estado, setEstado] = useState("llenando"); // llenando | enviando | listo | error
  const [error, setError] = useState(null);

  // ?tipo=nuevo agrega la guía de marca; ?negocio=Nombre lo deja escrito para el cliente.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("tipo") === "nuevo") setTipo("nuevo");
    const negocio = q.get("negocio");
    if (negocio) setContacto((c) => ({ ...c, negocio: negocio.slice(0, 120) }));
  }, []);

  const campos = useMemo(() => (tipo === "nuevo" ? [...CAMPOS_NUEVO, ...CAMPOS_MES] : CAMPOS_MES), [tipo]);

  const waResumen = useMemo(() => {
    const lineas = [
      `Hola InnovArtis, envío mi brief del mes de ${contacto.negocio || "mi negocio"}.`,
      ...campos.filter((q) => respuestas[q.id]).map((q) => `• ${q.pregunta} ${respuestas[q.id]}`),
    ];
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lineas.join("\n").slice(0, 3500))}`;
  }, [campos, contacto.negocio, respuestas]);

  const responder = (id, valor) => setRespuestas((r) => ({ ...r, [id]: valor }));

  const enviar = async (ev) => {
    ev.preventDefault();
    setError(null);
    const falta = campos.find((q) => q.requerido && !respuestas[q.id]?.trim());
    if (falta) {
      setError(`Falta responder: ${falta.pregunta}`);
      return;
    }
    setEstado("enviando");
    try {
      const res = await fetch("/api/brief-mes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, contacto, respuestas, sitio_web: trampa }),
      });
      if (!res.ok) {
        const cuerpo = await res.json().catch(() => ({}));
        setError(res.status === 400 ? "Revise su WhatsApp y las preguntas obligatorias." : cuerpo.error || `Error ${res.status}`);
        setEstado(res.status === 400 ? "llenando" : "error");
        return;
      }
      setEstado("listo");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("No pudimos conectarnos.");
      setEstado("error");
    }
  };

  if (estado === "listo" || estado === "error") {
    const listo = estado === "listo";
    return (
      <div className="bg-white border border-line p-6 sm:p-8 md:p-10 text-center">
        <p className="display-num text-accent-deep text-[46px] leading-none mb-4">{listo ? "✓" : "!"}</p>
        <h3 className="font-heading text-navy text-[24px] mb-3">{listo ? "Recibimos su brief." : "Su brief no se guardó."}</h3>
        <p className="text-[14.5px] leading-[1.8] text-ink-soft max-w-[460px] mx-auto mb-7">
          {listo
            ? "Muchas gracias. Nuestro equipo lo revisa y le confirma por WhatsApp. Avísenos con este botón para atenderlo enseguida."
            : `${error} Envíelo por WhatsApp y no se pierde nada.`}
        </p>
        <a href={waResumen} target="_blank" rel="noopener noreferrer" className="btn-solid inline-block">
          Enviar por WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="bg-white border border-line p-6 sm:p-8 md:p-10 flex flex-col gap-7">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["negocio", "Su negocio"],
          ["nombre", "Su nombre"],
          ["whatsapp", "Su WhatsApp"],
        ].map(([id, etiqueta]) => (
          <label key={id} className="block">
            <span className="block text-navy font-extrabold text-[14px] mb-2">{etiqueta}</span>
            <input
              required
              type={id === "whatsapp" ? "tel" : "text"}
              maxLength={120}
              value={contacto[id]}
              onChange={(e) => setContacto((c) => ({ ...c, [id]: e.target.value }))}
              className={CLASE_CAMPO}
            />
          </label>
        ))}
      </div>

      {campos.map((q) => (
        <div key={q.id}>
          <p className="text-navy font-extrabold text-[15.5px] mb-1">
            {q.pregunta}
            {q.requerido && <span className="text-accent-deep"> *</span>}
          </p>
          {q.ayuda && <p className="text-[13px] text-ink-soft mb-2">{q.ayuda}</p>}
          {q.tipo === "opciones" ? (
            <div className="flex flex-col gap-2 mt-2">
              {q.opciones.map((op) => (
                <button
                  key={op}
                  type="button"
                  onClick={() => responder(q.id, op)}
                  aria-pressed={respuestas[q.id] === op}
                  className={`text-left text-[14.5px] px-5 py-3 border transition-colors text-ink ${
                    respuestas[q.id] === op ? "border-accent bg-paper-soft font-semibold" : "border-line hover:border-accent hover:bg-paper-soft"
                  }`}
                >
                  {respuestas[q.id] === op ? "✓ " : ""}{op}
                </button>
              ))}
            </div>
          ) : q.tipo === "largo" ? (
            <textarea
              rows={3}
              maxLength={800}
              aria-label={q.pregunta}
              value={respuestas[q.id] || ""}
              onChange={(e) => responder(q.id, e.target.value)}
              className={`${CLASE_CAMPO} mt-2`}
            />
          ) : (
            <input
              type="text"
              maxLength={120}
              aria-label={q.pregunta}
              value={respuestas[q.id] || ""}
              onChange={(e) => responder(q.id, e.target.value)}
              className={`${CLASE_CAMPO} mt-2`}
            />
          )}
        </div>
      ))}

      {/* Campo trampa para bots: las personas no lo ven. */}
      <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" aria-hidden="true" value={trampa} onChange={(e) => setTrampa(e.target.value)} className="hidden" />

      <p className="text-[13px] leading-[1.7] text-ink-soft">
        Este brief queda aprobado al enviarlo. Cualquier cambio de concepto, guion o fecha lo podemos recibir hasta 48 horas
        antes de la grabación o publicación; pasado ese plazo producimos con lo aprobado.
      </p>
      {error && <p className="text-[14px] text-accent-deep font-semibold">{error}</p>}
      <button type="submit" disabled={estado === "enviando"} className="btn-solid disabled:opacity-60">
        {estado === "enviando" ? "Enviando…" : "Enviar mi brief →"}
      </button>
    </form>
  );
}
