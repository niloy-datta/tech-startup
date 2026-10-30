/**
 * Projects contributed to or explored by people behind NBD.
 * These are NOT presented as commissioned NBD client engagements.
 * Descriptions avoid unverified launches, usage metrics, and ownership claims.
 */
export type ProjectCategory =
  | "Web platforms"
  | "Mobile apps"
  | "AI & research"
  | "Developer tools"
  | "Games"
  | "Business systems";

export type ProjectVisual = "education" | "agriculture" | "finance" | "fitness" | "terminal" | "code" | "housing" | "work" | "space" | "shooter" | "garments" | "logistics" | "architecture" | "commerce" | "workforce";

export type PortfolioProject = {
  id: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  technologies: readonly string[];
  visual: ProjectVisual;
  kind: "Built project" | "Prototype / exploration" | "Industry engineering";
  featured?: boolean;
  url?: string;
  urlLabel?: string;
};

export const projectCategories: readonly ProjectCategory[] = [
  "Web platforms",
  "Mobile apps",
  "AI & research",
  "Developer tools",
  "Games",
  "Business systems",
] as const;

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "quiz",
    name: "SSC / HSC Science Quiz",
    category: "Web platforms",
    summary: "A science-exam learning platform bringing chapter-based quizzes and practice journeys into one web experience.",
    technologies: ["Next.js", "TypeScript", "FastAPI"],
    visual: "education",
    kind: "Built project",
    featured: true,
    url: "https://github.com/niloy-datta/sschsc-quiz.com",
    urlLabel: "View source",
  },
  {
    id: "agrilume",
    name: "AgriLume AI",
    category: "AI & research",
    summary: "An agriculture-focused AI exploration connecting intelligent product ideas with practical field needs.",
    technologies: ["AI / ML", "Web & mobile", "Agriculture"],
    visual: "agriculture",
    kind: "Prototype / exploration",
    featured: true,
  },
  {
    id: "expense",
    name: "Expense Tracker",
    category: "Mobile apps",
    summary: "Personal finance tracking interfaces with budgets, transactions and readable spending insights.",
    technologies: ["React Native", "TypeScript", "Mobile UX"],
    visual: "finance",
    kind: "Built project",
    featured: true,
  },
  {
    id: "gym",
    name: "Gym & Nutrition Tracker",
    category: "Mobile apps",
    summary: "Fitness and nutrition tracking concepts built around routines, progress and everyday usability.",
    technologies: ["Flutter", "Mobile UI", "Fitness"],
    visual: "fitness",
    kind: "Prototype / exploration",
    featured: true,
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain Systems",
    category: "Business systems",
    summary: "Engineering experience across freight, quoting, operations and shipment-related workflows.",
    technologies: ["Operations", "Web systems", "Workflow design"],
    visual: "logistics",
    kind: "Industry engineering",
    featured: true,
  },
  {
    id: "echoes",
    name: "Echoes Beyond Earth",
    category: "Games",
    summary: "An interactive educational space journey blending mission storytelling with browser-based 3D exploration.",
    technologies: ["Next.js", "TypeScript", "3D Web"],
    visual: "space",
    kind: "Built project",
    featured: true,
    url: "https://echoes-beyond-earth.onrender.com/",
    urlLabel: "Explore experience",
  },
  {
    id: "cplusplus",
    name: "C++ Mastery",
    category: "Developer tools",
    summary: "A programming-learning project centered on C++ concepts, practice and a structured learning experience.",
    technologies: ["C++", "Education", "Developer UX"],
    visual: "terminal",
    kind: "Prototype / exploration",
  },
  {
    id: "editor",
    name: "Multi-language Coding Editor",
    category: "Developer tools",
    summary: "An editor-oriented project for working with Java, C++ and Python in a unified coding environment.",
    technologies: ["Java", "C++", "Python"],
    visual: "code",
    kind: "Prototype / exploration",
  },
  {
    id: "webdriver",
    name: "WebDriver & QA Automation",
    category: "Developer tools",
    summary: "A browser automation and software testing exploration focused on making web workflows easier to verify.",
    technologies: ["WebDriver", "QA", "Automation"],
    visual: "terminal",
    kind: "Prototype / exploration",
  },
  {
    id: "rentals",
    name: "Global House Renting",
    category: "Web platforms",
    summary: "A housing-discovery and rental website project shaped around finding places across locations.",
    technologies: ["Web platform", "Property", "UI/UX"],
    visual: "housing",
    kind: "Prototype / exploration",
  },
  {
    id: "jobs",
    name: "Non-Corporate Job Finder",
    category: "Web platforms",
    summary: "A web and application concept for discovering work beyond traditional corporate career pathways.",
    technologies: ["Job discovery", "Web & app", "Matching"],
    visual: "work",
    kind: "Prototype / exploration",
  },
  {
    id: "shooter",
    name: "Shooter Game",
    category: "Games",
    summary: "A gameplay-focused development project exploring interactive controls and game experiences.",
    technologies: ["Game design", "Interaction", "Programming"],
    visual: "shooter",
    kind: "Prototype / exploration",
  },
  {
    id: "garments",
    name: "Garments Workflow Project",
    category: "Business systems",
    summary: "A garment-industry project exploring digital experiences for business and operational workflows.",
    technologies: ["Garments", "Operations", "Software"],
    visual: "garments",
    kind: "Prototype / exploration",
  },
  {
    id: "roomforge",
    name: "RoomForge",
    category: "Web platforms",
    summary: "An interactive 2D flooring studio with material estimation and renovation planning tools.",
    technologies: ["Next.js", "TypeScript", "2D tools"],
    visual: "architecture",
    kind: "Built project",
    url: "https://github.com/niloy-datta/roomforge",
    urlLabel: "View source",
  },
  {
    id: "novacommerce",
    name: "NovaCommerce",
    category: "Business systems",
    summary: "An engineering platform exploring a distributed storefront, product catalog, inventory and checkout foundations.",
    technologies: ["Spring Boot", "Next.js", "PostgreSQL"],
    visual: "commerce",
    kind: "Prototype / exploration",
  },
  {
    id: "atlas",
    name: "ATLAS / SkillHub",
    category: "Business systems",
    summary: "Workforce-platform infrastructure focused on verified identities, organizations and flexible work.",
    technologies: ["Spring Boot", "PostgreSQL", "Auth"],
    visual: "workforce",
    kind: "Prototype / exploration",
  },
] as const;
