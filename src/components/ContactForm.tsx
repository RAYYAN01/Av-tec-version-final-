'use client';

import { useRef, useState } from 'react';
import { EVENT_TYPES, todayISO, validateEnquiry } from '@/lib/enquiry';

interface ContactFormProps {
  subject?: string;
}

/**
 * Progressive enquiry form used on /contact and /rental.
 * Posts to the internal /api/quote route (which re-validates and forwards to
 * the email provider). Inline validation, loading / success / error states.
 */
const ENDPOINT = '/api/quote';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ subject = 'New AV-TEC Enquiry' }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const raw = {
      name: String(data.get('name') ?? ''),
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      date: String(data.get('date') ?? ''),
      event_type: String(data.get('event_type') ?? ''),
      location: String(data.get('location') ?? ''),
      phone: String(data.get('phone') ?? ''),
      message: String(data.get('message') ?? ''),
      agree: String(data.get('agree') ?? ''),
    };

    const { errors: found } = validateEnquiry(raw);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setErrorMsg('');
      focusFirstInvalid(found, form);
      return;
    }

    setStatus('submitting');
    setErrors({});
    setErrorMsg('');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...raw, subject }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        return;
      }

      const json = await res.json().catch(() => null);
      if (json?.errors && Object.keys(json.errors).length > 0) {
        setErrors(json.errors as Record<string, string>);
        focusFirstInvalid(json.errors as Record<string, string>, form);
        setStatus('error');
      } else {
        setErrorMsg(
          json?.message ||
            "We couldn't submit your enquiry. Your details have been kept. Please try again.",
        );
        setStatus('error');
      }
    } catch {
      setErrorMsg(
        "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      );
      setStatus('error');
    }
  };

  const focusFirstInvalid = (errs: Record<string, string>, form: HTMLFormElement) => {
    const firstKey = Object.keys(errs)[0];
    if (!firstKey) return;
    const el = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
    el?.focus();
  };

  const submitting = status === 'submitting';

  if (status === 'success') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="form-success-icon" aria-hidden="true">✓</div>
        <h3>Thank you — your rental enquiry has been received.</h3>
        <p>Our team will review your event requirements and contact you shortly.</p>
        <button type="button" className="btn-pill" onClick={() => setStatus('idle')}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const minDate = todayISO();

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate ref={formRef}>
      <input type="hidden" name="_subject" value={subject} />
      <div className="form-row">
        <label htmlFor="cf-name">
          Name <span className="req" aria-hidden="true">*</span>
          <input
            id="cf-name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
          />
          {errors.name && (
            <span className="field-error" id="err-name" role="alert">
              {errors.name}
            </span>
          )}
        </label>
        <label htmlFor="cf-company">
          Company / Organization
          <input
            id="cf-company"
            name="company"
            placeholder="Company name"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'err-company' : undefined}
          />
          {errors.company && (
            <span className="field-error" id="err-company" role="alert">
              {errors.company}
            </span>
          )}
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="cf-email">
          Email <span className="req" aria-hidden="true">*</span>
          <input
            id="cf-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && (
            <span className="field-error" id="err-email" role="alert">
              {errors.email}
            </span>
          )}
        </label>
        <label htmlFor="cf-date">
          Event Date <span className="req" aria-hidden="true">*</span>
          <input
            id="cf-date"
            name="date"
            type="date"
            min={minDate}
            aria-required="true"
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? 'err-date' : undefined}
          />
          {errors.date && (
            <span className="field-error" id="err-date" role="alert">
              {errors.date}
            </span>
          )}
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="cf-event-type">
          Event Type <span className="req" aria-hidden="true">*</span>
          <select
            id="cf-event-type"
            name="event_type"
            defaultValue=""
            aria-required="true"
            aria-invalid={!!errors.event_type}
            aria-describedby={errors.event_type ? 'err-event-type' : undefined}
          >
            <option value="" disabled>
              Select an event type…
            </option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.event_type && (
            <span className="field-error" id="err-event-type" role="alert">
              {errors.event_type}
            </span>
          )}
        </label>
        <label htmlFor="cf-location">
          Event Location <span className="req" aria-hidden="true">*</span>
          <input
            id="cf-location"
            name="location"
            placeholder="City or venue"
            autoComplete="off"
            aria-required="true"
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? 'err-location' : undefined}
          />
          {errors.location && (
            <span className="field-error" id="err-location" role="alert">
              {errors.location}
            </span>
          )}
        </label>
      </div>
      <div className="form-row full">
        <label htmlFor="cf-phone">
          Phone <span className="req" aria-hidden="true">*</span>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            placeholder="+91"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
          />
          {errors.phone && (
            <span className="field-error" id="err-phone" role="alert">
              {errors.phone}
            </span>
          )}
        </label>
      </div>
      <div className="form-row full">
        <label htmlFor="cf-message">
          Message <span className="req" aria-hidden="true">*</span>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            placeholder="Tell us about your event, audience size, equipment needs, and schedule."
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'err-message' : undefined}
          />
          {errors.message && (
            <span className="field-error" id="err-message" role="alert">
              {errors.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-row full">
        <label className="form-checkbox" htmlFor="cf-agree">
          <input
            id="cf-agree"
            type="checkbox"
            name="agree"
            aria-required="true"
            aria-invalid={!!errors.agree}
            aria-describedby={errors.agree ? 'err-agree' : undefined}
          />
          <span>
            I agree to the <a href="/terms">Terms &amp; Conditions</a>
          </span>
        </label>
        {errors.agree && (
          <span className="field-error" id="err-agree" role="alert">
            {errors.agree}
          </span>
        )}
      </div>
      {status === 'error' && errorMsg && (
        <p className="form-error-banner" role="alert">
          {errorMsg}
        </p>
      )}
      <div className="form-submit-row">
        <button className="btn-blue" type="submit" disabled={submitting} aria-busy={submitting}>
          {submitting ? 'Submitting…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
