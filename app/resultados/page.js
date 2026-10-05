import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import AdsResults from "@/components/AdsResults";
import Cases from "@/components/Cases";
import NumbersRow from "@/components/NumbersRow";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Resultados reales de nuestras campañas",
  description:
    "Conversaciones por WhatsApp y clientes potenciales reales de Remy, Pachy, InyecPro, Metallum y más, tomados del Administrador de anuncios de cada cliente.",
  alternates: { canonical: "/resultados" },
};

export default function ResultadosPage() {
  return (
    <Shell>
      <PageHero kicker="Resultados reales" title="Resultados reales, con nombre y fecha">
        <p>Números tomados del Administrador de anuncios de cada cliente, con fecha. Nada redondeado hacia arriba.</p>
      </PageHero>
      <div className="pt-12">
        <NumbersRow />
      </div>
      <AdsResults />
      <Cases />
      <FinalCTA />
    </Shell>
  );
}
