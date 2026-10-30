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
