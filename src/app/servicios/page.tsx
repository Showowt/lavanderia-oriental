import { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import WhatsAppCTA from '@/components/sections/WhatsAppCTA';
import { services } from '@/lib/data/services';
import { whatsappLinks } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Servicios | Lavandería Oriental',
  description: 'Precios transparentes, calidad garantizada. Lavado por libra, secado, edredones, planchado, tratamientos especiales y delivery.',
};

export default function ServiciosPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-oriental-dark mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-oriental-text-light text-lg">
              Precios transparentes, calidad garantizada
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <Card key={service.id} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h2 className="font-heading text-xl font-semibold text-oriental-dark">
                        {service.name}
                      </h2>
                      <span className="text-oriental-blue font-bold text-lg">
                        {service.pricing.unitLabel === 'desde' ? 'Desde ' : ''}
                        ${service.pricing.basePrice.toFixed(2)}
                        {service.pricing.unit === 'lb' && '/lb'}
                        {service.pricing.unit === 'min' && '/10min'}
                        {service.pricing.unit === 'piece' && '/pieza'}
                      </span>
                    </div>
                    <p className="text-oriental-text-light mb-4">
                      {service.fullDescription}
                    </p>
                    {service.pricing.variations && (
                      <div className="text-sm text-oriental-text-light mb-4">
                        {service.pricing.variations.slice(0, 4).map((v, i) => (
                          <span key={v.name}>
                            {v.name}: ${v.price.toFixed(2)}
                            {i < 3 && ' | '}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/servicios/${service.slug}`}>
                        <Button variant="outline" size="sm">
                          Ver Detalles →
                        </Button>
                      </Link>
                      <Button
                        href={whatsappLinks[service.slug as keyof typeof whatsappLinks] || whatsappLinks.quote}
                        variant="whatsapp"
                        size="sm"
                        external
                      >
                        💬 Cotizar por WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
