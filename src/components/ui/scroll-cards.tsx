import React, { type FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

// Types
export interface iCardItem {
  title: string;
  description: string;
  tag?: string;
  src: string;
  link?: string;
  color?: string;
  textColor?: string;
  capabilities?: string[];
}

interface iCardProps extends Omit<iCardItem, "src"> {
  i: number;
  src: string;
  totalCards: number;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  tag,
  color = "#143D34",
  textColor = "#FFFFFF",
  i,
  src,
  link = "#",
  capabilities = []
}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-12 md:top-20 px-4 py-8 pointer-events-none">
      <div
        className="relative flex flex-col md:flex-row h-[460px] md:h-[420px] w-full max-w-[850px] overflow-hidden rounded-3xl shadow-2xl border border-white/20 transition-transform duration-500 pointer-events-auto group"
        style={{ backgroundColor: color }}
      >
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={src}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B25]/95 via-[#0B2B25]/85 to-[#0B2B25]/50" />
        </div>

        {/* CONTENT OVERLAY */}
        <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full w-full">
          <div>
            {tag && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#397A68]/40 border border-[#9FC3B6]/40 text-[#9FC3B6] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{tag}</span>
              </div>
            )}
            <h3
              className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl mb-6">
              {description}
            </p>

            {capabilities.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 hidden sm:flex">
                {capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-white/10 text-white/90 font-medium border border-white/10"
                  >
                    ✓ {cap}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2">
            <Link
              to={link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#397A68] hover:bg-[#4A9B82] text-white text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 group/btn"
            >
              <span>Explore Solution</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CardsParallax component displays a series of cards in a vertical sticky scroll layout
 */
interface iCardSlideProps {
  items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="relative w-full">
      {items.map((project, i) => (
        <Card key={`p_${i}`} {...project} i={i} totalCards={items.length} />
      ))}
    </div>
  );
};
