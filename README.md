# Fynn Blaurock Portfolio

## Content

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Deployment](#deployment)
   - [Current (Test)](#current-test)
   - [Future Production](#future-production) 
4. [Project Structure](#project-structure)
5. [Usage & Features](#usage--features)

---

## Project Overview

My personal portfolio website, showcasing my CV, ongoing projects and a contact form. Features:

- Light / Dark theme toggle
- Scroll-triggered section animations
- CV display
- Project cards with mode-specific SVGs

## Tech Stack

- **Framework:** React 18
- **Bundler:** Vite
- **Styling:** CSS Modules, CSS custom properties
- **Forms:** Formspree for contact submissions

## Deployment

The site is deployed to **GitHub Pages** via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package — there is no CI workflow. Deploy from your machine with:

```bash
npm run deploy
```

This runs the `predeploy` script (`npm run build` → outputs to `dist/`) and then pushes the built `dist/` folder to the `gh-pages` branch, which GitHub Pages serves.

- **Live URL:** https://fnnbl.github.io/PortfolioFBL
- **Base path:** `/PortfolioFBL/` (set as `base` in `vite.config.js`) — required so assets resolve correctly under the project's Pages subpath.
- **`homepage`** in `package.json` mirrors the live URL.

Notes:
- Because deploys are pushed manually, remember to run `npm run deploy` after merging changes you want to publish.
- The `gh-pages` branch is generated output — don't edit it by hand.

### Future Production
The site may later move to a managed host, where changes merged into `main` trigger a CI build (`npm run build`) and auto–deploy to a custom domain with SSL/CDN.  

## Project Structure

```
PortfolioFBL/
├── src/
│   ├── assets/       # Images, SVGs, PDF (CV)
│   ├── common/       # Shared components (ThemeContext, ProjectCard)
│   ├── sections/
│   │   ├── Hero/
│   │   ├── CVSection/
│   │   ├── Projects/
│   │   └── Contact/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/               # Static assets
├── package.json
└── README.md
```

## Usage & Features

- **Theme Switch**  
  Persists light/dark preference via context + localStorage.

- **Scroll Animations**  
  `<section>` elements fade & slide in using the `useScrollAnimate` hook.

- **CV Section**  
  Displays professional history, interests, languages with progress bars.

- **Projects**  
  Example projects with mode-specific SVG logos and hover lift effect.

- **Contact Form**  
  Simple form integrated with Formspree for email submission.
