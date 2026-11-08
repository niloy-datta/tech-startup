import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers3, ShieldCheck } from "lucide-react";
import { flagshipProducts, portfolioCategories } from "@/lib/portfolio";

export function PortfolioHighlights() {
  return (
    <>
      <section className="ps-featured" id="products" aria-labelledby="ps-products-heading">
        <div className="container">
          <div className="ps-heading">
            <div><span className="ps-kicker"><span/> PRODUCTS / IN DEVELOPMENT</span><h2 id="ps-products-heading">Big ambitions.<br/><em>Focused first releases.</em></h2></div>
            <div className="ps-heading-aside"><p>We are validating two B2B pilot concepts before expanding. Explore the direction, not a promise of software already live.</p><Link href="/products">Explore product portfolio <ArrowUpRight size={18}/></Link></div>
          </div>
          <div className="ps-flagship-grid">
            {flagshipProducts.map((product,index) => (
              <article className={"ps-flagship ps-flagship-"+index} key={product.slug}>
                <div className="ps-flagship-top"><span>0{index+1} / FLAGSHIP PILOT</span><span className="ps-status"><i/> {product.status}</span></div>
                <div className="ps-flagship-art" aria-hidden="true"><div className="ps-window"><div className="ps-window-top"><span className="ps-window-dots">● ● ●</span><span>K / PRODUCT CONCEPT</span></div><div className="ps-window-inner"><span className="ps-window-cap">INTELLIGENT WORKFLOW</span><div className="ps-window-row"><span className="ps-window-circle">✳</span><div><b>{index===0?"Incoming RFQ":"Follow-up workflow"}</b><small>{index===0?"Requirements captured":"Tasks identified"}</small></div><CheckCircle2 size={18}/></div><div className="ps-window-track"><i/><i/><i/><i/></div><div className="ps-window-approve"><ShieldCheck size={16}/> Human review required <span>↗</span></div></div></div></div>
                <div className="ps-flagship-copy"><span className="ps-flagship-category">{product.category}</span><h3>{product.name}</h3><p>{product.summary}</p><Link href={"/products/"+product.slug} aria-label={"Explore "+product.name}>Explore concept <ArrowUpRight size={17}/></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ps-categories" id="categories" aria-labelledby="ps-categories-heading">
        <div className="container">
          <div className="ps-heading ps-heading-compact"><div><span className="ps-kicker"><span/> THE PRODUCT UNIVERSE</span><h2 id="ps-categories-heading">Ten possibilities.<br/><em>Three priorities.</em></h2></div><p>Our portfolio map shows where we&apos;re heading. AI, SaaS and web applications lead Phase 1; other areas follow customer validation.</p></div>
          <div className="ps-categories-grid">
            {portfolioCategories.map((category) => (
              <Link href={"/products#"+category.slug} className={"ps-category "+(category.phase===1?"ps-category-core":"")} key={category.slug}>
                <div className="ps-category-head"><span>{category.id}</span><span>{category.phase===1?"PHASE 1 / CORE":"PHASE "+category.phase}</span></div>
                <h3>{category.name}</h3><p>{category.description}</p><span className="ps-category-foot">{category.role} <ArrowUpRight size={16}/></span>
              </Link>
            ))}
          </div>
          <div className="ps-category-note"><Layers3 size={19}/><span>Our focus is intentionally narrow: customer interviews and paid pilots come before broad product expansion.</span><Link href="/products">View all categories <ArrowRight size={18}/></Link></div>
        </div>
      </section>
    </>
  );
}
