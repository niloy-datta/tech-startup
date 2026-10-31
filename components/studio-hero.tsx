import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  CircleDot,
  Layers3,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

export function StudioHero() {
  return (
    <section className="nbd-hero" aria-labelledby="nbd-hero-title">
      <div className="nbd-hero-mesh" aria-hidden="true" />
      <div className="container nbd-hero-grid">
        <div className="nbd-hero-copy">
          <p className="nbd-kicker"><span className="nbd-kicker-dot" /> INDEPENDENT DIGITAL PRODUCT STUDIO <span className="nbd-kicker-star">✳</span> NBD</p>
          <h1 id="nbd-hero-title">We build<br />what <span>comes<br className="nbd-hero-break" /> next.</span></h1>
          <p className="nbd-hero-intro">
            Thoughtful websites. Powerful apps. Intelligent software.
            We design and engineer digital products that make your business impossible to overlook.
          </p>
          <div className="nbd-hero-buttons">
            <Link href="/contact" className="nbd-primary-button">Start a project <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/#featured-work" className="nbd-text-button">Explore our work <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="nbd-hero-proof" aria-label="Our capabilities">
            <span><strong>01</strong> Product strategy</span>
            <span><strong>02</strong> Human-centered design</span>
            <span><strong>03</strong> Modern engineering</span>
          </div>
        </div>

        <div className="nbd-stage" aria-label="Illustrative examples of digital product interfaces, not actual client analytics">
          <div className="nbd-stage-orbit nbd-stage-orbit-one" aria-hidden="true" />
          <div className="nbd-stage-orbit nbd-stage-orbit-two" aria-hidden="true" />
          <div className="nbd-stage-label nbd-stage-label-top"><Sparkles size={13} /> IDEAS INTO INTERFACES</div>

          <div className="nbd-product-window">
            <div className="nbd-window-top">
              <div className="nbd-window-dots"><i /><i /><i /></div>
              <span>studio.nbd / product concept</span>
              <span className="nbd-window-live"><i /> CONCEPT UI</span>
            </div>
            <div className="nbd-window-content">
              <aside className="nbd-window-sidebar" aria-hidden="true">
                <span className="nbd-window-brand">n<span>.</span></span>
                <span className="nbd-window-icon is-selected"><LayoutDashboard size={17} /></span>
                <span className="nbd-window-icon"><ChartNoAxesCombined size={17} /></span>
                <span className="nbd-window-icon"><Layers3 size={17} /></span>
                <span className="nbd-window-icon"><CircleDot size={17} /></span>
                <span className="nbd-window-bottom">✳</span>
              </aside>
              <div className="nbd-window-main">
                <div className="nbd-app-eyebrow"><span>PRODUCT OVERVIEW</span><span>↗</span></div>
                <h2>Make complexity<br /><em>feel effortless.</em></h2>
                <div className="nbd-app-metric-row">
                  <div><span>Design systems</span><strong>Thoughtful.</strong></div>
                  <div><span>Product thinking</span><strong>Connected.</strong></div>
                </div>
                <div className="nbd-app-chart">
                  <div className="nbd-app-chart-head"><span>EXPERIENCE / DEMONSTRATION</span><span className="nbd-app-chart-period">OVERVIEW <span>⌄</span></span></div>
                  <svg viewBox="0 0 370 119" role="img" aria-label="Decorative flowing chart illustrating a sample interface">
                    <defs>
                      <linearGradient id="nbdStudioChart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#a48cff" stopOpacity=".28" />
                        <stop offset="1" stopColor="#a48cff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 92 C40 90 44 60 82 75 S145 107 174 64 S234 83 265 41 S326 52 370 13 L370 119 L0 119Z" fill="url(#nbdStudioChart)" />
                    <path d="M0 92 C40 90 44 60 82 75 S145 107 174 64 S234 83 265 41 S326 52 370 13" stroke="#ae9cff" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M0 109 C45 80 70 109 105 91 S170 79 213 82 S283 65 370 55" stroke="#77d6d0" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".7" />
                    <circle cx="265" cy="41" r="6" fill="#b9a9ff" stroke="#23283a" strokeWidth="4" />
                  </svg>
                </div>
                <div className="nbd-app-footer"><span><i /> Unified experiences</span><span>Built for real people ↗</span></div>
              </div>
            </div>
          </div>

          <div className="nbd-float-phone" aria-hidden="true">
            <div className="nbd-phone-island" />
            <div className="nbd-phone-head"><span>n.</span><span>☷</span></div>
            <div className="nbd-phone-overline">TODAY, IN FOCUS</div>
            <strong>Move with<br />clarity.</strong>
            <div className="nbd-phone-orb"><i /><i /><i /></div>
            <div className="nbd-phone-progress"><span /></div>
            <div className="nbd-phone-foot">THE BETTER EVERYDAY <span>↗</span></div>
          </div>
          <div className="nbd-stage-note"><span className="nbd-stage-note-icon">✳</span><span>Designed to feel good.<br /><strong>Engineered to work.</strong></span></div>
          <div className="nbd-stage-mini-tag">DESIGN <span>✳</span> CODE <span>✳</span> IMPACT</div>
        </div>
      </div>
      <div className="container nbd-hero-bottom">
        <span><ArrowDownRight size={16} aria-hidden="true" /> SCROLL TO EXPLORE</span>
        <span>STRATEGY <i /> DESIGN <i /> DEVELOPMENT</span>
      </div>
    </section>
  );
}
