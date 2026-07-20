'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICE_LIST } from '@/data/services';
import { GALLERY_IMAGES } from '@/data/gallery';
import { TESTIMONIALS } from '@/data/testimonials';
import HeroVideo from '@/components/HeroVideo';
import CountUp from '@/components/CountUp';

const STATS = [
  { num: '30+', label: 'Years' },
  { num: '2000+', label: 'Events Delivered' },
  { num: '40+', label: 'Cities Served' },
];

const FEATURED = GALLERY_IMAGES.slice(0, 6);
const t = TESTIMONIALS[0];

export default function Home() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero-section">
        <HeroVideo src="/assets/videos/hero/hero-main.mp4" poster="/assets/images/gallery/main-stage-line-array.jpg" />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>Audio Visual &amp; Event Technology Since 1992</h1>
          <p>Professional sound systems, stage lighting, LED video walls, and technical crew for events across India. 30+ years of dependable service.</p>
          <div className="hero-actions">
            <Link href="/services" className="btn-pill btn-crimson">Our Services</Link>
            <Link href="/work" className="btn-pill">See Our Work</Link>
          </div>
        </motion.div>
      </section>

      {/* ═══ BUSINESS DIVISIONS STRIP ═══ */}
      <section className="diversification">
        <div className="section-center">
          <span className="eyebrow">Diversification</span>
          <h2 className="heading-crimson">Our Business Divisions</h2>
          <p>Rental of Sound, Lighting &amp; Audio Visual Equipment &nbsp;|&nbsp; Event Production &amp; Technical Services</p>
        </div>
      </section>

      {/* ═══ ABOUT TEASER ═══ */}
      <section className="section deep-section">
        <div className="section-bg" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/assets/videos/process/process-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="section-center" style={{ maxWidth: '820px' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>What we&apos;re all about</span>
          <h2 className="heading-crimson">Audio Visual &amp; Event Technology</h2>
          <p className="section-lead">
            AV-TEC has delivered professional audio visual and event technology since 1992 — supporting concerts,
            conferences, weddings, exhibitions, and large-scale productions with dependable equipment and steady technical support.
          </p>
          <div className="stat-row">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-num"><CountUp value={s.num} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link href="/about" className="btn-pill">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="section services-section">
        <div className="services-heading">
          <span className="eyebrow">Our Services</span>
          <h2>Practical AV Support for Real Events</h2>
        </div>
        <div className="services-grid">
          {SERVICE_LIST.map((svc) => (
            <Link key={svc.slug} href={`/services/${svc.slug}`} className="service-card">
              <img src={svc.hero} alt={svc.title} loading="lazy" />
              <h3>{svc.title}</h3>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/services" className="btn-pill">All Services</Link>
        </div>
      </section>

      {/* ═══ FEATURED WORK STRIP ═══ */}
      <section className="section gallery-section">
        <div className="gallery-heading">
          <span className="eyebrow">Our Work</span>
          <h2>Recent Productions</h2>
        </div>
        <div className="featured-strip">
          {FEATURED.map((img) => (
            <Link key={img.src} href="/gallery" className="gallery-thumb">
              <img src={img.src} alt={img.title} loading="lazy" />
              <span className="thumb-label">{img.title}<small>{img.service}</small></span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/gallery" className="btn-pill btn-crimson">View Full Gallery</Link>
        </div>
      </section>

      {/* ═══ TESTIMONIAL HIGHLIGHT ═══ */}
      <section className="section testimonials-section">
        <div className="section-bg"><img src="/assets/images/gallery/festival-night-show.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
        <div className="testimonial-content">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
          <div className="testimonial-avatar">{t.initials}</div>
          <p className="testimonial-name">{t.name}</p>
          <p className="testimonial-role">{t.role}</p>
          <div style={{ marginTop: '28px' }}>
            <Link href="/work" className="btn-pill">See Proof of Work</Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="cta-band">
        <div className="section-center" style={{ maxWidth: '640px' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Get In Touch</span>
          <h2>Let&apos;s Plan Your Event</h2>
          <p className="section-lead">Tell us about your event and we&apos;ll shape the technical solution — sound, light, video, and crew.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-pill btn-crimson">Get a Quote</Link>
            <Link href="/rental" className="btn-pill">Rental Inquiry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
