import Link from 'next/link';
import SectionTag from '@/components/ui/SectionTag';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { locations } from '@/lib/data/locations';

export default function LocationsGrid() {
  return (
    <section id="ubicaciones" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTag>Nuestras Sucursales</SectionTag>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-oriental-dark mb-4">
            Estamos Cerca de Ti
          </h2>
          <p className="text-oriental-text-light text-lg">
            5 ubicaciones estratégicas en El Salvador
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="relative">
              <span className="text-3xl block mb-3">{location.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-oriental-dark mb-2">
                {location.name}
              </h3>
              <p className="text-oriental-text-light text-sm mb-1">
                {location.address}
              </p>
              {location.addressLine2 && (
                <p className="text-oriental-text-light text-sm mb-4">
                  {location.addressLine2}
                </p>
              )}

              {location.status === 'open' && (
                <>
                  <p className="text-sm text-oriental-text-light mb-4">
                    Lun-Sáb: {location.hours.weekdays}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Badge variant="open">Abierto</Badge>
                    <div className="flex gap-2 mt-2">
                      <Button
                        href={location.googleMapsUrl}
                        variant="outline"
                        size="sm"
                        external
                        className="flex-1"
                      >
                        📍 Llegar
                      </Button>
                      <Link href={`/ubicaciones/${location.slug}`} className="flex-1">
                        <Button variant="primary" size="sm" className="w-full">
                          Detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {location.status === 'coming_soon' && (
                <div className="mt-4">
                  <Badge variant="soon">Próximamente</Badge>
                  <Link href={`/ubicaciones/${location.slug}`} className="block mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      Más Info
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
