export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  service?: string;
  rating?: number;      // 1–5, used by the reviews grid on /work
  eventType?: string;   // e.g. "Corporate Launch", used by the reviews grid
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'Sound was clean, the LED wall looked exceptional, and the team solved every detail before we had to ask.', name: 'Priya Menon', role: 'Event Director', initials: 'PM', service: 'audio', rating: 5, eventType: 'Corporate Conference' },
  { quote: 'Setup was on time, microphones were flawless, and the show calling felt calm and professional.', name: 'Rahul Kapoor', role: 'Conference Lead', initials: 'RK', service: 'audio', rating: 5, eventType: 'Summit' },
  { quote: 'The lighting and video wall made our product launch feel premium from the first guest arrival.', name: 'Sana Mehta', role: 'Brand Manager', initials: 'SM', service: 'video', rating: 5, eventType: 'Product Launch' },
  { quote: 'The ambience, audio, and stage lights were elegant without ever feeling overdone.', name: 'Nisha Kumar', role: 'Wedding Planner', initials: 'NK', service: 'lighting', rating: 5, eventType: 'Wedding' },
  { quote: 'The truss system was up in hours and rock solid. Their rigging team is world-class.', name: 'Arun Sharma', role: 'Festival Organizer', initials: 'AS', service: 'trussing', rating: 5, eventType: 'Music Festival' },
  { quote: 'From site survey to commissioning, the installation was seamless. Our boardroom has never sounded better.', name: 'Meera Iyer', role: 'Facilities Head', initials: 'MI', service: 'installations', rating: 5, eventType: 'AV Installation' },
  { quote: 'Their technical consultancy saved us lakhs by recommending the right gear for our venue. No overselling.', name: 'Vikram Patel', role: 'Venue Owner', initials: 'VP', service: 'consultancy', rating: 5, eventType: 'Venue Design' },
  { quote: 'The live stream quality was broadcast-grade. Our remote audience felt like they were in the room.', name: 'Anjali Desai', role: 'Marketing Director', initials: 'AD', service: 'video', rating: 5, eventType: 'Hybrid Event' },
];
