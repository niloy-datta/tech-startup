import assert from "node:assert/strict";

const origin = process.env.KADHAVIRA_SITE_URL || process.env.NBD_SITE_URL || "https://niloy-datta.github.io/tech-startup/";
const base = origin.endsWith("/") ? origin : origin + "/";
const attempts = Number(process.env.KADHAVIRA_LIVE_ATTEMPTS || process.env.NBD_LIVE_ATTEMPTS || 18);
const delayMs = Number(process.env.KADHAVIRA_LIVE_RETRY_MS || process.env.NBD_LIVE_RETRY_MS || 5000);

const routes = [
  { path: "", marker: "KADHAVIRA" },
  { path: "labs/", marker: "ARTIFICIAL INTELLIGENCE" },
  { path: "services/", marker: "Mobile app development" },
  { path: "work/", marker: "AgriLume AI" },
  { path: "solutions/", marker: "Industry-focused" },
  { path: "about/", marker: "KADHAVIRA LABS" },
  { path: "contact/", marker: "PROJECT INQUIRY" },
  { path: "privacy/", marker: "KADHAVIRA LABS" },
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function checkRoute(route) {
  const url = new URL(route.path, base);
  url.searchParams.set("deployment_check", process.env.GITHUB_SHA || Date.now().toString());
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(20000),
    headers: { "Cache-Control": "no-cache", "User-Agent": "Kadhavira-Labs-GitHub-Pages-Check/1.0" },
  });
  const body = await response.text();
  assert.equal(response.status, 200, (route.path || "/") + " returned HTTP " + response.status);
  assert.ok(body.includes(route.marker), (route.path || "/") + " missing brand/page marker: " + route.marker);
  return route.path || "/";
}

for (let attempt = 1; attempt <= attempts; attempt++) {
  try {
    const verified = await Promise.all(routes.map(checkRoute));
    console.log("KADHAVIRA LABS live check passed: " + verified.join(", "));
    process.exit(0);
  } catch (error) {
    console.error("Live check " + attempt + "/" + attempts + ": " + error.message);
    if (attempt === attempts) process.exit(1);
    await sleep(delayMs);
  }
}
