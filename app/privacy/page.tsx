import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy", description: "Privacy information for the NBD company website." };

export default function PrivacyPage() {
  return <><section className="interior-hero small-interior"><div className="container"><span className="eyebrow light"><span className="eyebrow-dot" /> SITE INFORMATION</span><h1>Privacy <em>matters.</em></h1></div></section>
    <section className="section legal-section"><div className="container legal-content">
      <h2>How this site works</h2>
      <p>This company profile is an informational website. We do not currently provide account registration or a server-side inquiry database.</p>
      <h2>Project inquiries</h2><p>If you choose to contact NBD using the project inquiry form, your email application opens with a drafted message. Nothing is submitted to an NBD server by the form itself. Your email provider processes any email you decide to send under its own terms and privacy practices.</p>
      <h2>Third-party resources</h2><p>The site may use hosting and font delivery services that process technical information required to serve pages. Their privacy practices are governed by the respective providers.</p>
      <h2>Changes</h2><p>This page describes the current website implementation and should be reviewed when analytics, new forms or third-party tools are added.</p>
      <p>Want to ask a question? <Link href="/contact">Contact NBD.</Link></p>
    </div></section>
  </>;
}
