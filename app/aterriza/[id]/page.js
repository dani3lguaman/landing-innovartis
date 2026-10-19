import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import BriefDocumento from "@/components/BriefDocumento";
import { leerBrief } from "@/lib/brief/almacen";
import { SITE_URL } from "@/components/constants";

// Vista del brief por enlace privado (id aleatorio de 32 caracteres). No se indexa.
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Su plan de contenido",
  robots: { index: false, follow: false, nocache: true },
};

export default async function BriefPage({ params }) {
  const { id } = await params;
  const registro = await leerBrief(id);
  if (!registro) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  return (
    <Shell>
      <section className="bg-paper-soft">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-10 md:py-14">
          {registro.brief ? (
            <BriefDocumento
              id={registro.id}
              creado={registro.creado}
              negocio={registro.contacto.negocio}
              nombre={registro.contacto.nombre}
              brief={registro.brief}
              referencias={registro.referencias}
              enlace={`${base}/aterriza/${registro.id}`}
            />
          ) : (
            <div className="bg-white border border-line p-8 text-center">
              <p className="kicker mb-3">Sistema InnovArtis de planificación</p>
              <h1 className="font-heading text-navy text-[26px] mb-3">Su plan está en preparación</h1>
              <p className="text-[14.5px] text-ink-soft">Nuestro equipo se lo entrega en 24 horas hábiles.</p>
            </div>
          )}
        </div>
      </section>
    </Shell>
  );
}
