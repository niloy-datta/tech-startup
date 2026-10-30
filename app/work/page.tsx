import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectShowcase } from "@/components/project-showcase";

export const metadata: Metadata = {
  title: "Our Work & Engineering Projects",
  description: "Explore NBD team projects and engineering experience across websites, Flutter and React Native apps, AI, developer tools, games and business platforms.",
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/work/" },
};

export default function WorkPage() {
  return (
    <>
      <section className="work-intro">
        <div className="container">
          <span className="eyebrow light"><span className="eyebrow-dot" /> WORK / BUILDS / EXPERIMENTS</span>
          <h1>Curious minds. <em>Real things built.</em></h1>
          <p>Explore projects and hands-on engineering experience from the people behind NBD. Each direction begins with a problem to solve and room to experiment.</p>
          <div className="work-intro-actions">
            <Link href="#project-catalog" className="btn btn-lime">Browse projects <ArrowRight size={18} /></Link>
            <Link href="/contact" className="btn btn-ghost">Let&apos;s build yours <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
      <ProjectShowcase mode="all" />
    </>
  );
}
