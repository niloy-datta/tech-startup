import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactEmail } from "@/lib/site";

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
            <p>Websites, mobile apps and digital products built around ideas worth pursuing.</p>
            {contactEmail && <a href={`mailto:${contactEmail}`} className="footer-email">{contactEmail}</a>}
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="brand footer-brand" aria-label="NBD home">
            <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
            <span>NBD<span className="brand-period">.</span></span>
          </Link>
          <p>© {new Date().getFullYear()} NBD. Built with intention.</p>
          <div className="footer-links">
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
