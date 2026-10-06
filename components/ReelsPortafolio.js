"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";

// Los 4 que se muestran en el inicio (modo compacto).
const DESTACADOS = ["4432547613735861", "1553476923171882", "1374759481081194", "1700538284521006"];

// Reels reales publicados en las páginas de nuestros clientes.
// Cifras leídas en Facebook el 6-oct-2026 (reproducciones / reacciones públicas de cada reel).
const reels = [
  {
    id: "4432547613735861",
    client: "Pachy Limpieza Profesional",
    rubro: "Limpieza a domicilio",
    metric: "20 mil reproducciones",
  },
  {
    id: "1553476923171882",
    client: "Reciclar L&N",
    rubro: "Reciclaje",
    metric: "2,7 mil reacciones",
  },
  {
    id: "1374759481081194",
    client: "InyecPro",
    rubro: "Fábrica de plásticos · grabado en planta",
    metric: "1 mil reacciones",
  },
  {
    id: "2564944193872966",
    client: "Idefix",
    rubro: "Productos plásticos",
    metric: "1 mil reproducciones",
  },
  {
    id: "1345971317605246",
    client: "Equinox",
    rubro: "Equipos industriales",
    metric: "1 mil reproducciones",
  },
  {
    id: "1700538284521006",
    client: "Damavid Aqua",
    rubro: "Agua purificada",
    metric: "110 reacciones · 17 comentarios",
  },
  {
    id: "2794203634267145",
    client: "MedCentral",
    rubro: "Centro médico",
    metric: "17 veces compartido",
  },
  {
    id: "1029294356100531",
    client: "Clínica Veterinaria Metrópolis",
    rubro: "Veterinaria",
    metric: "Contenido desde cero",
  },
  {
    id: "2479664915872880",
    client: "InyecPro",
    rubro: "Tapas para canecas",
    metric: "94 reacciones · 8 comentarios",
  },
  {
    id: "2485343151989213",
    client: "Equinox",
    rubro: "Equipos industriales",
    metric: "98 reacciones",
  },
  {
    id: "1245181794360255",
    client: "Damavid Aqua",
    rubro: "Agua purificada",
    metric: "98 reacciones · 11 comentarios",
  },
];

function reelUrl(id) {
  return `https://www.facebook.com/reel/${id}/`;
}

function embedUrl(id) {
  const href = encodeURIComponent(reelUrl(id));
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=270&height=480`;
}

function ReelCard({ reel, compact }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure
      className={`flex-none w-[240px] snap-start m-0 ${compact ? "md:w-auto" : "md:w-[270px]"}`}
    >
      <div className="aspect-[9/16] bg-navy-deep border border-line overflow-hidden relative">
        {playing ? (
          <iframe
            src={embedUrl(reel.id)}
            title={`Reel de ${reel.client}`}
            className="w-full h-full"
            style={{ border: "none" }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="w-full h-full flex flex-col items-center justify-center gap-4 text-white px-6 text-center hover:bg-navy transition-colors"
            aria-label={`Ver el reel de ${reel.client}`}
          >
            <span className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-heading text-[20px] leading-tight">{reel.client}</span>
            <span className="text-[13px] opacity-80">{reel.rubro}</span>
          </button>
        )}
      </div>
      <figcaption className="pt-3">
        <p className="text-[14px] text-ink font-semibold">{reel.client}</p>
        <p className="text-[13px] text-accent-deep">{reel.metric}</p>
        <a
          href={reelUrl(reel.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12.5px] text-ink-soft underline underline-offset-4"
        >
          Verlo en Facebook
        </a>
      </figcaption>
    </figure>
  );
}

export default function ReelsPortafolio({ compact = false }) {
  const lista = compact ? reels.filter((r) => DESTACADOS.includes(r.id)) : reels;

  return (
    <section id="portafolio-videos" className="section-y overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 md:px-6">
        <Reveal>
          <p className="kicker mb-4">Portafolio en video</p>
        </Reveal>
        <Reveal mask delay={80}>
          <h2 className="font-heading text-navy text-heading mb-4 max-w-[680px]">
            {compact
              ? "Contenido humano, grabado en el negocio de cada cliente."
              : "Videos reales, publicados en las páginas de nuestros clientes."}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-10">
            Fábricas, clínicas, servicios a domicilio: grabamos en el negocio de cada cliente, lo
            editamos y lo ponemos en campañas. Dale play y míralos como los vio su público.
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1150px] mx-auto px-4 md:px-6">
        <div
          className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory ${
            compact ? "md:grid md:grid-cols-4 md:overflow-visible" : ""
          }`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {lista.map((r) => (
            <ReelCard key={r.id} reel={r} compact={compact} />
          ))}
        </div>
        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[13px] text-ink-soft">
            {compact
              ? "Cifras públicas de cada reel al 6 de octubre de 2026."
              : "Desliza para ver más · cifras públicas de cada reel al 6 de octubre de 2026."}
          </p>
          {compact && (
            <Link href="/portafolio" className="btn-outline self-start md:self-auto">
              Ver los {reels.length} videos
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
