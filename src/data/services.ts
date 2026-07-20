export interface SubService {
  id: string;
  title: string;
  description: string;
  equipment: string[];
  useCases: string[];
}

export interface Service {
  slug: string;
  title: string;
  hero: string;
  intro: string;
  subServices: SubService[];
  equipment: string[];
  cta: string;
}

export const SERVICES: Record<string, Service> = {
audio: {
    slug: 'audio',
    title: 'Audio Systems',
    hero: '/assets/images/gallery/main-stage-line-array.jpg',
    intro: 'AV-TEC provides end-to-end professional sound reinforcement for events of every scale — from intimate corporate boardrooms to 50,000-capacity outdoor festivals. With over three decades of live-sound expertise and a partnership with D&B audiotechnik, we deliver crystal-clear audio tailored to your venue acoustics and audience size.',
    subServices: [
      {
        id: 'line-array',
        title: 'Line Array Systems',
        description: 'Our D&B audiotechnik GSL, SL, J, and V-Series line arrays deliver consistent SPL coverage across large venues with minimal distortion. Each deployment includes full system design using ArrayCalc simulation to guarantee even coverage from front row to the back fence.',
        equipment: ['D&B GSL Series', 'D&B SL Series', 'D&B J-Series', 'D&B V-Series', 'ArrayCalc Simulation'],
        useCases: ['Concerts', 'Festivals', 'Large Corporate', 'Outdoor Events'],
      },
      {
        id: 'monitor-inear',
        title: 'Monitor & In-Ear Systems',
        description: 'Dedicated monitor world with Yamaha CL/PM series consoles and Shure PSM1000 in-ear systems. Our monitor engineers work directly with artists to ensure every performer hears exactly what they need on stage.',
        equipment: ['Yamaha CL5', 'Yamaha PM10', 'Shure PSM1000', 'Sennheiser IEM'],
        useCases: ['Concerts', 'Music Festivals', 'Theatre', 'Broadcast'],
      },
      {
        id: 'mixing',
        title: 'Mixing & Processing',
        description: 'Front-of-house mixing on DiGiCo SD-Series and Yamaha RIVAGE PM consoles with full outboard processing. All systems include redundant signal paths, network audio distribution via Dante, and recording capability.',
        equipment: ['DiGiCo SD7', 'DiGiCo SD12', 'Yamaha RIVAGE PM10', 'Dante Network', 'Lake Processors'],
        useCases: ['Concerts', 'Corporate Events', 'Broadcast', 'Recording'],
      },
      {
        id: 'wireless',
        title: 'Wireless Microphones',
        description: 'Shure Axient Digital and Sennheiser Digital 6000 wireless systems with automatic frequency coordination. We carry extensive inventory of handheld, lavalier, and headset microphones for any presenter count.',
        equipment: ['Shure Axient Digital', 'Sennheiser Digital 6000', 'Shure ULX-D', 'RF Venue Distribution'],
        useCases: ['Corporate', 'Conferences', 'Theatre', 'Broadcast', 'House of Worship'],
      },
    ],
    equipment: ['D&B audiotechnik GSL / SL / J-Series line arrays', 'D&B SL subs & infra-subs', 'DiGiCo SD7 / SD12 mixing consoles', 'Yamaha RIVAGE PM10 / CL5', 'Shure Axient Digital wireless', 'Sennheiser Digital 6000', 'Shure PSM1000 in-ear monitors', 'Lake LM44 system processors', 'Dante network audio infrastructure', 'Crown / Powersoft amplification'],
    cta: "Whether it's a 200-person conference or a 50,000-seat concert, our audio team designs and delivers systems that sound flawless. Get in touch for a custom quote.",
  },
lighting: {
    slug: 'lighting',
    title: 'Stage Lighting',
    hero: '/assets/images/gallery/concert-lighting-rig.jpg',
    intro: 'AV-TEC\'s lighting division transforms venues with intelligent lighting design — from elegant wash lighting for weddings to high-energy concert productions with moving heads, beam effects, and pixel-mapped LED fixtures.',
    subServices: [
      {
        id: 'moving-lights',
        title: 'Intelligent Moving Lights',
        description: 'Full inventory of Robe, Clay Paky, and Martin moving head fixtures including spots, washes, and beam effects. Our designers use Capture and WYSIWYG pre-visualization to program complex cue sequences before arriving on site.',
        equipment: ['Robe BMFL', 'Robe MegaPointe', 'Clay Paky Sharpy', 'Martin MAC Aura'],
        useCases: ['Concerts', 'Festivals', 'Corporate', 'Weddings'],
      },
      {
        id: 'led-pixel',
        title: 'LED & Pixel Mapping',
        description: 'Architectural LED wash lights, pixel bars, and strip fixtures with full Madrix pixel-mapping control. Create dynamic patterns, ambient washes, and synchronized effects across any surface.',
        equipment: ['SGM P-6', 'Astera AX1', 'Madrix Controller', 'Pixel Bars'],
        useCases: ['Corporate', 'Weddings', 'Festivals', 'Architectural'],
      },
      {
        id: 'conventional',
        title: 'Conventional & Follow Spots',
        description: 'Complete conventional lighting rig with ETC Source Four profiles, Fresnels, PARs, and Robert Juliat follow spots. Ideal for theatre, fashion shows, and events requiring precise beam control.',
        equipment: ['ETC Source Four', 'Robert Juliat Follow Spots', 'PAR Cans', 'Fresnels'],
        useCases: ['Theatre', 'Fashion Shows', 'Corporate', 'Broadcast'],
      },
      {
        id: 'control',
        title: 'Control & Dimming',
        description: 'grandMA3 and ChamSys MagicQ lighting consoles with ArtNet / sACN distribution. All systems include backup consoles, UPS power protection, and dimmer racks for conventional fixtures.',
        equipment: ['grandMA3 Full-Size', 'ChamSys MagicQ MQ500M', 'ArtNet Distribution', 'Dimmer Racks'],
        useCases: ['All Events', 'Concerts', 'Theatre', 'Corporate'],
      },
    ],
    equipment: ['Robe BMFL / MegaPointe moving heads', 'Clay Paky Sharpy / Mythos', 'Martin MAC Aura / Viper', 'ETC Source Four profiles & Fresnels', 'SGM P-6 / P-2 LED wash fixtures', 'Astera AX1 wireless pixel tubes', 'grandMA3 full-size console', 'ChamSys MagicQ MQ500M', 'Madrix pixel mapping controller', 'Robert Juliat Cyrano follow spots'],
    cta: 'From intimate wedding ambience to full-scale concert lighting rigs, our designers create visual experiences that captivate your audience.',
  },
  video: {
    slug: 'video',
    title: 'Video & LED Walls',
    hero: '/assets/images/gallery/led-wall-product-launch.jpg',
    intro: 'AV-TEC delivers stunning visual impact through indoor and outdoor LED walls, projection mapping, camera systems, and live switching. Our video department handles everything from corporate presentation displays to massive festival screens.',
    subServices: [
      {
        id: 'led-walls',
        title: 'LED Wall Displays',
        description: 'Indoor fine-pitch LED panels (P1.9 – P3.9) and outdoor weatherproof LED walls (P4.8 – P10) in any configuration. Our flagship 20\' x 60\' LED wall is a signature installation at major Indian events.',
        equipment: ['Indoor P1.9 / P2.6 / P3.9', 'Outdoor P4.8 / P6 / P10', '20\'x60\' Flagship Wall', 'Processor & Controllers'],
        useCases: ['Concerts', 'Corporate', 'Festivals', 'Exhibitions'],
      },
      {
        id: 'cameras',
        title: 'Live Camera & IMAG',
        description: 'Broadcast-quality camera packages with Sony PXW-Z280 and PTZ cameras, Blackmagic ATEM constellation switchers, and full IMAG workflows for corporate keynotes, concerts, and sports events.',
        equipment: ['Sony PXW-Z280', 'PTZ Optics 30X', 'Blackmagic ATEM', 'Graphics Overlay'],
        useCases: ['Corporate', 'Concerts', 'Sports', 'Broadcast'],
      },
      {
        id: 'projection',
        title: 'Projection Mapping',
        description: 'High-lumen Panasonic and Christie laser projectors for large-venue projection and 3D projection mapping. Transform building facades, stage sets, and architectural surfaces into dynamic canvases.',
        equipment: ['Panasonic PT-RQ35K', 'Christie Crimson', 'Disguise d3', 'Resolume Arena'],
        useCases: ['Corporate', 'Festivals', 'Product Launches', 'Architectural'],
      },
      {
        id: 'content',
        title: 'Content Management',
        description: 'Disguise and Resolume media servers for real-time content playback, generative visuals, and multi-surface mapping. Full content pre-production support including motion graphics and presentation templates.',
        equipment: ['Disguise d3', 'Resolume Arena', 'MadMapper', 'Content Pre-Production'],
        useCases: ['All Events', 'Concerts', 'Corporate', 'Festivals'],
      },
    ],
    equipment: ['Indoor LED panels P1.9 / P2.6 / P3.9', 'Outdoor LED panels P4.8 / P6 / P10', '20\' x 60\' flagship LED wall', 'Blackmagic ATEM 4 M/E Constellation', 'Sony PXW-Z280 broadcast cameras', 'PTZ Optics 30X NDI cameras', 'Panasonic PT-RQ35K laser projectors', 'Christie Crimson laser projectors', 'Disguise d3 media servers', 'Resolume Arena / Wire'],
    cta: 'From intimate conference screens to massive outdoor LED walls, our video team delivers visuals that make an impact.',
  },
  trussing: {
    slug: 'trussing',
    title: 'Trussing & Rigging',
    hero: '/assets/images/gallery/ground-support-truss.jpg',
    intro: 'AV-TEC\'s structural department provides certified trussing, rigging, and staging solutions for events of all sizes. Our certified riggers ensure every installation meets international safety standards.',
    subServices: [
      {
        id: 'truss-structures',
        title: 'Truss Structures',
        description: 'Prolyte and Tyler Truss systems in 12" and 20.5" configurations — box truss, triangular, and circular segments for any design. Ground-supported arches, goal posts, and custom configurations.',
        equipment: ['Prolyte H30V / H40V', 'Tyler GT Truss', 'MFT Roof Systems', 'Custom Fabrication'],
        useCases: ['Concerts', 'Festivals', 'Corporate', 'Exhibitions'],
      },
      {
        id: 'hoists',
        title: 'Chain Hoists & Motors',
        description: 'CM Lodestar, Prolyft, and Movecat chain hoists from 0.5T to 2T capacity with certified load monitoring. All motors carry current load certificates and are operated by trained rigging personnel.',
        equipment: ['CM Lodestar 1T', 'Prolyft Aetos', 'Movecat D8+', 'Broadweigh Load Monitoring'],
        useCases: ['Concerts', 'Festivals', 'Theatre', 'Large Events'],
      },
      {
        id: 'staging',
        title: 'Staging & Decking',
        description: 'Modular staging platforms in various heights (0.6m – 2m) with adjustable legs, safety rails, and ADA-compliant ramps. Weather-protected outdoor stages with roof systems for festival deployments.',
        equipment: ['Prolyte StageDex', 'Modular Risers', 'Outdoor Roof Systems', 'Crowd Barriers'],
        useCases: ['Concerts', 'Festivals', 'Corporate', 'Outdoor Events'],
      },
      {
        id: 'fabrication',
        title: 'Custom Fabrication',
        description: 'In-house fabrication for custom set pieces, scenic elements, and branded structures. From corporate backdrops to concert stage designs, our team builds what your creative vision demands.',
        equipment: ['Welding & Metalwork', 'Scenic Carpentry', 'Print & Vinyl', 'Rigging Hardware'],
        useCases: ['Corporate', 'Concerts', 'Product Launches', 'Exhibitions'],
      },
    ],
    equipment: ['Prolyte H30V / H40V box truss', 'Tyler GT 12" and 20.5" truss', 'Prolyte MPT roof systems', 'CM Lodestar 1T chain hoists', 'Prolyft Aetos 500kg motors', 'Movecat D8+ variable speed hoists', 'Broadweigh load monitoring cells', 'Modular staging (Prolyte StageDex)', 'Crowd barriers & front-of-house systems', 'Scenic fabrication workshop'],
    cta: 'Safe, certified, and engineered for your event. Contact our rigging team for structural planning and load calculations.',
  },
  consultancy: {
    slug: 'consultancy',
    title: 'Tech Consultancy',
    hero: '/assets/images/gallery/foh-control-position.jpg',
    intro: 'AV-TEC\'s consultancy division brings three decades of technical expertise to your planning table. Whether you\'re designing a new venue, upgrading an existing AV installation, or planning a complex multi-day event, our consultants provide practical, budget-conscious advice.',
    subServices: [
      {
        id: 'venue-design',
        title: 'Venue Design & Acoustics',
        description: 'Acoustic analysis and AV system design for auditoriums, conference centres, houses of worship, and hospitality venues. We work with architects from the blueprint stage to ensure optimal speaker placement and cable infrastructure.',
        equipment: ['EASE Acoustic Modelling', 'AutoCAD Drafting', 'Vectorworks', 'ArrayCalc'],
        useCases: ['Venue Design', 'Renovation', 'New Builds', 'Acoustic Treatment'],
      },
      {
        id: 'tech-direction',
        title: 'Event Technical Direction',
        description: 'Dedicated technical directors for complex events — managing timelines, crew coordination, vendor integration, and on-site troubleshooting. Our TDs have managed productions for India\'s largest brands.',
        equipment: ['Project Management', 'Gantt Planning', 'Crew Scheduling', 'Risk Assessment'],
        useCases: ['Large Events', 'Festivals', 'Corporate', 'Touring'],
      },
      {
        id: 'system-architecture',
        title: 'System Architecture',
        description: 'Network audio (Dante/AVB), video distribution (NDI/SDI), lighting control (ArtNet/sACN), and IT infrastructure design. We specify and oversee implementation of integrated AV systems.',
        equipment: ['Dante Certification', 'AVB Networks', 'NDI Workflows', 'IT Infrastructure'],
        useCases: ['Venue Design', 'Installations', 'Upgrades', 'Broadcast'],
      },
      {
        id: 'procurement',
        title: 'Budget & Procurement',
        description: 'Equipment specification and vendor-neutral procurement guidance. We help you invest in the right gear at the right price point — whether building a rental inventory or outfitting a venue.',
        equipment: ['Budget Modelling', 'ROI Analysis', 'Vendor Evaluation', 'Tendering'],
        useCases: ['Rental Companies', 'Venues', 'Corporates', 'Startups'],
      },
    ],
    equipment: ['EASE acoustic modelling', 'ArrayCalc system simulation', 'AutoCAD / Vectorworks drafting', 'Dante network certification', 'PLASA / ESTA rigging standards', 'Project management & Gantt planning', 'Budget modelling & ROI analysis', 'Vendor evaluation & tendering', 'On-site commissioning & tuning', 'Staff training & documentation'],
    cta: 'Bring our 30+ years of experience to your next project. Schedule a consultation to discuss your venue, event, or AV investment.',
  },
  installations: {
    slug: 'installations',
    title: 'Installs & Integrations',
    hero: '/assets/images/gallery/auditorium-install.jpg',
    intro: 'AV-TEC\'s installation division designs and delivers permanent AV solutions for corporate offices, conference rooms, auditoriums, houses of worship, hospitality venues, and educational institutions.',
    subServices: [
      {
        id: 'conference-av',
        title: 'Conference & Boardroom AV',
        description: 'Integrated video conferencing with Poly, Cisco, and Crestron Flex systems. Wireless presentation (Barco ClickShare, Mersive Solstice), ceiling microphone arrays, and automated room control.',
        equipment: ['Crestron Flex', 'Poly Studio X', 'Barco ClickShare', 'Shure MXA920'],
        useCases: ['Boardrooms', 'Meeting Rooms', 'Training Rooms', 'Video Conferencing'],
      },
      {
        id: 'auditorium',
        title: 'Auditorium & Worship',
        description: 'Complete sound, lighting, and video systems for auditoriums and houses of worship. Installed line arrays, architectural lighting, fixed projection or LED displays, and broadcast-ready camera systems.',
        equipment: ['Installed Line Arrays', 'Architectural Lighting', 'Fixed LED/Projection', 'Streaming Systems'],
        useCases: ['Auditoriums', 'Houses of Worship', 'Community Centers', 'Schools'],
      },
      {
        id: 'digital-signage',
        title: 'Digital Signage & Displays',
        description: 'Samsung, LG, and NEC commercial display networks with BrightSign or Scala content management. Lobby displays, wayfinding kiosks, menu boards, and video walls with remote management.',
        equipment: ['Samsung Displays', 'LG Displays', 'NEC Displays', 'BrightSign CMS', 'Scala CMS'],
        useCases: ['Corporate Lobbies', 'Retail', 'Hospitality', 'Education', 'Healthcare'],
      },
      {
        id: 'control-systems',
        title: 'Network & Control Systems',
        description: 'Crestron, Extron, and QSC Q-SYS control system programming for automated AV environments. Touch panel interfaces, occupancy sensing, room scheduling integration, and remote monitoring.',
        equipment: ['Crestron DigitalMedia', 'Extron DTP', 'QSC Q-SYS', 'Room Scheduling'],
        useCases: ['Corporate', 'Education', 'Government', 'Hospitality'],
      },
    ],
    equipment: ['Crestron DigitalMedia & NVX', 'Extron DTP CrossPoint switchers', 'QSC Q-SYS Core processors', 'Poly Studio X video conferencing', 'Barco ClickShare wireless presentation', 'Samsung / LG commercial displays', 'BrightSign digital signage players', 'Shure MXA920 ceiling microphones', 'Biamp Tesira DSP processors', 'Structured cabling & rack builds'],
    cta: 'Ready to upgrade your space with reliable, integrated AV technology? Contact our installations team for a site survey and proposal.',
  },
};

export const SERVICE_LIST = Object.values(SERVICES).map(s => ({
  title: s.title,
  slug: s.slug,
  hero: s.hero,
  intro: s.intro.slice(0, 120) + '...',
}));
