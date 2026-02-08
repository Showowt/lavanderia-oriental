import Link from 'next/link';
import SectionTag from '@/components/ui/SectionTag';
import Card from '@/components/ui/Card';
import { services } from '@/lib/data/services';

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTag>Nuestros Servicios</SectionTag>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-oriental-dark mb-4">
            Todo lo que tu Ropa Necesita
          </h2>
          <p className="text-oriental-text-light text-lg max-w-2xl mx-auto">
            Servicios profesionales con equipos de última generación
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={`/servicios/${service.slug}`}>
              <Card hover className="h-full">
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-oriental-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-oriental-text-light text-sm mb-4">
                  {service.shortDescription}
                </p>
                <p className="text-oriental-blue font-semibold">
                  {service.pricing.unitLabel === 'desde' ? 'Desde ' : ''}
                  ${service.pricing.basePrice.toFixed(2)}
                  {service.pricing.unit === 'lb' && '/lb'}
                  {service.pricing.unit === 'min' && '/10min'}
                  {service.pricing.unit === 'piece' && '/pieza'}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
