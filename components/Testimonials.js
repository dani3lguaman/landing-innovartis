const testimonials = [
  // Testimonios pendientes de recolectar con los clientes activos
  // Formato: { name: "Nombre", business: "Negocio", text: "Texto...", stars: 5 }
];

export default function Testimonials() {
  if (testimonials.length === 0) {
    return null; // Se activa cuando se agreguen testimonios reales
  }

  return (
    <section
      id="testimonios"
      className="py-[90px] px-[120px]"
      style={{ background: "linear-gradient(180deg, #0A1828 0%, #0D1F30 100%)" }}
    >
      <div className="mb-[52px]">
        <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Testimonios</p>
        <h2 className="text-white font-black text-[46px] tracking-[-1.5px] leading-tight">
          Lo que dicen nuestros clientes
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-[14px] p-7 flex flex-col gap-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex gap-0.5">
              {"⭐".repeat(t.stars)}
            </div>
            <p className="text-[15px] font-medium leading-[1.7]" style={{ color: "#CCCCCC" }}>
              "{t.text}"
            </p>
            <div>
              <p className="text-white font-black text-[14px]">{t.name}</p>
              <p className="text-[12px]" style={{ color: "#7A8FA0" }}>{t.business}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
