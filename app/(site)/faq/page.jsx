import ContactFormSheet from "@/components/ContactFormSheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaqProvider, FaqTypeSelection, SectionFaqList } from "./FaqUtils";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer trial or complimentary sessions?",
      acceptedAnswer: { "@type": "Answer", text: "We do not offer trial or free sessions, as we believe in fairly valuing our therapists' time, effort, and professional expertise. However, we would be happy to help you with any general questions through a brief WhatsApp chat or message before you book your first session. There is no obligation to continue, and the choice to proceed with therapy is completely yours." },
    },
    {
      "@type": "Question",
      name: "What is the process for cancelling or rescheduling a session?",
      acceptedAnswer: { "@type": "Answer", text: "If you need to cancel or reschedule, please inform both your therapist and the BeyondFaith admin team via WhatsApp or Instagram at least 24 hours before your scheduled session. Sessions cancelled or rescheduled within 24 hours, as well as missed sessions, are non-refundable and cannot be carried forward." },
    },
    {
      "@type": "Question",
      name: "How many therapy sessions will I need?",
      acceptedAnswer: { "@type": "Answer", text: "The number of sessions varies based on individual needs and goals. During your initial session, your therapist may suggest a recommended frequency, but you always have the freedom to decide what feels right for you." },
    },
    {
      "@type": "Question",
      name: "Are appointments available on weekends or evenings?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, our therapists offer evening and weekend appointments. When you reach out, we would be happy to help you find a time slot that fits your schedule." },
    },
    {
      "@type": "Question",
      name: "How quickly can I start therapy after reaching out?",
      acceptedAnswer: { "@type": "Answer", text: "Once you contact us, we will connect with you on the same day to confirm your appointment. Depending on availability, sessions may be scheduled for the same day or the following day." },
    },
    {
      "@type": "Question",
      name: "Do I need to prepare anything before my first session?",
      acceptedAnswer: { "@type": "Answer", text: "There is no preparation required. If you wish, you may note down a few concerns or questions, but you are welcome to attend the session just as you are." },
    },
    {
      "@type": "Question",
      name: "How do I know whether to choose a counselling psychologist or a clinical psychologist?",
      acceptedAnswer: { "@type": "Answer", text: "Counselling psychologists typically work with concerns such as stress, emotional difficulties, relationships, and life transitions. Clinical psychologists are better suited for individuals seeking diagnosis, structured treatment, or support for mental health conditions. If you are unsure, we would be happy to help guide you toward the right professional." },
    },
    {
      "@type": "Question",
      name: "Can therapy resolve concerns in a single session?",
      acceptedAnswer: { "@type": "Answer", text: "Therapy unfolds over time. While the first session helps build understanding and connection, lasting change and healing usually require multiple sessions tailored to your needs." },
    },
    {
      "@type": "Question",
      name: "Can I reach out to my therapist in case of emergencies?",
      acceptedAnswer: { "@type": "Answer", text: "Our therapists are not available for emergency or crisis support outside scheduled sessions. Maintaining clear professional boundaries ensures ethical and effective therapeutic care." },
    },
    {
      "@type": "Question",
      name: "Do you offer therapy through text or chat messages?",
      acceptedAnswer: { "@type": "Answer", text: "We do not provide therapy via text or chat. Therapy is conducted through structured voice or video sessions to ensure meaningful and effective engagement." },
    },
    {
      "@type": "Question",
      name: "Do you work with minors?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we offer therapy for individuals of all ages. For clients under 18 years of age, a consent letter or acknowledgment from a capable adult is required before starting therapy." },
    },
    {
      "@type": "Question",
      name: "Is a mental health diagnosis required to begin therapy?",
      acceptedAnswer: { "@type": "Answer", text: "No diagnosis is required to start therapy. Many people seek therapy for self-understanding, emotional support, or personal growth. If a diagnosis becomes helpful or necessary, your therapist will discuss this with you." },
    },
    {
      "@type": "Question",
      name: "How do I pay for my sessions?",
      acceptedAnswer: { "@type": "Answer", text: "Payments are made in advance through UPI, bank transfer, or other online payment methods shared during booking. Your session is confirmed once payment is received." },
    },
    {
      "@type": "Question",
      name: "Do you accept card payments?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, credit and debit card payments are accepted. Please note that additional processing charges may apply." },
    },
    {
      "@type": "Question",
      name: "Are there any discounted packages available?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we offer discounted packages for clients who book multiple sessions. Feel free to reach out to us, and we would be happy to help you explore the available options." },
    },
    {
      "@type": "Question",
      name: "Can I receive a receipt for my payment?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, receipts are provided upon request for all completed payments." },
    },
  ],
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
