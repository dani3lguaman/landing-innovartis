import { Inter } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.innovartis.lat"),
  title: {
    default: "INNOVARTIS — Agencia de Marketing Digital en Quito, Ecuador",
    template: "%s | INNOVARTIS",
  },
  description:
    "Agencia de marketing digital en Quito. Estrategia, producción de contenido, Meta Ads, TikTok Ads, Google Maps y diseño web para empresas que quieren crecer. Resultados medibles con contrato.",
  keywords: [
    "agencia de marketing digital Quito",
    "marketing digital Ecuador",
    "Meta Ads Quito",
    "TikTok Ads Ecuador",
    "publicidad digital Quito",
    "agencia publicidad Quito",
    "diseño web Quito",
    "Google Maps optimización Quito",
    "producción de contenido Quito",
    "campañas Facebook Ads Ecuador",
    "agencia marketing Quito Ecuador",
    "INNOVARTIS",
  ],
  authors: [{ name: "INNOVARTIS", url: "https://www.innovartis.ec" }],
  creator: "INNOVARTIS",
  publisher: "INNOVARTIS",
  category: "Marketing Digital",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.innovartis.lat",
    siteName: "INNOVARTIS",
    title: "INNOVARTIS — Agencia de Marketing Digital en Quito, Ecuador",
    description:
      "Estrategia, producción y campañas pagadas (Meta Ads + TikTok Ads) para empresas que quieren crecer. Diseño web profesional. Quito, Ecuador.",
    images: [
      {
        url: "/logo-innovartis.jpg",
        width: 1200,
        height: 630,
        alt: "INNOVARTIS — Agencia de Marketing Digital en Quito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INNOVARTIS — Agencia de Marketing Digital en Quito",
    description:
      "Meta Ads, TikTok Ads, producción de contenido y diseño web en Quito, Ecuador. Resultados medibles con contrato.",
    images: ["/logo-innovartis.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.innovartis.lat",
  },
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "INNOVARTIS",
  url: "https://www.innovartis.lat",
  logo: "https://www.innovartis.lat/logo-innovartis.jpg",
  description:
    "Agencia de marketing digital en Quito, Ecuador. Especializada en Meta Ads, TikTok Ads, producción de contenido, Google Maps y diseño web.",
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
  areaServed: {
    "@type": "City",
    name: "Quito",
  },
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
      <body className={`${inter.className} antialiased`}>
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}
