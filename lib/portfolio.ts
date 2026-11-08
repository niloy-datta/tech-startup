export const portfolioCategories = [
  { id:"01", slug:"ai-automation", name:"AI & Automation", phase:1, role:"Core", buyer:"SMEs, sales and operations teams", description:"Human-reviewed AI assistants, document understanding and workflow automation.", examples:["AI business assistants","Email and follow-up automation","Document processing","Workflow builders"] },
  { id:"02", slug:"saas-business-software", name:"SaaS & Business Software", phase:1, role:"Core", buyer:"B2B sales and service businesses", description:"Focused business products with clear roles, secure workspaces and repeatable value.", examples:["CRM","Quotation & proposal builder","Inventory and orders","Team workspaces"] },
  { id:"03", slug:"web-mobile-applications", name:"Web & Mobile Applications", phase:1, role:"Core", buyer:"Startups, businesses and education teams", description:"Responsive websites, web platforms and mobile-first customer experiences.", examples:["Business web apps","Customer portals","Booking experiences","Storefronts"] },
  { id:"04", slug:"developer-tools-apis", name:"Developer Tools & APIs", phase:2, role:"Candidate add-on", buyer:"Developers and engineering teams", description:"Developer productivity tools, readable reports and better API workflows.", examples:["API testing","Repository insights","Code review assistant","Documentation"] },
  { id:"05", slug:"cloud-devops", name:"Cloud & DevOps", phase:3, role:"Exploration", buyer:"Small SaaS and engineering teams", description:"Cloud deployment, reliability visibility and pragmatic operations tooling.", examples:["Uptime monitoring","Deployment insights","Backup workflows","Cost visibility"] },
  { id:"06", slug:"cybersecurity-privacy", name:"Cybersecurity & Privacy", phase:3, role:"Exploration", buyer:"Web agencies and SaaS builders", description:"Security-aware engineering and future authorized auditing utilities.", examples:["Dependency checks","Secret-leak detection","Access audits","Security reporting"] },
  { id:"07", slug:"data-analytics-intelligence", name:"Data Analytics & Intelligence", phase:2, role:"Candidate add-on", buyer:"Sales, finance and operations teams", description:"KPI dashboards, reporting and data-quality workflows that support decisions.", examples:["KPI dashboards","Reporting","Forecasting","Data quality"] },
  { id:"08", slug:"ecommerce-marketing", name:"E-commerce & Marketing Technology", phase:3, role:"Exploration", buyer:"Commerce brands and digital agencies", description:"Commerce workflows connecting messages, orders, support and performance.", examples:["Social commerce hub","Lead capture","Customer support tools","Marketing analytics"] },
  { id:"09", slug:"industry-solutions", name:"Industry-Specific Solutions", phase:3, role:"Exploration", buyer:"Trading, logistics, agriculture and education", description:"Specialized workflows shaped around a validated industry's requirements.", examples:["Export RFQ tools","Shipment workflows","Sourcing workspace","AgriTech insights"] },
  { id:"10", slug:"research-labs", name:"Research & Labs", phase:3, role:"Exploration", buyer:"Research partners and innovation teams", description:"Applied research notes, experiment demos and collaboration opportunities.", examples:["Technical explorations","Prototype demos","Research partnerships"] },
] as const;

export const flagshipProducts = [
  {
    slug:"rfq-quotation-assistant",
    name:"RFQ & Quotation Assistant",
    eyebrow:"FLAGSHIP PILOT / 01",
    category:"AI & Automation + B2B SaaS",
    status:"Coming Soon",
    summary:"From an incoming request to a review-ready quotation, with a human in control.",
    audience:"Trading, sourcing and B2B sales teams",
    problem:"RFQs arrive in different formats, details get scattered and preparing consistent quotes takes repeated manual effort.",
    solution:"A proposed workspace for capturing requests, extracting action items, drafting quotations and tracking every decision.",
    features:["Email and RFQ summarization","Structured task and requirement extraction","Review-ready quotation drafts","Activity history and document context","Explicit approval before any external action"],
    flow:["Capture a request","Extract the essentials","Prepare a quotation draft","Review and approve","Track the outcome"],
    model:"Pilot / proposal-based pricing",
    note:"Pilot concept under validation. No live product access or customer results are claimed.",
  },
  {
    slug:"workflow-email-assistant",
    name:"Workflow & Email Automation Assistant",
    eyebrow:"FLAGSHIP PILOT / 02",
    category:"AI & Automation",
    status:"Coming Soon",
    summary:"Turn repetitive email work into a clear, reviewable sequence of actions.",
    audience:"Service businesses, operations and sales teams",
    problem:"Manual follow-ups, scattered tasks and inconsistent email preparation slow teams down.",
    solution:"A proposed assistant that finds tasks, prepares drafts and helps teams move work forward with approval controls.",
    features:["Email and follow-up workflow planning","Task extraction from communications","AI-assisted message drafts","Human review and explicit send approval","Action logs for accountability"],
    flow:["Connect the workflow","Identify tasks","Draft the response","Approve the action","Review the log"],
    model:"Pilot / proposal-based pricing",
    note:"Pilot concept under validation. Sending emails or making external changes always requires explicit human approval.",
  },
] as const;

export type FlagshipProduct = (typeof flagshipProducts)[number];
export function findFlagshipProduct(slug: string) {
  return flagshipProducts.find((product) => product.slug === slug);
}
