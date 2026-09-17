# Simon Syga — personal website

A static academic homepage. `index.html` contains the layout, styles and small scripts for navigation, theme selection and the research animation. No compilation or npm installation is required.

## Preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ in a browser.

## Current site files

- `index.html`
- `.nojekyll`
- `assets/profile.png`
- `assets/mathoncoblog.mp4`
- `assets/tumor-simulation-poster.jpg`
- `assets/simon-syga-cv.pdf` — public CV.

The animation has a play/pause button, pauses in background tabs and resumes on return, and does not autoplay when reduced motion is requested. Its caption explains the simulation independently of playback. The remaining publications use a native, keyboard-accessible disclosure.

Google Fonts supplies the typefaces; system fonts provide a fallback. Legacy Academic Pages/Jekyll files remain in the repository but are not used by this static homepage.

See `DEPLOY.md` for publishing and `WEBSITE_REVIEW.md` for content decisions and source notes.
