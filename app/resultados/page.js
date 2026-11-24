import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import AdsResults from "@/components/AdsResults";
import Cases from "@/components/Cases";
import NumbersRow from "@/components/NumbersRow";
import FinalCTA from "@/components/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resultados reales de campañas Meta Ads Ecuador",
  description:
    "Campañas Meta Ads en Ecuador con resultados reales: conversaciones por WhatsApp de Remy, Pachy, Deco Mundo, Home Play y más, con captura y fecha.",
  path: "/resultados",
});

export default function ResultadosPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-rodaje-local.jpg" kicker="Resultados reales" title="Resultados reales, con nombre y fecha">
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
