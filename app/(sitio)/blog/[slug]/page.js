import Link from "next/link";
import { notFound } from "next/navigation";
import AsesoriaCTA from "@/components/AsesoriaCTA";
import { POSTS, getPost, formatDate } from "@/components/blog/posts";
import { SITE_URL } from "@/components/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      locale: "es_EC",
      siteName: "InnovArtis",
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-EC",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: `${SITE_URL}/img/hero-produccion.webp`,
    author: { "@type": "Organization", name: "INNOVARTIS", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "INNOVARTIS",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-innovartis.jpg` },
    },
  };

  const { Body } = post;
  const otras = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-[760px] mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-6">
        <nav aria-label="Ruta" className="text-[13px] text-ink-soft mb-8">
          <Link href="/blog" className="link-underline hover:text-accent-deep">
            Blog
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{post.kicker}</span>
        </nav>
        <p className="kicker mb-4">Guía · {post.kicker}</p>
        <h1 className="font-heading text-navy text-[38px] md:text-[56px] leading-[1.08] tracking-[-0.01em] mb-5">
          {post.title}
        </h1>
        <p className="text-[13.5px] text-ink-soft mb-10 pb-6 border-b border-line">
          Por el equipo de InnovArtis · {formatDate(post.date)} · {post.readingMinutes} min de lectura
        </p>
        <div className="articulo">
          <Body />
        </div>
      </article>

      <AsesoriaCTA
        titulo={post.ctaTitulo}
        texto="Agenda tu asesoría gratis de 10 minutos por WhatsApp: revisamos tu negocio y te decimos qué haríamos en tu caso y cuánto costaría. Sin compromiso."
      />

      <section className="max-w-[760px] mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <p className="kicker mb-5">Sigue leyendo</p>
        <ul className="border-t border-line">
          {otras.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/blog/${p.slug}`}
                className="py-5 flex items-center justify-between gap-4 group"
              >
                <span className="font-heading text-navy text-[22px] leading-tight group-hover:text-accent-deep transition-colors">
                  {p.title}
                </span>
                <span className="text-accent-deep shrink-0" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
