// Fuente única de la configuración y los textos del sitio.
// Cambiá estos valores para actualizar datos de contacto, mensajes o SEO.

export const site = {
  nombre: 'Amoblamientos MEBA',
  nombreCorto: 'MEBA',
  // Descripción usada en <meta description> y JSON-LD.
  descripcion:
    'Amoblamientos MEBA fabrica e instala mobiliario para farmacias en todo el país. Diseño 3D sin cargo, fabricación a medida y convenios con Colegios de Farmacéuticos.',
  slogan: 'Amoblamos tu farmacia, de la idea a la instalación.',
  url: 'https://amoblamientos-meba.netlify.app',
  // OG / redes: imagen de 1200×630 en /public.
  ogImage: '/og.jpg',

  ciudad: 'Bragado',
  provincia: 'Provincia de Buenos Aires',
  pais: 'Argentina',
  codigoPais: 'AR',

  // WhatsApp Business: formato internacional, solo dígitos, sin "+".
  whatsapp: '5493512867538',
  whatsappMensaje:
    'Hola MEBA, quiero pedir un presupuesto para el amoblamiento de mi farmacia.',

  email: 'amoblamientosmeba@hotmail.com',
  instagram: 'https://www.instagram.com/meba.amoblamientos/',
  facebook: 'https://www.facebook.com/meba.amoblamientos/',
} as const;

/** URL de WhatsApp click-to-chat con un mensaje prellenado. */
export function whatsappUrl(mensaje: string = site.whatsappMensaje): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
