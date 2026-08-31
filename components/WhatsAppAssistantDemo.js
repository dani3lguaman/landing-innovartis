"use client";

import { useEffect, useRef, useState } from "react";
import { WA_NUMBER } from "./constants";

const SCRIPT = {
  start: {
    bot: [
      "¡Hola! 👋 Soy el asistente automático de WhatsApp que InnovArtis instala para sus clientes.",
      "Atiendo el WhatsApp de un negocio 24/7: respondo precios, agendo citas y registro cada contacto en el CRM. Pruébame 👇",
    ],
    options: [
      { label: "¿Cuánto cuesta el servicio?", next: "precio" },
      { label: "Quiero agendar una cita", next: "cita" },
      { label: "¿Dónde están ubicados?", next: "ubicacion" },
    ],
  },
  precio: {
    bot: [
      "¡Claro! Nuestros tratamientos van desde $25. Si me cuentas qué necesitas, te doy el precio exacto y te reservo un cupo. 💬",
      "Mientras conversamos, ya te registré en el sistema del negocio — nadie tiene que copiar tu número a mano.",
    ],
    options: [
      { label: "Quiero agendar una cita", next: "cita" },
      { label: "Entendido, ¿y esto cómo me ayuda?", next: "cierre" },
    ],
  },
  cita: {
    bot: [
      "Perfecto 📅 Tengo disponibilidad mañana a las 10:00 o a las 15:30. ¿Cuál prefieres?",
      "Al confirmar, la cita queda agendada y el dueño del negocio recibe la notificación — sin levantar un dedo.",
    ],
    options: [
      { label: "Mañana a las 10:00", next: "confirmada" },
      { label: "¿Y esto cómo me ayuda a mí?", next: "cierre" },
    ],
  },
  ubicacion: {
    bot: [
      "Estamos en el norte de Quito 📍 Te comparto la ubicación exacta y el horario de atención.",
      "Cada pregunta que respondo es un cliente que no se pierde por demora en contestar.",
    ],
    options: [
      { label: "Quiero agendar una cita", next: "cita" },
      { label: "¿Cómo funciona para mi negocio?", next: "cierre" },
    ],
  },
  confirmada: {
    bot: [
      "✅ ¡Listo! Cita confirmada para mañana a las 10:00. Te llegará un recordatorio automático.",
      "Así de simple: el cliente atendido al instante y el negocio con su agenda llena.",
    ],
    options: [{ label: "¿Cómo funciona para mi negocio?", next: "cierre" }],
  },
  cierre: {
    bot: [
      "Mientras tú duermes, yo atiendo. Mientras trabajas, yo agendo. Y cada contacto queda ordenado en tu CRM. 🤖",
      "InnovArtis me configura a la medida de tu negocio: tus precios, tus horarios, tu tono. ¿Quieres uno así?",
    ],
    options: [{ label: "Quiero un asistente de WhatsApp para mi negocio →", href: true }],
  },
};

export default function WhatsAppAssistantDemo() {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const scrollRef = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, options]);

  const playNode = (key) => {
    const node = SCRIPT[key];
    setOptions([]);
    let delay = 350;
    node.bot.forEach((text, i) => {
      timeouts.current.push(setTimeout(() => setTyping(true), delay));
      delay += 900 + text.length * 8;
      timeouts.current.push(
        setTimeout(() => {
          setTyping(false);
          setMessages((m) => [...m, { from: "bot", text }]);
        }, delay)
      );
      delay += 350;
    });
    timeouts.current.push(setTimeout(() => setOptions(node.options), delay));
  };

  const start = () => {
    setStarted(true);
    playNode("start");
  };

  const choose = (opt) => {
    if (opt.href) return;
    setMessages((m) => [...m, { from: "user", text: opt.label }]);
    playNode(opt.next);
  };

  return (
    <div className="bg-[#e7e0d6] border border-white/20 max-w-[430px] mx-auto w-full">
      {/* Barra superior estilo chat */}
      <div className="bg-navy-darker px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-[15px]">
          🤖
        </div>
        <div>
          <p className="text-white text-[14px] leading-tight">Asistente WhatsApp · InnovArtis</p>
          <p className="text-[11.5px] leading-tight text-[#8fd3a7]">
            {typing ? "escribiendo…" : "en línea"}
          </p>
        </div>
      </div>

      {/* Mensajes */}
      <div ref={scrollRef} className="h-[340px] overflow-y-auto p-4 space-y-2.5">
        {!started && (
          <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-[14px] text-ink-soft px-6">
              Conversa con el asistente como si fueras cliente de un negocio.
            </p>
            <button onClick={start} className="btn-solid">
              Iniciar la demo
            </button>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3.5 py-2.5 text-[13.5px] leading-[1.6] shadow-sm ${
                m.from === "user" ? "bg-[#d7f0c8] text-ink" : "bg-white text-ink"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 flex gap-1.5 items-center shadow-sm">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        )}
      </div>

      {/* Opciones */}
      {options.length > 0 && (
        <div className="p-3 border-t border-[#d5ccbe] bg-[#efe9df] flex flex-col gap-2">
          {options.map((opt) =>
            opt.href ? (
              <a
                key={opt.label}
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  "Hola InnovArtis, probé la demo del asistente de WhatsApp en su web y quiero uno para mi negocio."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid text-center"
              >
                {opt.label}
              </a>
            ) : (
              <button
                key={opt.label}
                onClick={() => choose(opt)}
                className="text-left text-[13.5px] px-3.5 py-2.5 bg-white border border-[#d5ccbe] text-accent-deep hover:border-accent transition-colors"
              >
                {opt.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
