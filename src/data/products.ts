export interface ProductItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  imageSlotId: string;
  image: string;
  badgeText: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'cctv-kit',
    title: '4K IP CCTV Camera & NVR Kit',
    category: 'Security',
    tagline: 'High Definition Smart Surveillance',
    description: 'Complete HD 4K camera bundle with night vision IR, PoE switch, 16-channel NVR and mobile remote monitoring application.',
    features: [
      '4K Ultra HD Resolution & Night Vision',
      'Power over Ethernet (PoE) Easy Wiring',
      'AI Motion Detection & Mobile Alerts',
      '16-Channel NVR with 4TB HDD'
    ],
    imageSlotId: 'product-cctv',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    badgeText: 'Top Seller'
  },
  {
    id: 'wifi-ap',
    title: 'Enterprise Wi-Fi 6 Access Point',
    category: 'Networking',
    tagline: 'High-Density Seamless Roaming',
    description: 'Dual-band Wi-Fi 6 AP engineered for multi-floor corporate offices, hotels, and schools with zero handover latency.',
    features: [
      '3000 Mbps Dual-Band Speeds',
      'Seamless Multi-AP Fast Roaming',
      'Guest Network Isolation & Portal',
      'Centralized Cloud Controller'
    ],
    imageSlotId: 'product-wifi',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    badgeText: 'Wi-Fi 6'
  },
  {
    id: 'biometric-terminal',
    title: 'AI Face & Fingerprint Terminal',
    category: 'Biometric',
    tagline: 'Touchless High-Speed Attendance',
    description: 'High-accuracy biometric door access and attendance punch device with live cloud database integration.',
    features: [
      'Face, Fingerprint & RFID Card Punch',
      '0.2s Touchless Identification',
      'Door Lock Controller Relay Output',
      'Cloud Sync & Anti-spoofing AI'
    ],
    imageSlotId: 'product-biometric',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    badgeText: 'Smart Access'
  },
  {
    id: 'refurbished-laptops',
    title: 'Dell / HP / Lenovo Laptops',
    category: 'Laptops',
    tagline: 'Business Grade Laptops',
    description: 'Tested commercial Core i5/i7 laptops with SSD storage, pristine battery condition and 1-year warranty.',
    features: [
      'Intel Core i5 / i7 Processors',
      '16GB RAM & 512GB NVMe SSD',
      'Magnesium Alloy Rugged Body',
      'Comprehensive 1-Year AMC Option'
    ],
    imageSlotId: 'product-laptops',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    badgeText: 'Business Value'
  },
  {
    id: 'pos-printer',
    title: 'Thermal POS & Barcode Printer',
    category: 'Printers',
    tagline: 'High Speed Retail Printing',
    description: 'Heavy-duty 80mm thermal receipt and sticky barcode label printers with USB, LAN and Bluetooth connectivity.',
    features: [
      '260mm/sec High-Speed Thermal Print',
      'Auto-cutter & Cash Drawer Port',
      'Barcode & QR Code Printing',
      'Compatible with all POS Software'
    ],
    imageSlotId: 'product-printer',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    badgeText: 'Retail POS'
  },
  {
    id: 'vms',
    title: 'Visitor Management Software (VMS)',
    category: 'Security',
    tagline: 'Modern Digital Check-in & Security Gateway',
    description: 'Touchless kiosk check-in, host SMS notifications, badge printing, and real-time visitor audit trails.',
    features: [
      'Digital Check-in Kiosks & QR Badges',
      'Instant Host SMS & Email Notifications',
      'Government ID Scanning',
      'Watchlist Alert Triggers'
    ],
    imageSlotId: 'product-vms',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    badgeText: 'SaaS Suite'
  }
];
