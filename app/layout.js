import { Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat: tipografía del manual de marca (30-ago-2026) y de la web de AQUABEC v2.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://innovartis.lat"),
  title: {
    default: "INNOVARTIS — Estrategia que sí genera resultados · Quito",
    template: "%s · INNOVARTIS Quito",
  },
  description:
    "Agencia de marketing estratégico en Quito, Ecuador. Campañas, datos, CRM y automatización para empresas que quieren crecer en serio. Casos reales con métricas reales.",
  openGraph: {
    title: "INNOVARTIS — Estrategia que sí genera resultados",
    description:
      "Campañas, datos, CRM y automatización para empresas que quieren crecer en serio.",
    url: "https://innovartis.lat",
    siteName: "InnovArtis",
    locale: "es_EC",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "INNOVARTIS",
  url: "https://innovartis.lat",
  logo: "https://innovartis.lat/logo-innovartis.jpg",
  description:
    "Agencia de marketing estratégico en Quito, Ecuador. Campañas, datos, CRM y automatización. También páginas web desde $60, pago único; la Profesional ($120) con el dominio .com registrado a nombre del cliente.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    addressCountry: "EC",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+593-99-862-0536",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com/innovartis.ec",
    "https://www.tiktok.com/@innovartis.ec",
    "https://www.facebook.com/innovartis.ec",
  ],
  areaServed: { "@type": "City", name: "Quito" },
  serviceType: [
    "Marketing Digital",
    "Meta Ads",
    "TikTok Ads",
    "Producción de Contenido",
    "Google Ads",
    "Diseño Web",
    "Google Maps",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
