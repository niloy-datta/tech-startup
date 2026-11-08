import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import "./upgrade.css";
import "./next-wave.css";
import "./atelier.css";
import "./projects.css";
import "./studio-2026.css";
import "./nav-experience.css";
import "./nav-art.css";
import "./atelier-evolution.css";
import "./kadhavira-brand.css";
import "./portfolio-strategy.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const canonical = "https://niloy-datta.github.io/tech-startup/";
const organization = { "@context": "https://schema.org", "@type": "Organization", name: "KADHAVIRA LABS", url: canonical, description: "AI, software, SaaS, cloud engineering and research-led product development.", knowsAbout: ["Artificial intelligence", "Software engineering", "SaaS", "Cloud computing", "Applied research"] };

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  alternates: { canonical },
  title: { default: "KADHAVIRA LABS — AI Automation, B2B SaaS & Web Products", template: "%s | KADHAVIRA LABS" },
  description: "Explore KADHAVIRA LABS AI automation pilot concepts, B2B SaaS products, web platforms and engineering services. See our transparent 2026–2027 product roadmap.",
  applicationName: "KADHAVIRA LABS",
  keywords: ["KADHAVIRA LABS", "AI product engineering", "software development", "SaaS platforms", "cloud systems", "research and development", "web development", "mobile app development", "UI UX design"],
  openGraph: {
    type: "website",
    title: "KADHAVIRA LABS — AI, Software, SaaS, Cloud & Research",
    description: "AI-powered digital products, custom software, SaaS, cloud and research-led engineering.",
    siteName: "KADHAVIRA LABS",
    url: canonical,
  },
  robots: { index: true, follow: true },
  twitter: { card: "summary", title: "KADHAVIRA LABS — AI • Software • SaaS • Cloud • Research" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#090b12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
