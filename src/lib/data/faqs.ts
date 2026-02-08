export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  // General
  {
    category: 'general',
    question: '¿Cuáles son sus horarios de atención?',
    answer: 'Lunes a Sábado de 7:00am a 6:00pm. Domingos cerrado.'
  },
  {
    category: 'general',
    question: '¿Aceptan ropa de cualquier tipo?',
    answer: 'Sí, lavamos todo tipo de ropa: casual, deportiva, ropa de cama, uniformes, etc. Solo no aceptamos pieles, cueros o trajes que requieran tintorería especializada.'
  },
  {
    category: 'general',
    question: '¿Cuánto tiempo toma el servicio?',
    answer: 'Lavado regular: mismo día si entrega antes de 12pm. Edredones: 24-48 horas. Planchado: 24 horas.'
  },
  // Servicios
  {
    category: 'servicios',
    question: '¿Qué incluye el lavado por libra?',
    answer: 'Incluye lavado con detergente premium, suavizante, secado completo y doblado.'
  },
  {
    category: 'servicios',
    question: '¿Pueden quitar manchas difíciles?',
    answer: 'Sí, ofrecemos tratamientos especiales para manchas. El precio varía según la dificultad. Siempre te avisamos antes de proceder.'
  },
  // Precios
  {
    category: 'precios',
    question: '¿Cuáles son sus precios?',
    answer: 'Lavado por libra: $3.25/lb. Secado: $1.00/10 min. Edredones: desde $6.50. Planchado: $1.50/pieza. Delivery: $2.00.'
  },
  {
    category: 'precios',
    question: '¿Hay mínimo de pedido?',
    answer: 'Para servicio en sucursal no hay mínimo. Para delivery el mínimo es $10 en servicios.'
  },
  // Delivery
  {
    category: 'delivery',
    question: '¿Tienen servicio a domicilio?',
    answer: 'Sí, recogemos y entregamos tu ropa. El costo es $2.00 por viaje.'
  },
  {
    category: 'delivery',
    question: '¿Cuáles zonas cubren?',
    answer: 'Cada sucursal tiene su zona de cobertura. Contáctanos por WhatsApp para confirmar si llegamos a tu dirección.'
  },
  // Pagos
  {
    category: 'pagos',
    question: '¿Qué formas de pago aceptan?',
    answer: 'Efectivo, tarjeta de débito/crédito, y transferencia bancaria.'
  },
  {
    category: 'pagos',
    question: '¿Puedo pagar al momento de entrega?',
    answer: 'Sí, puedes pagar cuando recoges tu ropa o cuando te la llevamos.'
  }
];

export const faqCategories = [
  { id: 'general', label: 'General' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'precios', label: 'Precios' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'pagos', label: 'Pagos' }
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}
