import { SITE_URL } from "@/components/constants";

// Imagen para compartir (app/opengraph-image.js). Se pasa explícita porque, si una página define su propio
// openGraph, Next deja de heredar la imagen generada en la raíz.
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "InnovArtis, agencia de marketing digital en Quito, Ecuador",
};

// Metadatos de una página pública: title, description, canonical, Open Graph y Twitter juntos,
// para que ninguna página herede el og:url ni el og:title de la portada (pasaba hasta el 24-nov-2026).
// title: sin la marca (la plantilla del layout agrega " | InnovArtis"). Meta: 50 a 60 caracteres en total.
// description: 140 a 155 caracteres, con la búsqueda local que se quiere ganar.
export function pageMeta({ title, description, path, absolute = false, type = "website", ogExtra = {} }) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = absolute ? title : `${title} | InnovArtis`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "InnovArtis",
      locale: "es_EC",
      type,
      images: [OG_IMAGE],
      ...ogExtra,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
