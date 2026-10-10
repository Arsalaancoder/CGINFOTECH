import React, { useRef } from 'react';
import { Building2, School, Hospital, ShoppingBag, Factory, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export interface IndustryCardData {
  title: string;
  subtitle: string;
  desc: string;
  iconName?: string;
}

interface ServiceIndustriesProps {
  title?: string;
  subtitle?: string;
  cards?: IndustryCardData[];
}

const DEFAULT_CARDS: IndustryCardData[] = [
  {
    title: 'Corporate Offices',
    subtitle: 'Commercial Workspaces',
    desc: 'Integrated access control, high-density Wi-Fi networks, and multi-camera NVR surveillance.',
    iconName: 'Building2',
  },
  {
    title: 'Educational Institutions',
    subtitle: 'Schools & Colleges',
    desc: 'Campus-wide security coverage, biometric staff attendance, and high-bandwidth fiber LANs.',
    iconName: 'School',
  },
  {
    title: 'Hospitals & Clinics',
    subtitle: 'Healthcare Facilities',
    desc: 'Secure patient area monitoring, hardware AMC maintenance, and zero-downtime UPS power.',
    iconName: 'Hospital',
  },
  {
    title: 'Retail & Commercial',
    subtitle: 'Showrooms & Malls',
    desc: 'Smart POS networking, loss prevention CCTV feeds, and visitor management check-in systems.',
    iconName: 'ShoppingBag',
  },
  {
    title: 'Industrial Facilities',
    subtitle: 'Warehouses & Plants',
    desc: 'Long-range PTZ cameras, structured fiber backbones, and ruggedized hardware deployments.',
    iconName: 'Factory',
  },
  {
    title: 'Commercial Real Estate',
    subtitle: 'Tech Parks & Towers',
    desc: 'Lobby visitor registration software, barrier gate automation, and centralized security command.',
    iconName: 'Shield',
  },
];

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-[#E65100]" />,
  School: <School className="w-5 h-5 text-[#E65100]" />,
  Hospital: <Hospital className="w-5 h-5 text-[#E65100]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#E65100]" />,
  Factory: <Factory className="w-5 h-5 text-[#E65100]" />,
  Shield: <Shield className="w-5 h-5 text-[#E65100]" />,
};

export const ServiceIndustries: React.FC<ServiceIndustriesProps> = ({
  title = 'Applications Across Industries',
  subtitle = 'Proven IT and security infrastructure tailored for commercial enterprises, healthcare, education, and retail environments.',
  cards = DEFAULT_CARDS,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        '.industry-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
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
    <section ref={sectionRef} className="cg-master-canvas py-16 md:py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-heading leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#6E6960] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 6 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0, 6).map((card, idx) => {
            const icon = card.iconName ? SECTOR_ICONS[card.iconName] || <Building2 className="w-5 h-5 text-[#E65100]" /> : <Building2 className="w-5 h-5 text-[#E65100]" />;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="industry-card bg-[#F9F8F5] rounded-2xl p-6 border border-black/[0.08] flex flex-col justify-between space-y-4 hover:bg-[#F3F1EC] transition-all duration-300 shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-black/5 shadow-2xs shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#111111] leading-tight font-heading">
                        {card.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#6E6960] uppercase tracking-wider">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6E6960] leading-relaxed pt-1">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#111111]">
                  <Link to="/industries" className="inline-flex items-center gap-1 text-[#E65100] hover:underline">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
