import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '@/data/services';
import { ServiceHero } from '@/components/service/ServiceHero';
import { ServiceTrustStrip } from '@/components/service/ServiceTrustStrip';
import { ServiceWhyChoose } from '@/components/service/ServiceWhyChoose';
import { ServiceFeatureSplit } from '@/components/service/ServiceFeatureSplit';
import { ServiceCapabilities } from '@/components/service/ServiceCapabilities';
import { ServiceMediaFeature } from '@/components/service/ServiceMediaFeature';
import { ServiceIndustries } from '@/components/service/ServiceIndustries';
import { ServiceFAQ } from '@/components/service/ServiceFAQ';
import { FinalCTA } from '@/components/home/FinalCTA';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch service data based on current route slug
  const service = getServiceBySlug(slug || '');

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | C&G Infotech`;
      window.scrollTo(0, 0);
    }
  }, [service, slug]);

  return (
    <div className="w-full overflow-hidden bg-[#F6F2EA]">
      {/* 01. HERO SECTION */}
      <ServiceHero
        eyebrow={service.heroPill || service.eyebrow}
        title={service.heroTitle || service.title}
        accentText={service.heroAccent}
        shortDescription={service.shortDescription}
        heroImage={service.heroImage}
      />

      {/* 02. TRUST / CAPABILITY STRIP */}
      <ServiceTrustStrip items={service.trustItems} />

      {/* 03. WHY CHOOSE SECTION (2X3 GRID WITH HIGHLIGHTED FIRST CARD) */}
      <ServiceWhyChoose
        heading={service.whyChooseTitle}
        subtitle={service.whyChooseSubtitle}
        cards={service.whyChooseCards}
      />

      {/* 04. ASYMMETRIC FEATURE / OUTCOME SPLIT */}
      <ServiceFeatureSplit data={service.featureSplit} />

      {/* 05. "EVERYTHING YOU NEED" CAPABILITIES SECTION */}
      <ServiceCapabilities
        title={service.capabilitiesTitle}
        subtitle={service.capabilitiesSubtitle}
        cards={service.capabilityCards}
      />

      {/* 06. LARGE VISUAL / VIDEO FEATURE */}
      <ServiceMediaFeature
        title={service.mediaFeature.title}
        subtitle={service.mediaFeature.subtitle}
        badge={service.mediaFeature.badge}
        imageUrl={service.mediaFeature.imageUrl}
      />

      {/* 07. APPLICATIONS ACROSS INDUSTRIES */}
      <ServiceIndustries
        title="Applications Across Industries"
        subtitle={`Proven ${service.title.toLowerCase()} implementations engineered for commercial offices, healthcare, education, and retail environments.`}
        cards={service.industryCards}
      />

      {/* 08. FREQUENTLY ASKED QUESTIONS */}
      <ServiceFAQ
        title={`${service.title} FAQs`}
        subtitle={`Find answers to common questions about our ${service.title.toLowerCase()} solutions, site inspections, and maintenance.`}
        faqs={service.faqs}
      />

      {/* 09. FINAL CTA SECTION */}
      <div className="py-12 bg-[#F6F2EA] px-3 sm:px-6 lg:px-8">
        <FinalCTA />
      </div>
    </div>
  );
};
