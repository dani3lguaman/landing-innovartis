import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import BriefMesForm from "@/components/BriefMesForm";

// Brief que llena el propio cliente. Página oculta: se comparte por enlace, sin menú ni sitemap.
export const metadata = {
  title: "Brief del mes",
  description: "Cuéntenos qué necesita este mes para preparar su contenido.",
  alternates: { canonical: "/brief-mes" },
  robots: { index: false, follow: false },
};

export default function BriefMesPage() {
  return (
    <Shell>
      <PageHero kicker="Clientes InnovArtis" title="Brief del mes" crumb="Brief del mes">
        <p>Toma unos 5 minutos. Con sus respuestas preparamos su contenido, sin necesidad de reunirnos. Si prefiere conversar, márquelo al final.</p>
      </PageHero>
      <section className="bg-paper-soft border-b border-line">
        <div className="max-w-[760px] mx-auto px-4 md:px-6 py-10 md:py-14">
          <BriefMesForm />
        </div>
      </section>
    </Shell>
  );
}
