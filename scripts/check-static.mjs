import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const routes = [
  "index.html",
  "services/index.html",
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
const sitemap = readFileSync("out/sitemap.xml", "utf8");
assert.match(sitemap, /tech-startup\/solutions\//, "Solutions URL missing from sitemap");
const robots = readFileSync("out/robots.txt", "utf8");
assert.match(robots, /sitemap\.xml/, "robots.txt must reference sitemap");

console.log("Static export smoke checks passed for " + routes.length + " expected files.");
