import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceTrustStripProps {
  items?: string[];
}

const DEFAULT_ITEMS = [
  'HD CCTV & IP Surveillance',
  'Enterprise LAN / WAN & Wi-Fi',
  'Server Room & Hardware AMC',
  'Cybersecurity & Firewall',
  'Biometric & Attendance',
  '24/7 Rapid SLA Support',
];

export const ServiceTrustStrip: React.FC<ServiceTrustStripProps> = ({ items = DEFAULT_ITEMS }) => {
  return (
    <section className="cg-master-canvas bg-[#111111] text-white py-6 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8 text-xs sm:text-sm font-mono tracking-wider font-semibold uppercase">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-white/90 hover:text-[#E65100] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#E65100] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
