# Publishing the homepage

GitHub Pages builds the site from the `master` branch root with Jekyll (there is deliberately no `.nojekyll` file). Pushing to `master` publishes it within a minute or two; the build status is under the repository's Actions tab ("pages build and deployment").

Only `index.html`, `privacy.html` and `assets/` end up on the site. `_config.yml` excludes the notes (README, DEPLOY, WEBSITE_REVIEW, CLAUDE.md) and the ZIP archive.

The live CV at `assets/simon-syga-cv.pdf` is the intended public version (confirmed October 2026). All CV links use that path.

The canonical URL and social metadata point to `https://sisyga.github.io/` (`url` in `_config.yml` and `_includes/home-meta.html`). Update both if a custom domain is used, and keep any CNAME configuration.

## Checks before pushing

Preview locally (see README.md) and check desktop and phone widths, both color themes, the navigation menu on a phone, and film playback. Update `_data/site.yml` after substantive content changes.

After deploying, open https://sisyga.goatcounter.com to confirm that visits and events arrive.
