# App Presentation

Next.js product site for a growing family of Apple platform apps and Home Assistant tools.

The first launch story is **Easy Control for Home Assistant**, a two-part product made up of:

- an iPhone app for guests
- a Home Assistant integration for pass creation, policy, and audit events

## What is already included

- Reusable app catalogue and per-product detail pages
- Initial product messaging for Easy Control based on the actual iOS and Home Assistant repos
- Feature-flagged support for unreleased products such as HomeControl+
- German legal pages for `Impressum` and `Datenschutz`
- Production-oriented Next.js configuration with standalone output
- Docker, Compose, and multi-arch image publishing scaffold
- Research and planning document for future product additions

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Docker

Development:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Production-style local run:

```bash
docker compose up --build
```

## Release

The release path follows the `BGO-new` blueprint and ships through Docker images.

```bash
./build-and-push.sh v0.1.0
```

The script supports environment overrides for registry, repository, region, and platforms.

## Environment

Start from:

```bash
cp .env.example .env
```

Important values:

- `SITE_URL`
- `SITE_NAME`
- `ENABLE_HOMECONTROL_PLUS`
- `DOCKER_IMAGE`
- `TRAEFIK_WEBSITE_RULE`
- `TRAEFIK_DOMAIN`
- `ACME_EMAIL`
- `LEGAL_*`
- `HOSTING_PROVIDER_*`

## Legal pages

The site includes:

- `/impressum`
- `/datenschutz`

The content is tailored to a Germany-operated informational product site and uses environment variables for the operator and hosting details. Fill those values before going live.

## Feature flags

`HomeControl+` is hidden by default.

Set the following before building a release image if you want it visible:

```bash
ENABLE_HOMECONTROL_PLUS=true
```

Because the site is statically generated, this flag and the legal details must be available during the Docker build, not only at container runtime.

## Planning

See [docs/easy-control-website-plan.md](/Users/sel0001d/Development/private/app_presentation/docs/easy-control-website-plan.md) for the research summary, content strategy, and roadmap.
