import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  capabilities?: string[];
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  title,
  shortDescription,
  iconName,
  capabilities,
  className = ''
}) => {
  // Dynamically resolve icon from Lucide safely with unknown cast
  const IconComponent = ((LucideIcons as unknown) as Record<string, React.ElementType>)[iconName] || LucideIcons.ShieldCheck;

  return (
    <Link
      to={`/services/${slug}`}
      className={`cg-card group p-8 flex flex-col justify-between h-full bg-white relative overflow-hidden ${className}`}
    >
      <div>
        {/* Icon Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#E9F1EE] text-[#143D34] flex items-center justify-center group-hover:bg-[#143D34] group-hover:text-white transition-colors duration-400">
            <IconComponent className="w-7 h-7 stroke-[1.75]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F6F7F5] text-[#397A68] flex items-center justify-center group-hover:bg-[#397A68] group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#1D2522] mb-3 group-hover:text-[#143D34] transition-colors">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#68716D] leading-relaxed mb-6">
          {shortDescription}
        </p>

        {/* Capabilities Pills if provided */}
        {capabilities && capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#143D34]/10">
            {capabilities.slice(0, 3).map((cap, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold text-[#397A68] bg-[#E9F1EE] px-2.5 py-1 rounded-md"
              >
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#143D34] group-hover:text-[#397A68] transition-colors">
        <span>Explore Solutions</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
};
