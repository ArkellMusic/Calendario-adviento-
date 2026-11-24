// ✏️ Edita aquí todo el contenido del calendario.
const CONFIG = {
  de: "Hugo",
  para: "Paula",
  dedicatoria:
    "Este diciembre cada día tiene una sorpresa escondida. Veinticuatro puertas para recordarte lo mucho que te quiero.",
  // Año del calendario (las puertas se abren el día N de diciembre de este año)
  anio: 2026,
  // Canal de avisos de ntfy (https://ntfy.sh). Los dos os suscribís a este
  // nombre en la app ntfy y os llega un aviso cada vez que se canjea un vale.
  // Es secreto: no lo compartas con nadie más.
  avisos: "hugo-paula-wsimraxuixtx",
};

// emoji, título corto y texto del vale de cada día
const VALES = {
  1:  { emoji: "💄", titulo: "Caprichito en Druni", texto: "Entramos juntos, tú eliges lo que quieras y yo pago. Sin mirar precios." },
  2:  { emoji: "☕", titulo: "Merienda donde tú elijas", texto: "Tú pones el sitio y el antojo; yo pongo la compañía y la cartera." },
  3:  { emoji: "💆‍♀️", titulo: "Masaje con final a tu elección", texto: "Aceite, velas y todo el tiempo del mundo. El final… lo decides tú 😏" },
  4:  { emoji: "🍫", titulo: "Caja de tus dulces favoritos", texto: "Una caja llena solo de las cosas que más te gustan. Prohibido compartir (salvo conmigo)." },
  5:  { emoji: "🎄", titulo: "Paseo por las luces de Navidad", texto: "Chocolate caliente en mano y una vuelta por las luces de la ciudad, de tu mano." },
  6:  { emoji: "✉️", titulo: "Una carta escrita a mano", texto: "Todo lo que a veces no sé decirte en voz alta, escrito para ti con calma." },
  7:  { emoji: "🧸", titulo: "Un peluche que tú elijas", texto: "El que más te guste, para que te abrace cuando yo no esté." },
  8:  { emoji: "🔥", titulo: "Noche de pasión sin prisas", texto: "Móviles fuera, reloj apagado. Solo tú y yo." },
  9:  { emoji: "🍕", titulo: "Pedido de comida: invita la casa", texto: "Hoy no se cocina. Pide lo que te apetezca, que pago yo." },
  10: { emoji: "💐", titulo: "Ramo de flores sorpresa", texto: "Un día cualquiera, sin avisar, llegarán flores para ti." },
  11: { emoji: "🗺️", titulo: "Una cita sorpresa", texto: "Yo lo organizo todo. Tú solo tienes que dejarte llevar." },
  12: { emoji: "🎀", titulo: "Lencería para una noche especial", texto: "Elegimos juntos algo bonito… y luego estrenamos la noche." },
  13: { emoji: "🍿", titulo: "Cine y palomitas", texto: "Tú eliges la peli; las palomitas grandes corren de mi cuenta." },
  14: { emoji: "💍", titulo: "Una joyita sorpresa", texto: "Algo pequeño y brillante para que lleves un poquito de mí contigo." },
  15: { emoji: "👑", titulo: "Una noche en la que tú mandas", texto: "Tus reglas, tus deseos. Yo solo obedezco." },
  16: { emoji: "🥞", titulo: "Desayuno en la cama", texto: "Te despierto con tu desayuno favorito, servido en bandeja." },
  17: { emoji: "🚿", titulo: "Una ducha juntos", texto: "Agua calentita, espuma y nada de prisas." },
  18: { emoji: "🃏", titulo: "Vale comodín", texto: "Un «sí» a lo que me pidas, sin preguntas ni excusas. Úsalo con cabeza." },
  19: { emoji: "📸", titulo: "Sesión de fotos juntos", texto: "Nos ponemos guapos y hacemos fotos para recordar este invierno." },
  20: { emoji: "🛁", titulo: "Baño de burbujas y spa en casa", texto: "Bañera, velas, mascarillas y música bonita. Yo preparo todo." },
  21: { emoji: "🧹", titulo: "Día libre de tareas", texto: "Hoy no mueves un dedo: limpio, cocino y friego yo." },
  22: { emoji: "🎅", titulo: "Mercadillo navideño", texto: "Vamos de mercadillo, probamos de todo y nos traemos algo para el árbol." },
  23: { emoji: "🛋️", titulo: "Maratón de pelis navideñas", texto: "Mantita, pijama, chocolate y todas las pelis de Navidad que aguantemos." },
  24: { emoji: "🎁", titulo: "El gran día", texto: "Feliz Nochebuena, mi amor. Tu regalo de verdad te está esperando… pídeme que te lo dé. Te quiero muchísimo.", grande: true },
};
