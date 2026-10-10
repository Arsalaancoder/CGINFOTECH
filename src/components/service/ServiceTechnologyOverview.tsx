import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Camera,
  Monitor,
  Server,
  Lock,
  Network,
  Wifi,
  Zap,
  Cpu,
  Laptop,
  CheckCircle,
  Activity,
  UserCheck,
  Code,
  Globe,
  Smartphone,
  Database,
  ArrowUpRight,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TechOverviewItem, SolutionCardItem } from '@/data/services';
import { OrbCard } from '@/components/common/OrbCard';

gsap.registerPlugin(ScrollTrigger);

interface ServiceTechnologyOverviewProps {
  sectionTitle: string;
  sectionSubtitle: string;
  leftTitle: string;
  techItems: TechOverviewItem[];
  rightTitle: string;
  solutions: SolutionCardItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Camera,
  Monitor,
  Server,
  Lock,
  Network,
  Wifi,
  Zap,
  Cpu,
  Laptop,
  CheckCircle,
  Activity,
  UserCheck,
  Code,
  Globe,
  Smartphone,
  Database,
};

export const ServiceTechnologyOverview: React.FC<ServiceTechnologyOverviewProps> = ({
  sectionTitle,
  sectionSubtitle,
  leftTitle,
  techItems,
  rightTitle,
  solutions,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const trigger = {
        trigger: sectionRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      };

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 30 },
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

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: trigger,
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="tech-overview"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 border-b border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-14 lg:mb-16 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#E65100] mb-2 font-mono">
            {sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
            High-Performance Technology Architecture
          </h2>
          <p className="text-base sm:text-lg text-[#66635C] mt-3 leading-relaxed font-body">
            {sectionSubtitle}
          </p>
        </div>

        {/* TWO COLUMN GRID MATCHING REFERENCE SECTION 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: EXPLORE OUR TECHNOLOGY (LIST) */}
          <div ref={leftColRef} className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-[#111111] font-heading border-b border-black/10 pb-4">
              {leftTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {techItems.map((item, idx) => {
                const IconComponent = ICON_MAP[item.iconName] || Shield;
                return (
                  <OrbCard
                    key={idx}
                    variant="light"
                    className="p-5 rounded-2xl bg-[#F8F7F4] border border-black/[0.05] group shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-black/5 text-[#E65100] flex items-center justify-center font-bold mb-3.5 group-hover:bg-[#E65100] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#111111] font-heading mb-1.5 group-hover:text-[#E65100] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#66635C] leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </OrbCard>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: LATEST SOLUTIONS (CARDS WITH IMAGES) */}
          <div ref={rightColRef} className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-[#111111] font-heading border-b border-black/10 pb-4">
              {rightTitle}
            </h3>

            <div className="space-y-6 pt-2">
              {solutions.map((sol, idx) => (
                <OrbCard
                  key={idx}
                  variant="light"
                  className="p-5 rounded-2xl bg-[#F8F7F4] border border-black/[0.05] group shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 bg-neutral-200">
                      <img
                        src={sol.imageUrl}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between space-y-2">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E65100]/10 text-[#E65100] mb-2 font-mono">
                          {sol.tag}
                        </span>
                        <h4 className="text-lg font-bold text-[#111111] font-heading group-hover:text-[#E65100] transition-colors">
                          {sol.title}
                        </h4>
                        <p className="text-xs text-[#66635C] leading-relaxed font-body mt-1">
                          {sol.desc}
                        </p>
                      </div>

                      <div className="pt-2">
                        <Link
                          to="/get-quote"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#E65100] transition-colors"
                        >
                          <span>{sol.linkText || 'Explore Solutions'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </OrbCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
