import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Marco común de las páginas de la agencia. /remy (web de un cliente) queda fuera de este grupo.
export default function SitioLayout({ children }) {
  return (
    <div className="bg-paper overflow-x-clip">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
