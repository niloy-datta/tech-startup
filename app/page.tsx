import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Globe2,
  Layers3,
  MousePointer2,
  Sparkles,
  Zap,
} from "lucide-react";
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
      <section className="hero">
        <div className="hero-grid-texture" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow light"><span className="eyebrow-dot" /> INDEPENDENT DIGITAL PRODUCT STUDIO</span>
            <h1>We turn ambitious <span className="gradient-word">ideas</span> into remarkable digital products<span className="headline-dot">.</span></h1>
            <p className="hero-description">We design and engineer distinctive websites, delightful mobile apps and intelligent software for ambitious businesses. From first idea to lasting impact.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-lime">Start a project <ArrowUpRight size={19} /></Link>
              <Link href="/#possibilities" className="btn btn-ghost">Explore our work <ArrowRight size={18} /></Link>
            </div>
            <div className="hero-signals">
              <span><BadgeCheck size={17} /> Design-led thinking</span>
              <span><Zap size={17} /> Modern engineering</span>
              <span><Globe2 size={17} /> Websites · Apps · Software</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustrative digital product dashboard and mobile app concept">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="floating-symbol floating-symbol-a"><Sparkles size={23}/></div>
            <div className="floating-symbol floating-symbol-b"><Code2 size={22}/></div>
            <div className="dash-window">
              <div className="dash-topbar"><div className="window-dots"><i/><i/><i/></div><span>NBD / digital experience</span><span className="dash-top-icon">✳</span></div>
              <div className="dash-body">
                <div className="dash-sidebar">
                  <span className="dash-logo">n<span>·</span></span>
                  <span className="side-icon selected"><Layers3 size={16}/></span>
                  <span className="side-icon"><CircleDot size={16}/></span>
                  <span className="side-icon"><Globe2 size={16}/></span>
                  <span className="side-icon"><MousePointer2 size={16}/></span>
                </div>
                <div className="dash-main">
                  <div className="dash-greeting"><span>OVERVIEW / CONCEPT UI</span><span>↗</span></div>
                  <h3>Products that make<br/>business feel effortless.</h3>
                  <div className="dash-chart">
                    <div className="chart-top"><span>Experience concept / sample UI</span><span className="chart-dot"/> </div>
                    <svg viewBox="0 0 360 126" role="img" aria-label="Decorative upward-trending graph illustration">
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b4a7ff" stopOpacity=".25"/><stop offset="1" stopColor="#cfff54" stopOpacity="0"/></linearGradient>
                      </defs>
                      <path d="M0 125V100C42 94 52 109 93 83S157 97 204 63 259 73 298 32 338 35 360 15V125Z" fill="url(#chartFill)"/>
                      <path d="M0 100C42 94 52 109 93 83S157 97 204 63 259 73 298 32 338 35 360 15" fill="none" stroke="#cfff54" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="298" cy="32" r="5" fill="#cfff54" stroke="#202532" strokeWidth="3"/>
                    </svg>
                  </div>
                  <div className="dash-mini-cards">
                    <div><span className="dash-muted">Designed with purpose</span><strong>01 <ArrowUpRight size={14}/></strong></div>
                    <div><span className="dash-muted">Ready to scale</span><strong>02 <ArrowUpRight size={14}/></strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-preview">
              <div className="mobile-notch" />
              <div className="mobile-content">
                <div className="mobile-row"><span className="mobile-logo">n.</span><span className="mobile-menu">≡</span></div>
                <p>MAKE IT SIMPLE</p>
                <h4>Your ideas,<br/>in your pocket.</h4>
                <div className="mobile-graphic"><span/><span/><span/><span/></div>
                <div className="mobile-pills"><i/><i/><i/></div>
                <div className="mobile-bottom"><span>Designed for people</span><ArrowUpRight size={16}/></div>
              </div>
            </div>
            <div className="visual-sticker"><span className="sticker-icon"><Check size={19}/></span><span>More than code.<br/><strong>A better experience.</strong></span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span><ArrowDownRight size={18} /> SCROLL TO EXPLORE</span><span>DESIGN <span className="mini-star">✳</span> DEVELOPMENT <span className="mini-star">✳</span> INNOVATION</span></div>
      </section>

      <section className="brand-ticker" aria-label="What NBD creates">
        <div className="ticker-inner"><span>WEB EXPERIENCES</span><Sparkles/><span>MOBILE APPLICATIONS</span><Sparkles/><span>PRODUCT DESIGN</span><Sparkles/><span>SMART SOFTWARE</span><Sparkles/><span>WEB EXPERIENCES</span><Sparkles/></div>
      </section>


      <section className="studio-promise" aria-label="Our approach in three words">
        <div className="container studio-promise-grid">
          <div className="promise-intro"><span>THE NBD MINDSET</span><strong>Made for what&apos;s next.</strong></div>
          <div className="promise-item"><span className="promise-number">01 /</span><span><strong>Design with intention.</strong><small>Experiences people want to use.</small></span></div>
          <div className="promise-item"><span className="promise-number">02 /</span><span><strong>Build for the real world.</strong><small>Engineering that supports growth.</small></span></div>
          <div className="promise-item"><span className="promise-number">03 /</span><span><strong>Think beyond launch.</strong><small>Products ready to evolve.</small></span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-intro split-heading">
            <div><span className="eyebrow"><span className="eyebrow-dot" /> WHAT WE DO</span><h2>Digital experiences. <em>Thoughtfully engineered.</em></h2></div>
            <p>Strategy, design and software engineering in one collaborative process. Explore what we can build together.</p>
          </div>
          <div className="services-grid">
            {services.map((item) => (
              <Link href={`/services#${item.slug}`} className={`service-card service-card-${item.icon}`} key={item.number}>
                <div className="service-card-top"><span className="service-icon"><ServiceIcon name={item.icon} size={26}/></span><span className="service-num">/ {item.number}</span></div>
                <div className="service-card-visual" aria-hidden="true"><ServiceIcon name={item.icon} size={116}/></div>
                <h3>{item.name}</h3>
                <p>{item.short}</p>
                <span className="service-sample">{item.points[0]}</span>
                <span className="service-more">Explore service <ArrowUpRight size={19}/></span>
              </Link>
            ))}
          </div>
          <div className="section-link"><Link href="/services">See all services <ArrowRight size={18}/></Link></div>
        </div>
      </section>

      <section className="section possibility-section" id="possibilities">
        <div className="container">
          <div className="section-intro split-heading">
            <div><span className="eyebrow light"><span className="eyebrow-dot" /> WHAT WE COULD BUILD</span><h2>Beautifully different.<br/><em>Purposefully built.</em></h2></div>
            <p>Every product starts with a problem worth solving. Here are a few types of solutions we can help bring to life—not client case studies.</p>
          </div>
          <div className="possibility-grid">
            <div className="possibility-card pos-commerce">
              <div className="possibility-top"><span>01 / DIGITAL COMMERCE</span><ArrowUpRight size={22}/></div>
              <div className="commerce-art" aria-hidden="true">
                <div className="commerce-product"><div className="product-orb"/><span>NEW COLLECTION</span><strong>Every detail,<br/>considered.</strong><i>SHOP NOW ↗</i></div>
                <div className="commerce-small"><span>+ Add to bag</span><strong>Curated for you</strong></div>
              </div>
              <div className="possibility-caption"><h3>Commerce that connects.</h3><p>E-commerce experiences with personality, clarity and smooth customer journeys.</p></div>
            </div>
            <div className="possibility-card pos-mobile">
              <div className="possibility-top"><span>02 / MOBILE EXPERIENCES</span><ArrowUpRight size={22}/></div>
              <div className="app-art" aria-hidden="true"><div className="app-art-phone"><div className="app-art-top">Today <span>◎</span></div><h4>Make every day<br/>a little easier.</h4><div className="app-art-circle"><span>✳</span></div><div className="app-art-progress"><i/></div><div className="app-art-tabs"><b/><b/><b/></div></div></div>
              <div className="possibility-caption"><h3>Apps that feel effortless.</h3><p>Useful features, easy navigation and experiences built around real user needs.</p></div>
            </div>
            <div className="possibility-card pos-systems">
              <div className="possibility-top"><span>03 / BUSINESS SYSTEMS</span><ArrowUpRight size={22}/></div>
              <div className="system-art" aria-hidden="true"><div className="system-top">Workspace <span>● ● ●</span></div><div className="system-grid"><div className="system-big"><small>WORKFLOW</small><span>↗</span><div className="system-bars"><i/><i/><i/><i/><i/></div></div><div className="system-small"><small>INTEGRATIONS</small><strong>Connected<br/>by design.</strong><div className="system-connections">○ — ● — ○</div></div></div></div>
              <div className="possibility-caption"><h3>Systems that simplify.</h3><p>Custom tools that bring your processes, data and people together.</p></div>
            </div>
          </div>
          <p className="concept-disclaimer"><CircleDot size={14} /> Concept illustrations show potential product directions; they are not claimed client projects.</p>
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


      <section className="section ways-section">
        <div className="container">
          <div className="section-intro split-heading">
            <div><span className="eyebrow"><span className="eyebrow-dot"/> WAYS TO COLLABORATE</span><h2>The right starting point, <em>for your stage.</em></h2></div>
            <p>We can start with clarity, build a focused first version, or improve a product you already have. The exact scope is always discussed together.</p>
          </div>
          <div className="ways-grid">
            <div className="way-card"><span className="way-index">01 / STRATEGY</span><h3>Discover & define.</h3><p>Turn an early idea into a clear problem statement, user journey, features and next steps.</p><div className="way-footer">Best for early ideas <ArrowUpRight size={18}/></div></div>
            <div className="way-card way-card-featured"><span className="way-index">02 / BUILD</span><h3>Design & launch.</h3><p>Bring a focused product to life with thoughtful UI, practical development and a plan for release.</p><div className="way-footer">Best for new products <ArrowUpRight size={18}/></div></div>
            <div className="way-card"><span className="way-index">03 / EVOLVE</span><h3>Improve & scale.</h3><p>Refine an existing website, app or internal platform with better usability and purposeful enhancements.</p><div className="way-footer">Best for growing teams <ArrowUpRight size={18}/></div></div>
          </div>
          <div className="ways-cta"><p>Not sure which fits? We can start by understanding the problem.</p><Link href="/contact" className="text-link">Tell us what you need <ArrowUpRight size={18}/></Link></div>
        </div>
      </section>

      <section className="section advantage-section">
        <div className="container advantage-layout">
          <div className="advantage-art" aria-hidden="true">
            <div className="advantage-circle circ-one"/><div className="advantage-circle circ-two"/>
            <div className="advantage-center">N<span>B</span>D<span className="adv-dot">.</span></div>
            <div className="advantage-bubble bubble-one"><MousePointer2 size={19}/> Thoughtful design</div>
            <div className="advantage-bubble bubble-two"><Code2 size={19}/> Real-world engineering</div>
            <div className="advantage-bubble bubble-three"><Sparkles size={19}/> Room to grow</div>
          </div>
          <div className="advantage-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> WHY NBD</span>
            <h2>Good technology.<br/><em>Great understanding.</em></h2>
            <p>We don&apos;t believe your product should feel like everyone else&apos;s. The best solutions begin with understanding your business, your customers and what actually matters.</p>
            <div className="advantage-list">
              <div><span><Check size={17}/></span><div><strong>Business-first thinking</strong><p>The right features matter more than a longer feature list.</p></div></div>
              <div><span><Check size={17}/></span><div><strong>Design and development together</strong><p>A connected approach from the first wireframe to the final interaction.</p></div></div>
              <div><span><Check size={17}/></span><div><strong>Made to evolve</strong><p>Practical foundations for what your product needs today and tomorrow.</p></div></div>
            </div>
            <Link href="/about" className="text-link">Get to know NBD <ArrowUpRight size={19}/></Link>
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
