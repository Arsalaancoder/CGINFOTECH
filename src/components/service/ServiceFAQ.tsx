import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, PhoneCall, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export interface ServiceFAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  title?: string;
  subtitle?: string;
  faqs: ServiceFAQItem[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our technical solutions, site audits, equipment supply, and AMC support.',
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="cg-master-canvas py-16 md:py-24 bg-[#F6F2EA]">
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

        {/* LAYOUT: LEFT ACCORDION (7 COLS), RIGHT CTA CARD (5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT ACCORDION (7 COLS) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-black/15 shadow-md p-5 sm:p-6'
                      : 'bg-white/70 hover:bg-white border-black/[0.08] p-4 sm:p-5 cursor-pointer'
                  }`}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-base sm:text-lg text-[#111111] leading-snug font-heading">
                      {faq.q}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#E65100] text-white' : 'bg-[#F6F2EA] text-[#111111]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-xs sm:text-sm text-[#6E6960] leading-relaxed pt-3 border-t border-black/5 mt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT HIGHLIGHT CTA CARD (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] bg-[#111111] text-white p-6 sm:p-8 space-y-6 shadow-xl border border-black/20 relative overflow-hidden sticky top-24">
              {/* SUBTLE GLOW */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E65100]/20 rounded-full filter blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-[#E65100] text-white flex items-center justify-center shadow-md">
                <HelpCircle className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-white font-heading">
                  Need help choosing the right solution?
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Talk to C&G Infotech engineers for a free site audit, technical consultation, or custom budget quote.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <Link to="/get-quote" className="btn-primary-orange w-full justify-center !h-[44px] !text-sm">
                  <span>Talk to C&G Infotech</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E65100]" />
                  <span>Call Direct Support</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
