import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export interface CardData {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  link: string;
  bg: string;
}

const SERVICES_CARDS: CardData[] = [
  {
    id: 'security-surveillance',
    number: '01',
    title: 'Security & Surveillance',
    eyebrow: 'CCTV & Access Control',
    description: 'Professional CCTV, IP cameras, PTZ systems, NVR/DVR, remote monitoring and access control solutions.',
    image: '/images/cards/card-cctv-new.jpg',
    link: '/services/cctv-surveillance',
    bg: '#FFFFFF',
  },
  {
    id: 'networking-solutions',
    number: '02',
    title: 'Networking Solutions',
    eyebrow: 'Enterprise Fiber & Wi-Fi',
    description: 'Enterprise LAN/WAN, Wi-Fi, routers, switches, VPN, structured cabling and fiber networking.',
    image: '/images/cards/card-networking-new.jpg',
    link: '/services/networking',
    bg: '#FCFBF9',
  },
  {
    id: 'it-infrastructure',
    number: '03',
    title: 'IT Infrastructure',
    eyebrow: 'Servers & Hardware AMC',
    description: 'Servers, firewalls, UPS systems, hardware, data-centre infrastructure and maintenance solutions.',
    image: '/images/cards/card-servers-new.jpg',
    link: '/services/it-infrastructure',
    bg: '#F7F6F2',
  },
  {
    id: 'cybersecurity',
    number: '04',
    title: 'Cybersecurity',
    eyebrow: 'Endpoint & Network Defense',
    description: 'Network security, firewall management, endpoint protection, secure remote access and data protection.',
    image: '/images/cards/card-cybersecurity-new.jpg',
    link: '/services/cybersecurity',
    bg: '#FFFFFF',
  },
  {
    id: 'computers-laptops',
    number: '05',
    title: 'Computer & Laptop Solutions',
    eyebrow: 'Corporate Hardware Supply',
    description: 'Business desktops, laptops, hardware procurement, configuration, installation and maintenance.',
    image: '/images/cards/card-computers-new.jpg',
    link: '/products',
    bg: '#FAF9F5',
  },
  {
    id: 'attendance-software',
    number: '06',
    title: 'Attendance Software',
    eyebrow: 'Biometrics & Shift Rosters',
    description: 'Biometric attendance, employee management, shift tracking, leave management and reports.',
    image: '/images/cards/card-attendance-new.jpg',
    link: '/services/digital-solutions',
    bg: '#F5F4F0',
  },
  {
    id: 'visitor-management',
    number: '07',
    title: 'Visitor Management Software',
    eyebrow: 'Lobby Security & Passes',
    description: 'Visitor registration, host approvals, QR passes, secure check-in/check-out and visitor reporting.',
    image: '/images/cards/card-visitor-new.jpg',
    link: '/services/digital-solutions',
    bg: '#FFFFFF',
  },
];

