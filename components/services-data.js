// Servicios de la agencia. Precios: solo los públicos de la metodología (nunca costos internos).
// Prohibido decir "inteligencia artificial": se dice "asistente automático de WhatsApp".
export const SERVICES = [
  {
    key: "meta",
    title: "Campañas en Meta Ads",
    body: "Facebook e Instagram dirigidos a tu WhatsApp o a un formulario. Segmentamos por zona, probamos anuncios y te reportamos cada mes.",
    href: "/resultados",
    cta: "Ver resultados reales",
    icon: "megaphone",
  },
  {
    key: "google",
    title: "Google Ads",
    body: "Aparece cuando alguien busca lo que vendes. Campañas de búsqueda que llevan a tu WhatsApp, a tu llamada o a tu web.",
    href: "/google-ads",
    cta: "Conocer Google Ads",
    icon: "search",
    badge: "Nuevo",
  },
  {
    key: "contenido",
    title: "Producción de contenido",
    body: "Reels, posts y carruseles hechos por personas, con grabación en tu negocio. El contenido es el medio; el cliente es el fin.",
    href: "/portafolio",
    cta: "Ver portafolio",
    icon: "camera",
  },
  {
    key: "webs",
    title: "Páginas web",
    body: "Desde una página de $60 hasta tiendas en línea. Con tu dominio .com registrado a tu nombre y botón directo a WhatsApp.",
    href: "/webs",
    cta: "Ver páginas que hicimos",
    icon: "browser",
  },
  {
    key: "whatsapp",
    title: "Asistente automático de WhatsApp",
    body: "Responde precios, horarios y preguntas frecuentes a cualquier hora, y te pasa al cliente listo para cerrar.",
    href: "/webs#asistente",
    cta: "Ver cómo funciona",
    icon: "chat",
  },
  {
    key: "maps",
    title: "Google Maps",
    body: "Tu ficha de negocio creada, verificada y optimizada para que te encuentren cerca. Incluida desde el plan Estándar.",
    href: "/google-ads#maps",
    cta: "Más sobre Maps",
    icon: "pin",
  },
  {
    key: "crm",
    title: "CRM HubSpot",
    body: "Cada contacto registrado con su origen y su estado, para no perder a nadie. Desde $200 de implementación.",
    href: "/servicios#crm",
    cta: "Más sobre CRM",
    icon: "chart",
  },
  {
    key: "asesoria",
    title: "Estrategia y asesoría",
    body: "Antes de producir, entendemos tu negocio: reunión, análisis de tu mercado y un plan que apruebas por escrito.",
    href: "/servicios#metodo",
    cta: "Ver el método",
    icon: "compass",
  },
];

const PATHS = {
  megaphone: "M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Zm13-3a5 5 0 0 1 0 8M18.5 5.5a9 9 0 0 1 0 13",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm10 17-5.2-5.2",
  camera: "M4 7h3l2-3h6l2 3h3v12H4V7Zm8 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
  browser: "M3 5h18v14H3V5Zm0 4h18M6 7h.01M8.5 7h.01",
  chat: "M4 5h16v11H9l-5 4V5Zm4 5h8m-8 3h5",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z",
};

export function Icon({ name, className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
