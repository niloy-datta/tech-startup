import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "https://niloy-datta.github.io/tech-startup/contact/" }, title: "Contact", description: "Tell NBD about your website, mobile app or custom software project. Start a conversation about your next digital product." };

export default function ContactPage() {
  return (
    <>
      <section className="interior-hero contact-hero"><div className="container"><span className="eyebrow light"><span className="eyebrow-dot" /> LET&apos;S CONNECT</span>
        <h1>Let&apos;s talk about <em>your big idea.</em></h1>
        <p>A quick introduction is all it takes. Share what you have in mind and let&apos;s see what we can create together.</p>
      </div></section>
      <section className="section contact-section"><div className="container contact-layout">
        <div className="contact-info">
          <span className="eyebrow"><span className="eyebrow-dot" /> START A CONVERSATION</span>
          <h2>Every great product starts <em>somewhere.</em></h2>
          <p>Have a website in mind? A mobile app idea? A business process that could work better? We&apos;re interested.</p>
          <div className="contact-way"><div><Mail size={23}/></div><section><strong>Email NBD</strong>{contactEmail ? <a href={`mailto:${contactEmail}`}>{contactEmail} <ArrowUpRight size={15}/></a> : <span>Business email to be announced</span>}</section></div>
          <div className="contact-way"><div><MessageCircle size={23}/></div><section><strong>Have questions?</strong><span>Tell us the challenge. We&apos;ll explore the possibilities.</span></section></div>
          <div className="contact-note"><Sparkles size={22}/><p>Not sure about your requirements yet? No problem. We can start with the idea.</p></div>
        </div>
        <div className="contact-form-wrap"><div className="form-heading"><span>PROJECT INQUIRY</span><h3>Tell us a little about it.</h3><p>A few details help us understand what you&apos;re looking for.</p></div><Suspense fallback={<p>Loading project form…</p>}><ContactForm /></Suspense></div>
      </div></section>
    </>
  );
}
