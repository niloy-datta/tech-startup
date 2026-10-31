import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Braces, Layers3, Sparkles } from "lucide-react";
import { ProjectShowcase } from "@/components/project-showcase";

export const metadata: Metadata = {
  title: "Our Work & Engineering Projects",
  description: "Explore KADHAVIRA LABS team builds and engineering experience across software platforms, mobile applications, AI, developer tools and games.",
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/work/" },
};

export default function WorkPage() {
  return (
    <>
      <section className="nd-subhero nd-work-hero">
        <div className="container nd-subhero-inner">
          <div className="nd-subhero-copy">
            <span className="nd-eyebrow"><span /> WORK / BUILDS / EXPERIMENTS</span>
            <h1>Real projects.<br/><em>Real possibilities.</em></h1>
            <p>Products we&apos;ve built, ideas we&apos;ve explored and systems we&apos;ve helped shape. Here&apos;s a look inside the KADHAVIRA LABS workbench.</p>
            <div className="nd-subhero-actions">
              <Link className="nd-btn nd-btn-primary" href="#project-catalog">Browse our work <ArrowDownRight size={18}/></Link>
              <Link className="nd-btn nd-btn-outline" href="/contact">Let&apos;s build yours <ArrowUpRight size={18}/></Link>
            </div>
          </div>
          <div className="nd-work-feature" aria-label="Illustrative digital product studio design composition">
            <div className="nd-work-halo" />
            <div className="nd-work-float nd-work-float-a"><Sparkles size={24}/><strong>Imagine</strong><small>Products with purpose</small></div>
            <div className="nd-work-float nd-work-float-b"><Braces size={24}/><strong>Engineer</strong><small>Built to evolve</small></div>
            <div className="nd-work-float nd-work-float-c"><Layers3 size={24}/><strong>Experience</strong><small>Made for people</small></div>
          </div>
        </div>
        <div className="container nd-subhero-foot"><span>SCROLL TO EXPLORE <ArrowDownRight size={15}/></span><span>REAL BUILDS / HONEST CONTEXT / CREATIVE ENGINEERING</span></div>
      </section>
      <ProjectShowcase mode="all" />
    </>
  );
}
