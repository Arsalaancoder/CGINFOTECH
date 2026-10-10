import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  accentText?: string;
  shortDescription: string;
  heroImage?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  eyebrow,
  title,
  accentText,
  shortDescription,
  heroImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const titleLines = titleRef.current.querySelectorAll('.title-line');

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-pill-badge',
        { opacity: 0, y: -15, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      );

      if (titleLines.length > 0) {
        tl.fromTo(
          titleLines,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          '-=0.3'
        );
      } else {
        tl.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.3'
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );
      }
    },
    { scope: containerRef }
  );

  // Helper to highlight accent word in title if provided
  const renderTitle = () => {
    if (!accentText || !title.includes(accentText)) {
      return (
        <span className="inline-block overflow-hidden pb-2">
          <span className="title-line inline-block">{title}</span>
        </span>
      );
    }

    const parts = title.split(accentText);
    return (
      <span className="inline-block overflow-hidden pb-2">
        <span className="title-line inline-block">
          {parts[0]}
          <span className="inline-block px-3 py-1 my-1 rounded-2xl bg-[#E65100] text-white shadow-md">
            {accentText}
          </span>
          {parts[1]}
        </span>
      </span>
    );
  };

  return (
    <section
      ref={containerRef}
      className="cg-master-canvas pt-14 md:pt-20 pb-16 md:pb-24 bg-[#F6F2EA] border-b border-black/[0.06] relative overflow-hidden"
    >
      {/* SUBTLE BACKGROUND GRID PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#111111 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        {/* TOP PILL BADGE */}
        <div className="flex justify-center">
          <div className="hero-pill-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#111111] bg-[#EBE7DF] border border-black/10 shadow-2xs uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E65100]" />
            <span>WELCOME TO C&G INFOTECH • {eyebrow}</span>
          </div>
        </div>

        {/* BOLD EDITORIAL HEADING */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black tracking-tight text-[#111111] leading-[1.04] font-heading max-w-4xl mx-auto"
        >
          {renderTitle()}
        </h1>

        {/* SUPPORTING PARAGRAPH (2-3 SHORT LINES MAX) */}
        <p
          ref={descRef}
          className="text-[#6E6960] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal pt-1"
        >
          {shortDescription}
        </p>

        {/* CTA BUTTONS */}
        <div ref={ctaRef} className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/get-quote" className="btn-primary-orange !h-[50px] !px-8 !text-sm shadow-xl">
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full bg-white text-[#111111] border border-black/15 font-bold text-sm hover:bg-[#F9F8F5] shadow-xs transition-all"
            >
              <span>Talk to Engineers</span>
            </Link>
          </motion.div>
        </div>

        {/* OPTIONAL HERO VISUAL SLOT */}
        {heroImage && (
          <div className="pt-10 max-w-4xl mx-auto">
            <div className="relative rounded-[32px] overflow-hidden border border-black/10 shadow-2xl aspect-[16/9] bg-[#111111]">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
