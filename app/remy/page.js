import { DM_Sans } from "next/font/google";
import styles from "./remy.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Remy Ecuador — Extensiones de cabello 100% naturales",
  description:
    "100% natural hair extensions · Quito y Guayaquil. WhatsApp, Instagram, TikTok y ubicaciones de nuestras sucursales.",
  openGraph: {
    title: "Remy Ecuador",
    description: "Extensiones de cabello 100% naturales · Quito y Guayaquil",
    images: ["/remy/logo.jpg"],
  },
};

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.85L.057 23.272a.75.75 0 00.921.921l5.422-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.964-1.362l-.356-.213-3.68.999.978-3.594-.233-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.59a8.18 8.18 0 004.79 1.54V7.67a4.85 4.85 0 01-1.03-.98z" />
    </svg>
  );
}

function MapsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

const sucursales = [
  {
    nombre: "Remy Sur",
    sub: "Quito Sur · @cabelloremy_sur",
    dot: "#c8a86b",
    whatsapp: "https://wa.me/593987125904",
    maps: "https://maps.app.goo.gl/AqQvfCae2vxVmhun7",
    instagram: "https://www.instagram.com/cabelloremy_sur/",
  },
  {
    nombre: "Remy Norte",
    sub: "Quito Norte · @cabelloremyuio",
    dot: "#1D9E75",
    whatsapp: "https://wa.me/593996578736",
    maps: "https://maps.app.goo.gl/kkx4uDB1Zdq6Pa1PA",
    instagram: "https://www.instagram.com/cabelloremyuio/",
  },
  {
    nombre: "Remy Guayaquil",
    sub: "Guayaquil · @cabelloremygye",
    dot: "#378ADD",
    whatsapp: "https://wa.me/593969695541",
    maps: "https://maps.app.goo.gl/j6craN8mbjLvDKT76",
    instagram: "https://www.instagram.com/cabelloremygye/",
  },
];

export default function RemyPage() {
  return (
    <main className={`${styles.body} ${dmSans.variable}`}>
      <div className={styles.page}>
        <div className={styles.avatarWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.avatar} src="/remy/logo.jpg" alt="Remy Ecuador" />
        </div>
        <div className={styles.profileName}>Remy Ecuador</div>
        <div className={styles.profileBio}>
          100% natural hair extensions
          <br />
          Quito · Guayaquil
        </div>

        <a className={styles.ltBtn} href="https://wa.me/593996578736" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={`${styles.icon} ${styles.waColor}`} />
          <span className={styles.lbl}>WhatsApp</span>
          <span className={styles.arr}>›</span>
        </a>

        <a className={styles.ltBtn} href="https://www.instagram.com/cabelloremyuio" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className={`${styles.icon} ${styles.igColor}`} />
          <span className={styles.lbl}>Instagram — @cabelloremyuio</span>
          <span className={styles.arr}>›</span>
        </a>

        <a className={styles.ltBtn} href="https://www.tiktok.com/@remycabello" target="_blank" rel="noopener noreferrer">
          <TikTokIcon className={`${styles.icon} ${styles.tikColor}`} />
          <span className={styles.lbl}>TikTok — @remycabello</span>
          <span className={styles.arr}>›</span>
        </a>

        <div className={styles.secLbl}>Sucursales</div>

        {sucursales.map((s) => (
          <div className={styles.sucCard} key={s.nombre}>
            <div className={styles.sucHead}>
              <div className={styles.sucDot} style={{ background: s.dot }} />
              <div>
                <div className={styles.sucTitle}>{s.nombre}</div>
                <div className={styles.sucSub}>{s.sub}</div>
              </div>
            </div>
            <div className={styles.sucBtns}>
              <a className={styles.sucLink} href={s.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className={styles.waColor} />
                WhatsApp
              </a>
              <a className={styles.sucLink} href={s.maps} target="_blank" rel="noopener noreferrer">
                <MapsIcon className={styles.mapsColor} />
                Maps
              </a>
              <a className={styles.sucLink} href={s.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className={styles.igColor} />
                Instagram
              </a>
            </div>
          </div>
        ))}

        <div className={styles.footer}>
          Powered by InnovArtis · <a href="https://innovartis.lat">innovartis.lat</a>
        </div>
      </div>
    </main>
  );
}
