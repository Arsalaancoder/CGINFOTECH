import React, { useRef } from 'react';
import { Shield, Camera, HardDrive, Monitor, Lock, Cpu, Network, Wifi, Server, Database, Globe, Smartphone, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export interface CapabilityCardData {
  number: string;
  title: string;
  tag: string;
  desc: string;
  iconName?: string;
}

interface ServiceCapabilitiesProps {
  title: string;
  subtitle?: string;
  cards: CapabilityCardData[];
}

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-5 h-5 text-[#E65100]" />,
  HardDrive: <HardDrive className="w-5 h-5 text-[#E65100]" />,
  Monitor: <Monitor className="w-5 h-5 text-[#E65100]" />,
  Lock: <Lock className="w-5 h-5 text-[#E65100]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#E65100]" />,
  Network: <Network className="w-5 h-5 text-[#E65100]" />,
  Wifi: <Wifi className="w-5 h-5 text-[#E65100]" />,
  Server: <Server className="w-5 h-5 text-[#E65100]" />,
  Database: <Database className="w-5 h-5 text-[#E65100]" />,
  Globe: <Globe className="w-5 h-5 text-[#E65100]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#E65100]" />,
};

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({
  title,
  subtitle,
  cards,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        '.capability-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="cg-master-canvas py-16 md:py-24 bg-[#F6F2EA] px-3 sm:px-6 lg:px-8">
      {/* LARGE CONTAINED WHITE CARD (Exact match to reference section 5: EXPERTISE) */}
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] md:rounded-[44px] p-8 sm:p-12 md:p-16 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-12">
        
        {/* EDITORIAL SPLIT HEADER (Left title, Right description) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pb-4 border-b border-black/[0.06]">
          <div className="md:col-span-7 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E65100]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E65100]">
                EXPERTISE & SOLUTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-[#111111] tracking-tight font-heading leading-tight">
              Service-Focused <br />
              <span className="text-[#6E6960] font-normal">Technology Solutions</span>
            </h2>
          </div>

          <div className="md:col-span-5">
            <p className="text-[#6E6960] text-xs sm:text-sm leading-relaxed">
              {subtitle || 'From enterprise hardware deployment to technical infrastructure, we provide the complete technology suite your business needs to stay connected.'}
            </p>
          </div>
        </div>

        {/* 4 HORIZONTAL COMPACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.slice(0, 4).map((card, idx) => {
            const icon = card.iconName ? CAPABILITY_ICONS[card.iconName] || <Shield className="w-5 h-5 text-[#E65100]" /> : <Shield className="w-5 h-5 text-[#E65100]" />;

            return (
              <div
                key={idx}
                className="capability-card group bg-[#F9F8F5] rounded-[24px] p-6 border border-black/[0.06] flex flex-col justify-between space-y-4 hover:bg-[#F3F1EC] hover:border-[#E65100]/30 transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center border border-black/5 shadow-2xs group-hover:bg-[#E65100] group-hover:text-white transition-colors">
                      {icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#E65100] bg-[#E65100]/10 px-3 py-1 rounded-full border border-[#E65100]/20">
                      {card.number || `0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#111111] leading-snug mb-1 font-heading group-hover:text-[#E65100] transition-colors">
                    {card.title}
                  </h3>

                  <span className="inline-block text-[11px] font-semibold text-[#6E6960] uppercase tracking-wider mb-3">
                    {card.tag}
                  </span>

                  <p className="text-xs text-[#6E6960] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
