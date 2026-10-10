import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Network, Server, Lock, Laptop, Cpu, CheckCircle, Zap, Activity } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export interface WhyChooseCardItem {
  title: string;
  desc: string;
  iconName?: string;
  highlighted?: boolean;
}

interface ServiceWhyChooseProps {
  heading: string;
  subtitle?: string;
  cards: WhyChooseCardItem[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Laptop: <Laptop className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  CheckCircle: <CheckCircle className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
};

export const ServiceWhyChoose: React.FC<ServiceWhyChooseProps> = ({
  heading,
  subtitle,
  cards,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const validCards = cardsRef.current.filter(Boolean);

      gsap.fromTo(
        validCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="cg-master-canvas py-16 md:py-24 bg-[#F6F2EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* SECTION HEADING (Exact match to reference section 4: MY PHILOSOPHY) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E65100]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E65100]">
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight font-heading leading-tight">
            {heading.includes('?') ? heading.replace('?', '') : heading}
            <span className="block text-[#6E6960] font-normal text-2xl sm:text-3xl md:text-4xl mt-1">
              Engineered For SLA Reliability
            </span>
          </h2>

          <p className="text-[#6E6960] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            {subtitle || 'We don’t just deploy hardware; we engineer systems backed by continuous SLA monitoring to guarantee enterprise operational continuity.'}
          </p>
        </div>

        {/* 3-COLUMN CARD GRID (Exact match to reference cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((card, idx) => {
            const icon = card.iconName ? ICON_MAP[card.iconName] || <Shield className="w-6 h-6" /> : <Shield className="w-6 h-6" />;

            return (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group relative rounded-[28px] p-7 sm:p-9 bg-white text-[#111111] border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#E65100]/30 transition-all duration-300 text-center items-center"
                >
                  <div className="space-y-5 flex flex-col items-center">
                    {/* CENTERED ROUND ICON CONTAINER */}
                    <div className="w-16 h-16 rounded-full bg-[#F6F2EA] text-[#E65100] flex items-center justify-center shrink-0 group-hover:bg-[#E65100] group-hover:text-white transition-colors duration-300 border border-black/5 shadow-xs">
                      {icon}
                    </div>

                    {/* CARD TITLE */}
                    <h3 className="text-xl font-bold tracking-tight leading-snug font-heading text-[#111111] group-hover:text-[#E65100] transition-colors">
                      {card.title}
                    </h3>

                    {/* CARD COPY */}
                    <p className="text-xs sm:text-sm text-[#6E6960] leading-relaxed max-w-xs font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* BOTTOM LINK */}
                  <div className="pt-6 mt-4 border-t border-black/5 w-full flex items-center justify-center text-xs font-bold">
                    <Link
                      to="/get-quote"
                      className="inline-flex items-center gap-1.5 text-[#111111] group-hover:text-[#E65100] transition-colors"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
