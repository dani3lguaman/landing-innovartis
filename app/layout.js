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
  title: "INNOVARTIS — Estrategia que sí genera resultados · Quito",
  description:
    "Agencia de marketing estratégico en Quito, Ecuador. Campañas, datos, CRM y automatización para empresas que quieren crecer en serio. Casos reales con métricas reales.",
  openGraph: {
    title: "INNOVARTIS — Estrategia que sí genera resultados",
    description:
      "Campañas, datos, CRM y automatización para empresas que quieren crecer en serio.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
