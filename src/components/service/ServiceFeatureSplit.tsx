import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface FeatureSplitData {
  heading: string;
  description: string;
  bulletPoints: string[];
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  badge: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

interface ServiceFeatureSplitProps {
  data: FeatureSplitData;
}

export const ServiceFeatureSplit: React.FC<ServiceFeatureSplitProps> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const trigger = {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      };

      // Text column fade + y reveal
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: trigger,
          }
        );
      }

      // Image clipPath reveal + scale: inset(0 100% 0 0) -> inset(0 0% 0 0)
      if (imageWrapperRef.current && imgElementRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: trigger,
          }
        );

        gsap.fromTo(
          imgElementRef.current,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: trigger,
          }
        );
      }
    },
    { scope: sectionRef, dependencies: [data] }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F5EF] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-black/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT TEXT COLUMN */}
        <div ref={textColRef} className="lg:col-span-6 space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#E65100] font-mono px-3 py-1 rounded-full bg-[#E65100]/10 border border-[#E65100]/20">
            {data.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading leading-[1.06] tracking-tight">
            {data.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#66635C] font-body leading-relaxed">
            {data.description}
          </p>

          {/* BULLET POINTS */}
          <div className="space-y-3 pt-2">
            {data.bulletPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E65100]/15 text-[#E65100] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base font-medium text-[#111111] font-body">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          {/* STATS STRIP */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/10">
            <div className="p-4 rounded-xl bg-white border border-black/5">
              <div className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading text-[#E65100]">
                {data.stat1.value}
              </div>
              <div className="text-xs font-medium text-[#66635C] font-body mt-0.5 uppercase tracking-wider">
                {data.stat1.label}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-black/5">
              <div className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading text-[#E65100]">
                {data.stat2.value}
              </div>
              <div className="text-xs font-medium text-[#66635C] font-body mt-0.5 uppercase tracking-wider">
                {data.stat2.label}
              </div>
            </div>
          </div>

          {/* CTA LINK */}
          <div className="pt-2">
            <Link
              to={data.ctaLink || '/get-quote'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#E65100] text-white font-semibold text-sm transition-all duration-300 shadow-md group"
            >
              <span>{data.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE COLUMN WITH REVEAL ANIMATION */}
        <div className="lg:col-span-6">
          <div
            ref={imageWrapperRef}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden bg-neutral-200 shadow-2xl border border-black/10"
          >
            <img
              ref={imgElementRef}
              src={data.image}
              alt={data.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
