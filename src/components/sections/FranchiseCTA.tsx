'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function FranchiseCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const zones = [
    'San Salvador',
    'La Libertad',
    'Sonsonate',
    'Ahuachapán',
    'Otra zona',
  ];

  return (
    <section className="py-16 md:py-20 bg-oriental-blue-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              ¿Quieres tu Propia
              <br />
              Lavandería Oriental?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Únete a esta marca salvadoreña. Franquicias disponibles con modelo de negocio probado y en expansión.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-oriental-yellow">✅</span>
                Modelo de negocio probado
              </li>
              <li className="flex items-center gap-3">
                <span className="text-oriental-yellow">📚</span>
                Capacitación completa incluida
              </li>
              <li className="flex items-center gap-3">
                <span className="text-oriental-yellow">🛠️</span>
                Equipos y proveedores garantizados
              </li>
              <li className="flex items-center gap-3">
                <span className="text-oriental-yellow">📈</span>
                Soporte continuo y marketing
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white p-8">
            <h3 className="font-heading text-xl font-semibold text-oriental-dark mb-6">
              Solicita Información
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <span className="text-4xl block mb-4">✅</span>
                <h4 className="font-heading text-xl font-semibold text-oriental-dark mb-2">
                  ¡Solicitud Enviada!
                </h4>
                <p className="text-oriental-text-light">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo *"
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono / WhatsApp *"
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <select
                    required
                    className="w-full px-4 py-3 border border-oriental-gray focus:border-oriental-blue focus:outline-none bg-white"
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                  >
                    <option value="">¿En qué zona te interesa?</option>
                    {zones.map((zone) => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
