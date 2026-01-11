const therapyExp = (
  <>
    <div className="space-y-8">
      <p>
        Whether you’re navigating personal challenges or strengthening a
        workplace culture, our therapy services are designed to support mental
        health at both the individual and collective level. We offer
        compassionate, evidence-based therapy that helps individuals heal and
        teams thrive.
      </p>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">For Individuals</h4>
        <p>
          Our qualified therapists provide a safe, supportive space to explore
          emotions, overcome challenges, and build resilience. From anxiety and
          stress to depression and personal growth, we walk with you at every
          step of your journey.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">For Teams &amp; Organizations</h4>
        <p>
          Healthy teams perform better. We partner with startups, corporates,
          and educational institutions to reduce burnout, improve communication,
          and foster emotionally resilient work environments.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Our Approach</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personalized therapy plans for individuals and teams</li>
          <li>Evidence-based methods including CBT, DBT, and EFT</li>
          <li>Interactive workshops and group therapy sessions</li>
          <li>A safe, confidential, and non-judgmental environment</li>
        </ul>
      </div>

      <p className="font-medium">
        Start building a healthier mind — and a stronger team.
      </p>
    </div>
  </>
);

const assessmentExp = (
  <div className="space-y-8">
    <p>
      Understanding your mental health is the first step toward meaningful
      change. Our comprehensive assessments uncover cognitive, emotional, and
      behavioral patterns, helping individuals and teams gain clear insights
      into their strengths, challenges, and support needs.
    </p>

    <p>
      Designed and guided by qualified mental health professionals, our
      assessments turn information into actionable direction — not just data.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Our Approach</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Evidence-based psychological assessments for individuals and teams
        </li>
        <li>Clear, personalized reports with practical recommendations</li>
        <li>
          Professional guidance to help you understand and apply the results
        </li>
      </ul>
    </div>

    <p className="font-medium">
      Gain clarity. Make informed decisions. Take control of your mental
      well-being.
    </p>
  </div>
);

const interventionExp = (
  <div className="space-y-8">
    <p>
      Our specialized therapeutic interventions are designed for individuals who
      need focused, goal-oriented support for specific psychological concerns.
      From trauma recovery and emotional regulation to strengthening coping
      mechanisms, our approach provides clear structure while remaining deeply
      compassionate.
    </p>

    <p>
      Each intervention is carefully tailored to promote long-term stability,
      resilience, and emotional growth — not just short-term relief.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Our Approach</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Personalized intervention plans aligned with your unique challenges
        </li>
        <li>Integrative, evidence-based therapeutic methods</li>
        <li>Ongoing support from compassionate, experienced therapists</li>
      </ul>
    </div>

    <p className="font-medium">
      Empower yourself with strategies that create meaningful, lasting change.
    </p>
  </div>
);

const leadershipExp = (
  <>
    <div className="space-y-8">
      <p>
        We collaborate with leaders, educators, and organizations to drive
        meaningful mental health change at scale. Our consultancy services help
        embed sustainable mental well-being frameworks within workplaces,
        institutions, and communities — turning awareness into long-term impact.
      </p>

      <p>
        Through research-backed strategies and expert guidance, we support
        organizations in building mentally healthy cultures that truly last.
      </p>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Our Approach</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Expert-led mental health strategy and framework development</li>
          <li>
            Awareness initiatives that encourage open, positive mental health
            conversations
          </li>
          <li>
            Guidance on implementing effective, people-first policies and
            programs
          </li>
        </ul>
      </div>

      <p className="font-medium">
        Partner with us to shape a mentally healthier future.
      </p>
    </div>
  </>
);

const programExp = (
  <>
    <div className="space-y-8">
      <p>
        We empower individuals and organizations with the knowledge, skills, and
        confidence needed to address mental health challenges effectively. Our
        capacity-building programs focus on practical learning, helping
        participants build resilience, emotional intelligence, and everyday
        mental health skills that create lasting impact.
      </p>

      <p>
        Delivered by experienced mental health professionals, each program is
        customized to meet the unique needs of teams, institutions, and
        communities.
      </p>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Our Approach</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Interactive, expert-led training sessions</li>
          <li>Customized programs tailored to organizational goals</li>
          <li>
            Focus on skill development, resilience, and emotional intelligence
          </li>
        </ul>
      </div>

      <p className="font-medium">
        Build stronger, more informed communities through learning and
        empowerment.
      </p>
    </div>
  </>
);

const SERVICES = [
  {
    imageSrc: "/images/therapy.svg",
    title: "Individual & Team Therapy",
    description:
      "Mental well-being that supports people — and the teams they build.",
    imageAlt: "therapy-image",
    explanation: therapyExp,
  },
  {
    imageSrc: "/images/analysis.svg",
    title: "Mental Health Assessments",
    description: "Clarity that empowers better mental well-being.",
    imageAlt: "analysis-image",
    explanation: assessmentExp,
  },
  {
    imageSrc: "/images/interventions.svg",
    imageAlt: "interventions-image",
    title: "Therapeutic Interventions",
    description: "Structured support for lasting psychological growth.",
    explanation: interventionExp,
  },
  {
    imageSrc: "/images/leadership.svg",
    imageAlt: "leadership-image",
    title: "Thought Leadership & Consultancy",
    description: "Shaping cultures where mental well-being thrives.",
    explanation: leadershipExp,
  },
  {
    imageSrc: "/images/program.svg",
    imageAlt: "program-image",
    title: "Capacity Building Programs",
    description: "Equipping people with skills to support mental well-being.",
    explanation: programExp,
  },
];

export default SERVICES;
