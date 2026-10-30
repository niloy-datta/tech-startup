import assert from "node:assert/strict";

const origin = process.env.NBD_SITE_URL ?? "https://niloy-datta.github.io/tech-startup/";
const base = origin.endsWith("/") ? origin : origin + "/";
const attempts = Number(process.env.NBD_LIVE_ATTEMPTS ?? 10);
const delayMs = Number(process.env.NBD_LIVE_RETRY_MS ?? 10000);

const routes = [
  { path: "", marker: "INDEPENDENT DIGITAL PRODUCT STUDIO" },
  { path: "services/", marker: "Ideas made" },
  { path: "work/", marker: "AgriLume AI" },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function checkRoute(route) {
  const url = new URL(route.path, base);
  // Avoid stale intermediate proxy caches when verifying a fresh deployment.
  url.searchParams.set("deployment_check", process.env.GITHUB_SHA || Date.now().toString());
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
    headers: { "Cache-Control": "no-cache", "User-Agent": "NBD-GitHub-Pages-Deployment-Check/1.0" },
  });
  const body = await response.text();
  assert.equal(response.status, 200, (route.path || "/") + " returned HTTP " + response.status);
  assert.ok(body.includes(route.marker), (route.path || "/") + " missing expected NBD content: " + route.marker);
}

for (let attempt = 1; attempt <= attempts; attempt++) {
  try {
    await Promise.all(routes.map(checkRoute));
    console.log("Verified " + routes.length + " live GitHub Pages routes after deployment.");
    process.exit(0);
  } catch (error) {
    console.error("Live deployment check " + attempt + "/" + attempts + " failed: " + error.message);
    if (attempt === attempts) {
      console.error("GitHub Pages may still be publishing the repository README rather than the Next.js export.");
      console.error("Check Settings > Pages > Build and deployment > Source = GitHub Actions.");
      console.error("Repository setting: https://github.com/niloy-datta/tech-startup/settings/pages");
      process.exit(1);
    }
    await sleep(delayMs);
  }
}
