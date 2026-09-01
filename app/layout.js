import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata = {
  metadataBase: new URL("https://innovartis.lat"),
  title: "INNOVARTIS — Estrategia que sí genera resultados · Quito",
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
  url: "https://www.innovartis.lat",
  logo: "https://www.innovartis.lat/logo-innovartis.jpg",
  description:
    "Agencia de marketing estratégico en Quito, Ecuador. Campañas, datos, CRM y automatización. También páginas web desde $150, pago único, con el dominio registrado a nombre del cliente.",
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
      <body className={`${cormorant.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
