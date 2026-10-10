export interface TechOverviewItem {
  iconName: string;
  title: string;
  desc: string;
}

export interface SolutionCardItem {
  tag: string;
  title: string;
  desc: string;
  imageUrl: string;
  linkText?: string;
}

export interface BenefitDarkItem {
  iconName: string;
  title: string;
  desc: string;
  linkText?: string;
}

export interface ProofCardItem {
  rating?: number;
  title: string;
  quote: string;
  author: string;
  role: string;
  tag: string;
}

export interface ServiceFAQItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  heroPill: string;
  heroTitle: string;
  heroAccent?: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  
  // Section 02: Technology Overview
  techOverview: {
    sectionTitle: string;
    sectionSubtitle: string;
    leftTitle: string;
    techItems: TechOverviewItem[];
    rightTitle: string;
    solutions: SolutionCardItem[];
  };

  // Section 03: Feature Split (Asymmetric large image + text split)
  featureSplit: {
    heading: string;
    description: string;
    bulletPoints: string[];
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    badge: string;
    ctaText: string;
    ctaLink: string;
    image: string;
  };

  // Section 04: Dark Feature Section
  benefitsDark: {
    badge: string;
    heading: string;
    subtitle: string;
    benefits: BenefitDarkItem[];
  };

  // Section 05: Proof / Client Experience
  proof: {
    badge: string;
    heading: string;
    subtitle: string;
    cards: ProofCardItem[];
  };

  // Section 06: Large Promotional Visual CTA
  mediaCTA: {
    badge: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
    metrics: { label: string; value: string }[];
  };

  // Section 07: FAQs
  faqs: ServiceFAQItem[];
}

