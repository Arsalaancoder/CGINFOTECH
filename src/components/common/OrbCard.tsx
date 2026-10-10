import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface OrbCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  orbSize?: number;
  hoverY?: boolean;
}

export const OrbCard: React.FC<OrbCardProps> = ({
  children,
  variant = 'auto',
  className = '',
  orbSize = 190,
  hoverY = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const orb = orbRef.current;
    if (!card || !orb) return;

    // Disable tracking logic below 768px or for touch devices
    const isMobileOrTouch =
      window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobileOrTouch || prefersReducedMotion) {
      return;
    }

    const xTo = gsap.quickTo(orb, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(orb, 'y', { duration: 0.35, ease: 'power3.out' });

    const handlePointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      xTo(x);
      yTo(y);
    };

    const handlePointerEnter = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.set(orb, { x, y });
      gsap.to(orb, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    };

    const handlePointerLeave = () => {
      gsap.to(orb, { opacity: 0, duration: 0.4, ease: 'power2.out' });
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerenter', handlePointerEnter);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  const isDark = variant === 'dark';

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 hover:border-[#E65100]/35 ${
        hoverY ? 'hover:-translate-y-1.5 hover:scale-[1.01]' : ''
      } ${className}`}
      {...props}
    >
      {/* INTERACTIVE ORB GLOW ELEMENT */}
      <div
        ref={orbRef}
        className="card-orb absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10 opacity-0"
        style={{
          width: `${orbSize}px`,
          height: `${orbSize}px`,
          background: isDark
            ? `radial-gradient(circle, rgba(244,81,0,0.26) 0%, rgba(244,81,0,0.12) 35%, rgba(244,81,0,0.03) 60%, transparent 75%)`
            : `radial-gradient(circle, rgba(244,81,0,0.16) 0%, rgba(244,81,0,0.08) 35%, rgba(244,81,0,0.02) 60%, transparent 75%)`,
          filter: 'blur(10px)',
        }}
      />

      {/* CARD CONTENT WITH Z-INDEX 2 */}
      <div className="card-content relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
