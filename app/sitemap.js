const PAGES = ["", "/servicios", "/google-ads", "/webs", "/resultados", "/portafolio", "/planes", "/nosotros", "/contacto"];

export default function sitemap() {
  return PAGES.map((p) => ({
    url: `https://www.innovartis.lat${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
