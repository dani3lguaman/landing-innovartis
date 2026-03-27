"use client";

import { useState } from "react";

export default function Suggestions() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    esCliente: "",
    sugerencia: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar al correo innuevate@gmail.com
    const subject = encodeURIComponent("Buzón de Sugerencias — InnovArtis");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.correo || "No indicado"}\n¿Es cliente?: ${form.esCliente}\n\nSugerencia:\n${form.sugerencia}`
    );
    window.location.href = `mailto:innuevate@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full h-11 rounded-[8px] px-3.5 text-[13px] text-white focus:outline-none transition-colors";
  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <section
      id="sugerencias"
      className="py-[90px] px-[120px]"
      style={{ backgroundColor: "#0A1828" }}
    >
      <div className="max-w-[640px] mx-auto">
        <div className="mb-10 text-center">
          <p className="text-brand text-[11px] font-bold tracking-[3px] mb-4 uppercase">
            Buzón de Sugerencias
          </p>
          <h2 className="text-white font-black text-[36px] tracking-[-1px] leading-tight mb-3">
            ¿Tiene alguna sugerencia o comentario?
          </h2>
          <p className="text-[16px] font-medium leading-[1.7]" style={{ color: "#7A8FA0" }}>
            Su opinión nos ayuda a mejorar.
          </p>
        </div>

        {sent ? (
          <div
            className="rounded-[16px] flex flex-col items-center justify-center py-16 gap-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-[48px]">✅</span>
            <p className="text-white font-bold text-[18px]">¡Gracias por su sugerencia!</p>
            <p className="text-[14px]" style={{ color: "#7A8FA0" }}>
              La revisamos cada lunes.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-[16px] flex flex-col gap-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "36px 32px",
            }}
          >
            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#AAAAAA" }}>
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Su nombre"
                className={inputClass}
                style={inputStyle}
                required
              />
            </div>

            {/* Correo */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#AAAAAA" }}>
                Correo electrónico{" "}
                <span style={{ color: "#555555" }}>(opcional)</span>
              </label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="su@correo.com"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            {/* ¿Es cliente? */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#AAAAAA" }}>
                ¿Es cliente actual de InnovArtis?
              </label>
              <div className="relative">
                <select
                  name="esCliente"
                  value={form.esCliente}
                  onChange={handleChange}
                  className="w-full h-11 rounded-[8px] px-3.5 text-[13px] appearance-none focus:outline-none"
                  style={{ ...inputStyle, color: form.esCliente ? "#CCCCCC" : "#555555" }}
                  required
                >
                  <option value="" disabled>
                    Seleccionar...
                  </option>
                  <option value="Sí">Sí, soy cliente</option>
                  <option value="No">No, soy visitante</option>
                </select>
                <span
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[13px]"
                  style={{ color: "#555555" }}
                >
                  ▾
                </span>
              </div>
            </div>

            {/* Sugerencia */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: "#AAAAAA" }}>
                Sugerencia o comentario
              </label>
              <textarea
                name="sugerencia"
                value={form.sugerencia}
                onChange={handleChange}
                placeholder="Escriba aquí su sugerencia..."
                rows={5}
                className="w-full rounded-[8px] p-3.5 text-[13px] text-white resize-none focus:outline-none transition-colors"
                style={inputStyle}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-brand text-white font-black text-[15px] h-[50px] rounded-[10px] hover:opacity-90 transition-opacity cursor-pointer"
            >
              Enviar sugerencia →
            </button>

            <p className="text-[11px] text-center" style={{ color: "#444444" }}>
              Revisamos el buzón cada lunes.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
