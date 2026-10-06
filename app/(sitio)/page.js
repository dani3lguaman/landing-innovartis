import Hero from "@/components/Hero";
import OfferSlider from "@/components/OfferSlider";
import ResultadosResumen from "@/components/ResultadosResumen";
import ReelsPortafolio from "@/components/ReelsPortafolio";
import WhyUs from "@/components/WhyUs";
import AsesoriaCTA from "@/components/AsesoriaCTA";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: { absolute: "INNOVARTIS — Estrategia que sí genera resultados · Quito" },
  description:
    "Agencia de marketing estratégico en Quito. No pagas por la imagen: pagas por la estrategia, el acompañamiento y los resultados. Plan Básico desde $130 y asesoría gratis.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <OfferSlider />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <ResultadosResumen />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <ReelsPortafolio compact />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <WhyUs />
      <AsesoriaCTA
        titulo="¿Quieres saber qué haríamos con tu negocio?"
        texto="En 10 minutos por WhatsApp revisamos tu caso y te decimos qué plan tiene sentido y cuánto costaría. Sin compromiso."
      />
      <FinalCTA />
    </>
  );
}
