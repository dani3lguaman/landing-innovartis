import Link from "next/link";
import { NAV_LINKS, WA_ASESORIA, WA_LINK, WA_NUMBER_DISPLAY } from "./constants";
import { POSTS } from "./blog/posts";

export default function Footer() {
  return (
    <footer className="bg-navy-darker pt-14 pb-10">
      <div className="max-w-[1150px] mx-auto px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
          <div>
            <p className="font-heading text-[22px] tracking-[0.08em] text-white mb-3">
              INNOV<span className="text-accent">ARTIS</span>
            </p>
            <p className="text-[14px] leading-[1.75] text-white/65 max-w-[300px] mb-5">
              Agencia de marketing estratégico en Quito. No pagas por la imagen: pagas por la
              estrategia, el acompañamiento y los resultados.
            </p>
            <a
              href={WA_ASESORIA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Quiero mi asesoría gratis
            </a>
          </div>

          <nav aria-label="Páginas del sitio">
            <p className="kicker !text-[11px] mb-4">Páginas</p>
            <ul className="space-y-2.5 text-[14px]">
              {[...NAV_LINKS, { href: "/contacto", label: "Contacto" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Guías del blog">
            <p className="kicker !text-[11px] mb-4">Guías</p>
            <ul className="space-y-2.5 text-[14px] leading-[1.5]">
              {POSTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-white/75 hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="kicker !text-[11px] mb-4">Contacto</p>
            <ul className="space-y-2.5 text-[14px] text-white/75">
              <li>Quito, Ecuador</li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp {WA_NUMBER_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/innovartis.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram @innovartis.ec
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/innovartis.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-[12.5px] text-white/50">
          <p>Agencia de marketing con RUC · 3 años construyendo relaciones</p>
          <p>innovartis.lat · Quito, Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
