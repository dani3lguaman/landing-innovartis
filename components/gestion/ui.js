// Piezas comunes de las páginas internas de gestión (filtros, contadores, formatos).

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];

export const usd = (n) => "$" + Number(n || 0).toLocaleString("es-EC", { maximumFractionDigits: 0 });

// "2026-10-28" → "mié 28-oct"; si no es una fecha, devuelve el texto tal cual.
export function fechaCorta(iso, conDia = true) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  if (!m) return iso || "—";
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  return `${conDia ? DIAS[d.getUTCDay()] + " " : ""}${+m[3]}-${MESES[+m[2] - 1]}`;
}

// Días entre hoy (en el navegador) y una fecha ISO; null si no hay fecha.
export function diasHasta(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  if (!m) return null;
  const hoy = new Date();
  const h = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  return Math.round((Date.UTC(+m[1], +m[2] - 1, +m[3]) - h) / 86400000);
}

export function Chips({ titulo, opciones, valor, onChange }) {
  return (
    <div className="grid gap-2">
      <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-soft">{titulo}</p>
      <div className="flex flex-wrap gap-2">
        {opciones.map((o) => {
          const v = typeof o === "string" ? o : o.valor;
          const t = typeof o === "string" ? o : o.texto;
          const activo = v === valor;
          return (
            <button
              key={v}
              type="button"
              aria-pressed={activo}
              onClick={() => onChange(v)}
              className={`px-3.5 py-1.5 text-[13px] font-semibold border transition-colors ${
                activo ? "bg-navy text-white border-navy" : "bg-white text-navy border-line hover:border-navy"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const TONOS = {
  rojo: "border-l-4 border-l-[#d92d20]",
  naranja: "border-l-4 border-l-[#f79009]",
  ok: "border-l-4 border-l-[#17b26a]",
  neutro: "border-l-4 border-l-navy",
};

export function Tile({ etiqueta, valor, tono = "neutro", nota }) {
  return (
    <div className={`bg-white border border-line p-4 ${TONOS[tono] || TONOS.neutro}`}>
      <p className="text-[12px] text-ink-soft leading-tight">{etiqueta}</p>
      <p className="display-num text-navy text-[28px] leading-tight mt-1">{valor}</p>
      {nota && <p className="text-[11.5px] text-ink-soft mt-1">{nota}</p>}
    </div>
  );
}

export const COLOR_NIVEL = {
  rojo: "text-[#b42318] bg-[#fef3f2] border-[#fecdca]",
  naranja: "text-[#b54708] bg-[#fffaeb] border-[#fedf89]",
  ok: "text-[#067647] bg-[#ecfdf3] border-[#abefc6]",
};

export function Pastilla({ children, nivel = "ok" }) {
  return <span className={`inline-block px-2.5 py-0.5 text-[12px] font-semibold border ${COLOR_NIVEL[nivel] || COLOR_NIVEL.ok}`}>{children}</span>;
}

export function Cargando() {
  return <p className="text-[14px] text-ink-soft">Abriendo los datos…</p>;
}
