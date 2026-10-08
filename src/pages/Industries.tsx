import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '@/data/industries';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FadeUp } from '@/components/motion/FadeUp';

export const Industries: React.FC = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | C&G Infotech';
  }, []);

  return (
    <main className="py-4 space-y-3">
      {/* HERO BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <div className="max-w-3xl space-y-4">
            <span className="cg-pill-badge">Sector Expertise</span>
            <h1 className="text-hero-title">
              Technology Solutions <br />
              Across Industries.
            </h1>
            <p className="text-[#66635C] text-base md:text-lg leading-relaxed pt-2">
              Custom security, networking, hardware provisioning, and software setups engineered to meet specific industry operational demands.
            </p>
          </div>
        </div>
      </section>

      {/* SECTOR LIST */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <FadeUp>
            <div className="mb-10">
              <span className="cg-pill-badge mb-2">Sectors</span>
              <h2 className="text-section-title">Tailored Infrastructure For Every Domain</h2>
            </div>

            <div className="space-y-8">
              {INDUSTRIES_DATA.map((ind, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div key={ind.id} className="cg-white-card p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#181715] shadow-md border border-black/10">
                          <img
                            src={ind.image}
                            alt={ind.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E65100]">
                          Sector 0{idx + 1}
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#181715]">
                          {ind.name}
                        </h3>

                        <p className="text-sm text-[#66635C] leading-relaxed">
                          {ind.description}
                        </p>

                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#181715]">
                            Primary Deployments:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {ind.keySolutions.map((sol, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#181715]">
                                <CheckCircle2 className="w-4 h-4 text-[#E65100] shrink-0" />
                                <span>{sol}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3">
                          <Link to="/contact" className="btn-primary-orange">
                            <span>Inquire For {ind.name}</span>
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
      <FinalCTA />
    </main>
  );
};
