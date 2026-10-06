import Reveal from "./Reveal";
import { WA_ASESORIA, WA_LINK, WA_NUMBER_DISPLAY } from "./constants";

export default function FinalCTA() {
  return (
    <section className="bg-navy section-y">
      <div className="max-w-[760px] mx-auto px-4 md:px-6 text-center">
        <Reveal>
          <p className="kicker mb-5">Conversemos</p>
        </Reveal>
        <Reveal mask delay={80}>
          <h2 className="font-heading text-white text-[40px] md:text-[54px] leading-[1.1] mb-6">
            Organicemos una reunión y conozcámonos.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[17px] leading-[1.8] text-white/75 mb-10">
            Lo importante es que tengas toda la información para decidir. Empieza con una asesoría
            gratis de 10 minutos: revisamos tu negocio y te decimos qué haríamos en tu caso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Quiero mi asesoría gratis
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              WhatsApp {WA_NUMBER_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
