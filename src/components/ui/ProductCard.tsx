import React from 'react';
import type { ProductItem } from '@/data/products';
import { ImageSlot } from './ImageSlot';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div className={`cg-card p-6 sm:p-8 bg-white flex flex-col justify-between h-full ${className}`}>
      <div>
        {/* Category & Badge Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#397A68]">
            {product.category}
          </span>
          <span className="cg-badge text-[10px] py-0.5 px-2.5">
            {product.badgeText}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold text-[#1D2522] mb-1">
          {product.title}
        </h3>
        <p className="text-xs font-semibold text-[#397A68] mb-4">
          {product.tagline}
        </p>

        {/* Empty UI Preview Area - NO SCREENSHOTS per policy */}
        <ImageSlot
          id={product.imageSlotId}
          aspect="aspect-[16/10]"
          label={`${product.title} Dashboard UI Preview`}
          className="mb-6 rounded-xl"
        />

        {/* Description */}
        <p className="text-sm text-[#68716D] leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2.5 mb-8">
          {product.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#1D2522] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#397A68] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button to="/contact" variant="secondary" size="sm" className="w-full">
        Request Demo & Quote
      </Button>
    </div>
  );
};
