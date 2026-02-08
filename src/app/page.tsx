import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import HowItWorks from '@/components/sections/HowItWorks';
import LocationsGrid from '@/components/sections/LocationsGrid';
import FranchiseCTA from '@/components/sections/FranchiseCTA';
import WhatsAppCTA from '@/components/sections/WhatsAppCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <HowItWorks />
      <LocationsGrid />
      <FranchiseCTA />
      <WhatsAppCTA />
    </>
  );
}
