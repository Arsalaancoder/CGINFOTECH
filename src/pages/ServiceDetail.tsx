import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '@/data/services';
import { ServiceHero } from '@/components/service/ServiceHero';
import { ServiceTechnologyOverview } from '@/components/service/ServiceTechnologyOverview';
import { ServiceFeatureSplit } from '@/components/service/ServiceFeatureSplit';
import { ServiceBenefitsDark } from '@/components/service/ServiceBenefitsDark';
import { ServiceProof } from '@/components/service/ServiceProof';
import { ServiceMediaCTA } from '@/components/service/ServiceMediaCTA';
import { ServiceFAQ } from '@/components/service/ServiceFAQ';
import { FinalCTA } from '@/components/home/FinalCTA';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch complete service data configuration for current route
  const service = getServiceBySlug(slug || '');

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | C&G Infotech`;
      window.scrollTo(0, 0);
    }
  }, [service, slug]);

  return (
    <main className="w-full overflow-hidden bg-[#FFFFFF]">
      {/* 01. FULL IMAGE HERO (POSITIONED DIRECTLY BELOW EXISTING NAVBAR) */}
      <ServiceHero
        eyebrow={service.heroPill || service.eyebrow}
        title={service.heroTitle || service.title}
        accentText={service.heroAccent}
        shortDescription={service.shortDescription}
        heroImage={service.heroImage}
      />

      {/* 02. TECHNOLOGY & FEATURE OVERVIEW (SECTION 02) */}
      <ServiceTechnologyOverview
        sectionTitle={service.techOverview.sectionTitle}
        sectionSubtitle={service.techOverview.sectionSubtitle}
        leftTitle={service.techOverview.leftTitle}
        techItems={service.techOverview.techItems}
      />

      {/* 03. LARGE ASYMMETRIC IMAGE + TEXT SPLIT (SECTION 03) */}
      <ServiceFeatureSplit data={service.featureSplit} />

      {/* 04. DARK FEATURE SECTION (SECTION 04) */}
      <ServiceBenefitsDark
        badge={service.benefitsDark.badge}
        heading={service.benefitsDark.heading}
        subtitle={service.benefitsDark.subtitle}
        benefits={service.benefitsDark.benefits}
      />

      {/* 05. PROOF / CLIENT EXPERIENCE SECTION (SECTION 05) */}
      <ServiceProof
        badge={service.proof.badge}
        heading={service.proof.heading}
        subtitle={service.proof.subtitle}
        cards={service.proof.cards}
      />

      {/* 06. LARGE PROMOTIONAL VISUAL CTA (SECTION 06) */}
      <ServiceMediaCTA
        badge={service.mediaCTA.badge}
        title={service.mediaCTA.title}
        subtitle={service.mediaCTA.subtitle}
        imageUrl={service.mediaCTA.imageUrl}
        ctaText={service.mediaCTA.ctaText}
        ctaLink={service.mediaCTA.ctaLink}
        metrics={service.mediaCTA.metrics}
      />

      {/* 07. CHAIUI ACCORDION FAQS (SECTION 07) */}
      <ServiceFAQ
        title={`${service.title} FAQs`}
        subtitle={`Find answers to common questions about our ${service.title.toLowerCase()} solutions, site inspections, and maintenance.`}
        faqs={service.faqs}
      />

      {/* 08. FINAL CTA SECTION BEFORE FOOTER */}
      <div className="bg-[#FFFFFF]">
        <FinalCTA />
      </div>
    </main>
  );
};
