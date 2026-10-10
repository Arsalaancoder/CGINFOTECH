import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Shield } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  accentText?: string;
  shortDescription: string;
  heroImage: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  eyebrow,
  title,
  accentText,
  shortDescription,
  heroImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set(
          [bgImageRef.current, eyebrowRef.current, titleRef.current, descRef.current, buttonsRef.current],
          { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }
        );
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background scale reveal: 1.08 -> 1
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.08 },
          { scale: 1, duration: 1.4, ease: 'power3.out' }
        );
      }

      // Eyebrow reveal
      if (eyebrowRef.current) {
        timeline.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.1
        );
      }

      // Word-by-word Blur-In reveal for Title
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.hero-blur-word');
        if (words.length > 0) {
          timeline.fromTo(
            words,
            {
              opacity: 0,
              filter: 'blur(14px)',
              y: 28,
              scale: 0.98,
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              scale: 1,
              duration: 0.85,
              stagger: 0.06,
            },
            0.2
          );
        } else {
          timeline.fromTo(
            titleRef.current,
            { opacity: 0, y: 28, filter: 'blur(14px)', scale: 0.98 },
            { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 0.85 },
            0.2
          );
        }
      }

      // Description reveal (y 18 -> 0)
      if (descRef.current) {
        timeline.fromTo(
          descRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.3'
        );
      }

      // Buttons stagger reveal (y 14 -> 0, stagger 0.08)
      if (buttonsRef.current) {
        timeline.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.4'
        );
      }
    },
    { scope: containerRef, dependencies: [title, heroImage] }
  );

  // Split title into words safely
  const words = title.split(' ');

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[78vh] lg:min-h-[86vh] flex items-end justify-start overflow-hidden bg-[#0A0A0A] pt-24 pb-16 lg:pb-24 px-4 sm:px-8 lg:px-16 border-b border-white/10"
    >
      {/* BACKGROUND IMAGE WITH DARK GRADIENT OVERLAY */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/50 to-transparent" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* HERO CONTENT OVERLAY */}
      <div className="relative z-10 max-w-4xl space-y-6 text-left">
        {/* EYEBROW BADGE */}
        <div ref={eyebrowRef} className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E65100]/20 text-[#FF7A33] border border-[#E65100]/40 backdrop-blur-md shadow-lg">
            <Shield className="w-3.5 h-3.5 text-[#E65100]" />
            {eyebrow}
          </span>
        </div>

        {/* HERO TITLE WITH WORD-BY-WORD BLUR-IN REVEAL */}
        <h1
          ref={titleRef}
          aria-label={title}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading leading-[1.04] flex flex-wrap gap-x-[0.28em] gap-y-1"
        >
          {words.map((w, idx) => {
            const isAccent = accentText && w.toLowerCase().includes(accentText.toLowerCase().trim());
            return (
              <span
                key={idx}
                className={`hero-blur-word inline-block opacity-0 will-change-[transform,filter,opacity] ${
                  isAccent ? 'text-[#E65100]' : ''
                }`}
              >
                {w}
              </span>
            );
          })}
        </h1>

        {/* SHORT DESCRIPTION */}
        <p
          ref={descRef}
          className="text-base sm:text-xl text-neutral-300 max-w-2xl font-body font-normal leading-relaxed text-balance pt-1 opacity-0"
        >
          {shortDescription}
        </p>

        {/* ACTION BUTTONS */}
        <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E65100] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#CF4700] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E65100]/25 group opacity-0"
          >
            <span>Get a Custom Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="#tech-overview"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm tracking-wide border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/40 opacity-0"
          >
            <span>Explore Technology</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E65100]/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
