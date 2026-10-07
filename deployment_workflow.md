# Docker Deployment Workflow

This project uses the same deployment approach as the `BGO-new` blueprint: build a
standalone Next.js image, publish it to a registry, and deploy it with Docker Compose.

## Prerequisites

- Docker with Buildx
- AWS CLI access to your ECR registry
- SSH access to the deployment server

## 1. Configure environment files

Create local environment values:

```bash
cp .env.example .env
```

Update at least:

- `SITE_URL`
- `SITE_NAME`
- `TRAEFIK_WEBSITE_RULE`
- `TRAEFIK_DOMAIN`
- `ACME_EMAIL`

## 2. Local development

```bash
docker compose -f docker-compose.dev.yml up --build
```

## 3. Build and publish

```bash
./build-and-push.sh v0.1.0
```

Optional overrides:

```bash
REGISTRY=123456789012.dkr.ecr.eu-central-1.amazonaws.com \
REPOSITORY=my-org/app-presentation \
REGION=eu-central-1 \
./build-and-push.sh v0.1.0
```

## 4. Deploy on the server

Set the environment on the server:

```bash
export DOCKER_IMAGE=209694132585.dkr.ecr.eu-west-1.amazonaws.com/dvselas/app-presentation:v0.1.0
export TRAEFIK_WEBSITE_RULE="Host(\`apps.example.com\`) || Host(\`www.apps.example.com\`)"
export TRAEFIK_DOMAIN="traefik.apps.example.com"
export ACME_EMAIL="admin@example.com"
```

Then deploy:

```bash
docker compose pull
docker compose up -d
```

## 5. Verify

```bash
docker compose ps
docker compose logs -f app-presentation
```

## Notes

- `next.config.ts` uses standalone output for leaner runtime containers.
- `SITE_URL` is used for metadata, sitemap, and robots output.
- The release files are structured so future app launches stay within the same system.
