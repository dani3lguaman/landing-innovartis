const items = [
  "🎥 Grabamos",
  "📲 Gestionamos",
  "📊 Generamos clientes reales",
  "🌐 Diseñamos tu web",
];

export default function Strip() {
  return (
    <div
      className="flex items-center justify-center gap-4 md:gap-8 px-4 overflow-x-auto"
      style={{ height: "52px", backgroundColor: "#0F2236", whiteSpace: "nowrap" }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
          {i > 0 && (
            <span className="text-white font-bold" style={{ opacity: 0.4 }}>·</span>
          )}
          <span className="text-white font-extrabold text-[12px] md:text-[14px]">{item}</span>
        </div>
      ))}
    </div>
  );
}
