"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function dismiss(event: KeyboardEvent) { if (event.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, []);


  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link href="/" className="brand" aria-label="NBD home" onClick={() => setOpen(false)}>
          <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
          <span>NBD<span className="brand-period">.</span></span>
        </Link>
        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation" id="site-nav">
          {mainNav.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="mobile-contact" onClick={() => setOpen(false)}>
            Start a project <ArrowUpRight size={16} />
          </Link>
        </nav>
        <Link href="/contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={16} /></Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="site-nav"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
