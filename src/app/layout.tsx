import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Lavandería Oriental | Tu Ropa Limpia, Fresca y Cuidada | El Salvador',
  description: 'Servicio de lavandería profesional en El Salvador. 5 ubicaciones: San Miguel, Usulután, Lourdes Colón, Santa Ana, La Unión. Delivery disponible. Franquicias abiertas.',
  keywords: 'lavandería, El Salvador, lavado, secado, edredones, delivery, franquicias, San Miguel, Usulután, Santa Ana',
  openGraph: {
    title: 'Lavandería Oriental | Tu Ropa Limpia, Fresca y Cuidada',
    description: 'Servicio de lavandería profesional en El Salvador. 5 ubicaciones. Delivery disponible.',
    type: 'website',
    locale: 'es_SV',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
