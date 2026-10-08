import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '@/data/services';
import type { ServiceItem } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Button } from '@/components/ui/Button';
import { Shield, CheckCircle2, ArrowLeft } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FadeUp } from '@/components/motion/FadeUp';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | C&G Infotech`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="pt-28 lg:pt-36">
      
      {/* HERO SECTION */}
      <section className="bg-[#0B2B25] text-white py-20 lg:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#9FC3B6 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="cg-container relative z-10 space-y-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9FC3B6] hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#397A68]/30 border border-[#9FC3B6]/30 text-[#9FC3B6] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>{service.eyebrow}</span>
          </div>

          <h1 className="text-hero font-extrabold tracking-tight text-white max-w-3xl">
            {service.title}
          </h1>

          <p className="text-lg text-[#9FC3B6] leading-relaxed max-w-2xl">
            {service.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button to="/get-quote" variant="sage" size="lg">
              Get Quote For {service.title}
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Talk To Engineers
            </Button>
          </div>
        </div>
      </section>

      {/* OVERVIEW & DEDICATED VISUAL SLOT */}
      <section className="py-24 bg-white border-b border-[#143D34]/10">
        <div className="cg-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Solution Overview"
              heading={`Enterprise Grade ${service.title}`}
              description={service.fullDescription}
            />

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#397A68]">
                Key Engineering Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1D2522]">
                    <CheckCircle2 className="w-4 h-4 text-[#397A68] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageSlot
              id={service.imageSlotId}
              aspect="aspect-[4/3]"
              label={`${service.title} Technical Visual`}
              className="rounded-3xl shadow-xl border border-[#397A68]/20"
            />
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-[#F6F7F5] border-b border-[#143D34]/10">
        <div className="cg-container space-y-16">
          <SectionHeading
            eyebrow="Key Features"
            heading="Technical Architecture & Features"
            description={`Detailed overview of functional capabilities provided in our ${service.title.toLowerCase()} packages.`}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="cg-card p-8 bg-white rounded-3xl border border-[#143D34]/10 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-extrabold text-[#397A68] bg-[#E9F1EE] px-3 py-1 rounded-md mb-4 inline-block">
                      FEATURE 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#1D2522] mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#68716D] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 bg-white border-b border-[#143D34]/10">
        <div className="cg-container space-y-16">
          <SectionHeading
            eyebrow="Implementation Roadmap"
            heading="Deployment Process"
            description="How our engineers inspect, configure, and hand off your system."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, idx) => (
              <div key={idx} className="cg-card p-6 bg-[#F6F7F5] rounded-2xl border border-[#143D34]/10 space-y-3">
                <span className="text-2xl font-mono font-extrabold text-[#397A68]">
                  {p.step}
                </span>
                <h4 className="text-base font-bold text-[#1D2522]">
                  {p.title}
                </h4>
                <p className="text-xs text-[#68716D] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-24 bg-[#E9F1EE]/60 border-b border-[#143D34]/10">
        <div className="cg-container space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#1D2522]">
              Related Technology Domains
            </h3>
            <Link to="/services" className="text-sm font-bold text-[#397A68] hover:underline">
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="cg-card p-6 bg-white rounded-2xl border border-[#143D34]/10 hover:border-[#397A68] transition-all group"
              >
                <h4 className="text-lg font-bold text-[#1D2522] group-hover:text-[#397A68] mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#68716D] line-clamp-2 mb-4">
                  {rel.shortDescription}
                </p>
                <span className="text-xs font-bold text-[#143D34] group-hover:translate-x-1 inline-block transition-transform">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />

    </div>
  );
};
