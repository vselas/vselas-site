# Deployment: GitHub Pages

The site is a static Next.js export (`output: "export"`). Every push to `main`
runs `.github/workflows/deploy.yml`, which lints, builds and publishes the `out/`
folder to GitHub Pages.

## One-time setup

1. **Pages source**: Settings → Pages → Source: *GitHub Actions*.
2. **Custom domain**: Settings → Pages → Custom domain must match `public/CNAME`.
   The DNS record is a `CNAME` pointing to `<owner>.github.io`.
3. **Enforce HTTPS**: Settings → Pages → tick *Enforce HTTPS* (the certificate is
   issued automatically once DNS is correct).
4. **Variables**: Settings → Environments → `github-pages` → *Environment variables*
   (repository-level variables work as well). The build job is bound to the
   `github-pages` environment, so it reads both. The site text (Impressum,
   Datenschutz) and SEO URLs are generated from these values at build time. They
   are public on the website anyway, so they are variables, not secrets.

| Variable | Required | Purpose |
| --- | --- | --- |
| `SITE_URL` | yes | Public base URL, e.g. `https://www.example.com` (canonical, sitemap, robots) |
| `LEGAL_NAME` | yes | Name in Impressum and Datenschutz |
| `LEGAL_STREET` | yes | Street and number |
| `LEGAL_POSTAL_CODE` | yes | Postal code |
| `LEGAL_CITY` | yes | City |
| `LEGAL_EMAIL` | yes | Contact and support e-mail |
| `SITE_NAME` | no | Defaults to `vselas Apps` |
| `ENABLE_ROOMTONE` | no | Product switch, defaults to **on**. Set `false` to hide RoomTone completely |
| `ENABLE_EASY_CONTROL` | no | Product switch, defaults to off. Only `true` publishes the product |
| `ENABLE_HOMECONTROL_PLUS` | no | Product switch, defaults to off. Only `true` publishes the product |
| `LEGAL_REPRESENTATIVE`, `LEGAL_ADDRESS_EXTRA`, `LEGAL_COUNTRY`, `LEGAL_PHONE`, `LEGAL_VAT_ID`, `LEGAL_REGISTER_NAME`, `LEGAL_REGISTER_NUMBER`, `LEGAL_RESPONSIBLE_FOR_CONTENT`, `PRIVACY_SUPERVISORY_AUTHORITY`, `LEGAL_LAST_UPDATED` | no | Optional Impressum / Datenschutz details |

The workflow fails early with a clear error if a required variable is missing, so
an Impressum without an address can never be published by accident.

`SITE_URL` must use the same host as `public/CNAME`.

## Releasing

```bash
git push origin main
```

Watch the run under *Actions*. Variables are read at build time, so after changing
one, re-run the workflow (*Actions → Deploy to GitHub Pages → Run workflow*).

## Local preview of the exported site

```bash
npm run build     # writes the static site to ./out
npm run preview   # serves ./out on http://localhost:3000
```

## What static hosting cannot do

- **No custom HTTP headers.** GitHub Pages ignores `headers()` in `next.config.ts`,
  so `X-Frame-Options`, `X-Content-Type-Options` and `Permissions-Policy` cannot be
  set. Only the referrer policy is applied, via a `<meta>` tag.
- **No server-side code at request time.** Everything is rendered once at build time.
- **Switched-off products.** Files in `public/` are published as-is. The build step
  `scripts/prune-unreleased.mjs` removes assets of every product whose flag is off.
  Without any enabled product the site shows a neutral "coming soon" home page.
