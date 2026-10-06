import Reveal from "./Reveal";
import { WA_ASESORIA } from "./constants";

const columnas = [
  {
    quien: "Nosotros",
    titulo: "Atraemos",
    items: [
      "Entendemos tu negocio y escribimos un brief que tú apruebas",
      "Producimos el contenido y lo publicamos",
      "Activamos campañas que llevan a la gente a tu WhatsApp",
      "Cada mes te mostramos cuánto se invirtió y qué se consiguió",
    ],
  },
  {
    quien: "Tú",
    titulo: "Cierras",
    items: [
      "Respondes rápido a quien te escribe",
      "Conversas, recomiendas y cierras la venta",
      "Nos cuentas qué preguntan y qué compran tus clientes",
      "Revisas cada pieza y pides correcciones (hasta 3 por pieza)",
    ],
  },
  {
    quien: "Juntos",
    titulo: "Mejoramos",
    items: [
      "Grupo de WhatsApp directo con el equipo",
      "Asesoría comercial para que cierres mejor",
      "Revisamos los números y ajustamos lo que no funciona",
      "Construimos una relación de años, no de un mes",
    ],
  },
];

export default function TrabajoEnEquipo() {
  return (
    <section className="bg-navy-deep section-y">
      <div className="max-w-[1150px] mx-auto px-4 md:px-6">
        <Reveal>
          <p className="kicker mb-4">Cómo trabajamos contigo</p>
        </Reveal>
        <Reveal mask delay={80}>
          <h2 className="font-heading text-white text-heading mb-5 max-w-[680px]">
            Nosotros atraemos, tú cierras.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[16px] leading-[1.8] text-white/75 max-w-[640px] mb-12">
            Seamos claros desde el principio: no cerramos tus ventas. Nuestro trabajo es que la
            gente correcta te descubra y llegue interesada. Cerrar es tuyo, y para eso te
            acompañamos.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {columnas.map((c, i) => (
            <div key={c.quien} className="bg-navy-deep p-7 md:p-8">
              <Reveal delay={i * 110}>
                <p className="kicker !text-[11px] mb-2">{c.quien}</p>
                <h3 className="font-heading text-white text-[30px] mb-5">{c.titulo}</h3>
                <ul className="text-[14px] leading-[1.75] text-white/75 space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent" aria-hidden="true">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <a href={WA_ASESORIA} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Quiero mi asesoría gratis
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
