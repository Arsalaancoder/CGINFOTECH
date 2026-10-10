import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '@/data/services';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FadeUp } from '@/components/motion/FadeUp';
import { OrbCard } from '@/components/common/OrbCard';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services & Solutions | C&G Infotech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-4 space-y-3 bg-[#F6F2EA]">
      {/* HERO BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block !bg-[#F6F2EA]">
          <div className="max-w-3xl space-y-4">
            <span className="cg-pill-badge">Technology Offerings</span>
            <h1 className="text-hero-title">
              Complete Technology Solutions <br />
              Under One Roof.
            </h1>
            <p className="text-[#6E6960] text-base md:text-lg leading-relaxed pt-2">
              Explore our core technology domains engineered to protect, connect, power, and digitize modern business enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="cg-master-canvas">
        <div className="cg-section-block !bg-[#F6F2EA]">
          <FadeUp>
            <div className="mb-10">
              <span className="cg-pill-badge mb-2">Service Catalog</span>
              <h2 className="text-section-title">End-to-End Enterprise Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_DATA.map((srv) => (
                <OrbCard
                  key={srv.id}
                  variant="light"
                  className="cg-white-card p-6 border border-black/[0.08] shadow-xs group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDEEE9] text-[#E65100] flex items-center justify-center font-bold">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#E65100] transition-colors font-heading">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#6E6960] leading-relaxed">
                      {srv.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {srv.techOverview.techItems.slice(0, 4).map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#111111]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100] shrink-0" />
                          <span>{tech.title} — {tech.desc.slice(0, 45)}...</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/5 mt-6">
                    <Link
                      to={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#E65100] hover:underline"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </OrbCard>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="px-3 sm:px-6 lg:px-8">
        <FinalCTA />
      </div>
    </main>
  );
};
