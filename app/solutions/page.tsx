import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Boxes, CheckCircle2, LayoutDashboard, ShoppingBag, Smartphone, Truck } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { SolutionPreview } from "@/components/capability-preview";

export const metadata: Metadata = {
  title: "Digital Solutions & Product Ideas",
  description: "Explore practical KADHAVIRA LABS product directions for SaaS, e-commerce, operations, AI, mobile applications and internal business portals.",
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/solutions/" },
};

const icons = { commerce: ShoppingBag, operations: Truck, saas: Boxes, automation: Bot, mobile: Smartphone, portals: LayoutDashboard };

export default function SolutionsPage() {
  const featured = [solutions[2],solutions[0],solutions[1],solutions[3],solutions[5],solutions[4]];
  return (
    <>
      <section className="nd-subhero nd-solutions-hero">
        <div className="container nd-subhero-inner nd-subhero-inner-compact">
          <span className="nd-eyebrow"><span/> INDUSTRIES / PRODUCT OPPORTUNITIES</span>
          <h1>Industry-focused<br/><em>digital solutions.</em></h1>
          <p>Useful software begins with a clear challenge. Explore six ways KADHAVIRA LABS can help turn complex business needs into purposeful digital experiences.</p>
          <Link href="/contact" className="nd-btn nd-btn-primary">Discuss your challenge <ArrowUpRight size={18}/></Link>
        </div>
      </section>
      <section className="nd-solutions-section">
        <div className="container">
          <div className="nd-section-head"><span className="nd-eyebrow"><span/> WHAT WE CAN HELP CREATE</span><h2>Built around <em>real needs.</em></h2><p>These are possible product directions—not claims of completed client engagements.</p></div>
          <div className="nd-solutions-grid">
            {featured.map((item) => {
              const Icon=icons[item.slug];
              return (
                <article className={`nd-solution-card nd-solution-${item.slug}`} id={item.slug} key={item.slug}>
                  <div className="nd-solution-preview"><SolutionPreview slug={item.slug}/></div>
                  <div className="nd-solution-content">
                    <span className="nd-solution-label"><Icon size={17}/> {item.number} / SOLUTIONS</span>
                    <h3>{item.name}</h3><p>{item.description}</p>
                    <ul>{item.features.slice(0,2).map(feature=><li key={feature}><CheckCircle2 size={15}/>{feature}</li>)}</ul>
                    <Link href="/contact" aria-label={`Discuss ${item.name} solutions`} className="nd-solution-go">Explore this solution <ArrowUpRight size={18}/></Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="nd-art-disclaimer">Illustrative interface previews. Every solution is scoped around your actual requirements and budget.</p>
        </div>
      </section>
      <section className="nd-service-method nd-solutions-process">
        <div className="container nd-service-method-inner">
          <span className="nd-eyebrow"><span/> HOW IDEAS BECOME PRODUCTS</span>
          <h2>A clear process.<br/><em>Better outcomes.</em></h2>
          <div className="nd-service-method-grid nd-method-four">
            <div><strong>01 / DISCOVER</strong><p>Understand your goals, users and market.</p></div>
            <div><strong>02 / DESIGN</strong><p>Shape interfaces and a practical plan.</p></div>
            <div><strong>03 / DEVELOP</strong><p>Build with maintainable code and care.</p></div>
            <div><strong>04 / EVOLVE</strong><p>Learn from feedback and keep improving.</p></div>
          </div>
          <Link href="/#process" className="nd-btn nd-btn-outline">See our approach <ArrowRight size={18}/></Link>
        </div>
      </section>
      <section className="nd-end-cta"><div className="container nd-end-cta-inner"><div><span>LET&apos;S FIND YOUR DIRECTION</span><h2>Different challenge?<br/><em>We&apos;re listening.</em></h2></div><Link href="/contact" className="nd-btn nd-btn-primary">Talk to KADHAVIRA LABS <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
