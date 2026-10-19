// Brief simulado para desarrollo y pruebas (sin clave de Anthropic). Usa las respuestas del
// cliente para que la página se vea realista, pero NUNCA se usa en producción (ver modoSimulado).

export function briefSimulado(r, piezas) {
  const vende = r.que_vende || "su producto estrella";
  const publico = (r.publico || []).join(" y ") || "sus clientes";
  const graba = r.material === "Quiere que ustedes vayan a grabar" || r.material === "Quiero que ustedes vayan a grabar";
  const formatos = (r.formato || []).includes("Carruseles") ? ["Reel", "Carrusel", "Reel"] : ["Reel", "Post", "Reel"];
  const idea = (formato, titulo, gancho, guion) => ({
    formato,
    titulo,
    gancho,
    beneficios: ["Lo resuelve sin complicarse", "Atención directa por WhatsApp", "Calidad que se ve en el resultado"],
    por_que_elegirnos: "Somos el negocio que le muestra el proceso completo, sin letra pequeña.",
    llamado: "Escríbanos por WhatsApp y pida su cotización.",
    duracion_segundos: formato === "Reel" ? 30 : 15,
    guion,
    que_se_necesita: graba ? "Visita de grabación de 1 hora en el local." : "5 fotos o videos verticales del producto con buena luz.",
    de_donde_sale: "Fuente 1: lo que el cliente pregunta antes de comprar.",
  });
  return {
    objetivo: `Que ${publico} conozcan ${vende} y escriban por WhatsApp para pedirlo.`,
    llamado_del_mes: "Escríbanos por WhatsApp y le respondemos el mismo día.",
    publico: `${publico} que ya buscan una solución como ${vende}. Les preocupa el precio y la confianza; ven el contenido en Instagram y Facebook desde el celular.`,
    tono: {
      palabras: [r.tono || "Cercana", "clara", "confiable"],
      asi_si: "“Le mostramos cómo queda, paso a paso, antes de que decida.”",
      asi_no: "“¡¡¡La mejor oferta del universo, no se lo pierda!!!”",
    },
    mensaje_clave: `${vende}: lo ve, lo entiende y lo pide por WhatsApp.`,
    ideas: [
      idea(formatos[0], "El antes y después", "¿Así se ve hoy? Mire cómo queda en 10 segundos.", "0–3 s: toma del antes con la pregunta en pantalla. 3–20 s: tres tomas del proceso, un beneficio por toma. 20–27 s: por qué elegirnos. 27–30 s: llamado a WhatsApp."),
      idea(formatos[1], "Las 3 preguntas que siempre nos hacen", "Antes de comprar, todos nos preguntan esto.", "Portada con la pregunta; tres láminas con una respuesta corta cada una; penúltima con la diferencia; última con el llamado."),
      idea(formatos[2], "Un día con nosotros", "Esto es lo que nadie ve antes de que le entreguemos.", "0–3 s: detalle del trabajo en primer plano. 3–22 s: tres momentos del día. 22–27 s: la oferta o la diferencia. 27–30 s: llamado."),
    ],
    cronograma: [
      { semana: 1, que_pasa: "Aprobación de este plan y envío de material (logo, fotos, precios).", quien: "Usted" },
      { semana: 2, que_pasa: graba ? "Grabación en su local y edición de las 3 piezas." : "Diseño y edición de las 3 piezas con su material.", quien: "InnovArtis" },
      { semana: 3, que_pasa: "Publicación de las piezas y campaña para que le escriban a WhatsApp.", quien: "Usted e InnovArtis" },
      { semana: 4, que_pasa: "Reporte: cuántas personas vieron y escribieron, y qué ajustamos.", quien: "InnovArtis" },
    ],
    necesitamos: [
      { que: "Logo en buena calidad", falta: true },
      { que: "Precio u oferta que quiere mostrar", falta: !r.extra },
      { que: "Número de WhatsApp verificado para el llamado", falta: true },
    ],
    referencias: piezas.slice(0, 3).map((p) => p.id),
    busquedas_biblioteca: [`${r.rubro} Quito`, vende.split(" ").slice(0, 3).join(" ")],
  };
}
