# Simon Syga — personal website

A one-page academic homepage at https://sisyga.github.io, built by GitHub Pages with Jekyll. There is no build step to run yourself: push to `master` and GitHub builds and publishes the site.

## Where things live

| To change… | Edit |
|---|---|
| Research lines (one-sentence summary; question, finding and next steps under "Read more"; figure; papers) | `_data/research.yml` |
| Talks (newest four shown, the rest under "More talks") | `_data/talks.yml` |
| News (newest four shown below the intro, the rest under "Earlier news") | `_data/news.yml` |
| "Last updated" date in the footer | `_data/site.yml` |
| Intro, news, funding & teaching, software, about, contact | `_includes/sections/*.html` |
| Page order | `index.html` |
| Head, footer and scripts shared by all pages | `_layouts/default.html` |
| Styles | `assets/site.css` |
| Theme toggle, film playback, navigation, statistics events | `assets/site.js` |
| Privacy information | `privacy.html` |

Text fields in the data files may contain HTML, for example links or `&amp;`. Quote a value that contains a colon followed by a space.

### Adding a publication

Add it to the `papers` of its research line in `_data/research.yml` and, if it changes the story, update that line's text or figure. The closing line of Research only points to Google Scholar and the CV. Reuse figures only from openly licensed papers (for example CC BY), or your own unpublished renderings, and credit the source.

## Preview

GitHub Pages uses Jekyll 3.10. To preview locally (once):

```bash
sudo apt install ruby-dev build-essential
```

```bash
gem install --user-install jekyll:3.10.0 webrick kramdown-parser-gfm
```

Then, from the repository folder:

```bash
~/.local/share/gem/ruby/3.3.0/bin/jekyll serve
```

Open http://127.0.0.1:4000/.

## Assets

- `assets/figures/` — one figure per research line, cropped from the published papers (CC BY 4.0) or from unpublished renderings of my own simulations.
- `assets/mathoncoblog.mp4` and `assets/tumor-simulation-poster.jpg` — the tumor simulation film and its still. The film has a play/pause button, pauses in background tabs and does not autoplay when reduced motion is requested. To regenerate the still: `ffmpeg -ss 4 -i assets/mathoncoblog.mp4 -frames:v 1 -q:v 3 assets/tumor-simulation-poster.jpg`.
- `assets/profile.webp` and `assets/profile.png` — portrait (WebP for display; PNG as fallback and social-preview image).
- `assets/simon-syga-cv.pdf` — public CV.
- `assets/site-fonts/` — IBM Plex Sans, Archivo and JetBrains Mono (SIL Open Font License), self-hosted so the page makes no requests to Google.

## Visitor statistics

The page uses [GoatCounter](https://sisyga.goatcounter.com) (cookie-free; no consent banner needed). Besides page views it records events: `download-cv`, `download-thesis`, `contact-email`, `video-portrait`, `paper: <DOI>`, `code: <repository or Zenodo record>`, and `section: <id>` the first time each section reaches the upper part of the screen. Local previews are not counted. If the tracked behaviour changes, update `privacy.html`.

See `WEBSITE_REVIEW.md` for content decisions and source notes.
