import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import OfertaMes from "@/components/OfertaMes";
import PlansSection from "@/components/PlansSection";
import Discovery from "@/components/Discovery";
import FinalCTA from "@/components/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Planes y precios de marketing digital en Quito",
  description:
    "Planes mensuales de marketing digital en Quito desde USD 100: publicidad, contenido, Meta Ads y Google Ads. Oferta del mes y diagnóstico sin costo.",
  path: "/planes",
});

export default function PlanesPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-sesion-salon.jpg" kicker="Planes" title="Planes claros, con contrato y entregables">
        <p>50 % al inicio y 50 % al cerrar el mes. La pauta la pagas tú directo a Meta o Google.</p>
      </PageHero>
      <OfertaMes />
      <PlansSection />
      <Discovery />
      <FinalCTA />
    </Shell>
  );
}
