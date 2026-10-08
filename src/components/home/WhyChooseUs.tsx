import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, CheckCircle } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';

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
    title: 'Reliable Support',
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
    title: 'Security-focused Solutions',
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: HEADING & DESCRIPTION */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <span className="cg-pill-badge">Why Partner With Us</span>
              <h2 className="text-section-title">
                Why businesses choose C&G Infotech.
              </h2>
              <p className="text-[#66635C] text-base leading-relaxed">
                We combine deep technical expertise with responsive service, delivering reliable technology foundation for commercial enterprises, institutions and offices.
              </p>
              <div className="pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDEEE9] flex items-center justify-center text-[#E65100]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#181715] uppercase tracking-wider">
                  Guaranteed Quality & SLA Support
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: NUMBREED ACCORDION LIST */}
            <div className="lg:col-span-7 space-y-3">
              {ADVANTAGES.map((adv, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-black/10 shadow-md p-6'
                        : 'bg-[#E8E5DC]/50 hover:bg-white border-transparent p-5 cursor-pointer'
                    }`}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-base font-bold text-[#E65100]">
                          {adv.number}
                        </span>
                        <h3 className="font-bold text-lg text-[#181715]">
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
                          <p className="text-sm text-[#66635C] leading-relaxed pt-3 border-t border-black/5 mt-3">
                            {adv.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
