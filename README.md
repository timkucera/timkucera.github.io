# Personal Website

Minimal, configuration-driven personal homepage built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All content is in **`src/lib/config.ts`**. Edit this single file to change:

- Personal info (name, role, tagline, location, profile image)
- Social links (add, remove, or reorder)
- Current work roles
- Project cards (reorder by changing array position, set `featured: true` for subtle emphasis)
- Research items and Google Scholar link
- Contact section
- SEO metadata (title, description, OG image URL)

Type definitions live in `src/lib/types.ts` — the config is fully typed, so your editor will catch mistakes.

## Theme & Layout Options

In `config.ts` under `theme`:

| Option           | Values                         | Effect                               |
|------------------|--------------------------------|--------------------------------------|
| `defaultMode`    | `"light"`, `"dark"`, `"system"` | Sets color scheme behavior           |
| `heroAlignment`  | `"center"`, `"left"`           | Hero section alignment on desktop    |
| `maxWidth`       | Tailwind class, e.g. `"max-w-3xl"` | Page max width                  |

Under `layout`:

| Option             | Effect                                              |
|--------------------|-----------------------------------------------------|
| `showTags`         | Show/hide project tags globally                     |
| `openLinksInNewTab`| External links open in new tab                      |
| `sections.*`       | Toggle visibility of each section                   |

Optional sections (writing, press, notes, CV) can be toggled via `optional.*` in the config.

## Profile Image

Replace `public/profile.jpg` with your photo. Recommended: square, at least 176×176px.

## Deploy

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Or connect the repo to [vercel.com](https://vercel.com) for automatic deploys.

### Static Export

```bash
npm run build
```

The output in `.next` can be served by any static host. For a pure static export, add `output: 'export'` to `next.config.ts`.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind imports and base styles
│   ├── layout.tsx        # Root layout, fonts, metadata, theme script
│   └── page.tsx          # Main page composing all sections
├── components/
│   ├── Hero.tsx           # Header with profile, name, links
│   ├── SocialLinks.tsx    # Reusable link row
│   ├── Section.tsx        # Generic section wrapper
│   ├── CurrentWorkList.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   ├── ResearchList.tsx
│   ├── ContactBlock.tsx
│   ├── OptionalSection.tsx
│   ├── ThemeProvider.tsx
│   └── Footer.tsx
└── lib/
    ├── config.ts          # All site content (edit this)
    └── types.ts           # TypeScript interfaces
```
