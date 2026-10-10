import React, { useRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceFAQItem } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

interface ServiceFAQProps {
  title: string;
  subtitle: string;
  faqs: ServiceFAQItem[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  title,
  subtitle,
  faqs,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;

      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [faqs] }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto">
        {/* CENTERED HEADER MATCHING REFERENCE SECTION 07 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E65100] bg-[#E65100]/10 border border-[#E65100]/20 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#66635C] font-body leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* CHAIUI STYLED RADIX ACCORDION */}
        <div ref={containerRef}>
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="faq-0"
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                value={`faq-${idx}`}
                className="rounded-2xl bg-[#F8F7F4] border border-black/[0.06] overflow-hidden transition-all duration-300 data-[state=open]:border-[#E65100]/40 data-[state=open]:bg-white data-[state=open]:shadow-lg"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 sm:p-7 text-left font-bold text-base sm:text-lg text-[#111111] font-heading hover:text-[#E65100] transition-colors group cursor-pointer">
                    <span className="pr-4">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-black/5 group-data-[state=open]:bg-[#E65100]/10 group-data-[state=open]:text-[#E65100] flex items-center justify-center shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden transition-all text-sm sm:text-base text-[#66635C] font-body leading-relaxed px-6 sm:px-7 pb-6 pt-0">
                  <div className="pt-2 border-t border-black/5">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};
