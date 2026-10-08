import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';
import DemoOne from '@/components/ui/demo';

interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    number: '01',
    title: 'End-to-End IT Solutions',
    description:
      'We provide security, networking, hardware supply, servers and business software under one roof so you don’t have to manage multiple vendor contracts.',
  },
  {
    number: '02',
    title: 'Professional Installation',
    description:
      'Engineered cabling, rack setup, CCTV placement and router configuration executed according to strict industry standards and neat routing.',
  },
  {
    number: '03',
    title: 'Reliable SLA Support',
    description:
      'Dedicated technical helpdesk with fast SLA response times and preventive maintenance for minimal system downtime.',
  },
  {
    number: '04',
    title: 'Scalable Infrastructure',
    description:
      'Solutions designed for long-term growth. Expand camera feeds, network switches or employee attendance software seamlessly as your team grows.',
  },
  {
    number: '05',
    title: 'Security-focused Engineering',
    description:
      'Hardened firewall policies, encrypted remote camera views, secure VPN tunnels and biometric authentication for maximum corporate security.',
  },
  {
    number: '06',
    title: 'Multi-brand Technology Support',
    description:
      'Official deployment and support for leading global brands in IT hardware, networking devices and biometric equipment.',
  },
];

export const WhyChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="cg-master-canvas">
      <div className="cg-section-block">
        <FadeUp>
          {/* SECTION HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="cg-pill-badge mb-2">Why Partner With Us</span>
            <h2 className="text-section-title">
              Why businesses choose C&G Infotech.
            </h2>
            <p className="text-[#66635C] text-sm sm:text-base leading-relaxed pt-1">
              We combine deep technical expertise with responsive service, delivering a reliable technology foundation for commercial enterprises, institutions and offices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT COLUMN: ADVANTAGES ACCORDION */}
            <div className="lg:col-span-6 space-y-3">
              {ADVANTAGES.map((adv, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-black/10 shadow-md p-5'
                        : 'bg-[#E8E5DC]/50 hover:bg-white border-transparent p-4 cursor-pointer'
                    }`}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <span className="font-mono text-base font-bold text-[#E65100]">
                          {adv.number}
                        </span>
                        <h3 className="font-bold text-base sm:text-lg text-[#181715]">
                          {adv.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#66635C] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#E65100]' : ''
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-[#66635C] leading-relaxed pt-2.5 border-t border-black/5 mt-2.5">
                            {adv.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: 3D TESTIMONIALS MARQUEE (DEMO) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <DemoOne />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
