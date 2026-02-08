'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionTag from '@/components/ui/SectionTag';

const benefits = [
  {
    icon: '📈',
    title: 'Modelo Probado',
    description: '5 sucursales exitosas operando',
  },
  {
    icon: '🛠️',
    title: 'Equipos Incluidos',
    description: 'Proveemos todo el equipamiento',
  },
  {
    icon: '📚',
    title: 'Capacitación Completa',
    description: 'Te enseñamos todo el negocio',
  },
  {
    icon: '💰',
    title: 'Retorno Rápido',
    description: 'ROI en 12-18 meses promedio',
  },
];

const includes = [
  'Licencia de marca Lavandería Oriental',
  'Equipos industriales de lavado y secado',
  'Sistema de gestión y punto de venta',
  'Sistema de WhatsApp AI para atención al cliente',
  'Capacitación inicial (2 semanas)',
  'Manual de operaciones completo',
  'Soporte continuo de la franquicia matriz',
  'Materiales de marketing y branding',
  'Acceso a proveedores preferenciales',
];

const zones = [
  { name: 'San Salvador (múltiples zonas)', status: 'available' },
  { name: 'La Libertad', status: 'available' },
  { name: 'Sonsonate', status: 'available' },
  { name: 'Ahuachapán', status: 'available' },
  { name: 'Otras zonas (consultar)', status: 'limited' },
];

export default function FranquiciasPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zone: '',
    budget: '',
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-oriental-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-oriental-dark mb-4">
            Únete a la Familia
            <br />
            <span className="text-oriental-blue">Lavandería Oriental</span>
          </h1>
          <p className="text-oriental-text-light text-lg max-w-2xl mx-auto">
            Franquicias disponibles con modelo de negocio probado y en expansión por todo El Salvador.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTag>¿Por qué Lavandería Oriental?</SectionTag>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <span className="text-4xl block mb-4">{benefit.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-oriental-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-oriental-text-light text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-16 md:py-20 bg-oriental-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-oriental-dark mb-4">
              Inversión
            </h2>
          </div>
          <Card className="text-center p-8">
            <p className="text-2xl font-heading font-bold text-oriental-blue mb-4">
              Inversión inicial desde: $XX,XXX USD
            </p>
            <p className="text-oriental-text-light mb-4">
              (Incluye equipos, instalación, capacitación y marketing inicial)
            </p>
            <p className="text-sm text-oriental-text-light">
              * Los montos exactos se discuten en la llamada de descubrimiento
            </p>
          </Card>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-oriental-dark mb-8 text-center">
            Qué Incluye tu Franquicia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-oriental-cream">
                <span className="text-oriental-blue flex-shrink-0">✅</span>
                <span className="text-oriental-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available zones */}
      <section className="py-16 md:py-20 bg-oriental-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-oriental-dark mb-8 text-center">
            Zonas Disponibles
          </h2>
          <div className="space-y-3">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="flex items-center gap-3 p-4 bg-white"
              >
                <span className={zone.status === 'available' ? 'text-status-open' : 'text-status-soon'}>
                  {zone.status === 'available' ? '🟢' : '🟡'}
                </span>
                <span className="text-oriental-text">{zone.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-oriental-dark mb-8 text-center">
            Solicita Información
          </h2>

          {submitted ? (
            <Card className="text-center py-12">
              <span className="text-5xl block mb-4">✅</span>
              <h3 className="font-heading text-2xl font-semibold text-oriental-dark mb-2">
                ¡Solicitud Enviada!
              </h3>
              <p className="text-oriental-text-light">
                Hemos recibido tu información. Nos pondremos en contacto contigo pronto para agendar una llamada de descubrimiento.
              </p>
            </Card>
          ) : (
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    ¿En qué zona te interesa? *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none bg-white"
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                  >
                    <option value="">Selecciona una zona</option>
                    <option value="San Salvador">San Salvador</option>
                    <option value="La Libertad">La Libertad</option>
                    <option value="Sonsonate">Sonsonate</option>
                    <option value="Ahuachapán">Ahuachapán</option>
                    <option value="Otra">Otra zona</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    ¿Cuál es tu presupuesto de inversión?
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none bg-white"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="<20K">Menos de $20,000</option>
                    <option value="20K-40K">$20,000 - $40,000</option>
                    <option value="40K-60K">$40,000 - $60,000</option>
                    <option value="60K+">Más de $60,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    ¿Tienes experiencia en negocios?
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none bg-white"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="current">Sí, tengo negocio propio actualmente</option>
                    <option value="past">Sí, he tenido negocios antes</option>
                    <option value="none">No, pero quiero emprender</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-oriental-text mb-1">
                    Cuéntanos sobre ti (opcional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                </Button>
                <p className="text-xs text-oriental-text-light text-center">
                  Al enviar, aceptas nuestra política de privacidad.
                </p>
              </form>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
