import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import ClientsStrip from "@/components/ClientsStrip";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Portafolio: trabajo real para clientes reales",
  description:
    "Reels, posts, carruseles, campañas y páginas web que InnovArtis produjo para negocios de belleza, limpieza, industria, alimentos, salud, educación y más.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  return (
    <Shell>
      <PageHero img="/portafolio/sertec/d-mateo-carrusel-1.webp" kicker="Portafolio" title="Más de 20 negocios reales, más de 90 trabajos">
        <p>Elige tu rubro y toca cualquier pieza para verla en grande. Todo lo produjimos para clientes reales.</p>
      </PageHero>
      <Portfolio />
      <ClientsStrip />
      <FinalCTA />
    </Shell>
  );
}
