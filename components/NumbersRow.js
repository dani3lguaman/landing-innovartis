import Counter from "./Counter";

// Cifras grandes con enlace (fila de números de AQUABEC v2). Todas de Ads Manager, 5-oct-2026.
const NUMS = [
  { value: 9512, label: "conversaciones por WhatsApp", who: "Remy EC · 12 meses" },
  { value: 2508, label: "conversaciones por WhatsApp", who: "Pachy · ene–oct 2026" },
  { value: 1729, label: "conversaciones por WhatsApp", who: "InyecPro · may–oct 2026" },
  { value: 452, label: "clientes potenciales", who: "Metallum · 12 meses" },
];

export default function NumbersRow() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-4">
      <div className="card grid grid-cols-2 lg:grid-cols-4">
        {NUMS.map((n, i) => (
          <a
            key={n.who}
            href="/resultados"
            className={`p-6 hover:bg-paper-soft transition-colors ${i % 2 === 0 ? "border-r border-line" : ""} ${
              i < 2 ? "border-b lg:border-b-0 border-line" : ""
            } ${i === 1 ? "lg:border-r" : ""}`}
          >
            <p className="display-num text-[34px] text-navy leading-none mb-2">
              <Counter value={n.value} />
            </p>
            <p className="text-[13.5px] font-semibold text-ink">{n.label}</p>
            <p className="text-[12.5px] text-accent-deep mt-1">{n.who} →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
