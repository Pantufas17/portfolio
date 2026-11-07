# AGENTS.md — Nuno Amaro Portfolio

Instructions for AI coding agents (Codex, Claude Code, Cursor and others) working in this folder. The person you are working with always has the final say: when their request and these notes disagree, follow them.

## Project

Nuno Amaro's portfolio. The Vite/TypeScript home page uses the animated editorial layout; the imported project case studies, About, Passions and Contact pages remain static HTML pages served from `public/`.

- Stack: Vite ^8.1.5, TypeScript ^7.0.2, GSAP ^3.15.0 with ScrollTrigger and Lenis ^1.3.25; no frontend framework.
- `README.md` explains how to run and edit the portfolio. `CREDITS.md` lists the original template's libraries and image credits.

## Run it

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`

Then open the URL Vite prints, usually `http://localhost:5173`.

## Where things are

- `index.html`, `src/render.ts` and `src/content.ts`: animated home page and its content.
- `src/main.ts`: home-page interactions and motion; `src/styles.css`: its styles.
- `public/work/`, `public/about.html`, `public/passions.html` and `public/contact.html`: imported portfolio pages and case studies.
- `public/css/` and `public/js/`: styles and scripts used by the imported pages.
- `public/assets/`: portfolio images, videos, documents and local fonts.
- `dist/`: production build; `package.json` and `tsconfig.json`: scripts and build configuration.

## How to change things

- **Home-page text, projects and links:** edit `src/content.ts`.
- **Home-page markup:** edit `index.html` and `src/render.ts`.
- **Home-page design and motion:** edit `src/styles.css` and `src/main.ts`.
- **Case studies and secondary pages:** edit the HTML under `public/`.
- **Imported pages' design and interactions:** edit `public/css/` and `public/js/`.
- **Images and documents:** update `public/assets/` and the corresponding references.

## Motion

- GSAP and ScrollTrigger handle the intro, hero reveal, staggered reveals, sticky titles, stacked project cards and footer rise on the home page. Lenis supplies smooth scrolling.
- The imported pages keep their original interaction scripts. Respect `prefers-reduced-motion` when changing either set of animations.

## Rules for this project

- Keep home-page copy in `src/content.ts`, generated markup in `src/render.ts`, and home-page styling/motion in their existing source files.
- Preserve keyboard operation for the menu and expandable expertise rows.
- Keep the imported pages' relative links and asset paths working under `public/`.
- Rebuild `dist/` after source changes; the build includes TypeScript checking.
- Every animation you add or change must keep working with `prefers-reduced-motion` and when its script fails to load.
- Fonts are not covered by the HorizonX license. If you change the fonts, use ones you own or have a license for, and never download font files the user did not provide.
- When you add a library, font or image, add it to `CREDITS.md` with its version and license.
- Do not add analytics, tracking or other third-party scripts unless the user asks for them.

## Check your work

1. Build with `npm run build`.
2. Verify home sections, all secondary pages, assets, responsive layout and reduced-motion behavior.

## License

The original template is licensed to its owner through their HorizonX membership. Building and shipping sites from it is allowed; publishing or reselling the source files as a template is not. Terms: https://horizonx.so/terms
