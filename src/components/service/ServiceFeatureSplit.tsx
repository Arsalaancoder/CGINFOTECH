import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export interface FeatureSplitData {
  heading: string;
  description: string;
  bulletPoints?: string[];
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

interface ServiceFeatureSplitProps {
  data: FeatureSplitData;
}

export const ServiceFeatureSplit: React.FC<ServiceFeatureSplitProps> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="cg-master-canvas py-16 md:py-24 bg-[#F6F2EA] border-y border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
          
          {/* LEFT SIDE: DARK ELEGANT CARD (Exact match to reference card 1) */}
          <div ref={leftRef} className="lg:col-span-6 flex">
            <div className="relative w-full rounded-[32px] bg-[#141414] p-8 sm:p-10 lg:p-12 text-white shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden">
              {/* Subtle orange ambient glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E65100]/20 rounded-full filter blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E65100]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E65100]">
                    {data.badge || 'ABOUT THE SOLUTION'}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.08] font-heading">
                  {data.heading}
                </h2>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                  {data.description}
                </p>

                {/* 2 CTA BUTTONS */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={data.ctaLink || '/get-quote'}
                    className="inline-flex items-center gap-2 bg-[#E65100] hover:bg-[#CF4700] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300"
                  >
                    <span>{data.ctaText || 'Get Started'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full border border-white/20 transition-all duration-300"
                  >
                    <span>Explore Solutions</span>
                  </Link>
                </div>
              </div>

              {/* MINI HIGHLIGHT INSET CARD AT BOTTOM */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-white">
                      Guaranteed Operational SLA
                    </span>
                    <span className="block text-[11px] text-white/70">
                      Rapid breakdown dispatch & continuous backup monitoring
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#E65100] text-white flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: LARGE MODERN IMAGE BLOCK WITH FLOATING STATS OVERLAYS (Exact match to reference card 2) */}
          <div ref={rightRef} className="lg:col-span-6 flex">
            <div className="relative w-full rounded-[32px] overflow-hidden border border-black/10 shadow-2xl bg-[#181715] min-h-[420px] sm:min-h-[480px] flex flex-col justify-end group">
              <img
                src={data.image || '/images/cards/card-cctv-new.jpg'}
                alt={data.heading}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING STATS CARDS AT BOTTOM OF IMAGE */}
              <div className="relative z-20 p-6 sm:p-8 grid grid-cols-2 gap-3 sm:gap-4">
                {/* FLOATING STAT CARD 1 */}
                <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-black/10 shadow-xl text-[#111111]">
                  <span className="block text-2xl sm:text-3xl font-black text-[#E65100] font-heading leading-none mb-1">
                    {data.stat1.value}
                  </span>
                  <span className="block text-[11px] sm:text-xs font-semibold text-[#6E6960] leading-tight">
                    {data.stat1.label}
                  </span>
                  <span className="block text-[9px] font-mono text-[#E65100] font-bold mt-2">
                    ↑ High Reliability
                  </span>
                </div>

                {/* FLOATING STAT CARD 2 */}
                <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-black/10 shadow-xl text-[#111111]">
                  <span className="block text-2xl sm:text-3xl font-black text-[#111111] font-heading leading-none mb-1">
                    {data.stat2.value}
                  </span>
                  <span className="block text-[11px] sm:text-xs font-semibold text-[#6E6960] leading-tight">
                    {data.stat2.label}
                  </span>
                  <span className="block text-[9px] font-mono text-[#6E6960] font-bold mt-2">
                    ↑ Rapid Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
