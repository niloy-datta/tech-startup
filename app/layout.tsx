import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import "./upgrade.css";
import "./next-wave.css";
import "./atelier.css";
import "./projects.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const canonical = "https://niloy-datta.github.io/tech-startup/";
const organization = { "@context": "https://schema.org", "@type": "Organization", name: "NBD", url: canonical, description: "Websites, mobile apps and custom business software." };

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  alternates: { canonical },
  title: { default: "NBD — Websites, Apps & Digital Solutions", template: "%s | NBD" },
  description: "NBD helps ambitious businesses bring websites, mobile apps, custom software and digital products to life. Discover, design, develop and evolve.",
  applicationName: "NBD",
  keywords: ["NBD", "web development", "mobile app development", "software development", "UI/UX design", "AI integration"],
  openGraph: {
    type: "website",
    title: "NBD — Websites, Apps & Digital Solutions",
    description: "Your next digital move starts here. Website development, mobile apps and thoughtful software solutions.",
    siteName: "NBD",
    url: canonical,
  },
  robots: { index: true, follow: true },
  twitter: { card: "summary", title: "NBD — Websites, Apps & Digital Solutions" },
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
