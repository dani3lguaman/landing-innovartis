import Link from "next/link";

// Cabecera de las páginas interiores: banda navy con migas, título y bajada (como AQUABEC v2).
export default function PageHero({ kicker, title, children, crumb }) {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="relative max-w-[1200px] mx-auto px-6 py-14 md:py-20">
        <p className="text-[12.5px] text-white/60 mb-5">
          <Link href="/" className="hover:text-white">Inicio</Link> <span className="mx-1.5">/</span> {crumb || title}
        </p>
        {kicker && <p className="kicker mb-4">{kicker}</p>}
        <h1 className="font-heading text-display max-w-[820px]">{title}</h1>
        {children && <div className="mt-5 text-[17px] leading-[1.75] text-white/80 max-w-[680px]">{children}</div>}
      </div>
    </section>
  );
}
