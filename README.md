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

### Current (Test)

Used GitHub Pages (`gh-pages` package) to prototype deployments:

```bash
npm run build
npm run deploy
```

### Future Production
The site will use a managed host. Changes merged into `main` trigger a CI build (`npm run build`) and auto–deploy to custom domain with SSL/CDN.  

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
