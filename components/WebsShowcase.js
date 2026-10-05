import SectionTitle from "./SectionTitle";

// Páginas que hicimos para clientes (oferta-vigente.md · "Páginas web que hemos creado").
// img: captura en /portafolio/webs/. Sin captura se muestra la tarjeta con el enlace.
export const WEBS = [
  { name: "Grúas y Montacargas Joel Trans", url: "https://gruas-montacargas.pages.dev", rubro: "Industria", kind: "Web de 11 páginas con cotizador", img: "/portafolio/webs/gruas-montacargas-escritorio.webp", cel: "/portafolio/webs/gruas-montacargas-celular.webp" },
  { name: "Pachy Limpieza Profesional", url: "https://www.serviciosdelimpiezapachy.com", rubro: "Limpieza", kind: "Web con dominio .com propio", img: "/portafolio/webs/pachy-escritorio.webp", cel: "/portafolio/webs/pachy-celular.webp" },
  { name: "Colores y Sabores", url: "https://colores-y-sabores.pages.dev", rubro: "Comercio", kind: "Catálogo con pedidos por WhatsApp", img: "/portafolio/webs/colores-y-sabores-escritorio.webp", cel: "/portafolio/webs/colores-y-sabores-celular.webp" },
  { name: "Emily Garcés · Ikigai Psicología", url: "https://emily-garces.pages.dev", rubro: "Salud", kind: "Página profesional con agenda", img: "/portafolio/webs/emily-garces-ikigai-escritorio.webp", cel: "/portafolio/webs/emily-garces-ikigai-celular.webp" },
  { name: "FisioClub Quito", url: "https://fisioclubquito.com", rubro: "Salud", kind: "Optimización y SEO de su WordPress", img: "/portafolio/webs/fisioclub-quito-escritorio.webp", cel: "/portafolio/webs/fisioclub-quito-celular.webp" },
];

export default function WebsShowcase({ items = WEBS }) {
  return (
    <section className="section-y">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle kicker="Páginas que hicimos" title="Webs reales de clientes reales, en línea hoy">
          <p>Entra y pruébalas desde tu celular.</p>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((w) => (
            <a key={w.url} href={w.url} target="_blank" rel="noopener noreferrer" className="card group overflow-hidden block">
              <div className="bg-paper-soft border-b border-line px-4 py-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[12px] text-ink-soft truncate">{w.url.replace("https://", "")}</span>
              </div>
              <div className="card-zoom relative aspect-[16/10] bg-paper-soft">
                {w.img ? (
                  <img src={w.img} alt={`Página web de ${w.name}`} loading="lazy" className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-navy/40 font-extrabold text-[22px] px-6 text-center">
                    {w.name}
                  </div>
                )}
                {w.cel && (
                  <img
                    src={w.cel}
                    alt={`${w.name} en celular`}
                    loading="lazy"
                    className="hidden sm:block absolute right-4 bottom-0 w-[22%] aspect-[9/17] object-cover object-top rounded-t-xl border-4 border-b-0 border-navy shadow-xl !scale-100"
                  />
                )}
              </div>
              <div className="px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-deep">
                    {w.rubro} · {w.kind}
                  </p>
                  <p className="text-[16px] font-bold text-navy">{w.name}</p>
                </div>
                <span className="text-[13px] font-bold text-accent-deep whitespace-nowrap">Visitar →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
