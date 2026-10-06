import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Discovery from "@/components/Discovery";
import { WA_LINK, WA_NUMBER_DISPLAY } from "@/components/constants";

export const metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp o agenda una reunión. InnovArtis, Quito, Ecuador.",
  alternates: { canonical: "/contacto" },
};

const CHANNELS = [
  { t: "WhatsApp", v: WA_NUMBER_DISPLAY, href: WA_LINK, note: "La forma más rápida de hablar con nosotros." },
  { t: "Correo", v: "innuevate@gmail.com", href: "mailto:innuevate@gmail.com", note: "Para propuestas, contratos y facturas." },
  { t: "Instagram", v: "@innovartis.ec", href: "https://www.instagram.com/innovartis.ec", note: "Mira nuestro trabajo del día a día." },
];

export default function ContactoPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-rodaje-local.jpg" kicker="Contacto" title="Organicemos una reunión y conozcámonos">
        <p>
          Lo importante es que tengas toda la información para decidir. Cuéntanos de tu negocio y te mostramos cómo
          trabajamos.
        </p>
      </PageHero>
      <section className="max-w-[1200px] mx-auto px-6 py-14 grid md:grid-cols-3 gap-5">
        {CHANNELS.map((c) => (
          <a key={c.t} href={c.href} target="_blank" rel="noopener noreferrer" className="card p-7 block">
            <p className="kicker mb-2">{c.t}</p>
            <p className="text-navy font-extrabold text-[20px] mb-2 break-words">{c.v}</p>
            <p className="text-[14px] text-ink-soft">{c.note}</p>
          </a>
        ))}
      </section>
      <Discovery />
    </Shell>
  );
}
