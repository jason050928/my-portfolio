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
    "Fifteen years building and supporting production applications across frontend, backend, APIs, databases and cloud — for B2B SaaS, e-commerce, real estate, digital content and enterprise data systems.",
  location: "Angeles City, Pampanga, Philippines — remote worldwide",
  email: "seniordev02002@gmail.com",
  phone: "+63 955 257 9193",
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
  "API design and third-party integrations that hold up under real load",
  "Performance optimization and production troubleshooting across every layer",
  "React, Next.js and TypeScript front-ends the next engineer can maintain",
  "CI/CD, code review and technical leadership for distributed remote teams",
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
    tags: ["Node.js", "Python", "Django", "PHP", "Laravel", "REST APIs", "GraphQL"],
  },
  {
    icon: "data",
    title: "Data & Cloud",
    description:
      "Work with relational and document databases, cloud infrastructure and deployment pipelines for reliable production systems.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "Docker", "Terraform", "CI/CD"],
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
// result, taken from the "Selected Projects" section of the CV so the two
// always agree. Keep numbers out until a case study can show exactly how
// they were measured.
//
// `image` is a homepage screenshot in public/images/projects. Leave it empty
// and the card falls back to a branded placeholder — see README for how to
// capture new ones. `url` is optional: without one the card is not a link.
export const projects = [
  {
    title: "HELLOprint",
    context: "B2B e-commerce printing · 2025",
    role: "Senior Full-Stack Engineer",
    url: "https://www.helloprint.com/",
    image: "/images/projects/helloprint.jpg",
    problem:
      "A high-traffic B2B printing platform where customers browse, customise and order print products, with catalogues, users, orders and payments all needing fast, reliable APIs.",
    built:
      "Customer-facing browsing, customisation and ordering flows in React and Next.js, plus Node.js/Express REST APIs for catalogues, users, orders and payments, integrated with payment and shipping services.",
    stack: ["React", "Next.js", "Node.js", "Express", "Redis", "AWS", "Docker", "Terraform"],
    result:
      "Faster order processing under load through API and database optimisation and Redis caching, deployed and operated on AWS with Docker, Terraform and CI/CD.",
  },
  {
    title: "Connected Railway",
    context: "B2B multi-tenant SaaS · 2024",
    role: "Full-Stack Engineer",
    url: "https://connected-railway.com/",
    image: "/images/projects/connected-railway.jpg",
    problem:
      "A multi-tenant platform connecting railway sub-contractors, resourcing companies and training providers — job discovery, applications and onboarding that had to stay fast on data-heavy endpoints.",
    built:
      "React/Next.js workflows for job discovery, applications, onboarding, role-based routing, tenant-aware UI, search and filtering, and Laravel REST/GraphQL API work on the backend.",
    stack: ["React", "Next.js", "PHP", "Laravel", "GraphQL", "AWS", "Docker"],
    result:
      "Data-heavy endpoints made responsive with cursor pagination, query refactoring and indexing, on a tenant-aware UI that routes each role to the right workflow.",
  },
  {
    title: "Alveo Land",
    context: "Real estate platform · 2023",
    role: "Backend Engineer",
    url: "https://www.alveoland.com.ph/",
    image: "/images/projects/alveoland.jpg",
    problem:
      "A media-heavy property portal for one of the Philippines' largest developers, with property data, content configuration and lead capture all running through the backend.",
    built:
      "PHP/Symfony backend functionality for property data, content configuration and lead capture, including MySQL schemas, queries, validation and error handling.",
    stack: ["PHP", "Symfony", "MySQL", "WordPress", "Docker"],
    result:
      "Media-heavy pages that load leaner, through data-hydration optimisation, caching and slimmer API responses.",
  },
  {
    title: "Splurge.art",
    context: "Digital art platform · 2023",
    role: "Senior Full-Stack Engineer, AI focused",
    url: "",
    image: "",
    problem:
      "A web and mobile platform for discovering high-resolution digital artwork, where large media had to render smoothly and artwork metadata had to be ready for AI-assisted enrichment.",
    built:
      "Web and mobile interfaces in React, Next.js and Flutter, plus backend APIs and PostgreSQL data models for artwork ingestion, metadata and discovery.",
    stack: ["React", "Next.js", "Flutter", "TypeScript", "Node.js", "Python", "PostgreSQL"],
    result:
      "High-resolution media that performs, via progressive loading, caching and viewport rendering — on a data model designed for future AI-assisted enrichment.",
  },
  {
    title: "Smart Communications",
    context: "Enterprise telecom data platform · 2021",
    role: "Senior Full-Stack / Data Engineer",
    url: "https://smart.com.ph/",
    image: "",
    problem:
      "Operational reporting for a national telecom, where recurring reports depended on slow queries over large datasets and manual data delivery.",
    built:
      "React dashboards, Python/Node.js APIs, SQL queries, ETL workflows and data models for operational reporting.",
    stack: ["Python", "SQL", "React", "Node.js", "ETL"],
    result:
      "Faster reporting through SQL optimisation, indexing, aggregation tables and scheduled preprocessing, with recurring data delivery automated.",
  },
];

// Straight from the CV. `location` shows next to the company.
export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sayeef Digital Agency UK",
    location: "United Kingdom · Remote",
    period: "Aug 2023 — Present",
    description:
      "Build and maintain production applications across frontend, backend, API and database layers in JavaScript, TypeScript, React, Node.js, Python and PHP. Develop customer-facing interfaces integrated with backend services, REST APIs, databases and third-party systems; diagnose production and performance issues across every layer and ship tested fixes; contribute to technical decisions, code review, testing, deployment and production troubleshooting with distributed teams.",
    tags: ["React", "TypeScript", "Node.js", "Python", "PHP", "REST APIs"],
  },
  {
    role: "Senior Software Engineer",
    company: "ScienceSoft",
    location: "United States · Remote",
    period: "May 2020 — Jul 2023",
    description:
      "Developed production full-stack applications with React, Next.js, TypeScript, Node.js, Python, relational and document databases and web APIs. Built and integrated backend services, REST APIs, third-party integrations, database schemas, queries and indexing for customer-facing workflows, resolved production issues across the stack and supported CI/CD and releases.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Python", "CI/CD"],
  },
  {
    role: "Technical Lead",
    company: "Digital Thing",
    location: "Australia · Remote",
    period: "Jul 2017 — Apr 2020",
    description:
      "Led technical delivery of full-stack web applications while staying hands-on with architecture, implementation, testing, debugging and production support. Designed APIs, database schemas, application workflows and integrations on AWS-based production systems; reviewed code and technical designs, mentored engineers and turned stakeholder requirements into production releases.",
    tags: ["Architecture", "APIs", "AWS", "Code review", "Mentoring"],
  },
  {
    role: "Full Stack Engineer",
    company: "Thoughtworks",
    location: "Singapore · Onsite",
    period: "Mar 2013 — Jun 2017",
    description:
      "Built and maintained full-stack applications using JavaScript, Python, relational databases and web APIs. Implemented frontend features, backend logic, database queries, validation and integrations, and contributed to application modernisation.",
    tags: ["JavaScript", "Python", "SQL", "Web APIs"],
  },
  {
    role: "Software Engineer Intern",
    company: "IBM",
    location: "United States · Remote",
    period: "Jul 2011 — Feb 2013",
    description:
      "Supported development, testing, debugging, documentation and REST API work using JavaScript, Python and Git.",
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
