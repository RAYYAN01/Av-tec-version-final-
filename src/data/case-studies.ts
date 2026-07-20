export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  date: string;
  city: string;
  services: string[];
  equipment: string[];
  audience: string;
  duration: string;
  heroImage: string;
  images: string[];
  video?: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: { quote: string; name: string; role: string };
}

/* ============================================================
   EDIT HERE — example case studies (proof of work).
   Swap in real client names, dates, and results when ready.
   ============================================================ */

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'festival-main-stage',
    title: 'Festival Main-Stage Sound',
    client: 'City Music Festival',
    date: '2024',
    city: 'Bengaluru',
    services: ['Audio Systems', 'Trussing & Rigging'],
    equipment: ['D&B GSL Line Array', 'DiGiCo SD7', 'Prolyte Roof System', 'CM Lodestar Hoists'],
    audience: '25,000+',
    duration: '3 days',
    heroImage: '/assets/images/gallery/main-stage-line-array.jpg',
    images: [
      '/assets/images/gallery/main-stage-line-array.jpg',
      '/assets/images/gallery/monitor-world.jpg',
      '/assets/images/gallery/roof-rigging-build.jpg',
    ],
    challenge: 'Deliver even, high-SPL coverage across a 25,000-capacity open ground with a tight overnight build window and unpredictable monsoon weather.',
    solution: 'A D&B GSL main hang with delay towers designed in ArrayCalc, weather-protected under a Prolyte roof, with fully redundant FOH and monitor consoles.',
    results: ['Even coverage front-to-back with no dead zones', 'Zero downtime across three show days', 'Sub-8-hour overnight rig and soundcheck'],
    testimonial: { quote: 'The truss system was up in hours and rock solid. Their rigging team is world-class.', name: 'Arun Sharma', role: 'Festival Organizer' },
  },
  {
    slug: 'corporate-product-launch',
    title: 'LED Wall Product Launch',
    client: 'National Consumer Brand',
    date: '2024',
    city: 'Mumbai',
    services: ['Video & LED Walls', 'Stage Lighting'],
    equipment: ['P2.6 Indoor LED', 'Blackmagic ATEM', 'Robe MegaPointe', 'Disguise Media Server'],
    audience: '1,200',
    duration: '1 day',
    heroImage: '/assets/images/gallery/led-wall-product-launch.jpg',
    images: [
      '/assets/images/gallery/led-wall-product-launch.jpg',
      '/assets/images/gallery/corporate-keynote-screen.jpg',
      '/assets/images/gallery/concert-lighting-rig.jpg',
    ],
    challenge: 'Create a premium reveal moment on a fine-pitch LED wall with pixel-perfect content playback and live camera IMAG for a launch keynote.',
    solution: 'A seamless P2.6 indoor wall driven by a Disguise media server, ATEM switching for IMAG, and a moving-light rig timecoded to the show.',
    results: ['Flawless content playback with no frame drops', 'Broadcast-grade IMAG for the room and livestream', 'Premium first impression from doors-open'],
    testimonial: { quote: 'The lighting and video wall made our product launch feel premium from the first guest arrival.', name: 'Sana Mehta', role: 'Brand Manager' },
  },
  {
    slug: 'corporate-conference',
    title: 'Multi-Day Corporate Conference',
    client: 'Enterprise Summit',
    date: '2023',
    city: 'Hyderabad',
    services: ['Audio Systems', 'Video & LED Walls'],
    equipment: ['Yamaha RIVAGE PM', 'Shure Axient Digital', 'PTZ Camera System', 'Dante Network'],
    audience: '800',
    duration: '3 days',
    heroImage: '/assets/images/gallery/foh-control-position.jpg',
    images: [
      '/assets/images/gallery/foh-control-position.jpg',
      '/assets/images/gallery/corporate-keynote-screen.jpg',
    ],
    challenge: 'Run three parallel breakout rooms plus a main plenary with reliable wireless mics and clean show-calling across a packed agenda.',
    solution: 'Networked Dante audio across rooms, coordinated Axient Digital RF, and a calm central show-call position feeding every space.',
    results: ['Zero RF dropouts across 40+ wireless channels', 'On-time transitions for every session', 'One integrated crew across all rooms'],
    testimonial: { quote: 'Setup was on time, microphones were flawless, and the show calling felt calm and professional.', name: 'Rahul Kapoor', role: 'Conference Lead' },
  },
  {
    slug: 'destination-wedding',
    title: 'Destination Wedding Production',
    client: 'Private Client',
    date: '2023',
    city: 'Goa',
    services: ['Stage Lighting', 'Audio Systems'],
    equipment: ['Astera AX1', 'Clay Paky Sharpy', 'D&B Point Source', 'Wireless DMX'],
    audience: '600',
    duration: '2 days',
    heroImage: '/assets/images/gallery/wedding-stage-wash.jpg',
    images: [
      '/assets/images/gallery/wedding-stage-wash.jpg',
      '/assets/images/gallery/festival-night-show.jpg',
    ],
    challenge: 'Deliver elegant, wireless-controlled ambience across multiple outdoor venues without visible cabling or intrusive gear.',
    solution: 'Battery-powered Astera fixtures on wireless DMX with discreet point-source audio, tuned for each ceremony and reception space.',
    results: ['Cable-free, camera-ready ambience', 'Seamless moves between ceremony and reception', 'Refined look that never felt overdone'],
    testimonial: { quote: 'The ambience, audio, and stage lights were elegant without ever feeling overdone.', name: 'Nisha Kumar', role: 'Wedding Planner' },
  },
];

