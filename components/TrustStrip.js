import { Icon } from "./services-data";

// Franja de garantías bajo la portada (como la de AQUABEC v2).
const ITEMS = [
  { icon: "chart", title: "Números reales", body: "Del Administrador de anuncios" },
  { icon: "chat", title: "Directo a tu WhatsApp", body: "Conversaciones, no solo likes" },
  { icon: "camera", title: "Grabamos en tu negocio", body: "Contenido 100 % hecho por personas" },
  { icon: "compass", title: "Contrato con RUC", body: "Las cuentas y el material son tuyos" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 md:mt-2">
        {ITEMS.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <span className="text-accent-deep shrink-0">
              <Icon name={it.icon} className="w-6 h-6" />
            </span>
            <span>
              <span className="block text-[14px] font-bold text-navy">{it.title}</span>
              <span className="block text-[12.5px] text-ink-soft">{it.body}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
