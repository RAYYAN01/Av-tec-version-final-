import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SERVICES } from '@/data/services';

const DIVISIONS = [
  {
    title: 'Rental & Event Production',
    sub: 'Sound, lighting, video and rigging for live events of every scale.',
    slugs: ['audio', 'lighting', 'video', 'trussing'],
  },
  {
    title: 'Sales, Installs & Consultancy',
    sub: 'Permanent installations, system integration, and expert technical advice.',
    slugs: ['installations', 'consultancy'],
  },
];

export const metadata = {
  title: 'Services | AV-TEC',
  description: 'Audio, lighting, video & LED, trussing, installations, and technical consultancy for events across India.',
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Our Services"
        title="Practical AV Support for Real Events"
        subtitle="From sound reinforcement to stage lighting, video walls to rigging — end-to-end technical solutions backed by 30+ years of experience."
        bg="/assets/images/gallery/concert-lighting-rig.jpg"
      />
      <section className="section">
        {DIVISIONS.map((div) => (
          <div className="division" key={div.title}>
            <h2 className="division-title">{div.title}</h2>
            <p className="division-sub">{div.sub}</p>
            <div className="services-grid">
              {div.slugs.map((slug) => {
                const s = SERVICES[slug];
                return (
                  <Link key={slug} href={`/services/${slug}`} className="service-card">
                    <img src={s.hero} alt={s.title} loading="lazy" />
                    <h3>{s.title}</h3>
                    <div className="chip-row">
                      {s.subServices.map((sub) => (
                        <span className="chip" key={sub.id}>{sub.title}</span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
