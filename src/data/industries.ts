export interface IndustryItem {
  id: string;
  title: string;
  name: string;
  description: string;
  imageSlotId: string;
  image: string;
  keySolutions: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'corporate',
    title: 'Corporate Enterprises',
    name: 'Corporate Offices',
    description: 'High-density structured networking, multi-floor IP surveillance, server room design, UTM firewalls, and custom visitor management systems for enterprise headquarters.',
    imageSlotId: 'industry-corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['Multi-floor IP Surveillance', 'Enterprise Wi-Fi Roaming', 'Visitor Check-in Kiosks', 'Server Room AMC']
  },
  {
    id: 'education',
    title: 'Education & Schools',
    name: 'Schools & Colleges',
    description: 'Campus-wide security camera coverage, secure student Wi-Fi management, classroom AV setups, and attendance automation for schools, colleges, and institutes.',
    imageSlotId: 'industry-education',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['Campus Perimeter CCTV', 'Bandwidth Content Filtering', 'Biometric Staff Attendance', 'Computer Lab Setup']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Hospitals',
    name: 'Healthcare Facilities',
    description: '24/7 high-uptime security monitoring, encrypted network infrastructure, patient records system integration, and access-controlled laboratory doors.',
    imageSlotId: 'industry-healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['24/7 Critical Area CCTV', 'Zero-Downtime Network', 'Biometric Access Control', 'UPS Backup Power']
  },
  {
    id: 'retail',
    title: 'Retail & Supermarkets',
    name: 'Retail Stores',
    description: 'POS billing hardware, inventory barcode scanners, store anti-theft CCTV camera positioning, and cloud-synced multi-store billing software.',
    imageSlotId: 'industry-retail',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['Anti-theft HD CCTV', 'POS Billing Terminals', 'Inventory Management', 'Barcode Scanning']
  },
  {
    id: 'offices',
    title: 'Commercial Offices',
    name: 'Commercial Establishments',
    description: 'Turnkey IT setup for new office fit-outs, cabling, employee workstations, high-speed Wi-Fi, biometric entry, and corporate website design.',
    imageSlotId: 'industry-offices',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['Office Fit-out Cabling', 'Workstation Procurement', 'Biometric Door Entry', 'Corporate Web Portal']
  },
  {
    id: 'institutions',
    title: 'Industrial & Government',
    name: 'Industrial Businesses',
    description: 'High-security surveillance monitoring rooms, redundant data center storage, enterprise-grade cybersecurity protection, and strict network segmentation.',
    imageSlotId: 'industry-institutions',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['Command Center Monitors', 'High-Redundancy NVRs', 'Intrusion Detection', 'System Hardening']
  },
  {
    id: 'small-business',
    title: 'Small & Medium Businesses',
    name: 'Small & Medium Businesses',
    description: 'Cost-effective security camera packages, plug-and-play office routers, laptop procurement, software automation, and reliable local AMC support.',
    imageSlotId: 'industry-smb',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    keySolutions: ['Budget CCTV Bundles', 'Office Wi-Fi Setup', 'Business Laptop Supply', 'Local Technical Support']
  }
];
