# diblogin-aja

## Project Overview
This project is an Astro-based blog website built using the **AstroPaper** theme. It is configured for deployment on Vercel and uses Keystatic as a local/Git-based CMS. The project is highly optimized for performance, SEO, and accessibility.

**Key Technologies:**
- **Framework:** [Astro](https://astro.build/) (v5)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4 via Vite plugin)
- **UI Framework (optional/integrations):** React
- **Content Management:** [Keystatic](https://keystatic.com/)
- **Search:** [Pagefind](https://pagefind.app/) (Static search)
- **Deployment Adapter:** `@astrojs/vercel`

## Project Structure
- `src/`: Main source code directory.
  - `pages/`: Astro routing and pages.
  - `components/`: Reusable Astro and React components.
  - `layouts/`: Page layout wrappers.
  - `data/blog/`: Markdown (`.md` and `.mdx`) files for blog posts.
  - `styles/`: Global stylesheets and typography.
  - `utils/`: Helper functions.
  - `config.ts` & `constants.ts`: Main site configuration files.
- `public/`: Static assets (images, favicons) served directly at the root.
- `keystatic.config.ts`: Configuration for the Keystatic CMS.
- `astro.config.ts`: Astro framework configuration.

## Building and Running

This project uses **pnpm** as its package manager.

- **Install dependencies:**
  ```bash
  pnpm install
  ```
- **Start development server:**
  ```bash
  pnpm run dev
  ```
  *The site will be available at `http://localhost:4321`.*
- **Build for production:**
  ```bash
  pnpm run build
  ```
- **Preview production build:**
  ```bash
  pnpm run preview
  ```

## Development Conventions

- **Content Creation:** Blog posts should be added to the `src/data/blog/` directory as `.md` or `.mdx` files. They can be managed via the Keystatic UI locally if configured.
- **Styling:** Use Tailwind CSS utility classes for styling. Global styles are managed in `src/styles/global.css`.
- **Formatting:** Code formatting is enforced using Prettier.
  ```bash
  pnpm run format
  ```
- **Linting:** Code quality is checked using ESLint.
  ```bash
  pnpm run lint
  ```
- **Commits:** Follow conventional commits (e.g., `feat:`, `fix:`, `docs:`) as the repository is commitizen-friendly.
