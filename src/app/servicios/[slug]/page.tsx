import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Accordion from '@/components/ui/Accordion';
import WhatsAppCTA from '@/components/sections/WhatsAppCTA';
import { services, getServiceBySlug } from '@/lib/data/services';
import { whatsappLinks } from '@/lib/utils/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | Lavandería Oriental',
    };
  }

  return {
    title: `${service.name} | Lavandería Oriental El Salvador`,
    description: service.fullDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link href="/" className="text-oriental-text-light hover:text-oriental-blue">
              Inicio
            </Link>
            <span className="mx-2 text-oriental-text-light">&gt;</span>
            <Link href="/servicios" className="text-oriental-text-light hover:text-oriental-blue">
              Servicios
            </Link>
            <span className="mx-2 text-oriental-text-light">&gt;</span>
            <span className="text-oriental-dark">{service.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span className="text-5xl block mb-4">{service.icon}</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-oriental-dark mb-4">
              {service.name}
            </h1>
            <p className="text-oriental-text-light text-lg">
              {service.fullDescription}
            </p>
          </div>

          {/* Pricing table */}
          <Card className="mb-8">
            <h2 className="font-heading text-xl font-semibold text-oriental-dark mb-4">
              {service.pricing.variations ? 'Tabla de Precios' : 'Precio'}
            </h2>
            {service.pricing.variations ? (
              <div className="border border-oriental-gray">
                {service.pricing.variations.map((variation, index) => (
                  <div
                    key={variation.name}
                    className={`flex justify-between items-center p-4 ${
                      index !== service.pricing.variations!.length - 1 ? 'border-b border-oriental-gray' : ''
                    }`}
                  >
                    <span className="text-oriental-text">{variation.name}</span>
                    <span className="font-semibold text-oriental-blue">
                      ${variation.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-2xl font-bold text-oriental-blue">
                ${service.pricing.basePrice.toFixed(2)}
                {service.pricing.unit === 'lb' && ' por libra'}
                {service.pricing.unit === 'min' && ' por 10 minutos'}
                {service.pricing.unit === 'piece' && ' por pieza'}
                {service.pricing.unit === 'flat' && ' por viaje'}
              </p>
            )}
          </Card>

          {/* What's included */}
          <div className="mb-8">
            <h2 className="font-heading text-xl font-semibold text-oriental-dark mb-4">
              ✅ Incluye:
            </h2>
            <ul className="space-y-2">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-oriental-text-light">
                  <span className="text-oriental-blue">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Turnaround time */}
          <div className="mb-8 p-4 bg-oriental-cream">
            <p className="flex items-center gap-2">
              <span>⏱️</span>
              <strong>Tiempo de entrega:</strong> {service.turnaroundTime}
            </p>
          </div>

          {/* B2B callout for edredones */}
          {service.slug === 'edredones' && (
            <Card className="mb-8 bg-oriental-blue-dark text-white">
              <h3 className="font-heading text-lg font-semibold mb-2">
                💼 ¿Negocio de Hospedaje?
              </h3>
              <p className="text-white/80 mb-4">
                Ofrecemos precios especiales para AirBnB, hoteles y hospedajes con servicio recurrente.
                Contáctanos para una cotización personalizada.
              </p>
              <Button href={whatsappLinks.businessQuote} variant="secondary" external>
                💬 Cotización para Negocios
              </Button>
            </Card>
          )}

          {/* CTA */}
          <div className="mb-12">
            <Button
              href={whatsappLinks[service.slug as keyof typeof whatsappLinks] || whatsappLinks.booking}
              variant="whatsapp"
              size="lg"
              external
              className="w-full md:w-auto"
            >
              💬 Agendar {service.name} por WhatsApp
            </Button>
          </div>

          {/* FAQs */}
          {service.faqs.length > 0 && (
            <div>
              <h2 className="font-heading text-xl font-semibold text-oriental-dark mb-4">
                Preguntas Frecuentes
              </h2>
              <Accordion items={service.faqs} />
            </div>
          )}
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
