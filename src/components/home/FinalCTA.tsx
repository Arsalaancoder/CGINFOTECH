import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { FadeUp } from '@/components/motion/FadeUp';

export const FinalCTA: React.FC = () => {
  return (
    <section className="cg-master-canvas">
      <div className="rounded-[32px] bg-[#181715] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* BACKGROUND SUBTLE ACCENT BLUR */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E65100]/15 rounded-full filter blur-3xl pointer-events-none" />

        <FadeUp>
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#E65100]">
              Get In Touch With Experts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to upgrade your technology environment?
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Talk to C&G Infotech about your surveillance, enterprise networking, IT infrastructure, hardware supply or business software requirements today.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/get-quote" className="btn-primary-orange">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* DIRECT CONTACT MINIS */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80 font-mono">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#E65100]" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E65100]" />
                <span>Email: {COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
