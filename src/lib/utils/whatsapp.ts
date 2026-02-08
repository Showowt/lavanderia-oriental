const WHATSAPP_NUMBER = '50379475950';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappLinks = {
  general: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quiero información sobre sus servicios 🧺')}`,
  booking: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quiero agendar mi lavada 🧺')}`,
  delivery: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quiero agendar un delivery 🚚')}`,
  edredones: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Necesito lavar edredones 🛏️')}`,
  quote: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quisiera una cotización 💰')}`,
  businessQuote: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Tengo un negocio y necesito cotización para servicio recurrente 💼')}`,
  lavado: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quiero información sobre el servicio de lavado por libra 🧺')}`,
  secado: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quiero información sobre el servicio de secado 🌀')}`,
  planchado: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Quiero información sobre el servicio de planchado 👔')}`,
  tratamientos: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola! Necesito un tratamiento especial para mi ropa ✨')}`,
};

export function getWhatsAppLink(type: keyof typeof whatsappLinks = 'general'): string {
  return whatsappLinks[type] || whatsappLinks.general;
}

export function getCustomWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DISPLAY_NUMBER = '+503 7947-5950';
