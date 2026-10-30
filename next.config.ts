import type { NextConfig } from "next";

// The project is hosted at /tech-startup on GitHub Pages.
// Local development stays at http://localhost:3000 without that prefix.
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? "/tech-startup" : "",
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
