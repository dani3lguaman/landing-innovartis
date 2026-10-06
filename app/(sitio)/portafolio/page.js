import PageHero from "@/components/PageHero";
import Cases from "@/components/Cases";
import ReelsPortafolio from "@/components/ReelsPortafolio";
import EnAccion from "@/components/EnAccion";
import AsesoriaCTA from "@/components/AsesoriaCTA";

export const metadata = {
  title: "Portafolio: casos y videos de clientes reales",
  description:
    "Casos reales con métricas de Ads Manager, reels publicados en las páginas de nuestros clientes y escenas de grabación en Quito.",
};

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        kicker="Portafolio"
        titulo="Resultados reales de negocios reales."
        texto="Casos con números que salen de las cuentas publicitarias, videos publicados en las páginas de nuestros clientes y cómo se ve un día nuestro de grabación."
        cta={false}
      />
      <Cases />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <ReelsPortafolio />
      <AsesoriaCTA />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <EnAccion />
    </>
  );
}
