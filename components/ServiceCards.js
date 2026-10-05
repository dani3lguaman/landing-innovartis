import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import FlipCard from "./FlipCard";
import { SERVICES, Icon } from "./services-data";

// Servicios como tarjetas que giran: frente con ícono y gancho, reverso navy con el detalle y el enlace.
export default function ServiceCards({ kicker = "Lo que hacemos", title = "Todo lo que tu negocio necesita para vender en digital", intro, bg = true }) {
  return (
    <section id="servicios" className={`section-y ${bg ? "bg-paper-soft" : ""}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle kicker={kicker} title={title} center>
          {intro || <p>Pasa el mouse o toca cada tarjeta para ver qué incluye.</p>}
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={(i % 4) * 80}>
              <FlipCard
                height="h-[270px]"
                label={`${s.title}: ver detalle`}
                front={
                  <div className="card h-full p-6 flex flex-col">
                    <span className="w-14 h-14 rounded-2xl bg-navy text-white inline-flex items-center justify-center mb-5 shadow-lg">
                      <Icon name={s.icon} className="w-7 h-7" />
                    </span>
                    <h3 className="text-navy font-extrabold text-[19px] leading-tight mb-2 flex items-center gap-2 flex-wrap">
                      {s.title}
                      {s.badge && <span className="badge bg-accent text-white !text-[9px]">{s.badge}</span>}
                    </h3>
                    <p className="text-[14.5px] font-semibold text-accent-deep flex-1">{s.hook}</p>
                    <span className="text-[12px] text-ink-soft flex items-center gap-1.5">
                      <span className="flip-hint inline-block">↻</span> Ver detalle
                    </span>
                  </div>
                }
                back={
                  <div className="h-full p-6 flex flex-col bg-navy text-white rounded-[14px] relative overflow-hidden">
                    <span aria-hidden="true" className="absolute -right-6 -bottom-6 text-white/5">
                      <Icon name={s.icon} className="w-40 h-40" />
                    </span>
                    <h3 className="font-extrabold text-[17px] mb-3 relative">{s.title}</h3>
                    <p className="text-[14px] leading-[1.65] text-white/85 flex-1 relative">{s.body}</p>
                    <a href={s.href} className="btn-solid !py-2.5 !text-[13px] relative self-start">
                      {s.cta} →
                    </a>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
