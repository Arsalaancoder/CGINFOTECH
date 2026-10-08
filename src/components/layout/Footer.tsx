import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="cg-master-canvas">
      <div className="cg-section-block !mb-0 text-[#181715]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-black/10">
          {/* LOGO & BRAND SUMMARY */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="C&G Infotech Logo"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-bold text-xl tracking-tight text-[#181715]">
                C&G <span className="text-[#E65100]">INFOTECH</span>
              </span>
            </Link>
            <p className="text-sm text-[#66635C] leading-relaxed max-w-sm">
              Complete IT infrastructure, HD surveillance, enterprise networking, computer hardware supply and business management software solutions.
            </p>
            <div className="space-y-2 text-xs text-[#66635C] font-mono pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E65100]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E65100]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E65100] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 1: COMPANY */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-sm uppercase tracking-wider text-[#181715]">Company</p>
            <ul className="space-y-2 text-xs text-[#66635C]">
              <li><Link to="/" className="hover:text-[#E65100] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E65100] transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-[#E65100] transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-[#E65100] transition-colors">Contact</Link></li>
              <li><Link to="/get-quote" className="hover:text-[#E65100] transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-sm uppercase tracking-wider text-[#181715]">Services</p>
            <ul className="space-y-2 text-xs text-[#66635C]">
              <li><Link to="/services/security-surveillance" className="hover:text-[#E65100] transition-colors">Security & Surveillance</Link></li>
              <li><Link to="/services/networking-solutions" className="hover:text-[#E65100] transition-colors">Networking Solutions</Link></li>
              <li><Link to="/services/it-infrastructure" className="hover:text-[#E65100] transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-[#E65100] transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/computer-laptop-solutions" className="hover:text-[#E65100] transition-colors">Computer & Laptop Solutions</Link></li>
              <li><Link to="/services/digital-solutions" className="hover:text-[#E65100] transition-colors">Website & Mobile App Dev</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SOFTWARE & PRODUCTS */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-sm uppercase tracking-wider text-[#181715]">Software & Products</p>
            <ul className="space-y-2 text-xs text-[#66635C]">
              <li><Link to="/services/attendance-software" className="hover:text-[#E65100] transition-colors font-semibold text-[#181715]">Attendance Software</Link></li>
              <li><Link to="/services/visitor-management-software" className="hover:text-[#E65100] transition-colors font-semibold text-[#181715]">Visitor Management</Link></li>
              <li><Link to="/products" className="hover:text-[#E65100] transition-colors">CCTV & NVR Systems</Link></li>
              <li><Link to="/products" className="hover:text-[#E65100] transition-colors">Enterprise Wi-Fi & Switches</Link></li>
              <li><Link to="/products" className="hover:text-[#E65100] transition-colors font-semibold text-[#181715]">Refurbished Laptops</Link></li>
              <li><Link to="/products" className="hover:text-[#E65100] transition-colors">Barcode & POS Printers</Link></li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#66635C] gap-4">
          <p>© {new Date().getFullYear()} C&G Infotech. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
