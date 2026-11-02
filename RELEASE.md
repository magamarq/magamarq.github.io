# Release guide

## GitHub Pages

The site is configured as a static Astro user site at
`https://magamarq.github.io/`. The repository uses the `master` branch and
deploys through `.github/workflows/deploy.yml`.

1. Push changes to `master`, or run the workflow manually from GitHub Actions.
2. Confirm the `github-pages` environment deployment succeeds.
3. Verify the generated page at `https://magamarq.github.io/`.
4. Run `bun run build` locally before release.

Because this is a `username.github.io` repository, no repository `base` path is
required. If the repository is renamed to a project site, add the matching
`base` value to `astro.config.mjs` and update all root-relative asset links.

## Public content corrections

Public profile content is maintained in `src/data/profile.ts`. The approved
printable Harvard CV pages are published from:

- `src/pages/cv-es.astro` (`/cv-es/`)
- `src/pages/cv-en.astro` (`/cv-en/`)

Avatar mappings live in `src/data/profile.ts`; optimized files live in
`public/avatars/`. After changing any public content, run `bun run build` and
check both language states, all palette/avatar combinations, contact links,
and the two printable CV pages.

## Rollback

To roll back a published change, revert the responsible commit on `master` and
push the revert. GitHub Actions will rebuild and redeploy the previous
content. For a content-only correction, edit the source file, run the local
build, and deploy the correction rather than editing generated `dist/` files.
