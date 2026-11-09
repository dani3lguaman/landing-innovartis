import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Política de privacidad",
  description:
    "Cómo InnovArtis y los negocios que anuncian con nosotros tratan los datos que usted deja en formularios y anuncios.",
  alternates: { canonical: "/privacidad" },
};

const S = { maxWidth: 820, margin: "0 auto", padding: "48px 20px 80px", lineHeight: 1.7, fontSize: 17 };
const H = { marginTop: 36, marginBottom: 8, fontSize: 22 };

export default function PrivacidadPage() {
  return (
    <Shell>
      <PageHero img="/evidencia/foto-demo-producto.jpg" kicker="Legal" title="Política de privacidad">
        <p>Qué datos recibimos cuando usted llena un formulario o escribe desde un anuncio, para qué se usan y cómo pedir que se borren.</p>
      </PageHero>
      <section style={S}>
        <p><strong>Responsable:</strong> INNOVARTIS, agencia de marketing digital con domicilio en Quito, Ecuador (RUC 1729036994001), y el negocio anunciante que aparece identificado en cada anuncio o formulario (nuestro cliente). Contacto: innuevate@gmail.com · WhatsApp +593 99 862 0536.</p>

        <h2 style={H}>1. Qué datos recibimos</h2>
        <p>Solo los que usted decide enviar: nombre, número de WhatsApp o teléfono, correo electrónico y las respuestas a las preguntas del formulario (por ejemplo, el servicio que le interesa). Los formularios de Facebook e Instagram pueden completar automáticamente esos campos con la información de su perfil; usted puede editarla antes de enviar.</p>

        <h2 style={H}>2. Para qué se usan</h2>
        <p>Únicamente para que el negocio anunciante se comunique con usted sobre el servicio o producto por el que preguntó, y para que InnovArtis mida los resultados de la campaña. No se usan para otro fin, no se venden ni se ceden a terceros ajenos a esa atención.</p>

        <h2 style={H}>3. Quién tiene acceso</h2>
        <p>El negocio anunciante identificado en el anuncio, que es quien le atiende, y el equipo de InnovArtis que administra la campaña. Los datos se reciben a través de Meta (Facebook e Instagram), cuyas condiciones y política de datos también aplican.</p>

        <h2 style={H}>4. Cuánto tiempo se conservan</h2>
        <p>Mientras dure la atención de su consulta y hasta 12 meses después, salvo que usted pida antes que se borren o que exista una relación comercial que requiera conservarlos.</p>

        <h2 style={H}>5. Sus derechos</h2>
        <p>Usted puede pedir en cualquier momento acceder, corregir o eliminar sus datos, o que no se le vuelva a contactar. Escríbanos a innuevate@gmail.com o al WhatsApp +593 99 862 0536 indicando el anuncio o negocio desde el que llenó el formulario; atendemos la solicitud en un plazo máximo de 15 días.</p>

        <h2 style={H}>6. Seguridad</h2>
        <p>Los datos se guardan en las herramientas de Meta y en los sistemas de gestión de la agencia y del anunciante, con acceso restringido a las personas que atienden su consulta.</p>

        <p style={{ marginTop: 40, color: "#777", fontSize: 15 }}>Última actualización: 9 de noviembre de 2026. Esta política se aplica a los formularios y anuncios gestionados por InnovArtis para sí misma y para sus clientes en Ecuador.</p>
      </section>
    </Shell>
  );
}
