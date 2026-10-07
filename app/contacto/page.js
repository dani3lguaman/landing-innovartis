import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Discovery from "@/components/Discovery";
import SocialIcon from "@/components/SocialIcon";
import { SITE_URL, SOCIALS, WA_ASESORIA, WA_LINK, WA_NUMBER_DISPLAY } from "@/components/constants";

export const metadata = {
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp al +593 99 862 0536, agenda tu asesoría gratis de 10 minutos o síguenos en Instagram, TikTok y LinkedIn. InnovArtis, agencia de marketing digital en Quito, Ecuador.",
  alternates: { canonical: "/contacto" },
};

// Datos estructurados de la página de contacto (Google los usa en el resultado de búsqueda).
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — InnovArtis",
  url: `${SITE_URL}/contacto`,
  mainEntity: {
    "@type": "Organization",
    name: "InnovArtis",
    url: SITE_URL,
    email: "innuevate@gmail.com",
    telephone: "+593-99-862-0536",
    address: { "@type": "PostalAddress", addressLocality: "Quito", addressCountry: "EC" },
    sameAs: SOCIALS.map((s) => s.href),
  },
};

const PASOS = [
  { n: "01", t: "Nos escribes", d: "Por WhatsApp, correo o el formulario de abajo. Nos cuentas de tu negocio." },
  { n: "02", t: "Asesoría de 10 minutos", d: "Por videollamada, llamada o WhatsApp. Sin costo y sin compromiso." },
  { n: "03", t: "Propuesta para tu caso", d: "Te mandamos por escrito qué haríamos, con fechas y precio claro." },
];

export default function ContactoPage() {
  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <PageHero img="/evidencia/foto-rodaje-local.jpg" kicker="Contacto" title="Organicemos una reunión y conozcámonos">
        <p>
          Lo importante es que tengas toda la información para decidir. Cuéntanos de tu negocio y te mostramos cómo
          trabajamos.
        </p>
      </PageHero>

      {/* Canales directos: WhatsApp manda, el resto acompaña */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pt-14 pb-6 grid gap-5 md:grid-cols-[1.3fr_1fr_1fr]">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-7 md:p-8 bg-navy text-white hover:bg-navy-deep transition-colors"
        >
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-wa text-white mb-5">
            <SocialIcon id="whatsapp" className="w-6 h-6" />
          </span>
          <p className="text-[12px] uppercase tracking-[0.14em] text-white/70 mb-2">WhatsApp · lo más rápido</p>
          <p className="font-extrabold text-[24px] md:text-[26px] mb-2">{WA_NUMBER_DISPLAY}</p>
          <p className="text-[14px] text-white/80 mb-5">Cuéntanos qué necesitas y te respondemos por ahí mismo.</p>
          <span className="inline-block bg-wa text-white font-bold text-[14px] px-5 py-3">Abrir WhatsApp →</span>
        </a>

        <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="card p-7 block">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-paper-soft text-accent-deep mb-5">
            <SocialIcon id="video" className="w-6 h-6" />
          </span>
          <p className="kicker mb-2">Asesoría gratis</p>
          <p className="text-navy font-extrabold text-[20px] mb-2">10 minutos para tu negocio</p>
          <p className="text-[14px] text-ink-soft">
            Por videollamada, llamada o WhatsApp. Te decimos qué haríamos en tu caso, sin compromiso.
          </p>
        </a>

        <a href="mailto:innuevate@gmail.com" className="card p-7 block">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-paper-soft text-accent-deep mb-5">
            <SocialIcon id="mail" className="w-6 h-6" />
          </span>
          <p className="kicker mb-2">Correo</p>
          <p className="text-navy font-extrabold text-[20px] mb-2 break-words">innuevate@gmail.com</p>
          <p className="text-[14px] text-ink-soft">Para propuestas, contratos y facturas.</p>
        </a>
      </section>

      {/* Redes oficiales */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-10">
        <p className="kicker mb-3">Síguenos</p>
        <h2 className="font-heading text-navy text-[26px] md:text-[30px] leading-[1.2] mb-7">
          Mira lo que hacemos antes de hablar con nosotros
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} de InnovArtis`}
              className="card p-6 flex flex-col gap-3 group"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white group-hover:bg-accent transition-colors">
                  <SocialIcon id={s.id} className="w-5 h-5" />
                </span>
                <span className="text-navy font-extrabold text-[17px]">{s.label}</span>
              </span>
              <span className="text-[13.5px] text-accent-deep font-semibold break-all">{s.handle}</span>
              <span className="text-[13.5px] text-ink-soft">{s.note}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Cómo sigue después de escribirnos */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pt-6 pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {PASOS.map((p) => (
            <div key={p.n} className="border-t-2 border-accent pt-5">
              <p className="display-num text-accent text-[30px] leading-none mb-3">{p.n}</p>
              <p className="text-navy font-extrabold text-[18px] mb-2">{p.t}</p>
              <p className="text-[14px] text-ink-soft leading-[1.75]">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[13.5px] text-ink-soft mt-8">
          Estamos en <strong className="text-ink">Quito, Ecuador</strong> y trabajamos con negocios de todo el país.
          Las reuniones son a distancia: videollamada, llamada o WhatsApp.
        </p>
      </section>

      <Discovery />
    </Shell>
  );
}
