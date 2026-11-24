import { ImageResponse } from "next/og";

// Imagen que sale al compartir cualquier página por WhatsApp, Facebook o LinkedIn (1200x630).
// Se genera en el build con los colores de marca: navy #2C4A63 y naranja #EE7B4D (globals.css).
export const alt = "InnovArtis, agencia de marketing digital en Quito, Ecuador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#2C4A63",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#EE7B4D", marginBottom: 28 }}>
          QUITO · ECUADOR
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, letterSpacing: 2 }}>
          <span style={{ color: "#EE7B4D" }}>INNOV</span>
          <span>ARTIS</span>
        </div>
        <div style={{ display: "flex", fontSize: 46, marginTop: 24, lineHeight: 1.25 }}>
          Agencia de marketing digital
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 30, color: "rgba(255,255,255,0.8)" }}>
          Meta Ads · Google Ads · Redes sociales · Páginas web
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 18, color: "#EE7B4D" }}>
          WhatsApp 096 314 0753
        </div>
      </div>
    ),
    size
  );
}
