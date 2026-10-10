import React, { useRef } from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProofCardItem } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

interface ServiceProofProps {
  badge: string;
  heading: string;
  subtitle: string;
  cards: ProofCardItem[];
}

export const ServiceProof: React.FC<ServiceProofProps> = ({
  badge,
  heading,
  subtitle,
  cards,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [cards] }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* CENTERED HEADER MATCHING REFERENCE SECTION 05 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E65100] bg-[#E65100]/10 border border-[#E65100]/20 font-mono">
            <Award className="w-3.5 h-3.5" />
            {badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading tracking-tight">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[#66635C] font-body leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3 PROOF CARDS GRID */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#F8F7F4] border border-black/[0.06] flex flex-col justify-between hover:border-[#E65100]/30 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                {/* RATING & TAG */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E65100]">
                    {[...Array(card.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#66635C] font-mono px-2 py-0.5 rounded-full bg-white border border-black/5">
                    {card.tag}
                  </span>
                </div>

                {/* QUOTE & TITLE */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#111111] font-heading group-hover:text-[#E65100] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#66635C] font-body leading-relaxed italic relative z-10">
                    "{card.quote}"
                  </p>
                </div>
              </div>

              {/* AUTHOR INFO */}
              <div className="pt-6 border-t border-black/10 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0">
                  {card.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#111111] font-heading">
                    {card.author}
                  </div>
                  <div className="text-xs text-[#66635C] font-body">
                    {card.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
