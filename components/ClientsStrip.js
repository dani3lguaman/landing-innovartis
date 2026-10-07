// Negocios que han confiado en nosotros (franja de "marcas" de AQUABEC v2).
// Vetados en la web: Tokilla, Surty, Óptica, Aquabec.
export const CLIENTS = [
  "Remy EC", "Pachy Limpieza", "InyecPro", "Damavid Aqua", "Metallum", "Controlfrío",
  "SERTEC Generación", "Enquality", "KYA Ecuador", "FisioClub Quito", "Deco Mundo",
  "Auto Spa Ecuador", "Climbing Tours", "Grúas Joel Trans", "Colores y Sabores", "Serenité", "Solugraf",
  "MedCentral", "Vet. Metrópolis", "Idefix", "Abbysal", "Contaservis", "Hampi Andina",
  "Inyecto Bien", "Las Humitas de la Loma", "Emily Garcés · Ikigai",
];

// 7-oct-2026: de lista plana a cinta en movimiento (dos filas en sentidos opuestos).
// Se detiene con el cursor encima y queda quieta con "movimiento reducido".
const MITAD = Math.ceil(CLIENTS.length / 2);
const FILAS = [CLIENTS.slice(0, MITAD), CLIENTS.slice(MITAD)];

export default function ClientsStrip() {
  return (
    <section className="py-12 overflow-hidden" aria-label="Negocios que confían en nosotros">
      <p className="text-center text-[12px] font-bold uppercase tracking-[0.14em] text-ink-soft mb-6 px-6">
        Negocios que confían en nosotros
      </p>
      <div className="marquee-wrap space-y-3">
        {FILAS.map((fila, k) => (
          <div key={k} className="marquee">
            <ul className={`marquee-track ${k === 1 ? "marquee-track--rev" : ""}`}>
              {[...fila, ...fila].map((c, i) => (
                <li
                  key={c + i}
                  aria-hidden={i >= fila.length ? "true" : undefined}
                  className="marquee-chip"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
