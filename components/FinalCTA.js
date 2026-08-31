import Reveal from "./Reveal";
import { WA_LINK, WA_NUMBER_DISPLAY } from "./constants";

export default function FinalCTA() {
  return (
    <section id="contacto" className="bg-navy section-y">
      <div className="max-w-[760px] mx-auto px-6 text-center">
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
            Lo importante es que tengas toda la información para decidir.
            <br />
            Escríbenos por WhatsApp y compartimos nuestro trabajo.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
            Escríbenos: {WA_NUMBER_DISPLAY}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
