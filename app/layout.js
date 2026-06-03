import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

const dm_serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--dm-font",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

export const metadata = {
  metadataBase: new URL(process.env.IS_DEV === 'true'
    ? "https://web-beyond-faith.vercel.app"
    : "https://beyondfaith.in"),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "BeyondFaith | Your Journey to Inner Strength",
    template: "%s | BeyondFaith",
  },
  description: "BeyondFaith offers professional mental health counseling and therapy. Compassionate, evidence-based support for depression, anxiety, trauma, and more.",
  keywords: [
    "mental health counseling", "online therapy India", "anxiety relief", "BeyondFaith",
    "virtual counseling", "depression therapy", "PTSD support", "ADHD coaching",
    "relationship counseling", "trauma recovery", "workplace mental health"
  ],
  authors: [{ name: "BeyondFaith Team" }],
  creator: "BeyondFaith",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: process.env.IS_DEV === 'true' ? false : true,
    follow: process.env.IS_DEV === 'true' ? false : true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.IS_DEV === 'true'
      ? "https://web-beyond-faith.vercel.app"
      : "https://beyondfaith.in",
    siteName: "BeyondFaith",
    title: "BeyondFaith | Mental Health Counseling & Support",
    description: "Rediscover your potential with therapists who guide you toward a more peaceful you—grounded in faith.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondFaith | Mental Health Counseling & Support",
    description: "Rediscover your potential with therapists who guide you toward a more peaceful you—grounded in faith.",
  },
};

export default function RootLayout({ children }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "BeyondFaith",
    "url": process.env.IS_DEV === "true" ? "https://web-beyond-faith.vercel.app" : "https://beyondfaith.in",
    "logo": `${process.env.IS_DEV === "true" ? "https://web-beyond-faith.vercel.app" : "https://beyondfaith.in"}/images/beyondFaith-logo-black.png`,
    "description": "Virtual mental health counseling and therapy services for individuals and organizations worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Online Therapy",
      "serviceUrl": process.env.IS_DEV === "true" ? "https://web-beyond-faith.vercel.app" : "https://beyondfaith.in"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    // "sameAs": []
  };

  const founderJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "FOUNDER_NAME_HERE",
    "jobTitle": "Founder & Mental Health Counselor",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "BeyondFaith"
    },
    "url": process.env.IS_DEV === "true" ? "https://web-beyond-faith.vercel.app" : "https://beyondfaith.in",
    // "sameAs": []
  };

  return (
    <html lang="en">
      <body
        className={`${dm_serif.variable} ${inter.variable} font-inter antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
        />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
