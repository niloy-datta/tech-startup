import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow light"><span className="eyebrow-dot" /> PAGE NOT FOUND</span><h1>Looks like a <em>wrong turn.</em></h1><p>The page you're looking for doesn't exist.</p><Link className="btn btn-lime" href="/">Back to home <ArrowUpRight size={18}/></Link></div></section>;
}
