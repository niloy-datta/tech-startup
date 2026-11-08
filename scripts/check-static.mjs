import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const routes = [
  "index.html",
  "services/index.html",
  "products/index.html",
  "products/rfq-quotation-assistant/index.html",
  "products/workflow-email-assistant/index.html",
  "research/index.html",
  "developers/index.html",
  "pricing/index.html",
  "work/index.html",
  "solutions/index.html",
  "labs/index.html",
  "about/index.html",
  "contact/index.html",
  "privacy/index.html",
  "sitemap.xml",
  "robots.txt",
];

for (const route of routes) {
  assert.ok(existsSync("out/" + route), "Missing static file: out/" + route);
}
const read = (route) => readFileSync("out/" + route, "utf8");

const homepage = read("index.html");
assert.match(homepage, /KADHAVIRA/, "Kadhavira brand wordmark is missing");
assert.match(homepage, /AI.*SOFTWARE.*SAAS.*CLOUD.*RESEARCH/s, "Brand capabilities missing");
assert.match(homepage, /AgriLume AI/, "Featured project missing from homepage");
assert.match(homepage, /href="\/(?:tech-startup\/)?labs\/"/, "Labs navigation is missing");
assert.match(homepage, /kl-home-bridge/, "Labs homepage introduction missing");
assert.match(homepage, /Ten possibilities/, "Ten-category portfolio teaser missing");
assert.match(homepage, /Coming Soon/, "Truthful pilot availability missing");
assert.doesNotMatch(homepage, />NBD</, "Old NBD wordmark is still visible");

const products=read("products/index.html");
for (const label of ["RFQ &amp; Quotation Assistant", "Workflow &amp; Email Automation Assistant","Developer Tools","Cybersecurity","Research"]) {
  assert.ok(products.includes(label), "Missing portfolio entry: "+label);
}
for (const route of ["products/rfq-quotation-assistant/index.html","products/workflow-email-assistant/index.html"]) {
  assert.match(read(route), /human/i, "Human approval guardrail missing from "+route);
}
assert.match(read("pricing/index.html"), /not published subscription prices/, "Pricing should not claim live subscription plans");
const labs = read("labs/index.html");
for (const discipline of ["ARTIFICIAL INTELLIGENCE","SOFTWARE ENGINEERING","SAAS PRODUCTS","CLOUD SYSTEMS","RESEARCH"]) {
  assert.ok(labs.includes(discipline), discipline + " absent from the Labs page");
}
assert.match(labs, /kl-pillar-grid/, "Labs five-pillar grid is missing");
assert.match(labs, /practice-areas/, "Labs anchor is missing");

const work = read("work/index.html");
assert.match(work, /Real projects/, "Work page hero missing");
assert.match(work, /AgriLume AI/, "AgriLume project missing");
assert.match(work, /project-agrilume/, "Deep links into portfolio missing");
assert.match(work, /project-catalog/, "Portfolio catalog and filters missing");
assert.match(work, /SSC/, "Education projects missing");

const services = read("services/index.html");
assert.match(services, /Everything you need/, "Services hero missing");
assert.match(services, /nd-service-grid/, "Service visual grid missing");
assert.match(services, /Mobile app development/, "Mobile services missing");

const solutions = read("solutions/index.html");
assert.match(solutions, /Industry-focused/, "Solutions hero missing");
assert.match(solutions, /nd-solutions-grid/, "Solution directory missing");

const about = read("about/index.html");
assert.match(about, /KADHAVIRA LABS/, "About brand copy missing");
assert.match(about, /nd-about-story/, "About content missing");

const contact = read("contact/index.html");
assert.match(contact, /nd-contact-form-shell/, "Contact inquiry form missing");
assert.match(contact, /PROJECT INQUIRY/, "Contact heading missing");

const privacy = read("privacy/index.html");
assert.match(privacy, /KADHAVIRA LABS/, "Privacy disclosure uses old brand");

const sitemap = read("sitemap.xml");
for (const route of ["products","research","developers","pricing","labs","solutions","work","services","contact"]) {
  assert.ok(sitemap.includes("/tech-startup/" + route + "/"), "Missing " + route + " from sitemap");
}
assert.match(read("robots.txt"), /sitemap\.xml/, "robots.txt must reference sitemap");
console.log("KADHAVIRA LABS static checks passed: " + routes.length + " routes and brand consistency.");
