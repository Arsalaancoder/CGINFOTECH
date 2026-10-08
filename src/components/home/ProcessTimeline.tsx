import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand Your Requirement',
    description: 'Detailed site evaluation, bandwidth audit, camera placement map, or software feature breakdown.'
  },
  {
    number: '02',
    title: 'Design The Solution',
    description: 'Engineering a customized architecture covering hardware specs, network topology, and budget timelines.'
  },
  {
    number: '03',
    title: 'Supply & Configure',
    description: 'Procuring authentic enterprise equipment and pre-configuring firmware, IP addresses, and security rules.'
  },
  {
    number: '04',
    title: 'Deploy & Test',
    description: 'Precision physical installation, cable management, system stress testing, and client sign-off.'
  },
  {
    number: '05',
    title: 'Support & Maintain',
    description: 'Ongoing technical hotline support, regular AMC maintenance checks, and immediate breakdown dispatch.'
  }
];

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressLineRef.current && containerRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.5
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="cg-master-canvas">
      <div className="cg-section-block !bg-[#0B2B25] text-white space-y-10">
        
        <SectionHeading
          eyebrow="Our Process"
          heading="From Requirement To Reliable Support."
          description="A systematic 5-step methodology that guarantees seamless project execution from initial site inspection to long-term AMC support."
          theme="dark"
          align="center"
        />

        {/* DESKTOP HORIZONTAL PROCESS TIMELINE */}
        <div className="hidden lg:block relative pt-8">
          
          {/* Animated Horizontal Progress Line Background */}
          <div className="absolute top-16 left-8 right-8 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-[#397A68] to-[#9FC3B6] origin-left"
            />
          </div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="space-y-4 text-center group">
                <div className="w-16 h-16 rounded-full bg-[#143D34] border-2 border-[#9FC3B6]/40 text-[#9FC3B6] font-mono text-xl font-extrabold flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:bg-[#397A68] group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-[#9FC3B6]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="lg:hidden space-y-8 relative pl-6 border-l-2 border-[#397A68]/40">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative space-y-2">
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#397A68] text-white font-mono text-xs font-bold flex items-center justify-center">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-white">
                {step.title}
              </h4>
              <p className="text-xs text-[#9FC3B6]/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
