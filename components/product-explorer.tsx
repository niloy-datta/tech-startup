"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { portfolioCategories } from "@/lib/portfolio";

const phases = ["All","Phase 1","Phase 2","Phase 3"] as const;

export function ProductExplorer() {
  const [phase,setPhase] = useState<(typeof phases)[number]>("All");
  const [query,setQuery] = useState("");
  const filtered = useMemo(() => portfolioCategories.filter((category) => {
    const matchesPhase = phase==="All" || category.phase===Number(phase.slice(-1));
    const haystack = [category.name,category.description,category.buyer,...category.examples].join(" ").toLowerCase();
    return matchesPhase && haystack.includes(query.trim().toLowerCase());
  }),[phase,query]);
  return (
    <div className="ps-explorer">
      <div className="ps-explorer-toolbar">
        <div className="ps-phases" role="group" aria-label="Filter by roadmap phase">{phases.map((item)=><button key={item} type="button" aria-pressed={phase===item} className={phase===item?"is-selected":""} onClick={()=>setPhase(item)}>{item}</button>)}</div>
        <label className="ps-search"><Search size={17} aria-hidden="true"/><span className="sr-only">Search technology categories</span><input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search capabilities..." /></label>
      </div>
      <p className="ps-results" aria-live="polite">Showing {filtered.length} of {portfolioCategories.length} technology categories</p>
      <div className="ps-directory-grid">
        {filtered.map((category)=>(
          <article id={category.slug} className="ps-directory-card" key={category.slug}>
            <div className="ps-category-head"><span>{category.id} / 10</span><span>{category.role}</span></div>
            <h2>{category.name}</h2><p>{category.description}</p>
            <div className="ps-directory-tags">{category.examples.map(example=><span key={example}>{example}</span>)}</div>
            <div className="ps-directory-bottom"><span>Phase {category.phase} · {category.buyer}</span><Link href="/contact" aria-label={"Discuss "+category.name}>Discuss a use case <ArrowUpRight size={16}/></Link></div>
          </article>
        ))}
      </div>
      {filtered.length===0 && <div className="ps-no-results"><p>No category matches that search.</p><button type="button" onClick={()=>{setQuery("");setPhase("All");}}>Reset filters</button></div>}
    </div>
  );
}
