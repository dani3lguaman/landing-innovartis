import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strip from "@/components/Strip";
import WhoWeServe from "@/components/WhoWeServe";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import WebService from "@/components/WebService";
import Results from "@/components/Results";
import Plans from "@/components/Plans";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <main>
        <Hero />
        <Strip />
        <WhoWeServe />
        <About />
        <Methodology />
        <Services />
        <WebService />
        <Results />
        <Plans />
        <Portfolio />
        <Quote />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