export const Expertise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (!cards.length || !sectionRef.current) return;

        // INITIAL DECK STATE
        // Card 0: Hero Stage
        gsap.set(cards[0], {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          filter: 'blur(0px)',
          pointerEvents: 'auto',
        });

        // Card 1: Next preview
        if (cards[1]) {
          gsap.set(cards[1], {
            x: 220,
            y: 45,
            rotation: 8,
            scale: 0.9,
            opacity: 0.35,
            zIndex: 20,
            filter: 'blur(0px)',
            pointerEvents: 'none',
          });
        }

        // Card 2: Far right preview
        if (cards[2]) {
          gsap.set(cards[2], {
            x: 360,
            y: 80,
            rotation: 12,
            scale: 0.86,
            opacity: 0.18,
            zIndex: 15,
            filter: 'blur(1px)',
            pointerEvents: 'none',
          });
        }

        // Remaining cards: Offscreen right
        for (let i = 3; i < cards.length; i++) {
          gsap.set(cards[i], {
            x: 480,
            y: 110,
            rotation: 15,
            scale: 0.8,
            opacity: 0,
            zIndex: 10,
            filter: 'blur(2px)',
            pointerEvents: 'none',
          });
        }

        // TIMELINE CREATION
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=4200',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        cards.forEach((_, index) => {
          // HOLD SEGMENT: Give user distance to read active card
          tl.to({}, { duration: 0.7 });

          // Update active index indicator at hold point
          tl.call(() => {
            setActiveIndex(index);
            if (counterRef.current) {
              counterRef.current.innerText = `0${index + 1} / 07`;
            }
          });

          // If last card, we stop after its hold segment
          if (index === cards.length - 1) return;

          const current = cards[index];
          const next = cards[index + 1];
          const farNext = cards[index + 2];
          const hiddenNext = cards[index + 3];
          const prev = cards[index - 1];

          // 1. Current active card moves to Left Background
          tl.to(current, {
            x: -220,
            y: 45,
            rotation: -8,
            scale: 0.9,
            opacity: 0.3,
            zIndex: 10,
            filter: 'blur(1px)',
            pointerEvents: 'none',
            duration: 1,
            ease: 'power2.inOut',
          });

          // 2. Next card moves to Active Hero Stage
          tl.to(
            next,
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              zIndex: 30,
              filter: 'blur(0px)',
              pointerEvents: 'auto',
              duration: 1,
              ease: 'power2.inOut',
            },
            '<'
          );

          // Animate text visibility on the new active card
          const nextText = next.querySelectorAll(
            '.service-number, .service-title, .service-description, .service-link'
          );
          if (nextText.length) {
            tl.fromTo(
              nextText,
              { opacity: 0.5, y: 12 },
              { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power1.out' },
              '<+=0.3'
            );
          }

          // 3. Next-next card moves into Preview position
          if (farNext) {
            tl.to(
              farNext,
              {
                x: 220,
                y: 45,
                rotation: 8,
                scale: 0.9,
                opacity: 0.35,
                zIndex: 20,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'power2.inOut',
              },
              '<'
            );
          }

          // 4. Hidden right card moves into Far Right Preview position
          if (hiddenNext) {
            tl.to(
              hiddenNext,
              {
                x: 360,
                y: 80,
                rotation: 12,
                scale: 0.86,
                opacity: 0.18,
                zIndex: 15,
                filter: 'blur(1px)',
                duration: 1,
                ease: 'power2.inOut',
              },
              '<'
            );
          }

          // 5. Previous left cards shift further left
          if (prev) {
            tl.to(
              prev,
              {
                x: -360,
                y: 80,
                rotation: -12,
                scale: 0.82,
                opacity: 0.12,
                zIndex: 5,
                filter: 'blur(2px)',
                duration: 1,
                ease: 'power2.inOut',
              },
              '<'
            );
          }
        });

        // Final hold for card 07
        tl.to({}, { duration: 0.8 });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="cg-master-canvas relative w-full h-screen min-h-[700px] overflow-hidden bg-[#F5F4F0] flex flex-col justify-between items-center py-6 select-none"
    >
      {/* Subtle circular background shape */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full bg-[#ebe8df] -bottom-[450px] left-1/2 -translate-x-1/2 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* SECTION HEADING (Top 10–15% of viewport) */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 pt-2 md:pt-4">
        <h2 className="text-[#181715] font-bold text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.08] tracking-tight">
          Everything your business <br className="hidden sm:inline" />
          needs to stay connected
        </h2>
      </div>

      {/* DESKTOP STAGE (>= 768px) */}
      <div className="hidden md:flex cards-stage relative w-full z-10 max-w-6xl mx-auto h-[530px] items-center justify-center my-auto overflow-visible">
        {SERVICES_CARDS.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[clamp(340px,28vw,420px)] h-[510px] transition-shadow duration-300"
            style={{
              willChange: 'transform, opacity, filter',
            }}
          >
            <ServiceCardItem card={card} />
          </div>
        ))}
      </div>

      {/* PROGRESS INDICATOR (Bottom of viewport) */}
      <div className="hidden md:flex relative z-20 items-center gap-4 pb-2">
        <span
          ref={counterRef}
          className="text-[#E65100] font-mono text-sm font-bold tracking-widest bg-[#FDEEE9] px-3 py-1 rounded-full border border-[#E65100]/10"
        >
          01 / 07
        </span>
        <div className="flex items-center gap-1.5">
          {SERVICES_CARDS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-[#E65100]'
                  : 'w-1.5 bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* MOBILE SWIPE CAROUSEL (< 768px - NO PINNING) */}
      <div className="md:hidden relative w-full z-10 px-4 my-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 pt-2 no-scrollbar">
          {SERVICES_CARDS.map((card) => (
            <div
              key={card.id}
              className="snap-center shrink-0 min-w-[86vw] max-w-[360px] h-[490px]"
            >
              <ServiceCardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCardItem: React.FC<{ card: CardData }> = ({ card }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative w-full h-full rounded-[26px] p-6 flex flex-col justify-between border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-pointer overflow-hidden transition-all duration-300"
      style={{ backgroundColor: card.bg }}
    >
      {/* CARD TOP HEADER: Number & Eyebrow */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="service-number inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDEEE9] text-[#E65100] text-xs font-mono font-bold tracking-wider">
            <span>{card.number}</span>
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9C968B]">
            {card.eyebrow}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="service-title text-xl font-bold tracking-tight text-[#181715] mb-2 leading-snug group-hover:text-[#E65100] transition-colors">
          {card.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="service-description text-[#66635C] text-xs sm:text-[13px] leading-relaxed line-clamp-2">
          {card.description}
        </p>
      </div>

      {/* VISUAL AREA / IMAGE */}
      <div className="relative my-3 w-full h-[190px] sm:h-[210px] rounded-[18px] overflow-hidden border border-black/5 bg-[#F5F4F0]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CARD FOOTER */}
      <div className="pt-2 flex items-center justify-between border-t border-black/[0.06]">
        <Link
          to={card.link}
          className="service-link inline-flex items-center gap-2 text-xs font-bold text-[#181715] group-hover:text-[#E65100] transition-colors"
        >
          <span>Explore Solution</span>
          <motion.div
            className="w-6 h-6 rounded-full bg-[#FDEEE9] text-[#E65100] flex items-center justify-center shrink-0"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.div>
        </Link>

        <span className="text-[10px] font-mono text-[#9C968B]">
          C&G INFOTECH
        </span>
      </div>
    </motion.div>
  );
};
