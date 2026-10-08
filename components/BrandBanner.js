// Banner de marca (8-oct-2026, pedido de Daniel): la portada de redes
// (agencia/marca/portada-redes-innovartis-820x312.jpeg) rehecha en código para que
// se vea nítida en cualquier pantalla. Fondo claro con curvas suaves, el iA,
// INNOVARTIS y el tagline, con una entrada animada.
export default function BrandBanner() {
  return (
    <section className="brand-banner relative overflow-hidden bg-white border-b border-line" aria-label="InnovArtis">
      {/* Curvas de fondo, como en la portada de redes */}
      <svg className="brand-banner__curvas" viewBox="0 0 1440 360" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H560 C 470 90 300 140 0 150 Z" fill="#f2f4f7" />
        <path d="M1440 40 C 1260 60 1120 150 1080 360 H1440 Z" fill="#f4f6f9" />
        <path d="M1440 0 H900 C 1020 70 1220 90 1440 70 Z" fill="#f7f8fa" />
        <path d="M420 0 C 520 60 600 110 700 120 C 600 70 540 30 520 0 Z" fill="#fdf1eb" />
      </svg>

      <div className="relative max-w-[1200px] mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <img
          src="/img/marca-ia.png"
          alt=""
          aria-hidden="true"
          width="480"
          height="910"
          className="brand-banner__ia h-[64px] md:h-[84px] w-auto mb-4"
        />
        <p className="brand-banner__nombre font-heading font-extrabold leading-none tracking-[0.02em] text-[44px] md:text-[68px]">
          <span className="text-accent">INNOV</span>
          <span className="text-navy">ARTIS</span>
        </p>
        <p className="brand-banner__tag mt-3 text-[15px] md:text-[19px] font-semibold text-navy">
          Estrategia que sí <span className="text-accent">genera resultados</span>
        </p>
      </div>
    </section>
  );
}
