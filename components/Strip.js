const items = [
  "🎥 Grabamos",
  "📲 Gestionamos",
  "📊 Generamos clientes reales",
  "🌐 Diseñamos tu web",
];

export default function Strip() {
  return (
    <div
      className="flex items-center justify-center gap-8"
      style={{ height: "52px", backgroundColor: "#0F2236" }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-8">
          {i > 0 && (
            <span className="text-white font-bold" style={{ opacity: 0.4 }}>
              ·
            </span>
          )}
          <span className="text-white font-extrabold text-[14px]">{item}</span>
        </div>
      ))}
    </div>
  );
}
