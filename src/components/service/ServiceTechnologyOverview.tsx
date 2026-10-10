import React, { useRef } from 'react';
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
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TechOverviewItem } from '@/data/services';
import { OrbCard } from '@/components/common/OrbCard';

gsap.registerPlugin(ScrollTrigger);

interface ServiceTechnologyOverviewProps {
  sectionTitle: string;
  sectionSubtitle: string;
  leftTitle: string;
  techItems: TechOverviewItem[];
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
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [techItems] }
  );

  return (
    <section
      id="tech-overview"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 border-b border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#E65100] mb-2 font-mono">
            {sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
            {leftTitle || 'High-Performance Technology Architecture'}
          </h2>
          <p className="text-base sm:text-lg text-[#66635C] mt-3 leading-relaxed font-body">
            {sectionSubtitle}
          </p>
        </div>

        {/* FULL-WIDTH CLEAN TECHNOLOGY CAPABILITIES GRID */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || Shield;
            return (
              <OrbCard
                key={idx}
                variant="light"
                className="p-6 rounded-2xl bg-[#F8F7F4] border border-black/[0.05] group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-black/5 text-[#E65100] flex items-center justify-center font-bold mb-4 group-hover:bg-[#E65100] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] font-heading mb-2 group-hover:text-[#E65100] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66635C] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </OrbCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
