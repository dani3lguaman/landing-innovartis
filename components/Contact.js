"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    servicio: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full h-11 rounded-[8px] px-3.5 text-[13px] focus:outline-none transition-colors";
  const inputStyle = {
    backgroundColor: "#F9FAFB",
    border: "1px solid #E2E8F0",
    color: "#0F2236",
  };

  return (
    <section
      id="contacto"
      className="py-14 md:py-[90px] px-5 md:px-[120px] flex flex-col md:flex-row gap-10 md:gap-[80px]"
      style={{ backgroundColor: "#F4F7FA" }}
    >
      {/* Left */}
      <div className="flex flex-col gap-6 md:gap-8 flex-1">
        <div>
          <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">Contáctanos</p>
          <h2 className="font-black text-[28px] md:text-[40px] leading-[1.1] tracking-[-1px] mb-4" style={{ color: "#0F2236" }}>
            ¿Listo para crecer de verdad?
          </h2>
          <p className="text-[15px] md:text-[16px] font-medium leading-[1.7] md:max-w-[400px]" style={{ color: "#4A5568" }}>
            Analizamos tu negocio sin costo y te decimos exactamente qué necesitas para generar más clientes.
          </p>
        </div>

        <a
          href="https://wa.me/593998620536"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-white text-[15px] font-black px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity self-start"
          style={{ backgroundColor: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}
        >
          <span className="text-[18px]">💬</span>
          Hablar por WhatsApp
        </a>

        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium" style={{ color: "#4A5568" }}>📞 099 862 0536</p>
          <p className="text-[14px] font-medium" style={{ color: "#4A5568" }}>✉️ innuevate@gmail.com</p>
          <p className="text-[14px] font-medium" style={{ color: "#4A5568" }}>📍 Quito, Ecuador</p>
        </div>
      </div>

      {/* Right: Form */}
      <div
        className="w-full md:w-[520px] md:flex-shrink-0 rounded-[16px] flex flex-col gap-5"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          padding: "28px 24px",
        }}
      >
        <div>
          <h3 className="font-black text-[18px] md:text-[20px] mb-1" style={{ color: "#0F2236" }}>Envíanos un mensaje</h3>
          <p className="text-[13px] font-medium" style={{ color: "#7A8FA0" }}>
            Te respondemos en menos de 24 horas hábiles.
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <span className="text-[48px]">✅</span>
            <p className="font-bold text-[18px] text-center" style={{ color: "#0F2236" }}>¡Mensaje enviado!</p>
            <p className="text-[14px] text-center" style={{ color: "#4A5568" }}>
              Te contactamos en menos de 24 horas hábiles.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-[14px]">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold" style={{ color: "#4A5568" }}>Nombre</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={inputClass} style={inputStyle} required />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold" style={{ color: "#4A5568" }}>Teléfono</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+593 000 000 000" className={inputClass} style={inputStyle} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#4A5568" }}>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@empresa.com" className={inputClass} style={inputStyle} required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#4A5568" }}>¿Cómo podemos ayudarte?</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu negocio y tus objetivos..."
                rows={4}
                className="w-full rounded-[8px] p-3.5 text-[13px] resize-none focus:outline-none transition-colors"
                style={{ ...inputStyle, color: "#0F2236" }}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#4A5568" }}>Servicio de interés</label>
              <div className="relative">
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full h-11 rounded-[8px] px-3.5 text-[13px] appearance-none focus:outline-none"
                  style={{ ...inputStyle, color: form.servicio ? "#0F2236" : "#A0AEC0" }}
                >
                  <option value="" disabled>Meta Ads / TikTok Ads / Web / Todo</option>
                  <option value="meta">Meta Ads</option>
                  <option value="tiktok">TikTok Ads</option>
                  <option value="web">Diseño Web</option>
                  <option value="todo">Todo incluido</option>
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[13px]" style={{ color: "#7A8FA0" }}>▾</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-brand text-white font-black text-[15px] h-[50px] rounded-[10px] hover:opacity-90 transition-opacity cursor-pointer"
            >
              Enviar mensaje →
            </button>

            <p className="text-[11px] text-center" style={{ color: "#7A8FA0" }}>
              Al enviar aceptas nuestra política de privacidad. No hacemos spam.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
