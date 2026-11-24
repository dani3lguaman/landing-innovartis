import { Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_URL, SOCIALS, WA_TEL_INTL } from "@/components/constants";

// Montserrat: tipografía del manual de marca (30-ago-2026) y de la web de AQUABEC v2.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// SEO 24-nov-2026: cada página pública define su title/description/canonical/OG con lib/seo.js.
// Esto es solo el respaldo y la plantilla " | InnovArtis".
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agencia de marketing digital en Quito, Ecuador | InnovArtis",
    template: "%s | InnovArtis",
  },
  description:
    "Agencia de marketing digital en Quito: campañas Meta Ads en Facebook e Instagram, contenido para redes, Google Ads y páginas web para pymes de Ecuador.",
  applicationName: "InnovArtis",
  openGraph: {
    title: "Agencia de marketing digital en Quito, Ecuador | InnovArtis",
    description:
      "Campañas Meta Ads, contenido para redes, Google Ads y páginas web para pymes de Quito y Ecuador. Casos reales con métricas reales.",
    url: SITE_URL,
    siteName: "InnovArtis",
    locale: "es_EC",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// Datos estructurados de la agencia (MarketingAgency es un tipo de LocalBusiness).
// Teléfono = WhatsApp de ventas. Sin «inteligencia artificial» ni «bot»: «asistente automático de WhatsApp».
const SERVICIOS = [
  ["Meta Ads (publicidad en Facebook e Instagram)", "Campañas en Meta Ads que llevan clientes a tu WhatsApp."],
  ["Google Ads", "Campañas de búsqueda en Google que llevan a tu WhatsApp o a una llamada."],
  ["Manejo de redes sociales", "Posts, reels y carruseles para Facebook e Instagram, con calendario y reporte."],
  ["Diseño de páginas web", "Páginas web rápidas, hechas para celular, con botón directo a WhatsApp."],
  ["Asistente automático de WhatsApp", "Responde precios, horarios y preguntas frecuentes a cualquier hora."],
  ["Producción de contenido", "Grabación de videos y fotos en el negocio del cliente."],
  ["Google Maps", "Ficha de negocio creada, verificada y optimizada."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      "@id": `${SITE_URL}/#agencia`,
      name: "InnovArtis",
      alternateName: "INNOVARTIS",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-innovartis.jpg`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Agencia de marketing digital en Quito, Ecuador: campañas Meta Ads, Google Ads, manejo de redes, páginas web y asistente automático de WhatsApp para pymes.",
      telephone: WA_TEL_INTL,
      email: "innuevate@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Quito",
        addressRegion: "Pichincha",
        addressCountry: "EC",
      },
      areaServed: [
        { "@type": "City", name: "Quito" },
        { "@type": "Country", name: "Ecuador" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: WA_TEL_INTL,
        contactType: "sales",
        areaServed: "EC",
        availableLanguage: "Spanish",
      },
      sameAs: SOCIALS.map((s) => s.href),
      knowsAbout: SERVICIOS.map(([n]) => n),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de marketing digital",
        itemListElement: SERVICIOS.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            description,
            areaServed: [
              { "@type": "City", name: "Quito" },
              { "@type": "Country", name: "Ecuador" },
            ],
            provider: { "@id": `${SITE_URL}/#agencia` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#web`,
      url: SITE_URL,
      name: "InnovArtis",
      inLanguage: "es-EC",
      publisher: { "@id": `${SITE_URL}/#agencia` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-EC">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
