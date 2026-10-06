import PageHero from "@/components/PageHero";
import PlansSection from "@/components/PlansSection";
import WebOffers from "@/components/WebOffers";
import AsesoriaCTA from "@/components/AsesoriaCTA";

export const metadata = {
  title: "Planes y precios de marketing digital",
  description:
    "Planes mensuales desde $130 con tu material o $160 con grabación, calculadora en vivo y páginas web desde $60. Promoción de octubre: tu web de regalo con el plan con grabación.",
};

export default function PlanesPage() {
  return (
    <>
      <PageHero
        kicker="Planes y precios"
        titulo="Precios claros, el mismo que firmamos en contrato."
        texto="Elige si nos envías tu material o si vamos a grabar a tu negocio. Arma tu plan en vivo y mándalo por WhatsApp; la pauta se paga aparte, directo a Meta, Google o TikTok."
      >
        <a href="#web" className="btn-outline">
          Ver páginas web
        </a>
      </PageHero>
      <PlansSection />
      <hr className="hairline max-w-[1150px] mx-auto" />
      <WebOffers />
      <AsesoriaCTA
        titulo="¿No sabes qué plan te conviene?"
        texto="Cuéntanos de tu negocio en una llamada de 10 minutos y te recomendamos el plan exacto, sin pagar de más."
      />
    </>
  );
}
