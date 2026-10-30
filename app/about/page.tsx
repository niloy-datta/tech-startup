import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, HeartHandshake, Lightbulb, Wrench } from "lucide-react";

export const metadata: Metadata = { title: "About NBD", description: "Meet NBD: a digital development company focused on useful websites, mobile apps and custom solutions shaped around people and business goals." };

const beliefs = [
  { icon: Compass, title: "Start with the why", description: "Clear thinking up front gives every product a stronger direction." },
  { icon: HeartHandshake, title: "Build together", description: "Useful digital experiences take open conversations and shared understanding." },
  { icon: Wrench, title: "Care about the details", description: "Performance, accessibility and the little interactions all matter." },
  { icon: Lightbulb, title: "Keep improving", description: "The best launch is a beginning, not the final destination." },
];

export default function AboutPage() {
  return (
    <>
      <section className="interior-hero"><div className="container">
        <span className="eyebrow light"><span className="eyebrow-dot" /> WHO WE ARE</span>
        <h1>Technology with a <em>human point of view.</em></h1>
        <p>We&apos;re NBD, a digital product and software development brand built around a simple belief: ideas deserve more than ordinary execution.</p>
      </div></section>
      <section className="section about-story"><div className="container about-grid">
        <div><span className="eyebrow"><span className="eyebrow-dot" /> OUR STORY</span><h2>We&apos;re here for the <em>things you want to create.</em></h2></div>
        <div className="about-story-copy">
          <p className="large-copy">Businesses are shaped by ideas. Digital experiences are how many of those ideas meet the world.</p>
          <p>NBD focuses on helping people and businesses turn those ideas into websites, mobile applications and software that feels considered from the first click.</p>
          <p>Our approach connects product thinking, experience design and development. Whether the goal is a new digital presence, a mobile-first product or a smarter way to run operations, we start by understanding the problem and build with the end user in mind.</p>
          <Link href="/services" className="text-link">Explore our capabilities <ArrowUpRight size={19}/></Link>
        </div>
      </div></section>
      <section className="section values-section"><div className="container">
        <div className="section-intro"><span className="eyebrow"><span className="eyebrow-dot" /> WHAT GUIDES US</span><h2>Our principles, <em>in practice.</em></h2></div>
        <div className="values-grid">{beliefs.map(({icon:Icon,title,description}) => <div className="value-card" key={title}><Icon size={28} strokeWidth={1.6}/><h3>{title}</h3><p>{description}</p></div>)}</div>
      </div></section>
      <section className="section about-vision"><div className="container vision-layout">
        <div className="vision-mark"><div>N<span>B</span>D<span className="adv-dot">.</span></div><span>IDEAS INTO IMPACT</span></div>
        <div><span className="eyebrow light"><span className="eyebrow-dot" /> OUR DIRECTION</span><h2>A digital partner for <em>what comes next.</em></h2><p>We aim to create useful, well-designed products that help ambitious businesses work smarter, connect better and keep growing.</p><div className="vision-check"><CheckCircle2 size={20}/> Practical solutions, shaped around real needs</div><div className="vision-check"><CheckCircle2 size={20}/> A thoughtful balance of design and engineering</div></div>
      </div></section>
      <section className="mini-cta"><div className="container"><div><span>LET&apos;S GET ACQUAINTED</span><h2>Tell us what you&apos;re building.</h2></div><Link href="/contact" className="btn btn-lime">Talk to NBD <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
