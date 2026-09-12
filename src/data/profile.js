// Everything the site says about you lives here, so copy edits never mean
// hunting through components.

export const profile = {
  name: "Jason Gundayao",
  initials: "JG",
  role: "Senior Full-Stack & AI Engineer",
  kicker: "Hello, I'm",
  tagline:
    "I help SaaS companies build scalable products, AI features and reliable backend systems — and get them into production without drama.",
  summary:
    "Fifteen years across front-end, backend and cloud, building products for logistics, e-commerce, marketplaces and AI platforms — with a bias for things that keep working after launch.",
  // TODO: replace with the address you actually want on a public page.
  email: "your.email@example.com",
  location: "Angeles City, Philippines — remote worldwide",
  availability: "Available for SaaS and AI projects",
  resume: "/Jason-Gundayao-Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/jason050928", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jason-gundayao-ab00ab3a7/",
      icon: "linkedin",
    },
  ],
};

// Headline numbers. Each percentage is also pinned to the case study it
// came from in `projects` below, so the two stay in step.
export const stats = [
  { value: "15+", label: "Years shipping production software" },
  { value: "25%", label: "Faster API response times" },
  { value: "30%", label: "Faster deployment pipeline" },
  { value: "20%", label: "Lower AWS spend" },
];

export const highlights = [
  "Shipping AI features that behave predictably, not just in the demo",
  "Designing APIs and data models that hold up under real load",
  "Building React and TypeScript front-ends the next engineer can maintain",
  "Working asynchronously with distributed product teams",
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

// What clients can actually hire you for. `icon` keys map to
// serviceIcons in About.jsx.
export const services = [
  {
    icon: "psychology",
    title: "AI & LLM integration",
    description:
      "LLM-powered features, retrieval pipelines and evaluation loops built into your product — with validation and guardrails so they hold up beyond the demo.",
  },
  {
    icon: "rocket",
    title: "SaaS product development",
    description:
      "End-to-end delivery of multi-tenant SaaS products: data model, APIs, front-end and the deployment pipeline that ships them.",
  },
  {
    icon: "storage",
    title: "Backend & API engineering",
    description:
      "REST APIs, third-party integrations and data workflows in Python and Node.js that stay fast and predictable as traffic grows.",
  },
  {
    icon: "code",
    title: "React / Next.js development",
    description:
      "Product front-ends and dashboards in React, Next.js and TypeScript — accessible, fast and straightforward to maintain.",
  },
];

// Each project is a mini case study: problem → what you built → stack →
// result. `metrics` is optional and renders as headline numbers on the
// card; keep it in step with `stats` above.
//
// `image` is a homepage screenshot in public/images/projects. Leave it empty
// and the card falls back to a branded placeholder — see README for how to
// capture new ones.
//
// TODO: these case studies are DRAFTS written from the product descriptions
// and your CV. Check each "problem" and "built" line says what you actually
// did, and move the metrics to whichever project they truly belong to.
export const projects = [
  {
    title: "Averi",
    context: "AI content engine",
    url: "https://www.averi.ai/",
    image: "/images/projects/averi.jpg",
    problem:
      "Research, drafting and publishing all ran on LLM output, inconsistent results were reaching users, and every release was slow and hand-driven on an AWS bill that kept climbing.",
    built:
      "An LLM orchestration layer — prompt configuration, retrieval, validation and evaluation loops — plus a CI/CD pipeline and a right-sized AWS setup for the whole platform.",
    stack: ["TypeScript", "Python", "LLM APIs", "AWS", "CI/CD"],
    result:
      "AI features that behave predictably in production, releases that go out the same day they are ready, and a leaner infrastructure bill.",
    metrics: [
      { value: "30%", label: "faster deployments" },
      { value: "20%", label: "lower AWS spend" },
    ],
  },
  {
    title: "Rentberry",
    context: "Rental platform",
    url: "https://rentberry.com/",
    image: "/images/projects/rentberry.jpg",
    problem:
      "Listings, screening, applications and rent collection across 90+ countries, with integrations that failed differently in every market and listing APIs that slowed at volume.",
    built:
      "Integration services for screening and payments with retries, validation and monitoring, plus schema, index and query work on the listing APIs.",
    stack: ["Python", "PostgreSQL", "REST APIs", "AWS"],
    result:
      "Fewer integration failures reaching tenants and landlords, and steadier latency on the busiest endpoints.",
    metrics: [{ value: "25%", label: "faster API responses" }],
  },
  {
    title: "Furniture.com",
    context: "E-commerce",
    url: "https://www.furniture.com/",
    image: "/images/projects/furniture.jpg",
    problem:
      "A catalogue spanning many retailers with inconsistent product data, and a checkout that had to hold several vendors in one cart.",
    built:
      "Catalogue ingestion and normalisation services, AI-assisted search, and the cross-retailer cart and order APIs.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    result:
      "One consistent storefront across brands, with search that copes with messy data and a single checkout across vendors.",
  },
  {
    title: "Fenton",
    context: "Bespoke jewellery",
    url: "https://www.fentonand.co/",
    image: "/images/projects/fentonandco.jpg",
    problem:
      "A ring configurator with thousands of stone, metal and setting combinations that had to stay fast and price accurately inside Shopify.",
    built:
      "The configurator front-end and the pricing and availability API behind it, integrated with Shopify checkout and fulfilment.",
    stack: ["React", "Node.js", "Shopify", "REST APIs"],
    result:
      "Customers design and price a bespoke ring in the browser and check out without leaving the flow.",
  },
  {
    title: "Trulia",
    context: "Real estate marketplace",
    url: "https://www.trulia.com/",
    image: "",
    problem:
      "Listing and neighbourhood data arrived from many feeds in inconsistent shapes, and search-facing services struggled at peak traffic.",
    built:
      "Ingestion pipelines that normalise and validate listing feeds, and caching and query tuning on the search and detail services.",
    stack: ["Python", "PostgreSQL", "REST APIs", "AWS"],
    result:
      "Cleaner listing data for every downstream consumer and search that stays responsive under load.",
  },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sayeef Digital Agency UK",
    period: "Aug 2023 — Present",
    description:
      "Build and support production applications and API integrations in Python and TypeScript, and fold LLM features into real workflows with the validation, retries and monitoring they need to survive production.",
    tags: ["Python", "TypeScript", "LLM APIs", "AWS"],
  },
  {
    role: "Senior Software Engineer",
    company: "ScienceSoft",
    period: "May 2020 — Jul 2023",
    description:
      "Backend services, APIs and data pipelines in Python, Java and PostgreSQL. Schema, index and query work that made services measurably faster, plus CI/CD and release validation for distributed teams.",
    tags: ["Python", "Java", "PostgreSQL", "CI/CD"],
  },
  {
    role: "Technical Lead",
    company: "Digital Thing",
    period: "Jul 2017 — Apr 2020",
    description:
      "Led planning and delivery for web applications and backend services while staying hands-on — API design, PostgreSQL data models, code review and mentoring the engineers doing the work.",
    tags: ["APIs", "PostgreSQL", "Architecture", "Mentoring"],
  },
  {
    role: "Full Stack Engineer",
    company: "Thoughtworks",
    period: "Mar 2013 — Jun 2017",
    description:
      "Full-stack features in JavaScript and Java across Agile delivery teams — reusable components, integration points and automated tests, shipped through code review and iterative releases.",
    tags: ["JavaScript", "Java", "Agile", "Testing"],
  },
  {
    role: "Software Engineer Intern",
    company: "IBM",
    period: "Jul 2011 — Feb 2013",
    description:
      "Development, testing and debugging alongside senior engineers — enterprise engineering practice learned from the inside.",
    tags: ["Java", "Testing"],
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
