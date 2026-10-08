export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageSlotId: string;
  capabilities: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cctv-surveillance',
    slug: 'cctv-surveillance',
    title: 'Security & Surveillance',
    eyebrow: 'Smarter Security. Better Visibility.',
    shortDescription: 'High-definition IP surveillance, 360° PTZ cameras, NVR/DVR installation, remote monitoring, and automated access control system integration.',
    fullDescription: 'Comprehensive commercial surveillance solutions engineered to protect your premises. From high-definition IP camera setups to intelligent NVR storage and remote smartphone monitoring, we design security architectures tailored to enterprise and commercial sites.',
    iconName: 'ShieldCheck',
    imageSlotId: 'cctv-preview',
    capabilities: [
      'HD & IP Camera Installation',
      '360° PTZ Speed Dome Cameras',
      'NVR / DVR Storage & Redundancy',
      'Remote Mobile & Desktop Monitoring',
      'Access Control & Biometric Systems',
      'Video Analytics & Intrusion Detection'
    ],
    features: [
      { title: 'Ultra HD Night Vision', desc: 'Clear 4K / 1080p surveillance image capture under zero ambient lighting conditions.' },
      { title: 'Centralized NVR Storage', desc: 'Encrypted multi-terabyte recording setups with automated backup and raid redundancy.' },
      { title: 'Real-time Remote Access', desc: 'Stream live security feeds securely on mobile devices and remote command centers.' },
      { title: 'Smart Intrusion Alerts', desc: 'AI motion detection with instant notification triggers sent straight to your phone.' }
    ],
    benefits: [
      'Round-the-clock site protection and crime deterrence',
      'Remote site monitoring from anywhere in the world',
      'Tamper-proof storage with failover recording',
      'Seamless integration with access control doors'
    ],
    process: [
      { step: '01', title: 'Site Inspection', desc: 'Mapping blind spots, lighting, camera angles, and cabling pathways.' },
      { step: '02', title: 'System Architecture', desc: 'Selecting optimal camera models, storage capacity, and power supplies.' },
      { step: '03', title: 'Structured Cabling & Mount', desc: 'Precision conduit installation and camera positioning.' },
      { step: '04', title: 'Configuration & Handoff', desc: 'Setting up NVR software, mobile app sync, and user training.' }
    ]
  },
  {
    id: 'networking',
    slug: 'networking',
    title: 'Networking Solutions',
    eyebrow: 'Infrastructure Built For Reliable Business.',
    shortDescription: 'Enterprise LAN/WAN architecture, structured Cat6/Fiber cabling, high-density Wi-Fi setups, VPN tunnels, and proactive network monitoring.',
    fullDescription: 'Reliable, high-bandwidth networking designed for zero downtime. We install structured fiber optic and ethernet cabling, enterprise wireless access points, managed switches, and failover routers to keep your business operating at peak performance.',
    iconName: 'Network',
    imageSlotId: 'networking-preview',
    capabilities: [
      'Enterprise LAN / WAN Architecture',
      'High-Density Wi-Fi Access Points',
      'Managed Routers & Switches Setup',
      'Secure Multi-site VPN Tunnels',
      'Structured Cat6 & Fiber Cabling',
      'Network Traffic & Bandwidth Optimization'
    ],
    features: [
      { title: 'Structured Cabling', desc: 'Neat, labeled rack management and high-speed copper/fiber patch routing.' },
      { title: 'Seamless Wi-Fi Roaming', desc: 'Zero-drop handoffs between access points across multi-floor commercial buildings.' },
      { title: 'Hardware Failover', desc: 'Dual-WAN routing to automatically switch ISPs when primary connection drops.' },
      { title: 'VLAN Segmentation', desc: 'Isolating guest Wi-Fi, internal servers, and IoT surveillance traffic for max security.' }
    ],
    benefits: [
      'Eliminate network lag, dropouts, and Wi-Fi dead zones',
      'Industrial-grade security against unauthorized network access',
      'Scalable architecture ready for added workstations and devices',
      '24/7 network stability for mission-critical operations'
    ],
    process: [
      { step: '01', title: 'Network Audit', desc: 'Analyzing bandwidth requirements, interference, and device density.' },
      { step: '02', title: 'Topology Design', desc: 'Designing VLANs, IP schemas, switch stacks, and Wi-Fi maps.' },
      { step: '03', title: 'Cable Pulling & Rack Setup', desc: 'Installing server racks, patch panels, and organized cabling.' },
      { step: '04', title: 'Testing & Bandwidth Tuning', desc: 'Fluke cable certification, throughput testing, and firewall rules.' }
    ]
  },
  {
    id: 'it-infrastructure',
    slug: 'it-infrastructure',
    title: 'IT Infrastructure',
    eyebrow: 'End-to-End Enterprise Hardware & Maintenance.',
    shortDescription: 'Turnkey server room design, UTM firewall configuration, online UPS battery backups, hardware supply, data center rack management, and 24/7 AMC contracts.',
    fullDescription: 'Complete hardware foundation for enterprise productivity. We supply, configure, and maintain racks, rack servers, enterprise firewalls, power backups, and storage arrays backed by dedicated Annual Maintenance Contracts (AMC).',
    iconName: 'Server',
    imageSlotId: 'infrastructure-preview',
    capabilities: [
      'Rack & Tower Server Installation',
      'Enterprise UTM Firewalls',
      'Online UPS Power Backup Systems',
      'Hardware Procurement & Setup',
      'Data Center Rack Organization',
      'Annual Maintenance Contracts (AMC)'
    ],
    features: [
      { title: 'High-Availability Servers', desc: 'Configuring RAID arrays, hot-swappable drives, and virtual machines.' },
      { title: 'Clean Power Protection', desc: 'Sizing online double-conversion UPS units to safeguard hardware against power surges.' },
      { title: 'Proactive AMC Maintenance', desc: 'Regular hardware audits, thermal inspections, and firmware updates.' },
      { title: 'Server Room Airflow', desc: 'Cable management and airflow optimization to prevent overheating failures.' }
    ],
    benefits: [
      'Single vendor point of contact for all server room hardware',
      'Minimized risk of hardware failure and data corruption',
      'Rapid SLA response times for emergency breakdown support',
      'Cost-effective hardware lifecycle management'
    ],
    process: [
      { step: '01', title: 'Hardware Sizing', desc: 'Calculating compute, storage, and power requirements.' },
      { step: '02', title: 'Supply & Assembly', desc: 'Procuring genuine enterprise hardware and mounting components.' },
      { step: '03', title: 'Configuration & OS Installation', desc: 'Deploying server operating systems, hypervisors, and storage pools.' },
      { step: '04', title: 'AMC Onboarding', desc: 'Establishing preventive maintenance schedules and support SLAs.' }
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    eyebrow: 'Protecting Your Business Infrastructure.',
    shortDescription: 'Next-generation firewall management, centralized endpoint protection, network intrusion prevention, strict access controls, and system vulnerability hardening.',
    fullDescription: 'Comprehensive defense against ransomware, malware, and unauthorized access. We deploy multi-layered security protocols across your network perimeter, workstations, and servers to ensure total operational integrity.',
    iconName: 'Lock',
    imageSlotId: 'cybersecurity-preview',
    capabilities: [
      'Endpoint Antivirus & EDR Protection',
      'Firewall Rule & Gateway Configuration',
      'Internal Network Intrusion Prevention',
      'Zero-Trust Access Management',
      'System Hardening & Patch Management',
      'Data Encryption & Disaster Recovery'
    ],
    features: [
      { title: 'Next-Gen Perimeter Defense', desc: 'Blocking malicious IP traffic, deep packet inspection, and web content filtering.' },
      { title: 'Centralized Antivirus Suite', desc: 'Single-dashboard monitoring of all desktop and laptop security statuses.' },
      { title: 'Data Loss Prevention', desc: 'Restricting unauthorized USB transfers and enforcing backup policies.' },
      { title: 'Security Audits', desc: 'Routine vulnerability scanning and password policy enforcement.' }
    ],
    benefits: [
      'Shield confidential business data from ransomware and malware attacks',
      'Compliance with industry cybersecurity standards',
      'Zero disruption to employee workflow during background scans',
      'Immediate isolation of compromised devices from the local network'
    ],
    process: [
      { step: '01', title: 'Security Assessment', desc: 'Identifying open ports, outdated software, and network weak points.' },
      { step: '02', title: 'Firewall Policy Setup', desc: 'Writing customized access control policies and web filters.' },
      { step: '03', title: 'Endpoint Deployment', desc: 'Installing managed agent software across all company devices.' },
      { step: '04', title: 'Continuous Protection', desc: 'Real-time threat detection, automated signature updates, and monthly reports.' }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    eyebrow: 'Custom Corporate Websites & Web Portals.',
    shortDescription: 'Responsive corporate website development, modern UI/UX design, custom web portals, e-commerce platforms, and cloud hosting.',
    fullDescription: 'High-performance web development tailored for modern corporate brands. We build fast, secure, and scalable websites, customer portals, and web applications using modern technologies like React, Next.js, and Node.js.',
    iconName: 'Globe',
    imageSlotId: 'digital-preview',
    capabilities: [
      'Corporate Responsive Web Design',
      'Custom Web Application Development',
      'E-commerce & Portal Solutions',
      'UI/UX Design & Prototyping',
      'API Integration & Cloud Hosting',
      'SEO & Performance Optimization'
    ],
    features: [
      { title: 'Modern UI/UX Aesthetics', desc: 'Engaging, pixel-perfect visual design crafted to represent your corporate identity.' },
      { title: 'Fast & Secure Architecture', desc: 'Built with React, Next.js, and secure RESTful backend integrations.' },
      { title: 'Database & Cloud Hosting', desc: 'Scalable cloud infrastructure ensuring 99.9% uptime and low latency.' },
      { title: 'Search Engine Optimization', desc: 'Full technical SEO, fast loading speeds, and structured schema data.' }
    ],
    benefits: [
      'Establish a strong, professional digital presence for your organization',
      'Engage leads with responsive layouts built for desktop and mobile',
      'Full source code ownership with ongoing maintenance options',
      'High-speed page performance optimized for conversion'
    ],
    process: [
      { step: '01', title: 'Discovery & Scope', desc: 'Defining wireframes, site architecture, and user journeys.' },
      { step: '02', title: 'UI/UX Design', desc: 'Creating interactive design prototypes and brand guidelines.' },
      { step: '03', title: 'Engineering', desc: 'Clean frontend component building and API integration.' },
      { step: '04', title: 'Testing & Launch', desc: 'Performance audits, cross-browser checks, SSL setup, and deployment.' }
    ]
  },
  {
    id: 'app-development',
    slug: 'app-development',
    title: 'App Development',
    eyebrow: 'Native & Cross-Platform Mobile Apps.',
    shortDescription: 'Custom iOS & Android mobile applications, cross-platform React Native solutions, enterprise mobility, and app store publishing.',
    fullDescription: 'Enterprise mobile app engineering for iOS and Android platforms. We design and develop secure, intuitive mobile applications tailored for employee workflows, customer engagement, and business process automation.',
    iconName: 'Smartphone',
    imageSlotId: 'digital-preview',
    capabilities: [
      'Custom iOS & Android App Development',
      'React Native Cross-Platform Applications',
      'Enterprise Mobile Workforce Tools',
      'Mobile UI/UX Interface Design',
      'Push Notifications & Cloud Sync',
      'Play Store & App Store Publishing'
    ],
    features: [
      { title: 'Cross-Platform Efficiency', desc: 'Deploy single-codebase apps on both iOS and Android with top native speed.' },
      { title: 'Offline Data Storage', desc: 'Real-time sync capability allowing app operation even without active connectivity.' },
      { title: 'Biometric Security Sync', desc: 'Fingerprint and FaceID authentication for secure enterprise login.' },
      { title: 'Cloud Backend Sync', desc: 'Robust Firebase / AWS cloud integration for instant notification triggers.' }
    ],
    benefits: [
      'Streamline business operations through dedicated mobile tools',
      'Deliver seamless mobile experiences to your customers and workforce',
      'End-to-end management from concept to App Store approval',
      'Scalable backend infrastructure ready for high user traffic'
    ],
    process: [
      { step: '01', title: 'Requirements & Flow', desc: 'Mapping user personas, app features, and screen navigation.' },
      { step: '02', title: 'Mobile Prototype', desc: 'Designing interactive mobile wireframes and UI components.' },
      { step: '03', title: 'App Development', desc: 'Coding native/hybrid app modules and backend API connections.' },
      { step: '04', title: 'Store Deployment', desc: 'Testing build quality, security audits, and App Store submission.' }
    ]
  },
  {
    id: 'computers-laptops',
    slug: 'computers-laptops',
    title: 'Computers & Laptops',
    eyebrow: 'Corporate Hardware Supply & Maintenance.',
    shortDescription: 'Bulk workstation procurement, high-performance laptops, custom desktop assembly, hardware upgrades, SSD deployment, and complete repair services.',
    fullDescription: 'Authorized corporate hardware partner supplying desktops, laptops, displays, peripherals, and accessories from leading global brands. We handle bulk provisioning, custom configurations, and post-purchase hardware support.',
    iconName: 'Laptop',
    imageSlotId: 'hardware-preview',
    capabilities: [
      'Bulk Corporate Workstation Procurement',
      'High-Performance Commercial Laptops',
      'Custom CAD / Graphics Desktop Assembly',
      'RAM & NVMe SSD Hardware Upgrades',
      'Motherboard & Display Repairs',
      'Peripheral & Accessories Supply'
    ],
    features: [
      { title: 'Enterprise-Grade Specs', desc: 'Intel Core i5/i7/i9 & AMD Ryzen processors built for demanding business software.' },
      { title: 'Pre-configured OS & Software', desc: 'Machines delivered ready-to-work with licensed OS and office software.' },
      { title: 'Bulk Supply Discounts', desc: 'Special corporate pricing for team expansion and hardware refreshes.' },
      { title: 'Rapid Technical Service', desc: 'On-site repair and part replacement to keep employee downtime minimal.' }
    ],
    benefits: [
      'Genuine hardware sourced directly from top manufacturer channels',
      'Customized hardware specifications tailored to job roles',
      'Comprehensive warranty handling and local service support',
      'Seamless bulk deployment for growing office teams'
    ],
    process: [
      { step: '01', title: 'Requirement Gathering', desc: 'Determining exact performance specs and quantity needed.' },
      { step: '02', title: 'Quote & Procurement', desc: 'Providing transparent corporate quotes with competitive pricing.' },
      { step: '03', title: 'Imaging & Software Load', desc: 'Pre-installing corporate software, security apps, and drivers.' },
      { step: '04', title: 'Delivery & Desk Setup', desc: 'Unboxing, cabling, testing, and user sign-off at your site.' }
    ]
  },
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    title: 'Digital Solutions',
    eyebrow: 'Software Built Around Your Business.',
    shortDescription: 'Modern corporate web development, scalable web applications, iOS/Android mobile apps, custom ERP/CRM tools, and bespoke software automation.',
    fullDescription: 'Transforming operational workflows with high-performance software. From modern responsive company websites to complex SaaS applications, visitor management software, and custom internal management portals.',
    iconName: 'Code',
    imageSlotId: 'digital-preview',
    capabilities: [
      'Corporate Responsive Website Development',
      'Scalable Web & SaaS Applications',
      'iOS & Android Mobile App Development',
      'Custom Visitor & Attendance Management',
      'POS & Retail Billing Software',
      'API Integration & Cloud Hosting'
    ],
    features: [
      { title: 'Modern Visual Design', desc: 'Sleek visual interfaces designed for optimal user engagement and branding.' },
      { title: 'Fast & Secure Backend', desc: 'Built with modern frameworks like React, Node, and secure REST/GraphQL APIs.' },
      { title: 'Database Architecture', desc: 'High-concurrency database schemas designed for speed and data security.' },
      { title: 'SEO & Performance Optimized', desc: 'Lightning-fast page load speeds with full search engine optimization.' }
    ],
    benefits: [
      'Elevate your brand presence with custom-designed digital platforms',
      'Streamline business processes through custom automation software',
      'Responsive design ensuring flawless mobile and desktop experience',
      'Full source code ownership and dedicated post-launch support'
    ],
    process: [
      { step: '01', title: 'Discovery & Scope', desc: 'Defining user journeys, feature requirements, and wireframes.' },
      { step: '02', title: 'UI/UX Design', desc: 'Crafting pixel-perfect visual prototypes and design systems.' },
      { step: '03', title: 'Agile Engineering', desc: 'Clean coding, API integration, and modular component building.' },
      { step: '04', title: 'Deployment & Launch', desc: 'Cloud server hosting, SSL setup, performance testing, and launch.' }
    ]
  }
];
