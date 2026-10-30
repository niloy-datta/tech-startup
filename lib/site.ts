export const brand = "NBD";

// Update this in your environment before production launch. No company domain
// or business email has been assumed.
export const contactEmail = process.env.NEXT_PUBLIC_NBD_CONTACT_EMAIL ?? "";

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Our approach", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: "01",
    slug: "web-development",
    name: "Website development",
    short: "Fast, distinctive websites that work as hard as you do.",
    details: "From high-converting marketing sites to robust web platforms, we design and engineer performant experiences that grow with your business.",
    points: ["Company & brand websites", "E-commerce & booking platforms", "Web apps & dashboards"],
    icon: "web",
  },
  {
    number: "02",
    slug: "mobile-app-development",
    name: "Mobile app development",
    short: "Thoughtful mobile products for life on the move.",
    details: "Turn your idea into a polished mobile experience with clear user journeys, clean architecture and maintainable foundations.",
    points: ["iOS & Android experiences", "Cross-platform applications", "MVPs & product launches"],
    icon: "mobile",
  },
  {
    number: "03",
    slug: "custom-software",
    name: "Custom software",
    short: "Your workflows, built into smarter systems.",
    details: "Replace fragmented manual work with purpose-built tools designed around your operations, teams and customer needs.",
    points: ["Business portals & CRMs", "Workflow automation", "API & system integrations"],
    icon: "software",
  },
  {
    number: "04",
    slug: "ui-ux-design",
    name: "UI/UX & product design",
    short: "Clarity, utility and personality in every interaction.",
    details: "Align product strategy with user needs through research-informed interfaces, interactive prototypes and scalable design systems.",
    points: ["Product discovery", "UX flows & prototyping", "Design systems"],
    icon: "design",
  },
  {
    number: "05",
    slug: "ai-integration",
    name: "AI & automation",
    short: "Useful intelligence, not just another buzzword.",
    details: "Explore practical AI-powered experiences and process automation, with an emphasis on the problem being solved and responsible implementation.",
    points: ["AI-powered product features", "Knowledge assistants", "Intelligent workflows"],
    icon: "ai",
  },
  {
    number: "06",
    slug: "maintenance",
    name: "Support & evolution",
    short: "Good products keep getting better.",
    details: "Improve your digital product after launch with performance enhancements, iterative features and technical upkeep.",
    points: ["Performance optimization", "Ongoing enhancements", "Technical advisory"],
    icon: "support",
  },
] as const;

export const workSteps = [
  { step: "01", title: "Discover", description: "We define the problem, audience and what success should look like." },
  { step: "02", title: "Design", description: "We translate ideas into clear journeys and a distinctive product direction." },
  { step: "03", title: "Develop", description: "We build iteratively with a focus on quality, performance and usability." },
  { step: "04", title: "Launch & evolve", description: "We prepare for release, gather feedback and plan the next improvements." },
] as const;
