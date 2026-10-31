"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BookOpen, Briefcase, Code2, Crosshair,
  Dumbbell, Factory, Home, Rocket, Ruler, ShoppingCart,
  Sprout, Terminal, Truck, Users, Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import {
  portfolioProjects, projectCategories,
  type PortfolioProject, type ProjectVisual, type ProjectCategory,
} from "@/lib/portfolio-projects";

const visualIcons: Record<ProjectVisual, LucideIcon> = {
  education: BookOpen,
  agriculture: Sprout,
  finance: Wallet,
  fitness: Dumbbell,
  terminal: Terminal,
  code: Code2,
  housing: Home,
  work: Briefcase,
  space: Rocket,
  shooter: Crosshair,
  garments: Factory,
  logistics: Truck,
  architecture: Ruler,
  commerce: ShoppingCart,
  workforce: Users,
};

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const Icon = visualIcons[project.visual];

  return (
    <article className={`portfolio-card nd-project-${project.visual}`}>
      {(["agriculture", "space", "finance", "logistics"] as ProjectVisual[]).includes(project.visual) ? <ProjectArtwork visual={project.visual} /> : <div className={`portfolio-art portfolio-art--${project.visual}`} aria-hidden="true">
        <div className="portfolio-art-light" />
        <div className="portfolio-art-header">
          <span>PRODUCT / {String(index + 1).padStart(2, "0")}</span>
          <span className="portfolio-art-dots"><i /><i /><i /></span>
        </div>
        <div className="portfolio-art-window">
          <div className="portfolio-art-rail"><i /><i /><i /><i /></div>
          <div className="portfolio-art-content">
            <div className="portfolio-art-overline">{project.category.toUpperCase()}</div>
            <div className="portfolio-art-feature"><Icon size={51} strokeWidth={1.3} /></div>
            <div className="portfolio-art-name">{project.name}</div>
            <div className="portfolio-art-lines"><i /><i /><i /></div>
            <div className="portfolio-art-panels"><span /><span /><span /></div>
          </div>
        </div>
        <span className="portfolio-art-caption">ILLUSTRATIVE VISUAL</span>
      </div>}
      <div className="portfolio-card-body">
        <div className="portfolio-card-topline"><span>{project.category}</span><span>{project.kind}</span></div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="portfolio-tech" aria-label="Project technologies and focus">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="portfolio-card-bottom">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-card-link">
              {project.urlLabel || "Explore project"} <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span className="portfolio-card-note">More details on request</span>
          )}
          <span className="portfolio-card-index">{String(index + 1).padStart(2, "0")} /</span>
        </div>
      </div>
    </article>
  );
}

export function ProjectShowcase({ mode = "featured" }: { mode?: "featured" | "all" }) {
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const isFeatured = mode === "featured";
  const projects = portfolioProjects.filter(
    (project) => isFeatured ? project.featured : category === "All" || project.category === category,
  );

  return (
    <section className={`section portfolio-showcase ${isFeatured ? "portfolio-showcase--featured" : "portfolio-showcase--all"}`}
      id={isFeatured ? "featured-work" : "project-catalog"} aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="portfolio-section-header">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> {isFeatured ? "FROM THE TEAM'S WORKBENCH" : "SELECTED BUILDS / EXPERIMENTS"}</span>
            <h2 id="portfolio-heading">
              {isFeatured ? <>Ideas made <em>tangible.</em></> : <>Real projects. <em>Real possibilities.</em></>}
            </h2>
          </div>
          <p>
            A selection of products, prototypes and industry experience contributed to or explored by the people behind NBD—from apps and AI to developer tools, games and business systems.
          </p>
        </div>
        {!isFeatured && (
          <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
            {(["All", ...projectCategories] as Array<"All" | ProjectCategory>).map((item) => (
              <button type="button" key={item} aria-pressed={category === item}
                className={category === item ? "portfolio-filter is-active" : "portfolio-filter"}
                onClick={() => setCategory(item)}>
                {item}
                {item === "All" && <span>{portfolioProjects.length}</span>}
              </button>
            ))}
          </div>
        )}
        <div className="portfolio-count" aria-live="polite">
          {isFeatured ? "SELECTED PROJECTS & EXPERIMENTS" : `SHOWING ${projects.length} PROJECT${projects.length === 1 ? "" : "S"}`}
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <p className="portfolio-disclaimer">
          <strong>About this collection:</strong> This gallery includes learning projects, personal/team builds, prototypes and prior industry engineering experience. They are not all commissioned NBD client projects. Illustrations are design artwork, not screenshots or performance claims.
        </p>
        <div className="portfolio-after">
          <div>
            <span>THINKING ABOUT YOUR OWN PROJECT?</span>
            <strong>We can help shape the next one.</strong>
          </div>
          <div className="portfolio-after-actions">
            {isFeatured && <Link href="/work" className="portfolio-outline-link">Explore the full project collection <ArrowRight size={18} /></Link>}
            <Link href="/contact" className="btn btn-lime">Discuss your project <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
