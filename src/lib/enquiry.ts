// Shared validation + normalization for the Quote / Rental Inquiry form.
// Used by both the client form (ContactForm) and the server route handler
// (/api/quote) so the same rules apply on both sides.

export const EVENT_TYPES = [
  'Concert',
  'Wedding',
  'Corporate',
  'Festival',
  'Exhibition',
  'Conference',
  'Other',
];

export interface EnquiryInput {
  name?: string;
  company?: string;
  email?: string;
  date?: string;
  event_type?: string;
  location?: string;
  phone?: string;
  message?: string;
  agree?: boolean | string;
}

export interface EnquiryNormalized {
  name: string;
  company: string;
  email: string;
  date: string;
  event_type: string;
  location: string;
  phone: string;
  message: string;
  agree: boolean;
}

export interface EnquiryResult {
  errors: Record<string, string>;
  normalized: EnquiryNormalized;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// At least one Unicode letter so whitespace-only / symbol-only names are rejected.
const NAME_LETTER_RE = /\p{L}/u;

export function normalizeIndianPhone(raw: string): string | null {
  let s = raw.replace(/[\s\-().]/g, '');
  if (/[a-zA-Z]/.test(s)) return null;
  if (s.startsWith('+91')) s = s.slice(3);
  else if (s.startsWith('91') && s.length === 12) s = s.slice(2);
  else if (s.startsWith('0')) s = s.slice(1);
  if (!/^[6-9]\d{9}$/.test(s)) return null;
  return '+91' + s;
}

function isFutureDate(value: string): boolean {
  const d = new Date(value + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d >= today;
}

export function todayISO(): string {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  const y = t.getFullYear();
  const m = String(t.getMonth() + 1).padStart(2, '0');
  const d = String(t.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function validateEnquiry(input: EnquiryInput): EnquiryResult {
  const errors: Record<string, string> = {};

  const name = (input.name ?? '').trim();
  if (!name) errors.name = 'Please enter your name.';
  else if (name.length < 2 || name.length > 100) errors.name = 'Please enter your name.';
  else if (!NAME_LETTER_RE.test(name)) errors.name = 'Please enter your name.';

  const company = (input.company ?? '').trim();
  if (company.length > 150) errors.company = 'Company name is too long.';

  const email = (input.email ?? '').trim().toLowerCase();
  if (!email) errors.email = 'Enter a valid email address.';
  else if (email.length > 254 || !EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.';

  const date = (input.date ?? '').trim();
  if (!date) errors.date = 'Select a valid future event date.';
  else if (!isFutureDate(date)) errors.date = 'Select a valid future event date.';

  const event_type = (input.event_type ?? '').trim();
  if (!EVENT_TYPES.includes(event_type)) errors.event_type = 'Please select an event type.';

  const location = (input.location ?? '').trim();
  if (!location) errors.location = 'Please enter the event location.';
  else if (location.length < 2 || location.length > 200) errors.location = 'Please enter the event location.';

  const phoneRaw = (input.phone ?? '').trim();
  const phone = normalizeIndianPhone(phoneRaw);
  if (!phone) errors.phone = 'Enter a valid phone number.';

  const message = (input.message ?? '').trim();
  if (!message) errors.message = 'Please provide at least 10 characters about your event.';
  else if (message.length < 10 || message.length > 5000) errors.message = 'Please provide at least 10 characters about your event.';

  const agree =
    input.agree === true ||
    input.agree === 'on' ||
    input.agree === 'true' ||
    input.agree === '1' ||
    input.agree === 'yes';
  if (!agree) errors.agree = 'Please agree to the Terms & Conditions.';

  const normalized: EnquiryNormalized = {
    name,
    company,
    email,
    date,
    event_type,
    location,
    phone: phone ?? phoneRaw,
    message,
    agree,
  };

  return { errors, normalized };
}
