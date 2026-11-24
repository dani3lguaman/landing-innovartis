import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import ReelsPortafolio from "@/components/ReelsPortafolio";
import AsesoriaCTA from "@/components/AsesoriaCTA";
import ClientsStrip from "@/components/ClientsStrip";
import FinalCTA from "@/components/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Portafolio de publicidad y contenido en Quito",
  description:
    "Reels, posts, carruseles, campañas y páginas web que InnovArtis produjo en Quito para negocios de belleza, limpieza, industria, alimentos y salud.",
  path: "/portafolio",
});

export default function PortafolioPage() {
  return (
    <Shell>
      <PageHero img="/portafolio/sertec/d-mateo-carrusel-1.webp" kicker="Portafolio" title="Trabajo real para negocios reales">
        <p>Elige tu rubro y toca cualquier pieza para verla en grande. Todo lo produjimos para clientes reales.</p>
      </PageHero>
      <Portfolio />
      <ReelsPortafolio />
      <AsesoriaCTA />
      <ClientsStrip />
      <FinalCTA />
    </Shell>
  );
}
