"use client";

import { useEffect, useMemo, useState } from "react";
import { PREGUNTAS, CONTACTO, AVISO_PRIVACIDAD } from "@/lib/brief/opciones";
import { WA_NUMBER } from "./constants";
import BriefDocumento from "./BriefDocumento";

// Cuestionario por pasos de "Aterrizamos tus ideas": misma experiencia que Discovery.js
// (una pregunta por pantalla, barra de progreso, volver, y WhatsApp si algo falla).

const TOTAL = PREGUNTAS.length + 1; // + datos de contacto
const PASOS_TRABAJO = [
  "Leyendo su idea…",
  "Revisando su rubro…",
  "Buscando trabajos parecidos en nuestro portafolio…",
  "Armando sus 3 ideas…",
  "Armando su cronograma…",
];

const vacias = () => Object.fromEntries(PREGUNTAS.map((p) => [p.id, p.tipo === "varios" ? [] : ""]));

export default function AterrizaForm() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState(vacias);
  const [rubroOtro, setRubroOtro] = useState("");
  const [datos, setDatos] = useState({ nombre: "", negocio: "", whatsapp: "", email: "" });
  const [consiente, setConsiente] = useState(false);
  const [trampa, setTrampa] = useState("");
  const [estado, setEstado] = useState("llenando"); // llenando | trabajando | listo | pendiente | error
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [tick, setTick] = useState(0);

  const p = PREGUNTAS[paso];
  const progreso = Math.round((paso / TOTAL) * 100);

  useEffect(() => {
    if (estado !== "trabajando") return;
    const t = setInterval(() => setTick((n) => Math.min(n + 1, PASOS_TRABAJO.length - 1)), 4500);
    return () => clearInterval(t);
  }, [estado]);

  useEffect(() => {
    if (estado === "listo" || estado === "pendiente") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [estado]);

  const waRespaldo = useMemo(() => {
    const lineas = [
      "Hola InnovArtis, quiero aterrizar mi idea:",
      `• Negocio: ${datos.negocio || "—"} · ${datos.nombre || ""}`,
      ...PREGUNTAS.map((q) => {
        const v = respuestas[q.id];
        return `• ${q.pregunta} → ${Array.isArray(v) ? v.join(", ") || "—" : v || "—"}`;
      }),
    ];
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lineas.join("\n"))}`;
  }, [datos, respuestas]);

  const siguiente = () => setPaso((n) => Math.min(n + 1, TOTAL - 1));

  const elegirUno = (valor) => {
    setRespuestas((r) => ({ ...r, [p.id]: valor }));
    if (!(p.id === "rubro" && valor === "Otro")) siguiente();
  };

  const alternar = (valor) =>
    setRespuestas((r) => {
      const lista = r[p.id];
      if (lista.includes(valor)) return { ...r, [p.id]: lista.filter((x) => x !== valor) };
      if (lista.length >= p.maxElegir) return r;
      return { ...r, [p.id]: [...lista, valor] };
    });

  const enviar = async (ev) => {
    ev.preventDefault();
    setError(null);
    setEstado("trabajando");
    setTick(0);
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          respuestas: { ...respuestas, rubro_otro: rubroOtro },
          contacto: datos,
          consentimiento: consiente,
          sitio_web: trampa,
        }),
      });
      const cuerpo = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(cuerpo.errores?.join(" ") || cuerpo.error || `Error ${res.status}`);
        setEstado(res.status === 429 ? "error" : "llenando");
        return;
      }
      setResultado(cuerpo);
      setEstado(cuerpo.estado === "borrador" && cuerpo.brief ? "listo" : "pendiente");
    } catch {
      setError("No pudimos conectarnos. Tu idea no se pierde: envíanosla por WhatsApp.");
      setEstado("error");
    }
  };

  // ---- Resultado ----
  if (estado === "listo" && resultado) {
    const enlace = resultado.enlace ? `${window.location.origin}${resultado.enlace}` : null;
    return <BriefDocumento {...resultado} enlace={enlace} />;
  }

  return (
    <div className="bg-white border border-line">
      {estado === "llenando" && (
        <div className="h-1 bg-line">
          <div className="h-full bg-accent transition-all duration-500" style={{ width: `${progreso}%` }} />
        </div>
      )}

      <div className="p-6 sm:p-8 md:p-10" aria-live="polite">
        {estado === "trabajando" && (
          <div className="py-10 text-center">
            <div className="flex justify-center gap-1.5 mb-6" aria-hidden="true">
              <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
            </div>
            <p className="kicker mb-3">El sistema está trabajando</p>
            <p className="font-heading text-navy text-[22px] mb-2">{PASOS_TRABAJO[tick]}</p>
            <p className="text-[13.5px] text-ink-soft">Toma entre 15 y 40 segundos. No cierres esta página.</p>
          </div>
        )}

        {(estado === "pendiente" || estado === "error") && (
          <div className="text-center py-8">
            <p className="display-num text-accent-deep text-[46px] leading-none mb-4">✓</p>
            <h3 className="font-heading text-navy text-[24px] mb-3">
              {estado === "pendiente" ? "Recibimos tu idea." : "Algo no salió como esperábamos."}
            </h3>
            <p className="text-[14.5px] leading-[1.8] text-ink-soft max-w-[440px] mx-auto mb-7">
              {estado === "pendiente"
                ? `Nuestro equipo arma tu plan para ${datos.negocio || "tu negocio"} y te lo entrega en 24 horas hábiles.`
                : error}
            </p>
            <a href={waRespaldo} target="_blank" rel="noopener noreferrer" className="btn-solid inline-block">
              Enviar mi idea por WhatsApp →
            </a>
          </div>
        )}

        {estado === "llenando" && p && (
          <>
            <p className="kicker !text-[10px] mb-4">Pregunta {paso + 1} de {TOTAL}</p>
            <h3 className="font-heading text-navy text-[24px] md:text-[29px] leading-[1.2] mb-2">{p.pregunta}</h3>
            <p className="text-[13.5px] text-ink-soft mb-6">{p.ayuda}</p>

            {p.tipo === "uno" && (
              <div className="flex flex-col gap-2.5">
                {p.opciones.map((op) => (
                  <button
                    key={op}
                    type="button"
                    onClick={() => elegirUno(op)}
                    aria-pressed={respuestas[p.id] === op}
                    className={`text-left text-[14.5px] px-5 py-3.5 border transition-colors ${
                      respuestas[p.id] === op ? "border-accent bg-paper-soft" : "border-line hover:border-accent hover:bg-paper-soft"
                    } text-ink`}
                  >
                    {op}
                  </button>
                ))}
                {p.id === "rubro" && respuestas.rubro === "Otro" && (
                  <div className="mt-2 flex flex-col gap-3">
                    <input
                      type="text"
                      maxLength={60}
                      value={rubroOtro}
                      onChange={(e) => setRubroOtro(e.target.value)}
                      placeholder="¿A qué te dedicas? (ej. eventos, mascotas…)"
                      className="w-full border border-line px-4 py-3 text-[15px] text-ink bg-white focus:border-accent focus:outline-none"
                    />
                    <button type="button" onClick={siguiente} className="btn-solid">Siguiente →</button>
                  </div>
                )}
              </div>
            )}

            {p.tipo === "varios" && (
              <div className="flex flex-col gap-2.5">
                {p.opciones.map((op) => {
                  const activo = respuestas[p.id].includes(op);
                  return (
                    <button
                      key={op}
                      type="button"
                      onClick={() => alternar(op)}
                      aria-pressed={activo}
                      className={`text-left text-[14.5px] px-5 py-3.5 border transition-colors text-ink ${
                        activo ? "border-accent bg-paper-soft font-semibold" : "border-line hover:border-accent hover:bg-paper-soft"
                      }`}
                    >
                      {activo ? "✓ " : ""}{op}
                    </button>
                  );
                })}
                <button type="button" onClick={siguiente} disabled={!respuestas[p.id].length} className="btn-solid mt-2 disabled:opacity-50">
                  Siguiente →
                </button>
              </div>
            )}

            {p.tipo === "texto" && (
              <div className="flex flex-col gap-3">
                <textarea
                  rows={3}
                  maxLength={p.max}
                  value={respuestas[p.id]}
                  onChange={(e) => setRespuestas((r) => ({ ...r, [p.id]: e.target.value }))}
                  placeholder={`Ej.: ${p.ejemplo}`}
                  className="w-full border border-line px-4 py-3 text-[15px] text-ink bg-white focus:border-accent focus:outline-none resize-none"
                />
                <p className="text-[12px] text-ink-soft text-right">{respuestas[p.id].length}/{p.max}</p>
                <button
                  type="button"
                  onClick={siguiente}
                  disabled={p.obligatoria && respuestas[p.id].trim().length < 5}
                  className="btn-solid disabled:opacity-50"
                >
                  {p.obligatoria || respuestas[p.id].trim() ? "Siguiente →" : "Saltar →"}
                </button>
              </div>
            )}
          </>
        )}

        {estado === "llenando" && !p && (
          <>
            <p className="kicker !text-[10px] mb-4">Último paso</p>
            <h3 className="font-heading text-navy text-[24px] md:text-[29px] leading-[1.2] mb-2">¿A quién le enviamos tu plan?</h3>
            <p className="text-[13.5px] text-ink-soft mb-6">Lo ves al instante y nuestro equipo lo revisa en 24 horas hábiles.</p>
            <form onSubmit={enviar} className="flex flex-col gap-4">
              {CONTACTO.map((f) => (
                <label key={f.k} className="block">
                  <span className="block text-[12px] uppercase tracking-[0.1em] text-ink-soft mb-1.5">{f.label}</span>
                  <input
                    type={f.type}
                    required={f.obligatorio}
                    maxLength={f.max}
                    autoComplete={f.autoComplete}
                    value={datos[f.k]}
                    onChange={(e) => setDatos((d) => ({ ...d, [f.k]: e.target.value }))}
                    className="w-full border border-line px-4 py-3 text-[15px] text-ink bg-white focus:border-accent focus:outline-none transition-colors"
                  />
                </label>
              ))}
              {/* Campo trampa para bots: oculto a personas y lectores de pantalla */}
              <input
                type="text"
                name="sitio_web"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={trampa}
                onChange={(e) => setTrampa(e.target.value)}
                className="absolute -left-[9999px] w-px h-px opacity-0"
              />
              <label className="flex gap-3 items-start text-[12.5px] leading-[1.6] text-ink-soft">
                <input
                  type="checkbox"
                  required
                  checked={consiente}
                  onChange={(e) => setConsiente(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#ee7b4d] shrink-0"
                />
                <span>{AVISO_PRIVACIDAD}</span>
              </label>
              {error && <p className="text-[13px] text-accent-deep">{error}</p>}
              <button type="submit" disabled={!consiente} className="btn-solid mt-1 disabled:opacity-50">
                Aterrizar mi idea →
              </button>
            </form>
          </>
        )}

        {estado === "llenando" && paso > 0 && (
          <button
            type="button"
            onClick={() => setPaso((n) => n - 1)}
            className="mt-6 text-[13px] text-ink-soft hover:text-accent-deep transition-colors"
          >
            ← Volver a la anterior
          </button>
        )}
      </div>
    </div>
  );
}
