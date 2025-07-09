# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Run all commands from the root directory:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Project Architecture

This is an Astro-based website for Salsa's Mexican Restaurant in Battle Creek, MI. The site uses:

- **Astro** - Static site generator with component-based architecture
- **Tailwind CSS** - Utility-first CSS framework with custom Mexican restaurant theme
- **TypeScript** - Type checking enabled via tsconfig.json

### Key Structure

- `src/pages/index.astro` - Main restaurant page with menu, hours, and contact info
- `src/seo.js` - SEO configuration for Cozyartz Media Group (web development company)
- `src/styles/global.css` - Custom CSS with Tailwind, animations, and restaurant branding
- `tailwind.config.mjs` - Tailwind configuration with custom salsa-themed colors and animations

### Design System

The site uses a custom Mexican restaurant theme with:
- Color palette: salsa-red (#DC2626), salsa-orange (#EA580C), salsa-yellow (#FBBF24), salsa-green (#16A34A)
- Dark theme: dark-100 (#1F2937), dark-200 (#111827), dark-300 (#0F172A)
- Fonts: Inter (body), Fredoka (display/headings)
- Custom animations: float, wiggle, bounce, fade-in, slide-up

### Restaurant Data

The main page includes hardcoded restaurant information:
- Menu items organized by category (Appetizers, Tacos, Burritos, Fajitas & Platters, Desserts)
- Hours of operation, contact info, and address
- Interactive menu search functionality

## Technical Details

- Uses Lucide icons for UI elements
- Implements intersection observer for scroll animations
- Menu search filters items by name and description
- Custom CSS animations for Mexican-themed character (chili with sombrero)
- Responsive design with mobile-first approach