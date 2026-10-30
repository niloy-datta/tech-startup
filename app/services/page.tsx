import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/site";
import { ProjectShowcase } from "@/components/project-showcase";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore NBD services and selected engineering projects across web, mobile, AI, developer tools, games and business systems.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="interior-hero">
        <div className="container"><span className="eyebrow light"><span className="eyebrow-dot" /> OUR EXPERTISE</span>
          <h1>Solutions made for <em>your next move.</em></h1>
          <p>From websites and mobile apps to AI, games and business systems, our approach draws on the products and problems our team has explored.</p>
        </div>
      </section>
      <section className="section service-details-section"><div className="container">
        <div className="section-intro"><span className="eyebrow"><span className="eyebrow-dot" /> WHAT WE CAN BUILD</span><h2>Expertise that <em>connects the dots.</em></h2></div>
        <div className="service-details">
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.slug}>
              <div className="detail-icon"><ServiceIcon name={service.icon} size={32}/></div>
              <div className="detail-copy">
                <span className="detail-number">SERVICE / {service.number}</span><h3>{service.name}</h3><p>{service.details}</p>
                <ul>{service.points.map((point) => <li key={point}><Check size={17}/>{point}</li>)}</ul>
              </div>
              <Link href={`/contact?product=${encodeURIComponent(service.name === "Website development" ? "Website" : service.name === "Mobile app development" ? "Mobile app" : service.name === "Custom software" ? "Custom platform" : "Still exploring")}`} className="detail-link" aria-label={`Discuss ${service.name}`}><ArrowUpRight size={25}/></Link>
            </article>
          ))}
        </div>
      </div></section>

      <ProjectShowcase mode="featured" />

      <section className="section deliverables-section">
        <div className="container">
          <div className="section-intro split-heading"><div><span className="eyebrow"><span className="eyebrow-dot"/> WHAT GOOD DELIVERY CONSIDERS</span><h2>Not just the launch. <em>The whole experience.</em></h2></div><p>We agree the exact deliverables with each client. Our approach considers the important foundations before and after release.</p></div>
          <div className="deliverables-grid">
            <article><span>01</span><h3>Clarity first</h3><p>Requirements, audiences, product priorities and milestones.</p></article>
            <article><span>02</span><h3>Designed for people</h3><p>Clear journeys, responsive layouts and accessible interactions.</p></article>
            <article><span>03</span><h3>Engineered with care</h3><p>Maintainable code, sensible architecture and performance-minded decisions.</p></article>
            <article><span>04</span><h3>Ready for what&apos;s next</h3><p>Testing, documentation and an agreed plan for future improvements.</p></article>
          </div>
          <p className="delivery-footnote">Specific testing, deliverables and support are defined in the scope of each engagement.</p>
        </div>
      </section>

      <section className="mini-cta"><div className="container"><div><span>YOUR IDEA DESERVES A PLAN</span><h2>Not sure where to start?</h2></div><Link href="/contact" className="btn btn-lime">Let&apos;s figure it out <ArrowRight size={18}/></Link></div></section>
    </>
  );
}
