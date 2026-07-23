import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with AV-TEC for event technology, equipment rental, installations and technical support across India.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact', title: 'Contact | AV-TEC', description: 'Get in touch with AV-TEC for event technology, equipment rental, installations and technical support across India.' },
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Plan Your Event"
        subtitle="Tell us about your event and we'll shape the technical solution — sound, light, video, and crew."
        bg="/assets/images/gallery/festival-night-show.jpg"
      />
      <section className="section">
        <div className="contact-layout">
          <div className="contact-inner" style={{ margin: 0 }}>
            <ContactForm subject="New AV-TEC Enquiry" />
          </div>
          <div className="contact-info">
            <div className="contact-info-card">
              <h4>Phone</h4>
              <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            </div>
            <div className="contact-info-card">
              <h4>Email</h4>
              <p><a href="mailto:hello@av-tec.in">hello@av-tec.in</a></p>
            </div>
            <div className="contact-info-card">
              <h4>Address</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>
            <div className="contact-info-card">
              <h4>Availability</h4>
              <p>On-site event support across India, 24/7 during live shows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
