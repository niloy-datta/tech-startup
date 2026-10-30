import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, ShoppingBag, Truck, Boxes, Bot, Smartphone, LayoutDashboard } from "lucide-react";
import { solutions } from "@/lib/solutions";
export const metadata: Metadata = {
 title: "Digital Solutions & Product Ideas",
 description: "Explore the kinds of digital products NBD can help you build: e-commerce, logistics dashboards, SaaS MVPs, AI workflows and mobile apps.",
 alternates: { canonical: "https://niloy-datta.github.io/tech-startup/solutions/" }
};
const icons = { commerce: ShoppingBag, operations: Truck, saas: Boxes, automation: Bot, mobile: Smartphone, portals: LayoutDashboard };
export default function SolutionsPage() {
 return <>
  <section className="interior-hero solutions-hero"><div className="container">
   <span className="eyebrow light"><span className="eyebrow-dot" /> SOLUTIONS FOR THE REAL WORLD</span>
   <h1>Different challenges.<br/><em>Thoughtfully built solutions.</em></h1>
   <p>We start with your problem and find the right product direction. These examples are possible solutions—not completed client case studies.</p>
   <Link href="/contact" className="btn btn-lime">Discuss your idea <ArrowUpRight size={18}/></Link>
  </div></section>
  <section className="section solution-directory-section"><div className="container">
    <div className="section-intro split-heading"><div><span className="eyebrow"><span className="eyebrow-dot"/> WHAT WE CAN HELP CREATE</span><h2>Ideas shaped around <em>real needs.</em></h2></div>
    <p>From customer-facing products to internal business systems, the goal is always useful technology.</p></div>
    <div className="solution-directory">
    {solutions.map(item => { const Icon = icons[item.slug]; return <article className="solution-directory-card" id={item.slug} key={item.slug}>
      <div className="solution-directory-header"><span className="solution-directory-icon"><Icon size={27}/></span><span>{item.number} / 06</span></div>
      <span className="solution-label">{item.name}</span><h3>{item.headline}</h3><p>{item.description}</p>
      <ul>{item.features.map(feature => <li key={feature}><CheckCircle2 size={15}/>{feature}</li>)}</ul>
      <div className="solution-directory-footer"><small>{item.outcome}</small><Link href="/contact" aria-label={"Discuss " + item.name}><ArrowUpRight size={21}/></Link></div>
    </article>; })}
    </div>
    <p className="solution-disclaimer">Concept directions only; scope, deliverables, timeline and price depend on the specific project.</p>
  </div></section>
  <section className="solution-next-section"><div className="container solution-next-inner">
    <div><span className="eyebrow light"><span className="eyebrow-dot"/> YOUR IDEA IS UNIQUE</span><h2>Don&apos;t see it listed? <em>Let&apos;s explore it.</em></h2><p>Tell us what you&apos;re trying to solve, and we&apos;ll explore a practical starting point.</p></div>
    <Link href="/contact" className="btn btn-lime">Start a conversation <ArrowRight size={18}/></Link>
  </div></section>
 </>;
}
