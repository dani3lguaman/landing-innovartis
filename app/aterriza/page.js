import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import AterrizaForm from "@/components/AterrizaForm";

// "Aterrizamos tus ideas" — Sistema InnovArtis de planificación.
// Sin enlace en el menú ni en el sitemap hasta que Daniel lo apruebe (y noindex mientras tanto).
export const metadata = {
  title: "Aterrizamos tus ideas",
  description:
    "Cuéntanos tu idea en 3 minutos y recibe al instante el plan de tu contenido: objetivo, público, tono, 3 ideas listas para grabar y tu cronograma, con ejemplos reales de InnovArtis.",
  alternates: { canonical: "/aterriza" },
  robots: { index: false, follow: false },
};

const PUNTOS = [
  { n: "01", t: "Respondes 8 preguntas", d: "Casi todas son de un clic. Toma 3 minutos." },
  { n: "02", t: "Ves tu plan al instante", d: "Objetivo, público, tono, 3 ideas con guion y tu cronograma de 4 semanas." },
  { n: "03", t: "Nuestro equipo lo revisa", d: "Lo ajustamos y te lo entregamos aprobado en 24 horas hábiles." },
];

export default function AterrizaPage() {
  return (
    <Shell>
      <div className="no-print">
        <PageHero kicker="Sistema InnovArtis de planificación" title="Aterrizamos tus ideas" crumb="Aterrizamos tus ideas">
          <p>
            Cuéntanos tu idea en 3 minutos. Te devolvemos al instante el plan de tu contenido —objetivo, público, tono, 3
            ideas listas para grabar y tu cronograma— con ejemplos reales de lo que hemos hecho para negocios como el tuyo.
          </p>
        </PageHero>
      </div>

      <section className="bg-paper-soft border-b border-line">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-10 md:py-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] items-start">
          <aside className="no-print lg:sticky lg:top-28 grid gap-5">
            {PUNTOS.map((p) => (
              <div key={p.n} className="border-t-2 border-accent pt-4">
                <p className="display-num text-accent text-[24px] leading-none mb-2">{p.n}</p>
                <p className="text-navy font-extrabold text-[16px] mb-1">{p.t}</p>
                <p className="text-[13.5px] text-ink-soft leading-[1.7]">{p.d}</p>
              </div>
            ))}
            <p className="text-[12.5px] text-ink-soft italic">Gratis y sin compromiso. Nadie te va a llamar para insistirte.</p>
          </aside>
          <AterrizaForm />
        </div>
      </section>
    </Shell>
  );
}
