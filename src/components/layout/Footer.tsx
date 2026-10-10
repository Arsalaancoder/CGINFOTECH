import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="cg-master-canvas bg-[#F6F2EA] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-[#111111]">
        
        {/* MAIN FOOTER 4-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-black/[0.08]">
          
          {/* COLUMN 1: BRAND LOGO + DESCRIPTION + SOCIAL ICONS (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/images/logo.png"
                alt="C&G Infotech Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-extrabold text-xl tracking-tight text-[#111111] font-heading">
                C&G <span className="text-[#E65100]">INFOTECH</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#6E6960] leading-relaxed max-w-sm">
              Complete IT infrastructure, HD CCTV surveillance, structured networking, corporate hardware supply, and custom software automation.
            </p>

            <div className="space-y-1.5 text-xs text-[#6E6960] font-mono pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E65100]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E65100]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {/* SOCIAL SVG ICONS */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#EBE7DF] hover:bg-[#E65100] text-[#111111] hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[#EBE7DF] hover:bg-[#E65100] text-[#111111] hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#EBE7DF] hover:bg-[#E65100] text-[#111111] hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Telegram" className="w-8 h-8 rounded-full bg-[#EBE7DF] hover:bg-[#E65100] text-[#111111] hover:text-white flex items-center justify-center transition-colors">
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: COMPANY LINKS (2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-sm text-[#111111] font-heading">Company</p>
            <ul className="space-y-2 text-xs font-medium text-[#6E6960]">
              <li><Link to="/" className="hover:text-[#E65100] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E65100] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#E65100] transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-[#E65100] transition-colors">Products</Link></li>
              <li><Link to="/industries" className="hover:text-[#E65100] transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-[#E65100] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES & SOLUTIONS (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-sm text-[#111111] font-heading">Services & Solutions</p>
            <ul className="space-y-2 text-xs font-medium text-[#6E6960]">
              <li><Link to="/services/cctv-surveillance" className="hover:text-[#E65100] transition-colors">Security & Surveillance</Link></li>
              <li><Link to="/services/networking" className="hover:text-[#E65100] transition-colors">Networking Solutions</Link></li>
              <li><Link to="/services/it-infrastructure" className="hover:text-[#E65100] transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-[#E65100] transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/attendance-software" className="hover:text-[#E65100] transition-colors font-semibold text-[#111111]">Attendance Software</Link></li>
              <li><Link to="/services/visitor-management" className="hover:text-[#E65100] transition-colors font-semibold text-[#111111]">Visitor Management</Link></li>
              <li><Link to="/services/refurbished-laptops" className="hover:text-[#E65100] transition-colors font-semibold text-[#111111]">Refurbished Laptops</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER SUBSCRIPTION (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-sm text-[#111111] font-heading">Newsletter</p>
            <p className="text-xs text-[#6E6960] leading-relaxed">
              Get technical insights, product updates, and maintenance advice for your business infrastructure.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-[#EBE7DF] p-1.5 rounded-full border border-black/10 shadow-2xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="bg-transparent px-4 py-2 text-xs text-[#111111] placeholder-[#6E6960] focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#E65100] hover:bg-[#CF4700] text-white text-xs font-bold px-5 py-2.5 rounded-full inline-flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-xs"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] font-bold text-[#E65100] pl-3">
                  Thank you for subscribing to C&G Infotech!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E6960] gap-4">
          <p>© {new Date().getFullYear()} C&G Infotech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Security</Link>
            <Link to="/contact" className="hover:text-[#E65100] transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
