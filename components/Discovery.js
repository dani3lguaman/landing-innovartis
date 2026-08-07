"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { WA_NUMBER } from "./constants";

// Envío a HubSpot: Forms API pública. Ni el portal ni el GUID son secretos
// (viajan en el HTML de cualquier formulario incrustado), así que van aquí
// y no hay nada que configurar en Vercel. Se pueden sobrescribir por entorno.
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "48578869";
const FORM_GUID =
  process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID || "a2d20eaa-9ce8-4a72-8e1f-1f413035fbde";

// Las preguntas del speech comercial de Daniel, en el orden en que las hace.
const STEPS = [
  {
    id: "rubro",
    pregunta: "¿A qué se dedica tu negocio?",
    ayuda: "Para hablarte con ejemplos de tu sector, no con teoría.",
    tipo: "opciones",
    opciones: [
      "Salud y estética",
      "Gastronomía",
      "Servicios profesionales",
      "Industria o manufactura",
      "Comercio o retail",
      "Educación",
      "Otro",
    ],
  },
  {
    id: "experiencia",
    pregunta: "¿Has hecho marketing digital antes?",
    ayuda: "No hay respuesta mala. Nos dice desde dónde arrancamos.",
    tipo: "opciones",
    opciones: [
      "Nunca, sería la primera vez",
      "Lo intenté por mi cuenta",
      "Trabajé con otra agencia",
      "Tengo a alguien interno haciéndolo",
    ],
  },
  {
    id: "desafio",
    pregunta: "¿Cuál es el desafío que estás enfrentando hoy?",
    ayuda: "Lo que más te duele ahora mismo.",
    tipo: "opciones",
    opciones: [
      "No me llegan clientes nuevos",
      "Publico, pero nadie compra",
      "Me escriben y no alcanzo a responder",
      "Invierto en publicidad y no sé si funciona",
      "Quiero crecer y no sé por dónde empezar",
    ],
  },
  {
    id: "meta",
    pregunta: "Si trabajamos juntos, ¿qué querrías que pase en 3 meses?",
    ayuda: "Piensa en el resultado, no en las publicaciones.",
    tipo: "opciones",
    opciones: [
      "Vender más, con números que lo demuestren",
      "Que mi marca se vea seria y profesional",
      "Tener un flujo constante de clientes nuevos",
      "Ordenar mi operación y dejar de improvisar",
    ],
  },
  {
    id: "presupuesto",
    pregunta: "¿Ya tienes definido cuánto invertir al mes?",
    ayuda: "Con esto te proponemos el plan correcto, sin hacerte perder el tiempo.",
    tipo: "opciones",
    opciones: [
      "Sí, tengo un presupuesto claro",
      "Tengo una idea aproximada",
      "Prefiero que me asesoren",
    ],
  },
  {
    id: "datos",
    pregunta: "Listo. ¿A quién le respondemos?",
    ayuda: "Te escribimos por WhatsApp con una propuesta concreta para tu caso.",
    tipo: "datos",
  },
];

