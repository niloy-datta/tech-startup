import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Compass, HeartHandshake, Lightbulb, Sparkles, TerminalSquare, Wrench } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/about/" },
  title: "About NBD",
  description: "Meet the people and thinking behind NBD: design-led digital product development backed by engineering and meaningful collaboration.",
};

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We explore new approaches when a better solution is possible." },
  { icon: Compass, title: "Simplicity", desc: "We design clear journeys that keep the important things easy." },
  { icon: HeartHandshake, title: "Partnership", desc: "Great work grows through honest conversations and shared priorities." },
  { icon: Wrench, title: "Craft", desc: "Performance, accessibility and the finer details all matter." },
];

export default function AboutPage() {
  return (
    <>
      <section className="nd-subhero nd-about-hero">
        <div className="container nd-subhero-inner nd-subhero-inner-compact">
          <span className="nd-eyebrow"><span/> ABOUT NBD / THE PEOPLE BEHIND THE PRODUCTS</span>
          <h1>A small studio.<br/><em>A bigger ambition.</em></h1>
          <p>We believe thoughtful design, solid engineering and close collaboration can turn ambitious ideas into useful digital products.</p>
          <Link href="/contact" className="nd-btn nd-btn-primary">Meet us through a project <ArrowUpRight size={18}/></Link>
        </div>
      </section>
      <section className="nd-about-story">
        <div className="container nd-about-story-grid">
          <div className="nd-about-scene" aria-label="Illustrative engineering studio screen">
            <div className="nd-about-scene-halo"/>
            <div className="nd-about-terminal">
              <div className="nd-terminal-top"><span><i/><i/><i/></span> PRODUCT STUDIO / DESIGN + ENGINEERING <TerminalSquare size={15}/></div>
              <div className="nd-terminal-content">
                <span className="nd-terminal-comment">// Thoughtful technology starts with people.</span>
                <span><b>const</b> nbd = {"{"}</span>
                <span className="nd-code-indent">vision: <em>&quot;Build with purpose&quot;</em>,</span>
                <span className="nd-code-indent">principles: [</span>
                <span className="nd-code-indent nd-code-indent-two"><em>&quot;Clarity&quot;</em>, <em>&quot;Craft&quot;</em>, <em>&quot;Care&quot;</em></span>
                <span className="nd-code-indent">],</span>
                <span className="nd-code-indent">focus: <em>&quot;People first&quot;</em></span>
                <span>{"}"};</span>
              </div>
              <div className="nd-terminal-footer"><Code2 size={15}/> DESIGN SYSTEMS / WEB / APPS / AI <span>✳</span></div>
            </div>
            <div className="nd-about-scene-chip"><Sparkles size={17}/> Made with intention</div>
          </div>
          <div className="nd-about-story-copy">
            <span className="nd-eyebrow"><span/> THE THINKING BEHIND NBD</span>
            <h2>Curious minds.<br/><em>Purposeful work.</em></h2>
            <p className="nd-about-lead">We&apos;re an independent digital product studio with a passion for turning complex ideas into intuitive experiences.</p>
            <p>Our work connects product strategy, design and software engineering. From early prototypes to useful business platforms, we start by understanding the problem and the people who need the solution.</p>
            <p>Our portfolio includes projects, experiments and previous engineering experience—not fabricated client case studies. We want the work and the process to speak for themselves.</p>
            <Link href="/work" className="nd-inline-cta">Explore our work <ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>
      <section className="nd-values-section">
        <div className="container">
          <div className="nd-section-head"><span className="nd-eyebrow"><span/> WHAT GUIDES US</span><h2>Principles behind <em>every pixel.</em></h2></div>
          <div className="nd-values-grid">
            {values.map(({icon:Icon,title,desc},i)=><article className="nd-value" key={title}>
              <span className="nd-value-count">0{i+1} /</span><div className="nd-value-icon"><Icon size={26}/></div>
              <h3>{title}</h3><p>{desc}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="nd-about-belief"><div className="container nd-about-belief-inner">
        <div><span className="nd-eyebrow"><span/> OUR COMMITMENT</span><h2>Built with clarity.<br/><em>Engineered to last.</em></h2></div>
        <div><p>We care about the whole product journey, not just the first screen. Collaboration, maintainable engineering and continuous improvement shape how we work.</p>
          <div className="nd-belief-item"><CheckCircle2 size={18}/> Thoughtful product discovery and experience design</div>
          <div className="nd-belief-item"><CheckCircle2 size={18}/> Software built around real-world use</div>
          <Link href="/services" className="nd-inline-cta">Explore our services <ArrowRight size={18}/></Link>
        </div>
      </div></section>
      <section className="nd-end-cta"><div className="container nd-end-cta-inner"><div><span>LET&apos;S CREATE SOMETHING MEANINGFUL</span><h2>Have a big idea?<br/><em>Let&apos;s give it a shape.</em></h2></div><Link href="/contact" className="nd-btn nd-btn-primary">Start a conversation <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
