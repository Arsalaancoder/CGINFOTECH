import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Lock, Fingerprint, Server, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Cybersecurity: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });

        // Phase 1: Section Heading Lines Reveal
        tl.from('.protect-heading-line', {
          yPercent: 110,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: 'power4.out',
        });

        // Phase 2: Main White Panel Reveal
        tl.from(
          '.protect-panel',
          {
            y: 80,
            opacity: 0,
            scale: 0.97,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.45'
        );

        // Phase 3: Panel Intro Text Fade In
        tl.from(
          '.protect-panel-intro',
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.5'
        );

        // Phase 4: Cards Sequential Placement Reveal
        const cardConfigs = [
          { selector: '.protect-card-1', fromY: 70, fromRot: -5 },
          { selector: '.protect-card-2', fromY: 90, fromRot: 4 },
          { selector: '.protect-card-3', fromY: 70, fromRot: -4 },
          { selector: '.protect-card-4', fromY: 85, fromRot: 5 },
        ];

        cardConfigs.forEach((c, idx) => {
          tl.from(
            c.selector,
            {
              y: c.fromY,
              rotation: c.fromRot,
              opacity: 0,
              scale: 0.94,
              duration: 0.85,
              ease: 'power3.out',
            },
            idx === 0 ? '-=0.3' : '-=0.68'
          );
        });

        // Subtle Parallax Effect on Scroll
        gsap.to('.protect-card-1', {
          y: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to('.protect-card-2', {
          y: -28,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to('.protect-card-3', {
          y: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to('.protect-card-4', {
          y: -16,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="cg-master-canvas relative w-full bg-[#161C18] text-white py-16 md:py-24 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 space-y-10 md:space-y-14">
        
        {/* TOP SECTION INTRO / HEADING */}
        <div className="space-y-4">
          <div className="overflow-hidden">
            <span className="protect-heading-line inline-block text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-[#A3B19B]">
              C&G INFOTECH / INFRASTRUCTURE SECURITY
            </span>
          </div>

          <div className="overflow-hidden">
            <h2 className="protect-heading-line font-bold text-[40px] sm:text-[58px] lg:text-[76px] leading-[1.02] tracking-tight text-white">
              Protecting Your <br />
              Business Infrastructure.
            </h2>
          </div>
        </div>

        {/* MAIN FEATURE PANEL */}
        <div className="protect-panel relative w-full bg-[#F6F6F2] rounded-[24px] p-8 md:p-12 lg:p-14 text-[#161C18] shadow-2xl space-y-10 md:space-y-12">
          
          {/* PANEL TOP INTRO (TWO COLUMNS) */}
          <div className="protect-panel-intro grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start border-b border-[#161C18]/10 pb-8 md:pb-10">
            <div className="md:col-span-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#161C18] leading-tight">
                Complete Protection <br />
                Across Every Layer
              </h3>
            </div>

            <div className="md:col-span-7">
              <p className="text-sm sm:text-base text-[#5A5D57] leading-relaxed max-w-2xl pt-1">
                C&G Infotech protects business infrastructure through integrated security, networking, cybersecurity and monitoring solutions designed for reliable day-to-day operations.
              </p>
            </div>
          </div>

          {/* FOUR COMPACT CARDS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 pt-2 items-start">
            
            {/* CARD 1: Surveillance & Monitoring */}
            <div className="protect-card-1 md:rotate-0 md:translate-y-0">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full min-h-[300px] lg:min-h-[320px] rounded-[20px] p-6 bg-[#E2EBE2] border border-[#161C18]/5 flex flex-col justify-between cursor-pointer transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs border border-black/5">
                      <Video className="w-5 h-5 text-[#161C18]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#5A5D57]">
                      01 / CCTV
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#161C18] tracking-tight mb-2 group-hover:text-[#E65100] transition-colors">
                    Surveillance & Monitoring
                  </h4>

                  <p className="text-xs text-[#5A5D57] leading-relaxed">
                    HD/IP CCTV, PTZ cameras, NVR/DVR and remote monitoring for continuous business visibility.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#161C18]/10 mt-6">
                  <Link
                    to="/services/cctv-surveillance"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#161C18] group-hover:text-[#E65100] transition-colors"
                  >
                    <span>View System Specs</span>
                    <ArrowUpRight className="w-4 h-4 text-[#161C18]/60 group-hover:text-[#E65100] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* CARD 2: Network Security (STANDOUT DARK CARD) */}
            <div className="protect-card-2 md:-rotate-2 md:-translate-y-3 z-10">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full min-h-[310px] lg:min-h-[335px] rounded-[20px] p-6 bg-[#1A211C] text-white border border-white/10 flex flex-col justify-between cursor-pointer shadow-xl transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                      <Lock className="w-5 h-5 text-[#A3B19B]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#A3B19B]">
                      02 / NETWORK
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#E65100] transition-colors">
                    Network Security
                  </h4>

                  <p className="text-xs text-[#B4C2B0] leading-relaxed">
                    Firewalls, secure Wi-Fi, VPN and managed network protection for business-critical connectivity.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-6">
                  <Link
                    to="/services/networking"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A3B19B] group-hover:text-white transition-colors"
                  >
                    <span>Explore Protection</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A3B19B] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* CARD 3: Access & Identity Control */}
            <div className="protect-card-3 md:rotate-1 md:translate-y-1.5">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full min-h-[300px] lg:min-h-[320px] rounded-[20px] p-6 bg-[#EEEEE8] border border-[#161C18]/5 flex flex-col justify-between cursor-pointer transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs border border-black/5">
                      <Fingerprint className="w-5 h-5 text-[#161C18]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#5A5D57]">
                      03 / ACCESS
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#161C18] tracking-tight mb-2 group-hover:text-[#E65100] transition-colors">
                    Access & Identity Control
                  </h4>

                  <p className="text-xs text-[#5A5D57] leading-relaxed">
                    Biometric systems, visitor management and access control for secure workplace entry.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#161C18]/10 mt-6">
                  <Link
                    to="/services/digital-solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#161C18] group-hover:text-[#E65100] transition-colors"
                  >
                    <span>View Solutions</span>
                    <ArrowUpRight className="w-4 h-4 text-[#161C18]/60 group-hover:text-[#E65100] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* CARD 4: Infrastructure Protection */}
            <div className="protect-card-4 md:rotate-0 md:translate-y-0">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full min-h-[300px] lg:min-h-[320px] rounded-[20px] p-6 bg-[#DFE8DE] border border-[#161C18]/5 flex flex-col justify-between cursor-pointer transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs border border-black/5">
                      <Server className="w-5 h-5 text-[#161C18]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#5A5D57]">
                      04 / HARDWARE
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#161C18] tracking-tight mb-2 group-hover:text-[#E65100] transition-colors">
                    Infrastructure Protection
                  </h4>

                  <p className="text-xs text-[#5A5D57] leading-relaxed">
                    Servers, endpoints, data systems and IT environments protected through layered security and maintenance.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#161C18]/10 mt-6">
                  <Link
                    to="/services/it-infrastructure"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#161C18] group-hover:text-[#E65100] transition-colors"
                  >
                    <span>Explore Protection</span>
                    <ArrowUpRight className="w-4 h-4 text-[#161C18]/60 group-hover:text-[#E65100] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
