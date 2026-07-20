import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { SERVICES, SERVICE_LIST } from '@/data/services';
import { TESTIMONIALS } from '@/data/testimonials';

export function generateStaticParams() {
  return SERVICE_LIST.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) return {};
  return { title: `${s.title} | AV-TEC`, description: s.intro.slice(0, 160) };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) notFound();

  const relatedTestimonials = TESTIMONIALS.filter((t) => t.service === slug);
  const others = SERVICE_LIST.filter((x) => x.slug !== slug);

  return (
    <div className="page-wrapper">
      <PageHero eyebrow="Our Services" title={s.title} bg={s.hero} />

      {/* ═══ INTRO ═══ */}
      <section className="section">
        <div className="section-center">
          <p className="section-lead">{s.intro}</p>
        </div>
      </section>

      {/* ═══ SUB-SERVICES ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">Sub-Services</h2>
        </div>
        <div className="subservice-grid">
          {s.subServices.map((sub) => (
            <div className="subservice-card" key={sub.id}>
              <h3>{sub.title}</h3>
              <p>{sub.description}</p>
              <div className="chip-row">
                {sub.useCases.map((u) => <span className="chip" key={u}>{u}</span>)}
              </div>
              <details>
                <summary>Equipment</summary>
                <ul>{sub.equipment.map((e) => <li key={e}>{e}</li>)}</ul>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ EQUIPMENT INVENTORY ═══ */}
      <section className="section">
        <div className="section-center">
          <h2 className="heading-crimson">Equipment Inventory</h2>
        </div>
        <ul className="equipment-list">
          {s.equipment.map((e) => <li key={e}>{e}</li>)}
        </ul>
      </section>

      {/* ═══ REVIEWS ═══ */}
      {relatedTestimonials.length > 0 && (
        <section className="section panel-section">
          <div className="section-center">
            <h2 className="heading-crimson">What Our Clients Say</h2>
          </div>
          <div className="reviews-grid">
            {relatedTestimonials.map((t) => (
              <div className="review-card" key={t.name}>
                <p className="review-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="review-meta">
                  <div className="review-avatar">{t.initials}</div>
                  <div>
                    <p className="review-name">{t.name}</p>
                    <p className="review-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <div className="section-center" style={{ maxWidth: '640px' }}>
          <p className="section-lead">{s.cta}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-pill btn-crimson">Get a Quote</Link>
            <Link href="/rental" className="btn-pill">Rental Inquiry</Link>
          </div>
        </div>
      </section>

      {/* ═══ OTHER SERVICES ═══ */}
      <section className="section">
        <div className="section-center">
          <h2 className="heading-crimson">Other Services</h2>
        </div>
        <div className="other-services">
          {others.map((o) => <Link key={o.slug} href={`/services/${o.slug}`}>{o.title}</Link>)}
        </div>
      </section>
    </div>
  );
}
