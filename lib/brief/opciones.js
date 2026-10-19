// Preguntas de "Aterrizamos tus ideas". Fuente única: el formulario (cliente) las pinta
// y la API (servidor) valida que cada clic sea una de estas opciones exactas.
// Importar solo con rutas relativas: este archivo también lo usan las pruebas con `node --test`.

export const PREGUNTAS = [
  {
    id: "rubro",
    pregunta: "¿A qué se dedica tu negocio?",
    ayuda: "Para mostrarte trabajos reales de negocios como el tuyo.",
    tipo: "uno",
    obligatoria: true,
    opciones: [
      "Belleza y estética",
      "Salud",
      "Gastronomía",
      "Alimentos y bebidas",
      "Limpieza y servicios",
      "Industria y construcción",
      "Inmobiliario y lotes",
      "Autos y transporte",
      "Decoración y hogar",
      "Educación",
      "Servicios profesionales",
      "Tecnología",
      "Comercio",
      "Otro",
    ],
  },
  {
    id: "objetivo",
    pregunta: "¿Qué quieres lograr con este contenido?",
    ayuda: "Elige lo que más te importa este mes.",
    tipo: "uno",
    obligatoria: true,
    opciones: [
      "Que me escriban para vender un producto o servicio",
      "Llenar mi agenda de citas",
      "Lanzar algo nuevo",
      "Una promo o fecha especial",
      "Que mi marca se vea más profesional",
    ],
  },
  {
    id: "que_vende",
    pregunta: "En una frase: ¿qué quieres vender o mostrar?",
    ayuda: "Mientras más concreto, mejor sale tu plan.",
    tipo: "texto",
    obligatoria: true,
    max: 200,
    ejemplo: "Extensiones de cabello natural para novias de diciembre",
  },
  {
    id: "publico",
    pregunta: "¿Quién te compra?",
    ayuda: "Puedes elegir hasta 2.",
    tipo: "varios",
    maxElegir: 2,
    obligatoria: true,
    opciones: [
      "Jóvenes 18–30",
      "Adultos 30–50",
      "Mayores de 50",
      "Mamás y familias",
      "Empresas y negocios",
      "Profesionales",
    ],
  },
  {
    id: "tono",
    pregunta: "¿Cómo quieres que suene tu marca?",
    ayuda: "La forma en que le hablamos a tu cliente.",
    tipo: "uno",
    obligatoria: true,
    opciones: [
      "Cercana y cálida",
      "Seria y profesional",
      "Divertida",
      "Elegante / premium",
      "Técnica, de experto",
    ],
  },
  {
    id: "formato",
    pregunta: "¿Qué te imaginas publicar?",
    ayuda: "Puedes elegir hasta 3.",
    tipo: "varios",
    maxElegir: 3,
    obligatoria: true,
    opciones: ["Reels / videos cortos", "Posts", "Carruseles", "No sé, recomiéndenme"],
  },
  {
    id: "material",
    pregunta: "¿Con qué material contamos?",
    ayuda: "Así armamos un cronograma realista.",
    tipo: "uno",
    obligatoria: true,
    opciones: [
      "Tengo fotos y videos",
      "Puedo grabar con el celular",
      "Quiero que ustedes vayan a grabar",
      "No tengo nada todavía",
    ],
  },
  {
    id: "extra",
    pregunta: "¿Algo que debamos saber?",
    ayuda: "Opcional: oferta, precio, fecha, lo que NO quieres, por qué te eligen.",
    tipo: "texto",
    obligatoria: false,
    max: 300,
    ejemplo: "Tenemos 20 % de descuento hasta el 15 de diciembre. No queremos mostrar precios en el video.",
  },
];

export const CONTACTO = [
  { k: "nombre", label: "Tu nombre", type: "text", max: 80, obligatorio: true, autoComplete: "name" },
  { k: "negocio", label: "Nombre de tu negocio", type: "text", max: 100, obligatorio: true, autoComplete: "organization" },
  { k: "whatsapp", label: "Tu WhatsApp", type: "tel", max: 20, obligatorio: true, autoComplete: "tel" },
  { k: "email", label: "Tu correo", type: "email", max: 120, obligatorio: true, autoComplete: "email" },
];

export const AVISO_PRIVACIDAD =
  "Acepto que InnovArtis use estos datos solo para preparar mi plan de contenido y contactarme sobre él, " +
  "conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador. Solo los ve el equipo de InnovArtis, " +
  "no se venden ni se comparten con terceros, y puedo pedir que los borren escribiendo a innuevate@gmail.com.";
