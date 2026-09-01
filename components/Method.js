import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    name: "Diagnóstico",
    body: "Auditamos tu presencia, tus datos y tu embudo antes de proponer nada.",
  },
  {
    n: "02",
    name: "Estrategia",
    body: "Definimos públicos, mensajes y canales con objetivos de negocio, no de vanidad.",
  },
  {
    n: "03",
    name: "Producción y pauta",
    body: "Grabamos, diseñamos y activamos campañas — todo con calendario y evidencia.",
  },
  {
    n: "04",
    name: "Datos y optimización",
    body: "Reporte mensual con métricas reales y ajustes continuos: lo que no funciona, se corrige.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="bg-navy-deep py-20">
      <div className="max-w-[1150px] mx-auto px-6">
        <Reveal>
          <p className="kicker mb-4">Cómo trabajamos</p>
          <h2 className="font-heading text-white text-[36px] md:text-[44px] leading-[1.12] mb-12 max-w-[620px]">
            Un método, cualquier industria.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-px bg-white/15 border border-white/15">
          {steps.map((s, i) => (
            <div key={s.n} className="bg-navy-deep p-8">
              <Reveal delay={i * 110}>
                <p className="display-num text-accent text-[40px] leading-none mb-4">{s.n}</p>
                <h3 className="font-heading text-white text-[22px] mb-2.5">{s.name}</h3>
                <p className="text-[14px] leading-[1.75] text-white/70">{s.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
