import Shell from "@/components/Shell";
import BrandBanner from "@/components/BrandBanner";
import HomeHero from "@/components/HomeHero";
import TrustStrip from "@/components/TrustStrip";
import OfertaMes from "@/components/OfertaMes";
import ServiceCards from "@/components/ServiceCards";
import NumbersRow from "@/components/NumbersRow";
import ClientsStrip from "@/components/ClientsStrip";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Cases from "@/components/Cases";
import Method from "@/components/Method";
import FinalCTA from "@/components/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Agencia de marketing digital en Quito, Ecuador | InnovArtis",
  description:
    "Agencia de marketing digital en Quito: publicidad en Facebook e Instagram con Meta Ads, Google Ads, contenido y páginas web para pymes. Casos reales.",
  path: "/",
  absolute: true,
});

// Portada con la estructura de AQUABEC v2: portada navy → franja de garantías → promociones →
// soluciones → cifras y clientes → portafolio → casos → método → contacto.
export default function Home() {
  return (
    <Shell>
      <BrandBanner />
      <HomeHero />
      <TrustStrip />
      <OfertaMes />
      <ServiceCards />
      <section className="pt-16">
        <NumbersRow />
      </section>
      <ClientsStrip />
      <PortfolioTeaser />
      <Cases />
      <Method />
      <FinalCTA />
    </Shell>
  );
}
