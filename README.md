# Salsa's Mexican Restaurant Website

A modern, responsive website for Salsa's Mexican Restaurant in Battle Creek, Michigan. Built with Astro and Tailwind CSS, featuring an interactive menu, custom animations, and authentic Mexican-themed design.

## 🌮 Live Site

- **Production**: [https://wantthissite.com](https://wantthissite.com)
- **Staging**: [https://95399951.wantthissite.pages.dev](https://95399951.wantthissite.pages.dev)

## 🚀 Features

- **Interactive Menu**: Full restaurant menu with search functionality
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Custom Animations**: Mexican-themed animations including animated chili character
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Custom Theme**: Salsa-inspired color palette and typography

## 🏗️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- **Fonts**: Inter (body), Fredoka (headings)
- **Deployment**: Cloudflare Pages
- **Version Control**: Git with GitHub

## 📁 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro          # Main restaurant page
│   ├── seo.js                   # SEO configuration
│   └── styles/
│       └── global.css           # Custom styles and animations
├── tailwind.config.mjs          # Tailwind configuration
├── astro.config.mjs            # Astro configuration
├── CLAUDE.md                   # Claude Code documentation
└── package.json
```

## 🧞 Development Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🎨 Design System

### Color Palette

- **Salsa Red**: `#DC2626` - Primary brand color
- **Salsa Orange**: `#EA580C` - Accent color
- **Salsa Yellow**: `#FBBF24` - Highlight color
- **Salsa Green**: `#16A34A` - Success/fresh color
- **Dark Theme**: `#0F172A`, `#111827`, `#1F2937` - Background gradients

### Typography

- **Body**: Inter - Clean, readable sans-serif
- **Display**: Fredoka - Playful, Mexican-inspired headings

### Custom Animations

- **Float**: Gentle floating motion for character elements
- **Wiggle**: Subtle rotation for interactive elements
- **Fade-in**: Smooth entrance animations
- **Bounce**: Playful accent animations

## 🍽️ Restaurant Information

- **Name**: Salsa's Mexican Restaurant
- **Location**: Battle Creek, Michigan
- **Phone**: (269) 223-7921
- **Email**: <rsalsasbc@gmail.com>
- **Address**: 555 E. Emmett St. Battle Creek MI

## 📱 Features Overview

### Interactive Menu

- Search functionality across all menu items
- Organized by category (Appetizers, Tacos, Burritos, Fajitas, Desserts)
- Responsive card layout with hover effects
- Price display and item descriptions

### Restaurant Info

- Operating hours display
- Contact information
- Location details
- Call-to-action buttons

### Visual Elements

- Animated Mexican chili character with sombrero
- Gradient backgrounds and effects
- Interactive hover states
- Mobile-responsive navigation

## 🚀 Deployment

The site is deployed using Cloudflare Pages:

1. **Build**: `npm run build`
2. **Deploy**: `npx wrangler pages deploy dist --project-name=wantthissite`

## 💻 Development

This project uses modern web development practices:

- **Static Site Generation**: Pre-built HTML for fast loading
- **Component-Based**: Reusable Astro components
- **Utility-First CSS**: Tailwind for rapid styling
- **Performance Optimized**: Minimal JavaScript, optimized assets

## 🔧 Configuration

- **Astro Config**: Basic setup with Tailwind integration
- **Tailwind Config**: Custom theme with restaurant branding
- **TypeScript**: Enabled for better development experience

---

Built with ❤️ by [Cozyartz Media Group](https://cozyartzmediagroup.com)
