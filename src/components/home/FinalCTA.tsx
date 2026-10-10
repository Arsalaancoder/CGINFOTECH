import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from '@/components/motion/FadeUp';

export const FinalCTA: React.FC = () => {
  return (
    <section className="cg-master-canvas py-16 md:py-24 lg:py-28 bg-[#F6F2EA] px-3 sm:px-6 lg:px-8">
      {/* VIBRANT WARM ORANGE FLUID GRADIENT CARD */}
      <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#FF3D00] via-[#F45100] to-[#FF9100] text-white p-8 sm:p-14 md:p-20 relative overflow-hidden shadow-2xl border border-white/20 text-center">
        
        {/* FLUID ORGANIC MESH GLOW OVERLAYS */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFB300]/30 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-white/10 to-amber-300/20 rounded-full filter blur-2xl pointer-events-none transform -rotate-12" />

        <FadeUp>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* TOP PILL ACCENT BADGE */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-mono font-bold tracking-widest text-white uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>GET IN TOUCH WITH EXPERTS</span>
              </span>
            </div>

            {/* MAIN CENTERING HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight font-heading leading-[1.08] max-w-3xl mx-auto drop-shadow-xs">
              Let C&G Infotech take the tech hassle off your team's plate
            </h2>

            {/* SUPPORTING DESCRIPTION */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              From surveillance and networking to servers, hardware supply, and business software — we automate and secure your operations.
            </p>

            {/* CENTERED WHITE PILL BUTTON */}
            <div className="pt-4 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/get-quote"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF9F5] text-[#111111] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-2xl transition-all duration-300 group"
                >
                  <span>Get In Touch With Experts</span>
                  <ArrowRight className="w-4 h-4 text-[#111111] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
};
