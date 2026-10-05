import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import OfertaMes from "@/components/OfertaMes";
import PlansSection from "@/components/PlansSection";
import Discovery from "@/components/Discovery";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Planes y precios",
  description:
    "Planes mensuales de marketing desde USD 130: contenido, Meta Ads, Google Ads y más. Oferta del mes, extras y diagnóstico sin costo.",
  alternates: { canonical: "/planes" },
};

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
