import React from 'react';
import { Play, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceMediaFeatureProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  imageUrl?: string;
}

export const ServiceMediaFeature: React.FC<ServiceMediaFeatureProps> = ({
  title = '" Engineered for 99.99% Operational Reliability across Commercial Sites "',
  subtitle = 'Watch how our technical engineers inspect, deploy, and maintain high-performance IT and security systems.',
  badge = 'ENGINEERING EXCELLENCE',
  imageUrl = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=80',
}) => {
  return (
    <section className="cg-master-canvas py-16 md:py-24 bg-[#F6F2EA] px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        
        {/* TITLE QUOTE */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBE7DF] border border-black/10 text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E65100]" />
            <span>{badge}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] font-heading tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-[#6E6960] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* LARGE ROUNDED MEDIA CONTAINER */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/10 shadow-2xl aspect-[16/9] max-w-4xl mx-auto bg-[#111111] group">
          <img
            src={imageUrl}
            alt="Technical Showcase"
            className="w-full h-full object-cover brightness-90 group-hover:scale-103 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* PLAY BUTTON OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E65100] text-white flex items-center justify-center shadow-2xl cursor-pointer border-4 border-white/20"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
            </motion.div>
          </div>

          {/* BOTTOM OVERLAY TAG */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#E65100] animate-pulse" />
              <span>C&G INFOTECH FIELD ENGINEERS</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/80">
              <CheckCircle className="w-3.5 h-3.5 text-[#E65100]" />
              <span>Certified Installation Standards</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
