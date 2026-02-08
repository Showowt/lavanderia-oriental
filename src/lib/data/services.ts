export interface ServicePricing {
  basePrice: number;
  unit: 'lb' | 'piece' | 'item' | 'min' | 'flat';
  unitLabel: string;
  variations?: {
    name: string;
    price: number;
  }[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  pricing: ServicePricing;
  turnaroundTime: string;
  includes: string[];
  availableAt: string[];
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    id: 'lavado',
    slug: 'lavado',
    name: 'Lavado por Libra',
    shortDescription: 'Lavado profesional con detergente premium y suavizante.',
    fullDescription: 'Lavado profesional con detergente premium y suavizante. Incluye separación por colores y cuidado especial de prendas delicadas.',
    icon: '🧺',
    pricing: {
      basePrice: 3.25,
      unit: 'lb',
      unitLabel: 'por libra'
    },
    turnaroundTime: 'Mismo día (si entrega antes de 12pm)',
    includes: [
      'Detergente premium',
      'Suavizante de telas',
      'Separación por colores',
      'Secado completo',
      'Doblado'
    ],
    availableAt: ['san-miguel', 'usulutan', 'lourdes-colon', 'santa-ana'],
    faqs: [
      {
        question: '¿Hay un mínimo de libras?',
        answer: 'No hay mínimo para servicio en sucursal. Para delivery el mínimo es $10 en servicios.'
      },
      {
        question: '¿Separan la ropa por colores?',
        answer: 'Sí, siempre separamos la ropa clara de la oscura para evitar transferencia de color.'
      },
      {
        question: '¿Qué productos usan?',
        answer: 'Utilizamos detergentes premium hipoalergénicos y suavizantes de alta calidad.'
      }
    ]
  },
  {
    id: 'secado',
    slug: 'secado',
    name: 'Secado',
    shortDescription: 'Secadoras industriales de alta capacidad para un secado rápido.',
    fullDescription: 'Secadoras industriales de alta capacidad. Secado rápido y eficiente para todo tipo de prendas.',
    icon: '🌀',
    pricing: {
      basePrice: 1.00,
      unit: 'min',
      unitLabel: 'por 10 min'
    },
    turnaroundTime: '10-30 minutos según carga',
    includes: [
      'Secado controlado por temperatura',
      'Capacidad industrial',
      'Secado uniforme'
    ],
    availableAt: ['san-miguel', 'usulutan', 'lourdes-colon', 'santa-ana'],
    faqs: [
      {
        question: '¿Puedo usar el secado sin lavar?',
        answer: 'Sí, puedes usar solo el servicio de secado si ya lavaste tu ropa en casa.'
      },
      {
        question: '¿Cuánto tiempo necesita mi ropa?',
        answer: 'Depende del tipo de tela y la cantidad. En promedio, una carga regular toma 20-30 minutos.'
      }
    ]
  },
  {
    id: 'edredones',
    slug: 'edredones',
    name: 'Edredones y Cobertores',
    shortDescription: 'Lavado especializado para ropa de cama. Perfecto para hogares y negocios.',
    fullDescription: 'Lavado especializado para toda tu ropa de cama. Perfecto para hogares, AirBnB, hoteles y hospedajes.',
    icon: '🛏️',
    pricing: {
      basePrice: 6.50,
      unit: 'item',
      unitLabel: 'desde',
      variations: [
        { name: 'Edredón Individual (Twin)', price: 6.50 },
        { name: 'Edredón Matrimonial (Full/Queen)', price: 8.00 },
        { name: 'Edredón King Size', price: 10.00 },
        { name: 'Edredón California King', price: 12.00 },
        { name: 'Cobertores/Mantas', price: 5.00 },
        { name: 'Almohadas (c/u)', price: 3.00 },
        { name: 'Sábanas (juego completo)', price: 4.00 }
      ]
    },
    turnaroundTime: '24-48 horas',
    includes: [
      'Detergente premium hipoalergénico',
      'Suavizante de telas',
      'Secado completo en secadoras industriales',
      'Doblado y empaque'
    ],
    availableAt: ['san-miguel', 'usulutan', 'lourdes-colon', 'santa-ana'],
    faqs: [
      {
        question: '¿Puedo llevar edredones muy grandes?',
        answer: 'Sí, nuestras lavadoras industriales tienen capacidad para edredones de cualquier tamaño, incluyendo California King.'
      },
      {
        question: '¿Qué pasa si mi edredón tiene manchas?',
        answer: 'Tratamos las manchas sin costo adicional. Si requiere tratamiento especial, te avisamos antes de proceder.'
      },
      {
        question: '¿Tienen servicio de delivery para edredones?',
        answer: 'Sí, recogemos y entregamos. El costo de delivery es $2.00.'
      }
    ]
  },
  {
    id: 'planchado',
    slug: 'planchado',
    name: 'Planchado',
    shortDescription: 'Planchado profesional para camisas, pantalones y más.',
    fullDescription: 'Planchado profesional para todo tipo de prendas. Dejamos tu ropa lista para usar.',
    icon: '👔',
    pricing: {
      basePrice: 1.50,
      unit: 'piece',
      unitLabel: 'por pieza'
    },
    turnaroundTime: '24 horas',
    includes: [
      'Planchado profesional',
      'Colgado en gancho',
      'Protección de prendas'
    ],
    availableAt: ['san-miguel', 'usulutan', 'lourdes-colon', 'santa-ana'],
    faqs: [
      {
        question: '¿Planchan todo tipo de telas?',
        answer: 'Sí, ajustamos la temperatura según el tipo de tela para un planchado perfecto.'
      },
      {
        question: '¿Puedo pedir solo planchado?',
        answer: 'Sí, puedes traer ropa lavada y solo usar el servicio de planchado.'
      }
    ]
  },
  {
    id: 'tratamientos',
    slug: 'tratamientos',
    name: 'Tratamientos Especiales',
    shortDescription: 'Manchas difíciles, blanqueado y prendas delicadas.',
    fullDescription: 'Tratamientos especializados para manchas difíciles, blanqueado de prendas blancas y cuidado de prendas delicadas.',
    icon: '✨',
    pricing: {
      basePrice: 5.00,
      unit: 'item',
      unitLabel: 'desde'
    },
    turnaroundTime: '24-48 horas',
    includes: [
      'Evaluación de la prenda',
      'Tratamiento especializado',
      'Productos de alta calidad'
    ],
    availableAt: ['san-miguel', 'usulutan', 'lourdes-colon', 'santa-ana'],
    faqs: [
      {
        question: '¿Pueden quitar cualquier mancha?',
        answer: 'Hacemos todo lo posible. Algunas manchas antiguas o de tintes permanentes pueden ser difíciles, pero siempre te damos nuestra mejor evaluación.'
      },
      {
        question: '¿Cobran si no pueden quitar la mancha?',
        answer: 'Si después de evaluar la prenda determinamos que no podemos ayudar, no te cobramos.'
      }
    ]
  },
  {
    id: 'delivery',
    slug: 'delivery',
    name: 'Delivery',
    shortDescription: 'Recogemos y entregamos tu ropa donde estés.',
    fullDescription: 'Servicio de recogida y entrega a domicilio. Agenda por WhatsApp y nos encargamos del resto.',
    icon: '🚚',
    pricing: {
      basePrice: 2.00,
      unit: 'flat',
      unitLabel: 'por viaje'
    },
    turnaroundTime: 'Según disponibilidad',
    includes: [
      'Recogida a domicilio',
      'Entrega a domicilio',
      'Notificación por WhatsApp'
    ],
    availableAt: ['san-miguel', 'usulutan', 'lourdes-colon', 'santa-ana'],
    faqs: [
      {
        question: '¿Cuánto cuesta el delivery?',
        answer: 'El costo es $2.00 por viaje (recogida o entrega). Si pedimos recoger y entregar son $4.00 total.'
      },
      {
        question: '¿Cuáles zonas cubren?',
        answer: 'Cada sucursal tiene su zona de cobertura. Contáctanos por WhatsApp para confirmar si llegamos a tu dirección.'
      },
      {
        question: '¿Hay mínimo para delivery?',
        answer: 'Sí, el mínimo de servicio es $10 para solicitar delivery.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}
