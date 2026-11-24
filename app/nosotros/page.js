import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import ClientsStrip from "@/components/ClientsStrip";
import FinalCTA from "@/components/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Agencia de publicidad para pymes en Quito",
  description:
    "Somos InnovArtis, agencia de publicidad para pymes en Quito: estrategia, campañas en Facebook e Instagram y contenido hecho por un equipo de personas.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-demo-producto.jpg" kicker="Nosotros" title="Estrategas de marketing, no una fábrica de contenido">
        <p>Somos una agencia de Quito que acompaña a negocios reales con campañas, datos y contenido hecho por personas.</p>
      </PageHero>
      <WhyUs />
      <Team />
      <ClientsStrip />
      <FinalCTA />
    </Shell>
  );
}