export default function Discovery() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [datos, setDatos] = useState({ nombre: "", negocio: "", whatsapp: "", email: "" });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const step = STEPS[paso];
  const progreso = Math.round((paso / STEPS.length) * 100);

  const resumen = useMemo(
    () =>
      STEPS.filter((s) => s.tipo === "opciones")
        .map((s) => `${s.pregunta} → ${respuestas[s.id] || "(sin responder)"}`)
        .join("\n"),
    [respuestas]
  );

  const waHref = useMemo(() => {
    const texto = [
      "Hola InnovArtis, llené el formulario en su web:",
      `• Negocio: ${datos.negocio || "—"}`,
      `• Nombre: ${datos.nombre || "—"}`,
      "",
      resumen,
    ].join("\n");
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`;
  }, [datos, resumen]);

  const elegir = (valor) => {
    setRespuestas((r) => ({ ...r, [step.id]: valor }));
    setPaso((p) => p + 1);
  };

  const enviar = async (ev) => {
    ev.preventDefault();
    setError(null);

    // Sin credenciales configuradas no se pierde el lead: se va por WhatsApp.
    if (!PORTAL_ID || !FORM_GUID) {
      setEnviado(true);
      window.open(waHref, "_blank", "noopener,noreferrer");
      return;
    }

    setEnviando(true);
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: datos.nombre },
              { name: "email", value: datos.email },
              { name: "phone", value: datos.whatsapp },
              { name: "company", value: datos.negocio },
              { name: "message", value: resumen },
            ],
            context: {
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: "InnovArtis — Queremos conocerte",
            },
          }),
        }
      );
      if (!res.ok) throw new Error(`HubSpot respondió ${res.status}`);
      setEnviado(true);
    } catch (e) {
      // El lead no se pierde nunca: si HubSpot falla, se va por WhatsApp.
      setError(e.message);
      setEnviado(true);
      window.open(waHref, "_blank", "noopener,noreferrer");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="conocerte" className="bg-paper-soft py-20 border-y border-line">
      <div className="max-w-[1150px] mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <Reveal>
          <div className="md:sticky md:top-28">
            <p className="kicker mb-4">Antes de venderte nada</p>
            <h2 className="font-heading text-navy text-[36px] md:text-[44px] leading-[1.12] mb-5">
              Queremos conocerte.
            </h2>
            <p className="text-[16px] leading-[1.85] text-ink-soft mb-4">
              No mandamos cotizaciones genéricas. Respóndenos cinco preguntas —las mismas que te
              haríamos tomando un café— y te contestamos con{" "}
              <strong className="text-ink">una propuesta pensada para tu negocio</strong>.
            </p>
            <p className="text-[14px] leading-[1.8] text-ink-soft italic">
              Toma menos de un minuto. Nadie te va a llamar para insistirte.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-white border border-line">
            {/* Barra de progreso */}
            {!enviado && (
              <div className="h-1 bg-line">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${progreso}%` }}
                />
              </div>
            )}

            <div className="p-8 md:p-10">
              {enviado ? (
                <div className="text-center py-8">
                  <p className="display-num text-accent-deep text-[46px] leading-none mb-4">✓</p>
                  <h3 className="font-heading text-navy text-[27px] mb-3">
                    Listo {datos.nombre ? datos.nombre.split(" ")[0] : ""}, ya te tenemos.
                  </h3>
                  <p className="text-[14.5px] leading-[1.8] text-ink-soft max-w-[420px] mx-auto mb-7">
                    Revisamos tus respuestas y te escribimos por WhatsApp con una propuesta concreta
                    para {datos.negocio || "tu negocio"} — no con un catálogo genérico.
                  </p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid inline-block"
                  >
                    Prefiero escribir yo ahora →
                  </a>
                  {error && (
                    <p className="text-[12px] text-ink-soft mt-5 italic">
                      (Te abrimos WhatsApp para que no se pierda tu mensaje.)
                    </p>
                  )}
                </div>
              ) : (
                <>
                  <p className="kicker !text-[10px] mb-4">
                    Pregunta {paso + 1} de {STEPS.length}
                  </p>
                  <h3 className="font-heading text-navy text-[26px] md:text-[29px] leading-[1.2] mb-2">
                    {step.pregunta}
                  </h3>
                  <p className="text-[13.5px] text-ink-soft mb-7">{step.ayuda}</p>

                  {step.tipo === "opciones" ? (
                    <div className="flex flex-col gap-2.5">
                      {step.opciones.map((op) => (
                        <button
                          key={op}
                          onClick={() => elegir(op)}
                          className="text-left text-[14.5px] px-5 py-3.5 border border-line text-ink hover:border-accent hover:bg-paper-soft transition-colors"
                        >
                          {op}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <form onSubmit={enviar} className="flex flex-col gap-4">
                      {[
                        { k: "nombre", label: "Tu nombre", type: "text", req: true },
                        { k: "negocio", label: "Nombre de tu negocio", type: "text", req: true },
                        { k: "whatsapp", label: "Tu WhatsApp", type: "tel", req: true },
                        // Obligatorio: el formulario de HubSpot exige correo y sin él rechaza el envío.
                        { k: "email", label: "Tu correo", type: "email", req: true },
                      ].map((f) => (
                        <label key={f.k} className="block">
                          <span className="block text-[12px] uppercase tracking-[0.1em] text-ink-soft mb-1.5">
                            {f.label}
                            {!f.req && <span className="normal-case tracking-normal"> (opcional)</span>}
                          </span>
                          <input
                            type={f.type}
                            required={f.req}
                            value={datos[f.k]}
                            onChange={(e) => setDatos((d) => ({ ...d, [f.k]: e.target.value }))}
                            className="w-full border border-line px-4 py-3 text-[15px] text-ink bg-white focus:border-accent focus:outline-none transition-colors"
                          />
                        </label>
                      ))}
                      <button type="submit" disabled={enviando} className="btn-solid mt-2 disabled:opacity-60">
                        {enviando ? "Enviando…" : "Enviar mis respuestas →"}
                      </button>
                    </form>
                  )}

                  {paso > 0 && (
                    <button
                      onClick={() => setPaso((p) => p - 1)}
                      className="mt-6 text-[13px] text-ink-soft hover:text-accent-deep transition-colors"
                    >
                      ← Volver a la anterior
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
