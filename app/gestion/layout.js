// Páginas internas del equipo (calendario de Maura, cobros de Pame). Sin menú, sin sitemap y sin índice:
// solo se abren con el enlace secreto. Los datos van cifrados en public/gestion-datos/ (ver scripts/cifrar-gestion.mjs).
export const metadata = {
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function GestionLayout({ children }) {
  return (
    <div className="min-h-screen bg-paper-soft">
      <header className="bg-navy text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-2">
          <p className="font-heading text-[15px] tracking-wide">
            INNOVARTIS <span className="text-white/60 font-semibold">· Gestión interna</span>
          </p>
          <p className="text-[12px] text-white/60">Página interna del equipo · no compartas el enlace</p>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-10">{children}</main>
    </div>
  );
}
