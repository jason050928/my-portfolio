// Everything the site says about you lives here, so copy edits never mean
// hunting through components.

export const profile = {
  name: "Jason Gundayao",
  initials: "JG",
  // Professional title — shown small next to the name in the hero, navbar
  // and footer. The sales message is `headline`.
  role: "Senior Full-Stack & AI Engineer",
  headline: "I build scalable SaaS products, APIs & AI-powered solutions",
  tagline:
    "I help startups and businesses turn ideas into production-ready web applications, backend systems, API integrations and practical AI features.",
  summary:
    "Fifteen years across front-end, backend and cloud, building products for logistics, e-commerce, marketplaces and AI platforms — with a bias for things that keep working after launch.",
  // TODO: replace with the address you actually want on a public page.
  location: "Angeles City, Philippines — remote worldwide",
  email: "seniordev02002@gmail.com",
  availability: "Available for freelance & contract projects",
  // Optional photo behind the hero copy (put it in public/images). Leave
  // empty and the hero uses a dark gradient instead.
  heroImage: "",
  // The PDF lives in public/. `resumeFileName` is what the download saves as.
  resume: "/Jason-Gundayao-CV.pdf",
  resumeFileName: "Jason-Gundayao-CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/jason050928", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jason-gundayao-ab00ab3a7/",
      icon: "linkedin",
    },
  ],
};

// Stats row under the hero CTAs, and the About intro grid. Only claims
// that are true on their face — no percentages unless there is a case
// study that shows exactly how the number was measured.
export const credentials = [
  { value: "15+", label: "Years engineering" },
  { value: "Full-stack", label: "End-to-end delivery" },
  { value: "AI & APIs", label: "Integration experience" },
  { value: "Remote", label: "International clients" },
];

export const highlights = [
  "Shipping AI features that behave predictably, not just in the demo",
  "Designing APIs and data models that hold up under real load",
  "Building React and TypeScript front-ends the next engineer can maintain",
  "Working asynchronously with distributed product teams",
];

// Technical expertise, as four capabilities rather than a wall of logos.
// `tags` are the handful of technologies a client will ask about; a tag
// with a brand mark in techIcons gets its logo, the rest render as text.
// `icon` keys map to capabilityIcons in Skills.jsx.
//
// A fifth card — "AI Engineering" — is deliberately absent until there is
// a shipped AI project to point at. Add it here when that exists.
export const capabilities = [
  {
    icon: "fullstack",
    title: "Full-Stack Development",
    description:
      "Build production web applications from responsive interfaces through backend services and business logic.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
    ],
  },
  {
    icon: "backend",
    title: "Backend & API Engineering",
    description:
      "Design scalable services, APIs and integrations with clear data flows, validation and maintainable architecture.",
    tags: [
      "Node.js",
      "Python",
      "Django",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    icon: "data",
    title: "Data & Cloud",
    description:
      "Work with relational and document databases, cloud infrastructure and deployment pipelines for reliable production systems.",
    tags: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS",
      "CI/CD",
    ],
  },
  {
    icon: "leadership",
    title: "Engineering Leadership",
    description:
      "Lead technical decisions, improve performance, review code and help engineering teams deliver maintainable software.",
    tags: [
      "Architecture",
      "Performance",
      "Testing",
      "Agile",
      "Mentoring",
    ],
  },
];

// What clients can actually hire you for — three, so the offer is clear.
// `icon` keys map to serviceIcons in About.jsx.
export const services = [
  {
    icon: "rocket",
    title: "Full-stack SaaS development",
    description:
      "React / Next.js applications backed by scalable Node.js or Python services and relational databases.",
  },
  {
    icon: "storage",
    title: "Backend & API engineering",
    description:
      "REST / GraphQL APIs, third-party integrations, data workflows and performance optimization.",
  },
  {
    icon: "psychology",
    title: "AI-powered product features",
    description:
      "Practical AI capabilities integrated into existing web applications and business workflows.",
  },
];

