import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_DATA } from '@/data/products';
import { Laptop, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FadeUp } from '@/components/motion/FadeUp';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    document.title = 'Products Catalog | C&G Infotech';
  }, []);

  const categories = ['All', 'Security', 'Networking', 'Biometric', 'Laptops', 'Printers'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <main className="py-4 space-y-3">
      {/* HERO BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <div className="max-w-3xl space-y-4">
            <span className="cg-pill-badge">Hardware & Software</span>
            <h1 className="text-hero-title">
              Products & Software <br />
              Catalog
            </h1>
            <p className="text-[#66635C] text-base md:text-lg leading-relaxed pt-2">
              Browse our commercial CCTV cameras, networking switches, biometric attendance devices, business laptops and POS printers.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS CATALOG SECTION */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <FadeUp>
            {/* CATEGORY FILTER TABS */}
            <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-black/10 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#E65100] text-white shadow-md'
                      : 'bg-[#E8E5DC] text-[#181715] hover:bg-black/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="cg-white-card p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
                >
                  <div>
                    <div className="w-full h-48 rounded-xl overflow-hidden bg-[#F5F4F0] mb-4 relative">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#181715]">
                        {prod.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-[#181715] group-hover:text-[#E65100] transition-colors mb-1">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#66635C] leading-relaxed mb-4">
                      {prod.description}
                    </p>

                    <div className="space-y-1 text-xs text-[#181715] mb-4">
                      {prod.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#66635C]">OEM Hardware</span>
                    <Link
                      to="/contact"
                      className="btn-primary-orange text-xs py-2 px-4"
                    >
                      <span>Inquire Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </main>
  );
};
