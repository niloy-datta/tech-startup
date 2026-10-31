import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Leaf, MapPin, Sprout, Truck } from "lucide-react";

export function FeaturedStories() {
  return (
    <section className="nbd-stories" id="featured-work" aria-labelledby="nbd-stories-title">
      <div className="container">
        <div className="nbd-stories-heading">
          <div>
            <span className="nbd-section-label"><span /> FEATURED EXPERIENCES / NBD</span>
            <h2 id="nbd-stories-title">Real thinking.<br /><em>Real things built.</em></h2>
          </div>
          <div className="nbd-stories-intro">
            <p>Explore how the team behind NBD approaches problems across AI, interactive experiences, mobile products and operational software.</p>
            <Link href="/work" className="nbd-inline-link">Explore all projects <ArrowUpRight size={18} /></Link>
          </div>
        </div>

        <div className="nbd-stories-grid">
          <article className="nbd-story nbd-story-agri">
            <div className="nbd-story-top"><span>01 / AI & RESEARCH</span><span className="nbd-story-tag">EXPLORATION</span></div>
            <div className="nbd-story-scene nbd-agri-scene" aria-label="Illustrative agriculture intelligence dashboard concept">
              <div className="nbd-agri-glow" />
              <div className="nbd-agri-dashboard">
                <div className="nbd-agri-nav"><span><Sprout size={14} /> AGRILUME</span><span>◎ &nbsp; ▦ &nbsp; ⋯</span></div>
                <div className="nbd-agri-main">
                  <div className="nbd-agri-left"><small>FIELD INTELLIGENCE / DEMO UI</small><strong>See the field.<br />Understand more.</strong><div className="nbd-agri-health"><span>FIELD INSIGHTS</span><div><i /><i /><i /><i /><i /><i /><i /></div></div></div>
                  <div className="nbd-agri-map"><div className="nbd-agri-map-field field-one" /><div className="nbd-agri-map-field field-two" /><div className="nbd-agri-map-field field-three" /><span className="nbd-agri-map-pin"><MapPin size={16} /></span></div>
                </div>
                <div className="nbd-agri-stats"><span><Leaf size={13} /> Crop monitoring</span><span>AI-assisted insights <ArrowUpRight size={13} /></span></div>
              </div>
              <span className="nbd-agri-floating"><Leaf size={16} /> Agriculture, intelligently.</span>
            </div>
            <div className="nbd-story-body"><div><h3>AgriLume AI</h3><p>Exploring more useful agriculture intelligence.</p></div><Link href="/work/#project-agrilume" aria-label="Explore AgriLume AI in our work" className="nbd-story-arrow"><ArrowUpRight size={22} /></Link></div>
          </article>

          <article className="nbd-story nbd-story-space">
            <div className="nbd-story-top"><span>02 / INTERACTIVE EXPERIENCES</span><span className="nbd-story-tag">BUILT PROJECT</span></div>
            <div className="nbd-story-scene nbd-space-scene" aria-label="Illustrative Mars exploration scene for Echoes Beyond Earth">
              <div className="nbd-space-stars" /><div className="nbd-space-sun" /><div className="nbd-space-horizon nbd-space-horizon-back" /><div className="nbd-space-horizon nbd-space-horizon-front" />
              <div className="nbd-space-astronaut"><span className="nbd-astronaut-head" /><span className="nbd-astronaut-body" /><i /><b /></div>
              <div className="nbd-space-screen"><span>MISSION LOG / CHAPTER 03</span><strong>BEYOND<br />EARTH.</strong><small>DISCOVER · EXPLORE · LEARN</small></div>
              <div className="nbd-space-coordinates">18° N / 77° E <span>↗</span></div>
            </div>
            <div className="nbd-story-body"><div><h3>Echoes Beyond Earth</h3><p>An interactive journey through space exploration.</p></div><a href="https://echoes-beyond-earth.onrender.com/" target="_blank" rel="noopener noreferrer" aria-label="Explore Echoes Beyond Earth (opens in new tab)" className="nbd-story-arrow"><ArrowUpRight size={22} /></a></div>
          </article>

          <article className="nbd-story nbd-story-finance">
            <div className="nbd-story-top"><span>03 / MOBILE PRODUCTS</span><span className="nbd-story-tag">BUILT PROJECT</span></div>
            <div className="nbd-story-scene nbd-finance-scene" aria-label="Illustrative mobile expense tracking interface">
              <div className="nbd-finance-halo" />
              <div className="nbd-finance-phone">
                <div className="nbd-finance-status"><span>9:41</span><span>◖◖◖ ▰</span></div>
                <div className="nbd-finance-welcome"><span>YOUR OVERVIEW</span><span>◉</span></div>
                <h4>Every expense.<br />In perspective.</h4>
                <div className="nbd-finance-balance"><small>SPENDING SNAPSHOT · DEMO</small><div className="nbd-finance-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
                <div className="nbd-finance-rows"><span><i /> Everyday</span><span>●●●●</span></div>
                <div className="nbd-finance-rows"><span><i /> Goals</span><span>●●●</span></div>
                <div className="nbd-finance-tabs">⌂ &nbsp; ◫ &nbsp; ◉ &nbsp; ⚙</div>
              </div>
              <div className="nbd-finance-float"><Check size={16} /> All in one place</div>
            </div>
            <div className="nbd-story-body"><div><h3>Expense Tracker</h3><p>Personal finance, made simpler and clearer.</p></div><Link href="/work/#project-expense" aria-label="Explore Expense Tracker in our work" className="nbd-story-arrow"><ArrowUpRight size={22} /></Link></div>
          </article>

          <article className="nbd-story nbd-story-logistics">
            <div className="nbd-story-top"><span>04 / BUSINESS ENGINEERING</span><span className="nbd-story-tag">INDUSTRY EXPERIENCE</span></div>
            <div className="nbd-story-scene nbd-logistics-scene" aria-label="Illustrative freight and operations management dashboard">
              <div className="nbd-logistics-haze" />
              <div className="nbd-logistics-dash">
                <div className="nbd-logistics-header"><span><Truck size={16} /> OPERATIONS / DEMO UI</span><span>GLOBAL OVERVIEW ↗</span></div>
                <div className="nbd-logistics-content">
                  <div className="nbd-logistics-route"><small>SHIPMENT VISIBILITY</small><strong>Move smarter.<br />Stay connected.</strong><div className="nbd-logistics-path"><span className="nbd-route-point" /><span className="nbd-route-line" /><span className="nbd-route-point" /><span className="nbd-route-line" /><span className="nbd-route-point" /></div><div className="nbd-logistics-locations"><span>ORIGIN</span><span>IN TRANSIT</span><span>DESTINATION</span></div></div>
                  <div className="nbd-logistics-side"><small>OPERATIONS FLOW</small><div><span><i /> New inquiry</span><b>01</b></div><div><span><i /> In progress</span><b>02</b></div><div><span><i /> Next milestone</span><b>03</b></div></div>
                </div>
                <div className="nbd-logistics-footer">WORKFLOWS &nbsp; / &nbsp; VISIBILITY &nbsp; / &nbsp; COLLABORATION <span>✳</span></div>
              </div>
            </div>
            <div className="nbd-story-body"><div><h3>Logistics & Supply Chain</h3><p>Systems thinking for complex business operations.</p></div><Link href="/work/#project-logistics" aria-label="Explore logistics and supply chain work" className="nbd-story-arrow"><ArrowUpRight size={22} /></Link></div>
          </article>
        </div>

        <div className="nbd-stories-bottom">
          <p>These are team builds, prototypes, explorations and prior industry experience—not all commissioned NBD client work. Visuals are illustrative.</p>
          <Link href="/work">View the complete workbench <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