// Each project is a mini case study: problem → what you built → stack →
// result. Keep numbers out of these until a case study can show exactly
// how they were measured.
//
// `image` is a homepage screenshot in public/images/projects. Leave it empty
// and the card falls back to a branded placeholder — see README for how to
// capture new ones.
//
// TODO: these case studies are DRAFTS written from the product descriptions
// and your CV. Check each "problem" and "built" line says what you actually
// did.
export const projects = [
  {
    title: "Averi",
    context: "AI marketing platform",
    url: "https://www.averi.ai/",
    image: "/images/projects/averi.jpg",

    problem:
      "Marketing teams need a more consistent way to create, refine and manage AI-assisted content across campaigns without relying on fragmented tools and workflows.",

    built:
      "Contributed as a Senior Software Engineer to the maintenance and continued development of the platform, working across React and TypeScript on the application layer and Python-backed functionality.",

    stack: [
      "React",
      "TypeScript",
      "Python",
    ],

    result:
      "Helped maintain and evolve a production AI marketing platform used to support content creation and campaign workflows.",
  },
  {
    title: "Rentberry",
    context: "Rental platform",
    url: "https://rentberry.com/",
    image: "/images/projects/rentberry.jpg",

    problem:
      "Rentberry supports tenants, landlords and property managers through property search, applications, rental offers and ongoing rental workflows in a single platform.",

    built:
      "Contributed as a Senior Software Engineer to the maintenance and continued development of the platform, working with React and TypeScript on the frontend and Python and Django on backend functionality.",

    stack: [
      "React",
      "TypeScript",
      "Python",
      "Django",
    ],

    result:
      "Helped maintain and improve a production rental platform supporting digital workflows for tenants, landlords and property managers.",
  },
  {
    title: "Fenton",
    context: "Bespoke jewellery",
    url: "https://www.fentonand.co/",
    image: "/images/projects/fentonandco.jpg",

    problem:
      "Fenton needed a customer-facing e-commerce experience where customers could explore fine jewellery, customize selections and complete purchases through a clear online journey.",

    built:
      "Contributed as a Senior Software Engineer to the ground-up development of the storefront, working with Shopify, Liquid, JavaScript, HTML and CSS to build and refine the customer experience.",

    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    result:
      "Helped deliver a production e-commerce experience that supports product discovery, customization and online purchasing for Fenton customers.",
  },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sayeef Digital Agency UK",
    period: "Aug 2023 — Present",
    description:
      "Design and build full-stack web applications using React and Node.js, develop scalable APIs backed by PostgreSQL, and support AWS-based CI/CD delivery. Also mentor developers, contribute to technical decisions and collaborate with cross-functional teams on production features.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "CI/CD"],
  },

  {
    role: "Senior Software Engineer",
    company: "ScienceSoft",
    period: "May 2020 — Jul 2023",
    description:
      "Developed and improved backend services and microservices using Node.js and MongoDB, optimized REST APIs and integrated third-party services. Contributed through code reviews, performance improvements and Agile delivery across distributed teams.",
    tags: ["Node.js", "MongoDB", "REST APIs", "Microservices"],
  },

  {
    role: "Technical Lead",
    company: "Digital Thing",
    period: "Jul 2017 — Apr 2020",
    description:
      "Led technical planning and software delivery while remaining hands-on with React applications and AWS-based systems. Guided developers, reviewed technical decisions, improved application performance and worked with stakeholders to turn business requirements into software solutions.",
    tags: ["React", "AWS", "Technical Leadership", "Performance"],
  },

  {
    role: "Full Stack Engineer",
    company: "Thoughtworks",
    period: "Mar 2013 — Jun 2017",
    description:
      "Built full-stack application features using JavaScript and Python, contributed to legacy-system modernization and worked with PostgreSQL data models. Supported Agile delivery, testing and production troubleshooting across collaborative engineering teams.",
    tags: ["JavaScript", "Python", "PostgreSQL", "Agile"],
  },

  {
    role: "Software Engineer Internship",
    company: "IBM",
    period: "Jul 2011 — Feb 2013",
    description:
      "Built foundational software engineering experience through application development, REST API work, testing and debugging using JavaScript and Python, while learning Git-based collaboration and professional engineering practices.",
    tags: ["JavaScript", "Python", "REST APIs", "Git"],
  },
];

// `location`, `description` and `tags` are optional — leave them out and the
// card just gets shorter.
export const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "National University of Singapore",
    period: "Aug 2007 — May 2011",
    location: "Singapore",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
