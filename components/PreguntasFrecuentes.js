import SectionTitle from "./SectionTitle";
import { WA_LINK } from "./constants";

// 10-nov-2026: las dudas que frenan la venta, respondidas con las condiciones reales de la proforma
// (agencia/comercial/proforma/oferta-vigente.md). Si cambian las condiciones, cambiar aquí también.
const FAQ = [
  {
    q: "¿Tengo que firmar por varios meses?",
    a: "No. El plan es mensual y sin permanencia. Firmamos un contrato con RUC y te entregamos factura.",
  },
  {
    q: "¿Cómo se paga el plan?",
    a: "En dos partes: 50 % al inicio y 50 % al finalizar el mes, por transferencia bancaria.",
  },
  {
    q: "¿La publicidad está incluida?",
    a: "La inversión en anuncios se paga directo a Meta o a Google desde tu propia cuenta, desde USD 3 al día. Ese dinero va a la plataforma, no a la agencia, y tú ves cada dólar.",
  },
  {
    q: "¿Me garantizan ventas?",
    a: "No prometemos ventas: prometemos lo que está en el contrato y un reporte cada mes con los números reales de tu cuenta. Lo que sí medimos desde el primer día son los mensajes que llegan a tu WhatsApp.",
  },
  {
    q: "¿Tengo que darles mis contraseñas?",
    a: "No pedimos contraseñas. Los accesos a tu Facebook, Instagram o Google se dan por invitación, en una videollamada contigo. Las cuentas y el material siempre son tuyos.",
  },
  {
    q: "¿Y si no tengo tiempo para grabar?",
    a: "En el plan con grabación vamos a tu negocio con cámara, luz y micrófono. En el Básico grabas con tu celular siguiendo nuestra guía, y nosotros editamos.",
  },
  {
    q: "¿Trabajan solo en Quito?",
    a: "Estamos en Quito y atendemos todo el país. Las campañas se segmentan a la ciudad o al sector donde atiendes.",
  },
];

export default function PreguntasFrecuentes() {
  return (
    <section className="section-y">
      <div className="max-w-[860px] mx-auto px-6">
        <SectionTitle kicker="Preguntas frecuentes" title="Lo que todos preguntan antes de empezar" center />
        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold text-navy">
                {f.q}
                <span className="text-accent text-[24px] leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="text-center mt-8 text-[15px] text-ink-soft">
          ¿Otra duda?{" "}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold text-accent-deep hover:underline">
            Escríbenos por WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
