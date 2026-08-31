import Reveal from "./Reveal";
import Counter from "./Counter";
import { WA_LINK } from "./constants";

const stats = [
  { value: 3, suffix: "", label: "años construyendo marcas" },
  { value: 12, suffix: "+", label: "empresas acompañadas" },
  { value: 700, suffix: "", label: "leads en una sola campaña" },
  { value: 24, suffix: "/7", label: "automatización trabajando" },
];

export default function Hero() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 pt-16 md:pt-24 pb-14">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <Reveal>
            <p className="kicker mb-5">Agencia de marketing estratégico · Quito, Ecuador</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-heading text-navy text-display mb-7">
              Estrategia que <em className="text-accent not-italic font-heading italic">sí</em> genera
              resultados.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-[17px] leading-[1.75] text-ink-soft max-w-[520px] mb-9">
              No te cobramos por una imagen bonita. Te acompañamos con{" "}
              <strong className="text-ink">campañas, datos, CRM y automatización</strong> para que tu
              negocio consiga clientes reales. Somos estrategas de marketing — no una fábrica de
              contenido.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-solid">
                Hablemos por WhatsApp
              </a>
              <a href="#casos" className="btn-outline">
                Ver resultados reales
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <figure className="plate">
            <img
              src="/img/hero-produccion.webp"
              alt="Producción de contenido de InnovArtis en el local de un cliente"
            />
            <figcaption className="pt-3 pb-1 px-1 text-[12.5px] italic text-ink-soft">
              Producción real en el local de un cliente — Quito.
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-16 border-y border-line grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-7 px-4 text-center border-line [&:not(:last-child)]:md:border-r [&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r-0 md:[&:not(:last-child)]:border-r"
            >
              <p className="display-num text-navy text-[38px] leading-none mb-1.5">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[13px] text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
