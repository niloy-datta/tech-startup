import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/contact/" },
  title: "Contact NBD",
  description: "Tell NBD about your next website, mobile application, custom software or AI product idea.",
};

export default function ContactPage() {
  return (
    <>
      <section className="nd-subhero nd-contact-hero">
        <div className="container nd-subhero-inner nd-subhero-inner-compact">
          <span className="nd-eyebrow"><span/> LET&apos;S CONNECT / START A CONVERSATION</span>
          <h1>Let&apos;s build something<br/><em>remarkable.</em></h1>
          <p>Whether you have a clear brief or a spark of an idea, we&apos;d love to hear what you&apos;re working on.</p>
        </div>
      </section>
      <section className="nd-contact-section">
        <div className="container nd-contact-grid">
          <div className="nd-contact-form-shell">
            <div className="nd-contact-form-heading"><span className="nd-eyebrow"><span/> PROJECT INQUIRY</span><h2>Tell us about <em>your idea.</em></h2><p>Share a few essentials. We&apos;ll prepare a project enquiry you can review before sending.</p></div>
            <Suspense fallback={<p>Loading project form…</p>}><ContactForm/></Suspense>
          </div>
          <aside className="nd-contact-aside">
            <div className="nd-contact-info-card">
              <div className="nd-contact-info-icon"><Mail size={22}/></div>
              <span>EMAIL</span>
              {contactEmail ? <a href={`mailto:${contactEmail}`}>{contactEmail} <ArrowUpRight size={16}/></a> : <p>Business email is being configured. You can prepare and copy your inquiry using the form.</p>}
            </div>
            <div className="nd-contact-info-card">
              <div className="nd-contact-info-icon"><MessageCircle size={22}/></div>
              <span>LET&apos;S CONNECT</span>
              <p>Tell us about your goals, audience and the challenge you&apos;re solving. We&apos;ll take it from there.</p>
            </div>
            <div className="nd-contact-info-card nd-contact-info-accent">
              <div className="nd-contact-info-icon"><CheckCircle2 size={22}/></div>
              <span>START WHERE YOU ARE</span>
              <p>You don&apos;t need a fully finished specification to begin a conversation.</p>
            </div>
            <div className="nd-contact-globe" aria-hidden="true"><div className="nd-contact-globe-sphere"/><Sparkles size={30}/></div>
          </aside>
        </div>
      </section>
    </>
  );
}
