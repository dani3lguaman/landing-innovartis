import Reveal from "./Reveal";
import { WA_ASESORIA } from "./constants";

// Cabecera de las páginas internas: kicker + H1 + bajada + el único llamado de la web.
export default function PageHero({ kicker, titulo, texto, children, cta = true }) {
  return (
    <section className="max-w-[1150px] mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-10 md:pb-14">
      <Reveal>
        <p className="kicker mb-5">{kicker}</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="font-heading text-navy text-display mb-6 max-w-[860px]">{titulo}</h1>
      </Reveal>
      {texto && (
        <Reveal delay={200}>
          <p className="text-[17px] leading-[1.75] text-ink-soft max-w-[640px]">{texto}</p>
        </Reveal>
      )}
      {(cta || children) && (
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-4">
            {cta && (
              <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid">
                Quiero mi asesoría gratis
              </a>
            )}
            {children}
          </div>
        </Reveal>
      )}
    </section>
  );
}
