import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Monitor,
  Maximize2,
  Zap,
  Activity,
  Server,
  Lock,
  Network,
  Wifi,
  Laptop,
  CheckCircle,
  Clock,
  UserCheck,
  Code,
  Globe,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { BenefitDarkItem } from '@/data/services';
import { OrbCard } from '@/components/common/OrbCard';

gsap.registerPlugin(ScrollTrigger);

interface ServiceBenefitsDarkProps {
  badge: string;
  heading: string;
  subtitle: string;
  benefits: BenefitDarkItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Monitor,
  Maximize2,
  Zap,
  Activity,
  Server,
  Lock,
  Network,
  Wifi,
  Laptop,
  CheckCircle,
  Clock,
  UserCheck,
  Code,
  Globe,
  Smartphone,
};

export const ServiceBenefitsDark: React.FC<ServiceBenefitsDarkProps> = ({
  badge,
  heading,
  subtitle,
  benefits,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [benefits] }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#111111] text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* BACKGROUND ORANGE PARALLAX GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E65100]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CENTERED HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E65100]/20 text-[#FF7A33] border border-[#E65100]/30 font-mono">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.08]">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-body leading-relaxed pt-1">
            {subtitle}
          </p>
        </div>

        {/* 3-COLUMN BENEFIT GRID MATCHING REFERENCE SECTION 04 */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {benefits.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || Shield;
            return (
              <OrbCard
                key={idx}
                variant="dark"
                className="p-8 rounded-3xl bg-[#1A1A1A] border border-white/10 group shadow-lg shadow-black/40"
              >
                <div className="space-y-6">
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-[#262626] border border-white/10 text-[#E65100] flex items-center justify-center group-hover:bg-[#E65100] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold font-heading group-hover:text-[#E65100] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* SUBTLE CTA LINK */}
                <div className="pt-8 border-t border-white/10 mt-6">
                  <Link
                    to="/get-quote"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#E65100] transition-colors uppercase tracking-wider font-mono"
                  >
                    <span>{item.linkText || 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </OrbCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
