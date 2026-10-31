# KADHAVIRA LABS — AI • Software • SaaS • Cloud • Research

A responsive company profile and digital engineering showcase for **KADHAVIRA LABS**. The website presents five practice areas, software development services, team-built projects and honest project enquiry tools.

> **Brand status:** KADHAVIRA LABS is the working brand requested for the website. This repository does not establish company incorporation, domain ownership, trademark registration, certifications, revenue, published research or client contracts. Verify legal/name availability before commercial registration.

## Production website

**https://niloy-datta.github.io/tech-startup/**

The repository remains `niloy-datta/tech-startup` and deploys on **GitHub Pages only**. The old repository slug is a hosting path, not the company name. If you later acquire a verified business domain, update `metadataBase`, canonicals, sitemap, robots, and GitHub Pages domain settings together.

## Tech stack

- Next.js 16 App Router + React 19, strict TypeScript.
- Responsive CSS and Lucide icons; no purchased design system.
- Next.js static export to `out/` with `GITHUB_PAGES=true` and `basePath="/tech-startup"`.
- GitHub Actions and GitHub Pages; no Vercel or external backend dependency.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, selected work, services, five-practice teaser, project planner, process, FAQs and CTA |
| `/labs/` | AI, Software, SaaS, Cloud and Research practice areas and engineering approach |
| `/work/` | Honest team builds, prototypes and engineering experience with filtering |
| `/services/` | Web, mobile, custom software, UI/UX, AI integration and support |
| `/solutions/` | Industry-facing solution ideas: SaaS, commerce, logistics, mobile, AI and internal tools |
| `/about/` | Studio philosophy and principles |
| `/contact/` | User-friendly project enquiry and contact information |
| `/privacy/` | Privacy explanation for this static site |

Product visuals are illustrative UI concepts. Team builds and research explorations are not presented as commissioned KADHAVIRA LABS client work or verified research results.

## Local development

Requires Node.js 22+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell: `Copy-Item .env.example .env.local`. Visit `http://localhost:3000/` after `npm run dev`.

## Set up the public contact address

Set only a **verified business inbox** in `.env.local` (the address is intentionally not invented):

```env
NEXT_PUBLIC_KADHAVIRA_CONTACT_EMAIL=your-confirmed-business-email@example.com
```

For GitHub Pages, create a repository **Actions variable** `KADHAVIRA_CONTACT_EMAIL` in [Settings → Secrets and variables → Actions](https://github.com/niloy-datta/tech-startup/settings/variables/actions) and rerun the deployment workflow. The previous `NBD_CONTACT_EMAIL` is accepted temporarily as a backwards-compatible fallback; migrate to the new variable.

**The form does not submit to a server.** When a verified address is configured, submitting opens an email **draft** in the visitor's email application. The visitor must still send it. When no address is configured, the form copies or displays a project brief for manual use; no message is delivered. A production server-side inbox requires a separate hosted service, anti-spam measures and explicit consent.

## Build, test and publish

```bash
npm run lint
npm run typecheck
npm run build
npm run test:static
```

`GITHUB_PAGES=true npm run build` produces the GitHub Pages export with the `/tech-startup` prefix.

The [GitHub Pages publishing workflow](.github/workflows/deploy-pages.yml) runs lint, TypeScript, build and static checks on `main`, then copies generated files into the existing `main / (root)` Pages source and commits them through GitHub Actions. `.nojekyll` preserves the `_next` asset folder. This branch-publishing workaround is intentional because the connected GitHub App cannot edit Pages settings. The [CI workflow](.github/workflows/ci.yml) runs independently. Use [GitHub Actions](https://github.com/niloy-datta/tech-startup/actions) to review deploy results.

[Live route smoke checks](.github/workflows/verify-live-pages.yml) cover the homepage and all seven interior routes. Static tests verify the brand, five practice areas, links, SEO output and exported pages. The GitHub Pages publishing source should remain `main` / `(root)` unless the deployment workflow is changed.

## Important before marketing

1. Confirm the brand/trademark and complete any required business registration.
2. Configure a real contact email and test it on the public site.
3. Replace illustrative portfolio interfaces with real authorized screenshots where available, maintaining honest project descriptions.
4. Secure the company's official domain and update site URLs after ownership is confirmed.
5. Verify the final UI visually on desktop, tablet and mobile browsers.

No fabricated customer metrics, client logos, testimonials, company certificates or claims of registered intellectual property are included.
