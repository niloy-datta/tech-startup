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

const homepage = readFileSync("out/index.html", "utf8");
assert.match(homepage, /NBD/, "Home must display NBD brand");
const work = readFileSync("out/work/index.html", "utf8");
assert.match(work, /AgriLume AI/, "Work page must include AgriLume");
assert.match(work, /SSC/, "Work page must include education project");
const services = readFileSync("out/services/index.html", "utf8");
assert.match(services, /Ideas made/, "Featured project gallery missing from Services");
const sitemap = readFileSync("out/sitemap.xml", "utf8");
assert.match(sitemap, /tech-startup\/solutions\//, "Solutions URL missing from sitemap");
assert.ok(sitemap.includes("/tech-startup/work/"), "Work page URL missing from sitemap");
const robots = readFileSync("out/robots.txt", "utf8");
assert.match(robots, /sitemap\.xml/, "robots.txt must reference sitemap");

console.log("Static export smoke checks passed for " + routes.length + " expected files.");
