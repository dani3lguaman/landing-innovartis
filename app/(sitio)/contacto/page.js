import PageHero from "@/components/PageHero";
import Discovery from "@/components/Discovery";
import Reveal from "@/components/Reveal";
import { WA_ASESORIA, WA_LINK, WA_NUMBER_DISPLAY } from "@/components/constants";

export const metadata = {
  title: "Contacto y asesoría gratis",
  description:
    "Pide tu asesoría gratis de 10 minutos por WhatsApp o respóndenos cinco preguntas y te enviamos una propuesta pensada para tu negocio. Quito, Ecuador.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        kicker="Contacto"
        titulo="Hablemos de tu negocio."
        texto="La forma más rápida de empezar es una asesoría gratis de 10 minutos por WhatsApp. Si prefieres, respóndenos cinco preguntas aquí abajo."
        cta={false}
      />

      <section className="max-w-[1150px] mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="h-full">
            <div className="h-full border border-accent bg-accent/5 p-7 md:p-9 flex flex-col">
              <p className="kicker mb-3">Recomendado · 10 minutos</p>
              <h2 className="font-heading text-navy text-[28px] leading-tight mb-3">
                Asesoría gratis por WhatsApp
              </h2>
              <p className="text-[15px] leading-[1.75] text-ink-soft mb-7 flex-1">
                Te llamamos, revisamos tu negocio y te decimos qué haríamos en tu caso y cuánto
                costaría. Sin compromiso.
              </p>
              <a
                href={WA_ASESORIA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid self-start"
              >
                Quiero mi asesoría gratis
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="h-full border border-line bg-white p-7 md:p-9 flex flex-col">
              <p className="kicker mb-3">Directo</p>
              <h2 className="font-heading text-navy text-[28px] leading-tight mb-3">
                Escríbenos por WhatsApp
              </h2>
              <p className="text-[15px] leading-[1.75] text-ink-soft mb-7 flex-1">
                ¿Tienes una pregunta puntual sobre un plan, una página web o un servicio? Escríbenos
                al {WA_NUMBER_DISPLAY}. Estamos en Quito, Ecuador.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline self-start"
              >
                Abrir WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Discovery />
    </>
  );
}
