# Cloud Native Provence — Landing Page

Conference website for Cloud Native Provence, with bilingual routing (`fr` / `en`) and translated page slugs.

## Development workflow

Use `make` commands from the repository root.

```bash
make help
```

Main targets:

- `make setup` — install project dependencies
- `make start` — start local dev server (`application`)
- `make build` — production build
- `make test-app` — run application tests with coverage
- `make lint` — run linters/checks
- `make lint-fix` — run fixers
- `make ci` — lint + build + test pipeline

## Tests and coverage

Tests run with Vitest from `application/`.

```bash
make test
```

## Dev Container

This repository includes a VS Code Dev Container in `.devcontainer/devcontainer.json`.

Quick start:

1. Open the repository in VS Code.
2. Run `Dev Containers: Reopen in Container`.
3. Inside the container:

```bash
make setup
make start
```

The dev container provides:

- Node.js
- Docker-in-Docker
- GitHub CLI
- VS Code extensions for Astro, ESLint, Prettier, Tailwind, Makefile, Copilot

The app is available on port `4321`.

## Routing model

Routing is locale-first and centralized:

- `/` redirects to `/fr`
- `/fr` and `/en` are localized homepages
- `/{lang}/{translated-slug}` serves localized content pages

Key files:

- `application/src/pages/index.astro` — root redirect
- `application/src/pages/[lang]/index.astro` — localized homepage
- `application/src/pages/[lang]/[page].astro` — localized dynamic pages
- `application/src/i18n/routes.ts` — slug mapping and path translation helpers

Translated static pages:

- `about` → `/fr/a-propos` / `/en/about`
- `contact` → `/fr/contact` / `/en/contact`
- `sponsoring` → `/fr/sponsoring` / `/en/sponsoring`
- `brand-guidelines` → `/fr/charte-graphique` / `/en/brand-guidelines`
- `terms` → `/fr/conditions-generales-utilisation` / `/en/terms-of-service`
- `privacy` → `/fr/politique-de-confidentialite` / `/en/privacy-policy`

## Project structure

```text
/
├── .devcontainer/
├── .github/
├── Makefile
├── Dockerfile
├── README.md
└── application/
    ├── astro.config.ts
    ├── package.json
    ├── public/
    │   ├── _headers
    │   ├── robots.txt
    │   └── logos/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── content/
    │   ├── data/
    │   ├── i18n/
    │   ├── layouts/
    │   ├── pages/
    │   │   ├── [...blog]/
    │   │   ├── [lang]/
    │   │   ├── about/
    │   │   ├── brand-guidelines/
    │   │   ├── contact/
    │   │   ├── home/
    │   │   ├── privacy/
    │   │   ├── sponsoring/
    │   │   ├── terms/
    │   │   ├── 404.astro
    │   │   ├── index.astro
    │   │   └── rss.xml.ts
    │   └── utils/
    └── vendor/
```

## Configuration and build

- Site and app settings: `application/src/config.yaml`
- Astro configuration and integrations: `application/astro.config.ts`
- Static build output: `application/dist/`

## CI

GitHub Actions CI runs from the `application/` directory and builds the static site output in `application/dist`.
