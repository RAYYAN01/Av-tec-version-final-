import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://avtecevents.com";
const SITE_NAME = "AV-TEC";
const DESCRIPTION =
  "Professional audio visual and event technology solutions since 1992. Sound systems, stage lighting, LED video walls, conference AV, equipment rental, and on-site technical support for events across India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AV-TEC | Audio Visual & Event Technology Since 1992",
    template: "%s | AV-TEC",
  },
  description: DESCRIPTION,
  keywords: [
    "AV-TEC",
    "audio visual company India",
    "event technology Bengaluru",
    "sound system rental",
    "stage lighting rental",
    "LED video wall rental",
    "event production company",
    "AV equipment rental India",
    "conference AV services",
  ],
  authors: [{ name: "AV-TEC" }],
  creator: "AV-TEC",
  publisher: "AV-TEC",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "AV-TEC | Audio Visual & Event Technology Since 1992",
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV-TEC" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AV-TEC | Audio Visual & Event Technology Since 1992",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "AV-TEC",
  alternateName: "AV-TEC Audio Visual & Event Technology",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logos/logo-web.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  foundingDate: "1992",
  telephone: "+91-98765-43210",
  email: "hello@av-tec.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
