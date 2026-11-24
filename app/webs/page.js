import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import WebOffers from "@/components/WebOffers";
import WebsShowcase from "@/components/WebsShowcase";
import FinalCTA from "@/components/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Diseño de páginas web en Quito desde USD 60",
  description:
    "Diseño de páginas web en Quito: Express USD 60, Profesional USD 120 con tu .com a tu nombre, tiendas en línea y asistente automático de WhatsApp.",
  path: "/webs",
});

export default function WebsPage() {
  return (
    <Shell>
      <PageHero img="/portafolio/webs/colores-y-sabores-escritorio.webp" kicker="Páginas web" title="Tu negocio en internet, listo para recibir clientes">
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
