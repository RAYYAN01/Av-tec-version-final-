import HeroVideo from './HeroVideo';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bg?: string;       // background image src (also used as video poster)
  bgVideo?: string;  // background video src (mp4)
}

/**
 * Consistent page header used on every inner page. Provides uniform,
 * collision-free spacing below the fixed site header.
 */
export default function PageHero({ eyebrow, title, subtitle, bg, bgVideo }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        {bgVideo && bg ? (
          <HeroVideo src={bgVideo} poster={bg} />
        ) : bg ? (
          <img src={bg} alt="" aria-hidden="true" />
        ) : null}
      </div>
      <div className="page-hero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
