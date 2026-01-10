import {
  CreditCard,
  Wallet,
  AlertCircle,
  Package,
  Receipt,
  HeartHandshake,
  ClipboardList,
  NotebookPen,
  Compass,
  Hourglass,
  ShieldAlert,
  Video,
  Users,
  Info,
  CalendarX,
  Repeat,
  Clock,
  Zap,
} from "lucide-react";

const sessionsAndAppointments = [
  {
    icon: <Info size={20} />,
    question: "Do you offer trial or complimentary sessions?",
    answer: (
      <p>
        We do not offer trial or free sessions, as we believe in fairly valuing
        our therapists’ time, effort, and professional expertise. However, we
        would be happy to help you with any general questions through a brief
        WhatsApp chat or message before you book your first session. There is no
        obligation to continue, and the choice to proceed with therapy is
        completely yours.
      </p>
    ),
  },
  {
    icon: <CalendarX size={20} />,
    question: "What is the process for cancelling or rescheduling a session?",
    answer: (
      <>
        <p>
          If you need to cancel or reschedule, please inform both your therapist
          and the BeyondFaith admin team via WhatsApp or Instagram at least 24
          hours before your scheduled session.
        </p>
        <p>
          Sessions cancelled or rescheduled within 24 hours, as well as missed
          sessions, are non refundable and cannot be carried forward. This
          policy helps respect the therapist’s time and ensures fairness to
          other clients awaiting appointments.
        </p>
      </>
    ),
  },
  {
    icon: <Repeat size={20} />,
    question: "How many therapy sessions will I need?",
    answer: (
      <p>
        The number of sessions varies based on individual needs and goals.
        During your initial session, your therapist may suggest a recommended
        frequency, but you always have the freedom to decide what feels right
        for you.
      </p>
    ),
  },
  {
    icon: <Clock size={20} />,
    question: "Are appointments available on weekends or evenings?",
    answer: (
      <p>
        Yes, our therapists offer evening and weekend appointments. When you
        reach out, we would be happy to help you find a time slot that fits your
        schedule.
      </p>
    ),
  },
  {
    icon: <Zap size={20} />,
    question: "How quickly can I start therapy after reaching out?",
    answer: (
      <p>
        Once you contact us, we will connect with you on the same day to confirm
        your appointment. Depending on availability, sessions may be scheduled
        for the same day or the following day. We aim to ensure timely support
        while accommodating your preferences.
      </p>
    ),
  },
];

const aboutTherapy = [
  {
    icon: <NotebookPen size={20} />,
    question: "Do I need to prepare anything before my first session?",
    answer: (
      <p>
        There is no preparation required. If you wish, you may note down a few
        concerns or questions, but you are welcome to attend the session just as
        you are. We would love to support you at your own pace.
      </p>
    ),
  },
  {
    icon: <Compass size={20} />,
    question:
      "How do I know whether to choose a counselling psychologist or a clinical psychologist?",
    answer: (
      <>
        <p>
          Counselling psychologists typically work with concerns such as stress,
          emotional difficulties, relationships, and life transitions.
        </p>
        <p>
          Clinical psychologists are better suited for individuals seeking
          diagnosis, structured treatment, or support for mental health
          conditions. If you are unsure, we would be happy to help guide you
          toward the right professional.
        </p>
      </>
    ),
  },
  {
    icon: <Hourglass size={20} />,
    question: "Can therapy resolve concerns in a single session?",
    answer: (
      <p>
        Therapy unfolds over time. While the first session helps build
        understanding and connection, lasting change and healing usually require
        multiple sessions tailored to your needs.
      </p>
    ),
  },
  {
    icon: <ShieldAlert size={20} />,
    question: "Can I reach out to my therapist incase of emergencies?",
    answer: (
      <p>
        Our therapists are not available for emergency or crisis support outside
        scheduled sessions. Maintaining clear professional boundaries ensures
        ethical and effective therapeutic care.
      </p>
    ),
  },
  {
    icon: <Video size={20} />,
    question: "Do you offer therapy through text or chat messages?",
    answer: (
      <p>
        We do not provide therapy via text or chat. Therapy is conducted through
        structured voice or video sessions to ensure meaningful and effective
        engagement.
      </p>
    ),
  },
  {
    icon: <Users size={20} />,
    question: "Do you work with minors?",
    answer: (
      <p>
        Yes, we offer therapy for individuals of all ages. For clients under 18
        years of age, a consent letter or acknowledgment from a capable adult is
        required before starting therapy.
      </p>
    ),
  },
];

const diagnosisAndAssessments = [
  {
    icon: <HeartHandshake size={20} />,
    question: "Is a mental health diagnosis required to begin therapy?",
    answer: (
      <p>
        No diagnosis is required to start therapy. Many people seek therapy for
        self understanding, emotional support, or personal growth. If a
        diagnosis becomes helpful or necessary, your therapist will discuss this
        with you.
      </p>
    ),
  },
  {
    icon: <ClipboardList size={20} />,
    question: "How does the diagnostic process work and what are the charges?",
    answer: (
      <p>
        Information about the diagnostic process and associated fees is
        available on our Diagnosis page. We would be happy to help if you need
        further clarification.
      </p>
    ),
  },
];

const paymentsAndPolicies = [
  {
    icon: <Wallet size={20} />,
    question: "How do I pay for my sessions?",
    answer: (
      <p>
        Payments are made in advance through UPI, bank transfer, or other online
        payment methods shared during booking. Your session is confirmed once
        payment is received.
      </p>
    ),
  },
  {
    icon: <CreditCard size={20} />,
    question: "Do you accept card payments?",
    answer: (
      <p>
        Yes, credit and debit card payments are accepted. Please note that
        additional processing charges may apply.
      </p>
    ),
  },
  {
    icon: <AlertCircle size={20} />,
    question: "What happens if I miss a session or cancel at the last minute?",
    answer: (
      <p>
        Sessions cancelled within 24 hours or missed without prior notice are
        non refundable and cannot be reused. A new payment will be required to
        book another session.
      </p>
    ),
  },
  {
    icon: <Package size={20} />,
    question: "Are there any discounted packages available?",
    answer: (
      <p>
        Yes, we offer discounted packages for clients who book multiple
        sessions. Feel free to reach out to us, and we would be happy to help
        you explore the available options.
      </p>
    ),
  },
  {
    icon: <Receipt size={20} />,
    question: "Can I receive a receipt for my payment?",
    answer: (
      <p>Yes, receipts are provided upon request for all completed payments.</p>
    ),
  },
];

const FAQS = [
  {
    sectionName: "Sessions and Appointments",
    questionare: sessionsAndAppointments,
  },
  {
    sectionName: "About Therapy",
    questionare: aboutTherapy,
  },
  {
    sectionName: "Diagnosis and Assessments",
    questionare: diagnosisAndAssessments,
  },
  {
    sectionName: "Payments and Policies",
    questionare: paymentsAndPolicies,
  },
];

export default FAQS;
