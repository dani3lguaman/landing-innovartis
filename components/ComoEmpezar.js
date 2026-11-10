import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { WA_ASESORIA } from "./constants";

// 10-nov-2026 (Daniel: "más comercial, es para vender"): reemplaza al "Método" en la portada.
// Tres pasos para empezar, sin promesas de plazos que dependan de otra persona.
const PASOS = [
  {
    n: "1",
    t: "Nos escribes por WhatsApp",
    b: "Cuéntanos de qué es tu negocio y en qué ciudad atiendes. Te respondemos el mismo día.",
  },
  {
    n: "2",
    t: "Asesoría gratis de 10 minutos",
    b: "Una llamada para revisar tu negocio y decirte qué haríamos en tu caso, con cifras de negocios parecidos.",
  },
  {
    n: "3",
    t: "Eliges tu plan y arrancamos",
    b: "Contrato con RUC y factura, sin permanencia. Reunión con el equipo, brief del mes y tu primera campaña hacia tu WhatsApp.",
  },
];

export default function ComoEmpezar() {
  return (
    <section className="section-y bg-white border-y border-line">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle kicker="Cómo empezamos" title="Tres pasos y tu negocio empieza a recibir mensajes" center />
        <div className="grid md:grid-cols-3 gap-6">
          {PASOS.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-paper p-7">
                <span className="display-num text-[44px] leading-none text-accent">{p.n}</span>
                <h3 className="font-heading text-navy text-[21px] mt-4 mb-2">{p.t}</h3>
                <p className="text-[15px] leading-[1.7] text-ink-soft">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid">
            Empezar por el paso 1
          </a>
        </div>
      </div>
    </section>
  );
}
