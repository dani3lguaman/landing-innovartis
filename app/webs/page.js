import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import WebOffers from "@/components/WebOffers";
import WebsShowcase from "@/components/WebsShowcase";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Páginas web en Quito desde USD 60",
  description:
    "Páginas web para negocios de Ecuador: Express USD 60, Profesional USD 120 con tu dominio .com a tu nombre, tiendas en línea y asistentes automáticos de WhatsApp.",
  alternates: { canonical: "/webs" },
};

export default function WebsPage() {
  return (
    <Shell>
      <PageHero kicker="Páginas web" title="Tu negocio en internet, listo para recibir clientes">
        <p>
          Páginas rápidas, hechas para celular y con botón directo a tu WhatsApp. El dominio se registra a tu nombre:
          la página es tuya.
        </p>
      </PageHero>
      <WebsShowcase />
      <div id="asistente">
        <WebOffers />
      </div>
      <FinalCTA />
    </Shell>
  );
}
