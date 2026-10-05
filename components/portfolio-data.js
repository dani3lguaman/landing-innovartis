// Portafolio: SOLO piezas reales producidas por InnovArtis.
// Cada métrica lleva la fecha en que se leyó en la red del cliente (nunca inventar).
// Vetados en la web: Tokilla, Surty, Óptica, Aquabec.
// type: "img" | "video" · metric opcional: { value, label, date }

export const RUBROS = ["Todos", "Belleza", "Limpieza", "Mascotas", "Industria", "Gastronomía"];

export const PORTFOLIO = [
  {
    src: "/portafolio/pachy/post-1.webp",
    type: "img",
    client: "Pachy Limpieza Profesional",
    rubro: "Limpieza",
    piece: "Post · limpieza industrial",
    metric: { value: 3548, label: "conversaciones por WhatsApp en 12 meses, desde $0,44 c/u" },
  },
  {
    src: "/portafolio/pachy/post-2.webp",
    type: "img",
    client: "Pachy Limpieza Profesional",
    rubro: "Limpieza",
    piece: "Post · antes y después",
  },
  {
    src: "/portafolio/pachy/carrusel-servicios.webp",
    type: "img",
    client: "Pachy Limpieza Profesional",
    rubro: "Limpieza",
    piece: "Carrusel · catálogo de servicios",
  },
  {
    src: "/portafolio/pachy/antes-despues.webp",
    type: "img",
    client: "Pachy Limpieza Profesional",
    rubro: "Limpieza",
    piece: "Antes y después",
  },
  {
    src: "/portafolio/pachy/clientes-felices.webp",
    type: "img",
    client: "Pachy Limpieza Profesional",
    rubro: "Limpieza",
    piece: "Carrusel · clientes felices",
  },
  {
    src: "/portafolio/remy/arte-extensiones-cabello-transforma.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Arte para Instagram",
    metric: { value: 9512, label: "conversaciones por WhatsApp en 12 meses, desde $0,32 c/u" },
  },
  {
    src: "/portafolio/remy/carrusel-3razones-portada.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Carrusel · portada",
    metric: { value: 4803, label: "conversaciones en Guayaquil a $0,32 c/u" },
  },
  {
    src: "/portafolio/remy/carrusel-3razones-01-mas-largo.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Carrusel · lámina 1",
  },
  {
    src: "/portafolio/remy/carrusel-3razones-02-mas-volumen.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Carrusel · lámina 2",
  },
  {
    src: "/portafolio/remy/carrusel-3razones-03-cabello-sano.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Carrusel · lámina 3",
  },
  {
    src: "/portafolio/remy/cliente-antes-extensiones.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Antes",
  },
  {
    src: "/portafolio/remy/cliente-despues-extensiones.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Después",
  },
  {
    src: "/portafolio/remy/arte-pestanas-remy-sur.jpg",
    type: "img",
    client: "Cabello Remy EC",
    rubro: "Belleza",
    piece: "Arte · local del sur",
  },
  {
    src: "/img/caso-metropolis.webp",
    type: "img",
    client: "Clínica Veterinaria Metrópolis",
    rubro: "Mascotas",
    piece: "Redes desde cero",
    metric: { value: 26, label: "likes · 2 comentarios respondidos" },
  },
  {
    src: "/img/caso-idefix.webp",
    type: "img",
    client: "Idefix · Plastics Ide",
    rubro: "Industria",
    piece: "Marca y reels de producto",
    metric: { value: 204, label: "likes en un reel de producto" },
  },
  {
    src: "/img/caso-abbysal.webp",
    type: "img",
    client: "Abbysal Tentacle Cravings",
    rubro: "Gastronomía",
    piece: "Cobertura de lanzamiento",
    metric: { value: 74, label: "likes en el reel de lanzamiento" },
  },
];
