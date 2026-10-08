import React from 'react';
import { Image } from 'lucide-react';

interface ImageSlotProps {
  id: string;
  aspect?: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  aspect = 'aspect-video',
  label,
  className = '',
  children
}) => {
  return (
    <div
      data-image-slot={id}
      className={`relative overflow-hidden rounded-2xl bg-[#DCE7E2] border border-[#397A68]/15 flex flex-col items-center justify-center text-[#397A68] transition-all duration-300 group hover:border-[#397A68]/30 ${aspect} ${className}`}
    >
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#397A68 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Decorative Subtle Geometry */}
      <div className="absolute top-4 right-4 text-[10px] font-mono tracking-wider text-[#397A68]/60 bg-[#E9F1EE] px-2.5 py-1 rounded-md border border-[#397A68]/10 select-none">
        SLOT: {id}
      </div>

      {children ? (
        children
      ) : (
        <div className="relative z-10 flex flex-col items-center gap-2 p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#E9F1EE] border border-[#397A68]/20 flex items-center justify-center text-[#143D34] shadow-sm group-hover:scale-105 transition-transform">
            <Image className="w-6 h-6 stroke-[1.5]" />
          </div>
          {label && (
            <span className="text-xs font-semibold tracking-wide text-[#143D34] max-w-[240px]">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
