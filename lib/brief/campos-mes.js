// Preguntas del brief del mes (compartidas por el formulario y la validación).
export const CAMPOS_MES = [
  { id: "promocion", pregunta: "¿Qué quiere vender o promocionar este mes?", ayuda: "Producto o servicio principal, con el precio si desea publicarlo.", tipo: "largo", requerido: true },
  { id: "fechas", pregunta: "¿Hay promociones o fechas importantes este mes?", ayuda: "Descuentos, eventos, temporada. Si no hay, déjelo en blanco.", tipo: "largo" },
  { id: "objetivo", pregunta: "¿Qué quiere que haga la gente al ver sus publicaciones?", tipo: "opciones", requerido: true, opciones: ["Escribir por WhatsApp", "Visitar el local", "Llamar", "Comprar en la web"] },
  { id: "gusto", pregunta: "¿Qué le gustó del mes pasado?", ayuda: "Una pieza, un estilo o un tema que quiera repetir.", tipo: "largo" },
  { id: "evitar", pregunta: "¿Qué no quiere que se repita?", tipo: "largo" },
  { id: "cambios", pregunta: "¿Cambió algo de su negocio?", ayuda: "Precios, horarios, teléfono, dirección o servicios nuevos.", tipo: "largo" },
  { id: "material", pregunta: "¿Cómo haremos el contenido de este mes?", tipo: "opciones", requerido: true, opciones: ["Tengo fotos o videos y los envío por WhatsApp", "Necesito grabación", "Ambos"] },
  { id: "grabacion", pregunta: "Si necesita grabación, ¿qué día, hora y lugar le convienen?", ayuda: "Si su plan la incluye, le confirmamos la fecha por WhatsApp.", tipo: "corto" },
  { id: "reunion", pregunta: "¿Desea una reunión con nosotros?", tipo: "opciones", requerido: true, opciones: ["No hace falta, con este brief es suficiente", "Sí, quisiera una reunión"] },
];

// Solo para clientes nuevos: la guía mínima de marca de plantillas/briefs/plantilla-brief-cliente.md.
export const CAMPOS_NUEVO = [
  { id: "publico", pregunta: "¿Quién es su cliente ideal?", ayuda: "Edad, zona, qué busca, por qué le compra.", tipo: "largo", requerido: true },
  { id: "diferencia", pregunta: "¿Por qué deberían elegirlo a usted y no a la competencia?", tipo: "largo", requerido: true },
  { id: "tono", pregunta: "¿Cómo quiere que suene su marca?", tipo: "opciones", opciones: ["Formal", "Cercano", "Técnico", "Divertido"] },
  { id: "colores", pregunta: "¿Cuáles son los colores de su marca?", ayuda: "Si tiene logo, envíelo por WhatsApp.", tipo: "corto" },
  { id: "lineas_rojas", pregunta: "¿Qué nunca debe decirse o mostrarse de su marca?", tipo: "largo" },
];
