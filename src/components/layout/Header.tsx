'use client';

import { useState } from 'react';
import Link from 'next/link';
import { whatsappLinks, WHATSAPP_DISPLAY_NUMBER } from '@/lib/utils/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-oriental-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🧺</span>
            <span className="font-heading font-bold text-oriental-blue text-lg">
              Lavandería Oriental
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-oriental-text hover:text-oriental-blue transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 bg-white border border-oriental-gray min-w-48 py-2 transition-all ${
                  servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/servicios" className="block px-4 py-2 hover:bg-oriental-cream">
                  Todos los Servicios
                </Link>
                <Link href="/servicios/lavado" className="block px-4 py-2 hover:bg-oriental-cream">
                  Lavado por Libra
                </Link>
                <Link href="/servicios/secado" className="block px-4 py-2 hover:bg-oriental-cream">
                  Secado
                </Link>
                <Link href="/servicios/edredones" className="block px-4 py-2 hover:bg-oriental-cream">
                  Edredones
                </Link>
                <Link href="/servicios/planchado" className="block px-4 py-2 hover:bg-oriental-cream">
                  Planchado
                </Link>
                <Link href="/servicios/tratamientos" className="block px-4 py-2 hover:bg-oriental-cream">
                  Tratamientos
                </Link>
                <Link href="/servicios/delivery" className="block px-4 py-2 hover:bg-oriental-cream">
                  Delivery
                </Link>
              </div>
            </div>

            <Link href="/ubicaciones" className="text-oriental-text hover:text-oriental-blue transition-colors">
              Ubicaciones
            </Link>
            <Link href="/franquicias" className="text-oriental-text hover:text-oriental-blue transition-colors">
              Franquicias
            </Link>
            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 hover:bg-[#128C7E] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hidden lg:inline">{WHATSAPP_DISPLAY_NUMBER}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white z-40 transition-transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4">
          <div className="mb-4">
            <p className="text-sm text-oriental-text-light mb-2">Servicios</p>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/servicios" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Todos los Servicios
              </Link>
              <Link href="/servicios/lavado" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Lavado por Libra
              </Link>
              <Link href="/servicios/secado" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Secado
              </Link>
              <Link href="/servicios/edredones" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Edredones
              </Link>
              <Link href="/servicios/planchado" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Planchado
              </Link>
              <Link href="/servicios/tratamientos" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Tratamientos
              </Link>
              <Link href="/servicios/delivery" className="py-2 text-oriental-text" onClick={() => setMobileMenuOpen(false)}>
                Delivery
              </Link>
            </div>
          </div>
          <Link
            href="/ubicaciones"
            className="py-3 text-oriental-text border-b border-oriental-gray"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ubicaciones
          </Link>
          <Link
            href="/franquicias"
            className="py-3 text-oriental-text border-b border-oriental-gray"
            onClick={() => setMobileMenuOpen(false)}
          >
            Franquicias
          </Link>
          <Link
            href="/como-funciona"
            className="py-3 text-oriental-text border-b border-oriental-gray"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cómo Funciona
          </Link>
          <Link
            href="/preguntas-frecuentes"
            className="py-3 text-oriental-text border-b border-oriental-gray"
            onClick={() => setMobileMenuOpen(false)}
          >
            Preguntas Frecuentes
          </Link>
          <a
            href={whatsappLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp {WHATSAPP_DISPLAY_NUMBER}
          </a>
        </nav>
      </div>
    </header>
  );
}
