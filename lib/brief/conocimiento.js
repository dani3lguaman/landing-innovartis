// Base de conocimiento por rubro del Sistema InnovArtis de planificación.
// Sale del material REAL de la agencia (proformas 2026, briefs y guiones de clientes, plantillas,
// metodología y memorias de errores), resumido y SIN datos personales: sin teléfonos, RUC, correos
// ni nombres de personas. Solo se nombran negocios que ya están públicos en el portafolio de la web.
// Fuentes (en el repo de la agencia, no en este): agencia/comercial/propuestas-2026/, clientes/*/,
// plantillas/, archivo/clientes-inactivos/, agencia/metodologia/, .claude/memoria/, .claude/commands/brief-express.md.

export const CONOCIMIENTO = {
  belleza: {
    nombre: "Belleza, estética, peluquería y barbería",
    ganchos: [
      "Que las mujeres de su zona vean sus resultados y le escriban a usted.",
      "No elige por precio, elige por confianza.",
      "Antes y después del mismo cliente, en la misma luz.",
      "Una de estas tres NO tiene extensiones.",
      "POV: es su primera vez en el salón.",
      "¿Se me va a caer el pelo? (la objeción dicha tal cual)",
      "Si tiene poco cabello, este video es para usted.",
    ],
    angulos: [
      "La confianza: quién atiende, cómo trabaja, el ambiente del local.",
      "La profesional explicando el tratamiento en simple, a cámara.",
      "Fechas fuertes: novias, graduaciones, Día de la Madre, Navidad.",
      "Responder objeciones reales: daño, precio, retoque, si se nota, el tono exacto.",
      "Segmentos: cabello fino, evento, clientas de provincia, retoques.",
    ],
    formatos: [
      "Antes y después (solo en publicaciones orgánicas, con permiso de la clienta).",
      "Reel del proceso en el sillón, de principio a fin.",
      "Carrusel '3 razones para…' con portada de gancho.",
      "Reels de 15–35 s, máximo 45 palabras habladas: adivinanza, respuesta a un comentario, GRWM, testimonio.",
    ],
    preguntas: [
      "¿Tiene fotos de antes y después ya hechas, con permiso?",
      "¿Qué tratamiento quiere llenar primero?",
      "¿Atiende con cita o por orden de llegada?",
      "¿Sus redes son de negocio o personales?",
    ],
    evitar: [
      "En anuncios pagados, no usar el antes y después: se usa el ambiente y la explicación (políticas de Meta).",
      "Si atiende por orden de llegada, nunca 'agenda tu cita'.",
      "No prometer resultados sobre el cuerpo o el cabello.",
      "Prohibido 'barato' y 'milagro'. Doble revisión de ortografía del nombre de la marca.",
      "No repetir el mismo guion cada mes: cumplir el plan no retiene al cliente si todo se ve igual.",
    ],
    ejemplos: [
      "Cabello Remy EC (extensiones): arte y carrusel '3 razones' con gancho de transformación y llamado a WhatsApp; la campaña de mensajes fue la base de su crecimiento (cifras fechadas en el portafolio).",
      "Cabello Remy EC, reel de 20 s: adivinanza ('una de estas tres no tiene extensiones') → repaso de raíz y brillo, 'comente cuál' → revelación → 'Si quiere que no se le note, escríbanos'.",
    ],
  },

  salud: {
    nombre: "Salud: fisioterapia, osteopatía, odontología, psicología, centros médicos y veterinaria",
    ganchos: [
      "Que las personas con dolor encuentren su centro antes que otro.",
      "La salud se elige con confianza.",
      "Un profesional real explicando genera la confianza que una foto de internet no da.",
      "Quien escribe por un dolor agenda con el primero que le contesta.",
      "Si lleva semanas diciendo 'ya se me va a pasar', esto es para usted.",
      "La mayoría llega al médico cuando ya no aguanta.",
      "Sin traslados ni esperas: llegamos a donde está el paciente.",
      "¿Hace cuánto no se hace un chequeo?",
    ],
    angulos: [
      "El paciente decide antes de llamar: mira el consultorio, quién lo atiende y cómo trabaja.",
      "Segmentar por perfil: deportistas, personas que pasan el día sentadas, trabajadores que cargan peso; en terapias infantiles se le habla a los padres.",
      "Hablar del servicio y de quién lo atiende; humanizar al profesional en cámara.",
      "En atención a domicilio, quien decide suele ser la familia del adulto mayor.",
      "El médico general como 'primera puerta': le decimos a dónde ir.",
      "Psicología infantil: el reel trata el problema del padre y la marca entra en los últimos 5 s.",
    ],
    formatos: [
      "Reel de 30–35 s: gancho → problema del paciente → qué hacemos → llamado a WhatsApp (MedCentral).",
      "Un tratamiento explicado en simple por el profesional.",
      "Carrusel '5 señales de que su columna necesita…' o 'cómo es su primera cita'.",
      "Post del servicio del mes, la promo o los horarios.",
    ],
    preguntas: [
      "¿Qué dolores o tratamientos atiende más?",
      "¿Qué servicio quiere llenar primero?",
      "¿Qué le preguntan siempre en consulta?",
      "¿Hay pacientes dispuestos a salir en cámara con autorización escrita?",
    ],
    evitar: [
      "Nunca prometer curas ni 'supera X en N sesiones'.",
      "No apelar a condiciones personales del público ('¿tienes ansiedad?', '¿sufres de…?'): Meta lo rechaza; se habla del servicio.",
      "Pacientes en cámara solo con autorización escrita y sin mostrar su condición.",
      "Solo imágenes reales del centro, nunca de banco.",
      "En masajes, decir explícito 'fisioterapia y masaje terapéutico' para filtrar y cumplir políticas.",
      "Meta rechaza '¿Sufres de dolor lumbar?': se dice 'Fisioterapia para dolor lumbar, a domicilio'.",
      "El profesional le habla al paciente, de usted, y no abre presentándose a sí mismo.",
      "En marcas infantiles: ningún menor identificable y anuncios dirigidos solo a adultos.",
    ],
    ejemplos: [
      "MedCentral (centro médico): se grabaron 3 arranques distintos del mismo reel para probarlos en pauta; estructura gancho → problema → qué hacemos → WhatsApp, 30–35 s.",
      "Un centro de fisioterapia en Quito: 1 h de grabación (el espacio, una técnica explicada, una sesión con autorización) y carruseles de señales de alerta.",
      "Fisioterapia a domicilio, reel de 30 s: letrero de un barrio conocido → la fisioterapeuta llega → manos trabajando (la toma que más vende) → el paciente logra caminar o levantar el brazo → 'Atendemos a domicilio en todo Quito' + WhatsApp.",
      "MedCentral, 3 arranques del mismo reel: 'Si lleva semanas diciendo ya se me va a pasar…' / 'La mayoría llega al médico cuando ya no aguanta' / '¿Hace cuánto no se hace un chequeo?' → 'le revisamos, le explicamos' → WhatsApp.",
    ],
  },

  comida: {
    nombre: "Gastronomía, alimentos y bebidas",
    ganchos: [
      "El producto en primer plano en los 3 primeros segundos (servir, cortar, destapar).",
      "Una pregunta del antojo o de la ocasión: '¿Ya sabe qué va a pedir este viernes?'.",
    ],
    angulos: [
      "El proceso real: cómo se prepara, la frescura, el origen.",
      "La ocasión de consumo: almuerzo de oficina, fin de semana en familia, fechas especiales.",
      "B2B (distribuidores, restaurantes, hoteles): calidad constante, frescura y cumplimiento de entregas.",
      "Zona de reparto clara en el anuncio para no recibir mensajes de fuera de cobertura.",
    ],
    formatos: [
      "Reel del proceso de preparación o de planta.",
      "Post del plato o producto con la promo del mes (si el cliente la da).",
      "Reel de receta o uso con pregunta al cierre.",
      "Catálogo con el precio en cada foto (si el cliente lo da).",
    ],
    preguntas: [
      "¿Cuál es el producto o plato que más vende y cuál quiere empujar?",
      "¿Vende al público, a negocios, o a ambos?",
      "¿Tiene delivery, cobertura o punto de venta?",
    ],
    evitar: [
      "No mostrar precios ni promos que el cliente no dio por escrito.",
      "Nada de fotos de banco del producto: se graba el producto real.",
      "No publicar productos que el dueño no esté seguro de vender.",
      "No grabar si el lugar y el producto no están listos (se pierden horas de grabación).",
    ],
    ejemplos: [
      "Damavid Aqua (agua purificada): reel con el producto y el proceso que superó decenas de miles de reproducciones (cifra fechada en el portafolio).",
      "Abbysal Tentacle Cravings (gastronomía): piezas del plato real en primer plano.",
    ],
  },

  limpieza: {
    nombre: "Limpieza, mantenimiento y mudanzas",
    ganchos: [
      "Su empresa merece verse tan profesional como trabaja.",
      "Antes y después del mismo espacio.",
      "En un servicio donde el cliente le entrega todas sus cosas, la confianza lo es todo.",
      "Primer mes de clases… y la casa no da más.",
      "¿Sabe quién está limpiando su casa?",
    ],
    angulos: [
      "El antes y después como prueba.",
      "El equipo uniformado y el proceso: confianza para dejarlos entrar a casa o a la empresa.",
      "Catálogo claro de servicios (qué incluye y qué no).",
      "La diferencia entre limpieza básica y profunda.",
      "Personal con credencial verificable.",
    ],
    formatos: [
      "Reel de antes y después.",
      "Carrusel catálogo de servicios.",
      "Carrusel de clientes felices (con permiso).",
    ],
    preguntas: [
      "¿Qué servicios incluye exactamente su plan (para no mostrar uno que no da)?",
      "¿Atiende hogares, empresas o ambos?",
      "¿Qué zonas cubre?",
    ],
    evitar: [
      "Nunca mostrar un servicio o equipo que el cliente no ofrece (pasó con una aspiradora fuera del servicio y le costó clientes).",
      "Nada de visuales generados: solo trabajos reales.",
      "Tapar placas y datos de los clientes del cliente en las tomas.",
      "Aclarar en el llamado que es para clientes: un anuncio de limpieza atrajo postulantes a empleo en vez de clientes.",
    ],
    ejemplos: [
      "Pachy Limpieza Profesional: posts de limpieza industrial y antes/después, carruseles de servicios y de clientes; la campaña de mensajes por WhatsApp sostuvo el año (cifra fechada en el portafolio).",
      "Pachy Limpieza Profesional, reel de 25–30 s: sala desordenada (antes) → llega el equipo uniformado → 'Limpieza profunda con su familia en casa' → el mismo punto limpio → 'Escríbanos'.",
    ],
  },

  industria: {
    nombre: "Industria, construcción, metalmecánica, vidrio y climatización",
    ganchos: [
      "La gente contrata lo que ve.",
      "¿Confía en sus tapas durante el transporte? (botellón que se vira y no se derrama).",
      "¿Su negocio pierde dinero en vasos que se rompen?",
      "Su empresa necesita más que un proveedor: necesita soluciones.",
      "Si su negocio compra vasos por millar, este video le va a ahorrar dinero.",
      "Una tapa que falla le cuesta agua, tiempo y clientes.",
      "3 errores al mandar a hacer una pérgola.",
      "¿Y si me dejan la obra a medias?",
      "Véalo funcionar antes de decidir.",
    ],
    angulos: [
      "Un trabajo profundamente visual: cada obra, cada montaje, cada soldadura.",
      "B2B: capacidad, cumplimiento, personalización y respaldo técnico.",
      "Los regalos o beneficios del mes (mantenimiento gratis, un extra) van grandes y primero cuando el cliente los da.",
      "Precio de fábrica, prueba en cámara (fuga, resistencia), medidas en pantalla y 'cotice por millar'.",
      "Vender la solución completa para la planta, no máquinas sueltas.",
      "Un solo producto por pieza, no catálogo; la máquina en demostración.",
    ],
    formatos: [
      "Reel de unos 40 s con planos cercanos de la maquinaria o la obra funcionando.",
      "Post de obra terminada / área exterior.",
      "Carrusel del proceso: medición → fabricación → instalación.",
    ],
    preguntas: [
      "¿Qué obras o productos terminados se pueden mostrar?",
      "¿Le vende a empresas, a hogares o a ambos?",
      "¿Hay algo que por contrato no se puede mostrar (dirección, fachada, rótulos)?",
      "¿Quién atiende a los interesados y en cuánto tiempo?",
    ],
    evitar: [
      "No mostrar dirección, fachada ni rótulos si el cliente lo prohíbe (caso de una fábrica: solo interiores y procesos).",
      "No escribir un guion que no tenga que ver con lo que el cliente vende (un guion de 'un señor mirando la ventana' se devolvió).",
      "Nunca un antes/después simulado: solo obras reales con su ficha técnica.",
      "No grabar sin guion aprobado, sin avisar al personal y sin insumos listos.",
    ],
    ejemplos: [
      "InyecPro (fábrica de plásticos): 3 reels de ~40 s con estructura gancho (0–5 s) → beneficio → características → personalización + llamado 'Cotice ahora'; ganchos de producto en acción (botellón que no se derrama, vaso que cae y no se rompe).",
      "Metallum (pérgolas y estructuras): posts de obra terminada; el regalo del mes fue el gancho, grande y primero.",
      "Controlfrío y SERTEC Generación: equipos funcionando y el técnico explicando, para clientes empresa.",
      "Metallum, reel de 40 s: manos midiendo → medición sin costo, diseño aprobado, taller propio, instalación en días → contacto por WhatsApp.",
    ],
  },

  inmobiliario: {
    nombre: "Inmobiliario y lotes",
    ganchos: [
      "Más personas interesadas en su proyecto, directo a su WhatsApp.",
      "La confianza cierra la venta de un lote.",
      "Una persona real mostrando el terreno vende más que una foto.",
      "¿Tiene ahorros y no sabe en qué invertir? (la frase de la propia dueña del proyecto).",
    ],
    angulos: [
      "Lo que el comprador pregunta primero: escrituras, financiamiento, calles abiertas, agua, luz y alcantarillado, minutos hasta un punto conocido.",
      "Dos públicos: familias que buscan casa propia e inversionistas.",
      "Lo cotidiano cerca: buses, tiendas, escuela.",
      "Una web sencilla del proyecto para que se vea más real.",
    ],
    formatos: [
      "Una jornada de grabación en el terreno: accesos, servicios, la zona; tomas de dron si el cliente las tiene.",
      "Post con facilidades de pago y servicios (precio solo si el cliente lo da).",
      "Carrusel: lote, plano y ubicación.",
      "Reel con los videos del cliente y SU voz (la voz sintética se rechazó).",
    ],
    preguntas: [
      "¿Precios, medidas y facilidades de pago?",
      "¿Las escrituras están listas? ¿Qué servicios tiene el terreno hoy?",
      "¿Tiene tomas de dron o planos?",
      "¿Precio de contado y a crédito, número de cuotas? ¿Sector exacto?",
      "¿Qué número de WhatsApp recibe los mensajes (uno solo)?",
    ],
    evitar: [
      "No prometer lo que no está en el proyecto (servicios, plusvalía, plazos de obra).",
      "El precio debe ser el mismo en el anuncio, la plantilla y el saludo automático.",
      "No usar material con números de otros vendedores.",
    ],
    ejemplos: [
      "Una lotización en el sur de Quito: grabación en el terreno, 3 reels y 3 posts con servicios y facilidades, y campaña a WhatsApp.",
      "Una lotización, reel de ≈37 s: gancho de inversión → precio de contado / crédito / servicios → tomas de bus, tiendas y escuela → 'escríbame' por WhatsApp.",
    ],
  },

  automotriz: {
    nombre: "Autos, lavado, llantas, rent a car, grúas y transporte",
    ganchos: [
      "Que cuando esa persona busque, lo encuentre a usted primero (repuestos: la necesita ya).",
      "El producto y el taller en acción se ven espectaculares.",
      "El cliente recibiendo las llaves o el auto brillando al salir.",
      "Su carro como nuevo, sin perder su sábado.",
      "Así estaba, así quedó.",
      "Lo que no se ve también se limpia.",
    ],
    angulos: [
      "Situaciones reales del servicio: entrega a domicilio, recogida en el aeropuerto, el montaje en el taller.",
      "Rent a car: reserva inmediata, entrega a domicilio, feriados y turistas.",
      "Lavado: el detalle del resultado y el tiempo real del servicio.",
      "Taller mecánico: la ventaja real es mostrar el taller y al mecánico.",
      "Grúas y montacargas: capacidad, si factura, si el operador va incluido, por hora/día/obra.",
    ],
    formatos: [
      "Reel del servicio de principio a fin.",
      "Post del servicio o paquete estrella.",
      "Carrusel '¿qué incluye?'.",
      "Antes/después de detalle: mitad del capó pulida, una gota que resbala, el agua sucia que sale del asiento.",
      "Reel con voz en off y unos 10 s de la toma más vistosa (vapor, brillo).",
    ],
    preguntas: [
      "¿Cuál es el servicio o paquete que quiere vender este mes?",
      "¿Qué incluye y qué NO incluye?",
      "¿Hay palabras que no quiere usar para su servicio?",
      "¿Quién decide (hay socios)? ¿Quién contesta los mensajes?",
      "¿Graba el cliente o va la agencia?",
    ],
    evitar: [
      "Respetar el vocabulario del cliente (en un lavado: nunca 'micropulido' ni 'cera sintética'; se dice 'abrillantado' y 'protección cerámica').",
      "No inventar un público distinto al que el dueño quiere vender: se vende su paquete estrella.",
      "Sin precio en el anuncio si el cliente no lo autoriza.",
      "No reciclar textos de videos viejos.",
      "Avisar feriados y cambios: no escuchar al cliente casi hace perder una cuenta.",
      "Un solo número para llamadas y WhatsApp.",
    ],
    ejemplos: [
      "Un auto spa en Quito: piezas centradas en su paquete estrella, destacando el abrillantado y la desinfección con vapor, explicando que es un lavado de 2–3 h y qué no incluye.",
    ],
  },

  hogar: {
    nombre: "Decoración, hogar, muebles y electrodomésticos",
    ganchos: [
      "Las transformaciones se tienen que ver para decidirse.",
      "Así de fácil es comprar a crédito.",
      "Una pared, otro ambiente.",
      "Así cambiamos su casa en 4 pasos.",
    ],
    angulos: [
      "El antes y después del espacio.",
      "Cómo comprar: requisitos, crédito, entrega.",
      "Apertura de local: expectativa antes de abrir, que no se apague, crecer con datos.",
    ],
    formatos: [
      "Reel de transformación de un espacio.",
      "Carrusel de cómo comprar y qué requisitos se piden.",
      "Posts de fechas: Día de la Madre, Black Friday, Navidad.",
      "Antes/después en 6 tomas: antes desde el mismo punto → material → manos → avance → detalle → después.",
    ],
    preguntas: [
      "¿Qué línea de productos quiere mover primero?",
      "¿Vende a crédito o con facilidades? ¿Con qué requisitos?",
      "¿Tiene trabajos terminados para mostrar?",
    ],
    evitar: [
      "No mostrar condiciones de crédito que el cliente no dio por escrito.",
      "Respetar los nombres de producto que el cliente pide quitar o usar.",
    ],
    ejemplos: [
      "Una tienda de pisos y decoración que abría local: ruta de 90 días (expectativa y apertura, mantener, crecer con datos) con anuncios antes de abrir.",
    ],
  },

  educacion: {
    nombre: "Academias, cursos, colegios, idiomas y ballet",
    ganchos: [
      "Quien ve la formación real, confía; quien confía, se inscribe.",
      "Que más familias de su zona conozcan la academia y llenen sus cupos.",
    ],
    angulos: [
      "La clase real: el profesor, los alumnos aprendiendo, el avance.",
      "A quién se le habla: a los padres (niños) o al alumno adulto.",
      "Temporada de inscripción y cupos limitados (si son reales).",
      "Academias de preparación: el eje es la oportunidad, no la disciplina.",
      "Eventos o cursos gratuitos: 'GRATIS' grande + certificado opcional + 100 % en línea.",
    ],
    formatos: [
      "Grabación de una clase siguiendo el guion.",
      "Post con horarios, edades y promo de inscripción (si el cliente la da).",
      "Reel de prácticas, instructores o entrega de certificados.",
      "Video de requisitos de ingreso con voz en off y la promoción de inscripción.",
    ],
    preguntas: [
      "¿Horarios, edades y cupos que quiere llenar?",
      "¿Cuándo es la temporada de inscripción?",
      "¿En qué se diferencia de otras academias de la zona?",
    ],
    evitar: [
      "Menores en cámara solo con permiso escrito de los padres.",
      "No usar la marca de un tercero (certificadoras, universidades) sin autorización.",
      "No prometer resultados de aprendizaje ('hable inglés en 3 meses').",
      "Apagar a tiempo las campañas con fecha (inscripciones, eventos).",
    ],
    ejemplos: [
      "Enquality (academia de inglés): piezas de clase real y llamados a inscripción por WhatsApp.",
      "KYA Ecuador (capacitación ISO): el ángulo fue la urgencia por la actualización de la norma.",
    ],
  },

  profesionales: {
    nombre: "Servicios profesionales: contables, tributarios, legales, visas y consultoría",
    ganchos: [
      "Que los negocios lo busquen a usted antes de que se les venza una declaración.",
      "¿Tengo que declarar aunque no haya vendido nada?",
      "¿Qué hago si me despiden sin liquidación?",
      "Hablamos del tema, no de la persona.",
    ],
    angulos: [
      "El profesional a cámara respondiendo una duda real en 30 s.",
      "Calendario: 'Fechas del SRI de este mes' según el noveno dígito del RUC; temporadas de impuesto a la renta.",
      "El paso a paso de un trámite (qué documentos piden, cuánto se demora).",
      "Si el profesional no quiere salir en cámara: videos de 40 s o menos con texto y voz en off, lenguaje sencillo.",
      "Servicios concretos arriba (firmas electrónicas, RUC, devoluciones a tercera edad), no 'asesoría' en general.",
      "Formato 'los errores más comunes al…'.",
    ],
    formatos: [
      "Reel de duda frecuente respondida por el profesional.",
      "Carrusel del paso a paso de un trámite.",
      "Post con plazos y documentos del mes.",
    ],
    preguntas: [
      "¿Qué servicio o área quiere llenar primero?",
      "¿Atiende a personas, a negocios o a ambos?",
      "¿Cuáles son las 5 preguntas que más le hacen?",
    ],
    evitar: [
      "No prometer ahorros, resultados de casos ni aprobaciones (la visa la aprueba el consulado).",
      "No dirigirse a la persona por su situación ('¿se está divorciando?'): Meta no lo permite.",
      "El dato técnico lo valida el cliente: la agencia no se presenta como experta en su materia.",
      "Mostrar entregas claras: muchos clientes de este rubro ya perdieron dinero con otro proveedor.",
      "Si le tiene miedo a la cámara, el guion se escribe para que lo diga con sus palabras.",
    ],
    ejemplos: [
      "Un estudio contable: un video mensual de fechas del SRI y dudas de 30 s; carrusel de proyección de gastos personales en temporada.",
    ],
  },

  tecnologia: {
    nombre: "Tecnología, software, servicio técnico y seguridad",
    ganchos: [
      "Nadie entrega su equipo a un desconocido.",
      "El problema del cliente en 3 segundos (pantalla rota, sistema caído, puerta forzada).",
      "No vendemos software, resolvemos ineficiencia.",
      "¿Cuántas horas pierde su equipo copiando datos?",
      "El banco le pide una carpeta. Nosotros lo evaluamos en minutos.",
    ],
    angulos: [
      "Antes y después de una reparación; el taller o el equipo trabajando.",
      "Software: el dolor concreto que resuelve, mostrado en la pantalla real.",
      "Seguridad: confianza, capacitación y cumplimiento.",
    ],
    formatos: [
      "Reel de antes y después o de demostración real.",
      "Carrusel '¿cómo funciona?' en 4 pasos.",
      "Post del servicio con el llamado a cotizar.",
      "Reels animados de 15–25 s sin personas (software B2B), también para LinkedIn.",
    ],
    preguntas: [
      "¿Qué servicio o producto quiere vender primero?",
      "¿Le vende a personas o a empresas?",
      "¿Puede mostrarse la pantalla o el sistema real?",
    ],
    evitar: [
      "No prometer 'cero fallas' ni tiempos de respuesta que el cliente no confirmó.",
      "No usar capturas de sistemas de clientes del cliente sin permiso.",
      "Prohibido 'líderes', 'el mejor' y cifras inventadas.",
      "Venta a crédito: se comunica la cuota y 'sujeto a aprobación'; nunca 'sin buró', 'sin entrada' ni 'aprobado seguro'.",
      "No poner películas ni contenido con derechos de autor en las pantallas.",
    ],
    ejemplos: [
      "Un servicio técnico que cambió de local: antes y después de reparaciones, el taller y la nueva ubicación.",
    ],
  },

  comercio: {
    nombre: "Comercio, bazar, tiendas e impresiones",
    ganchos: [
      "Un bazar vende por variedad, y la variedad no se ve si no se muestra.",
      "Todo lo que encuentra en un solo lugar.",
    ],
    angulos: [
      "La variedad y lo nuevo que llegó.",
      "Fechas: regreso a clases, Día de la Madre, Navidad.",
      "Imprentas y negocios B2B: el comprador le compra al primero que se dejó ver con buen precio (si el cliente lo da).",
    ],
    formatos: [
      "Carrusel 'todo lo que encuentra en…'.",
      "Reel recorriendo el local o mostrando productos en mano.",
      "Post del producto estrella con su precio si el cliente lo dio.",
    ],
    preguntas: [
      "¿Qué productos quiere mover este mes?",
      "¿Vende al público o a empresas?",
      "¿Hace envíos o solo en el local?",
    ],
    evitar: [
      "Confirmar si vende al público o a empresas antes del ángulo (una 'papelería' resultó ser imprenta B2B).",
      "No mostrar precios que el cliente no dio por escrito.",
    ],
    ejemplos: [
      "Un bazar fuera de Quito: guía para grabar con el celular (qué mostrar, cómo encuadrar, con qué luz) y carrusel de variedad para regreso a clases.",
    ],
  },

  general: {
    nombre: "Otros negocios (eventos, turismo, adultos mayores, servicios varios)",
    ganchos: [
      "La pregunta que el cliente se hace antes de comprar, dicha en sus palabras.",
      "Lo que nadie ve: el detrás de cámaras del servicio.",
      "Nadie sube el Cotopaxi el primer día (turismo de montaña).",
      "Ver es creer: montajes reales (alquiler de sillas y carpas).",
    ],
    angulos: [
      "Si hay dos públicos (quien paga y quien usa), una pieza para cada uno; por ejemplo, hijos que buscan confianza y adultos mayores que buscan un plan para su semana.",
      "Un evento o fecha concreta como excusa para escribir.",
      "Turismo: años de trayectoria y guías certificados; copies en inglés primero si el público es extranjero.",
      "Reciclaje: un anuncio por público (empresas por volumen, recolección a domicilio, entrega en local).",
    ],
    formatos: [
      "Reel del servicio en acción.",
      "Carrusel de preguntas frecuentes.",
      "Post de la fecha o el evento.",
    ],
    preguntas: [
      "¿Qué quiere vender primero y a quién?",
      "¿Hay una fecha o evento este mes?",
      "¿Qué le preguntan siempre antes de comprar?",
    ],
    evitar: [
      "No suponer el público: usar el que el dueño dijo.",
      "Si el cliente maneja dos marcas con públicos distintos, una pieza por marca.",
      "Nada de letra blanca sobre fondo claro ni posts con demasiado texto.",
    ],
    ejemplos: [
      "Un club para adultos mayores: 'no es un asilo, es un club para mantenerse activo'; evento de puertas abiertas con 10 días de campaña y el evento grabado como material para el mes.",
    ],
  },
};

