import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, Shield, Network, Server, Lock, Laptop, Globe, Clock, UserCheck, Smartphone, Code, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/Button";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'cctv-surveillance': <Shield className="w-3.5 h-3.5 text-[#E65100]" />,
  'security-surveillance': <Shield className="w-3.5 h-3.5 text-[#E65100]" />,
  'networking': <Network className="w-3.5 h-3.5 text-[#E65100]" />,
  'networking-solutions': <Network className="w-3.5 h-3.5 text-[#E65100]" />,
  'it-infrastructure': <Server className="w-3.5 h-3.5 text-[#E65100]" />,
  'cybersecurity': <Lock className="w-3.5 h-3.5 text-[#E65100]" />,
  'web-development': <Globe className="w-3.5 h-3.5 text-[#E65100]" />,
  'app-development': <Smartphone className="w-3.5 h-3.5 text-[#E65100]" />,
  'computers-laptops': <Laptop className="w-3.5 h-3.5 text-[#E65100]" />,
  'digital-solutions': <Code className="w-3.5 h-3.5 text-[#E65100]" />,
  'attendance-software': <Clock className="w-3.5 h-3.5 text-[#E65100]" />,
  'visitor-management-software': <UserCheck className="w-3.5 h-3.5 text-[#E65100]" />,
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full m-0 p-0 mb-0">
      <div
        className={`flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[56px] w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F4F0]/95 backdrop-blur-md shadow-xs border-black/10'
            : 'bg-[#F5F4F0] border-black/5'
        }`}
      >
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src="/images/logo.png"
            alt="C&G Infotech"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* CENTER: NAV LINKS WITH SERVICES DROPDOWN */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="gap-5 sm:gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent !text-[#181715] hover:!text-[#E65100] !font-medium text-[13px] px-1 ${
                  location.pathname === '/' ? '!font-bold !text-[#E65100]' : ''
                }`}
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent !text-[#181715] hover:!text-[#E65100] !font-medium text-[13px] px-1 ${
                  location.pathname === '/about' ? '!font-bold !text-[#E65100]' : ''
                }`}
              >
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* SERVICES DROPDOWN */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!bg-transparent !text-[#181715] hover:!text-[#E65100] !font-medium text-[13px] px-1 data-[state=open]:!text-[#E65100]">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[620px] grid-cols-2 p-3.5 bg-[#FFFFFF] border border-black/10 rounded-xl shadow-lg gap-1">
                  {SERVICES_DATA.map((srv) => (
                    <NavigationMenuLink
                      key={srv.id}
                      asChild
                      className="rounded-lg p-2.5 transition-all hover:bg-[#F5F4F0] group"
                    >
                      <Link to={`/services/${srv.slug}`} className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-[#FDEEE9] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E65100] transition-colors">
                          {SERVICE_ICONS[srv.slug] || <Shield className="w-3.5 h-3.5 text-[#E65100] group-hover:text-white" />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#181715] group-hover:text-[#E65100] transition-colors mb-0.5">
                            {srv.title}
                          </p>
                          <p className="text-[11px] text-[#66635C] line-clamp-1">
                            {srv.shortDescription}
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                  <div className="col-span-2 pt-2.5 mt-1 border-t border-black/5 flex items-center justify-between px-1">
                    <span className="text-[11px] text-[#66635C] font-mono">End-to-End Enterprise Tech</span>
                    <Link to="/services" className="text-xs font-bold text-[#E65100] hover:underline inline-flex items-center gap-1">
                      View All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent !text-[#181715] hover:!text-[#E65100] !font-medium text-[13px] px-1 ${
                  location.pathname === '/products' ? '!font-bold !text-[#E65100]' : ''
                }`}
              >
                <Link to="/products">Products</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent !text-[#181715] hover:!text-[#E65100] !font-medium text-[13px] px-1 ${
                  location.pathname === '/industries' ? '!font-bold !text-[#E65100]' : ''
                }`}
              >
                <Link to="/industries">Industries</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent !text-[#181715] hover:!text-[#E65100] !font-medium text-[13px] px-1 ${
                  location.pathname === '/contact' ? '!font-bold !text-[#E65100]' : ''
                }`}
              >
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* RIGHT: COMPACT CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <Link to="/get-quote" className="btn-primary-orange !h-[36px] !px-4 !text-[12px]">
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="!h-9 !w-9 !rounded-full !bg-white/60 !border-black/10">
              <Menu className="h-4 w-4 text-[#181715]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-[85vh] overflow-y-auto bg-[#F5F4F0] text-[#181715] border-b border-black/10 p-5 rounded-b-2xl">
            <SheetHeader className="mb-3">
              <SheetTitle className="text-left font-bold text-base">
                C&G INFOTECH
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 text-sm">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-medium hover:bg-black/5"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-medium hover:bg-black/5"
              >
                About
              </Link>

              {/* ACCORDION COLLAPSIBLE MOBILE SERVICES ITEM */}
              <div className="border-y border-black/5 py-1 my-1">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-semibold hover:bg-black/5 text-[#181715] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>Services</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E65100]/10 text-[#E65100] font-bold">
                      {SERVICES_DATA.length}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#E65100] transition-transform duration-250 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="grid grid-cols-1 gap-1 pl-3 pr-1 py-1 mt-1 bg-black/[0.03] rounded-lg">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold text-[#181715] hover:bg-black/5 hover:text-[#E65100] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E65100] shrink-0" />
                        <span>{srv.title}</span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-[#E65100] hover:bg-[#E65100]/10 transition-colors mt-0.5"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-medium hover:bg-black/5"
              >
                Products
              </Link>
              <Link
                to="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-medium hover:bg-black/5"
              >
                Industries
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-medium hover:bg-black/5"
              >
                Contact
              </Link>
              <div className="mt-3 pt-3 border-t border-black/10">
                <Link
                  to="/get-quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary-orange w-full justify-center !h-10"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
