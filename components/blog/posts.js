import PostPublicidadFacebook from "./PostPublicidadFacebook";
import PostPaginaWebQuito from "./PostPaginaWebQuito";
import PostClientesWhatsApp from "./PostClientesWhatsApp";

// Guías del blog. El orden es el del índice /blog.
export const POSTS = [
  {
    slug: "cuanto-cuesta-publicidad-facebook-ecuador",
    title: "¿Cuánto cuesta la publicidad en Facebook en Ecuador?",
    description:
      "Pauta, gestión y costo por cliente: qué compone el precio de anunciar en Facebook e Instagram en Ecuador, rangos reales y de qué depende que tu dinero rinda.",
    kicker: "Publicidad",
    date: "2026-10-06",
    readingMinutes: 6,
    ctaTitulo: "¿Cuánto tendría sentido invertir en tu negocio?",
    Body: PostPublicidadFacebook,
  },
  {
    slug: "cuanto-cuesta-pagina-web-quito",
    title: "¿Cuánto cuesta una página web en Quito?",
    description:
      "Diseño, dominio y hosting explicados sin letra pequeña. Precios claros: Express $60, Profesional $120 con tu .com a tu nombre y tienda online $250.",
    kicker: "Páginas web",
    date: "2026-10-06",
    readingMinutes: 6,
    ctaTitulo: "¿Qué página necesita tu negocio?",
    Body: PostPaginaWebQuito,
  },
  {
    slug: "como-conseguir-clientes-por-whatsapp",
    title: "Cómo conseguir clientes por WhatsApp",
    description:
      "Guía práctica para negocios en Ecuador: WhatsApp Business bien configurado, campañas que llevan a tu chat, respuestas rápidas y seguimiento para no perder a nadie.",
    kicker: "Ventas por WhatsApp",
    date: "2026-10-06",
    readingMinutes: 6,
    ctaTitulo: "¿Revisamos cómo usas WhatsApp hoy?",
    Body: PostClientesWhatsApp,
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