// Rubro del formulario → sección de conocimiento.
const MAPA = {
  "Belleza y estética": "belleza",
  Salud: "salud",
  Gastronomía: "comida",
  "Alimentos y bebidas": "comida",
  "Limpieza y servicios": "limpieza",
  "Industria y construcción": "industria",
  "Inmobiliario y lotes": "inmobiliario",
  "Autos y transporte": "automotriz",
  "Decoración y hogar": "hogar",
  Educación: "educacion",
  "Servicios profesionales": "profesionales",
  Tecnología: "tecnologia",
  Comercio: "comercio",
  Otro: "general",
};

export const RUBROS_CONOCIMIENTO = Object.keys(CONOCIMIENTO);

const lista = (titulo, items) => (items?.length ? `${titulo}:\n${items.map((x) => `- ${x}`).join("\n")}` : "");

/** Texto de la sección del rubro para el mensaje del usuario. */
export function seccionDelRubro(rubroFormulario) {
  const s = CONOCIMIENTO[MAPA[rubroFormulario] || "general"];
  return [
    `Rubro: ${s.nombre}`,
    lista("Ganchos que ya usamos o que funcionaron", s.ganchos),
    lista("Ángulos y mensajes", s.angulos),
    lista("Formatos que usamos", s.formatos),
    lista("Preguntas clave (si el cliente no las respondió, van en 'necesitamos')", s.preguntas),
    lista("Errores a evitar (nacieron de casos reales)", s.evitar),
    lista("Ejemplos reales resumidos", s.ejemplos),
  ]
    .filter(Boolean)
    .join("\n\n");
}
