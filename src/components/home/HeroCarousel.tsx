import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  badge: string;
  link: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/cctv-surveillance.jpg',
    title: 'Smart HD CCTV Surveillance & 360° Dome Camera Systems',
    badge: 'Security & Surveillance',
    link: '/services/cctv-surveillance',
  },
  {
    id: 2,
    image: '/images/hero/digital-uiux.jpg',
    title: 'Modern UI/UX Design, Web Applications & Analytics Dashboards',
    badge: 'UI/UX & Web Development',
    link: '/services/digital-solutions',
  },
  {
    id: 3,
    image: '/images/hero/software-development.jpg',
    title: 'Custom Digital Solutions, Software Engineering & Cloud Systems',
    badge: 'Software Engineering',
    link: '/services/digital-solutions',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85',
    title: 'Enterprise IT Infrastructure, Data Centre & High-Speed Networking',
    badge: 'IT Infrastructure',
    link: '/services/it-infrastructure',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="cg-master-canvas">
      <div className="cg-section-block !pt-8 sm:!pt-9 !pb-6">
        {/* TOP CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-5 lg:mb-6">
          {/* LEFT: HEADLINE */}
          <div className="lg:col-span-7">
            <h1 className="text-hero-title">
              Technology built <br />
              <span>for modern business</span>
            </h1>
          </div>

          {/* RIGHT: BUTTONS & SUPPORTING PARAGRAPH */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <Link to="/services" className="btn-primary-orange !h-[36px] !px-4.5 !text-[12px]">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/get-quote" className="btn-secondary-outline !h-[36px] !px-4.5 !text-[12px]">
                <span>Get a Quote</span>
              </Link>
            </div>
            <p className="text-[#66635C] text-xs sm:text-[13px] leading-relaxed max-w-[420px] pt-1">
              C&G Infotech delivers reliable IT infrastructure, networking, surveillance, custom software development and UI/UX solutions for modern organizations.
            </p>
          </div>
        </div>

        {/* HERO CAROUSEL CONTAINER */}
        <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[460px] rounded-[16px] overflow-hidden shadow-sm group bg-[#181715] mt-[22px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="w-full h-full object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* OVERLAY CONTENT: BADGE, TITLE & LINK */}
              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 right-5 md:right-32 text-white z-10 space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[11px] font-semibold uppercase tracking-wider text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E65100]" />
                  {HERO_SLIDES[currentSlide].badge}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white max-w-2xl leading-snug">
                  {HERO_SLIDES[currentSlide].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* SLIDE NAVIGATION CONTROLS */}
          <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white/30 hover:bg-white backdrop-blur-md text-white hover:text-black flex items-center justify-center transition-all border border-white/30 active:scale-95 shadow-xs"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white/30 hover:bg-white backdrop-blur-md text-white hover:text-black flex items-center justify-center transition-all border border-white/30 active:scale-95 shadow-xs"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* INDICATOR DOTS */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-5 bg-[#E65100]' : 'w-1.5 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
