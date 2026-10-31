import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactEmail, brandCapabilities } from "@/lib/site";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow light"><span className="eyebrow-dot" /> HAVE SOMETHING IN MIND?</span>
            <h2>Let&apos;s make it <em>happen.</em></h2>
            <Link className="btn btn-lime" href="/contact">Start a conversation <ArrowUpRight size={19} /></Link>
          </div>
          <div className="footer-aside">
            <p>Applied AI, product engineering, SaaS and cloud systems—built around ideas worth pursuing.</p>
            {contactEmail && <a href={`mailto:${contactEmail}`} className="footer-email">{contactEmail}</a>}
          </div>
        </div>
        <p className="kl-footer-capabilities">{brandCapabilities.join("  •  ")}</p>
        <div className="footer-bottom">
          <Link href="/" className="brand footer-brand" aria-label="Kadhavira Labs home">
            <BrandMark footer />
          </Link>
          <p>© {new Date().getFullYear()} KADHAVIRA LABS. Built with intention.</p>
          <div className="footer-links">
            <Link href="/labs">Labs</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Our work</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
