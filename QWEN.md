# AstroPaper (diblogin-aja) - Project Context

## Project Overview

This is a customized instance of **AstroPaper v5.5.1**, a minimal, responsive, accessible, and SEO-friendly Astro blog theme. The project has been adapted for deployment on **Vercel** with server-side rendering capabilities.

### Key Features
- Type-safe Markdown with Astro Content Collections
- Light & dark mode support
- Fuzzy search via Pagefind
- Dynamic OG image generation
- RSS feed & sitemap
- Draft posts & pagination
- Keystatic CMS integration for content management
- Server-side rendering (SSR) via Vercel adapter

### Tech Stack
| Category | Technology |
|----------|------------|
| Framework | Astro 5.x |
| Language | TypeScript |
| Styling | TailwindCSS 4.x |
| CMS | Keystatic (cloud storage) |
| Deployment | Vercel (@astrojs/vercel) |
| Search | Pagefind |
| Icons | Tabler Icons |
| UI Components | React 19 (optional integration) |

## Project Structure

```
diblogin-aja/
├── src/
│   ├── assets/          # Static assets (icons, images)
│   ├── components/      # Reusable Astro/React components
│   ├── data/blog/       # Markdown blog posts
│   ├── layouts/         # Layout templates (Layout.astro, PostDetails.astro, etc.)
│   ├── pages/           # Page routes (index.astro, about.md, etc.)
│   ├── scripts/         # Client-side JavaScript
│   ├── styles/          # Global CSS styles
│   ├── utils/           # Utility functions
│   ├── config.ts        # Site configuration
│   ├── content.config.ts # Content collections schema
│   └── env.d.ts         # TypeScript environment declarations
├── public/              # Static assets served at root
├── dist/                # Build output (production)
├── astro.config.ts      # Astro configuration
├── keystatic.config.ts  # Keystatic CMS configuration
├── tailwind.config.ts   # TailwindCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Building and Running

### Prerequisites
- Node.js (LTS version recommended)
- pnpm (package manager)

### Development

```bash
# Install dependencies
pnpm install

# Start development server at localhost:4321
pnpm run dev

# Type-check without starting dev server
pnpm run sync
```

### Production Build

```bash
# Build for production (outputs to ./dist/)
pnpm run build

# Preview production build locally
pnpm run preview
```

### Docker

```bash
# Build Docker image
docker build -t astropaper .

# Run container
docker run -p 4321:80 astropaper

# Or use docker-compose
docker compose up -d
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start local dev server at `localhost:4321` |
| `pnpm run build` | Build production site to `./dist/` |
| `pnpm run preview` | Preview production build locally |
| `pnpm run sync` | Generate TypeScript types for Astro modules |
| `pnpm run format:check` | Check code formatting with Prettier |
| `pnpm run format` | Format code with Prettier |
| `pnpm run lint` | Lint code with ESLint |

## Configuration

### Site Configuration (`src/config.ts`)

Key configuration options:
- `SITE.website` - Deployed domain URL
- `SITE.author` - Default author name
- `SITE.title` - Site title
- `SITE.ogImage` - Default OpenGraph image
- `SITE.lightAndDarkMode` - Enable dark mode toggle
- `SITE.postPerPage` - Posts per page in pagination
- `SITE.showArchives` - Show archives page
- `SITE.editPost` - Enable "Edit this page" links

### Keystatic CMS (`keystatic.config.ts`)

Content management is configured with cloud storage:
- Project: `ryu-nakamura/diblogin-aja`
- Collections: `posts` (blog posts with MDX content)

### Environment Variables

```bash
# Optional: Google Site Verification
PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-token
```

## Development Conventions

### Code Style
- **Prettier**: Auto-formatting with 2-space tabs, 80-char line width
- **ESLint**: TypeScript + Astro rules, no-console enabled
- **File naming**: PascalCase for components, kebab-case for content files

### Git & Commits
- **Conventional Commits**: Follow conventional commit format
- **Commitizen**: Use `cz` for interactive commit creation

### Testing
- No automated test suite configured
- Manual testing recommended for PRs
- Lighthouse score tracking for performance

### Editor Setup (VS Code)
Recommended extensions:
- Astro extension
- ESLint
- Prettier
- TailwindCSS IntelliSense

## Content Management

### Adding Blog Posts

Blog posts are stored in `src/data/blog/` with frontmatter schema:

```yaml
---
author: "Sat Naing"
pubDatetime: 2025-01-01T00:00:00Z
modDatetime: 2025-01-02T00:00:00Z  # optional
title: "My Blog Post"
featured: false  # optional
draft: false  # set true to hide from production
tags: ["astro", "blog"]
ogImage: "/path/to/image.jpg"  # optional
description: "Post description..."
canonicalURL: "https://..."  # optional
---
```

### Using Keystatic CMS

```bash
# Start Keystatic dev server (if configured as separate route)
pnpm run dev
# Access CMS at /admin route (if configured)
```

## Deployment

### Vercel (Primary)

The project uses `@astrojs/vercel` adapter with SSR mode:
- Output mode: `server`
- Adapter: `vercel()`
- Site URL: `https://diblogin-aja.vercel.app`

### Manual Deployment

```bash
# Build and deploy dist/ folder
pnpm run build
# Deploy contents of ./dist/ to your hosting
```

## Known Issues & Notes

1. **Experimental Fonts**: The Font component requires experimental fonts configuration in `astro.config.ts` if used.

2. **Large Chunks**: Build may warn about large JavaScript chunks (>500KB). Consider code-splitting for optimization.

3. **PowerShell on Windows**: Some npm scripts using `&` for concurrent commands may require `concurrently` package on Windows PowerShell.

4. **Layout.astro Fix**: The `PUBLIC_GOOGLE_SITE_VERIFICATION` const must be declared after all imports in the frontmatter (not as an import from `astro:env/client`).

## File Paths Reference

| Purpose | File Path |
|---------|-----------|
| Main layout | `src/layouts/Layout.astro` |
| Post detail layout | `src/layouts/PostDetails.astro` |
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.md` |
| Blog posts | `src/data/blog/*.md` |
| Global styles | `src/styles/global.css` |
| Site config | `src/config.ts` |
| Astro config | `astro.config.ts` |

## Useful Links

- [Astro Documentation](https://docs.astro.build/)
- [AstroPaper GitHub](https://github.com/satnaing/astro-paper)
- [Keystatic Documentation](https://keystatic.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel Astro Guide](https://vercel.com/docs/frameworks/astro)
