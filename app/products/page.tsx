import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { flagshipProducts } from "@/lib/portfolio";
import { ProductExplorer } from "@/components/product-explorer";

export const metadata: Metadata = {
  title: "Products — Pilot Concepts & Technology Portfolio",
  description: "Explore KADHAVIRA LABS flagship pilot concepts and its ten-category roadmap across AI, business SaaS, web platforms and future technology.",
  alternates:{canonical:"https://niloy-datta.github.io/tech-startup/products/"},
};

export default function ProductsPage() {
  return (
    <>
      <section className="ps-subhero"><div className="container ps-subhero-inner"><span className="ps-kicker"><span/> KADHAVIRA LABS / PRODUCTS</span><h1>Products with purpose.<br/><em>Built in the right order.</em></h1><p>Explore two flagship pilots and a long-term technology portfolio. Product availability is stated plainly; concepts are not presented as launched platforms.</p><div className="ps-hero-actions"><Link href="#flagships" className="ps-button">Explore flagship pilots <ArrowRight size={18}/></Link><Link href="/contact" className="ps-text-button">Discuss a pilot <ArrowUpRight size={18}/></Link></div></div></section>
      <section className="ps-products-detail" id="flagships"><div className="container"><div className="ps-heading"><div><span className="ps-kicker"><span/> PHASE 1 / FLAGSHIP PILOTS</span><h2>Start with the<br/><em>work that matters.</em></h2></div><p>Two workflow ideas for B2B teams—designed around useful output, clear accountability and explicit human approval.</p></div>
        <div className="ps-pilot-list">{flagshipProducts.map((product,index)=><article className="ps-pilot-row" key={product.slug}><div className="ps-pilot-number">0{index+1}<span className="ps-status"><i/>{product.status}</span></div><div><span className="ps-flagship-category">{product.category}</span><h3>{product.name}</h3><p>{product.summary}</p><ul>{product.features.slice(0,3).map(feature=><li key={feature}><CheckCircle2 size={16}/>{feature}</li>)}</ul></div><Link href={"/products/"+product.slug} aria-label={"Details for "+product.name}>Product details <ArrowUpRight size={19}/></Link></article>)}</div>
      </div></section>
      <section className="ps-products-catalog" id="portfolio"><div className="container"><div className="ps-heading"><div><span className="ps-kicker"><span/> PORTFOLIO / TEN CATEGORIES</span><h2>Explore the<br/><em>possibility space.</em></h2></div><p>Only the first three categories are a Phase 1 focus. Phase 2 and 3 areas are future opportunities—not available products.</p></div><ProductExplorer/></div></section>
      <section className="ps-guardrail"><div className="container ps-guardrail-inner"><ShieldCheck size={33}/><div><h2>Helpful AI. Human decisions.</h2><p>Drafts can be assisted by AI. Emails, purchases and other external actions require human review and explicit approval before execution.</p></div><Link href="/contact">Request a pilot conversation <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
