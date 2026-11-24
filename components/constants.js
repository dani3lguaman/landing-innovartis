// WhatsApp de ventas (orden de Daniel, 24-nov-2026): todos los botones y enlaces de la web van aquí.
// Antes: 099 862 0536 (chip perdido, nov-2026).
export const WA_NUMBER = "593963140753";
export const WA_NUMBER_DISPLAY = "096 314 0753";
export const WA_TEL_INTL = "+593963140753";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hola InnovArtis, vi su página web y quiero más información."
)}`;
export const WA_ASESORIA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hola InnovArtis, quiero mi asesoría gratis de 10 minutos para mi negocio."
)}`;

export const SITE_URL = "https://innovartis.lat";

// Páginas del sitio (cabecera, pie y sitemap).
export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/google-ads", label: "Google Ads", badge: "Nuevo" },
  { href: "/webs", label: "Páginas web" },
  { href: "/resultados", label: "Resultados" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/planes", label: "Planes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

// Redes oficiales de la agencia. Fuente única: pie, Contacto y JSON-LD leen de aquí.
export const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@innovartisgenciademarketing",
    href: "https://www.instagram.com/innovartisgenciademarketing/",
    note: "Nuestro trabajo del día a día y lo que publicamos para clientes.",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@innuevate",
    href: "https://www.tiktok.com/@innuevate",
    note: "Reels, grabaciones y detrás de cámaras.",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "InnovArtis",
    href: "https://www.linkedin.com/company/112360156/",
    note: "La agencia, el equipo y los resultados para empresas.",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "InnovArtis",
    href: "https://www.facebook.com/innovartis.ec",
    note: "Novedades y ofertas del mes.",
  },
];
