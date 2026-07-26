import ContactFormSheet from "@/components/ContactFormSheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import FAQS from "@/lib/faqs";
import { FaqProvider, FaqTypeSelection, SectionFaqList } from "./FaqUtils";

function extractText(node) {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (node.props && node.props.children !== undefined) {
    return extractText(node.props.children);
  }
  return "";
}

function answerToPlainText(answer) {
  return extractText(answer).replace(/\s+/g, " ").trim();
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap((section) =>
    section.questionare.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerToPlainText(faq.answer),
      },
    }))
  ),
};

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers about therapy sessions, appointments, mental health diagnosis, assessments, payments, and our policies at BeyondFaith.",
  keywords: ["therapy FAQ", "counseling appointments", "mental health assessments cost", "payment policies therapy", "how therapy works"],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "FAQ | BeyondFaith Mental Health Counseling",
    description: "Find answers about therapy sessions, appointments, mental health diagnosis, assessments, payments, and our policies at BeyondFaith.",
    url: '/faq',
  },
  twitter: {
    title: "FAQ | BeyondFaith Mental Health Counseling",
    description: "Find answers about therapy sessions, appointments, mental health diagnosis, assessments, payments, and our policies at BeyondFaith.",
  },
};

const FAQ = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-muted pt-20">
      <div className="max-w-240 md:mx-auto min-h-[calc(100vh-164px)] py-16 text-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-sm text-foreground/60 mt-4">
          These are the most common asked questions about BeyondFaith
        </p>
        <p className="text-sm text-foreground/60 mb-2">
          Can't find what you are looking for?
          <ContactFormSheet>
            <Button variant="link" className="!py-0 underline px-1">
              Chat with our friendly team
            </Button>
          </ContactFormSheet>
        </p>
        <p className="text-sm text-foreground/60 mb-6">
          Want to know more about us first?{" "}
          <Link href="/about" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
            Learn about BeyondFaith →
          </Link>
        </p>
        <FaqProvider>
          <FaqTypeSelection />
          <SectionFaqList />
        </FaqProvider>
      </div>
    </section>
    </>
  );
};

export default FAQ;
