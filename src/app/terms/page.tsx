import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for AV-TEC equipment rental, event production, and enquiry services.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="page-wrapper">
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section">
        <div className="section-center" style={{ textAlign: 'left', maxWidth: 760 }}>
          <p className="section-lead" style={{ textAlign: 'left' }}>
            These terms govern enquiries, quotations, and rental or production
            services provided by AV-TEC (&quot;we&quot;, &quot;us&quot;). By submitting an
            enquiry through this website, you agree to the terms below.
          </p>
          <h2 className="heading-crimson">Enquiries &amp; Quotations</h2>
          <p>
            Submitting the enquiry form does not constitute a confirmed
            booking. All quotations are subject to equipment availability and
            written confirmation from AV-TEC.
          </p>
          <h2 className="heading-crimson">Equipment &amp; Services</h2>
          <p>
            Rented equipment remains the property of AV-TEC at all times.
            Clients are responsible for equipment provided for the duration
            of an event, excluding damage caused by AV-TEC crew or equipment
            failure.
          </p>
          <h2 className="heading-crimson">Cancellations</h2>
          <p>
            Cancellation terms are confirmed on a per-booking basis at the
            time of quotation, depending on event date, equipment reserved,
            and crew scheduling.
          </p>
          <h2 className="heading-crimson">Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