export const SERVICES_DATA: ServiceItem[] = [
  // 1. SECURITY & SURVEILLANCE
  {
    id: 'cctv-surveillance',
    slug: 'cctv-surveillance',
    title: 'Security & Surveillance',
    eyebrow: 'Smarter Security. Better Visibility.',
    heroPill: 'SECURITY & SURVEILLANCE',
    heroTitle: 'Protect Every Critical Space',
    heroAccent: 'Critical Space',
    shortDescription: 'Intelligent surveillance, recording, and access control solutions designed for modern organizations and commercial facilities.',
    fullDescription: 'Comprehensive commercial surveillance solutions engineered to protect your premises. From high-definition IP camera setups to intelligent NVR storage and remote smartphone monitoring, we design security architectures tailored to enterprise and commercial sites.',
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Technology & Solutions',
      sectionSubtitle: 'High-definition video processing, intelligent motion sensors, and tamper-proof storage.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Camera', title: 'IP Surveillance', desc: '4K Ultra-HD video feeds with IR night vision and wide dynamic range.' },
        { iconName: 'Monitor', title: 'Remote Monitoring', desc: 'Encrypted mobile apps and desktop command center video stream synchronization.' },
        { iconName: 'Server', title: 'NVR / DVR Storage', desc: 'Multi-bay RAID disk arrays ensuring multi-month continuous backup retention.' },
        { iconName: 'Lock', title: 'Access Control', desc: 'Biometric fingerprint, RFID badge, and facial recognition door integration.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'COMMERCIAL PTZ', title: '360° PTZ Speed Domes', desc: 'Motorized pan-tilt-zoom cameras featuring 30x optical zoom and auto-patrol sweeps.', imageUrl: '/images/cards/card-cctv-new.jpg', linkText: 'Explore Specs' },
        { tag: 'ANALYTICS', title: 'AI-Enabled Motion Alert', desc: 'Intelligent perimeter detection distinguishing human intrusion from ambient movement.', imageUrl: 'public/catalog/04_security_spread.jpg', linkText: 'View Architecture' },
      ],
    },

    featureSplit: {
      heading: 'See Every Angle. Protect Every Moment.',
      description: 'We design end-to-end security architectures combining perimeter camera feeds, central NVR recording, intrusion alerts, and access control doors into a unified command dashboard.',
      bulletPoints: [
        'Tamper-proof storage with automated RAID failover recording',
        'Zero-latency remote monitoring on iOS, Android, and desktop clients',
        'Seamless integration with barrier gates and biometric access doors',
        '24/7 technical hotline and rapid SLA repair dispatch',
      ],
      stat1: { value: '100%', label: 'Perimeter Coverage' },
      stat2: { value: '24/7', label: 'Continuous Recording' },
      badge: 'SURVEILLANCE ARCHITECTURE',
      ctaText: 'Get Surveillance Quote',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'SYSTEM BENEFITS',
      heading: 'Built for Complete Business Protection',
      subtitle: 'Commercial-grade camera hardware, tamper-proof recording arrays, and rapid SLA maintenance support.',
      benefits: [
        { iconName: 'Shield', title: '24/7 Active Monitoring', desc: 'Continuous camera surveillance ensuring zero downtime across office towers, retail, and industrial plants.', linkText: 'Learn More' },
        { iconName: 'Monitor', title: 'Remote Access Sync', desc: 'Stream high-definition live feeds directly onto mobile devices and multi-screen control rooms.', linkText: 'View Features' },
        { iconName: 'Maximize2', title: 'Scalable Coverage', desc: 'Modular camera expansions allowing smooth growth from single buildings to multi-city campuses.', linkText: 'Explore Systems' },
      ],
    },

    proof: {
      badge: 'PROVEN OUTCOMES',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Delivering uncompromised security and bulletproof reliability across commercial environments.',
      cards: [
        { rating: 5, title: 'Zero Blind-Spot Security', quote: 'C&G redesigned our multi-story corporate headquarters surveillance with 4K IP cameras and RAID NVR storage.', author: 'Industrial Tech Client', role: 'Head of Facilities', tag: 'CORPORATE TOWER' },
        { rating: 5, title: 'Rapid Incident Retrieval', quote: 'The instant playback and mobile monitoring app allowed our team to respond to perimeter alerts in seconds.', author: 'Retail Logistics Partner', role: 'Operations Director', tag: 'LOGISTICS PARK' },
        { rating: 5, title: 'Flawless AMC Support', quote: 'Their annual maintenance contract ensures routine lens cleaning and instant breakdown technician dispatches.', author: 'Commercial Real Estate', role: 'Security Manager', tag: 'COMMERCIAL PARK' },
      ],
    },

    mediaCTA: {
      badge: 'COMMERCIAL SURVEILLANCE',
      title: 'Secure Your Critical Spaces Today',
      subtitle: 'Schedule an on-site security audit with C&G Infotech engineers to specify the exact camera placements and NVR storage arrays for your facility.',
      imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Get a Custom Quote',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Response Time', value: '< 2 Hrs' },
        { label: 'Camera Warranty', value: '3 Years' },
      ],
    },

    faqs: [
      { q: 'Which CCTV camera system is best for my commercial facility?', a: 'High-definition IP camera systems are ideal for commercial premises due to superior image clarity, Power-over-Ethernet (PoE) wiring, and remote mobile access capability.' },
      { q: 'Can I monitor security camera feeds remotely from my mobile phone?', a: 'Yes. All our IP NVR systems include secure mobile application sync for iOS and Android, allowing real-time viewing and recorded playback from anywhere.' },
      { q: 'How long can the NVR system store recorded video footage?', a: 'Storage retention depends on hard drive capacity and recording resolution. We typically size RAID NVR arrays for 30 to 90 days of continuous recording.' },
      { q: 'Do you provide Annual Maintenance Contracts (AMC) for existing camera setups?', a: 'Yes. We offer complete AMC packages covering routine lens cleaning, power supply checks, hard drive health audits, and breakdown repairs.' },
      { q: 'Can existing analog cameras be integrated into a new IP NVR setup?', a: 'Yes, using hybrid DVR/NVR video encoders, we can bridge existing analog cabling into modern digital management dashboards.' },
    ],
  },

  // 2. NETWORKING SOLUTIONS
  {
    id: 'networking',
    slug: 'networking',
    title: 'Networking Solutions',
    eyebrow: 'Infrastructure Built For Reliable Business.',
    heroPill: 'ENTERPRISE NETWORKING',
    heroTitle: 'Connectivity Built For Zero Interruptions',
    heroAccent: 'Zero Interruptions',
    shortDescription: 'Enterprise LAN/WAN architecture, structured Cat6/Fiber cabling, high-density Wi-Fi setups, VPN tunnels, and proactive bandwidth management.',
    fullDescription: 'Reliable, high-bandwidth networking designed for zero downtime. We install structured fiber optic and ethernet cabling, enterprise wireless access points, managed switches, and failover routers to keep your business operating at peak performance.',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Network Engineering Stack',
      sectionSubtitle: 'High-speed gigabit backbones, managed switch stacks, and zero-drop wireless roaming.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Network', title: 'LAN / WAN Design', desc: 'Custom network topology connecting workstations, servers, and gateways.' },
        { iconName: 'Wifi', title: 'Enterprise Wi-Fi 6', desc: 'High-density ceiling access points with seamless multi-floor roaming.' },
        { iconName: 'Server', title: 'Managed PoE Switches', desc: 'Layer 2/3 switches providing dedicated VLAN bandwidth channels.' },
        { iconName: 'Zap', title: 'Dual-WAN Failover', desc: 'Auto-switching ISP failover ensuring 100% internet uptime continuity.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'FIBER BACKBONE', title: 'Structured Fiber Cabling', desc: 'Single-mode and multi-mode fiber optic cabling terminated into server rack patch panels.', imageUrl: '/images/cards/card-networking-new.jpg', linkText: 'Explore Cabling' },
        { tag: 'VPN & SECURITY', title: 'Site-to-Site Encrypted VPN', desc: 'Secure SSL and IPSec VPN tunnels connecting corporate branches to headquarters.', imageUrl: 'public/catalog/05_networking_spread.jpg', linkText: 'View Network Specs' },
      ],
    },

    featureSplit: {
      heading: 'High-Bandwidth Network Backbone Built To Scale.',
      description: 'We eliminate network dropouts, dead zones, and bottlenecked bandwidth by engineering robust network backbones using enterprise-grade hardware and organized rack management.',
      bulletPoints: [
        'Dual-WAN auto failover switching between primary and secondary ISPs',
        'Isolated VLANs for corporate computers, guest Wi-Fi, and CCTV feeds',
        'Neatly organized, labeled server rack patch panels for easy servicing',
        '24/7 proactive bandwidth monitoring and switch port health checks',
      ],
      stat1: { value: '10 Gbps', label: 'Fiber Backbone Speed' },
      stat2: { value: '99.99%', label: 'Network Uptime SLA' },
      badge: 'NETWORK ARCHITECTURE',
      ctaText: 'Get Network Audit',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'NETWORK PROMISE',
      heading: 'Enterprise Performance Without Bottlenecks',
      subtitle: 'Clean structured cabling, zero-lag Wi-Fi handoffs, and hardened firewall routing.',
      benefits: [
        { iconName: 'Zap', title: 'Stable Connectivity', desc: 'Enterprise switches and failover routers configured to eliminate random drops during peak office hours.', linkText: 'Learn More' },
        { iconName: 'Activity', title: 'High-Density Wi-Fi', desc: 'Seamless wireless roaming across multi-story office floors without reconnecting or losing calls.', linkText: 'View Access Points' },
        { iconName: 'Shield', title: 'Hardened Routing', desc: 'VLAN segmentation protecting sensitive financial databases from general guest Wi-Fi traffic.', linkText: 'Explore VLANs' },
      ],
    },

    proof: {
      badge: 'CASE STUDIES',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Engineered networking backbones supporting hundreds of simultaneous workstations.',
      cards: [
        { rating: 5, title: 'Zero Network Outages', quote: 'Their dual-WAN ISP failover architecture prevented three major internet dropouts this quarter without employees noticing.', author: 'Financial Firm', role: 'IT Manager', tag: 'FINANCIAL SECTOR' },
        { rating: 5, title: 'Clean Rack Re-organization', quote: 'C&G transformed our messy server room cable clutter into a pristine, labeled Cat6 patch rack.', author: 'Software Tech Hub', role: 'CTO', tag: 'TECH PARK' },
        { rating: 5, title: 'Multi-Floor Wi-Fi Roaming', quote: 'Staff can move between meeting rooms across 4 floors with zero dropped VoIP video calls.', author: 'Enterprise HQ', role: 'Infrastructure Lead', tag: 'CORPORATE HQ' },
      ],
    },

    mediaCTA: {
      badge: 'ENTERPRISE NETWORKING',
      title: 'Upgrade Your Network Architecture Today',
      subtitle: 'Request an expert network survey to audit cable runs, wireless heatmaps, and switch throughput before scaling your team.',
      imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Schedule Site Audit',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Throughput', value: '10 Gbps' },
        { label: 'Port Density', value: '48-Port PoE' },
        { label: 'Coverage', value: 'Zero Deadzones' },
      ],
    },

    faqs: [
      { q: 'Can you design and deploy complete office networking from scratch?', a: 'Yes. We handle end-to-end office networking including site audits, CAD cable mapping, server rack assembly, switch programming, and Wi-Fi tuning.' },
      { q: 'Do you support fiber optic cable installation and fusion splicing?', a: 'Yes. We install single-mode and multi-mode fiber optic cables with professional fusion splicing and OTDR certification.' },
      { q: 'How do you fix Wi-Fi dead zones in large office buildings?', a: 'We conduct RF site surveys and deploy managed ceiling access points with overlapping wireless channels and seamless roaming protocols.' },
      { q: 'Can you configure secure remote VPN access for work-from-home staff?', a: 'Yes. We configure encrypted IPSec and SSL VPN tunnels on firewall routers for secure remote workstation connectivity.' },
      { q: 'Do you provide maintenance and troubleshooting for existing network racks?', a: 'Yes. We provide rack audit, cable re-organization, switch port testing, and routine maintenance under AMC contracts.' },
    ],
  },

  // 3. IT INFRASTRUCTURE
  {
    id: 'it-infrastructure',
    slug: 'it-infrastructure',
    title: 'IT Infrastructure',
    eyebrow: 'End-to-End Enterprise Hardware & Maintenance.',
    heroPill: 'ENTERPRISE IT INFRASTRUCTURE',
    heroTitle: 'Infrastructure That Scales With You',
    heroAccent: 'Scales With You',
    shortDescription: 'Turnkey server room design, UTM firewall configuration, online UPS battery backups, hardware supply, data center rack management, and 24/7 AMC support.',
    fullDescription: 'Complete hardware foundation for enterprise productivity. We supply, configure, and maintain racks, rack servers, enterprise firewalls, power backups, and storage arrays backed by dedicated Annual Maintenance Contracts (AMC).',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Infrastructure Component Suite',
      sectionSubtitle: 'Hardware compute nodes, thermal airflow management, and double-conversion power backup.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Server', title: 'Enterprise Servers', desc: 'Rack & tower server nodes tailored to virtualization and database workloads.' },
        { iconName: 'Lock', title: 'UTM Firewalls', desc: 'Next-generation firewall appliances blocking ransomware and unauthorized ports.' },
        { iconName: 'Zap', title: 'Online UPS Backups', desc: 'Clean double-conversion power backups protecting sensitive hardware.' },
        { iconName: 'Cpu', title: 'Server Rack Cabinets', desc: '42U enclosed racks fitted with smart PDUs, cable trays, and fan trays.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'SERVER COMPUTE', title: 'Rack Server Clusters', desc: 'Dell PowerEdge and HP ProLiant servers configured with ESXi and Hyper-V.', imageUrl: '/images/cards/card-servers-new.jpg', linkText: 'Explore Server Specs' },
        { tag: 'POWER & THERMAL', title: 'Smart PDU & Cooling', desc: 'Thermal airflow routing and smart power metering for data center cabinets.', imageUrl: 'public/catalog/06_storage_spread.jpg', linkText: 'View Racks' },
      ],
    },

    featureSplit: {
      heading: 'Turnkey Server Room Engineering & Supply.',
      description: 'We construct server room environments engineered for uptime, clean power delivery, structured cabling, thermal cooling, and continuous remote hardware monitoring.',
      bulletPoints: [
        'Single point of contact for hardware supply, configuration, and maintenance',
        'RAID storage redundancy safeguarding critical enterprise databases',
        'Proper rack cable routing ensuring clean airflow and easy servicing',
        'Dedicated AMC hotline for immediate breakdown resolution',
      ],
      stat1: { value: '24/7', label: 'Emergency Hotline' },
      stat2: { value: '< 2 Hrs', label: 'SLA Response Time' },
      badge: 'INFRASTRUCTURE ENGINEERING',
      ctaText: 'Get Infrastructure Quote',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'INFRASTRUCTURE ADVANTAGE',
      heading: 'Built for Uninterrupted Enterprise Compute',
      subtitle: 'Commercial-grade server hardware, thermal airflow management, and rapid SLA hardware replacement.',
      benefits: [
        { iconName: 'Server', title: 'Custom Compute Sizing', desc: 'Scalable rack server nodes matching your exact database, CRM, and cloud workload requirements.', linkText: 'Explore Servers' },
        { iconName: 'Zap', title: 'Zero Power Downtime', desc: 'Online double-conversion UPS battery banks ensuring smooth server operation during blackout switchovers.', linkText: 'View UPS Specs' },
        { iconName: 'Shield', title: 'Annual SLA AMC Support', desc: 'Quarterly hardware preventive audits and guaranteed on-site breakdown response times.', linkText: 'Explore AMC Plans' },
      ],
    },

    proof: {
      badge: 'ENTERPRISE PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Deploying high-reliability server rooms and enterprise hardware support.',
      cards: [
        { rating: 5, title: 'Flawless Data Center Migration', quote: 'C&G supplied, racked, and configured our 6-node server cluster and UPS backups within 48 hours without operational downtime.', author: 'Healthcare System', role: 'IT Director', tag: 'HEALTHCARE IT' },
        { rating: 5, title: 'Proactive SLA Maintenance', quote: 'Their annual maintenance contract caught a failing RAID disk array before any data loss occurred.', author: 'Manufacturing Plant', role: 'General Manager', tag: 'MANUFACTURING' },
        { rating: 5, title: 'Turnkey Server Room Build', quote: 'From server racks and thermal fans to firewall gateways, C&G delivered our entire server room turnkey.', author: 'Corporate Park Tenant', role: 'Head of IT', tag: 'ENTERPRISE HQ' },
      ],
    },

    mediaCTA: {
      badge: 'SERVER ROOM ENGINEERING',
      title: 'Build Your Enterprise Hardware Foundation',
      subtitle: 'Schedule a technical infrastructure assessment to size server compute, UPS battery runtimes, and firewall requirements.',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Request Hardware Proposal',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'SLA Hotline', value: '24/7' },
        { label: 'Dispatch', value: '< 2 Hrs' },
        { label: 'Support', value: 'Full AMC' },
      ],
    },

    faqs: [
      { q: 'What hardware components are included in a turnkey IT infrastructure setup?', a: 'A turnkey setup includes server racks, compute servers, UTM firewall gateways, network switches, online UPS power backups, NAS/SAN storage, and structured cabling.' },
      { q: 'What is included in a C&G Infotech Annual Maintenance Contract (AMC)?', a: 'Our AMC covers scheduled preventive maintenance visits, hardware health audits, thermal checks, OS updates, and priority emergency breakdown repairs.' },
      { q: 'How do you determine the correct online UPS battery sizing for our server room?', a: 'We calculate total wattage consumption across all servers, switches, storage arrays, and routers to specify a UPS unit providing desired runtime backup.' },
      { q: 'Can you upgrade RAM, processors, or hard drives in existing enterprise servers?', a: 'Yes. We supply and install genuine enterprise RAM modules, SAS/NVMe drives, and RAID controller upgrades.' },
      { q: 'Do you provide emergency breakdown response for server room failures?', a: 'Yes. Our AMC clients receive guaranteed SLA breakdown dispatch times to minimize system downtime.' },
    ],
  },

  // 4. CYBERSECURITY
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    eyebrow: 'Protecting Your Business Infrastructure.',
    heroPill: 'CYBERSECURITY & DEFENSE',
    heroTitle: 'Defend Before Threats Become Incidents',
    heroAccent: 'Become Incidents',
    shortDescription: 'Next-generation firewall management, centralized endpoint protection, network intrusion prevention, strict zero-trust access controls, and system vulnerability hardening.',
    fullDescription: 'Comprehensive defense against ransomware, malware, and unauthorized access. We deploy multi-layered security protocols across your network perimeter, workstations, and servers to ensure total operational integrity.',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Security & Defense Stack',
      sectionSubtitle: 'Perimeter gateway filtering, endpoint containment, and proactive vulnerability scanning.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Lock', title: 'Perimeter Firewalls', desc: 'Next-generation UTM gateways inspecting encrypted traffic and blocking malicious ports.' },
        { iconName: 'Shield', title: 'Endpoint EDR Antivirus', desc: 'Centralized malware detection software deployed across all company workstations.' },
        { iconName: 'Activity', title: 'Intrusion Prevention (IPS)', desc: 'Real-time network traffic sensors identifying and containing network attacks.' },
        { iconName: 'Cpu', title: 'Zero-Trust Access', desc: 'Strict multi-factor authentication and granular VLAN access controls.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'RANSOMWARE DEFENSE', title: 'Automated Endpoint Containment', desc: 'Instant automatic isolation of compromised computers to prevent network-wide infection.', imageUrl: '/images/cards/card-cybersecurity-new.jpg', linkText: 'Explore Defense' },
        { tag: 'BACKUP & RECOVERY', title: 'Air-Gapped Encrypted Backup', desc: 'Automated offline and cloud backup arrays guaranteeing rapid ransomware data recovery.', imageUrl: 'public/catalog/04_security_spread.jpg', linkText: 'View Backup Specs' },
      ],
    },

    featureSplit: {
      heading: 'Multi-Layered Cyber Security Defense.',
      description: 'We safeguard your business against ransomware encryption, phishing breaches, and internal data theft by establishing strict perimeter rules and automated endpoint protection.',
      bulletPoints: [
        'Centralized dashboard monitoring security health across all company computers',
        'Immediate quarantine of infected endpoints to prevent network-wide propagation',
        'Custom web filtering policy restricting dangerous or non-work website categories',
        'Routine vulnerability scans and network security compliance auditing',
      ],
      stat1: { value: '0-Day', label: 'Threat Protection' },
      stat2: { value: '100%', label: 'Endpoint Coverage' },
      badge: 'CYBER DEFENSE SYSTEM',
      ctaText: 'Request Security Audit',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'SECURITY PROMISE',
      heading: 'Proactive Security Built For Zero Compromise',
      subtitle: 'Multi-layered perimeter defense, automated endpoint containment, and proactive vulnerability scanning.',
      benefits: [
        { iconName: 'Lock', title: 'Perimeter Shielding', desc: 'Next-Gen firewalls blocking malicious ports, suspicious IPs, and unauthorized incoming connections.', linkText: 'Explore Firewalls' },
        { iconName: 'Shield', title: 'Endpoint EDR Security', desc: 'Real-time behavioral sensors detecting stealthy malware and isolating compromised PCs instantly.', linkText: 'View EDR' },
        { iconName: 'Zap', title: 'Rapid Incident Response', desc: '24/7 technical containment hotline mitigating cyber threats before business operations suffer.', linkText: 'Learn Response' },
      ],
    },

    proof: {
      badge: 'DEFENSE PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Shielding commercial enterprises from data breaches and ransomware attacks.',
      cards: [
        { rating: 5, title: 'Blocked Ransomware Intrusion', quote: 'The EDR security deployed by C&G caught a weaponized email attachment and quarantined the workstation in under 3 seconds.', author: 'Legal & Accounting Firm', role: 'Managing Partner', tag: 'FINANCIAL DEFENSE' },
        { rating: 5, title: 'Clean Security Compliance', quote: 'Their security audit helped our infrastructure pass strict international client compliance audits effortlessly.', author: 'Commercial Tech Hub', role: 'Compliance Officer', tag: 'COMPLIANCE' },
        { rating: 5, title: 'Encrypted Remote Work', quote: 'Our remote team works securely over encrypted SSL VPN tunnels without exposing internal servers.', author: 'Software Solutions', role: 'Head of Security', tag: 'REMOTE SECURITY' },
      ],
    },

    mediaCTA: {
      badge: 'CYBER DEFENSE',
      title: 'Fortify Your Enterprise Network Today',
      subtitle: 'Schedule a thorough cybersecurity audit with C&G security specialists to identify open vulnerabilities and harden gateway firewalls.',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Request Security Audit',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Perimeter', value: 'NGFW Firewall' },
        { label: 'Containment', value: '< 5 Seconds' },
        { label: 'EDR Coverage', value: '100% Desktops' },
      ],
    },

    faqs: [
      { q: 'What is a Next-Generation Firewall (NGFW) and why does my business need one?', a: 'An NGFW inspects data traffic at the application layer, blocking advanced malware, unauthorized VPNs, and malicious web traffic before it reaches your internal computers.' },
      { q: 'How does Endpoint Detection & Response (EDR) protect computers from ransomware?', a: 'EDR software monitors system processes for suspicious encryption behaviors, instantly isolating infected PCs from the local network.' },
      { q: 'Can you restrict employee access to specific harmful or non-work websites?', a: 'Yes. We configure web content filtering policies on your gateway firewall to block dangerous, adult, or bandwidth-heavy websites.' },
      { q: 'How often should cybersecurity vulnerability assessments be conducted?', a: 'We recommend quarterly vulnerability scanning and annual comprehensive security audits for commercial business networks.' },
      { q: 'What happens if a computer gets infected despite antivirus software?', a: 'Our zero-trust policy automatically isolates the compromised device from network shares while our team cleans the endpoint and restores data from backups.' },
    ],
  },

  // 5. COMPUTERS & LAPTOPS
  {
    id: 'computers-laptops',
    slug: 'computers-laptops',
    title: 'Computer & Laptop Solutions',
    eyebrow: 'Corporate Hardware Supply & Maintenance.',
    heroPill: 'CORPORATE WORKSTATION SOLUTIONS',
    heroTitle: 'Performance Engineered For Your Teams',
    heroAccent: 'For Your Teams',
    shortDescription: 'Bulk workstation procurement, high-performance laptops, custom desktop assembly, hardware upgrades, NVMe SSD deployment, and complete repair services.',
    fullDescription: 'Authorized corporate hardware partner supplying desktops, laptops, displays, peripherals, and accessories from leading global brands. We handle bulk provisioning, custom configurations, and post-purchase hardware support.',
    heroImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Hardware Provisioning Options',
      sectionSubtitle: 'Brand-authorized commercial desktops, ultrabooks, and custom workstations.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Laptop', title: 'Corporate Desktops', desc: 'Commercial minitowers and small form factor PCs built for office multitasking.' },
        { iconName: 'Cpu', title: 'Enterprise Laptops', desc: 'Durable, lightweight laptops with long battery life from Dell, HP, and Lenovo.' },
        { iconName: 'Server', title: 'Custom CAD Workstations', desc: 'High-performance PCs equipped with dedicated NVIDIA graphics and multi-core CPUs.' },
        { iconName: 'Zap', title: 'SSD & RAM Upgrades', desc: 'Reviving legacy slow computers with high-speed NVMe SSDs and RAM expansions.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'BULK PROVISIONING', title: 'Corporate Workstation Fleets', desc: 'Pre-configured, image-loaded desktop fleets ready for immediate desk deployment.', imageUrl: '/images/cards/card-computers-new.jpg', linkText: 'Explore Fleets' },
        { tag: 'CAD & GRAPHICS', title: 'High-Performance Render Workstations', desc: 'Custom workstation builds optimized for 3D architecture, video editing, and CAD software.', imageUrl: 'public/catalog/01_desktops_spread.jpg', linkText: 'View Specs' },
      ],
    },

    featureSplit: {
      heading: 'Hardware Supply Simplified For Growing Businesses.',
      description: 'We eliminate IT procurement headaches by supplying authentic, pre-configured computers and laptops directly to your desks ready for immediate work.',
      bulletPoints: [
        'Bulk corporate pricing discounts for office expansions and hardware refreshes',
        'Custom hardware specification sizing based on employee job roles',
        'On-site delivery, unboxing, cable setup, and domain joining',
        'Local warranty handling and immediate standby machine replacement',
      ],
      stat1: { value: '100%', label: 'Genuine Brand Specs' },
      stat2: { value: 'Same Day', label: 'On-Site Diagnostic' },
      badge: 'HARDWARE PROVISIONING',
      ctaText: 'Get Bulk Hardware Quote',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'HARDWARE QUALITY',
      heading: 'Commercial Grade Reliability At Scale',
      subtitle: 'Genuine brand-authorized hardware, pre-loaded corporate software, and rapid on-site service response.',
      benefits: [
        { iconName: 'Laptop', title: 'Authorized Supply', desc: '100% genuine brand-new computers with official manufacturer warranties and local service.', linkText: 'View Brands' },
        { iconName: 'CheckCircle', title: 'Corporate Pre-Config', desc: 'Delivered pre-loaded with licensed Windows OS, MS Office, and company domain settings.', linkText: 'Explore Config' },
        { iconName: 'Zap', title: 'Performance Upgrades', desc: 'Boosting existing office PCs with high-speed NVMe SSDs for 5x faster boot times.', linkText: 'Learn Upgrades' },
      ],
    },

    proof: {
      badge: 'CLIENT PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Supplying bulk computer hardware to commercial offices and tech parks.',
      cards: [
        { rating: 5, title: '50-Workstation Office Setup', quote: 'C&G delivered, unboxed, and configured 50 desktops with custom OS imaging over a single weekend.', author: 'Software Firm', role: 'Operations Manager', tag: 'BULK DEPLOYMENT' },
        { rating: 5, title: 'CAD Workstation Reliability', quote: 'Our architecture team needed high-RAM workstations with Quadro GPUs. C&G delivered exact specs.', author: 'Design & Engineering Studio', role: 'Lead Architect', tag: 'DESIGN STUDIO' },
        { rating: 5, title: 'Rapid Warranty Replacement', quote: 'When a power surge affected two power supplies, C&G replaced them on-site within 3 hours.', author: 'Financial Services', role: 'IT Lead', tag: 'AMC CUSTOMER' },
      ],
    },

    mediaCTA: {
      badge: 'CORPORATE SUPPLY',
      title: 'Equip Your Workforce With Reliable Hardware',
      subtitle: 'Contact C&G hardware specialists for bulk workstation pricing, custom laptop quotes, or SSD upgrade packages.',
      imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Get Bulk Hardware Quote',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Brands', value: 'Dell, HP, Lenovo' },
        { label: 'Warranty', value: '1 to 3 Years' },
        { label: 'Imaging', value: 'Pre-Loaded OS' },
      ],
    },

    faqs: [
      { q: 'Are all computers and laptops supplied by C&G Infotech genuine and warranted?', a: 'Yes. We are authorized corporate channel partners supplying 100% authentic brand-new computers with official manufacturer warranties.' },
      { q: 'Can you pre-install our company software and security rules before delivery?', a: 'Yes. We provide disk imaging services to deliver machines pre-loaded with your licensed OS, corporate software, and domain settings.' },
      { q: 'Can slow older computers be upgraded instead of buying new ones?', a: 'In many cases, replacing slow mechanical hard drives with high-speed NVMe SSDs and adding RAM can double workstation performance at a fraction of the cost.' },
      { q: 'Do you offer bulk discounts for commercial workstation procurement?', a: 'Yes. We offer tiered corporate pricing for bulk desktop, laptop, and monitor purchases.' },
      { q: 'What is your response time for hardware breakdown repairs?', a: 'Our AMC clients receive priority on-site technician dispatch within 2 to 4 hours of logging a service ticket.' },
    ],
  },

  // 6. ATTENDANCE SOFTWARE
  {
    id: 'attendance-software',
    slug: 'attendance-software',
    title: 'Attendance Software',
    eyebrow: 'Biometrics & Shift Roster Automation.',
    heroPill: 'BIOMETRIC ATTENDANCE SOFTWARE',
    heroTitle: 'Automate Staff Attendance & Payroll Rosters',
    heroAccent: 'Payroll Rosters',
    shortDescription: 'Biometric fingerprint & facial recognition software, multi-shift roster management, overtime tracking, leave management, and automated payroll reports.',
    fullDescription: 'Comprehensive employee attendance and shift management software engineered to link seamlessly with biometric hardware. Automate daily attendance calculations, overtime hours, leave requests, and monthly payroll summaries.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Biometric & Software Features',
      sectionSubtitle: 'Hardware sync drivers, multi-shift engine, and automated payroll export.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Clock', title: 'Biometric Hardware Sync', desc: 'Real-time punch sync from fingerprint, palm, and facial recognition terminals.' },
        { iconName: 'Activity', title: 'Shift Roster Engine', desc: 'Automated roster calculations supporting day, night, and rotational shifts.' },
        { iconName: 'UserCheck', title: 'Leave Portal', desc: 'Self-service employee web portal for requesting leaves and viewing punch logs.' },
        { iconName: 'Zap', title: 'Overtime & Grace Rules', desc: 'Automatic tracking of late marks, early exits, overtime hours, and half days.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'BIOMETRIC SYNC', title: 'Multi-Location Cloud Sync', desc: 'Centralized cloud dashboard syncing attendance punches from branch offices nationwide.', imageUrl: '/images/cards/card-attendance-new.jpg', linkText: 'Explore Cloud Sync' },
        { tag: 'PAYROLL READY', title: '1-Click Payroll Reports', desc: 'Export monthly attendance summaries directly to Excel, Tally, or custom HRMS.', imageUrl: 'public/catalog/07_biometrics_spread.jpg', linkText: 'View Sample Report' },
      ],
    },

    featureSplit: {
      heading: 'Seamless Biometric Integration for Exact Payroll.',
      description: 'Our attendance software bridges local biometric hardware punches directly into a centralized cloud database, generating instant attendance summaries with zero manual intervention.',
      bulletPoints: [
        'Real-time punch notifications sent straight to HR dashboards',
        'Support for multiple branch office locations in a single central portal',
        'Customizable attendance policies (grace time, late marks, early exits)',
        'One-click export to major payroll and accounting software formats',
      ],
      stat1: { value: '100%', label: 'Punch Accuracy' },
      stat2: { value: '1-Click', label: 'Payroll Export' },
      badge: 'ATTENDANCE SYSTEM',
      ctaText: 'Get Software Demo',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'SOFTWARE ADVANTAGE',
      heading: 'Eliminate Manual Register Errors & Buddy Punching',
      subtitle: 'Direct hardware connection, automated shift rules, and hassle-free month-end payroll exports.',
      benefits: [
        { iconName: 'Clock', title: 'Direct Terminal Sync', desc: 'Supports ZK Teco, Realtime, Essl, and Hikvision biometric hardware devices out of the box.', linkText: 'View Supported Devices' },
        { iconName: 'Activity', title: 'Rotational Shift Engine', desc: 'Handles overnight cross-midnight shifts, break deductions, and flexible grace windows automatically.', linkText: 'Explore Roster' },
        { iconName: 'Server', title: 'Instant Payroll Export', desc: 'Generates itemized monthly attendance reports compatible with Tally and Excel in one click.', linkText: 'View Formats' },
      ],
    },

    proof: {
      badge: 'HR PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Streamlining workforce management and month-end payroll processing.',
      cards: [
        { rating: 5, title: 'Saved 20 Hours Monthly', quote: 'Our HR team used to spend 3 full days manually calculating attendance. Now payroll exports take 5 minutes.', author: 'Manufacturing Unit', role: 'HR Manager', tag: 'WORKFORCE MANAGEMENT' },
        { rating: 5, title: 'Multi-Branch Centralization', quote: 'We sync biometric punches across 8 branch offices into one cloud dashboard seamlessly.', author: 'Retail Chain Partner', role: 'Operations Head', tag: 'MULTI-BRANCH' },
        { rating: 5, title: 'Zero Buddy Punching', quote: 'Facial recognition terminals integrated with C&G software eliminated proxy attendance completely.', author: 'Educational Campus', role: 'Admin Officer', tag: 'CAMPUS ATTENDANCE' },
      ],
    },

    mediaCTA: {
      badge: 'ATTENDANCE AUTOMATION',
      title: 'Upgrade Your Attendance & Payroll System',
      subtitle: 'Request a live software demonstration to see how biometric sync and automated roster rules simplify your HR workflow.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Request Live Demo',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Punches', value: 'Real-Time Sync' },
        { label: 'Export', value: '1-Click Tally' },
        { label: 'Support', value: 'Multi-Branch' },
      ],
    },

    faqs: [
      { q: 'Can the attendance software connect to our existing biometric devices?', a: 'Yes. Our software supports direct network database sync with leading biometric brands including ZK Teco, Realtime, Essl, and Hikvision.' },
      { q: 'Does the software support complex rotational and night shifts?', a: 'Yes. The roster engine allows custom shift windows, overnight cross-midnight calculations, and flexible break deductions.' },
      { q: 'Can employees check their attendance logs and apply for leave on mobile?', a: 'Yes. We provide a self-service employee portal where staff can view punches, request leave approvals, and view holiday calendars.' },
      { q: 'Can attendance data from multiple branch offices be combined into one system?', a: 'Yes. Biometric devices across multiple city locations upload punches to a single cloud server dashboard in real time.' },
      { q: 'Can the monthly attendance report be exported directly for payroll processing?', a: 'Yes. Reports export instantly to Excel, CSV, or formatted text compatible with Tally, Spine, or custom HRMS software.' },
    ],
  },

  // 7. VISITOR MANAGEMENT SOFTWARE
  {
    id: 'visitor-management',
    slug: 'visitor-management',
    title: 'Visitor Management Software',
    eyebrow: 'Lobby Security & Digital Check-In.',
    heroPill: 'DIGITAL VISITOR MANAGEMENT',
    heroTitle: 'Streamline Lobby Check-Ins With Digital Passes',
    heroAccent: 'Digital Passes',
    shortDescription: 'Touchless QR check-in, host SMS/WhatsApp approvals, digital badge printing, visitor photo capture, and comprehensive lobby security audit logs.',
    fullDescription: 'Modernize your building lobby security with digital visitor registration. Replace paper guest books with sleek tablet check-in, instant host notifications, QR code visitor passes, and searchable digital security logs.',
    heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Lobby Security Features',
      sectionSubtitle: 'Tablet self check-in, instant host alerts, and digital badge printing.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'UserCheck', title: 'Tablet Self Check-In', desc: 'Sleek touchscreen kiosk interface for visitors to input contact details and host.' },
        { iconName: 'Zap', title: 'Instant Host Alerts', desc: 'Automated SMS, WhatsApp, or email notifications sent to employee when guest arrives.' },
        { iconName: 'Code', title: 'QR Pre-Registration', desc: 'Hosts email pre-approved QR codes for 5-second express lobby entry.' },
        { iconName: 'Shield', title: 'Security Audit Logs', desc: 'Searchable cloud dashboard tracking active guests, check-outs, and emergency logs.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'BADGE PRINTING', title: 'Instant Visitor Pass Print', desc: 'Compact thermal printer outputting guest passes with photo, name, and QR pass.', imageUrl: '/images/cards/card-visitor-new.jpg', linkText: 'Explore Kiosks' },
        { tag: 'EMERGENCY ROSTER', title: '1-Click Evacuation Log', desc: 'Instant live roster showing all visitors currently inside the facility during emergencies.', imageUrl: 'public/catalog/08_pos_spread.jpg', linkText: 'View Dashboard' },
      ],
    },

    featureSplit: {
      heading: 'Modern Lobby Security For Corporate Buildings.',
      description: 'Create a flawless first impression while strengthening premises security. Our visitor management system verifies guest identities, notifies hosts instantly, and maintains digital logs.',
      bulletPoints: [
        'Instant host notifications via WhatsApp, SMS, or Teams when guests arrive',
        'Capture visitor photograph and government ID scan during check-in',
        'Express entry via pre-scheduled QR code email invites',
        'Compliance with corporate data privacy and building security audits',
      ],
      stat1: { value: '< 15 Sec', label: 'Check-In Speed' },
      stat2: { value: '100%', label: 'Digital Log Audit' },
      badge: 'VISITOR SECURITY',
      ctaText: 'Request Lobby Software Demo',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'LOBBY SYSTEM',
      heading: 'Elevate Reception Workflow & Building Defense',
      subtitle: 'Replace slow paper logbooks with instant, professional tablet check-in and automated host approvals.',
      benefits: [
        { iconName: 'UserCheck', title: 'Touchless iPad Kiosk', desc: 'Sleek self-service kiosk capturing guest details, photo, and host employee name.', linkText: 'Explore Kiosk UI' },
        { iconName: 'Zap', title: 'Instant Host WhatsApp Alerts', desc: 'Host employees receive an instant phone ping with visitor photo as soon as they register.', linkText: 'View Alerts' },
        { iconName: 'Shield', title: 'Compliant Security Logs', desc: 'Searchable web dashboard maintaining digital entry logs and automatic privacy data purges.', linkText: 'View Security' },
      ],
    },

    proof: {
      badge: 'LOBBY PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Replacing paper logbooks with digital visitor management systems.',
      cards: [
        { rating: 5, title: 'Flawless First Impression', quote: 'Our corporate lobby transformed from cluttered paper logs to sleek iPad kiosks. Guests love the express entry.', author: 'Tech Park Receptionist', role: 'Head of Hospitality', tag: 'CORPORATE LOBBY' },
        { rating: 5, title: 'Instant Host Alerts', quote: 'Employees know instantly when their meeting guests arrive without reception making phone calls.', author: 'Consulting Group', role: 'Office Manager', tag: 'CONSULTING HQ' },
        { rating: 5, title: 'Instant Emergency Roster', quote: 'During a fire drill, the 1-click active visitor log allowed safety marshals to account for every guest.', author: 'Commercial Complex', role: 'Safety Director', tag: 'SAFETY AUDIT' },
      ],
    },

    mediaCTA: {
      badge: 'LOBBY AUTOMATION',
      title: 'Modernize Your Reception Lobby Today',
      subtitle: 'Schedule a live demonstration of our Visitor Management Software and see tablet check-in and badge printing in action.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Request Lobby Software Demo',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Check-In', value: '< 15 Seconds' },
        { label: 'Alerts', value: 'WhatsApp & SMS' },
        { label: 'Badges', value: 'Instant Thermal' },
      ],
    },

    faqs: [
      { q: 'How does the host get notified when a visitor arrives at the lobby?', a: 'When a visitor enters host details on the tablet kiosk, the system instantly sends an automated SMS, WhatsApp message, or email to the employee.' },
      { q: 'Can hosts pre-register expected visitors in advance?', a: 'Yes. Employees can enter expected guest details in advance. The visitor receives an email with a QR code for instant scan-and-enter entry.' },
      { q: 'Can the software capture visitor photos and print physical entrance badges?', a: 'Yes. The tablet camera captures a guest photo and sends it to a lobby printer, generating a badge with guest photo, name, and host details.' },
      { q: 'Is visitor data stored securely in accordance with privacy rules?', a: 'Yes. All visitor records are encrypted on secure servers with customizable automatic data purge policies to protect guest privacy.' },
      { q: 'What hardware is required to run the visitor management system?', a: 'The system requires a standard iPad or Android tablet, a tablet enclosure stand, and an optional compact badge printer.' },
    ],
  },

  // 8. REFURBISHED LAPTOPS
  {
    id: 'refurbished-laptops',
    slug: 'refurbished-laptops',
    title: 'Refurbished Laptops',
    eyebrow: 'Certified Grade-A Commercial Laptops.',
    heroPill: 'CERTIFIED REFURBISHED LAPTOPS',
    heroTitle: 'Premium Commercial Laptops At Budget Pricing',
    heroAccent: 'Budget Pricing',
    shortDescription: 'Grade-A business laptops from Dell, HP, Lenovo, and Apple. 50+ point quality tested, fitted with high-speed SSDs, licensed OS, and local warranty coverage.',
    fullDescription: 'High-performance commercial laptops tested and certified for enterprise productivity. We supply Grade-A refurbished business laptops equipped with Intel Core processors, SSD storage, genuine Windows OS, and comprehensive warranty support.',
    heroImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Refurbished Quality Architecture',
      sectionSubtitle: 'Grade-A aluminum/magnesium commercial bodies, 50-point diagnostics, and SSD boosts.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Laptop', title: 'Grade-A Commercial Series', desc: 'ThinkPad, Latitude, and EliteBook ultrabooks built for heavy office durability.' },
        { iconName: 'CheckCircle', title: '50-Point Quality Inspection', desc: 'Thorough testing of display pixels, motherboard, keyboard, ports, and thermals.' },
        { iconName: 'Zap', title: 'New NVMe SSD Installed', desc: 'Pre-fitted with brand-new SSDs ensuring fast boot times and software execution.' },
        { iconName: 'Shield', title: '6-12 Months Warranty', desc: 'Backed by C&G Infotech local warranty support and component replacement.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'BULK LAPTOPS', title: 'Call Center & Startup Fleets', desc: 'Cost-effective laptop fleets for coding bootcamps, BPOs, and startup teams.', imageUrl: 'public/catalog/02_laptops_spread.jpg', linkText: 'Explore Stock' },
        { tag: 'COMMERCIAL GRADE', title: 'Core i5 & i7 Business Laptops', desc: 'Intel Core i5/i7 ultrabooks with 16GB RAM, licensed Windows 11 Pro, and clean batteries.', imageUrl: '/images/cards/card-computers-new.jpg', linkText: 'View Laptop Specs' },
      ],
    },

    featureSplit: {
      heading: 'Enterprise Laptop Performance At 50% Lower Cost.',
      description: 'Equip your workforce with top-tier commercial laptops (Dell Latitude, HP EliteBook, Lenovo ThinkPad) backed by thorough testing and genuine warranty.',
      bulletPoints: [
        'Save 50% to 60% compared to new commercial laptop retail prices',
        'Industrial metal body construction designed for heavy daily office use',
        'Bulk quantities available for call centers, startups, and training institutes',
        'On-site technical support and warranty handling by C&G Infotech',
      ],
      stat1: { value: '50%+', label: 'Cost Savings' },
      stat2: { value: '50 Point', label: 'Quality Audit' },
      badge: 'CERTIFIED LAPTOPS',
      ctaText: 'Get Laptop Pricing List',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'CERTIFIED QUALITY',
      heading: 'Commercial Durability Built To Outlast Retail PCs',
      subtitle: 'Get commercial-grade ThinkPad, Latitude, and EliteBook durability at 50% lower cost.',
      benefits: [
        { iconName: 'Laptop', title: 'Grade-A Condition', desc: 'Cosmetically pristine laptops with zero screen blemishes and 100% functional keyboards and ports.', linkText: 'Learn Specs' },
        { iconName: 'Zap', title: 'Brand-New SSD Boost', desc: 'Every laptop is retrofitted with brand-new high-speed NVMe storage for instant boot speed.', linkText: 'View SSD Info' },
        { iconName: 'Shield', title: 'C&G Local Warranty', desc: 'Covered by 6 to 12 months local warranty with immediate part or unit replacement dispatch.', linkText: 'View Warranty' },
      ],
    },

    proof: {
      badge: 'SAVINGS PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Saving enterprise clients money while delivering fast, reliable commercial laptops.',
      cards: [
        { rating: 5, title: 'Saved $15,000 On Fleet', quote: 'We equipped 30 new software developers with Grade-A ThinkPads. Performance is indistinguishable from brand new laptops.', author: 'SaaS Startup Founder', role: 'CEO', tag: 'STARTUP FLEET' },
        { rating: 5, title: 'Durable BPO Laptops', quote: 'Our call center runs 24/7. These commercial Latitude laptops outlasted cheap retail plastic laptops easily.', author: 'BPO Operations', role: 'Facilities Lead', tag: '24/7 WORKFORCE' },
        { rating: 5, title: 'Instant Warranty Service', quote: 'When a keyboard key acted up, C&G replaced the module on-site the very next morning.', author: 'Training Institute', role: 'Lab Director', tag: 'WARRANTY TEST' },
      ],
    },

    mediaCTA: {
      badge: 'REFURBISHED FLEET',
      title: 'Get Premium Commercial Laptops For Less',
      subtitle: 'Download our current Grade-A laptop inventory list featuring Intel Core i5/i7 ThinkPad, Latitude, and EliteBook laptops with local warranty.',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Get Laptop Pricing List',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Savings', value: '50% to 60%' },
        { label: 'Testing', value: '50-Point Audit' },
        { label: 'Warranty', value: '6-12 Months' },
      ],
    },

    faqs: [
      { q: 'What does "Grade-A Refurbished" mean for your laptops?', a: 'Grade-A indicates laptops in excellent cosmetic condition with zero screen blemishes, 100% functional ports/keys, and tested hardware components.' },
      { q: 'What warranty is provided with refurbished laptops from C&G Infotech?', a: 'All our certified refurbished laptops include 6 to 12 months of local warranty covering hardware components and service support.' },
      { q: 'Are the batteries in refurbished laptops tested and functional?', a: 'Yes. We test every battery under active workload conditions to ensure healthy runtime backup before certification.' },
      { q: 'Can we request custom RAM and SSD upgrades before purchasing?', a: 'Yes. We can customize RAM (8GB, 16GB, 32GB) and SSD storage (256GB, 512GB, 1TB) based on your workload needs.' },
      { q: 'Do you offer bulk discounts for corporate orders of 10+ laptops?', a: 'Yes. We offer special corporate pricing for bulk laptop purchases for offices, startups, and training centers.' },
    ],
  },

  // 9. HARDWARE & SUPPLY
  {
    id: 'hardware-supply',
    slug: 'hardware-supply',
    title: 'Hardware & Hardware Supply',
    eyebrow: 'Authorized Commercial IT Hardware Distribution.',
    heroPill: 'COMMERCIAL HARDWARE SUPPLY',
    heroTitle: 'Genuine Enterprise IT Hardware Supply',
    heroAccent: 'IT Hardware Supply',
    shortDescription: 'Single-source procurement for server hardware, network switches, routers, CCTV equipment, biometric terminals, workstations, displays, and UPS systems.',
    fullDescription: 'Authorized corporate supply partner delivering authentic commercial IT hardware. From server processors and network switches to biometric terminals, displays, and UPS power units, we supply top global brands with full manufacturer warranty.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Hardware Supply Categories',
      sectionSubtitle: 'Direct corporate distribution sourcing authentic equipment with valid serial numbers.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Server', title: 'Server & Compute Parts', desc: 'Processors, SAS hard drives, ECC RAM modules, and RAID controllers.' },
        { iconName: 'Network', title: 'Networking Devices', desc: 'Managed switches, routers, fiber transceivers, patch cords, and access points.' },
        { iconName: 'Camera', title: 'Surveillance Hardware', desc: 'IP cameras, NVRs, PoE injectors, power boxes, and surveillance hard drives.' },
        { iconName: 'Zap', title: 'Power & UPS Systems', desc: 'Commercial online UPS units, battery banks, rack PDUs, and surge suppressors.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'DIRECT DISTRIBUTION', title: 'Brand-Authorized Supply', desc: 'Direct corporate channels for Dell, HP, Cisco, Hikvision, Dahua, ZK Teco, and APC.', imageUrl: 'public/catalog/03_printers_spread.jpg', linkText: 'Explore Brands' },
        { tag: 'PRE-CONFIGURATION', title: 'Pre-Delivery Flash & Config', desc: 'Pre-delivery firmware updates, IP assignment, and RAID setup before desk delivery.', imageUrl: 'public/catalog/06_storage_hero.jpg', linkText: 'View Services' },
      ],
    },

    featureSplit: {
      heading: 'Single-Source Supply For All IT Hardware Needs.',
      description: 'Streamline corporate procurement. We supply, deliver, assemble, and configure authentic hardware components from global brands with full local warranty.',
      bulletPoints: [
        'Transparent corporate quotes with competitive bulk volume discounts',
        'Official manufacturer warranty handling and local service support',
        'Pre-delivery configuration, firmware flashing, and desk installation',
        'Immediate stock availability for high-demand IT hardware items',
      ],
      stat1: { value: '100%', label: 'Genuine Products' },
      stat2: { value: 'Fast', label: 'Local Delivery' },
      badge: 'HARDWARE SUPPLY',
      ctaText: 'Request Hardware Pricing',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'SUPPLY ADVANTAGE',
      heading: 'Genuine Corporate Sourcing & Local Support',
      subtitle: 'Authentic corporate hardware, transparent pricing, and complete post-delivery configuration support.',
      benefits: [
        { iconName: 'Shield', title: '100% Genuine Distribution', desc: 'Direct channel procurement with valid manufacturer serial numbers and official warranties.', linkText: 'View Warranty Policy' },
        { iconName: 'Zap', title: 'Pre-Delivery Staging', desc: 'Firmware upgrades, IP configuration, and component stress testing conducted before shipment.', linkText: 'Explore Staging' },
        { iconName: 'Server', title: 'Complete AMC Backing', desc: 'Combine hardware procurement with Annual Maintenance Contracts for end-to-end peace of mind.', linkText: 'View AMC Plans' },
      ],
    },

    proof: {
      badge: 'SUPPLY PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Single-source corporate hardware supply for enterprises and contractors.',
      cards: [
        { rating: 5, title: 'Single-Vendor Procurement', quote: 'C&G supplied our servers, switches, cameras, and UPS units under a single unified purchase order.', author: 'Commercial Real Estate', role: 'Head of Procurement', tag: 'UNIFIED SUPPLY' },
        { rating: 5, title: 'Ready Stock Availability', quote: 'When our network switch failed, C&G delivered a genuine replacement switch within 2 hours.', author: 'Tech Park Tenant', role: 'IT Lead', tag: 'READY STOCK' },
        { rating: 5, title: 'Pre-Configured Out Of Box', quote: 'All switches were pre-loaded with our VLAN settings before arriving at our desk.', author: 'Financial Firm', role: 'Network Admin', tag: 'PRE-CONFIGURED' },
      ],
    },

    mediaCTA: {
      badge: 'IT HARDWARE PROCUREMENT',
      title: 'Streamline Your Hardware Supply Chain',
      subtitle: 'Send us your hardware requirement bill of materials (BOM) for an immediate corporate quote with volume discounts.',
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Request Hardware Pricing',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Sourcing', value: '100% Genuine' },
        { label: 'Brands', value: 'Top Global' },
        { label: 'Staging', value: 'Pre-Configured' },
      ],
    },

    faqs: [
      { q: 'Are all hardware items supplied by C&G Infotech brand-new and authentic?', a: 'Yes. We supply 100% genuine brand-new commercial hardware with official manufacturer serial numbers and warranties.' },
      { q: 'Can C&G Infotech configure the hardware before delivering it to our office?', a: 'Yes. We offer pre-configuration services including firmware updates, IP assignment, RAID setup, and software load prior to delivery.' },
      { q: 'Do you provide hardware supply under Annual Maintenance Contracts (AMC)?', a: 'Yes. We supply hardware and provide comprehensive AMC maintenance covering ongoing servicing and breakdown support.' },
      { q: 'What top brands do you supply for networking and CCTV hardware?', a: 'We supply leading brands including Cisco, Hikvision, Dahua, Dell, HP, Lenovo, APC, ZK Teco, and TP-Link.' },
      { q: 'How can we request a formal corporate quote for hardware procurement?', a: 'Click the "Get a Quote" button or contact our sales department with your hardware requirement list for immediate pricing.' },
    ],
  },

  // 10. DIGITAL SOLUTIONS
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    title: 'Digital Solutions',
    eyebrow: 'Software Built Around Your Business.',
    heroPill: 'ENTERPRISE DIGITAL SOLUTIONS',
    heroTitle: 'Transforming Workflows With Custom Software',
    heroAccent: 'Custom Software',
    shortDescription: 'Modern corporate web development, scalable web applications, iOS/Android mobile apps, custom ERP/CRM tools, and bespoke software automation.',
    fullDescription: 'Transforming operational workflows with high-performance software. From modern responsive company websites to complex SaaS applications, visitor management software, and custom internal management portals.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Digital Engineering Capabilities',
      sectionSubtitle: 'Modern frontend frameworks, scalable cloud backends, and mobile applications.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Globe', title: 'Corporate Web Apps', desc: 'Responsive corporate web platforms built using React, Next.js, and TypeScript.' },
        { iconName: 'Server', title: 'Custom ERP & CRM Portals', desc: 'Internal web tools automating inventory, attendance, and client workflows.' },
        { iconName: 'Smartphone', title: 'Mobile Applications', desc: 'Cross-platform mobile apps for iOS and Android tailored for field teams.' },
        { iconName: 'Code', title: 'API & Cloud Integrations', desc: 'Connecting third-party databases, biometric hardware, and payment gateways.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'CUSTOM PORTALS', title: 'Enterprise Web Dashboards', desc: 'High-speed cloud management portals automating company rosters, logs, and assets.', imageUrl: '/images/cards/card-attendance-new.jpg', linkText: 'Explore Dashboards' },
        { tag: 'CLOUD BACKEND', title: 'Scalable Microservice APIs', desc: 'Node.js and Python backend architectures built for high user concurrency.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', linkText: 'View Architecture' },
      ],
    },

    featureSplit: {
      heading: 'Custom Software Designed For Your Exact Operations.',
      description: 'We build tailor-made web and mobile software platforms that automate manual paperwork, streamline staff management, and represent your brand with distinction.',
      bulletPoints: [
        'Full source code ownership with no lock-in recurring software fees',
        'Scalable cloud database architecture ready for high user concurrency',
        'Modern responsive UI design optimized for mobile and desktop screens',
        'Dedicated maintenance, security updates, and cloud hosting support',
      ],
      stat1: { value: '100%', label: 'Custom Codebase' },
      stat2: { value: '99.9%', label: 'Cloud Uptime' },
      badge: 'SOFTWARE ENGINEERING',
      ctaText: 'Discuss Software Project',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'SOFTWARE STACK',
      heading: 'Clean Codebases Engineered For Business Growth',
      subtitle: 'Clean modern codebases, lightning-fast user interfaces, and full source code ownership.',
      benefits: [
        { iconName: 'Code', title: 'Full Code Ownership', desc: 'Complete intellectual property and source code ownership handoff upon project completion.', linkText: 'Learn More' },
        { iconName: 'Globe', title: 'Ultra-Fast Performance', desc: 'Lightweight React & Next.js frontend architectures achieving 90+ Google PageSpeed scores.', linkText: 'View Specs' },
        { iconName: 'Server', title: 'Secure Cloud Hosting', desc: 'Automated deployment on AWS with SSL encryption, database backups, and DDoS protection.', linkText: 'Explore Hosting' },
      ],
    },

    proof: {
      badge: 'SOFTWARE PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Custom digital platforms built for operational efficiency.',
      cards: [
        { rating: 5, title: 'Automated Manual Workflows', quote: 'Their custom inventory and attendance software replaced 4 manual Excel sheets with 1 central portal.', author: 'Logistics Enterprise', role: 'Operations Director', tag: 'ERP AUTOMATION' },
        { rating: 5, title: '100% Code Ownership', quote: 'Unlike SaaS vendors charging per-user subscriptions, C&G built us a custom portal we own outright.', author: 'Commercial Group', role: 'Chief Information Officer', tag: 'OWNERSHIP' },
        { rating: 5, title: 'Seamless Biometric API', quote: 'The API bridge linking our hardware punch terminals to our web portal works flawlessly 24/7.', author: 'Manufacturing Client', role: 'HR Lead', tag: 'API INTEGRATION' },
      ],
    },

    mediaCTA: {
      badge: 'DIGITAL TRANSFORMATION',
      title: 'Accelerate Your Digital Workflows',
      subtitle: 'Schedule a technical software consultation to map out custom web portal, API integration, or mobile app scope.',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Discuss Software Project',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Codebase', value: '100% Custom' },
        { label: 'Ownership', value: 'Full IP Rights' },
        { label: 'Hosting', value: 'AWS Cloud' },
      ],
    },

    faqs: [
      { q: 'Do you build completely custom software or use pre-made templates?', a: 'We build custom software tailored precisely to your operational requirements using clean frameworks like React, Node.js, and Python.' },
      { q: 'Will our business own the source code for the custom software developed?', a: 'Yes. Upon project completion and handoff, full intellectual property and source code ownership belong to your company.' },
      { q: 'Can custom software be integrated with our existing biometric attendance hardware?', a: 'Yes. We write custom API bridge connectors to sync local biometric hardware databases with cloud web portals.' },
      { q: 'Do you provide cloud hosting and maintenance after launch?', a: 'Yes. We provide complete cloud server setup on AWS or DigitalOcean with continuous backup monitoring and security maintenance.' },
      { q: 'How long does it take to develop a custom corporate web application?', a: 'Timelines vary based on scope. Typical corporate web projects range from 3 to 8 weeks from wireframing to live deployment.' },
    ],
  },

  // 11. WEB DEVELOPMENT
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    eyebrow: 'Custom Corporate Websites & Web Portals.',
    heroPill: 'CORPORATE WEB DEVELOPMENT',
    heroTitle: 'High-Performance Corporate Web Platforms',
    heroAccent: 'Corporate Web Platforms',
    shortDescription: 'Responsive corporate website development, modern UI/UX design, custom web portals, e-commerce platforms, and cloud hosting.',
    fullDescription: 'High-performance web development tailored for modern corporate brands. We build fast, secure, and scalable websites, customer portals, and web applications using modern technologies like React, Next.js, and Node.js.',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Web Architecture Stack',
      sectionSubtitle: 'React & Next.js frontend, modern CSS styling, and technical SEO engine.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Globe', title: 'Modern UI/UX Design', desc: 'Custom visual interface design crafted to showcase corporate authority.' },
        { iconName: 'Code', title: 'React & Next.js Stack', desc: 'Component-driven frameworks ensuring ultra-fast page load transitions.' },
        { iconName: 'Smartphone', title: 'Responsive Mobile UI', desc: 'Flawless responsive layouts tested across smartphones, tablets, and desktops.' },
        { iconName: 'Zap', title: 'SEO & Performance', desc: 'Full technical SEO optimization achieving 90+ Google PageSpeed scores.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'BRAND WEBSITES', title: 'Bespoke Corporate Sites', desc: 'High-conversion corporate websites designed with smooth micro-animations and crisp typography.', imageUrl: '/images/cards/card-attendance-new.jpg', linkText: 'Explore Web Design' },
        { tag: 'CLIENT PORTALS', title: 'Secure Client Web Portals', desc: 'Web applications for client document downloads, project tracking, and inquiries.', imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', linkText: 'View Portals' },
      ],
    },

    featureSplit: {
      heading: 'Engaging Web Experiences Engineered To Convert.',
      description: 'We craft bespoke corporate websites and web platforms that present your enterprise capabilities with aesthetic authority, fast performance, and intuitive navigation.',
      bulletPoints: [
        'Custom interactive component animations using GSAP and Framer Motion',
        'Clean semantic HTML, Schema structure, and search engine optimization',
        '100% mobile-friendly responsive layouts tested across all devices',
        'Full source code ownership and dedicated maintenance support options',
      ],
      stat1: { value: '90+', label: 'PageSpeed Score' },
      stat2: { value: '100%', label: 'Custom Code' },
      badge: 'WEB ENGINEERING',
      ctaText: 'Start Web Project',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'WEB PROMISE',
      heading: 'Aesthetic Excellence Paired With Engineering Speed',
      subtitle: 'Custom pixel-perfect design, zero bloated templates, and lightning-fast page loading speeds.',
      benefits: [
        { iconName: 'Globe', title: 'Bespoke UI Design', desc: 'Tailor-made layout systems reflecting your corporate brand style with zero generic template feel.', linkText: 'View Design System' },
        { iconName: 'Zap', title: '90+ Speed Scores', desc: 'Optimized asset bundles, clean React components, and instant page routing.', linkText: 'View Benchmarks' },
        { iconName: 'Shield', title: 'AWS Cloud Hosting', desc: 'Enterprise SSL certificates, cloud CDN delivery, and automatic daily site backups.', linkText: 'Explore Hosting' },
      ],
    },

    proof: {
      badge: 'WEB PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Crafting high-impact corporate web presences for industry leaders.',
      cards: [
        { rating: 5, title: '95 PageSpeed Score', quote: 'Our new corporate website loads in under 1 second. Lead conversions increased by 40% in month one.', author: 'Commercial Tech Brand', role: 'Marketing VP', tag: 'WEBSITE REDESIGN' },
        { rating: 5, title: 'Mobile Perfection', quote: 'The site looks pristine on smartphones. Clients comment constantly on how modern the design feels.', author: 'Healthcare Group', role: 'Digital Director', tag: 'MOBILE FIRST' },
        { rating: 5, title: 'Zero Maintenance Hassle', quote: 'C&G handles our AWS hosting and security patches seamlessly under their annual web AMC.', author: 'Real Estate Developer', role: 'Chief Executive', tag: 'WEB AMC' },
      ],
    },

    mediaCTA: {
      badge: 'WEB ENGINEERING',
      title: 'Elevate Your Corporate Web Presence Today',
      subtitle: 'Schedule a discovery session with C&G web designers to wireframe your next high-conversion corporate website.',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Start Web Project',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Framework', value: 'React / Next.js' },
        { label: 'PageSpeed', value: '90+ Score' },
        { label: 'SEO', value: 'Fully Optimized' },
      ],
    },

    faqs: [
      { q: 'How long does it take to design and launch a custom corporate website?', a: 'Standard corporate website projects typically take between 3 to 6 weeks from initial design wireframing to live launch.' },
      { q: 'Will our website be fully responsive on mobile devices and tablets?', a: 'Yes. Every website we build is engineered with mobile-first responsive design, ensuring a perfect visual layout on all screen sizes.' },
      { q: 'Do you build websites using templates or custom code?', a: 'We build custom component-driven websites using modern frameworks like React and Next.js for superior speed, security, and design control.' },
      { q: 'Will our team be able to update content on the website easily?', a: 'Yes. We provide easy-to-use content management options or handle ongoing updates for you under maintenance plans.' },
      { q: 'Do you provide web hosting, SSL certificates, and domain management?', a: 'Yes. We set up fast cloud hosting on AWS or DigitalOcean, configure SSL security certificates, and manage DNS settings.' },
    ],
  },

  // 12. APP DEVELOPMENT
  {
    id: 'app-development',
    slug: 'app-development',
    title: 'App Development',
    eyebrow: 'Native & Cross-Platform Mobile Apps.',
    heroPill: 'MOBILE APP ENGINEERING',
    heroTitle: 'Intuitive Mobile Apps For iOS & Android',
    heroAccent: 'iOS & Android',
    shortDescription: 'Custom iOS & Android mobile applications, cross-platform React Native solutions, enterprise mobility, and app store publishing.',
    fullDescription: 'Enterprise mobile app engineering for iOS and Android platforms. We design and develop secure, intuitive mobile applications tailored for employee workflows, customer engagement, and business process automation.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',

    techOverview: {
      sectionTitle: 'Mobile App Tech Stack',
      sectionSubtitle: 'React Native cross-platform framework, native Swift/Kotlin modules, and secure REST APIs.',
      leftTitle: 'Explore Our Technology',
      techItems: [
        { iconName: 'Smartphone', title: 'Cross-Platform React Native', desc: 'Deploy a single codebase to both iOS and Android with 100% native performance.' },
        { iconName: 'Globe', title: 'Mobile UI/UX Interface', desc: 'Intuitive touch interface wireframes designed for single-hand navigation.' },
        { iconName: 'Database', title: 'Offline Mode Synchronization', desc: 'Local caching allowing field apps to operate without active internet connection.' },
        { iconName: 'Shield', title: 'App Store Publishing', desc: 'Full management of Apple App Store and Google Play Store publishing compliance.' },
      ],
      rightTitle: 'Latest Solutions',
      solutions: [
        { tag: 'WORKFORCE APPS', title: 'Enterprise Field Inspection Apps', desc: 'Mobile apps for site engineers with offline form filling, photo capture, and GPS tags.', imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', linkText: 'Explore Mobile Tools' },
        { tag: 'PUSH ALERTS', title: 'Real-Time Notification Servers', desc: 'Integrated notification gateways sending instant alerts and updates to users.', imageUrl: '/images/cards/card-attendance-new.jpg', linkText: 'View Backend Specs' },
      ],
    },

    featureSplit: {
      heading: 'Enterprise Mobility Tools Engineered For Speed.',
      description: 'Empower your workforce and customers with high-speed mobile apps tailored for field inspections, order tracking, visitor check-ins, or customer loyalty.',
      bulletPoints: [
        'Single codebase cross-platform apps reducing development time by 40%',
        'High-speed REST and GraphQL backend API integrations',
        'Strict mobile data encryption and secure token authentication',
        'End-to-end management from concept wireframes to App Store launch',
      ],
      stat1: { value: 'iOS & Android', label: 'Dual Platform' },
      stat2: { value: '100%', label: 'Store Approval' },
      badge: 'MOBILE ENGINEERING',
      ctaText: 'Start App Project',
      ctaLink: '/get-quote',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    },

    benefitsDark: {
      badge: 'MOBILE PROMISE',
      heading: 'Native Performance With Single Codebase Speed',
      subtitle: 'Native performance, intuitive mobile UI design, and seamless cloud database API integration.',
      benefits: [
        { iconName: 'Smartphone', title: 'Dual-Platform Launch', desc: 'Build once and launch on both Apple App Store and Google Play Store simultaneously.', linkText: 'Explore React Native' },
        { iconName: 'Database', title: 'Offline Data Cache', desc: 'Allows field agents to submit forms offline, syncing automatically when internet resumes.', linkText: 'View Offline DB' },
        { iconName: 'Lock', title: 'Biometric FaceID Login', desc: 'Secure fingerprint and FaceID authentication integration for enterprise mobile security.', linkText: 'View Auth Security' },
      ],
    },

    proof: {
      badge: 'MOBILE PROOF',
      heading: 'Why Organizations Choose C&G',
      subtitle: 'Delivering secure mobile applications for field workforce teams.',
      cards: [
        { rating: 5, title: 'Field Inspection Efficiency', quote: 'Our field engineers complete site audit checklists 50% faster using our custom React Native mobile app.', author: 'Logistics Group', role: 'Head of Mobility', tag: 'FIELD WORKFORCE' },
        { rating: 5, title: 'Seamless Store Approval', quote: 'C&G handled the entire Apple App Store developer submission and privacy policy compliance effortlessly.', author: 'Retail Chain Brand', role: 'Digital Lead', tag: 'APP STORE LAUNCH' },
        { rating: 5, title: 'Robust Offline Sync', quote: 'Technicians inspect remote telecom towers offline without losing a single form entry or photo upload.', author: 'Infrastructure Service', role: 'Operations Lead', tag: 'OFFLINE MODE' },
      ],
    },

    mediaCTA: {
      badge: 'MOBILE APP ENGINEERING',
      title: 'Launch Your Enterprise Mobile App Today',
      subtitle: 'Schedule an interactive mobile prototype scoping session to wireframe your iOS and Android mobile app.',
      imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1600&q=80',
      ctaText: 'Start App Project',
      ctaLink: '/get-quote',
      metrics: [
        { label: 'Platforms', value: 'iOS & Android' },
        { label: 'Framework', value: 'React Native' },
        { label: 'Approval', value: '100% Store Pass' },
      ],
    },

    faqs: [
      { q: 'Should we build a native app or a cross-platform React Native app?', a: 'For most commercial apps, React Native is ideal as it deploys a single codebase onto both iOS and Android with top native performance at 40% lower cost.' },
      { q: 'Do you handle the App Store and Google Play Store publishing process?', a: 'Yes. We manage all store developer guidelines, privacy policy submissions, screenshot assets, and submission reviews.' },
      { q: 'Can the mobile app work in offline mode without an active internet connection?', a: 'Yes. We build local data caching so users can fill forms or view data offline, automatically syncing with the cloud when connected.' },
      { q: 'Who owns the mobile app source code upon project completion?', a: 'You retain 100% full intellectual property and source code ownership upon project completion and handoff.' },
      { q: 'Do you provide ongoing mobile app maintenance and OS compatibility updates?', a: 'Yes. We offer maintenance packages covering new iOS/Android version compatibility, bug fixes, and feature upgrades.' },
    ],
  },
];

// HELPER ALIAS LOOKUP FOR SLUGS
const SLUG_ALIASES: Record<string, string> = {
  'security': 'cctv-surveillance',
  'security-surveillance': 'cctv-surveillance',
  'cctv': 'cctv-surveillance',
  'networking-solutions': 'networking',
  'computers': 'computers-laptops',
  'computer-solutions': 'computers-laptops',
  'visitor-management-software': 'visitor-management',
  'refurbished': 'refurbished-laptops',
  'hardware': 'hardware-supply',
};

export function getServiceBySlug(slug: string): ServiceItem {
  const normalizedSlug = slug ? slug.toLowerCase().trim() : '';
  const targetSlug = SLUG_ALIASES[normalizedSlug] || normalizedSlug;

  const found = SERVICES_DATA.find((s) => s.slug === targetSlug || s.id === targetSlug);
  if (found) return found;

  // Partial search fallback
  const partial = SERVICES_DATA.find((s) => s.slug.includes(normalizedSlug) || normalizedSlug.includes(s.slug));
  if (partial) return partial;

  // Default to first service (Security & Surveillance)
  return SERVICES_DATA[0];
}
