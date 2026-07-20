import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'About | AV-TEC',
  description: 'AV-TEC — Audio Visual & Event Technology since 1992. Based in Bengaluru, serving events across the country.',
};

const STATS = [
  { num: '30+', label: 'Years' },
  { num: '2000+', label: 'Events Delivered' },
  { num: '40+', label: 'Cities Served' },
  { num: '24/7', label: 'On-Site Support' },
];

const DIVISIONS = [
  { title: 'Rental & Event Production', desc: 'Sound, lighting, video, LED walls and rigging — delivered and operated by experienced crew for live events of every scale.' },
  { title: 'Sales, Installs & Consultancy', desc: 'Equipment sales and distribution, permanent AV installations, and vendor-neutral technical consultancy for venues and businesses.' },
];

const DIFFERENTIATORS = [
  { title: 'Marquee Inventory', desc: 'D&B audiotechnik, DiGiCo, Robe, grandMA3 and more — the same gear used at the world’s biggest shows.' },
  { title: 'Steady Technical Crew', desc: 'Certified engineers and riggers who plan ahead and stay calm under show pressure.' },
  { title: 'Straightforward Advice', desc: 'We recommend the right solution for your event and budget — no overselling.' },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="About Us"
        title="Audio Visual & Event Technology Since 1992"
        subtitle="Three decades of dependable sound, light, video and technical support — from a single boardroom to a 50,000-strong festival."
        bg="/assets/images/gallery/foh-control-position.jpg"
        bgVideo="/assets/videos/gallery/why-avtec.mp4"
      />

      {/* ═══ STORY ═══ */}
      <section className="section">
        <div className="section-center" style={{ maxWidth: '860px' }}>
          <h2 className="heading-crimson">Our Story</h2>
          <p className="section-lead">
            AV-TEC began in 1992 with a simple commitment: reliable event technology, delivered by people who
            care about the show. Over 30+ years we have grown into two divisions serving events across India —
            equipment rental and full event production, alongside sales, installations and technical consultancy.
          </p>
        </div>
      </section>

      {/* ═══ DIVISIONS ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">Two Business Divisions</h2>
        </div>
        <div className="reviews-grid">
          {DIVISIONS.map((d) => (
            <div className="info-card" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="section">
        <div className="stat-band">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num"><CountUp value={s.num} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">What Makes Us Different</h2>
        </div>
        <div className="reviews-grid">
          {DIFFERENTIATORS.map((d) => (
            <div className="info-card" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section className="section deep-section">
        <div className="section-center" style={{ maxWidth: '720px' }}>
          <h2 className="heading-crimson">Let&apos;s Work Together</h2>
          <p className="section-lead">
            World-class equipment brought together with local know-how and a personal, dependable approach.
          </p>
          <div className="hero-actions" style={{ marginTop: '32px' }}>
            <Link href="/services" className="btn-pill btn-crimson">Our Services</Link>
            <Link href="/contact" className="btn-pill">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
