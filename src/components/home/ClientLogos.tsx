import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ClientLogo {
  id: string;
  name: string;
  src: string;
  type: 'square' | 'wide';
}

const ROW_1_SINGLE: ClientLogo[] = [
  { id: 'drdo-1', name: 'DRDO', src: '/images/clients/drdo.png', type: 'square' },
  { id: 'indiar-1', name: 'Indiar Solutions', src: '/images/clients/indiar.png', type: 'wide' },
  { id: 'analytics-1', name: 'Analytics Solutions', src: '/images/clients/analytics.png', type: 'wide' },
  { id: 'deepthi-1', name: 'Deepthi School of Nursing', src: '/images/clients/deepthi.png', type: 'wide' },
  { id: 'crescent-1', name: 'Crescent Academy of Skill Development', src: '/images/clients/crescent.png', type: 'wide' },
];

const ROW_2_SINGLE: ClientLogo[] = [
  { id: 'army-2', name: 'Indian Army / Defence Organization', src: '/images/clients/army.png', type: 'square' },
  { id: 'orange-2', name: 'Orange Group of Nursing & Paramedical Colleges', src: '/images/clients/orange_nursing.png', type: 'square' },
  { id: 'gnc-2', name: 'GNC', src: '/images/clients/gnc.png', type: 'wide' },
  { id: 'analytics-2', name: 'Analytics Solutions', src: '/images/clients/analytics.png', type: 'wide' },
  { id: 'crescent-med-2', name: 'Crescent Academy Medical Coding', src: '/images/clients/crescent.png', type: 'wide' },
];

// Duplicate for seamless 100% infinite marquee loop
const ROW_1_ITEMS = [...ROW_1_SINGLE, ...ROW_1_SINGLE, ...ROW_1_SINGLE, ...ROW_1_SINGLE];
const ROW_2_ITEMS = [...ROW_2_SINGLE, ...ROW_2_SINGLE, ...ROW_2_SINGLE, ...ROW_2_SINGLE];

export const ClientLogos: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const tween1 = useRef<gsap.core.Tween | null>(null);
  const tween2 = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // ENTRY ANIMATION (Heading & Panel reveal)
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      if (headingRef.current) {
        entryTl.from(headingRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      if (panelRef.current) {
        entryTl.from(
          panelRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }

      // CONTINUOUS GSAP MARQUEE ANIMATION
      if (row1Ref.current) {
        tween1.current = gsap.to(row1Ref.current, {
          xPercent: -50,
          duration: 32,
          ease: 'none',
          repeat: -1,
        });
      }

      if (row2Ref.current) {
        tween2.current = gsap.fromTo(
          row2Ref.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            duration: 36,
            ease: 'none',
            repeat: -1,
          }
        );
      }

      return () => {
        tween1.current?.kill();
        tween2.current?.kill();
        entryTl.kill();
      };
    },
    { scope: sectionRef }
  );

  const handleMouseEnter = () => {
    tween1.current?.pause();
    tween2.current?.pause();
  };

  const handleMouseLeave = () => {
    tween1.current?.play();
    tween2.current?.play();
  };

  return (
    <section
      ref={sectionRef}
      className="cg-master-canvas relative w-full bg-[#f3f2ee] py-12 md:py-16 overflow-hidden select-none"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* CENTERED SECTION HEADING */}
        <h2
          ref={headingRef}
          className="text-center font-semibold text-[26px] sm:text-[32px] md:text-[36px] text-[#111111] tracking-tight mb-8 md:mb-10"
        >
          Some of our valuable clients
        </h2>

        {/* MAIN CLIENT LOGO PANEL */}
        <div
          ref={panelRef}
          className="client-panel relative bg-[#f8f8f6] rounded-[18px] py-8 md:py-10 border border-black/[0.04] overflow-hidden shadow-xs"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-0.5">
            
            {/* ROW 1: MARQUEE LEFT */}
            <div className="overflow-hidden w-full flex">
              <div ref={row1Ref} className="flex shrink-0">
                {ROW_1_ITEMS.map((logo, idx) => (
                  <div
                    key={`row1-${logo.id}-${idx}`}
                    className="logo-cell w-[160px] md:w-[220px] h-[95px] md:h-[110px] bg-white flex items-center justify-center p-4 md:p-6 border-r border-b border-black/[0.05] shrink-0 transition-transform duration-300 hover:scale-[1.04] hover:z-10 relative cursor-pointer"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      title={logo.name}
                      className={`w-auto h-auto object-contain object-center transition-opacity duration-300 hover:opacity-100 opacity-90 ${
                        logo.type === 'square'
                          ? 'max-w-[65px] md:max-w-[85px] max-h-[65px] md:max-h-[80px]'
                          : 'max-w-[130px] md:max-w-[175px] max-h-[48px] md:max-h-[60px]'
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: MARQUEE RIGHT */}
            <div className="overflow-hidden w-full flex">
              <div ref={row2Ref} className="flex shrink-0">
                {ROW_2_ITEMS.map((logo, idx) => (
                  <div
                    key={`row2-${logo.id}-${idx}`}
                    className="logo-cell w-[160px] md:w-[220px] h-[95px] md:h-[110px] bg-white flex items-center justify-center p-4 md:p-6 border-r border-b border-black/[0.05] shrink-0 transition-transform duration-300 hover:scale-[1.04] hover:z-10 relative cursor-pointer"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      title={logo.name}
                      className={`w-auto h-auto object-contain object-center transition-opacity duration-300 hover:opacity-100 opacity-90 ${
                        logo.type === 'square'
                          ? 'max-w-[65px] md:max-w-[85px] max-h-[65px] md:max-h-[80px]'
                          : 'max-w-[130px] md:max-w-[175px] max-h-[48px] md:max-h-[60px]'
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
