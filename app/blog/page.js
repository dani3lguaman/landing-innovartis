import Link from "next/link";
import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import AsesoriaCTA from "@/components/AsesoriaCTA";
import { POSTS, formatDate } from "@/components/blog/posts";

export const metadata = {
  title: "Blog: guías de marketing para negocios en Ecuador",
  description:
    "Guías claras sobre cuánto cuesta la publicidad en Facebook, cuánto cuesta una página web en Quito y cómo conseguir clientes por WhatsApp.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <Shell>
      <PageHero img="/img/hero-produccion.webp" kicker="Blog" title="Guías para conseguir más clientes">
        <p>Lo que nos preguntan en cada primera llamada, explicado sin humo y con números reales cuando los tenemos.</p>
      </PageHero>
      <section className="max-w-[1150px] mx-auto px-4 md:px-6 pt-14 pb-16 md:pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              <article className="group h-full border border-line bg-white hover:border-accent transition-colors">
                <Link href={`/blog/${p.slug}`} className="h-full p-7 flex flex-col">
                  <p className="kicker !text-[10.5px] mb-3">{p.kicker}</p>
                  <h2 className="font-heading text-navy text-[26px] leading-[1.15] mb-3">
                    {p.title}
                  </h2>
                  <p className="text-[14.5px] leading-[1.7] text-ink-soft flex-1">{p.description}</p>
                  <p className="mt-6 pt-4 border-t border-line text-[12.5px] text-ink-soft flex justify-between gap-3">
                    <span>
                      {formatDate(p.date)} · {p.readingMinutes} min
                    </span>
                    <span className="text-accent-deep">Leer guía →</span>
                  </p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <AsesoriaCTA />
    </Shell>
  );
}
