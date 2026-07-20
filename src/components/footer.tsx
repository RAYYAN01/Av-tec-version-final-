import Link from 'next/link';

// Social profile URLs — replace '#' with the client's real profile links.
const SOCIAL: Record<string, { label: string; url: string; path: string }> = {
  linkedin: {
    label: 'AV-TEC on LinkedIn',
    url: '#',
    path: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
  },
  instagram: {
    label: 'AV-TEC on Instagram',
    url: '#',
    path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z',
  },
};

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Work', href: '/work' },
  { label: 'Rental', href: '/rental' },
  { label: 'Contact', href: '/contact' },
];

const SocialIcon = ({ name }: { name: keyof typeof SOCIAL }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL[name].path} /></svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img className="footer-logo" src="/assets/images/logos/logo-web.png" alt="AV-TEC" width="200" height="65" />
        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <div className="footer-social-row">
          <span className="footer-social-label">Follow Us</span>
          <div className="footer-social">
            {(['linkedin', 'instagram'] as const).map((s) => (
              <a key={s} href={SOCIAL[s].url} aria-label={SOCIAL[s].label} target="_blank" rel="noopener noreferrer"><SocialIcon name={s} /></a>
            ))}
          </div>
        </div>
        <div className="footer-address">
          Bengaluru, Karnataka, India<br />
          <a href="tel:+919876543210">+91 98765 43210</a> &nbsp;|&nbsp; <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} AV-TEC. All rights reserved.</p>
      </div>
    </footer>
  );
}
