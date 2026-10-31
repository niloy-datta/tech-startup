import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { CapabilityPreview } from "@/components/capability-preview";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore NBD's website development, mobile applications, custom software, UI/UX, AI and digital product support services.",
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="nd-subhero nd-services-hero">
        <div className="container nd-subhero-inner nd-subhero-inner-compact">
          <span className="nd-eyebrow"><span/> OUR EXPERTISE / SIX CORE SERVICES</span>
          <h1>Everything you need<br/>to build <em>what&apos;s next.</em></h1>
          <p>From idea to launch and beyond, we bring product thinking, design and engineering together to build things people love using.</p>
          <Link href="/contact" className="nd-btn nd-btn-primary">Let&apos;s talk about your project <ArrowUpRight size={18}/></Link>
        </div>
      </section>

      <section className="nd-service-section" aria-label="NBD services">
        <div className="container">
          <div className="nd-service-grid">
            {services.map((service,index) => (
              <article className="nd-service-card" id={service.slug} key={service.slug}>
                <div className="nd-service-card-head">
                  <div className="nd-service-icon"><ServiceIcon name={service.icon} size={25}/></div>
                  <span>{service.number} / 06</span>
                </div>
                <div className="nd-service-art-wrap"><CapabilityPreview type={service.icon}/></div>
                <div className="nd-service-card-copy">
                  <h2>{service.name}</h2>
                  <p>{service.details}</p>
                  <ul>{service.points.map(point => <li key={point}><Check size={15}/>{point}</li>)}</ul>
                  <Link href={`/contact?product=${encodeURIComponent(service.name === "Website development" ? "Website" : service.name === "Mobile app development" ? "Mobile app" : service.name === "Custom software" ? "Custom platform" : "Still exploring")}`} className="nd-service-link">Discuss this service <ArrowUpRight size={18}/></Link>
                </div>
                <span className="nd-service-card-index" aria-hidden="true">0{index+1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nd-service-method">
        <div className="container nd-service-method-inner">
          <span className="nd-eyebrow"><span/> A BETTER WAY TO BUILD</span>
          <h2>Thoughtful strategy.<br/><em>Beautiful execution.</em></h2>
          <div className="nd-service-method-grid">
            <div><strong>01 / UNDERSTAND</strong><p>Define goals, audience and what success means for the product.</p></div>
            <div><strong>02 / DESIGN</strong><p>Shape an intuitive experience before engineering it.</p></div>
            <div><strong>03 / SHIP</strong><p>Build, test and iterate with clear priorities and maintainable code.</p></div>
          </div>
          <Link href="/work" className="nd-btn nd-btn-outline">Explore our work <ArrowRight size={18}/></Link>
        </div>
      </section>
      <section className="nd-end-cta"><div className="container nd-end-cta-inner"><div><span><Sparkles size={16}/> YOUR NEXT IDEA STARTS HERE</span><h2>Let&apos;s build something<br/><em>worth remembering.</em></h2></div><Link href="/contact" className="nd-btn nd-btn-primary">Start a project <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
