import Link from "next/link";
import Reveal from "./Reveal";
import Counter from "./Counter";

// Cifras reales: agencia/comercial/metricas-portafolio-2026-10-05.md (Ads Manager y Facebook, 5-oct-2026).
// No agregar una cifra que no esté en ese archivo.
const RESULTADOS = [
  {
    value: 9512,
    suffix: "",
    label: "conversaciones por WhatsApp en 12 meses, desde $0,32 c/u",
    cliente: "Cabello Remy EC · extensiones",
  },
  {
    value: 3548,
    suffix: "",
    label: "conversaciones por WhatsApp desde sus campañas",
    cliente: "Pachy Limpieza Profesional",
  },
  {
    value: 452,
    suffix: "",
    label: "clientes potenciales a $0,73 cada uno",
    cliente: "Metallum",
  },
  {
    value: 94,
    suffix: " mil",
    label: "reproducciones de un reel grabado en planta",
    cliente: "InyecPro · fábrica de plásticos",
  },
];

export default function ResultadosResumen() {
  return (
    <section className="max-w-[1150px] mx-auto px-4 md:px-6 section-y">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-end mb-12">
        <div>
          <Reveal>
            <p className="kicker mb-4">Resultados de clientes reales</p>
          </Reveal>
          <Reveal mask delay={80}>
            <h2 className="font-heading text-navy text-heading">
              Lo que pagas es esto: gente que te escribe.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="text-[16px] leading-[1.8] text-ink-soft">
            Las fotos y los videos son el medio. Lo que medimos cada mes son conversaciones,
            clientes potenciales y ventas. Estas cifras salen de Ads Manager y de las páginas de
            nuestros clientes, no de una presentación.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {RESULTADOS.map((r) => (
            <div
              key={r.cliente}
              className="bg-paper py-8 px-5 sm:px-6"
            >
              <p className="display-num text-accent-deep text-[44px] leading-none mb-3">
                <Counter value={r.value} suffix={r.suffix} />
              </p>
              <p className="text-[14px] leading-[1.6] text-ink mb-2">{r.label}</p>
              <p className="text-[12.5px] uppercase tracking-[0.1em] text-ink-soft">{r.cliente}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[12.5px] leading-[1.7] text-ink-soft italic max-w-[640px]">
            Datos de Ads Manager y Facebook leídos el 5 de octubre de 2026. Son resultados de otros
            negocios, no una promesa: lo que consigas depende de tu rubro, tu oferta y tu inversión
            en pauta.
          </p>
          <Link href="/portafolio" className="btn-outline self-start md:self-auto whitespace-nowrap">
            Ver casos y videos
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
