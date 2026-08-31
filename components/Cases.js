import Reveal from "./Reveal";
import Counter from "./Counter";

const cases = [
  {
    img: "/img/caso-remy.webp",
    kicker: "Extensiones de cabello · Gestión de redes",
    name: "Cabello Remy EC",
    body: "Estrategia de contenido y crecimiento sostenido en Instagram para un negocio de extensiones con locales en Quito y Guayaquil.",
    metric: { value: 6991, suffix: "", label: "seguidores en Instagram" },
    link: { href: "https://instagram.com/cabelloremyuio", label: "@cabelloremyuio" },
  },
  {
    img: "/img/caso-metropolis.webp",
    kicker: "Veterinaria · De cero a redes activas",
    name: "Clínica Veterinaria Metrópolis",
    body: "20 años y 5 locales en Quito, sin presencia digital. La construimos desde cero y la hicimos brillar con atención real al cliente.",
    metric: { value: 26, suffix: "", label: "likes · 2 comentarios respondidos por el negocio" },
  },
  {
    img: "/img/caso-idefix.webp",
    kicker: "Plastics Ide · Marca creada desde cero",
    name: "Idefix",
    body: "Creamos la marca completa y producimos reels mostrando producto y aplicaciones reales.",
    metric: { value: 204, suffix: "", label: "likes en reels de producto (118 y 204)" },
  },
  {
    img: "/img/caso-abbysal.webp",
    kicker: "Gastronomía · Cobertura de lanzamiento",
    name: "Abbysal Tentacle Cravings",
    body: "Cobertura del lanzamiento de local con contenido que capturó la energía del evento.",
    metric: { value: 74, suffix: "", label: "likes en el reel de lanzamiento" },
  },
];

export default function Cases() {
  return (
    <section id="casos" className="max-w-[1150px] mx-auto px-6 section-y">
      {/* Caso estrella: campañas + CRM */}
      <Reveal>
        <div className="border border-accent bg-white grid md:grid-cols-[1fr_1.1fr]">
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="kicker mb-4">Caso destacado · Campañas con CRM</p>
            <h3 className="font-heading text-navy text-[28px] leading-tight mb-4">
              De $1.000 en pauta a 50 clientes nuevos cada mes
            </h3>
            <div className="flex items-baseline gap-6 mb-5">
              <div>
                <p className="display-num text-accent-deep text-[52px] leading-none">
                  <Counter value={700} />
                </p>
                <p className="text-[13px] text-ink-soft mt-1">leads captados</p>
              </div>
              <div>
                <p className="display-num text-accent-deep text-[52px] leading-none">
                  <Counter value={50} />
                </p>
                <p className="text-[13px] text-ink-soft mt-1">clientes cerrados al mes</p>
              </div>
            </div>
            <p className="text-[15px] leading-[1.8] text-ink-soft">
              Con <strong className="text-ink">$1.000 de pauta</strong> generamos ≈700 leads y 50
              cierres mensuales, cada contacto con seguimiento ordenado en HubSpot CRM.{" "}
              <strong className="text-ink">El método no cambia según el rubro:</strong> si tu negocio
              vive de conseguir clientes —salud, servicios, industria, retail, educación— funciona
              igual.
            </p>
          </div>
          <figure className="plate !border-0 !border-l border-line m-0">
            <img src="/img/caso-academia.webp" alt="Cuenta de TikTok del cliente con videos de cientos de miles de vistas" />
          </figure>
        </div>
      </Reveal>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <Reveal key={c.name} delay={i * 90}>
            <article className="border border-line bg-white h-full flex flex-col hover:border-accent transition-colors">
              <figure className="plate !border-0 !border-b border-line">
                <img src={c.img} alt={`Evidencia real del caso ${c.name}`} />
              </figure>
              <div className="p-7 flex flex-col flex-1">
                <p className="kicker !text-[10.5px] mb-2">{c.kicker}</p>
                <h3 className="font-heading text-navy text-[24px] mb-2.5">{c.name}</h3>
                <p className="text-[14.5px] leading-[1.75] text-ink-soft flex-1">{c.body}</p>
                <div className="mt-5 pt-4 border-t border-line flex items-baseline gap-2.5">
                  <span className="display-num text-accent-deep text-[30px] leading-none">
                    <Counter value={c.metric.value} suffix={c.metric.suffix} />
                  </span>
                  <span className="text-[12.5px] text-ink-soft">{c.metric.label}</span>
                </div>
                {c.link && (
                  <a
                    href={c.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-[13.5px] text-accent-deep underline underline-offset-4 w-fit"
                  >
                    {c.link.label}
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-[14px] text-ink-soft italic border border-line bg-paper-soft px-6 py-4">
          Y más casos documentados: Pachy Limpieza, InyecPro, Damavid Aqua, J&amp;C Mudanzas y otros
          clientes con resultados y evidencia disponibles. Pídenos el portafolio completo por WhatsApp.
        </p>
      </Reveal>
    </section>
  );
}
