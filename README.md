# Hi, I'm María Gabriela Marquina

I handle billing, accounts receivable, reconciliations, document control, and
executive support. I am also studying Psychology, because I like understanding
people as much as I like balancing numbers.

This site is how I introduce myself online. It is in Spanish first, because
that is the language I work in, with an English toggle for international
teams. You will find my career experience, direct ways to reach me (email and
LinkedIn), and my CV in both languages, ready to download.

It lives at [magamarq.github.io](https://magamarq.github.io/).

## How I built it

I wanted something fast and simple, no admin panel, no tracking banners. So I
built a static site with [Astro](https://astro.build/) 7, a bit of CSS, and
some browser-side JavaScript. No UI framework. It deploys to GitHub Pages,
which hosts it for free.

If you want one page that says who I am, what I have done, and how to reach
me, this is it.

## Project structure

```text
.
├── public/
│   └── avatars/               # 9 avatar portraits (webp for display, png for favicon)
├── src/
│   ├── data/profile.ts        # Everything people read about me lives here
│   ├── layouts/Layout.astro   # Document shell, metadata, and analytics
│   ├── pages/
│   │   ├── index.astro        # Main bilingual profile page
│   │   ├── cv-es.astro        # Printable Harvard CV in Spanish (/cv-es/)
│   │   └── cv-en.astro        # Printable Harvard CV in English (/cv-en/)
│   └── styles/global.css      # Styles and theme tokens
├── astro.config.mjs           # Astro config and GitHub Pages URL
├── PRODUCT.md                 # Positioning and content constraints
├── RELEASE.md                 # How releases and content corrections work
└── package.json
```

All the public copy, experience, tools, education, contact labels, and avatar
mappings live in `src/data/profile.ts`. Change things there, not in the
generated output: `.astro/` holds generated types, `dist/` is build output,
and `public/` is copied as-is into the published site.

## Running it

You need Node.js `>=22.22.0` and [Bun](https://bun.sh/docs/installation). From
the repository root:

```sh
bun install
bun run dev
```

Then open `http://localhost:4321/`.

| Command | Purpose |
| --- | --- |
| `bun run build` | Build the production site into `dist/` |
| `bun run preview` | Preview the production build locally |
| `bun run astro -- --help` | Astro CLI |

The lockfile is `bun.lock`, so use Bun for everything here.

## Updating my public content

1. Edit copy, contact details, experience, tools, education, or translations
   in `src/data/profile.ts`.
2. When my resume changes, update `src/pages/cv-es.astro` and
   `src/pages/cv-en.astro`.
3. Keep avatar mappings in `src/data/profile.ts` aligned with the optimized
   files in `public/avatars/`.
4. Respect the privacy boundary in `PRODUCT.md`: no private journals,
   messages, galleries, or relationship records go on this site.
5. Run `bun run build`, then check both languages, all nine palette and
   portrait combinations, the contact links, and both printable CV pages
   (`/cv-es/` and `/cv-en/`).

[RELEASE.md](./RELEASE.md) covers deployment, rollback, and GitHub Pages
details. Never fix public content by editing `dist/`.

## More reading

- [Product direction and content constraints](./PRODUCT.md)
- [Release guide](./RELEASE.md)
- [Astro documentation](https://docs.astro.build/)
- [Astro project structure](https://docs.astro.build/en/basics/project-structure/)
