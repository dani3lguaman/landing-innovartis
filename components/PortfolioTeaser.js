import SectionTitle from "./SectionTitle";
import { PORTFOLIO } from "./portfolio-data";

// Muestra corta del portafolio en la portada; el completo vive en /portafolio.
export default function PortfolioTeaser({ count = 8 }) {
  const seen = new Set();
  // Una pieza por cliente para que se note la variedad.
  const picks = PORTFOLIO.filter((p) => !p.src.includes("/ads/") && !seen.has(p.client) && seen.add(p.client)).slice(0, count);
  return (
    <section className="section-y bg-paper-soft">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle
          kicker="Portafolio · Trabajo real"
          title="Lo que hemos hecho para negocios como el tuyo"
          action={
            <a href="/portafolio" className="text-[14px] font-bold text-navy hover:text-accent-deep">
              Ver todo el portafolio →
            </a>
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {picks.map((p) => (
            <a key={p.src} href="/portafolio" className="card group overflow-hidden flex flex-col">
              <div className="card-zoom aspect-[4/5] bg-paper-soft">
                <img src={p.src} alt={`${p.piece} para ${p.client}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-deep">{p.rubro}</p>
                <p className="text-[14px] font-bold text-navy leading-snug">{p.client}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
