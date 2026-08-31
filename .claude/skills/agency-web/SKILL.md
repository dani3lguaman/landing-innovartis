---
name: agency-web
description: Sistema de diseño web de InnovArtis para sitios de agencia y de clientes — criterio tipográfico, espaciado, color, copy, movimiento y rendimiento al nivel de los mejores estudios (Locomotive, Instrument, Basic). Usar al diseñar, rediseñar o auditar cualquier sitio web propio o de cliente.
---

# agency-web — el criterio, no la plantilla

El estándar contra el que se compara todo: Basic/Agency, Locomotive, Instrument,
Huge, Work & Co, Pentagram. NO se copia su diseño: se copia su criterio —
tipografía grande y contenida, aire generoso, un solo acento, movimiento sobrio,
cero decoración.

## 0 · Principios (si una decisión viola uno, se rehace)

1. **El aire es lo que se ve caro.** Ante la duda, más espacio, no más elementos.
2. **Una página cuenta UNA historia hacia abajo.** Nada de pestañas ni carruseles
   para esconder contenido: si sobra, se corta; si es otro tema, es otra ruta.
   (Decidido con Daniel el 30-ago-2026: los carruseles tienen <1% de interacción
   más allá del primer slide; el tráfico de pauta scrollea, no clickea pestañas.)
3. **Jerarquía por tamaño y peso, nunca por color.**
4. **Cada afirmación lleva un número o se calla.** Sin métricas inventadas, jamás.
5. **Todo empuja a UNA conversión** (en InnovArtis: conversación de WhatsApp o formulario).

## 1 · Tipografía

- Máximo 2 familias: una display con carácter + una neutra de cuerpo, vía next/font.
- **InnovArtis (decidido por Daniel, 30-ago-2026): dirección serif editorial —
  Cormorant Garamond (display) + Lora (cuerpo).** Montserrat queda para las piezas
  de redes; la web conserva la identidad editorial que ninguna agencia local tiene.
- Escala fluida con clamp(). Display: 56–96px desktop / 36–48px mobile.
  Ej.: `font-size: clamp(36px, 3vw + 24px, 96px)`.
- Tracking -0.02 a -0.04em en display. Line-height 1.05–1.15 en display.
- Cuerpo 17–19px, line-height 1.6, medida máxima 68 caracteres (`max-width: 68ch`).
- Los tamaños viven en tokens (variables CSS / @theme), NUNCA quemados en componentes.

## 2 · Espaciado

- Grilla base de 8px: todo margen, padding y gap es múltiplo de 8.
- Padding vertical de sección: 120–160px desktop, 72–96px mobile.
- Máximo ~8 secciones por página. La 9ª es señal de recorte pendiente.

## 3 · Color

- Neutros dominantes + UN acento. InnovArtis: acento #EE7B4D, texto/titulares #2C4A63,
  fondos blanco/#FAFBFC. (En sitio de cliente: SU paleta, misma regla.)
- El acento solo en CTAs y datos clave. Nunca en fondos grandes.
- ⚠️ #EE7B4D sobre blanco NO pasa contraste AA para texto normal (≈2.9:1):
  como texto solo en tamaños display o sobre navy; para texto pequeño usar
  el tono profundo #C85F35 (≈4.6:1) o navy.
- Prohibido: degradados morado-azul, blobs, glassmorphism, sombras default de
  framework, border-radius exagerado.

## 4 · Copy

- Cada caso lleva una métrica en el titular, no el nombre del servicio.
- Cada servicio se nombra por el problema de negocio que resuelve.
- Español de Ecuador, trato de usted con clientes, sin anglicismos de agencia
  ("leads" → interesados; "engagement" → interacción; CPL se usa explicado).
- 🚫 Palabras prohibidas de la marca (manual 30-ago-2026): "inteligencia artificial",
  "IA", "bot" — el producto se llama "asistente automático de WhatsApp".
- Prohibido: lorem ipsum, "Bienvenidos a nuestra web", "somos apasionados",
  stock genérico de gente sonriendo. Evidencia real (fotos/videos propios) > stock.
- El precio nunca es titular: beneficio primero, precio una vez, al final, como "Inversión".

## 5 · Movimiento (la capa de vida)

Orden de valor por esfuerzo: revelado de titulares por línea > entradas al scroll >
contadores > marquee > pin section > transiciones de página.

- Entradas: opacity 0→1 + translateY 24px→0, 500–700ms,
  cubic-bezier(0.16, 1, 0.3, 1), stagger 80–120ms, dispara al 20%, UNA vez.
- Titulares: máscara overflow-hidden + translateY 100%→0 por línea, stagger 60ms.
- Contadores: 0→valor al entrar, 1200–1800ms desacelerando, ancho reservado (sin CLS).
- Marquee: infinito, lento, pausa en hover.
- Pin: máximo UNA sección, solo desktop; en mobile degrada a lista.
- Reglas duras: nada rebota/gira/escala desde 0 · nada supera 800ms ·
  prefers-reduced-motion apaga todo lo no esencial · el hero NUNCA anima su
  entrada (es el LCP; loop sí, entrada no) · solo transform y opacity ·
  cero librerías: CSS + IntersectionObserver · en mobile menos movimiento,
  no el mismo comprimido.

## 6 · Microinteracciones

- Todo clickeable responde <150ms al hover.
- Botones: transición de fondo (relleno desde el borde inferior es la firma), sin saltos.
- Tarjetas: la imagen hace scale(1.04) en 600ms dentro de overflow-hidden; la tarjeta no se mueve.
- Enlaces: subrayado que se dibuja de izquierda a derecha.
- Nav: se oculta al bajar, reaparece al subir, gana fondo al pasar el hero.
- Formularios: foco, carga y éxito animados; el envío al CRM se prueba antes de cerrar.
- Cursor magnético: sutil (≤8px), solo desktop, solo elementos grandes.

## 7 · Rendimiento y accesibilidad (el corte es innegociable)

- Lighthouse >90 en performance y accesibilidad. Si el movimiento lo baja, se recorta movimiento.
- LCP <2.5s (hero sin JS bloqueante, imagen con priority) · CLS <0.05 (aspect-ratio
  en toda imagen/video) · INP <200ms.
- JS de animación ≤40kb gzipped. Imágenes WebP/AVIF, lazy fuera del primer viewport.
- Fuentes con next/font, font-display swap, preload de la display.
- Contraste AA en todo texto. Foco visible en todo interactivo. Teclado completo.

## 8 · Proceso al aplicar esta skill a un sitio de cliente

1. Leer SU manual de marca (o definir mini-tokens con el cliente antes de tocar código).
2. Fase de reconocimiento → diagnóstico → plan → tokens → estructura → vida →
   micro → rendimiento → QA. Nunca al revés: el movimiento va DESPUÉS de la estructura.
3. Verificación visual obligatoria con capturas 390/768/1440 antes y después de cada fase.
4. Trabajar en rama; producción solo con orden explícita del dueño.
