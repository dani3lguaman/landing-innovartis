import Reveal from "./Reveal";

const services = [
  {
    name: "Campañas publicitarias",
    body: "Gestión de pauta en Meta Ads, Google Ads y TikTok Ads, dirigida a resultados medibles.",
  },
  {
    name: "Google Maps para tu negocio",
    body: "Que te encuentren cuando buscan lo que vendes cerca: ficha creada, verificada y optimizada.",
  },
  {
    name: "Producción de contenido",
    body: "Videos, artes y carruseles 100% humanos — un medio, nunca el fin.",
  },
  {
    name: "CRM HubSpot",
    body: "Implementación y personalización para no perder ni un lead — desde $200 + $50/mes de gestión.",
  },
  {
    name: "Automatización y agentes IA",
    body: "Agentes de WhatsApp que responden y ordenan contactos sin que se te escape nadie.",
  },
  {
    name: "Diseño y desarrollo web",
    body: "Sitios que convierten visitas en clientes — página web $150 con dominio incluido, tienda online desde $300.",
  },
  {
    name: "Asesoría estratégica",
    body: "Acompañamiento comercial continuo para que el marketing tenga sentido de negocio.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="max-w-[1150px] mx-auto px-6 py-20">
      <Reveal>
        <p className="kicker mb-4">Servicios</p>
        <h2 className="font-heading text-navy text-[36px] md:text-[44px] leading-[1.12] mb-10 max-w-[640px]">
          Mucho más que piezas gráficas.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 border-t border-l border-line">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={(i % 3) * 100}>
            <div className="border-b border-r border-line p-8 h-full hover:bg-white transition-colors">
              <h3 className="font-heading text-navy text-[22px] mb-2.5">{s.name}</h3>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
