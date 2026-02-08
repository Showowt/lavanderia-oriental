export interface Location {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  addressLine2?: string;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  status: 'open' | 'closed' | 'coming_soon';
  deliveryAvailable: boolean;
  services: string[];
  icon: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const locations: Location[] = [
  {
    id: 'san-miguel',
    slug: 'san-miguel',
    name: 'San Miguel',
    city: 'San Miguel',
    address: 'Col. Ciudad Real C. Elizabeth',
    addressLine2: 'Lote #2',
    phone: '+503 7947-5950',
    whatsapp: '50379475950',
    googleMapsUrl: 'https://maps.google.com/?q=Col.+Ciudad+Real+C.+Elizabeth+Lote+2+San+Miguel+El+Salvador',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.123!2d-88.1833!3d13.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI5JzAwLjAiTiA4OMKwMTEnMDAuMCJX!5e0!3m2!1sen!2ssv!4v1234567890',
    hours: {
      weekdays: '7:00am - 6:00pm',
      saturday: '7:00am - 6:00pm',
      sunday: 'Cerrado'
    },
    status: 'open',
    deliveryAvailable: true,
    services: ['lavado', 'secado', 'edredones', 'planchado', 'tratamientos', 'delivery'],
    icon: '🏙️',
    coordinates: {
      lat: 13.4833,
      lng: -88.1833
    }
  },
  {
    id: 'usulutan',
    slug: 'usulutan',
    name: 'Usulután',
    city: 'Usulután',
    address: 'Calle Dr. Federico Penado',
    addressLine2: 'Parada los Pinos',
    phone: '+503 7947-5950',
    whatsapp: '50379475950',
    googleMapsUrl: 'https://maps.google.com/?q=Calle+Dr.+Federico+Penado+Parada+los+Pinos+Usulutan+El+Salvador',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.123!2d-88.4500!3d13.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIxJzAwLjAiTiA4OMKwMjcnMDAuMCJX!5e0!3m2!1sen!2ssv!4v1234567890',
    hours: {
      weekdays: '7:00am - 6:00pm',
      saturday: '7:00am - 6:00pm',
      sunday: 'Cerrado'
    },
    status: 'open',
    deliveryAvailable: true,
    services: ['lavado', 'secado', 'edredones', 'planchado', 'tratamientos', 'delivery'],
    icon: '🌿',
    coordinates: {
      lat: 13.3500,
      lng: -88.4500
    }
  },
  {
    id: 'lourdes-colon',
    slug: 'lourdes-colon',
    name: 'Lourdes Colón',
    city: 'La Libertad',
    address: '7a Calle Oriente',
    addressLine2: 'Atrás de Metrocentro',
    phone: '+503 7947-5950',
    whatsapp: '50379475950',
    googleMapsUrl: 'https://maps.google.com/?q=7a+Calle+Oriente+Lourdes+Colon+La+Libertad+El+Salvador',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.123!2d-89.2833!3d13.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQxJzAwLjAiTiA4OcKwMTcnMDAuMCJX!5e0!3m2!1sen!2ssv!4v1234567890',
    hours: {
      weekdays: '7:00am - 6:00pm',
      saturday: '7:00am - 6:00pm',
      sunday: 'Cerrado'
    },
    status: 'open',
    deliveryAvailable: true,
    services: ['lavado', 'secado', 'edredones', 'planchado', 'tratamientos', 'delivery'],
    icon: '🏛️',
    coordinates: {
      lat: 13.6833,
      lng: -89.2833
    }
  },
  {
    id: 'santa-ana',
    slug: 'santa-ana',
    name: 'Santa Ana',
    city: 'Santa Ana',
    address: '25a calle pte Plaza Lily',
    addressLine2: 'Antes de PNC',
    phone: '+503 7947-5950',
    whatsapp: '50379475950',
    googleMapsUrl: 'https://maps.google.com/?q=25a+calle+pte+Plaza+Lily+Santa+Ana+El+Salvador',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.123!2d-89.5500!3d13.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU5JzAwLjAiTiA4OcKwMzMnMDAuMCJX!5e0!3m2!1sen!2ssv!4v1234567890',
    hours: {
      weekdays: '7:00am - 6:00pm',
      saturday: '7:00am - 6:00pm',
      sunday: 'Cerrado'
    },
    status: 'open',
    deliveryAvailable: true,
    services: ['lavado', 'secado', 'edredones', 'planchado', 'tratamientos', 'delivery'],
    icon: '⛰️',
    coordinates: {
      lat: 13.9833,
      lng: -89.5500
    }
  },
  {
    id: 'la-union',
    slug: 'la-union',
    name: 'La Unión',
    city: 'La Unión',
    address: 'Próximamente',
    phone: '+503 7947-5950',
    whatsapp: '50379475950',
    googleMapsUrl: 'https://maps.google.com/?q=La+Union+El+Salvador',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.123!2d-87.8500!3d13.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIwJzAwLjAiTiA4N8KwNTEnMDAuMCJX!5e0!3m2!1sen!2ssv!4v1234567890',
    hours: {
      weekdays: 'Próximamente',
      saturday: 'Próximamente',
      sunday: 'Próximamente'
    },
    status: 'coming_soon',
    deliveryAvailable: false,
    services: [],
    icon: '🌊',
    coordinates: {
      lat: 13.3333,
      lng: -87.8500
    }
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(location => location.slug === slug);
}

export function getOpenLocations(): Location[] {
  return locations.filter(location => location.status === 'open');
}
