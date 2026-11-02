<p align="center">
  <img src="./public/avatars/magamarq-indigo.webp" alt="Portrait of María Marquina" width="168" />
</p>

<h1 align="center">Hi, I'm María Marquina</h1>

<p align="center">
  <strong>Billing · Collections · Operations · Psychology</strong><br />
  <a href="https://magamarq.github.io/">magamarq.github.io</a>
  ·
  <a href="https://magamarq.github.io/cv-es/">CV ES</a>
  ·
  <a href="https://magamarq.github.io/cv-en/">CV EN</a>
</p>

I handle billing, accounts receivable, reconciliations, document control, and
executive support. I am also studying Psychology, because I like understanding
people as much as I like balancing numbers.

This repo is my public introduction. Spanish comes first (that is the language
I work in), with an English toggle for international teams. On the site you
will find my career path across Venezuela, Chile, and Argentina, direct contact
links, and printable CVs in both languages.

<p align="center">
  <img src="./public/avatars/magamarq-indigo.webp" alt="Indigo classic look" width="72" />
  &nbsp;
  <img src="./public/avatars/magamarq-blush.webp" alt="Blush classic look" width="72" />
  &nbsp;
  <img src="./public/avatars/magamarq-elite.webp" alt="Elite classic look" width="72" />
</p>

<p align="center"><em>Three palettes on the live site. Pick a look. Stay yourself.</em></p>

## How I built it

I wanted something fast and simple: no admin panel, no cookie walls. So I built
a static site with [Astro](https://astro.build/) 7, plain CSS, and a little
browser-side JavaScript. No UI framework. It deploys to GitHub Pages for free.

If you want one page that says who I am, what I have done, and how to reach
me, [open the site](https://magamarq.github.io/).

## Project structure

```text
.
├── public/
│   └── avatars/               # 9 portraits (3 palettes × 3 styles)
├── src/
│   ├── data/profile.ts        # Public copy, contact, avatar map
│   ├── layouts/Layout.astro   # Document shell, metadata, analytics
│   ├── pages/
│   │   ├── index.astro        # Bilingual profile page
│   │   ├── cv-es.astro        # Printable Harvard CV · Spanish
│   │   └── cv-en.astro        # Printable Harvard CV · English
│   └── styles/global.css      # Theme tokens and layout
├── astro.config.mjs           # Astro config + GitHub Pages URL
├── PRODUCT.md                 # Positioning and content boundaries
├── RELEASE.md                 # Deploy, rollback, content corrections
└── package.json
```

All public copy, experience, tools, education, contact labels, and avatar
mappings live in `src/data/profile.ts`. Edit the source. Leave generated
output alone: `.astro/` is types, `dist/` is the build, `public/` is copied
into the published site as-is.

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
3. Keep avatar mappings in `src/data/profile.ts` aligned with the files in
   `public/avatars/`.
4. Respect the privacy boundary in `PRODUCT.md`: no private journals,
   messages, galleries, or relationship records go on this site.
5. Run `bun run build`, then check both languages, all nine palette and
   portrait combinations, the contact links, and both printable CV pages
   (`/cv-es/` and `/cv-en/`).

[RELEASE.md](./RELEASE.md) covers deployment, rollback, and GitHub Pages.
Never fix public content by editing `dist/`.

## More reading

- [Product direction and content constraints](./PRODUCT.md)
- [Release guide](./RELEASE.md)
- [Astro documentation](https://docs.astro.build/)
- [Astro project structure](https://docs.astro.build/en/basics/project-structure/)
