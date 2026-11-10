import Shell from "@/components/Shell";
import HomeHero from "@/components/HomeHero";
import TrustStrip from "@/components/TrustStrip";
import OfertaMes from "@/components/OfertaMes";
import ServiceCards from "@/components/ServiceCards";
import NumbersRow from "@/components/NumbersRow";
import ClientsStrip from "@/components/ClientsStrip";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Cases from "@/components/Cases";
import ComoEmpezar from "@/components/ComoEmpezar";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import FinalCTA from "@/components/FinalCTA";

// 10-nov-2026 (Daniel: "más comercial, es nuestra carta de presentación"): orden de venta.
// Portada con oferta → garantías → prueba (cifras y clientes) → promo → servicios → casos →
// portafolio → cómo empezamos → objeciones → cierre. Sin el banner de marca arriba: el logo ya
// está en la cabecera y empujaba la oferta fuera de la primera pantalla.
export default function Home() {
  return (
    <Shell>
      <HomeHero />
      <TrustStrip />
      <section className="pt-14">
        <NumbersRow />
      </section>
      <ClientsStrip />
      <OfertaMes />
      <ServiceCards />
      <Cases />
      <PortfolioTeaser />
      <ComoEmpezar />
      <PreguntasFrecuentes />
      <FinalCTA />
    </Shell>
  );
}
