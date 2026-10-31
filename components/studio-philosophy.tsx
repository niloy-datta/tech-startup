import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Code2, Fingerprint, Layers3, Sparkles } from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Fingerprint,
    title: "Distinct by design.",
    description: "No off-the-shelf personality. Interfaces shaped around your audience, product, and goals.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Serious about the build.",
    description: "Well-considered architecture, responsive details, and technology selected for the job.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Made to move forward.",
    description: "Launch thoughtfully, learn quickly, and improve the experience as real needs emerge.",
  },
] as const;

export function StudioPhilosophy() {
  return (
    <section className="ae-manifesto" aria-labelledby="ae-manifesto-title" id="why-nbd">
      <div className="container">
        <div className="ae-manifesto-kicker">
          <span className="ae-eyebrow"><Sparkles size={15} aria-hidden="true" /> THE KADHAVIRA LABS APPROACH</span>
          <span className="ae-manifesto-index">PRODUCT THINKING / DESIGN / ENGINEERING</span>
        </div>
        <div className="ae-manifesto-grid">
          <div className="ae-manifesto-message">
            <h2 id="ae-manifesto-title">Not another<br />template.<br /><em>A product with purpose.</em></h2>
            <p>The right digital experience should look exceptional, feel effortless, and solve something meaningful. We bring the disciplines together instead of treating them as separate handoffs.</p>
            <Link href="/about" className="ae-link">Get to know our studio <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="ae-principles">
            {principles.map(({ number, icon: Icon, title, description }) => (
              <div className="ae-principle" key={number}>
                <div className="ae-principle-mark"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></div>
                <div className="ae-principle-copy">
                  <span>{number} / OUR STANDARD</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <CheckCircle2 className="ae-principle-check" size={19} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
        <div className="ae-manifesto-bottom" aria-hidden="true"><span>KADHAVIRA LABS<sup>®</sup></span><span>GOOD WORK IS INTENTIONAL.</span><span>EST. IN CURIOSITY ✳</span></div>
      </div>
    </section>
  );
}
