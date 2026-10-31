import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const routes = [
  "index.html",
  "services/index.html",
  "work/index.html",
  "solutions/index.html",
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
assert.match(homepage, /INDEPENDENT DIGITAL PRODUCT STUDIO/, "NBD home hero missing");
assert.match(homepage, /AgriLume AI/, "Featured engineering work missing from homepage");

const work = read("work/index.html");
assert.match(work, /Real projects/, "Work page hero missing");
assert.match(work, /AgriLume AI/, "Work page must include AgriLume");
assert.match(work, /SSC/, "Work page must include educational projects");
assert.match(work, /project-catalog/, "Project catalog and filters missing");

const services = read("services/index.html");
assert.match(services, /Everything you need/, "Redesigned Services hero missing");
assert.match(services, /nd-service-grid/, "Six-service visual grid missing");
assert.match(services, /Mobile app development/, "Mobile development service missing");
assert.match(services, /AI &amp; automation|AI & automation/, "AI service missing");

const solutions = read("solutions/index.html");
assert.match(solutions, /Industry-focused/, "Solutions hero missing");
assert.match(solutions, /nd-solutions-grid/, "Solutions grid missing");
assert.match(solutions, /Operations &amp; logistics|Operations & logistics/, "Operations solution missing");

const about = read("about/index.html");
assert.match(about, /A small studio/, "About page hero missing");
assert.match(about, /nd-about-story/, "About studio story missing");

const contact = read("contact/index.html");
assert.match(contact, /nd-contact-form-shell/, "Redesigned inquiry form wrapper missing");
assert.match(contact, /PROJECT INQUIRY/, "Project inquiry heading missing");

const sitemap = read("sitemap.xml");
assert.ok(sitemap.includes("/tech-startup/solutions/"), "Solutions URL missing from sitemap");
assert.ok(sitemap.includes("/tech-startup/work/"), "Work URL missing from sitemap");
const robots = read("robots.txt");
assert.match(robots, /sitemap\.xml/, "robots.txt must reference sitemap");

console.log("NBD visual redesign static checks passed for " + routes.length + " expected files.");
