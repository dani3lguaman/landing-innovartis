import SectionTitle from "./SectionTitle";
import FlipCard from "./FlipCard";
import { PORTFOLIO } from "./portfolio-data";

// Muestra del portafolio en la portada: una pieza por cliente; al girar, el cliente y su resultado.
export default function PortfolioTeaser({ count = 8 }) {
  const seen = new Set();
  const picks = PORTFOLIO.filter((p) => !p.src.includes("/ads/") && !seen.has(p.client) && seen.add(p.client)).slice(0, count);
  const metricOf = (client) => PORTFOLIO.find((p) => p.client === client && p.metric)?.metric;
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
        >
          <p>Gira cada pieza para ver de quién es y qué logró.</p>
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {picks.map((p) => {
            const m = metricOf(p.client);
            return (
              <FlipCard
                key={p.src}
                height="aspect-[4/5]"
                label={`${p.client}: ver detalle`}
                front={
                  <div className="h-full bg-white border border-line rounded-[14px] overflow-hidden relative">
                    <img src={p.src} alt={`${p.piece} para ${p.client}`} loading="lazy" className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 badge bg-white/95 text-navy shadow">{p.rubro}</span>
                  </div>
                }
                back={
                  <div className="h-full bg-navy text-white rounded-[14px] p-5 flex flex-col">
                    <p className="kicker !text-[10.5px] mb-2">{p.rubro}</p>
                    <p className="font-extrabold text-[17px] leading-snug mb-1">{p.client}</p>
                    <p className="text-[13px] text-white/70 mb-4">{p.piece}</p>
                    {m && (
                      <p className="mt-auto mb-4">
                        <span className="display-num text-[32px] text-accent leading-none block">
                          {typeof m.value === "number" ? m.value.toLocaleString("es-EC") : m.value}
                        </span>
                        <span className="text-[12.5px] text-white/80">{m.label}</span>
                      </p>
                    )}
                    <a href="/portafolio" className={`${m ? "" : "mt-auto"} text-[13px] font-bold text-accent`}>
                      Ver más de este cliente →
                    </a>
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
