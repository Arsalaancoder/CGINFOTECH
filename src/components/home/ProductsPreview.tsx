import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/products';
import { FadeUp } from '@/components/motion/FadeUp';

export const ProductsPreview: React.FC = () => {
  return (
    <section className="cg-master-canvas">
      <div className="cg-section-block">
        <FadeUp>
          {/* TOP HEADING & LINK */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="cg-pill-badge mb-3">Product Catalog</span>
              <h2 className="text-section-title">
                Hardware & Hardware Supply
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#181715] hover:text-[#E65100] transition-colors"
            >
              <span>View Complete Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#E65100]" />
            </Link>
          </div>

          {/* HORIZONTALLY SCROLLABLE CARDS CONTAINER */}
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x snap-mandatory">
            {PRODUCTS_DATA.map((prod) => (
              <div
                key={prod.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start cg-white-card p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* PRODUCT IMAGE */}
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-[#F5F4F0] mb-4 relative">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#181715]">
                      {prod.category}
                    </span>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="font-bold text-lg text-[#181715] group-hover:text-[#E65100] transition-colors line-clamp-1 mb-1">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-[#66635C] line-clamp-2 leading-relaxed mb-4">
                    {prod.description}
                  </p>
                </div>

                {/* INQUIRE BUTTON */}
                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#181715]">Request Specs</span>
                  <Link
                    to="/contact"
                    className="w-8 h-8 rounded-full bg-[#E8E5DC] group-hover:bg-[#E65100] group-hover:text-white flex items-center justify-center transition-colors text-[#181715]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
