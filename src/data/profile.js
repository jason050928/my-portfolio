// Everything the site says about you lives here, so copy edits never mean
// hunting through components.

export const profile = {
  name: "Jason Gundayao",
  initials: "JG",
  role: "Senior Software & AI Engineer",
  kicker: "Hello, I'm",
  tagline:
    "I turn complex business requirements into reliable, scalable digital products.",
  summary:
    "Over the past 15 years I have worked across front-end, back-end and cloud development, building applications for logistics, e-commerce, online marketplaces and AI-powered platforms.",
  // TODO: replace with the address you actually want on a public page.
  email: "your.email@example.com",
  location: "Remote — global teams",
  availability: "Open to senior and lead engineering roles",
  resume: "/Jason-Gundayao-Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  ],
};

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "Full Stack", label: "Front-end to cloud" },
  { value: "AI", label: "Intelligent product development" },
  { value: "Remote", label: "Global team experience" },
];

export const highlights = [
  "Building maintainable front-ends in React and TypeScript",
  "Designing APIs and services that hold up under real load",
  "Shipping AI features into products people actually use",
  "Working asynchronously with distributed teams",
];

// Programming languages and markup, shown as their own block.
export const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "React",
  "Python",
  "PHP",
  "Java",
  "SQL",
  "HTML",
  "CSS",
];

// Everything else, grouped the way the CV groups it.
export const skillGroups = [
  {
    title: "Backend & Integration",
    icon: "backend",
    skills: [
      "RESTful APIs",
      "OAuth",
      "Authentication",
      "Webhooks",
      "Node.js",
      "Third-party integrations",
      "Background processing",
      "Validation",
      "Error handling",
    ],
  },
  {
    title: "AI & Automation",
    icon: "ai",
    skills: [
      "AI-integrated workflows",
      "LLM APIs",
      "OpenAI",
      "Claude",
      "Gemini",
      "n8n",
      "Make.com",
      "Workflow automation",
      "Prompt configuration",
    ],
  },
  {
    title: "Data",
    icon: "data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Data modeling",
      "Ingestion",
      "Transformation",
      "Data validation",
    ],
  },
  {
    title: "Cloud & Delivery",
    icon: "cloud",
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Git",
      "Deployment automation",
    ],
  },
  {
    title: "Quality & Reliability",
    icon: "quality",
    skills: [
      "Automated testing",
      "Unit testing",
      "Integration testing",
      "Monitoring",
      "Logging",
      "Production debugging",
      "Root-cause analysis",
    ],
  },
];

export const services = [
  {
    icon: "code",
    title: "Web application development",
    description:
      "Product front-ends and dashboards built with React and TypeScript — accessible, fast, and straightforward to maintain.",
  },
  {
    icon: "storage",
    title: "APIs & backend systems",
    description:
      "Services, integrations and data models in Node.js and Python that stay predictable as traffic and requirements grow.",
  },
  {
    icon: "psychology",
    title: "AI product engineering",
    description:
      "Model-backed features, retrieval pipelines and evaluation loops folded into real products rather than demos.",
  },
  {
    icon: "cloud",
    title: "Cloud & delivery",
    description:
      "AWS infrastructure, containerised deploys and CI/CD pipelines that make releases routine instead of risky.",
  },
];

// `image` is a homepage screenshot in public/images/projects. Leave it empty
// and the card falls back to a branded placeholder — see README for how to
// capture new ones.
//
// TODO: the descriptions below describe each product. Rewrite them to say what
// YOU built on it, and swap `tags` for the stack you actually used.
export const projects = [
  {
    title: "Trulia",
    context: "Real estate marketplace",
    url: "https://www.trulia.com/",
    image: "",
    description:
      "US home search platform covering for-sale and rental listings, neighbourhood insight and local market data at national scale.",
    tags: ["Real estate", "Search", "Marketplace"],
  },
  {
    title: "Averi",
    context: "AI content engine",
    url: "https://www.averi.ai/",
    image: "/images/projects/averi.jpg",
    description:
      "AI content engine for startups — research, drafting, publishing and analytics in one workflow, tuned for search and AI citation.",
    tags: ["AI", "LLM APIs", "SaaS"],
  },
  {
    title: "Furniture.com",
    context: "E-commerce",
    url: "https://www.furniture.com/",
    image: "/images/projects/furniture.jpg",
    description:
      "Multi-brand furniture marketplace with AI-assisted search, moodboards and a single cart spanning many retailers.",
    tags: ["E-commerce", "Catalogue", "Search"],
  },
  {
    title: "Fenton",
    context: "Bespoke jewellery",
    url: "https://www.fentonand.co/",
    image: "/images/projects/fentonandco.jpg",
    description:
      "London jeweller selling customisable engagement rings and wedding bands, built around a bespoke ring configurator.",
    tags: ["E-commerce", "Configurator", "Shopify"],
  },
  {
    title: "Rentberry",
    context: "Rental platform",
    url: "https://rentberry.com/",
    image: "/images/projects/rentberry.jpg",
    description:
      "Global rental platform across 90+ countries — listings, tenant screening, applications and digital rent collection.",
    tags: ["PropTech", "Payments", "Marketplace"],
  },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sayeef Digital Agency UK",
    period: "August 2023 — Present",
    description:
      "Develop and maintain reliable business applications, APIs and enterprise systems while collaborating with remote teams across time zones.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "TransVirtual",
    period: "Previous position",
    description:
      "Worked on logistics services, carrier integrations, shipment workflows, dashboards and high-volume operational data.",
    tags: ["React", "PostgreSQL", "Integrations"],
  },
  {
    role: "Software Developer",
    company: "Vinobid",
    period: "Project experience",
    description:
      "Improved an online wine auction platform covering orders, payments, shipment tracking and seller payouts.",
    tags: ["JavaScript", "Payments", "E-commerce"],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
