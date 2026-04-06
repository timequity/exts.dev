# GEMINI.md — exts.dev context

## Project Overview
**exts.dev** is a curated marketplace and portfolio for browser extensions developed by **timequity** (0x7669). The project is built as a high-performance, minimalist static website designed to showcase focused, privacy-first tools.

- **Status**: Maintenance / Production.
- **Core Principle**: "Focused tools for focused people".
- **Design Aesthetic**: Minimalist dark mode, high-contrast typography (Satoshi/Geist), and neon accents (`#BEFF00`).

## Tech Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript.
- **Styling**: Custom CSS Design System v2 with BEM-like naming convention.
- **Typography**: 
  - **Satoshi**: Headings.
  - **Geist Sans**: Body text.
  - **Geist Mono**: Technical details and UI elements.
- **Infrastructure**: Static hosting (configured for Cloudflare Pages via `CNAME`).

## Directory Structure
```text
exts.dev/
├── index.html          # Main Catalog & Landing Page
├── privacy.html        # Unified Privacy Policy
├── terms.html          # Terms of Service
├── <extension>/        # Individual extension landing pages (e.g., graymode/, tabzen/)
│   ├── index.html
│   └── privacy.html    # (Optional) Extension-specific legal info
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet (Design System + Seasonal Decor)
│   ├── js/
│   │   └── main.js     # Client-side filtering logic
│   └── images/
│       ├── favicon.svg
│       └── extensions/ # Extension icons and screenshots
└── .project.yaml       # Project metadata
```

## Building and Running
As a static project, there is no build step.
- **Development**: Run `npm run dev` to start a local static server.
- **Deployment**: 
  - **Automatic**: Connected via Git to Cloudflare Pages (preferred).
  - **Manual**: Use `npm run deploy` for quick uploads to Cloudflare Pages:
    ```bash
    npm run deploy      # Deploy to staging/preview
    npm run deploy:prod # Deploy to production (main branch)
    ```
- **Testing**: Manual visual regression and link verification before deploy.

## Development Conventions
1. **CSS Architecture**: 
   - Use CSS Custom Properties defined in `:root`.
   - Adhere to the BEM-like naming convention for components (e.g., `.card__title`, `.btn--primary`).
   - Maintain the "Noise texture" and specific easing functions for animations.
2. **HTML Standards**:
   - Use semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`).
   - Ensure accessibility for filters and interactive elements.
3. **Content Updates**:
   - New extensions are added as a new directory with its own `index.html`.
   - Update the catalog grid in root `index.html` and the `main.js` filters if a new category is introduced.
4. **Seasonal Features**:
   - The project contains seasonal CSS/HTML (e.g., "NEW YEAR 2025" decorations). These should be toggled or removed based on the current date.

## Key Files
- `CONCEPT.md`: Detailed product vision and design-system specifications.
- `assets/css/style.css`: The "Source of Truth" for the visual design system.
- `assets/js/main.js`: Handles the extension catalog filtering logic.
