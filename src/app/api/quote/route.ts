import { NextRequest, NextResponse } from 'next/server';
import { validateEnquiry } from '@/lib/enquiry';

export const runtime = 'nodejs';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function POST(request: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't submit your enquiry. Please try again." },
      { status: 400 },
    );
  }

  const { errors, normalized } = validateEnquiry({
    name: String(body.name ?? ''),
    company: String(body.company ?? ''),
    email: String(body.email ?? ''),
    date: String(body.date ?? ''),
    event_type: String(body.event_type ?? ''),
    location: String(body.location ?? ''),
    phone: String(body.phone ?? ''),
    message: String(body.message ?? ''),
    agree: String(body.agree ?? ''),
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: body.subject ?? 'New AV-TEC Enquiry',
        name: normalized.name,
        company: normalized.company,
        email: normalized.email,
        date: normalized.date,
        event_type: normalized.event_type,
        location: normalized.location,
        phone: normalized.phone,
        message: normalized.message,
        agree: 'yes',
      }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      },
      { status: 502 },
    );
  }
}
