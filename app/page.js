import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Cases from "@/components/Cases";
import EnAccion from "@/components/EnAccion";
import ReelsPortafolio from "@/components/ReelsPortafolio";
import AsesoriaCTA from "@/components/AsesoriaCTA";
import Services from "@/components/Services";
import WebOffers from "@/components/WebOffers";
import Method from "@/components/Method";
import PlansSection from "@/components/PlansSection";
import Discovery from "@/components/Discovery";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="bg-paper">
      <Header />
      <main>
        <Hero />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <WhyUs />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <Cases />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <ReelsPortafolio />
        <AsesoriaCTA />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <EnAccion />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <Services />
        <WebOffers />
        <Method />
        <PlansSection />
        <AsesoriaCTA titulo="¿No sabes qué plan te conviene?" texto="Cuéntanos de tu negocio en una llamada de 10 minutos y te recomendamos el plan exacto, sin pagar de más." />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <Discovery />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
