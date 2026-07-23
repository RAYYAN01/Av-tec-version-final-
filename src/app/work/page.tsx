import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CountUp from '@/components/CountUp';
import { CASE_STUDIES } from '@/data/case-studies';
import { TESTIMONIALS } from '@/data/testimonials';

export const metadata = {
  title: 'Our Work',
  description: 'Proof of work — featured productions, marquee equipment, and client reviews from 30+ years of AV-TEC events.',
  alternates: { canonical: '/work' },
  openGraph: { url: '/work', title: 'Our Work | AV-TEC', description: 'Proof of work — featured productions, marquee equipment, and client reviews from 30+ years of AV-TEC events.' },
};

const STATS = [
  { num: '30+', label: 'Years' },
  { num: '2000+', label: 'Events' },
  { num: '40+', label: 'Cities' },
  { num: '50k', label: 'Peak Audience' },
];

const MARQUEE = ['D&B audiotechnik', 'DiGiCo', 'Robe', 'grandMA3', 'Prolyte', 'Blackmagic', 'Shure', 'Disguise'];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" /></svg>
      ))}
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Proof of Work"
        title="Our Work"
        subtitle="Three decades of shows delivered — and the clients who trust us."
        bg="/assets/images/gallery/festival-night-show.jpg"
      />

      {/* ═══ STAT BAND + MARQUEE GEAR ═══ */}
      <section className="section">
        <div className="stat-band">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num"><CountUp value={s.num} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="trusted-strip" style={{ marginTop: '40px' }}>
          {MARQUEE.map((m) => <span key={m}>{m}</span>)}
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">Featured Productions</h2>
        </div>
        <div className="case-grid">
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="case-card">
              <img src={c.heroImage} alt={c.title} loading="lazy" />
              <span className="case-tag">{c.city} &middot; {c.date}</span>
              <h3>{c.title}</h3>
              <p>{c.services.join(' · ')} — {c.audience} audience</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ CLIENT REVIEWS ═══ */}
      <section className="section">
        <div className="section-center">
          <h2 className="heading-crimson">Client Reviews</h2>
        </div>
        <div className="reviews-grid">
          {TESTIMONIALS.map((t) => (
            <div className="review-card" key={t.name}>
              <Stars n={t.rating ?? 5} />
              <p className="review-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="review-meta">
                <div className="review-avatar">{t.initials}</div>
                <div>
                  <p className="review-name">{t.name}</p>
                  <p className="review-role">{t.role}</p>
                  {t.eventType && <p className="review-event">{t.eventType}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <div className="section-center" style={{ maxWidth: '640px' }}>
          <h2>Ready to Deliver Your Show?</h2>
          <p className="section-lead">From concept to strike, we bring the equipment, the crew and the calm.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-pill btn-crimson">Get a Quote</Link>
            <Link href="/services" className="btn-pill">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
