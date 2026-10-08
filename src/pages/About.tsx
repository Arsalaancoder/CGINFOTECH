import React, { useEffect } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { FadeUp } from '@/components/motion/FadeUp';
import { ShieldCheck, Target, Award, CheckCircle2 } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = `About Us | ${COMPANY_INFO.name}`;
  }, []);

  return (
    <main className="py-4 space-y-3">
      {/* ABOUT HERO BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <div className="max-w-3xl space-y-4">
            <span className="cg-pill-badge">About C&G Infotech</span>
            <h1 className="text-hero-title">
              Technology Built For <br />
              Real Business Needs.
            </h1>
            <p className="text-[#66635C] text-base md:text-lg leading-relaxed pt-2">
              {COMPANY_INFO.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <FadeUp>
            <div className="cg-white-card p-6 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="cg-pill-badge">Single Point of Accountability</span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181715]">
                    Integrated Security, IT & Software Under One Roof
                  </h2>
                  <p className="text-[#66635C] text-base leading-relaxed">
                    Founded to eliminate fragmented tech suppliers, C&G Infotech delivers cohesive HD surveillance, enterprise networking architecture, hardware supply, and business software.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#F5F4F0] border border-black/5">
                      <Target className="w-6 h-6 text-[#E65100] mb-2" />
                      <h4 className="text-sm font-bold text-[#181715]">Our Mission</h4>
                      <p className="text-xs text-[#66635C] mt-1">To empower organizations with reliable hardware, zero-downtime networks, and modern software.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F5F4F0] border border-black/5">
                      <Award className="w-6 h-6 text-[#E65100] mb-2" />
                      <h4 className="text-sm font-bold text-[#181715]">How We Work</h4>
                      <p className="text-xs text-[#66635C] mt-1">Transparent engineering, genuine OEM hardware sourcing, and prompt AMC maintenance.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/10 aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
                      alt="C&G Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <FadeUp>
            <div className="mb-8">
              <span className="cg-pill-badge mb-2">Capabilities</span>
              <h2 className="text-section-title">Verified Infrastructure Competencies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_INFO.capabilities.map((cap, idx) => (
                <div key={idx} className="cg-white-card p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#FDEEE9] text-[#E65100] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#181715]">{cap}</h3>
                    <p className="text-xs text-[#66635C] mt-1 leading-relaxed">
                      Delivered with verified engineering standards, skilled technicians, and complete post-deployment SLA support.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </main>
  );
};
