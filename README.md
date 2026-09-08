# Hirni’s Wayside Garden Florist — Redesign

A static, mobile-first brand and conversion redesign for Hirni’s Wayside Garden Florist in Miami, Florida.

## What this repo contains

- `DESIGN_PLAN.md` — evidence-backed research, creative direction, IA, accessibility, performance and acceptance criteria.
- `site/` — deployable static site.
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow.

## Local preview

```bash
cd site
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deployment

The workflow publishes `site/` to GitHub Pages on every push to `main`.

Expected URL:

`https://prithiraj.github.io/Hirni_s_Wayside_Garden_Florist/`

GitHub Pages must be enabled for the repository with **Source: GitHub Actions**. The deployment workflow follows GitHub’s official Pages action pattern.

## Commerce strategy

This is a static brand layer. Shopping, current pricing, availability, substitution policies and checkout remain on the live Hirni’s storefront. This prevents stale or invented commerce data.

## Photography / rights

The demo uses real product photography served by the business’s current storefront/CDN. Before use on a separate commercial domain, confirm that the owner/platform license permits cross-site reuse. Replace/add owner-supplied storefront, team and process photography when available.

Third-party Google reviewer photos, competitor photography and editorial/wedding images are intentionally excluded.
