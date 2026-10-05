// Negocios que han confiado en nosotros (franja de "marcas" de AQUABEC v2).
// Vetados en la web: Tokilla, Surty, Óptica, Aquabec.
export const CLIENTS = [
  "Remy EC", "Pachy Limpieza", "InyecPro", "Damavid Aqua", "Metallum", "Controlfrío",
  "SERTEC Generación", "Enquality", "KYA Ecuador", "FisioClub Quito", "Deco Mundo",
  "Auto Spa Ecuador", "Climbing Tours", "Grúas Joel Trans", "Colores y Sabores", "Serenité", "Solugraf",
  "MedCentral", "Vet. Metrópolis", "Idefix", "Abbysal",
];

export default function ClientsStrip() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="card px-6 py-6 md:flex items-center gap-8">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-soft shrink-0 mb-4 md:mb-0">
          Negocios que confían en nosotros
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
          {CLIENTS.map((c) => (
            <li key={c} className="text-[14px] font-bold text-navy/80 whitespace-nowrap">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
