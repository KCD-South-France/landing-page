# Cloud Native Provence — Landing Page

Astro-based conference website with bilingual routing (`fr` / `en`) and translated slugs.

## Development workflow (Makefile-first)

Use `make` commands from the repository root.

```bash
make help
```

Main targets:

- `make setup` — install project dependencies
- `make start` — start local dev server (`application`)
- `make build` — production build
- `make lint` — run linters/checks
- `make lint-fix` — run fixers
- `make ci` — lint + build + test pipeline

Do not run `npm run ...` directly unless you are explicitly debugging Makefile behavior.

## Dev Container

This repository includes a VS Code Dev Container in `.devcontainer/devcontainer.json`.

### Recommended usage

1. Open the repository in VS Code.
2. Run `Dev Containers: Reopen in Container`.
3. Once inside the container, run:

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

## Current routing model

Routing is locale-first and centralized.

- `/` redirects to `/fr`
- `/fr` and `/en` are localized homepages
- `/{lang}/{translated-slug}` for content pages

Key files:

- `application/src/pages/index.astro` — root redirect
- `application/src/pages/[lang]/index.astro` — localized homepage
- `application/src/pages/[lang]/[page].astro` — localized dynamic pages
- `application/src/i18n/routes.ts` — route slug mapping + path helpers

Example translated slugs:

- FR: `/fr/a-propos`, `/fr/charte-graphique`, `/fr/politique-de-confidentialite`
- EN: `/en/about`, `/en/brand-guidelines`, `/en/privacy-policy`

## Project structure (current)

```text
/
├── .devcontainer/
├── Makefile
├── Dockerfile
├── README.md
└── application/
    ├── astro.config.ts
    ├── package.json
    ├── public/
    │   ├── _headers
    │   ├── robots.txt
    │   └── .well-known/appspecific/com.chrome.devtools.json
    └── src/
        ├── assets/
        ├── components/
        ├── i18n/
        │   ├── ui.ts
        │   ├── utils.ts
        │   └── routes.ts
        ├── layouts/
        ├── pages/
        │   ├── [lang]/
        │   │   ├── index.astro
        │   │   └── [page].astro
        │   ├── [...blog]/
        │   ├── home/
        │   ├── about/
        │   ├── contact/
        │   ├── sponsoring/
        │   ├── brand-guidelines/
        │   ├── terms/
        │   ├── privacy/
        │   ├── index.astro
        │   ├── rss.xml.ts
        │   └── 404.astro
        └── utils/
```

## Configuration

Primary site configuration: `application/src/config.yaml`.

Astro framework configuration: `application/astro.config.ts`.

## Build output

Production build output is generated in:

- `application/dist/`
