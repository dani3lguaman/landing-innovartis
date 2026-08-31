import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 section-y">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            <p className="kicker mb-4">Por qué nos eligen</p>
          </Reveal>
          <Reveal mask delay={80}>
            <h2 className="font-heading text-navy text-heading">
              No nos pagan por la imagen o el video. Nos pagan por los resultados.
            </h2>
          </Reveal>
        </div>
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

      <hr className="hairline my-16" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            <p className="kicker mb-4">Cómo trabajamos contigo</p>
          </Reveal>
          <Reveal mask delay={80}>
            <h2 className="font-heading text-navy text-heading mb-5">
              Hacemos que te descubran. La venta la cierras tú.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-[16px] leading-[1.8] text-ink-soft mb-4">
              Seamos claros desde el principio:{" "}
              <strong className="text-ink">nosotros no cerramos tus ventas</strong>. Nuestro trabajo
              es que la gente correcta te descubra, te escriba y llegue interesada. Cerrar es tuyo —
              y para eso te acompañamos con asesoría comercial.
            </p>
            <p className="text-[16px] leading-[1.8] text-ink-soft">
              No solo queremos tu dinero: queremos ayudarte a conseguir resultados reales y construir
              una relación de años.
            </p>
          </Reveal>
        </div>
        <div className="space-y-5">
          <Reveal delay={100}>
            <div className="border border-line bg-white p-7">
              <h3 className="font-heading text-navy text-[22px] mb-2">
                Sabes en qué se va cada dólar
              </h3>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                Cada mes ves cuánto se invirtió, cuánta gente te vio y cuántos te escribieron. Sin
                humo, sin métricas de vanidad: números que puedes revisar tú mismo en las
                plataformas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="border border-line bg-white p-7">
              <h3 className="font-heading text-navy text-[22px] mb-2">Beneficios por antigüedad</h3>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                A un cliente con un año trabajando juntos lo premiamos con una sesión de cobertura
                gratuita. La lealtad se devuelve.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="border border-line bg-white p-7">
              <h3 className="font-heading text-navy text-[22px] mb-2">Programa de referidos</h3>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                Recomienda InnovArtis a otro negocio y recibe un beneficio. (El mecanismo exacto lo
                conversamos contigo — preferimos prometer poco y cumplir siempre.)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
