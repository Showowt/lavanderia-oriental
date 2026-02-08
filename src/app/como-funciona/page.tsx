import { Metadata } from 'next';
import SectionTag from '@/components/ui/SectionTag';
import Button from '@/components/ui/Button';
import WhatsAppCTA from '@/components/sections/WhatsAppCTA';
import { whatsappLinks } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Cómo Funciona | Lavandería Oriental',
  description: 'Así de fácil es usar Lavandería Oriental. Agenda, lavamos, entregamos. Tu ropa limpia sin complicaciones.',
};

const steps = [
  {
    number: '1',
    title: 'Agenda tu Lavada',
    description: 'Escríbenos por WhatsApp o visita cualquier sucursal. Nuestro equipo te atenderá al instante.',
    details: [
      'Atención inmediata por WhatsApp',
      'AI concierge disponible 24/7',
      '5 sucursales para servirte',
    ],
    icon: '📱',
  },
  {
    number: '2',
    title: 'Entrega tu Ropa',
    description: 'Lleva tu ropa a cualquier sucursal o solicita que la recojamos a domicilio.',
    details: [
      'Pesamos tu ropa al recibirla',
      'Te damos presupuesto inmediato',
      'Separamos por colores y tipo de tela',
    ],
    icon: '👕',
  },
  {
    number: '3',
    title: 'Lavamos con Cuidado',
    description: 'Usamos equipos industriales y productos premium para cuidar tu ropa.',
    details: [
      'Detergentes hipoalergénicos',
      'Suavizante de calidad',
      'Control de temperatura',
    ],
    icon: '🧺',
  },
  {
    number: '4',
    title: 'Recibe tu Ropa',
    description: 'Recoge en sucursal o te la llevamos. Tu ropa limpia, fresca y cuidada.',
    details: [
      'Doblado incluido',
      'Notificación por WhatsApp',
      'Delivery disponible',
    ],
    icon: '✨',
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTag>Cómo Funciona</SectionTag>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-oriental-dark mb-4">
              Tu Ropa Limpia en
              <br />
              <span className="text-oriental-blue">4 Simples Pasos</span>
            </h1>
            <p className="text-oriental-text-light text-lg max-w-2xl mx-auto">
              En Lavandería Oriental hacemos que lavar tu ropa sea lo más fácil posible.
              Así es como funciona:
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number and icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-oriental-blue text-white flex flex-col items-center justify-center">
                    <span className="text-3xl mb-1">{step.icon}</span>
                    <span className="text-sm font-bold">Paso {step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-bold text-oriental-dark mb-3">
                    {step.title}
                  </h2>
                  <p className="text-oriental-text-light mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-oriental-text">
                        <span className="text-oriental-blue">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button href={whatsappLinks.booking} variant="whatsapp" size="lg" external>
              💬 ¡Agenda tu Primera Lavada!
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
