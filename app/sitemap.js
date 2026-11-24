import { NAV, SITE_URL } from "@/components/constants";
import { POSTS } from "@/components/blog/posts";

// Todas las páginas del menú + privacidad + cada guía del blog.
// Nunca /gestion, /aterriza, /brief-mes ni /remy (internas, sin índice o de un cliente).
const EXTRA = [{ href: "/privacidad" }];
const PRIVADAS = ["/gestion", "/aterriza", "/brief-mes", "/remy", "/api"];

export default function sitemap() {
  const rutas = [...NAV, ...EXTRA].filter(({ href }) => !PRIVADAS.some((p) => href.startsWith(p)));
  const pages = rutas.map(({ href }) => ({
    url: `${SITE_URL}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href === "/privacidad" ? 0.2 : 0.8,
  }));
  const posts = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
