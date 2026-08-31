import Reveal from "./Reveal";
import AutoVideo from "./AutoVideo";

const shots = [
  {
    type: "video",
    src: "/evidencia/rodaje-fabrica.mp4",
    caption: "Revisando la toma con el cliente, en planta",
  },
  {
    type: "img",
    src: "/evidencia/foto-set-fabrica.jpg",
    caption: "Montaje de luz para grabación en sitio",
  },
  {
    type: "video",
    src: "/evidencia/rodaje-set.mp4",
    caption: "Dirección de escena antes de rodar",
  },
  {
    type: "img",
    src: "/evidencia/foto-rodaje-local.jpg",
    caption: "Cobertura en el local del cliente",
  },
  {
    type: "video",
    src: "/evidencia/rodaje-escena.mp4",
    caption: "Buscando el ángulo — sí, hasta el piso",
  },
  {
    type: "img",
    src: "/evidencia/foto-sesion-salon.jpg",
    caption: "Sesión de producto con cámara profesional",
  },
  {
    type: "img",
    src: "/evidencia/foto-demo-producto.jpg",
    caption: "Martina dirigiendo la demo de producto",
  },
];

export default function EnAccion() {
  return (
    <section id="en-accion" className="section-y overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-6">
        <Reveal>
          <p className="kicker mb-4">Así trabajamos</p>
          <h2 className="font-heading text-navy text-heading mb-4 max-w-[680px]">
            Esto no es banco de imágenes. Es un día nuestro de trabajo.
          </h2>
          <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[640px] mb-10">
            Grabamos en el local de cada cliente con equipo propio — luz, micrófono y dirección de
            escena. Estas son escenas reales de esta semana, sin filtro y sin actores.
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1150px] mx-auto px-6">
        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {shots.map((s) => (
            <figure
              key={s.src}
              className="flex-none w-[240px] md:w-[270px] snap-start"
            >
              <div className="aspect-[3/4] bg-navy-deep border border-line overflow-hidden">
                {s.type === "video" ? (
                  <AutoVideo src={s.src} className="w-full h-full object-cover" />
                ) : (
                  <img
                    src={s.src}
                    alt={s.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <figcaption className="mt-2.5 text-[12.5px] leading-[1.5] text-ink-soft">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-ink-soft/70 md:hidden">Desliza para ver más →</p>
      </div>
    </section>
  );
}
