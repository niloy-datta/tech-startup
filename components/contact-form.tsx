"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactEmail } from "@/lib/site";

type FormData = { name: string; email: string; service: string; budget: string; message: string };

const initial: FormData = { name: "", email: "", service: "", budget: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [showNotice, setShowNotice] = useState(false);
  const change = (field: keyof FormData, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setShowNotice(false);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contactEmail) return;
    const subject = `NBD project inquiry — ${form.service || "New project"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service: ${form.service || "Not specified"}`,
      `Budget: ${form.budget || "Let's discuss"}`,
      "",
      "Project details:",
      form.message,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setShowNotice(true);
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">Your name <span>*</span>
          <input required maxLength={100} autoComplete="name" value={form.name} placeholder="Your name" onChange={(e) => change("name", e.target.value)} />
        </label>
        <label className="form-field">Email address <span>*</span>
          <input required type="email" maxLength={180} autoComplete="email" value={form.email} placeholder="you@company.com" onChange={(e) => change("email", e.target.value)} />
        </label>
        <label className="form-field">What can we help with?
          <select value={form.service} onChange={(e) => change("service", e.target.value)}>
            <option value="">Select a service</option>
            <option>Website development</option>
            <option>Mobile app development</option>
            <option>Custom software</option>
            <option>UI/UX design</option>
            <option>AI & automation</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="form-field">Estimated budget
          <select value={form.budget} onChange={(e) => change("budget", e.target.value)}>
            <option value="">Let&apos;s discuss</option>
            <option>Under $2,500</option>
            <option>$2,500–$5,000</option>
            <option>$5,000–$10,000</option>
            <option>$10,000+</option>
          </select>
        </label>
      </div>
      <label className="form-field full">Tell us about your project <span>*</span>
        <textarea required maxLength={3000} rows={6} placeholder="The idea, the challenge, your timeline… anything you'd like us to know." value={form.message} onChange={(e) => change("message", e.target.value)} />
      </label>
      <div className="form-submit">
        <button className="btn btn-dark" type="submit" disabled={!contactEmail}>
          <Mail size={18} /> Open email draft <ArrowUpRight size={18} />
        </button>
        <p>{contactEmail ? "This opens your email app with the details filled in. You choose when to send." : "The company contact email has not been configured yet."}</p>
      </div>
      {showNotice && <p className="form-notice" role="status">Your email app should open with a pre-filled draft. Please send it from there; nothing has been submitted yet.</p>}
    </form>
  );
}
