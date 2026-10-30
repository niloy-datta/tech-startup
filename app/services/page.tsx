import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore NBD's website, mobile app, custom software, UX/UI, AI integration and product support services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="interior-hero">
        <div className="container"><span className="eyebrow light"><span className="eyebrow-dot" /> OUR EXPERTISE</span>
          <h1>Solutions made for <em>your next move.</em></h1>
          <p>Ideas come in all shapes and sizes. We bring design thinking and modern development together to help yours move forward.</p>
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
              <Link href="/contact" className="detail-link" aria-label={`Discuss ${service.name}`}><ArrowUpRight size={25}/></Link>
            </article>
          ))}
        </div>
      </div></section>
      <section className="mini-cta"><div className="container"><div><span>YOUR IDEA DESERVES A PLAN</span><h2>Not sure where to start?</h2></div><Link href="/contact" className="btn btn-lime">Let's figure it out <ArrowRight size={18}/></Link></div></section>
    </>
  );
}
