import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Method from "@/components/Method";
import AsesoriaCTA from "@/components/AsesoriaCTA";

export const metadata = {
  title: "Servicios de marketing digital en Quito",
  description:
    "Estrategia, campañas en Meta Ads, contenido humano, gestión de redes, Google Maps, páginas web, CRM HubSpot y asistente automático de WhatsApp para tu negocio en Quito.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        kicker="Servicios"
        titulo="No pagas por la imagen. Pagas por la estrategia, el acompañamiento y los resultados."
        texto="Las fotos y los videos son solo el medio. Lo que hacemos es planificar, producir, pautar y medir para que la gente correcta te descubra y te escriba."
      />
      <Services />
      <Method />
      <AsesoriaCTA
        titulo="¿No sabes por cuál servicio empezar?"
        texto="Cuéntanos de tu negocio en 10 minutos y te decimos qué haríamos primero y cuánto costaría."
      />
    </>
  );
}
