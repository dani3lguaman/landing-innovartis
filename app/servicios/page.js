import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";
import EnAccion from "@/components/EnAccion";
import Method from "@/components/Method";
import SectionTitle from "@/components/SectionTitle";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Servicios de marketing digital",
  description:
    "Meta Ads, Google Ads, producción de contenido, páginas web, asistentes automáticos de WhatsApp, Google Maps y CRM HubSpot para negocios de Quito y Ecuador.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-revision-toma.jpg" kicker="Servicios" title="Mucho más que piezas gráficas">
        <p>Estrategia, contenido, campañas y herramientas para que cada contacto termine en una venta.</p>
      </PageHero>
      <ServiceCards kicker="Soluciones" title="Elige lo que necesitas, o todo junto" bg={false} />
      <section id="crm" className="section-y bg-paper-soft">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <SectionTitle kicker="CRM HubSpot" title="Si no está registrado, no existe">
            <p>
              Cada persona que te escribe queda registrada con su origen (qué anuncio la trajo), su estado y su
              seguimiento. Así sabes cuánto te cuesta cada cliente y nadie se queda sin respuesta.
            </p>
          </SectionTitle>
          <div className="card p-8">
            <p className="text-navy font-bold text-[18px] mb-3">Implementación desde USD 200</p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              Configuramos tu CRM, lo conectamos con tus formularios y tu WhatsApp, y capacitamos a tu equipo. La
              gestión mensual es de USD 50. Incluido desde el plan Avanzado.
            </p>
          </div>
        </div>
      </section>
      <EnAccion />
      <Method />
      <FinalCTA />
    </Shell>
  );
}
