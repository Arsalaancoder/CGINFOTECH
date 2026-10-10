import React, { useRef } from 'react';
import { Search, Workflow, Settings, Gauge, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We understand your business requirements, existing IT infrastructure, challenges, and technology goals.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Solution Planning & Design',
    description: 'Our team develops a tailored technology solution covering system architecture, equipment, security, and scalability.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Installation & Integration',
    description: 'We professionally install, configure, and integrate your CCTV, networking, IT infrastructure, and software solutions.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'We conduct thorough testing, verify system performance, resolve issues, and ensure reliable operation.',
    icon: Gauge,
  },
  {
    number: '05',
    title: 'Deployment & Support',
    description: 'We deliver the completed solution, provide training, and offer ongoing maintenance and technical support.',
    icon: Rocket,
  },
];

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      // DESKTOP ANIMATIONS (>= 768px)
      mm.add('(min-width: 768px)', () => {
        // Timeline fill line scrub animation
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
                end: 'bottom 75%',
                scrub: 0.6,
              },
            }
          );
        }

        // Reveal step items with stagger
        stepRefs.current.forEach((stepEl, idx) => {
          if (!stepEl) return;
          gsap.fromTo(
            stepEl,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stepEl,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Node dot pulse highlight on scroll pass
          const nodeEl = nodeRefs.current[idx];
          if (nodeEl) {
            gsap.to(nodeEl, {
              scale: 1.35,
              borderColor: '#E65100',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 0 16px rgba(230, 81, 0, 0.4)',
              duration: 0.3,
              scrollTrigger: {
                trigger: stepEl,
                start: 'top 60%',
                end: 'bottom 40%',
                toggleActions: 'play reverse play reverse',
              },
            });
          }
        });
      });

      // MOBILE ANIMATIONS (< 768px)
      mm.add('(max-width: 767px)', () => {
        if (mobileLineRef.current) {
          gsap.fromTo(
            mobileLineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                end: 'bottom 80%',
                scrub: 0.6,
              },
            }
          );
        }

        stepRefs.current.forEach((stepEl) => {
          if (!stepEl) return;
          gsap.fromTo(
            stepEl,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stepEl,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="cg-master-canvas py-16 md:py-24 lg:py-32 bg-[#F5F4F0] px-3 sm:px-6 lg:px-8">
      {/* LARGE ROUNDED MAIN CONTAINER CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] sm:rounded-[44px] lg:rounded-[56px] p-6 sm:p-10 md:p-16 lg:p-20 border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
        
        {/* TOP BADGE: 004 • PROCESS */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#181715] bg-[#F0EEE8] border border-black/10 shadow-2xs uppercase">
            <span>004</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]" />
            <span>PROCESS</span>
          </div>
        </div>

        {/* MAIN HEADING: How We Work */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#181715] tracking-tight text-center leading-none font-heading mb-4">
          How We Work
        </h2>

        {/* SUBHEADING DESCRIPTION */}
        <p className="text-[#66635C] text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed font-normal mb-12 md:mb-20">
          A structured, reliable process designed to deliver tailored IT and security solutions — efficiently and strategically.
        </p>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* DESKTOP CENTER TIMELINE LINE */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[1.5px] bg-black/10 z-0" />
          
          {/* DESKTOP ANIMATED PROGRESS LINE FILL */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#E65100] via-[#0B2B25] to-[#E65100] z-0 origin-top"
          />

          {/* MOBILE LEFT TIMELINE LINE */}
          <div className="md:hidden absolute left-[27px] top-8 bottom-8 w-[1.5px] bg-black/10 z-0" />
          <div
            ref={mobileLineRef}
            className="md:hidden absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#E65100] via-[#0B2B25] to-[#E65100] z-0 origin-top"
          />

          {/* 5 PROCESS STEPS */}
          <div className="space-y-8 md:space-y-16 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              const isFirstStep = idx === 0;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className="relative"
                >
                  {/* STEP 01: HIGHLIGHTED WIDE PILL-SHAPED CARD */}
                  {isFirstStep ? (
                    <div className="relative z-10 bg-[#F4F3EE] hover:bg-[#EFECE5] transition-all duration-300 rounded-[28px] md:rounded-full p-4 md:py-6 md:px-10 border border-black/[0.06] shadow-xs">
                      
                      {/* DESKTOP LAYOUT FOR STEP 01 */}
                      <div className="hidden md:flex items-center justify-between relative w-full">
                        {/* LEFT: ICON SQUIRCLE + BADGE 01 */}
                        <div className="w-1/2 flex items-center justify-end gap-3.5 pr-10">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-[22px] bg-[#181715] text-white flex items-center justify-center shadow-md shrink-0 relative group">
                            <IconComponent className="w-6 h-6 text-white" />
                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E65100] border-2 border-white shadow-xs animate-pulse" />
                          </div>
                          <span className="font-mono text-xs font-bold text-[#66635C] bg-white px-3 py-1 rounded-full border border-black/10 shadow-2xs">
                            {step.number}
                          </span>
                        </div>

                        {/* CENTER TIMELINE NODE DOT */}
                        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                          <div
                            ref={(el) => {
                              nodeRefs.current[idx] = el;
                            }}
                            className="w-4 h-4 rounded-full bg-white border-2 border-[#E65100] shadow-md transition-all duration-300 flex items-center justify-center"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E65100]" />
                          </div>
                        </div>

                        {/* RIGHT: TEXT CONTENT */}
                        <div className="w-1/2 text-left pl-10">
                          <h3 className="font-bold text-lg md:text-xl text-[#181715] leading-snug mb-1 font-heading">
                            {step.title}
                          </h3>
                          <p className="text-xs md:text-sm text-[#66635C] leading-relaxed max-w-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* MOBILE LAYOUT FOR STEP 01 */}
                      <div className="md:hidden flex items-start gap-4">
                        <div className="w-12 h-12 rounded-[18px] bg-[#181715] text-white flex items-center justify-center shadow-md shrink-0">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#E65100] bg-white px-2 py-0.5 rounded-full border border-black/10">
                              {step.number}
                            </span>
                            <h3 className="font-bold text-base text-[#181715] font-heading">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-xs text-[#66635C] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* STEPS 02 TO 05: ALTERNATING TIMELINE LAYOUT */
                    <div>
                      {/* DESKTOP ALTERNATING VIEW (>= 768px) */}
                      <div className="hidden md:flex items-center justify-between relative w-full">
                        
                        {/* EVEN STEPS (02, 04): TEXT ON LEFT, ICON ON RIGHT */}
                        {idx % 2 === 1 ? (
                          <>
                            {/* LEFT SIDE: TEXT (RIGHT-ALIGNED) */}
                            <div className="w-1/2 text-right pr-12">
                              <h3 className="font-bold text-lg md:text-xl text-[#181715] leading-snug mb-1 font-heading">
                                {step.title}
                              </h3>
                              <p className="text-xs md:text-sm text-[#66635C] leading-relaxed max-w-sm ml-auto">
                                {step.description}
                              </p>
                            </div>

                            {/* CENTER TIMELINE NODE DOT */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                              <div
                                ref={(el) => {
                                  nodeRefs.current[idx] = el;
                                }}
                                className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black/20 shadow-2xs transition-all duration-300"
                              />
                            </div>

                            {/* RIGHT SIDE: BADGE + ICON SQUIRCLE */}
                            <div className="w-1/2 flex items-center justify-start gap-3.5 pl-12">
                              <span className="font-mono text-xs font-bold text-[#66635C] bg-[#F4F3EE] px-3 py-1 rounded-full border border-black/10">
                                {step.number}
                              </span>
                              <div className="w-14 h-14 md:w-16 md:h-16 rounded-[22px] bg-[#F4F3EE] text-[#181715] flex items-center justify-center border border-black/10 shadow-2xs shrink-0 hover:bg-[#EBEAE3] hover:scale-105 transition-all duration-300">
                                <IconComponent className="w-6 h-6 text-[#181715]" />
                              </div>
                            </div>
                          </>
                        ) : (
                          /* ODD STEPS (03, 05): ICON ON LEFT, TEXT ON RIGHT */
                          <>
                            {/* LEFT SIDE: ICON SQUIRCLE + BADGE */}
                            <div className="w-1/2 flex items-center justify-end gap-3.5 pr-12">
                              <div className="w-14 h-14 md:w-16 md:h-16 rounded-[22px] bg-[#F4F3EE] text-[#181715] flex items-center justify-center border border-black/10 shadow-2xs shrink-0 hover:bg-[#EBEAE3] hover:scale-105 transition-all duration-300">
                                <IconComponent className="w-6 h-6 text-[#181715]" />
                              </div>
                              <span className="font-mono text-xs font-bold text-[#66635C] bg-[#F4F3EE] px-3 py-1 rounded-full border border-black/10">
                                {step.number}
                              </span>
                            </div>

                            {/* CENTER TIMELINE NODE DOT */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                              <div
                                ref={(el) => {
                                  nodeRefs.current[idx] = el;
                                }}
                                className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black/20 shadow-2xs transition-all duration-300"
                              />
                            </div>

                            {/* RIGHT SIDE: TEXT (LEFT-ALIGNED) */}
                            <div className="w-1/2 text-left pl-12">
                              <h3 className="font-bold text-lg md:text-xl text-[#181715] leading-snug mb-1 font-heading">
                                {step.title}
                              </h3>
                              <p className="text-xs md:text-sm text-[#66635C] leading-relaxed max-w-sm">
                                {step.description}
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* MOBILE VIEW FOR STEPS 02-05 (< 768px) */}
                      <div className="md:hidden flex items-start gap-4 pl-1">
                        <div className="w-12 h-12 rounded-[18px] bg-[#F4F3EE] text-[#181715] flex items-center justify-center border border-black/10 shadow-2xs shrink-0 z-10">
                          <IconComponent className="w-5 h-5 text-[#181715]" />
                        </div>
                        <div className="space-y-1 pt-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#66635C] bg-[#F4F3EE] px-2 py-0.5 rounded-full border border-black/10">
                              {step.number}
                            </span>
                            <h3 className="font-bold text-base text-[#181715] font-heading">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-xs text-[#66635C] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
