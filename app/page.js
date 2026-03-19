import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strip from "@/components/Strip";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import WebService from "@/components/WebService";
import Plans from "@/components/Plans";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="bg-navy">
      <Header />
      <main>
        <Hero />
        <Strip />
        <WhoWeServe />
        <Services />
        <WebService />
        <Plans />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
