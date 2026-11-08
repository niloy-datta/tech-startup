import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { findFlagshipProduct, flagshipProducts } from "@/lib/portfolio";

export function generateStaticParams() {
  return flagshipProducts.map((product)=>({slug:product.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params;
  const product=findFlagshipProduct(slug);
  return {title:product?.name??"Product",description:product?.summary??"KADHAVIRA LABS product portfolio",alternates:{canonical:"https://niloy-datta.github.io/tech-startup/products/"+slug+"/"}};
}

export default async function ProductDetailPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const product=findFlagshipProduct(slug);
  if(!product) notFound();
  return (
    <>
      <section className="ps-subhero ps-product-hero"><div className="container ps-subhero-inner"><Link className="ps-back-link" href="/products"><ArrowLeft size={16}/> All products</Link><span className="ps-kicker"><span/> {product.eyebrow}</span><div className="ps-detail-status"><span className="ps-status"><i/>{product.status}</span><span>{product.category}</span></div><h1>{product.name}</h1><p>{product.summary}</p><div className="ps-hero-actions"><Link className="ps-button" href="/contact">Discuss this pilot <ArrowUpRight size={18}/></Link><Link className="ps-text-button" href="#features">See proposed features <ArrowRight size={18}/></Link></div></div></section>
      <section className="ps-product-body"><div className="container ps-product-columns"><div className="ps-product-story"><span className="ps-kicker"><span/> THE OPPORTUNITY</span><h2>Built around a real workflow.</h2><h3>The challenge</h3><p>{product.problem}</p><h3>Proposed approach</h3><p>{product.solution}</p><p className="ps-product-audience"><strong>Designed for:</strong> {product.audience}</p></div><aside className="ps-product-side" id="features"><span className="ps-kicker"><span/> PLANNED MVP</span><h3>What the pilot explores</h3><ul>{product.features.map(feature=><li key={feature}><CheckCircle2 size={18}/>{feature}</li>)}</ul><div className="ps-product-side-note"><ShieldCheck size={19}/><span>No external action without human review and explicit approval.</span></div></aside></div></section>
      <section className="ps-workflow"><div className="container"><span className="ps-kicker"><span/> PRODUCT WORKFLOW / CONCEPT</span><h2>From input to <em>approved action.</em></h2><div className="ps-steps">{product.flow.map((step,index)=><div key={step}><span>0{index+1}</span><strong>{step}</strong></div>)}</div></div></section>
      <section className="ps-product-bottom"><div className="container ps-product-bottom-inner"><div><span className="ps-kicker"><span/> AVAILABILITY & PRICING</span><h2>Early-stage, by design.</h2><p>{product.note} Pricing approach: {product.model}. Contact us to discuss pilot fit, requirements and next steps.</p></div><Link href="/contact" className="ps-button">Request a conversation <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
