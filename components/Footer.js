import { NAV, WA_LINK, WA_NUMBER_DISPLAY } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-navy-darker text-white/70">
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-[22px] font-extrabold tracking-[0.06em] text-white mb-3">
            <span className="text-accent">INNOV</span>ARTIS
          </p>
          <p className="text-[14px] leading-[1.8] max-w-[360px]">
            Estrategia que sí genera resultados. Campañas en Meta y Google, contenido, páginas web y
            asistentes automáticos de WhatsApp para negocios de Ecuador.
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-[13px] uppercase tracking-[0.12em] mb-4">Páginas</p>
          <ul className="grid grid-cols-2 gap-y-1 text-[14px] [&_a]:inline-block [&_a]:py-1.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-bold text-[13px] uppercase tracking-[0.12em] mb-4">Contacto</p>
          <ul className="space-y-1 text-[14px] [&_a]:inline-block [&_a]:py-1.5">
            <li>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp {WA_NUMBER_DISPLAY}
              </a>
            </li>
            <li>
              <a href="mailto:innuevate@gmail.com" className="hover:text-white">
                innuevate@gmail.com
              </a>
            </li>
            <li>Quito, Ecuador</li>
            <li>
              <a href="https://www.instagram.com/innovartis.ec" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>{" "}
              ·{" "}
              <a href="https://www.facebook.com/innovartis.ec" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>{" "}
              ·{" "}
              <a href="https://www.tiktok.com/@innovartis.ec" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-[1200px] mx-auto px-6 py-5 text-[12.5px]">
          © 2026 InnovArtis · Agencia con RUC · Las cifras de esta web salen del Administrador de anuncios de cada cliente, con fecha.
        </p>
      </div>
    </footer>
  );
}
