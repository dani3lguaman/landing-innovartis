import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

// Marco común de todas las páginas (cabecera + pie + botón de WhatsApp).
export default function Shell({ children }) {
  return (
    <div className="bg-paper">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
