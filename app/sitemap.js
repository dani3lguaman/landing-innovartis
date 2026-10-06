import { NAV, SITE_URL } from "@/components/constants";
import { POSTS } from "@/components/blog/posts";

// Todas las páginas del menú + cada guía del blog.
export default function sitemap() {
  const pages = NAV.map(({ href }) => ({
    url: `${SITE_URL}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
  const posts = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
