import { ArrowUpRight, CheckCircle2, Globe2, Leaf, MapPin, Package, Route, Wallet } from "lucide-react";
import type { ProjectVisual } from "@/lib/portfolio-projects";

/** Decorative demonstration artwork — not screenshots or live analytics. */
export function ProjectArtwork({ visual }: { visual: ProjectVisual }) {
  if (visual === "agriculture") return (
    <div className="nd-art nd-art-agri" aria-hidden="true">
      <div className="nd-art-atmosphere" />
      <div className="nd-agri-land"><i/><i/><i/><i/><i/><i/></div>
      <div className="nd-agri-console">
        <header><span><Leaf size={15}/> AgriLume <b>AI</b></span><small>FIELD INTELLIGENCE / CONCEPT</small></header>
        <section><div><span className="nd-art-kicker">CROP OVERVIEW</span><strong>Smarter insight.<br/>Better decisions.</strong><div className="nd-art-sparkline"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="nd-agri-inset"><MapPin size={23}/><span>Field imagery</span></div></section>
        <footer><span>AI-assisted exploration</span><ArrowUpRight size={15}/></footer>
      </div>
    </div>
  );
  if (visual === "space") return (
    <div className="nd-art nd-art-space" aria-hidden="true">
      <div className="nd-space-dots"/><div className="nd-space-planet"/><div className="nd-space-dunes" />
      <div className="nd-space-figure"><div className="nd-space-helmet"/><div className="nd-space-backpack"/><div className="nd-space-suit"/><i/><b/></div>
      <div className="nd-space-interface"><small>MISSION / EXPLORATION</small><strong>Echoes<br/>Beyond Earth</strong><span>DISCOVER • LEARN • EXPLORE</span></div>
    </div>
  );
  if (visual === "finance") return (
    <div className="nd-art nd-art-finance" aria-hidden="true">
      <div className="nd-finance-orbit" />
      <div className="nd-finance-phone">
        <div className="nd-finance-top"><span>9:41</span><span>•••</span></div>
        <div className="nd-finance-brand"><Wallet size={16}/><span>My spending</span></div>
        <small>EXPENSE TRACKER / CONCEPT VIEW</small>
        <strong>Your money.<br/>More clarity.</strong>
        <div className="nd-finance-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div>
        <div className="nd-finance-row"><span>Everyday</span><span>••••</span></div>
        <div className="nd-finance-row"><span>Savings goals</span><span>•••</span></div>
      </div>
      <div className="nd-finance-chip"><CheckCircle2 size={15}/> Stay in control</div>
    </div>
  );
  if (visual === "logistics") return (
    <div className="nd-art nd-art-logistics" aria-hidden="true">
      <div className="nd-logistics-orbit"/>
      <div className="nd-logistics-panel">
        <header><span><Globe2 size={15}/> CONTROL TOWER</span><span>CONCEPT UI • GLOBAL</span></header>
        <div className="nd-logistics-panel-grid">
          <div><small>OPERATIONS VISIBILITY</small><strong>From anywhere.<br/>To everywhere.</strong>
            <div className="nd-logistics-stops"><i/><em/><i/><em/><i/></div>
            <div className="nd-logistics-caption"><span>ORIGIN</span><span>ON THE WAY</span><span>DESTINATION</span></div>
          </div>
          <div className="nd-logistics-tasks"><span><Package size={13}/> Shipment workflow</span><span><Route size={13}/> Tracking activity</span><span><CheckCircle2 size={13}/> Team visibility</span></div>
        </div>
        <footer>TRACKING • COLLABORATION • WORKFLOWS <ArrowUpRight size={13}/></footer>
      </div>
    </div>
  );
  return null;
}
