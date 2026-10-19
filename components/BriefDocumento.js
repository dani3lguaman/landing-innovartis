"use client";

import { WA_NUMBER, WA_ASESORIA } from "./constants";

// La hoja de 1 página del brief, con la marca. Se imprime / guarda en PDF con la hoja de estilos
// de impresión de globals.css (.print-area): cero dependencias, misma marca.

function fecha(iso) {
  try {
    return new Date(iso).toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Guayaquil" });
  } catch {
    return "";
  }
}

export function textoWhatsApp({ negocio, nombre, brief, enlace }) {
  const lineas = [
    `Hola InnovArtis, soy ${nombre || "—"} de ${negocio || "mi negocio"}. Preparé mi plan en "Aterrizamos tus ideas":`,
    "",
    `• Objetivo: ${brief?.objetivo || "—"}`,
    `• Mensaje clave: ${brief?.mensaje_clave || "—"}`,
    ...(brief?.ideas || []).map((i, n) => `• Idea ${n + 1} (${i.formato}): ${i.titulo}`),
  ];
  if (enlace) lineas.push("", `Mi plan: ${enlace}`);
  lineas.push("", "¿Lo revisamos?");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lineas.join("\n"))}`;
}

function Bloque({ titulo, children }) {
  return (
    <section className="brief-bloque border-t border-line pt-4 mt-4">
      <h3 className="kicker !text-[10.5px] mb-2">{titulo}</h3>
      {children}
    </section>
  );
}

export default function BriefDocumento({ id, creado, negocio, nombre, brief, referencias = [], enlace }) {
  const waHref = textoWhatsApp({ negocio, nombre, brief, enlace });

  return (
    <div>
      {/* Acciones (no se imprimen) */}
      <div className="no-print flex flex-col sm:flex-row gap-3 mb-6">
        <button type="button" onClick={() => window.print()} className="btn-solid">
          Descargar / imprimir en PDF
        </button>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-outline text-center">
          Enviar mi plan por WhatsApp →
        </a>
      </div>

      <article className="print-area bg-white border border-line p-5 sm:p-8 md:p-10 text-ink">
        {/* Encabezado */}
        <header className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b-2 border-navy">
          <div>
            <p className="text-[15px] font-extrabold tracking-[0.06em] text-navy">
              <span className="text-accent">INNOV</span>ARTIS
            </p>
            <h2 className="font-heading text-navy text-[22px] sm:text-[26px] leading-tight mt-1">
              Plan de contenido · {negocio}
            </h2>
            <p className="text-[12.5px] text-ink-soft mt-1">
              Sistema InnovArtis de planificación · {fecha(creado)}
            </p>
          </div>
          <p className="sello border-2 border-accent-deep text-accent-deep font-extrabold text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 rotate-[-2deg]">
            Borrador · en revisión por el equipo
          </p>
        </header>

        <Bloque titulo="Objetivo">
          <p className="text-[15px] leading-[1.6] font-semibold text-navy">{brief.objetivo}</p>
          <p className="text-[13.5px] leading-[1.6] text-ink-soft mt-1">
            <strong className="text-ink">Llamado del mes:</strong> {brief.llamado_del_mes}
          </p>
        </Bloque>

        <div className="grid sm:grid-cols-2 gap-x-8">
          <Bloque titulo="A quién le hablamos">
            <p className="text-[13.5px] leading-[1.65]">{brief.publico}</p>
          </Bloque>
          <Bloque titulo="Tono">
            <p className="text-[13.5px] font-bold text-navy">{brief.tono.palabras.join(" · ")}</p>
            <p className="text-[13px] leading-[1.6] mt-1"><strong>Así sí suena:</strong> {brief.tono.asi_si}</p>
            <p className="text-[13px] leading-[1.6] text-ink-soft"><strong>Así no suena:</strong> {brief.tono.asi_no}</p>
          </Bloque>
        </div>

        <Bloque titulo="Mensaje clave">
          <p className="text-[16px] leading-[1.5] font-extrabold text-navy border-l-4 border-accent pl-3">{brief.mensaje_clave}</p>
        </Bloque>

        <Bloque titulo="3 ideas listas para producir">
          <div className="brief-ideas grid gap-4 md:grid-cols-3">
            {brief.ideas.map((idea, n) => (
              <div key={n} className="brief-idea bg-paper-soft p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                  Idea {n + 1} · {idea.formato} · {idea.duracion_segundos} s
                </p>
                <p className="font-extrabold text-navy text-[15px] leading-snug mt-1 mb-2">{idea.titulo}</p>
                <p className="text-[13px] leading-[1.55]"><strong>Gancho (0–3 s):</strong> {idea.gancho}</p>
                <ul className="text-[12.5px] leading-[1.55] list-disc pl-4 my-1.5">
                  {idea.beneficios.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <p className="text-[12.5px] leading-[1.55]"><strong>Por qué elegirnos:</strong> {idea.por_que_elegirnos}</p>
                <p className="text-[12.5px] leading-[1.55]"><strong>Llamado:</strong> {idea.llamado}</p>
                <p className="text-[12.5px] leading-[1.55] mt-1.5"><strong>Guion:</strong> {idea.guion}</p>
                <p className="text-[12px] leading-[1.5] text-ink-soft mt-1.5"><strong>Se necesita:</strong> {idea.que_se_necesita}</p>
                <p className="text-[11.5px] leading-[1.5] text-ink-soft italic mt-1">{idea.de_donde_sale}</p>
              </div>
            ))}
          </div>
        </Bloque>

        <div className="grid sm:grid-cols-[1.3fr_1fr] gap-x-8">
          <Bloque titulo="Cronograma de 4 semanas">
            <ol className="text-[13px] leading-[1.55] space-y-1.5">
              {brief.cronograma.map((s) => (
                <li key={s.semana} className="flex gap-3">
                  <span className="display-num text-accent-deep shrink-0">S{s.semana}</span>
                  <span>
                    {s.que_pasa} <span className="text-ink-soft">— {s.quien}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Bloque>
          <Bloque titulo="Lo que necesitamos de usted">
            <ul className="text-[13px] leading-[1.55] space-y-1">
              {brief.necesitamos.map((x, i) => (
                <li key={i}>
                  {x.falta ? <strong className="text-accent-deep">FALTA · </strong> : "✓ "}
                  {x.que}
                </li>
              ))}
            </ul>
          </Bloque>
        </div>

        {referencias.length > 0 && (
          <Bloque titulo="Así se ve cuando lo hacemos (trabajos reales de InnovArtis)">
            <div className="grid grid-cols-3 gap-3">
              {referencias.map((r) => (
                <figure key={r.id} className="brief-ref">
                  <img src={r.src} alt={`${r.cliente} — ${r.pieza}`} className="w-full aspect-[4/5] object-cover border border-line" loading="lazy" />
                  <figcaption className="text-[11px] leading-[1.4] mt-1.5">
                    <strong className="text-navy block">{r.cliente}</strong>
                    <span className="text-ink-soft">{r.pieza}</span>
                    {r.metrica && <span className="block text-accent-deep font-semibold">{r.metrica}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Bloque>
        )}

        <footer className="border-t border-line mt-5 pt-3 text-[11.5px] leading-[1.55] text-ink-soft">
          <p>
            <strong className="text-ink">Borrador preparado con el Sistema InnovArtis de planificación y revisado por nuestro equipo en 24 h.</strong>{" "}
            Nuestro equipo lo revisa, lo ajusta y se lo entrega aprobado. Las cifras de las referencias son de trabajos
            reales, con la fecha en que se leyeron; no son una promesa de resultados.
          </p>
          <p className="mt-1">InnovArtis · Quito, Ecuador · WhatsApp +593 99 862 0536 · innovartis.lat{id ? ` · Ref. ${id.slice(0, 8)}` : ""}</p>
        </footer>
      </article>

      <div className="no-print mt-8 bg-navy text-white p-6 md:p-8">
        <p className="kicker mb-2">Siguiente paso</p>
        <p className="font-heading text-[22px] leading-snug mb-2">Este plan es suyo, gratis.</p>
        <p className="text-[14px] text-white/80 mb-5">
          Si quiere que lo produzcamos, hablemos 10 minutos y le decimos qué plan le corresponde.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-block bg-wa text-white font-bold text-[14px] px-5 py-3 text-center">
            Hablar con el equipo por WhatsApp →
          </a>
          <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-outline-light text-center">
            Agendar mi asesoría de 10 minutos
          </a>
        </div>
      </div>
    </div>
  );
}
