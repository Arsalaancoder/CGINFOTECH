import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Laptop,
  Printer,
  Video,
  Network,
  HardDrive,
  Fingerprint,
  QrCode,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Cpu,
  Database,
  Lock,
  Wifi,
  Gauge,
  Eye,
  Activity,
  Save,
  Clock,
  Scan,
  Store,
  Layers,
  Award,
  BatteryCharging,
  Feather,
  Layout,
  Briefcase,
  Sparkles,
  BookOpen,
  RotateCcw,
  ChevronLeft,
} from 'lucide-react';

export interface CatalogThumbnail {
  name: string;
  img: string;
}

export interface NewBookPageData {
  id: string;
  type: 'intro' | 'product';
  catNumber?: string;
  categoryName?: string;
  navLabel: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  description: string;
  heroImage?: string;
  specsTitle?: string;
  specs?: { label: string; icon: React.ElementType }[];
  features?: { label: string; icon: React.ElementType }[];
  thumbnails?: CatalogThumbnail[];
}

const NEW_BOOK_PAGES: NewBookPageData[] = [
  {
    id: 'intro',
    type: 'intro',
    navLabel: 'Overview',
    icon: BookOpen,
    title: 'Hardware & Hardware Supply',
    subtitle: 'Interactive Product Catalog',
    description:
      'Explore C&G Infotech’s business hardware solutions across desktops, laptops, printers, surveillance, networking, storage, biometrics and POS technologies.',
  },
  {
    id: 'desktops',
    type: 'product',
    catNumber: '01',
    categoryName: 'Computing',
    navLabel: '01 Desktops',
    icon: Monitor,
    title: 'Business Desktops',
    description:
      'Reliable performance for modern workplaces. From everyday productivity to high-performance workstations.',
    heroImage: '/catalog/01_desktops_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'Intel Core i5 / i7', icon: Cpu },
      { label: '8GB – 32GB RAM', icon: Layers },
      { label: '256GB – 1TB SSD', icon: HardDrive },
      { label: 'Windows 11 Pro', icon: Layout },
    ],
    features: [
      { label: 'High Performance', icon: Zap },
      { label: 'Business Ready', icon: Briefcase },
      { label: 'Reliable & Secure', icon: ShieldCheck },
      { label: 'Multiple Form Factors', icon: Monitor },
    ],
    thumbnails: [
      { name: 'Tower PC', img: '/catalog/01_desktops_thumb_1.jpg' },
      { name: 'All-in-One', img: '/catalog/01_desktops_thumb_2.jpg' },
      { name: 'Workstation', img: '/catalog/01_desktops_thumb_3.jpg' },
      { name: 'Mini PC', img: '/catalog/01_desktops_thumb_4.jpg' },
    ],
  },
  {
    id: 'laptops',
    type: 'product',
    catNumber: '02',
    categoryName: 'Computing',
    navLabel: '02 Laptops',
    icon: Laptop,
    title: 'Laptops & Workstations',
    description:
      'Powerful, portable and built for business. Explore a range of laptops for every professional need.',
    heroImage: '/catalog/02_laptops_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'Intel Core i5 / i7', icon: Cpu },
      { label: '16GB RAM', icon: Layers },
      { label: '512GB / 1TB SSD', icon: HardDrive },
      { label: 'Business Security', icon: ShieldCheck },
    ],
    features: [
      { label: 'Lightweight Design', icon: Feather },
      { label: 'Long Battery Life', icon: BatteryCharging },
      { label: 'Enterprise Security', icon: Lock },
      { label: 'Wide Model Range', icon: Laptop },
    ],
    thumbnails: [
      { name: 'Ultrabook', img: '/catalog/02_laptops_thumb_1.jpg' },
      { name: 'Pro Laptop', img: '/catalog/02_laptops_thumb_2.jpg' },
      { name: 'Mobile Studio', img: '/catalog/02_laptops_thumb_3.jpg' },
      { name: 'Compact Laptop', img: '/catalog/02_laptops_thumb_4.jpg' },
    ],
  },
  {
    id: 'printers',
    type: 'product',
    catNumber: '03',
    categoryName: 'Printing',
    navLabel: '03 Printers',
    icon: Printer,
    title: 'Printers',
    description:
      'High-quality printing solutions for offices and institutions, including laser, inkjet and multifunction printers.',
    heroImage: '/catalog/03_printers_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'Laser / Inkjet / MFP', icon: Printer },
      { label: 'A3 / A4 Printing', icon: Layout },
      { label: 'Color / Mono', icon: Layers },
      { label: 'Network / Wireless', icon: Wifi },
    ],
    features: [
      { label: 'High Print Speed', icon: Gauge },
      { label: 'Cost Efficient', icon: Zap },
      { label: 'Wireless Connectivity', icon: Wifi },
      { label: 'Business Grade', icon: Award },
    ],
    thumbnails: [
      { name: 'Desktop MFP', img: '/catalog/03_printers_thumb_1.jpg' },
      { name: 'Color Laser', img: '/catalog/03_printers_thumb_2.jpg' },
      { name: 'Network Printer', img: '/catalog/03_printers_thumb_3.jpg' },
      { name: 'Document Scanner', img: '/catalog/03_printers_thumb_4.jpg' },
    ],
  },
  {
    id: 'security',
    type: 'product',
    catNumber: '04',
    categoryName: 'Security',
    navLabel: '04 Security',
    icon: Video,
    title: 'CCTV & Security',
    description:
      'Advanced surveillance and security solutions for safe and smart environments.',
    heroImage: '/catalog/04_security_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'IP Cameras', icon: Video },
      { label: 'HD Cameras', icon: Eye },
      { label: 'PTZ Cameras', icon: Zap },
      { label: 'NVR / DVR', icon: Database },
      { label: 'Access Control', icon: Lock },
    ],
    features: [
      { label: 'Indoor & Outdoor', icon: Eye },
      { label: 'Remote Monitoring', icon: Wifi },
      { label: 'Night Vision', icon: Eye },
      { label: 'Scalable Systems', icon: Layers },
    ],
    thumbnails: [
      { name: 'Dome Camera', img: '/catalog/04_security_thumb_1.jpg' },
      { name: 'Bullet Camera', img: '/catalog/04_security_thumb_2.jpg' },
      { name: 'PTZ Dome', img: '/catalog/04_security_thumb_3.jpg' },
      { name: 'NVR Server', img: '/catalog/04_security_thumb_4.jpg' },
    ],
  },
  {
    id: 'networking',
    type: 'product',
    catNumber: '05',
    categoryName: 'Networking',
    navLabel: '05 Networking',
    icon: Network,
    title: 'Networking Devices',
    description:
      'Reliable and scalable networking solutions for seamless and secure connectivity.',
    heroImage: '/catalog/05_networking_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'Routers', icon: Network },
      { label: 'Managed Switches', icon: Layers },
      { label: 'Wi-Fi Access Points', icon: Wifi },
      { label: 'Firewalls', icon: ShieldCheck },
      { label: 'Structured Cabling', icon: Activity },
    ],
    features: [
      { label: 'Fast Performance', icon: Zap },
      { label: 'Secure Connectivity', icon: Lock },
      { label: 'Scalable Networks', icon: Network },
      { label: 'Enterprise & SMB', icon: Briefcase },
    ],
    thumbnails: [
      { name: 'Managed Switch', img: '/catalog/05_networking_thumb_1.jpg' },
      { name: 'Enterprise Router', img: '/catalog/05_networking_thumb_2.jpg' },
      { name: 'Wi-Fi 6 AP', img: '/catalog/05_networking_thumb_3.jpg' },
      { name: 'Cat6 Patch Panel', img: '/catalog/05_networking_thumb_4.jpg' },
    ],
  },
  {
    id: 'storage',
    type: 'product',
    catNumber: '06',
    categoryName: 'Storage',
    navLabel: '06 Storage',
    icon: HardDrive,
    title: 'Storage & Backup',
    description:
      'Dependable storage solutions to protect your data and keep your business running.',
    heroImage: '/catalog/06_storage_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'NAS (Network Storage)', icon: Database },
      { label: 'External HDD', icon: HardDrive },
      { label: 'SSD (Solid State Drive)', icon: Zap },
      { label: 'Backup Devices', icon: Save },
      { label: 'Server Storage', icon: Layers },
    ],
    features: [
      { label: 'Reliable Storage', icon: Database },
      { label: 'Fast Data Access', icon: Zap },
      { label: 'Backup Ready', icon: Save },
      { label: 'Business Use', icon: Briefcase },
    ],
    thumbnails: [
      { name: 'NAS Server', img: '/catalog/06_storage_thumb_1.jpg' },
      { name: 'Internal Drive', img: '/catalog/06_storage_thumb_2.jpg' },
      { name: 'Pro SSD', img: '/catalog/06_storage_thumb_3.jpg' },
      { name: 'Backup Bay', img: '/catalog/06_storage_thumb_4.jpg' },
    ],
  },
  {
    id: 'biometrics',
    type: 'product',
    catNumber: '07',
    categoryName: 'Biometrics',
    navLabel: '07 Biometrics',
    icon: Fingerprint,
    title: 'Biometric Devices',
    description:
      'Modern biometric solutions for attendance management and access control.',
    heroImage: '/catalog/07_biometrics_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'Fingerprint Devices', icon: Fingerprint },
      { label: 'Face Recognition', icon: Eye },
      { label: 'Attendance Terminals', icon: Clock },
      { label: 'Access Control', icon: Lock },
      { label: 'Integration & Reports', icon: Activity },
    ],
    features: [
      { label: 'Fast Authentication', icon: CheckCircle2 },
      { label: 'Secure Entry', icon: Lock },
      { label: 'Attendance Integration', icon: Clock },
      { label: 'Central Management', icon: Database },
    ],
    thumbnails: [
      { name: 'Fingerprint Pad', img: '/catalog/07_biometrics_thumb_1.jpg' },
      { name: 'Face Terminal', img: '/catalog/07_biometrics_thumb_2.jpg' },
      { name: 'Card Scanner', img: '/catalog/07_biometrics_thumb_3.jpg' },
      { name: 'Door Lock Kit', img: '/catalog/07_biometrics_thumb_4.jpg' },
    ],
  },
  {
    id: 'pos',
    type: 'product',
    catNumber: '08',
    categoryName: 'POS & Barcode',
    navLabel: '08 POS',
    icon: QrCode,
    title: 'POS & Barcode',
    description:
      'Complete POS and barcode solutions for retail, hospitality and business operations.',
    heroImage: '/catalog/08_pos_hero.png',
    specsTitle: 'Key Specifications',
    specs: [
      { label: 'Barcode Scanner', icon: Scan },
      { label: 'Barcode Printer', icon: Printer },
      { label: 'POS Printer', icon: Printer },
      { label: 'POS Terminal', icon: Store },
      { label: 'Accessories', icon: Layers },
    ],
    features: [
      { label: 'Retail Ready', icon: Store },
      { label: 'Fast Scanning', icon: Scan },
      { label: 'Durable Hardware', icon: Award },
      { label: 'Business Integration', icon: Layers },
    ],
    thumbnails: [
      { name: '2D Scanner', img: '/catalog/08_pos_thumb_1.jpg' },
      { name: 'Receipt Printer', img: '/catalog/08_pos_thumb_2.jpg' },
      { name: 'Label Printer', img: '/catalog/08_pos_thumb_3.jpg' },
      { name: 'POS Terminal', img: '/catalog/08_pos_thumb_4.jpg' },
    ],
  },
];

