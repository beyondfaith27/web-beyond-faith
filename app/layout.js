import { Geist, Geist_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toast";
import Retractable from "@/components/Retractable";
import { ContactFormProvider } from "@/lib/ContactFormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    : "https://beyondfaith.co"),
  title: {
    default: "BeyondFaith | Your Journey to Inner Strength",
    template: "%s | BeyondFaith",
  },
  description: "BeyondFaith offers professional mental health counseling and therapy. Compassionate, evidence-based support for depression, anxiety, trauma, and more.",
  keywords: [
    "mental health counseling", "therapy Kerala", "anxiety relief", "BeyondFaith",
    "Alfred Nelson", "depression therapy", "PTSD support", "ADHD coaching",
    "relationship counseling", "trauma recovery", "workplace mental health"
  ],
  authors: [{ name: "BeyondFaith Team" }, { name: "Dev - Alfred Nelson" }],
  creator: "BeyondFaith",
  robots: {
    index: process.env.IS_DEV === 'true' ? false : true,
    follow: process.env.IS_DEV === 'true' ? false : true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BeyondFaith",
    title: "BeyondFaith | Mental Health Counseling & Support",
    description: "Rediscover your potential with therapists who guide you toward a more peaceful you—grounded in faith.",
    images: [
      {
        url: "/images/beyondFaith-logo-black.png",
        width: 1200,
        height: 630,
        alt: "BeyondFaith Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/beyondFaith-logo-black.png"],
  },
};

export default function RootLayout({ children }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "BeyondFaith",
    "url": process.env.IS_DEV === "true" ? "https://web-beyond-faith.vercel.app" : "https://beyondfaith.co",
    "logo": `${process.env.IS_DEV === "true" ? "https://web-beyond-faith.vercel.app" : "https://beyondfaith.co"}/images/beyondFaith-logo-black.png`,
    "description": "Virtual mental health counseling and therapy services for individuals and organizations worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "GeoShape", "address": "Worldwide" }
    ],
    // "sameAs": [
    //   "https://www.instagram.com/beyondfaith", 
    //   "https://wa.me/your-number"
    // ]
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
        <Toaster />
        <ContactFormProvider>
          <Retractable>
            <Header />
          </Retractable>
          {children}
          <Footer />
        </ContactFormProvider>
      </body>
    </html>
  );
}
