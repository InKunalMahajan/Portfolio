# Portfolio — Kunal Mahajan

Creative, accessible multi-page portfolio built with Astro, TypeScript and Tailwind CSS v4.

## Run locally

Requires a current supported Node.js LTS version.

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Pages

Home, About, Skills, Experience, Projects (including dynamic detail pages), Curriculum, Resume, Contact, and 404.

## Design

Dark creative palette, violet and coral accents, responsive layouts, accessible skip link, keyboard focus states, and reduced-motion support.

## Customize

Update `src/data/site.ts` with verified project descriptions and public contact details. Replace placeholder project case studies and add a reviewed resume before launch.

## GitHub Pages

The Astro config uses `site: https://inkunalmahajan.github.io` and `base: /Portfolio`. Configure a GitHub Actions workflow for deployment, or deploy the `dist/` output to another static host with matching site/base settings.

No contact form backend is included.