// REALISTIC PHYSICAL PAGE FLIP AUDIO FILE
const pageFlipAudio = typeof window !== 'undefined' ? new Audio('/sounds/page-flip-real.mp3') : null;
if (pageFlipAudio) {
  pageFlipAudio.volume = 0.45;
}

function playPageFlipSound() {
  if (!pageFlipAudio) return;
  pageFlipAudio.pause();
  pageFlipAudio.currentTime = 0;
  pageFlipAudio.play().catch(() => {});
}

const playBookOpenSound = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {}
};

const playBookCloseSound = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.25);
  } catch (e) {}
};

export const ProductsPreview: React.FC = () => {
  const [isBookOpen, setIsBookOpen] = useState<boolean>(false);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hasTurnedPage, setHasTurnedPage] = useState<boolean>(false);

  const currentPageData = NEW_BOOK_PAGES[activePageIndex];
  const isFinalPage = activePageIndex === NEW_BOOK_PAGES.length - 1;

  // Open Book Action
  const handleOpenBook = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimating) return;

    setIsAnimating(true);
    playBookOpenSound();
    setIsBookOpen(true);
    setActivePageIndex(0);

    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  };

  // Turn One Page Forward
  const handleNextPage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimating) return;

    if (activePageIndex >= NEW_BOOK_PAGES.length - 1) {
      handleAutoCloseBook();
      return;
    }

    setIsAnimating(true);
    setHasTurnedPage(true);
    playPageFlipSound();
    setActivePageIndex((prev) => prev + 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 820);
  };

  // Turn One Page Backward
  const handlePrevPage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimating) return;
    if (activePageIndex <= 0) return;

    setIsAnimating(true);
    playPageFlipSound();
    setActivePageIndex((prev) => prev - 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 820);
  };

  // Auto-Close Catalog when tapping after final page
  const handleAutoCloseBook = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    playBookCloseSound();

    setTimeout(() => {
      setIsBookOpen(false);
      setActivePageIndex(0);
      setIsAnimating(false);
      setHasTurnedPage(false);
    }, 500);
  };

  // Main Book Container Tap Delegate
  const handleBookContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating) return;

    if (!isBookOpen) {
      handleOpenBook();
      return;
    }

    // Check click position relative to book container: left side goes back, right side goes forward
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeftSide = clickX < rect.width / 2;

    if (isLeftSide && activePageIndex > 0) {
      handlePrevPage();
    } else if (!isFinalPage) {
      handleNextPage();
    } else {
      handleAutoCloseBook();
    }
  };

  return (
    <section className="hardware-catalog-section relative w-full bg-[#ECE6D8] text-[#111111] py-24 md:py-32 lg:py-36 overflow-hidden select-none min-h-[90vh] flex flex-col justify-between items-center">
      
      {/* 1. TOP MINIMAL LABEL (Exact match to reference image) */}
      <div className="catalog-top-label text-center space-y-1 z-10 pt-2">
        <span className="block text-[11px] sm:text-xs font-mono font-black tracking-[0.25em] text-[#2D2A26] uppercase">
          INTERACTIVE HARDWARE CATALOG
        </span>
        <span className="block text-[10px] font-mono tracking-widest text-[#555048] uppercase">
          BUILT FOR C&G INFOTECH
        </span>
      </div>

      {/* 2. MAIN CENTER BOOK STAGE (Perspective 2200px) */}
      <div className="book-stage my-auto w-full flex flex-col items-center justify-center py-6 px-4 [perspective:2200px]">
        {!isBookOpen ? (
          /* ========================================================= */
          /* CLOSED BOOK STATE (Exact match to Reference Image 1)      */
          /* ========================================================= */
          <div className="relative flex flex-col items-center justify-center">
            
            {/* HANDWRITTEN "Click to Open Book!" INSTRUCTION NOTE WITH ARROW */}
            <div className="absolute top-8 -right-36 lg:-right-44 hidden sm:flex flex-col items-start pointer-events-none z-30">
              <span className="font-serif italic text-lg sm:text-xl font-extrabold text-[#2D2A26] tracking-wide rotate-[-4deg] leading-tight drop-shadow-xs">
                Click to <br />
                Open Book!
              </span>
              <svg
                className="w-16 h-16 text-[#2D2A26] mt-1 -ml-4 transform rotate-[15deg]"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 20,10 Q 70,25 35,75" />
                <path d="M 20,65 L 35,75 L 45,55" />
              </svg>
            </div>

            {/* CENTERED VERTICAL CLOSED BOOK CARD */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={handleOpenBook}
              className="book relative w-[min(350px,84vw)] h-[min(510px,68vh)] rounded-[14px] bg-[#141414] border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] cursor-pointer group transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_35px_80px_-12px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8 sm:p-10 select-none overflow-hidden [transform-style:preserve-3d]"
              style={{
                background: 'radial-gradient(circle at 50% 30%, #2A2A2A 0%, #121212 100%)',
              }}
            >
              {/* Spine seam edge on left side */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 via-white/5 to-transparent border-r border-white/10 z-20" />

              {/* Paper page edges visible on right side */}
              <div className="absolute right-0 top-1 bottom-1 w-2.5 bg-gradient-to-b from-[#F5F2EB] via-[#FAF8F5] to-[#EAE6DD] rounded-r-xs border-l border-black/30 shadow-inner z-20" />

              {/* COVER ARTWORK & TYPOGRAPHY */}
              <div className="flex flex-col justify-between h-full text-center relative z-10 py-2">
                <div className="space-y-1.5">
                  <span className="block text-[11px] font-mono font-bold tracking-[0.25em] text-[#FF4A16] uppercase">
                    C&G INFOTECH
                  </span>
                  <div className="w-8 h-0.5 bg-[#FF4A16] mx-auto rounded-full" />
                </div>

                <div className="space-y-3 my-auto py-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight uppercase font-heading">
                    Hardware & <br />
                    <span className="text-[#FF4A16]">Hardware Supply</span>
                  </h3>
                  <div className="w-12 h-px bg-white/20 mx-auto" />
                  <p className="text-[11px] font-mono text-gray-300 tracking-wider uppercase">
                    Interactive Product Catalog
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-white/80 group-hover:text-[#FF4A16] transition-colors uppercase">
                    Click to Open →
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        ) : (
          /* ========================================================= */
          /* NEW OPENED BOOK STATE (Exact match to Reference Image 2)  */
          /* Tap anywhere on book = FLIP ONE PAGE FORWARD              */
          /* ========================================================= */
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full flex flex-col items-center"
          >
            {/* NEW 2-PAGE SPREAD INTERACTIVE BOOK CONTAINER (TAP ANYWHERE TO TURN PAGE) */}
            <div
              onClick={handleBookContainerClick}
              className="interactive-book book relative w-[min(840px,94vw)] sm:h-[min(540px,72vh)] h-[540px] min-h-[460px] rounded-[16px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45)] border border-black/15 overflow-hidden flex bg-[#141414] select-none cursor-pointer hover:shadow-[0_35px_80px_-12px_rgba(0,0,0,0.55)] transition-shadow [transform-style:preserve-3d]"
            >
              
              {/* LEFT SIDE: DARK INSIDE COVER / ENDPAPER (Hidden on mobile, visible on desktop md+) */}
              <div className="hidden md:flex w-1/2 h-full bg-[#141414] border-r border-black/30 relative p-6 lg:p-8 flex-col justify-between overflow-hidden">
                {/* Spine Fold Seam Shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/60 via-black/20 to-transparent pointer-events-none z-20" />
                
                {/* Top Logo & Page Counter */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF4A16] text-white flex items-center justify-center font-bold text-[9px]">
                      C
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                      C&G INFOTECH
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">
                    PAGE {activePageIndex === 0 ? '00' : currentPageData.catNumber} / 08
                  </span>
                </div>

                {/* Left Side Content: Dark Category Endpaper Overview */}
                <div className="my-auto py-4 space-y-4 relative z-10">
                  {currentPageData.type === 'intro' ? (
                    <div className="space-y-3">
                      <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#FF4A16] uppercase bg-[#FF4A16]/10 px-2.5 py-1 rounded border border-[#FF4A16]/20">
                        CATALOG INDEX
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                        Technology Solutions <br />
                        <span className="text-[#FF4A16]">Directory</span>
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                        Tap anywhere on the book to flip through C&G Infotech's product lineup.
                      </p>

                      {/* Quick Category List */}
                      <div className="grid grid-cols-2 gap-1.5 pt-2">
                        {NEW_BOOK_PAGES.slice(1).map((pg) => {
                          const IconC = pg.icon;
                          return (
                            <div
                              key={pg.id}
                              className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 border border-white/10 text-left text-white"
                            >
                              <span className="font-mono text-[9px] text-[#FF4A16] font-bold">
                                {pg.catNumber}
                              </span>
                              <IconC className="w-3 h-3 text-gray-300 shrink-0" />
                              <span className="text-[10px] font-bold truncate">
                                {pg.title.split(' ')[0]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-black text-[#FF4A16] font-mono leading-none">
                          {currentPageData.catNumber}
                        </span>
                        <div>
                          <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                            CATEGORY {currentPageData.catNumber}
                          </span>
                          <span className="block text-sm font-bold text-white">
                            {currentPageData.categoryName}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {currentPageData.title}
                      </h3>

                      {/* 4 Feature highlight pills */}
                      {currentPageData.features && (
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                          {currentPageData.features.map((feat, idx) => {
                            const FeatIcon = feat.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white"
                              >
                                <FeatIcon className="w-3.5 h-3.5 text-[#FF4A16] shrink-0" />
                                <span className="text-[10px] font-bold truncate">
                                  {feat.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Left Side Footer */}
                <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[10px] font-mono text-gray-400 relative z-10">
                  <span>C&G HARDWARE SUPPLY</span>
                  <span>2026 EDITION</span>
                </div>
              </div>

              {/* RIGHT SIDE: CLEAN RULED NOTEBOOK PAPER PAGE (Full width on mobile, 1/2 on desktop) */}
              <div className="w-full md:w-1/2 h-full bg-[#FAF8F5] relative p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Spine Seam Fold Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/15 via-black/5 to-transparent pointer-events-none z-20" />
                
                {/* Faint Horizontal Ruled Notebook Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_27px,#E6E2D8_28px)] bg-[length:100%_28px] opacity-40 pointer-events-none z-0" />

                {/* REALISTIC 3D PAGE TURN FLIP ANIMATION ON RIGHT PAGE */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePageIndex}
                    initial={{ rotateY: 45, z: 12, opacity: 0 }}
                    animate={{ rotateY: 0, z: 0, opacity: 1 }}
                    exit={{ rotateY: -45, z: 12, opacity: 0 }}
                    transition={{ duration: 0.82, ease: 'easeInOut' }}
                    className="page-sheet h-full flex flex-col justify-between relative z-10 [transform-style:preserve-3d] [transform-origin:left_center]"
                  >
                    {currentPageData.type === 'intro' ? (
                      /* ===================================================== */
                      /* FIRST OPEN PAGE: CLEAN INTRO PAGE                     */
                      /* ===================================================== */
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between border-b border-black/10 pb-2">
                          <span className="text-[10px] font-mono font-bold text-[#FF4A16] uppercase">
                            WELCOME TO C&G INFOTECH
                          </span>
                          <span className="text-[10px] font-mono text-[#6F6A61]">
                            PAGE 00 / 08
                          </span>
                        </div>

                        <div className="my-auto py-6 space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4A16]/10 text-[#FF4A16] text-xs font-mono font-bold uppercase border border-[#FF4A16]/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>HARDWARE & SUPPLY</span>
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight leading-tight">
                            C&G Infotech <br />
                            <span className="text-[#FF4A16]">Interactive Product Catalog</span>
                          </h2>

                          <p className="text-xs sm:text-sm text-[#555048] leading-relaxed max-w-sm">
                            Explore our business hardware solutions across desktops, laptops, printers, surveillance, networking, storage, biometrics and POS technologies.
                          </p>

                          <div className="pt-3">
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                              <span>Tap Book to Turn Page</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>

                        <div className="border-t border-black/10 pt-2 flex items-center justify-between text-[10px] font-mono text-[#6F6A61]">
                          <span>PAGE 01</span>
                          <span className="text-[#FF4A16] font-bold flex items-center gap-1 animate-pulse">
                            TAP BOOK TO TURN PAGE →
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* ===================================================== */
                      /* PRODUCT CATEGORY PAGES (01 to 08)                      */
                      /* ===================================================== */
                      <div className="flex flex-col justify-between h-full">
                        {/* 1. TOP AREA: LARGE HERO PRODUCT IMAGE */}
                        <div className="right-page-hero w-full h-[180px] sm:h-[235px] rounded-xl overflow-hidden bg-white/70 border border-black/10 p-2 flex items-center justify-center relative shadow-xs group">
                          <img
                            src={currentPageData.heroImage}
                            alt={currentPageData.title}
                            className="w-auto h-auto max-w-[92%] max-h-[170px] sm:max-h-[220px] object-contain object-center drop-shadow-md group-hover:scale-102 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white text-[9px] font-mono font-bold">
                            {currentPageData.categoryName?.toUpperCase()}
                          </div>
                          <div className="absolute top-2 right-2 md:hidden px-2 py-0.5 rounded bg-[#FF4A16] text-white text-[9px] font-mono font-bold">
                            PAGE {currentPageData.catNumber} / 08
                          </div>
                        </div>

                        {/* 2. MIDDLE AREA: SHORT PRODUCT OVERVIEW */}
                        <div className="pt-1.5">
                          <span className="block text-[10px] font-mono font-bold text-[#FF4A16] uppercase tracking-wider mb-0.5">
                            PRODUCT OVERVIEW
                          </span>
                          <p className="text-xs text-[#555048] leading-relaxed line-clamp-2">
                            {currentPageData.description}
                          </p>
                        </div>

                        {/* 3. NEXT AREA: KEY SPECIFICATIONS GRID */}
                        {currentPageData.specs && (
                          <div className="my-auto py-1">
                            <div className="bg-white/95 backdrop-blur-md p-2 rounded-xl border border-black/10 shadow-xs">
                              <div className="flex items-center gap-1.5 mb-1 pb-0.5 border-b border-black/10">
                                <Cpu className="w-3.5 h-3.5 text-[#FF4A16]" />
                                <span className="font-bold text-[10px] sm:text-[11px] text-[#111111] uppercase tracking-wider">
                                  {currentPageData.specsTitle}
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-1.5">
                                {currentPageData.specs.map((spec, idx) => {
                                  const SpecIcon = spec.icon;
                                  return (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-1.5 text-[10px] font-medium text-[#111111]"
                                    >
                                      <div className="w-3.5 h-3.5 rounded bg-[#FF4A16]/10 text-[#FF4A16] flex items-center justify-center shrink-0">
                                        <SpecIcon className="w-2.5 h-2.5" />
                                      </div>
                                      <span className="truncate">{spec.label}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 4. BOTTOM AREA: PRODUCT VARIANTS / MODELS */}
                        {currentPageData.thumbnails && (
                          <div>
                            <span className="block text-[9px] font-mono font-bold text-[#6F6A61] uppercase mb-1">
                              PRODUCT VARIANTS & MODELS
                            </span>
                            <div className="grid grid-cols-4 gap-1.5">
                              {currentPageData.thumbnails.map((thumb, idx) => (
                                <div
                                  key={idx}
                                  className="rounded-lg overflow-hidden border border-black/10 bg-white p-1 shadow-xs text-center"
                                >
                                  <div className="w-full h-8 sm:h-9 rounded bg-[#ECE6D8] flex items-center justify-center overflow-hidden">
                                    <img
                                      src={thumb.img}
                                      alt={thumb.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span className="block text-[8px] font-bold text-[#111111] truncate mt-0.5">
                                    {thumb.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* RIGHT PAGE FOOTER */}
                        <div className="border-t border-black/10 pt-2 flex items-center justify-between text-[10px] font-mono text-[#6F6A61]">
                          <Link
                            to="/contact"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#111111] hover:text-[#FF4A16] transition-colors"
                          >
                            <span>Inquire Hardware Specs</span>
                            <ChevronRight className="w-3 h-3 text-[#FF4A16]" />
                          </Link>
                          <span>PAGE {currentPageData.catNumber} / 08</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* BOTTOM-RIGHT FOLDED PAGE CORNER & TAP-TO-TURN HINT */}
                {!isFinalPage && !hasTurnedPage && (
                  <div className="absolute bottom-2 right-2 z-30 group flex items-center gap-1.5 px-2 py-1 rounded-tl-lg bg-[#ECE6D8] text-[#2D2A26] border-t border-l border-black/20 shadow-md transition-all pointer-events-none">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider">
                      Tap page to turn
                    </span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                )}

                {/* AUTO-CLOSE HINT ON FINAL PAGE (08 POS & BARCODE) */}
                {isFinalPage && (
                  <div className="absolute bottom-2 right-2 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] text-white text-[9px] font-mono font-bold uppercase animate-bounce">
                    <RotateCcw className="w-3 h-3 text-[#FF4A16]" />
                    <span>Tap to Close Catalog</span>
                  </div>
                )}

              </div>

            </div>

            {/* DEDICATED MOBILE NAVIGATION CONTROLS BELOW THE BOOK */}
            <div className="flex md:hidden items-center justify-between w-full max-w-xs px-2 pt-3.5 gap-2.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPage();
                }}
                disabled={activePageIndex === 0}
                className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-[#111111] text-white text-xs font-bold disabled:opacity-40 shadow-xs"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#FF4A16]" />
                <span>Prev</span>
              </button>
              <span className="text-[11px] font-mono font-bold text-[#111111] px-1">
                {activePageIndex} / 8
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPage();
                }}
                className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-[#FF4A16] text-white text-xs font-bold shadow-xs"
              >
                <span>{isFinalPage ? 'Close' : 'Next'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

          </motion.div>
        )}
      </div>

      {/* 3. BOTTOM MINIMAL INFO (Exact match to reference image) */}
      <div className="catalog-bottom-info text-center space-y-2 max-w-lg mx-auto z-10 pb-2">
        <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
          Hardware & Hardware Supply
        </h3>
        <p className="text-xs sm:text-sm text-[#555048] leading-relaxed px-4">
          Explore C&G Infotech’s interactive catalog of desktops, laptops, printers, CCTV, networking, storage, biometrics and POS solutions.
        </p>
      </div>
    </section>
  );
};
