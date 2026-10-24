import Reveal from "./Reveal";
// 24-oct-2026: Martina sale del equipo.
// 21-oct-2026: Maura reemplaza a Sofía como ejecutiva de cuentas.
// 8-oct-2026: las cinco fotos con el mismo recorte (cara centrada, cabeza y hombros) y el mismo fondo azul.

const team = [
  {
    name: "Daniel Guamán",
    role: "CEO · Especialista en publicidad digital",
    body: "Maneja los anuncios y la asesoría comercial. Es la cara del proyecto y quien te entrega las cuentas.",
    img: "/img/equipo-daniel-circulo.webp",
  },
  {
    name: "Maura",
    role: "Coordinadora de Marketing · Ejecutiva de cuentas",
    body: "Acompaña tu cuenta en el día a día, coordina al equipo y revisa cada pieza y cada campaña antes de que llegue a ti.",
    img: "/img/equipo-maura-circulo.png",
  },
  {
    name: "Vanessa",
    role: "Diseñadora multimedia",
    body: "Diseña artes, carruseles y portadas, y edita los videos de cada cliente.",
    img: "/img/equipo-vanessa-circulo.webp",
  },
  {
    name: "Joel",
    role: "Filmmaker",
    body: "Va a tu negocio a grabar con cámara, luz y micrófono, y edita los videos.",
    img: "/img/equipo-joel-circulo.webp",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="max-w-[1200px] mx-auto px-4 md:px-6 section-y">
      <Reveal>
        <p className="kicker mb-4">Equipo</p>
      </Reveal>
      <Reveal mask delay={80}>
        <h2 className="font-heading text-navy text-heading mb-12 max-w-[620px]">
          Personas reales detrás de cada resultado.
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {team.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <div>
              {t.img ? (
                <img
                  src={t.img}
                  alt={`Foto de ${t.name}`}
                  className="w-[120px] h-[120px] rounded-full object-cover border border-line mb-5"
                />
              ) : (
                <div className="w-[120px] h-[120px] rounded-full bg-navy-deep border border-line mb-5 flex items-center justify-center">
                  <span className="font-heading text-white text-[38px]">
                    {t.name[0]}
                  </span>
                </div>
              )}
              <h3 className="font-heading text-navy text-[24px]">{t.name}</h3>
              <p className="text-[13px] text-accent-deep tracking-[0.04em] mb-2.5">{t.role}</p>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-12 text-[14.5px] italic text-ink-soft max-w-[520px]">
          Contamos con equipo propio — iPhone, micrófono y luz — para cuidar la calidad de cada
          trabajo. Nada de contenido masivo ni genérico: todo se graba y se dirige a mano.
        </p>
      </Reveal>
    </section>
  );
}
