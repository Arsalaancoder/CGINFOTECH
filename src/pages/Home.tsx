import React, { useEffect } from 'react';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { Expertise } from '@/components/home/Expertise';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ClientLogos } from '@/components/home/ClientLogos';
import { Cybersecurity } from '@/components/home/Cybersecurity';
import { ProductsPreview } from '@/components/home/ProductsPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { IndustriesServed } from '@/components/home/IndustriesServed';
import { FinalCTA } from '@/components/home/FinalCTA';
import { COMPANY_INFO } from '@/data/company';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = COMPANY_INFO.meta.title;
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <HeroCarousel />
      <AboutPreview />
      <ClientLogos />
      <Expertise />
      <Cybersecurity />
      <ProductsPreview />
      <WhyChooseUs />
      <ProcessTimeline />
      <IndustriesServed />
      <FinalCTA />
    </main>
  );
};


