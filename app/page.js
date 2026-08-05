import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import AgentDemo from "@/components/AgentDemo";
import WebOffers from "@/components/WebOffers";
import Method from "@/components/Method";
import PlansSection from "@/components/PlansSection";
import Loyalty from "@/components/Loyalty";
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
        <Services />
        <AgentDemo />
        <WebOffers />
        <Method />
        <PlansSection />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <Loyalty />
        <hr className="hairline max-w-[1150px] mx-auto" />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
