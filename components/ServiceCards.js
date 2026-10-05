import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { SERVICES, Icon } from "./services-data";

// Tarjetas de servicios con ícono (bloque "Soluciones integrales" de AQUABEC v2).
export default function ServiceCards({ kicker = "Lo que hacemos", title = "Todo lo que tu negocio necesita para vender en digital", intro, bg = true }) {
  return (
    <section id="servicios" className={`section-y ${bg ? "bg-paper-soft" : ""}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle kicker={kicker} title={title} center>
          {intro}
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={(i % 4) * 80} className="h-full">
              <a href={s.href} className="card group flex flex-col h-full p-6">
                <span className="w-12 h-12 rounded-xl bg-navy text-white inline-flex items-center justify-center mb-5">
                  <Icon name={s.icon} />
                </span>
                <h3 className="text-navy font-bold text-[17px] mb-2 flex items-center gap-2">
                  {s.title}
                  {s.badge && <span className="badge bg-accent text-white !text-[9px]">{s.badge}</span>}
                </h3>
                <p className="text-[14px] leading-[1.7] text-ink-soft flex-1">{s.body}</p>
                <span className="mt-5 text-[13px] font-bold text-accent-deep uppercase tracking-[0.06em]">
                  {s.cta} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
