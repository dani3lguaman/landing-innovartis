import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "INNOVARTIS — Agencia de Marketing Digital · Quito",
  description:
    "Estrategia, producción y campañas pagadas (Meta Ads + TikTok Ads) para empresas que quieren crecer. También diseñamos tu sitio web. Quito, Ecuador.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
