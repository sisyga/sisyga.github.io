# CLAUDE.md

One-page academic homepage of Simon Syga (https://sisyga.github.io), built by GitHub Pages with Jekyll 3.10 from `master`. README.md maps every kind of edit to its file; read it first.

## Structure

- `index.html` only orders the sections; content is in `_data/*.yml` (publications, research lines, talks, news, awards) and `_includes/sections/*.html`.
- `_layouts/default.html` holds the head, footer and scripts for both pages (`index.html`, `privacy.html`).
- `assets/site.css` holds all styles; `assets/site.js` the theme toggle, film playback, navigation and GoatCounter events.

## Conventions

- Keep the color palette (tokens at the top of `site.css`) and the tumor simulation film; check every visual change in both light and dark themes and at phone width (no horizontal scroll).
- Load nothing from third-party servers except GoatCounter: fonts are self-hosted for GDPR reasons. If analytics events change, update `privacy.html`.
- Figures in `assets/figures/` must come from CC BY papers (credited in captions) or the author's own unpublished renderings; never reproduce figures from paywalled journals.
- Summaries of papers must stay faithful to the paper; check claims against the source (the author's Zotero library has the PDFs).
- American spelling ("tumor", "color"), as in the existing text.

## Preview

`jekyll serve` (see README.md). A plain static server shows unrendered Liquid tags.
