import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';

const METRICS = [
  {
    value: '98%',
    description: 'Customer satisfaction rate across IT infrastructure & security',
  },
  {
    value: '15+',
    description: 'Years of technical expertise & enterprise project delivery',
  },
  {
    value: '500+',
    description: 'Installations ensuring secure and connected workplaces',
  },
  {
    value: '24/7',
    description: 'Support coverage keeping your critical business systems online',
  },
];

export const AboutPreview: React.FC = () => {
  return (
    <section className="cg-master-canvas">
      <div className="cg-section-block !py-7 sm:!py-9">
        <FadeUp>
          {/* TOP SECTION: RATING BADGE LEFT (32%), STATEMENT RIGHT (68%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pb-7 sm:pb-9">
            {/* TOP-LEFT: RATING BADGE MATCHING REFERENCE */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E5DC] text-xs font-semibold text-[#181715] border border-black/10 shadow-2xs">
                <div className="flex text-amber-500 gap-0.5">
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                  <Star className="w-3 h-3 fill-amber-500" />
                </div>
                <span className="text-[12px] font-medium text-[#181715]">4.97/5 trusted reviews</span>
              </div>
            </div>

            {/* TOP-RIGHT: TWO-TONE STATEMENT MATCHING REFERENCE */}
            <div className="lg:col-span-8">
              <h2 className="text-statement">
                We are passionate about empowering <span className="text-[#181715]">organizations with reliable</span>{' '}
                <span className="muted">
                  security, enterprise networking, robust infrastructure and intelligent business software to drive seamless growth.
                </span>
              </h2>
            </div>
          </div>

          {/* METRICS ROW (4 COLUMNS ACROSS, PLAIN TYPOGRAPHY MATCHING REFERENCE) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 sm:pt-8 border-t border-black/8">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-[#181715]">
                  {metric.value}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#66635C] leading-relaxed max-w-[210px]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
