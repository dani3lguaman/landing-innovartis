import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import FlipCard from "@/components/FlipCard";
import { Icon } from "@/components/services-data";
import { WA_NUMBER } from "@/components/constants";

export const metadata = {
  title: "Google Ads en Quito",
  description:
    "Campañas de Google Ads para negocios de Quito y Ecuador: aparece cuando te buscan y recibe clientes por WhatsApp o llamada. Google Maps incluido desde el plan Estándar.",
  alternates: { canonical: "/google-ads" },
};

const wa = (t) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;

// Lo que hacemos en cada cuenta. Nada de promesas de resultados: solo el trabajo.
const STEPS = [
  { t: "Investigamos cómo te buscan", b: "Las palabras exactas que escribe tu cliente en Google, con su volumen y su costo por clic en tu ciudad." },
  { t: "Armamos campañas por servicio", b: "Una campaña por cada cosa que vendes, con su presupuesto diario, su zona y sus horarios." },
  { t: "Anuncios que llevan a la acción", b: "Botón de WhatsApp, llamada directa o tu página web. Nada de mandar gente a una portada que no convierte." },
  { t: "Cerramos la puerta a clics inútiles", b: "Palabras negativas desde el primer día: quien busca \"gratis\", \"empleo\" o \"curso\" no te cuesta dinero." },
  { t: "Medimos cada contacto", b: "Conversiones de WhatsApp y llamadas configuradas para saber qué palabra trajo a qué cliente." },
  { t: "Optimizamos y reportamos", b: "Revisión semanal de términos de búsqueda y un reporte mensual con lo que se gastó y lo que llegó." },
];

const VS = [
  { k: "Meta Ads (Facebook e Instagram)", v: "Le mostramos tu negocio a gente que todavía no te busca. Ideal para generar deseo con video." },
  { k: "Google Ads", v: "Apareces justo cuando alguien ya está buscando lo que vendes. Ideal para servicios con urgencia o intención clara." },
];

export default function GoogleAdsPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-set-fabrica.jpg" kicker="Nuevo servicio" title="Google Ads: aparece cuando te están buscando">
        <p>
          Cuando alguien escribe &quot;fisioterapia a domicilio en Quito&quot; o &quot;pérgolas de aluminio precio&quot;, ya
          decidió que lo necesita. Con Google Ads tu negocio sale arriba en ese momento, y el clic llega a tu WhatsApp.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={wa("Hola InnovArtis, quiero información sobre Google Ads para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            Quiero Google Ads
          </a>
          <a href="/planes" className="btn-outline-light">
            Ver planes
          </a>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle kicker="Meta o Google" title="¿En qué se diferencia de Facebook e Instagram?" center />
          <div className="grid md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
            {VS.map((x, i) => (
              <div key={x.k} className={`card p-7 ${i === 1 ? "border-accent" : ""}`}>
                <p className="text-navy font-bold text-[18px] mb-2">{x.k}</p>
                <p className="text-[15px] leading-[1.75] text-ink-soft">{x.v}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[15px] text-ink-soft mt-8 max-w-[720px] mx-auto">
            Lo mejor es usar los dos: Meta para que te conozcan y Google para estar cuando te buscan. Los manejamos
            juntos y en un solo reporte.
          </p>
        </div>
      </section>

      <section className="section-y bg-paper-soft">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle kicker="Cómo trabajamos" title="Qué hacemos en tu cuenta de Google Ads" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 80}>
                <FlipCard
                  height="h-[210px]"
                  label={`${s.t}: ver detalle`}
                  front={
                    <div className="card h-full p-6 flex flex-col">
                      <span className="display-num text-[44px] text-accent leading-none">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-navy font-extrabold text-[18px] mt-3 flex-1">{s.t}</h3>
                      <span className="text-[12px] text-ink-soft"><span className="flip-hint inline-block">↻</span> Ver cómo</span>
                    </div>
                  }
                  back={
                    <div className="h-full p-6 bg-navy text-white rounded-[14px] flex flex-col justify-center">
                      <p className="kicker !text-[10.5px] mb-2">Paso {i + 1}</p>
                      <p className="text-[15px] leading-[1.7] text-white/90">{s.b}</p>
                    </div>
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="maps" className="section-y">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle kicker="Google Maps" title="Que te encuentren cerca" />
            <p className="text-[16px] leading-[1.8] text-ink-soft mb-6">
              Creamos, verificamos y optimizamos la ficha de tu negocio en Google: horarios, fotos reales, servicios,
              botón de llamada y de WhatsApp. Es lo primero que ve alguien que busca &quot;cerca de mí&quot;.
            </p>
            <ul className="space-y-3 text-[15px] text-ink">
              {["Ficha creada y verificada a nombre de tu negocio", "Fotos reales y categorías correctas", "Respuestas a reseñas y publicaciones"].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent-deep mt-0.5"><Icon name="pin" className="w-5 h-5" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8 bg-navy text-white border-navy">
            <p className="kicker mb-3">Cuánto cuesta</p>
            <p className="text-[22px] font-extrabold mb-4">Google Ads y Google Maps vienen incluidos desde el plan Estándar.</p>
            <p className="text-[15px] leading-[1.75] text-white/80 mb-6">
              Plan Estándar: USD 230 al mes con tu material, o USD 260 con grabación. Incluye 4 artes, 4 videos y 2
              carruseles, Meta Ads, Google Ads y Google Maps. La pauta la pagas tú directo a Google: nunca manejamos tu
              dinero de publicidad.
            </p>
            <a href="/planes" className="btn-solid">
              Ver todos los planes
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </Shell>
  );
}
