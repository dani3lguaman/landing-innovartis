import PageHero from "@/components/PageHero";
import Historia from "@/components/Historia";
import Team from "@/components/Team";
import TrabajoEnEquipo from "@/components/TrabajoEnEquipo";
import AsesoriaCTA from "@/components/AsesoriaCTA";

export const metadata = {
  title: "Nosotros: agencia de marketing en Quito",
  description:
    "Tres años en Quito haciendo contenido humano y campañas con datos. Conoce al equipo de InnovArtis y cómo trabajamos contigo: nosotros atraemos, tú cierras.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        kicker="Nosotros"
        titulo="Personas reales, en Quito, trabajando por tus resultados."
        texto="Somos un equipo de estrategia, diseño, video y campañas. Nada de contenido masivo ni genérico: todo se planifica, se graba y se dirige a mano."
        cta={false}
      />
      <Historia />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <Team />
      <TrabajoEnEquipo />
      <AsesoriaCTA titulo="¿Conversamos sobre tu negocio?" />
    </>
  );
}
