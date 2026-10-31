import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { StudioHero } from "@/components/studio-hero";
import { FeaturedStories } from "@/components/featured-stories";
import { StudioPhilosophy } from "@/components/studio-philosophy";
import { CapabilityPreview } from "@/components/capability-preview";
import { ServiceIcon } from "@/components/service-icon";
import { ProjectPlanner } from "@/components/project-planner";
import { workSteps, services } from "@/lib/site";
import { solutions } from "@/lib/solutions";

const questions = [
  { q: "Can NBD build both a website and a mobile app?", a: "Yes. We can plan cohesive web and mobile experiences, or focus on one product first and expand as your needs evolve." },
  { q: "Can you work with an early-stage idea?", a: "Absolutely. We can help clarify requirements, shape a practical MVP and identify the features to build first." },
  { q: "Do you offer custom solutions?", a: "Yes. From internal dashboards to integrations and business platforms, the solution is shaped around your workflow rather than a fixed template." },
  { q: "What happens after launch?", a: "We can discuss ongoing improvements, monitoring, maintenance and additional features based on your product's needs." },
];

export default function Home() {
  return (
    <>
      <StudioHero />

      <section className="brand-ticker" aria-label="What NBD creates">
        <div className="ticker-inner"><span>WEB EXPERIENCES</span><Sparkles/><span>MOBILE APPLICATIONS</span><Sparkles/><span>PRODUCT DESIGN</span><Sparkles/><span>SMART SOFTWARE</span><Sparkles/><span>WEB EXPERIENCES</span><Sparkles/></div>
      </section>

      <FeaturedStories />


      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-intro split-heading">
            <div><span className="eyebrow"><span className="eyebrow-dot" /> WHAT WE DO</span><h2>Beautiful experiences. <em>Strong engineering.</em></h2></div>
            <p>From a first website to a full product platform, we make the complex feel clear—without compromising on craft.</p>
          </div>
          <div className="services-grid">
            {services.map((item) => (
              <Link href={`/services#${item.slug}`} className={`service-card service-card-${item.icon}`} key={item.number}>
                <div className="service-card-top"><span className="service-icon"><ServiceIcon name={item.icon} size={26}/></span><span className="service-num">/ {item.number}</span></div>
                <div className="service-card-visual" aria-hidden="true"><CapabilityPreview type={item.icon}/></div>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <span className="service-sample">{item.points[0]}</span>
                <span className="service-more">Explore service <ArrowUpRight size={19}/></span>
              </Link>
            ))}
          </div>
          <div className="section-link"><Link href="/services">See all services <ArrowRight size={18}/></Link><Link href="/work">See projects from our team <ArrowUpRight size={18}/></Link></div>
        </div>
      </section>

      <section className="section atelier-industries" id="solutions" aria-labelledby="industries-title">
        <div className="container">
          <div className="atelier-industries-top">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" /> WHERE WE CREATE VALUE</span>
              <h2 id="industries-title">Designed for people. <em>Built for business.</em></h2>
            </div>
            <p>From customer-facing platforms to the systems behind the scenes, we shape digital products around real operational needs.</p>
          </div>
          <div className="atelier-industries-list">
            {solutions.slice(0, 3).map((item) => (
              <Link className="atelier-industry" href={`/solutions#${item.slug}`} key={item.slug}>
                <span className="atelier-industry-number">{item.number} /</span>
                <span className="atelier-industry-name">{item.name}</span>
                <span className="atelier-industry-copy">{item.description}</span>
                <span className="atelier-industry-arrow" aria-hidden="true"><ArrowUpRight size={21} /></span>
              </Link>
            ))}
          </div>
          <div className="atelier-industries-footer"><Link href="/solutions">Explore all solutions <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <StudioPhilosophy />

      <ProjectPlanner />

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-intro split-heading">
            <div><span className="eyebrow"><span className="eyebrow-dot" /> HOW WE WORK</span><h2>A clear path from <em>what if</em> to what&apos;s next.</h2></div>
            <p>We believe great digital products are built with good questions, honest collaboration and a process that keeps moving.</p>
          </div>
          <div className="process-grid">
            {workSteps.map((item) => <div className="process-card" key={item.step}>
              <div className="process-number">{item.step} <span><ArrowUpRight size={20}/></span></div>
              <h3>{item.title}</h3><p>{item.description}</p>
            </div>)}
          </div>
        </div>
      </section>


      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-intro"><span className="eyebrow"><span className="eyebrow-dot" /> GOOD TO KNOW</span><h2>Some questions, <em>answered.</em></h2><p>Still wondering about something?</p><Link href="/contact" className="text-link">Ask us directly <ArrowUpRight size={18}/></Link></div>
          <div className="faq-items">
            {questions.map(({q,a},i) => <details className="faq-item" key={q}><summary><span className="faq-number">0{i+1}</span><span>{q}</span><span className="faq-plus">+</span></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="prefooter-section">
        <div className="container prefooter-inner">
          <span className="prefooter-mark"><Sparkles size={22} /> YOUR NEXT MOVE STARTS HERE</span>
          <div><h2>The next big thing?<br/><em>It starts with you.</em></h2><Link href="/contact" className="round-arrow" aria-label="Start a project with NBD"><ArrowUpRight size={40}/></Link></div>
          <p>Tell us what you&apos;re imagining, solving or trying to change. We&apos;d love to hear about it.</p>
          <Link href="/contact" className="prefooter-mobile-link">Start a project <ChevronRight size={18}/></Link>
        </div>
      </section>
    </>
  );
}
