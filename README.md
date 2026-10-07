# App Presentation

Product and help site for a growing family of Apple platform apps and Home Assistant tools, published as a static site on GitHub Pages.

## What is included

- Reusable app catalogue and per-product detail pages
- FAQ page that is built from the FAQ of the enabled products
- Visible placeholders for screenshots and store/download links
- German legal pages for `Impressum` and `Datenschutz`
- One feature flag per product (`ENABLE_*`): a product that is not enabled is hidden completely
- Neutral "coming soon" home page while no product is enabled
- Static export, deployed to GitHub Pages by a GitHub Actions workflow

## Local development

```bash
npm install
cp .env.example .env   # fill in the values
npm run dev
```

Open `http://localhost:3000`.

## Quality checks and local preview of the export

```bash
npm run lint
npm run build      # static site in ./out
npm run preview    # serve ./out locally
```

## Deployment

Every push to `main` builds and publishes the site. Setup, required variables and
limitations of static hosting are described in [deployment_workflow.md](deployment_workflow.md).

## Configuration

All values are read at **build time**. Locally they come from `.env`, in production
from GitHub → Settings → Secrets and variables → Actions → Variables. See
[.env.example](.env.example) for the full list.

Required: `SITE_URL`, `LEGAL_NAME`, `LEGAL_STREET`, `LEGAL_POSTAL_CODE`, `LEGAL_CITY`, `LEGAL_EMAIL`.
The deployment fails if one of them is missing.

## Content

- Products and their page copy: `src/content/apps.ts`
- FAQ questions: `src/content/faq.ts`
- Placeholders for screenshots and store badges: `src/components/placeholders.tsx`

## Planning

See [docs/easy-control-website-plan.md](docs/easy-control-website-plan.md) for the research summary, content strategy, and roadmap.
