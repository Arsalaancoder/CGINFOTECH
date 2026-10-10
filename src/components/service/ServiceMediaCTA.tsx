import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceMediaCTAProps {
  badge: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  metrics: { label: string; value: string }[];
}

export const ServiceMediaCTA: React.FC<ServiceMediaCTAProps> = ({
  badge,
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaLink,
  metrics,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef, dependencies: [imageUrl, title] }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F7F5EF] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 border-b border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* LARGE PROMOTIONAL CONTAINER MATCHING REFERENCE SECTION 06 */}
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl overflow-hidden bg-[#0F0F0F] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-white/10"
        >
          {/* BACKGROUND IMAGE WITH DARK GRADIENT OVERLAY */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/40" />

          {/* CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E65100]/20 text-[#FF7A33] border border-[#E65100]/40 font-mono">
                <Zap className="w-3.5 h-3.5 text-[#E65100]" />
                {badge}
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.06]">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed max-w-xl">
                {subtitle}
              </p>

              <div className="pt-4">
                <Link
                  to={ctaLink || '/get-quote'}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#E65100] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#CF4700] hover:scale-[1.02] shadow-xl shadow-[#E65100]/30 group"
                >
                  <span>{ctaText || 'Get a Custom Quote'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT METRICS COUNTERS */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {metric.label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-heading text-white mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#E65100]/20 text-[#E65100] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
