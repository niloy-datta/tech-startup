"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, ClipboardCopy, Mail } from "lucide-react";
import { contactEmail } from "@/lib/site";

type Inquiry = { name: string; email: string; service: string; budget: string; timeline: string; message: string };
const serviceOptions = ["Website development", "Mobile app development", "Custom software", "UI/UX design", "AI & automation", "Support & evolution", "Something else"];
const serviceMap: Record<string, string> = { Website: "Website development", "Mobile app": "Mobile app development", "Custom platform": "Custom software" };
const stageOptions = ["Just an idea", "Planning it out", "Ready to build"];
const priorityOptions = ["Standout design", "Speed to launch", "Built to scale"];

export function ContactForm() {
  const params = useSearchParams();
  const project = params.get("product") || "";
  const stage = stageOptions.includes(params.get("stage") || "") ? params.get("stage") || "" : "";
  const priority = priorityOptions.includes(params.get("priority") || "") ? params.get("priority") || "" : "";
  const [form, setForm] = useState<Inquiry>(() => ({ name:"", email:"", service:serviceMap[project] || "", budget:"", timeline:"", message:"" }));
  const [notice, setNotice] = useState<"idle" | "draft" | "copied" | "manual">("idle");
  const [manualCopy, setManualCopy] = useState("");
  function update(field: keyof Inquiry, value: string) {
    setForm(old => ({ ...old, [field]: value }));
    setNotice("idle");
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      "NBD — Project enquiry", "",
      "Name: " + form.name, "Email: " + form.email,
      "Service: " + (form.service || "To discuss"),
      "Budget: " + (form.budget || "Not decided"),
      "Timeline: " + (form.timeline || "Flexible"),
      ...(stage ? ["Stage: " + stage] : []),
      ...(priority ? ["Priority: " + priority] : []),
      "", "Project details:", form.message
    ].join("\n");
    if (contactEmail) {
      window.location.href = "mailto:" + contactEmail + "?subject=" + encodeURIComponent("NBD enquiry — " + (form.service || "New project")) + "&body=" + encodeURIComponent(body);
      setNotice("draft");
      return;
    }
    try {
      await navigator.clipboard.writeText(body);
      setNotice("copied");
    } catch {
      setManualCopy(body);
      setNotice("manual");
    }
  }
  return <form className="inquiry-form" onSubmit={submit}>
    {(project || stage || priority) && <div className="form-brief-context" role="status">
      <strong><Check size={16} /> Your project starter is included</strong>
      <p>{[serviceMap[project] || project,stage,priority].filter(Boolean).join(" · ")}</p>
    </div>}
    <div className="form-grid">
      <label className="form-field">Your name <span>*</span>
        <input required maxLength={100} autoComplete="name" value={form.name} placeholder="Your name" onChange={e => update("name",e.target.value)} />
      </label>
      <label className="form-field">Email address <span>*</span>
        <input required type="email" maxLength={180} autoComplete="email" value={form.email} placeholder="you@company.com" onChange={e => update("email",e.target.value)} />
      </label>
      <label className="form-field">What can we help with?
        <select value={form.service} onChange={e => update("service",e.target.value)}>
          <option value="">Select a service</option>
          {serviceOptions.map(option => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="form-field">Estimated budget (optional)
        <select value={form.budget} onChange={e => update("budget",e.target.value)}>
          <option value="">Not decided yet</option>
          {["Under $2,500","$2,500–$5,000","$5,000–$10,000","$10,000+"].map(option => <option key={option}>{option}</option>)}
        </select>
      </label>
    </div>
    <label className="form-field full">Preferred timeline
      <select value={form.timeline} onChange={e => update("timeline",e.target.value)}>
        <option value="">Flexible / not sure</option>
        {["As soon as practical","Within 1–3 months","Within 3–6 months","Still exploring"].map(option => <option key={option}>{option}</option>)}
      </select>
    </label>
    <label className="form-field full">Tell us about your project <span>*</span>
      <textarea required maxLength={3000} rows={6} placeholder="What are you building, who will use it, and what would success look like?" value={form.message} onChange={e => update("message",e.target.value)} />
    </label>
    <div className="form-submit">
      <button className="btn btn-dark" type="submit">
        {contactEmail ? <Mail size={18} /> : <ClipboardCopy size={18} />}
        {contactEmail ? "Open email draft" : "Copy project enquiry"} <ArrowUpRight size={18} />
      </button>
      <p>{contactEmail ? "Opens a draft in your email app. Nothing is sent until you send it." : "The business email is not configured. You can copy the enquiry to keep or share it. The website does not send it."}</p>
    </div>
    {notice === "draft" && <p className="form-notice" role="status">Your email app should open a draft. Nothing was submitted by this website.</p>}
    {notice === "copied" && <p className="form-notice" role="status"><Check size={16}/> Enquiry copied. Paste into an email or message; it has not been sent.</p>}
    {notice === "manual" && <div className="manual-copy" role="status"><p>Automatic copy is unavailable. Select and copy this text:</p><textarea aria-label="Prepared project enquiry" readOnly rows={9} value={manualCopy} onFocus={e=>e.currentTarget.select()}/></div>}
  </form>;
}
