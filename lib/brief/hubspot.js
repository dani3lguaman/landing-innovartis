// Registro comercial en HubSpot (Forms API pública, igual que components/Discovery.js; no usa claves).
// Apagado por defecto para no ensuciar el CRM con pruebas: se activa con BRIEF_HUBSPOT=1.
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "48578869";
const FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID || "a2d20eaa-9ce8-4a72-8e1f-1f413035fbde";

export async function enviarAHubspot(registro, enlace, pagina) {
  if (process.env.BRIEF_HUBSPOT !== "1") return { enviado: false };
  const { contacto, respuestas } = registro;
  const mensaje = [
    `Origen: Aterriza (brief ${registro.estado})`,
    `Rubro: ${respuestas.rubro} · Objetivo: ${respuestas.objetivo}`,
    `Qué vende: ${respuestas.que_vende}`,
    `Brief: ${enlace}`,
  ].join("\n");
  try {
    const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: contacto.nombre },
          { name: "email", value: contacto.email },
          { name: "phone", value: contacto.whatsapp },
          { name: "company", value: contacto.negocio },
          { name: "message", value: mensaje },
        ],
        context: { pageUri: pagina, pageName: "InnovArtis — Aterrizamos tus ideas" },
      }),
    });
    if (!res.ok) throw new Error(`HubSpot respondió ${res.status}`);
    return { enviado: true };
  } catch (e) {
    console.error("[aterriza] HubSpot:", e?.message);
    return { enviado: false };
  }
}
