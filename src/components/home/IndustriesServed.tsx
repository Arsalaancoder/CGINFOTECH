import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/data/industries';
import { FadeUp } from '@/components/motion/FadeUp';

export const IndustriesServed: React.FC = () => {
  return (
    <section className="cg-master-canvas py-16 md:py-24 bg-[#F6F2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          {/* HEADER AREA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              {/* TOP EYEBROW WITH DASH ACCENT */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E65100]">
                  INDUSTRIES
                </span>
                <span className="w-8 h-[2px] bg-[#E65100]" />
              </div>

              {/* HEADING */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight font-heading leading-tight max-w-3xl">
                Tailored IT & Security for Every Industry
              </h2>

              {/* SUBTITLE */}
              <p className="text-[#6E6960] text-sm sm:text-base leading-relaxed max-w-2xl pt-1 font-normal">
                Purpose-built solutions, proven across industries. From secure networks to smarter operations, C&G Infotech helps organizations work safer, smarter, and stronger.
              </p>
            </div>

            {/* TOP RIGHT EXPLORE ALL SECTORS BUTTON */}
            <div className="shrink-0">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/20 hover:border-[#E65100] hover:bg-white text-[#111111] hover:text-[#E65100] font-semibold text-xs transition-all duration-300 shadow-2xs"
              >
                <span>Explore All Sectors</span>
                <ArrowRight className="w-4 h-4 text-[#E65100]" />
              </Link>
            </div>
          </div>

          {/* 6 INDUSTRY CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[16/11] bg-[#111111] shadow-lg border border-black/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* REALISTIC HIGH-RES BACKGROUND IMAGE */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover brightness-[0.82] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                {/* TOP LEFT BADGES */}
                <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2 z-10">
                  {ind.badges && ind.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide shadow-2xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* BOTTOM CONTENT AREA */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-end justify-between gap-4">
                  <div className="space-y-1 max-w-[82%]">
                    <h3 className="font-bold text-xl sm:text-2xl text-white font-heading leading-tight group-hover:text-white transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-white/85 line-clamp-2 leading-relaxed font-normal pt-0.5">
                      {ind.description}
                    </p>
                    {/* ORANGE UNDERLINE INDICATOR BAR */}
                    <div className="w-10 h-1 bg-[#E65100] rounded-full mt-2.5 group-hover:w-16 transition-all duration-500" />
                  </div>

                  {/* FLOATING CIRCULAR ORANGE ACTION BUTTON */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E65100] text-white flex items-center justify-center shadow-lg group-hover:bg-[#CF4700] group-hover:scale-110 shrink-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
