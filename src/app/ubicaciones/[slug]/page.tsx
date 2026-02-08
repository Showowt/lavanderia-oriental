import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { locations, getLocationBySlug } from '@/lib/data/locations';
import { whatsappLinks, WHATSAPP_DISPLAY_NUMBER } from '@/lib/utils/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: 'Ubicación no encontrada | Lavandería Oriental',
    };
  }

  return {
    title: `Lavandería Oriental ${location.name} | Lavado Profesional | El Salvador`,
    description: `Lavandería Oriental en ${location.name}. Lavado por libra $3.25, edredones desde $6.50. Delivery disponible. Horario: Lun-Sáb ${location.hours.weekdays}.`,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const allServices = [
    { id: 'lavado', name: 'Lavado por Libra', icon: '🧺' },
    { id: 'secado', name: 'Secado', icon: '🌀' },
    { id: 'edredones', name: 'Edredones', icon: '🛏️' },
    { id: 'planchado', name: 'Planchado', icon: '👔' },
    { id: 'tratamientos', name: 'Tratamientos Especiales', icon: '✨' },
    { id: 'delivery', name: 'Delivery', icon: '🚚' },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-oriental-text-light hover:text-oriental-blue">
            Inicio
          </Link>
          <span className="mx-2 text-oriental-text-light">&gt;</span>
          <Link href="/ubicaciones" className="text-oriental-text-light hover:text-oriental-blue">
            Ubicaciones
          </Link>
          <span className="mx-2 text-oriental-text-light">&gt;</span>
          <span className="text-oriental-dark">{location.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-oriental-dark mb-2">
            Lavandería Oriental
          </h1>
          <p className="text-2xl text-oriental-blue font-semibold">{location.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="bg-oriental-gray h-64 lg:h-full min-h-[300px] flex items-center justify-center">
            <div className="text-center text-oriental-text-light">
              <span className="text-4xl block mb-2">🗺️</span>
              <p>Mapa de {location.name}</p>
              <p className="text-sm">(Se integrará Google Maps)</p>
            </div>
          </div>

          {/* Info */}
          <div className="bg-white border border-oriental-gray p-6">
            {location.status === 'open' ? (
              <>
                <div className="mb-6">
                  <h2 className="text-sm text-oriental-text-light mb-1">📍 Dirección</h2>
                  <p className="text-oriental-dark font-medium">
                    {location.address}
                    {location.addressLine2 && <><br />{location.addressLine2}</>}
                  </p>
                  <p className="text-oriental-text-light text-sm">
                    {location.city}, El Salvador
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm text-oriental-text-light mb-1">🕐 Horario</h2>
                  <p className="text-oriental-dark">
                    Lunes - Sábado: {location.hours.weekdays}
                    <br />
                    Domingo: {location.hours.sunday}
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm text-oriental-text-light mb-1">📞 Contacto</h2>
                  <p className="text-oriental-dark">
                    WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm text-oriental-text-light mb-1">🚚 Delivery</h2>
                  <p className="text-oriental-dark">
                    {location.deliveryAvailable ? (
                      <span className="text-status-open">✅ Disponible en esta ubicación</span>
                    ) : (
                      <span className="text-status-closed">❌ No disponible</span>
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    href={location.googleMapsUrl}
                    variant="outline"
                    size="lg"
                    external
                    className="w-full"
                  >
                    📍 Cómo Llegar (Google Maps)
                  </Button>
                  <Button
                    href={whatsappLinks.booking}
                    variant="whatsapp"
                    size="lg"
                    external
                    className="w-full"
                  >
                    💬 Contactar por WhatsApp
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Badge variant="soon" className="mb-4">🟡 Próximamente</Badge>
                <h2 className="font-heading text-xl font-semibold text-oriental-dark mb-2">
                  Próxima Apertura en {location.name}
                </h2>
                <p className="text-oriental-text-light mb-6">
                  Estamos trabajando para traer Lavandería Oriental a {location.city}.
                  ¡Mantente atento para más información!
                </p>
                <Button
                  href={whatsappLinks.general}
                  variant="whatsapp"
                  external
                >
                  💬 Recibir Notificación
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Services available */}
        {location.status === 'open' && (
          <div className="bg-oriental-cream p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold text-oriental-dark mb-6">
              Servicios Disponibles en esta Sucursal
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allServices.map((service) => {
                const isAvailable = location.services.includes(service.id);
                return (
                  <div
                    key={service.id}
                    className={`flex items-center gap-2 ${isAvailable ? 'text-oriental-dark' : 'text-oriental-text-light opacity-50'}`}
                  >
                    <span>{isAvailable ? '✅' : '❌'}</span>
                    <span>{service.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
