import { NAV_LINKS, SITE_URL } from "@/components/constants";
import { POSTS } from "@/components/blog/posts";

export default function sitemap() {
  const paginas = [...NAV_LINKS.map((l) => l.href), "/contacto"].map((href) => ({
    url: href === "/" ? SITE_URL : `${SITE_URL}${href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href === "/planes" || href === "/servicios" ? 0.9 : 0.7,
  }));

  const guias = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...paginas, ...guias];
}
