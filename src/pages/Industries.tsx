import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '@/data/industries';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FadeUp } from '@/components/motion/FadeUp';
import { IndustriesServed } from '@/components/home/IndustriesServed';

export const Industries: React.FC = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | C&G Infotech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#F6F2EA] overflow-hidden">
      {/* 01. MAIN FEATURED INDUSTRIES GRID (MATCHING MASTER REFERENCE DESIGN) */}
      <IndustriesServed />

      {/* 02. DETAILED DEPLOYMENT BREAKDOWN PER SECTOR */}
      <section className="cg-master-canvas py-16 md:py-24 bg-white border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#111111] bg-[#F0EEE8] border border-black/10 shadow-2xs uppercase">
                SECTOR ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-heading leading-tight">
                Tailored Deployment Specifications
              </h2>
              <p className="text-[#6E6960] text-sm sm:text-base leading-relaxed">
                Detailed overview of primary technology deployments engineered by C&G Infotech across commercial sectors.
              </p>
            </div>

            <div className="space-y-8">
              {INDUSTRIES_DATA.map((ind, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div key={ind.id} className="bg-[#F9F8F5] rounded-[32px] p-6 sm:p-8 md:p-10 border border-black/[0.08] shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="rounded-[24px] overflow-hidden aspect-[16/10] bg-[#111111] shadow-md border border-black/10">
                          <img
                            src={ind.image}
                            alt={ind.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E65100]">
                            SECTOR 0{idx + 1}
                          </span>
                          <span className="w-6 h-[1.5px] bg-[#E65100]" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-heading">
                          {ind.name}
                        </h3>

                        <p className="text-sm text-[#6E6960] leading-relaxed">
                          {ind.description}
                        </p>

                        <div className="space-y-2.5 pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                            Key Engineering Deployments:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {ind.keySolutions.map((sol, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                                <CheckCircle2 className="w-4 h-4 text-[#E65100] shrink-0" />
                                <span>{sol}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Link to="/get-quote" className="btn-primary-orange !h-[44px] !px-6 !text-xs">
                            <span>Request {ind.name} Proposal</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="py-12 bg-[#F6F2EA] px-3 sm:px-6 lg:px-8">
        <FinalCTA />
      </div>
    </main>
  );
};
