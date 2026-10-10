import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/motion/PageTransition';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { Products } from '@/pages/Products';
import { Industries } from '@/pages/Industries';
import { Contact } from '@/pages/Contact';
import { GetQuote } from '@/pages/GetQuote';

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop helper on route change with GSAP ScrollTrigger refresh
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after initial mount layout rendering
    const initTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(initTimer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#A19A89] font-sans antialiased text-[#181715] selection:bg-[#E65100] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
