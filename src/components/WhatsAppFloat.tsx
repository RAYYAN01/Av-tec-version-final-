/**
 * Floating WhatsApp button, present on every page (rendered from the root layout).
 * The number is read from NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, incl. country
 * code, e.g. 919876543210). Falls back to a placeholder until the client sets it.
 */
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
const PREFILL = 'Hi AV-TEC, I would like a quote';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;
  return (
    <a className="whatsapp-float" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with AV-TEC on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z" /></svg>
    </a>
  );
}
