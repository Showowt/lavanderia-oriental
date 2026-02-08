import SectionTag from '@/components/ui/SectionTag';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'AGENDA',
      description: 'Escríbenos por WhatsApp o visita cualquier sucursal',
    },
    {
      number: '2',
      title: 'LAVAMOS',
      description: 'Cuidamos tu ropa con los mejores productos y equipos',
    },
    {
      number: '3',
      title: 'ENTREGAMOS',
      description: 'Recoge en sucursal o te la llevamos a domicilio',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-oriental-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTag>Cómo Funciona</SectionTag>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-oriental-dark mb-4">
            Tan Fácil Como 1, 2, 3
          </h2>
          <p className="text-oriental-text-light text-lg">
            Tu ropa limpia sin complicaciones
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-oriental-blue/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="w-16 h-16 mx-auto mb-6 bg-oriental-blue text-white text-2xl font-heading font-bold flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-oriental-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-oriental-text-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
