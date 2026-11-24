import { SITE_URL } from "@/components/constants";

// /gestion (páginas internas cifradas de Maura y Pame), sus datos y la API no se rastrean.
// Las páginas igual llevan noindex propio (app/gestion/layout.js). /aterriza y /brief-mes no se bloquean aquí:
// ya llevan noindex y así WhatsApp sigue mostrando la vista previa del enlace que se manda al cliente.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/gestion", "/gestion-datos/", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
