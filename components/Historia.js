import Reveal from "./Reveal";

const datos = [
  { n: "3", label: "años construyendo marcas desde Quito" },
  { n: "12+", label: "empresas acompañadas" },
  { n: "100%", label: "contenido humano, grabado y dirigido a mano" },
];

export default function Historia() {
  return (
    <section className="max-w-[1150px] mx-auto px-4 md:px-6 pb-16 md:pb-24">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="text-[16px] leading-[1.85] text-ink-soft space-y-5">
            <p>
              InnovArtis es una agencia de marketing de Quito con tres años de trabajo y un
              principio que no cambia:{" "}
              <strong className="text-ink">el marketing tiene que servirle al negocio</strong>. No
              vendemos fotos y videos por montones. Usamos el contenido como un medio para que la
              gente correcta te descubra y te escriba.
            </p>
            <p>
              Hemos acompañado a fábricas, clínicas, veterinarias, servicios a domicilio y
              comercios. El rubro cambia; el método no: entender el negocio, planificar,
              producir con cuidado, medir y corregir.
            </p>
            <p>
              Todo nuestro contenido es humano. Vamos a tu local, conocemos a tu equipo y grabamos
              lo que hace distinto a tu negocio. Si algo no está bien, lo corregimos. Y trabajamos
              con contrato, RUC y reglas claras: la pauta la pagas tú directo a la plataforma, y tus
              páginas, cuentas y material son tuyos.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <dl className="border-t border-line">
            {datos.map((d) => (
              <div key={d.label} className="py-6 border-b border-line flex items-baseline gap-5">
                <dt className="display-num text-accent-deep text-[44px] leading-none min-w-[96px]">
                  {d.n}
                </dt>
                <dd className="text-[14.5px] text-ink-soft">{d.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
