export interface IndustryItem {
  id: string;
  title: string;
  name: string;
  badges: string[];
  description: string;
  imageSlotId: string;
  image: string;
  keySolutions: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'corporate',
    title: 'Corporate Offices',
    name: 'Corporate Offices',
    badges: ['Networking', 'Security'],
    description: 'High-density structured networking, multi-floor IP surveillance, server room design, UTM firewalls, and custom IT infrastructure.',
    imageSlotId: 'industry-corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    keySolutions: ['Multi-floor IP Surveillance', 'Enterprise Wi-Fi Roaming', 'Visitor Check-in Kiosks', 'Server Room AMC']
  },
  {
    id: 'education',
    title: 'Schools & Colleges',
    name: 'Schools & Colleges',
    badges: ['Security', 'Wi-Fi'],
    description: 'Campus-wide security camera coverage, secure student Wi-Fi management, classroom AV setups, and attendance solutions.',
    imageSlotId: 'industry-education',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    keySolutions: ['Campus Perimeter CCTV', 'Bandwidth Content Filtering', 'Biometric Staff Attendance', 'Computer Lab Setup']
  },
  {
    id: 'healthcare',
    title: 'Healthcare Facilities',
    name: 'Healthcare Facilities',
    badges: ['Security', 'Access Control'],
    description: '24/7 high-uptime security monitoring, encrypted network infrastructure, patient records integration, and access control systems.',
    imageSlotId: 'industry-healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    keySolutions: ['24/7 Critical Area CCTV', 'Zero-Downtime Network', 'Biometric Access Control', 'UPS Backup Power']
  },
  {
    id: 'retail',
    title: 'Retail Stores',
    name: 'Retail Stores',
    badges: ['Surveillance', 'Analytics'],
    description: 'Loss prevention, real-time video analytics, secure POS networking, and scalable IT infrastructure for single or multi-location stores.',
    imageSlotId: 'industry-retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    keySolutions: ['Anti-theft HD CCTV', 'POS Billing Terminals', 'Inventory Management', 'Barcode Scanning']
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    name: 'Hospitality',
    badges: ['Wi-Fi', 'Guest Access'],
    description: 'Reliable guest Wi-Fi, access control, IP surveillance, and seamless IT support to create safe, connected, and memorable guest experiences.',
    imageSlotId: 'industry-hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    keySolutions: ['High-Density Guest Wi-Fi', 'Lobby & Corridor CCTV', 'Keycard Access Control', '24/7 IT Support']
  },
  {
    id: 'industrial',
    title: 'Manufacturing / Industrial',
    name: 'Manufacturing / Industrial',
    badges: ['Security', 'Network Infrastructure'],
    description: 'Rugged security systems, secure network infrastructure, environmental monitoring, and 24/7 operational support.',
    imageSlotId: 'industry-industrial',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    keySolutions: ['Command Center Monitors', 'Ruggedized Outdoor CCTV', 'Fiber Backbones', 'System Hardening']
  }
];
