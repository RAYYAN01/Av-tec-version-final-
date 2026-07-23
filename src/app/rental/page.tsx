import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Rental Inquiry',
  description: 'Rent professional sound, lighting, video and LED equipment — with delivery, setup and technical crew for events across India.',
  alternates: { canonical: '/rental' },
  openGraph: { url: '/rental', title: 'Rental Inquiry | AV-TEC', description: 'Rent professional sound, lighting, video and LED equipment — with delivery, setup and technical crew for events across India.' },
};

const EVENT_TYPES = ['Concerts', 'Weddings', 'Corporate', 'Festivals', 'Exhibitions', 'Medical Conferences'];

const INCLUDES = [
  { title: 'Sound Systems', desc: 'Line arrays, monitors, consoles and wireless mics for any venue size.' },
  { title: 'Lighting & Video', desc: 'Moving lights, LED walls and projection with control and content support.' },
  { title: 'Crew & Delivery', desc: 'Transport, rigging, setup, operation and strike — handled by our team.' },
];

export default function RentalPage() {
  return (
    <div className="page-wrapper">
<PageHero
        eyebrow="Rental"
        title="Equipment Rental & Event Production"
        subtitle="Professional sound, lighting, video and LED — delivered, set up and operated by experienced crew."
        bg="/assets/images/gallery/main-stage-line-array.jpg"
        bgVideo="/assets/videos/hero/hero-main.mp4"
      />

      {/* ═══ EVENT TYPES ═══ */}
      <section className="section">
        <div className="section-center">
          <h2 className="heading-crimson">Built for Every Event</h2>
          <div className="trusted-strip" style={{ marginTop: '24px' }}>
            {EVENT_TYPES.map((e) => <span key={e}>{e}</span>)}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">What We Provide</h2>
        </div>
        <div className="reviews-grid">
          {INCLUDES.map((i) => (
            <div className="info-card" key={i.title}>
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INQUIRY FORM ═══ */}
      <section className="section deep-section">
        <div className="contact-inner">
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Rental Inquiry</span>
          <h2>Request a Quote</h2>
          <p className="contact-subtitle">Share your event details and equipment needs — we&apos;ll get back with a tailored quote.</p>
          <ContactForm subject="New AV-TEC Rental Inquiry" />
        </div>
      </section>
    </div>
  );
}
