import Reveal from "./Reveal";
import { WA_ASESORIA } from "./constants";

// Franja de captación: el visitante que ya vio resultados pide hablar con alguien.
export default function AsesoriaCTA({ titulo, texto }) {
  return (
    <section className="max-w-[1150px] mx-auto px-6 py-12">
      <Reveal>
        <div className="border border-accent bg-accent/5 px-8 py-8 md:px-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <p className="kicker mb-2">Asesoría gratis · 10 minutos</p>
            <h3 className="font-heading text-navy text-[26px] leading-tight mb-2">
              {titulo || "¿Quieres hablar con alguien de nuestro equipo?"}
            </h3>
            <p className="text-[15px] leading-[1.75] text-ink-soft max-w-[600px]">
              {texto ||
                "Te llamamos por WhatsApp, revisamos tu negocio y te decimos qué haríamos en tu caso y cuánto costaría. Sin compromiso."}
            </p>
          </div>
          <a
            href={WA_ASESORIA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid whitespace-nowrap self-start md:self-center"
          >
            Quiero mi asesoría gratis
          </a>
        </div>
      </Reveal>
    </section>
  );
}
