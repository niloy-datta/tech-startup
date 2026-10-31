import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, Cloud, Code2, FlaskConical, Layers3, Network, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Labs — AI, Software, SaaS, Cloud & Research",
  description: "Explore the five practice areas of Kadhavira Labs: applied AI, software engineering, SaaS product development, cloud systems, and research-driven experimentation.",
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/labs/" },
};

const pillars = [
  {
    number: "01",
    slug: "ai",
    label: "ARTIFICIAL INTELLIGENCE",
    title: "AI that solves real problems.",
    description: "Explore grounded, useful AI features: knowledge assistants, intelligent workflows, and human-centered machine-learning experiences.",
    icon: BrainCircuit,
    tags: ["AI product integration", "Applied ML", "Knowledge workflows"],
  },
  {
    number: "02",
    slug: "software",
    label: "SOFTWARE ENGINEERING",
    title: "Software built to matter.",
    description: "Design and engineer applications, internal systems, integrations, and digital products around your specific operational challenges.",
    icon: Code2,
    tags: ["Web & mobile", "APIs and integrations", "Custom platforms"],
  },
  {
    number: "03",
    slug: "saas",
    label: "SAAS PRODUCTS",
    title: "From first idea to a product.",
    description: "Scope a focused MVP, build a great core experience, and shape the foundations for the next iteration.",
    icon: Layers3,
    tags: ["MVP planning", "Product UX", "Subscription-ready architecture"],
  },
  {
    number: "04",
    slug: "cloud",
    label: "CLOUD SYSTEMS",
    title: "Thoughtful, scalable foundations.",
    description: "Make informed choices about deployment, application architecture, data flows, observability, and secure engineering practices.",
    icon: Cloud,
    tags: ["Cloud architecture", "Deployment", "Reliability-minded engineering"],
  },
  {
    number: "05",
    slug: "research",
    label: "RESEARCH & EXPERIMENTATION",
    title: "Explore what could come next.",
    description: "Turn early technical questions into prototypes and experiments, with a particular interest in AI systems and practical emerging technologies.",
    icon: FlaskConical,
    tags: ["Prototyping", "AI systems exploration", "Product experiments"],
  },
] as const;

export default function LabsPage() {
  return (
    <>
      <section className="kl-labs-hero">
        <div className="container kl-labs-hero-grid">
          <div className="kl-labs-intro">
            <span className="nd-eyebrow"><span/> KADHAVIRA LABS / OUR PRACTICE</span>
            <h1>Ideas become<br/><em>possibilities.</em><br/>Then products.</h1>
            <p>Five connected disciplines. One mission: make advanced technology useful, understandable, and thoughtfully engineered.</p>
            <Link href="#practice-areas" className="nd-btn nd-btn-primary">Explore our disciplines <ArrowRight size={18}/></Link>
          </div>
          <div className="kl-labs-visual" aria-label="Decorative connected research and engineering network">
            <div className="kl-labs-orbit kl-orbit-one" aria-hidden="true"/>
            <div className="kl-labs-orbit kl-orbit-two" aria-hidden="true"/>
            <div className="kl-labs-core"><Sparkles size={36} aria-hidden="true"/><strong>K</strong><span>LABS</span></div>
            <span className="kl-labs-node kl-node-ai"><BrainCircuit size={20}/> AI</span>
            <span className="kl-labs-node kl-node-software"><Code2 size={20}/> SOFTWARE</span>
            <span className="kl-labs-node kl-node-saas"><Layers3 size={20}/> SAAS</span>
            <span className="kl-labs-node kl-node-cloud"><Cloud size={20}/> CLOUD</span>
            <span className="kl-labs-node kl-node-research"><FlaskConical size={20}/> RESEARCH</span>
          </div>
        </div>
        <div className="container kl-labs-hero-bottom">AI <span>✳</span> SOFTWARE <span>✳</span> SAAS <span>✳</span> CLOUD <span>✳</span> RESEARCH</div>
      </section>
      <section className="kl-labs-practices" id="practice-areas" aria-labelledby="kl-practice-title">
        <div className="container">
          <header className="kl-section-heading"><span className="nd-eyebrow"><span/> OUR FIVE PRACTICE AREAS</span><h2 id="kl-practice-title">Connected thinking.<br/><em>Distinct capabilities.</em></h2><p>From exploratory prototypes to business-ready software, we work at the intersection of product needs and engineering possibilities.</p></header>
          <div className="kl-pillar-grid">
            {pillars.map(({number,slug,label,title,description,icon:Icon,tags})=>(
              <article className={"kl-pillar kl-pillar-"+slug} id={slug} key={slug}>
                <div className="kl-pillar-top"><span>{number} / 05</span><Icon size={28} strokeWidth={1.5} aria-hidden="true"/></div>
                <span className="kl-pillar-label">{label}</span>
                <h3>{title}</h3><p>{description}</p>
                <div className="kl-pillar-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div>
                <Link href="/contact" className="kl-pillar-link">Explore a project <ArrowUpRight size={17}/></Link>
              </article>
            ))}
          </div>
          <p className="kl-labs-note">Practice areas describe the kinds of problems we explore and services we can discuss. They are not claims of published research, proprietary AI models, cloud certifications, or customer outcomes.</p>
        </div>
      </section>
      <section className="kl-labs-approach">
        <div className="container kl-labs-approach-grid">
          <div><span className="nd-eyebrow"><span/> OUR ENGINEERING APPROACH</span><h2>Curiosity meets<br/><em>craft.</em></h2><p>We value clear problem definitions, practical prototypes, maintainable systems, and the freedom to question assumptions.</p></div>
          <div className="kl-approach-items"><div><Network size={23}/><h3>Connect the dots</h3><p>Bring design, technical architecture and product thinking into the same conversation.</p></div><div><Workflow size={23}/><h3>Iterate with purpose</h3><p>Validate useful ideas before expanding complexity.</p></div><div><ShieldCheck size={23}/><h3>Build responsibly</h3><p>Respect privacy, accessibility, security and the boundaries of what technology can do.</p></div></div>
        </div>
      </section>
      <section className="nd-end-cta"><div className="container nd-end-cta-inner"><div><span>YOUR IDEA / OUR NEXT CONVERSATION</span><h2>Let&apos;s explore<br/><em>what&apos;s possible.</em></h2></div><Link href="/contact" className="nd-btn nd-btn-primary">Start a project <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
