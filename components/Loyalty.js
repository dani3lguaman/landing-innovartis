import Reveal from "./Reveal";

export default function Loyalty() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 section-y">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <div>
            <p className="kicker mb-4">Cómo trabajamos contigo</p>
            <h2 className="font-heading text-navy text-heading mb-5">
              Hacemos que te descubran. La venta la cierras tú.
            </h2>
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
          </div>
        </Reveal>
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
