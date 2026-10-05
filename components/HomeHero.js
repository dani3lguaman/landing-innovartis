import { WA_LINK } from "./constants";

// Portada estilo AQUABEC v2: banda navy, titular con remate naranja, foto real a la derecha.
export default function HomeHero() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-white/70 mb-5 flex items-center gap-3">
            <span className="w-8 h-[3px] bg-accent rounded" /> Agencia de marketing · Quito, Ecuador
          </p>
          <h1 className="font-heading text-display mb-6">
            Más clientes por WhatsApp, <span className="text-accent">con estrategia</span> y no con suerte.
          </h1>
          <p className="text-[17px] leading-[1.75] text-white/80 max-w-[540px] mb-9">
            Campañas en Meta y Google, contenido grabado en tu negocio, páginas web y asistentes
            automáticos de WhatsApp. Todo medido con los números reales de tu cuenta.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Escríbenos por WhatsApp
            </a>
            <a href="/resultados" className="btn-outline-light">
              Ver resultados reales
            </a>
          </div>
        </div>
        <figure className="relative">
          <img
            src="/img/hero-produccion.webp"
            alt="Producción de contenido de InnovArtis en el local de un cliente en Quito"
            className="rounded-2xl shadow-2xl w-full"
          />
          <figcaption className="absolute -bottom-5 left-5 right-5 md:right-auto bg-white text-navy rounded-xl shadow-xl px-5 py-4 flex items-center gap-4">
            <span className="display-num text-[30px] text-accent-deep leading-none">9.512</span>
            <span className="text-[12.5px] leading-snug text-ink-soft">
              conversaciones por WhatsApp
              <br />
              para Remy EC en 12 meses
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
