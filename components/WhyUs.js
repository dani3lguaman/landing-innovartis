import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 section-y">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <div>
            <p className="kicker mb-4">Por qué nos eligen</p>
            <h2 className="font-heading text-navy text-heading">
              No nos pagan por la imagen o el video. Nos pagan por los resultados.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="text-[16px] leading-[1.85] text-ink-soft space-y-5 md:pt-2">
            <p>
              Hoy cualquiera arma imágenes con inteligencia artificial. Nosotros hacemos otra cosa:{" "}
              <strong className="text-ink">todo nuestro contenido es humano</strong>, producido bajo
              dirección y planificación real — y si algo no está bien, lo corregimos. No vendemos
              fotos y videos por montones; ese no es nuestro mercado.
            </p>
            <p>
              Lo que entregamos es el{" "}
              <strong className="text-ink">acompañamiento, la asesoría comercial y el manejo de datos</strong>{" "}
              que hacen que el marketing funcione. Trabajamos con retail, salud, servicios, industria,
              educación — el sector cambia, el método no: estrategia, datos y resultados medibles.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
