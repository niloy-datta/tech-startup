import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import "./upgrade.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "NBD — Websites, Apps & Digital Solutions", template: "%s | NBD" },
  description: "NBD helps ambitious businesses bring websites, mobile apps, custom software and digital products to life. Discover, design, develop and evolve.",
  applicationName: "NBD",
  keywords: ["NBD", "web development", "mobile app development", "software development", "UI/UX design", "AI integration"],
  openGraph: {
    type: "website",
    title: "NBD — Websites, Apps & Digital Solutions",
    description: "Your next digital move starts here. Website development, mobile apps and thoughtful software solutions.",
    siteName: "NBD",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#10131b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${space.variable}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
