import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata:Metadata={title:"Pricing & Engagement Models",description:"KADHAVIRA LABS engagement models for early-stage SaaS pilots, implementation, integrations and custom product development.",alternates:{canonical:"https://niloy-datta.github.io/tech-startup/pricing/"}};

const models=[
  {title:"Pilot discovery",kind:"Scoped proposal",description:"Define the workflow, intended buyers, acceptance criteria and a lean pilot before committing to a full product.",includes:["Discovery and requirements","MVP scope and estimate","Demo and validation plan"]},
  {title:"Product subscription",kind:"Planned recurring model",description:"Future monthly or annual SaaS access once a product is validated, production-ready and published.",includes:["Product access by plan","Onboarding options","Usage terms and support"]},
  {title:"Custom engineering",kind:"Project-based proposal",description:"Web platforms, integrations, applied AI and design services tailored to a verified brief.",includes:["Clear project scope","Delivery milestones","Integration and support options"]},
];
export default function PricingPage(){
  return <><section className="ps-subhero"><div className="container ps-subhero-inner"><span className="ps-kicker"><span/> SIMPLE, HONEST ENGAGEMENT</span><h1>Pricing should be clear.<br/><em>So should the scope.</em></h1><p>We have not published subscription prices for products that are still pilot concepts. We start with your requirements and give you a scoped proposal.</p><Link className="ps-button" href="/contact">Discuss pricing <ArrowUpRight size={18}/></Link></div></section><section className="ps-simple-section"><div className="container"><div className="ps-heading"><div><span className="ps-kicker"><span/> ENGAGEMENT OPTIONS</span><h2>Choose the right<br/><em>starting point.</em></h2></div><p>These describe proposed engagement structures, not fixed-priced or currently live SaaS plans.</p></div><div className="ps-pricing-grid">{models.map(model=><article className="ps-pricing-card" key={model.title}><span>{model.kind}</span><h2>{model.title}</h2><p>{model.description}</p><ul>{model.includes.map(point=><li key={point}><CheckCircle2 size={17}/>{point}</li>)}</ul><Link href="/contact">Request a proposal <ArrowUpRight size={18}/></Link></article>)}</div><p className="ps-pricing-disclaimer">Possible future revenue models include subscriptions, onboarding/integration fees, usage-based APIs, enterprise support and consulting. No live checkout or subscription offering is implied.</p></div></section></>;
}
