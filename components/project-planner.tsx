"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ClipboardCopy, Sparkles } from "lucide-react";

const products = ["Website", "Mobile app", "Custom platform", "Still exploring"] as const;
const stages = ["Just an idea", "Planning it out", "Ready to build"] as const;
const priorities = ["Standout design", "Speed to launch", "Built to scale"] as const;

export function ProjectPlanner() {
  const [product, setProduct] = useState<(typeof products)[number]>("Website");
  const [stage, setStage] = useState<(typeof stages)[number]>("Just an idea");
  const [priority, setPriority] = useState<(typeof priorities)[number]>("Standout design");
  const [copied, setCopied] = useState(false);

  const brief = [
    "NBD — Project starter brief",
    "Project: " + product,
    "Current stage: " + stage,
    "Top priority: " + priority,
    "I would like to discuss the next steps.",
  ].join("\n");

  const descriptions: Record<(typeof products)[number], string> = {
    Website: "A distinctive web experience that makes your business memorable and easy to choose.",
    "Mobile app": "An intuitive mobile product shaped around people, everyday use and the details that matter.",
    "Custom platform": "A smarter digital system that connects your team, customers and workflows.",
    "Still exploring": "A practical discovery conversation to turn an early idea into a clear product direction.",
  };

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section brief-builder-section" id="project-planner">
      <div className="container brief-builder-layout">
        <div className="brief-intro">
          <span className="eyebrow light"><span className="eyebrow-dot" /> LET&apos;S FIND YOUR STARTING POINT</span>
          <h2>Big ideas start with <em>one good conversation.</em></h2>
          <p>No complicated brief. No jargon. Answer three quick questions to shape an introduction we can build on.</p>
          <div className="brief-studio-note">
            <span className="brief-note-mark"><Sparkles size={22} /></span>
            <span>Built for founders, teams and businesses thinking about what&apos;s next.</span>
          </div>
          <span className="brief-background-word" aria-hidden="true">LET&apos;S<br/>MAKE IT.</span>
        </div>
        <div className="brief-panel">
          <div className="brief-panel-head">
            <span className="brief-panel-heading"><span className="brief-live-dot" /> PROJECT STARTER</span>
            <span>01 — 03 / YOUR VISION</span>
          </div>
          <fieldset className="planner-fieldset">
            <legend><span>01</span> What are you thinking of building?</legend>
            <div className="planner-options">
              {products.map((option) => (
                <button key={option} type="button" className={product === option ? "planner-choice selected" : "planner-choice"} aria-pressed={product === option} onClick={() => { setProduct(option); setCopied(false); }}>
                  {option}{product === option && <Check size={15} aria-hidden="true" />}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="planner-fieldset">
            <legend><span>02</span> Where are you right now?</legend>
            <div className="planner-options">
              {stages.map((option) => (
                <button key={option} type="button" className={stage === option ? "planner-choice selected" : "planner-choice"} aria-pressed={stage === option} onClick={() => { setStage(option); setCopied(false); }}>
                  {option}{stage === option && <Check size={15} aria-hidden="true" />}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="planner-fieldset">
            <legend><span>03</span> What matters most?</legend>
            <div className="planner-options">
              {priorities.map((option) => (
                <button key={option} type="button" className={priority === option ? "planner-choice selected" : "planner-choice"} aria-pressed={priority === option} onClick={() => { setPriority(option); setCopied(false); }}>
                  {option}{priority === option && <Check size={15} aria-hidden="true" />}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="planner-result" aria-live="polite">
            <div className="planner-result-top"><span><Sparkles size={15} /> YOUR DIRECTION</span><span>PERSONALIZED</span></div>
            <h3>{product === "Still exploring" ? "Start with the possibilities." : "Let&apos;s make your " + product.toLowerCase() + " happen."}</h3>
            <p>{descriptions[product]}</p>
            <div className="planner-result-actions">
              <Link href="/contact" className="btn btn-lime">Let&apos;s talk about it <ArrowUpRight size={18}/></Link>
              <button type="button" className="planner-copy" onClick={copyBrief} aria-label="Copy your project brief">
                {copied ? <Check size={17}/> : <ClipboardCopy size={17}/>} {copied ? "Copied!" : "Copy brief"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
