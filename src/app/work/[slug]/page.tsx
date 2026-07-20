import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { CASE_STUDIES } from '@/data/case-studies';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.title} | AV-TEC`, description: c.challenge.slice(0, 160) };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  const galleryImages = c.images.map((src) => ({
    src,
    title: c.title,
    service: c.services[0] ?? '',
    equipment: '',
  }));

  return (
    <div className="page-wrapper">
      <PageHero eyebrow={`${c.city} · ${c.date}`} title={c.title} subtitle={c.services.join(' · ')} bg={c.heroImage} />

      {/* ═══ META ═══ */}
      <section className="section">
        <div className="section-center">
          <Link href="/work" className="back-link">&larr; Back to Work</Link>
          <div className="case-meta">
            <div><div className="k">Client</div><div className="v">{c.client}</div></div>
            <div><div className="k">Audience</div><div className="v">{c.audience}</div></div>
            <div><div className="k">Duration</div><div className="v">{c.duration}</div></div>
            <div><div className="k">City</div><div className="v">{c.city}</div></div>
          </div>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="section panel-section">
        <div className="section-center case-story">
          <h2 className="heading-crimson">The Challenge</h2>
          <p className="section-lead">{c.challenge}</p>
          <h2 className="heading-crimson">Our Solution</h2>
          <p className="section-lead">{c.solution}</p>
          <h2 className="heading-crimson">Results</h2>
          <ul className="equipment-list one-col">
            {c.results.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      {galleryImages.length > 0 && (
        <section className="section">
          <div className="section-center">
            <h2 className="heading-crimson">Gallery</h2>
          </div>
          <Gallery variant="image" images={galleryImages} />
        </section>
      )}

      {/* ═══ TESTIMONIAL ═══ */}
      {c.testimonial && (
        <section className="section deep-section">
          <div className="testimonial-content">
            <span className="eyebrow">Client Feedback</span>
            <p className="testimonial-quote">&ldquo;{c.testimonial.quote}&rdquo;</p>
            <p className="testimonial-name">{c.testimonial.name}</p>
            <p className="testimonial-role">{c.testimonial.role}</p>
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <div className="section-center" style={{ maxWidth: '600px' }}>
          <h2>Plan a Production Like This</h2>
          <div className="hero-actions">
            <Link href="/contact" className="btn-pill btn-crimson">Get a Quote</Link>
            <Link href="/work" className="btn-pill">More Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
