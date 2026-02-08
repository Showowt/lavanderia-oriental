'use client';

import { useState } from 'react';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { faqs, faqCategories, getFAQsByCategory } from '@/lib/data/faqs';
import { whatsappLinks } from '@/lib/utils/whatsapp';

export default function PreguntasFrecuentesPage() {
  const [activeCategory, setActiveCategory] = useState('general');

  const categoryFaqs = getFAQsByCategory(activeCategory);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-oriental-dark mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-oriental-text-light text-lg">
            Todo lo que necesitas saber sobre nuestros servicios
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-oriental-blue text-white'
                  : 'bg-oriental-gray text-oriental-text hover:bg-oriental-blue/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="mb-12">
          <Accordion
            items={categoryFaqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </div>

        {/* CTA */}
        <div className="bg-oriental-cream p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-oriental-dark mb-4">
            ¿No encontraste tu respuesta?
          </h2>
          <Button href={whatsappLinks.general} variant="whatsapp" size="lg" external>
            💬 Pregúntanos por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
