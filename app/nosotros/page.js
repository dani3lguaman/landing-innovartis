import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import ClientsStrip from "@/components/ClientsStrip";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Nosotros",
  description: "Quiénes somos: agencia de marketing estratégico en Quito, Ecuador. El equipo detrás de las campañas.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <Shell>
      <PageHero kicker="Nosotros" title="Estrategas de marketing, no una fábrica de contenido">
        <p>Somos una agencia de Quito que acompaña a negocios reales con campañas, datos y contenido hecho por personas.</p>
      </PageHero>
      <WhyUs />
      <Team />
      <ClientsStrip />
      <FinalCTA />
    </Shell>
  );
}
