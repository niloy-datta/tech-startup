# NBD — Company Profile Website

An English-language company profile for **NBD**, focused on website development, mobile app development, custom software, UX/UI and AI integration.

## Tech

- Next.js 16 App Router + React 19
- TypeScript (strict)
- Plain CSS, responsive and accessible layouts
- Lucide icons
- No database or paid API required for the brochure site

## Run locally

Requires Node.js 22+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp` if needed.

To verify the project:

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact setup — required before launch

Set your confirmed business inbox in `.env.local` (or your hosting provider's environment settings):

```env
NEXT_PUBLIC_NBD_CONTACT_EMAIL=your-confirmed-business-email@example.com
```

**The project inquiry form is intentionally honest about its behavior:** it validates fields, then opens a pre-filled **email draft** in the visitor's email client; it does **not** claim to save, send or deliver messages from the website. If no email is set, the form is disabled and tells visitors the inbox is not configured. If you want server-side delivery later, configure a verified mail domain, protected API endpoint, abuse safeguards and an email service.

## Pages

- `/`: homepage, illustrative dashboard concept, services, possibilities, process, FAQ and CTAs
- `/services`: detailed capabilities
- `/about`: company profile, principles and direction
- `/contact`: inquiry/email draft
- `/privacy`: current implementation privacy note

No client logos, testimonials, company registration claims or sales statistics are fabricated. Artwork represents **concept UI**, not commissioned projects.

## Deployment

Deploy the repository on Vercel or any Node.js 22+ environment supporting Next.js. Set `NEXT_PUBLIC_NBD_CONTACT_EMAIL` in deployment environment and rebuild. Add your official company domain when it is ready. Update site metadata and privacy content as the business and its integrations develop.

## Quality

GitHub Actions runs lint, TypeScript checks and a production build on pushes/PRs to `main`. Create and commit `package-lock.json` after your first `npm install` so the project can switch to deterministic `npm ci`.

## Note

NBD is the approved working brand. The site's offerings are descriptions of services, not claims of completed customer work. Replace all contact placeholders with verified NBD details before marketing to clients.

## GitHub Pages deployment

This site is designed to publish automatically from the `main` branch via the workflow in `.github/workflows/deploy-pages.yml`.

**First-time GitHub repository setting:**

1. Visit [Repository Settings → Pages](https://github.com/niloy-datta/tech-startup/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch").
3. Open [Actions → Deploy NBD to GitHub Pages](https://github.com/niloy-datta/tech-startup/actions/workflows/deploy-pages.yml), and, if needed, choose **Run workflow** on `main`.
4. Once the workflow succeeds, visit **https://niloy-datta.github.io/tech-startup/**.

Builds made for GitHub Pages set `GITHUB_PAGES=true`, so Next.js automatically adds the `/tech-startup` base path. Local `npm run dev` continues to work at `http://localhost:3000/`. `npm run build` writes static files to `out/`.

### Configure the public email without putting it in source

In [GitHub → Settings → Secrets and variables → Actions → Variables](https://github.com/niloy-datta/tech-startup/settings/variables/actions), create a **repository variable** named `NBD_CONTACT_EMAIL` with the confirmed NBD business email address; then rerun the Pages workflow. It is used only as a public build-time contact destination.

Because this is static hosting, the contact form **opens an email draft**; it does not submit to a backend. Static GitHub Pages does not support Next.js API routes or server-side actions.

## NBD experience and release checks

- Main service pages: website development, mobile applications, custom software, product design, AI workflows and support.
- [Solutions](/solutions): illustrative commerce, operations, SaaS, mobile and automation concepts. These are **not** claimed client projects.
- The homepage Project Starter preserves chosen product, stage and priority in the Contact page URL.
- Contact forms open an email draft only when `NEXT_PUBLIC_NBD_CONTACT_EMAIL` is set; otherwise they offer **copy enquiry**. They do not submit to a backend.
- GitHub Pages exports a sitemap and robots file at `/tech-startup/sitemap.xml` and `/tech-startup/robots.txt`.
- Run `npm run lint && npm run typecheck && npm run build && npm run test:static` to validate a local static export. GitHub Actions runs these checks before publishing.
