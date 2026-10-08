import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/data/industries';
import { FadeUp } from '@/components/motion/FadeUp';

export const IndustriesServed: React.FC = () => {
  return (
    <section className="cg-master-canvas">
      <div className="cg-section-block">
        <FadeUp>
          {/* HEADING */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="cg-pill-badge mb-3">Sectors We Serve</span>
              <h2 className="text-section-title">
                Tailored IT & Security for Every Industry
              </h2>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#181715] hover:text-[#E65100] transition-colors"
            >
              <span>Explore All Sectors</span>
              <ArrowRight className="w-4 h-4 text-[#E65100]" />
            </Link>
          </div>

          {/* EDITORIAL IMAGE TILES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#181715] shadow-md border border-black/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h3 className="font-bold text-xl text-white group-hover:text-[#E65100] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
