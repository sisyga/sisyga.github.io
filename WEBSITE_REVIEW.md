# Website revision — 17 September 2026

## Editorial decisions

- Center the research identity on connecting cell-level processes to population-level evolutionary theory, with cancer as the principal application.
- Separate a published result from a developing research program. Describe recurrence predictions as results of simulated treatment, without implying clinical validation.
- Feature three contributions with authorship and role. Preserve seven additional existing entries in a disclosure and link to the full bibliography.
- Bring teaching, doctoral/MSc co-supervision and research leadership forward. Keep total collaborative grant amounts adjacent to role and PI.
- Consolidate honors, reduce news to three items and move detailed chronology, grades, travel grants and exhaustive service/talk lists off the homepage.
- Present Morpheus.AI once as research in development, with reliability still being evaluated.
- Use the application letter for scientific framing only. Do not include the application destination, planned grant submissions, potential institutional collaborators or appointment ranking.

## Sources and items to review

The user-supplied motivation letter and current application CV informed the rewrite. Neither the letter nor its funding roadmap was copied into the site.

Two source discrepancies were resolved in favor of the recent CV:

- Reinhart Heinrich Award: export said 2024; CV says 2025. The user subsequently confirmed 2024; the website uses 2024, with the 2026 lecture listed separately.
- FOSTER.AI student-project funding: export said 2026–2027; CV says 2025–2026. Website uses 2025–2026 without claiming this is the end of the broader software work.

The CV and letter spell one student's surname differently. The condensed homepage uses supervision totals rather than reproducing that uncertain spelling.

The public CV replacement is still outstanding. The existing PDF has not been modified or published; all local CV links still point to it.

Scientific sources linked in the site:

- https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012003 — findings and author contribution statement.
- https://link.springer.com/article/10.1140/epjs/s11734-026-02186-1 — cellular automaton framework.
- https://doi.org/10.1038/s41556-020-0552-6 — collaborative invasion paper; role wording is drawn from the application letter.

## Implementation

Static HTML; no compilation required. Added the provided local video, an extracted preview still, an accessible playback control, reduced-motion behavior, background-tab pausing with resumption, a main landmark and simpler navigation. Increased caption readability and reduced decorative letter spacing. No publication/deployment performed.

## Validation

- Desktop at 1440 × 900 and phone at 390 × 844: no horizontal page overflow. Approximate collapsed page heights: 5,726 px and 9,337 px, down from about 11,000 and 18,400 px.
- Inspected light and dark themes, mobile introduction, navigation, leadership and contact, and the desktop research animation.
- Browser-confirmed video load/playback; explicit pause remains respected after leaving and returning to the section.
- Keyboard Enter expands and collapses the seven-entry bibliography; Escape closes the mobile menu and restores focus to its toggle.
- Local resources, fragment targets, unique IDs, structured metadata and JavaScript syntax pass.
- Isolated playback-logic checks pass for reduced-motion autoplay prevention, preference changes, explicit replay and media-error fallback. Reduced-motion behavior was tested at the logic level, not via an OS preference change.

## Tone and playback follow-up

Removed job-seeking language from the introduction and contact section. Integrated the three approaches into Research without the application-style program heading or future-goal framing. Recognition is ordered 2026, 2025, 2024, 2024; the Reinhart Heinrich Award year is 2024 as confirmed by the user.

The earlier playback implementation paused on leaving the viewport and on hiding the tab, but did not resume on tab return. Playback now starts on first visibility, continues during scrolling, and resumes after a background-tab pause. Explicit user pause and reduced-motion preferences remain respected.

## Funding and teaching organization

Replaced the mixed Leadership section with Individual funding and Collaborative projects & roles in two desktop columns, followed by a full-width Teaching & supervision block. Restored the State Innovation Scholarship and moved FOSTER.AI funding and project-supervisor details out of Software into the project list. Recognition remains separate. Retained the existing #leadership fragment for link compatibility.

# Revision — 11 October 2026

## Changes, in the order approved

1. Fonts self-hosted (no requests to Google, a GDPR issue in Germany); styles moved to `assets/site.css` and consolidated; portrait served as WebP. Verified pixel-identical apart from font anti-aliasing.
2. GoatCounter visitor statistics (cookie-free; site code `sisyga`) with events for CV and thesis downloads, email, paper and code links, and sections reached. New `privacy.html`.
3. Research section rebuilt as four figure-led research lines (tumor evolution with the film, cancer invasion, collective behavior & methods, epidemics), each with question, finding and papers.
4. Publications reduced to five selected papers with figure, role, one-sentence finding, paper and code links; thesis entry linking the open-access Qucosa record.
5. Awards strip under the intro, profile links, selected talks (from the former `_talks` records), invitation to students.
6. Legacy Academic Pages files removed (run by the user).
7. Restructured as Jekyll: data files in `_data/`, sections in `_includes/sections/`. The built page was compared pixel by pixel with the previous static page at desktop and phone width in both themes: identical.

## Sources and decisions

- Paper figures were cropped from the PDFs in Zotero; all are CC BY 4.0 (PLOS Comput Biol, Sci Rep, EPJ ST) or the author's preprint. Nature Cell Biology 2020 is not open access, so its figures come from the author's own preliminary renderings (`modeling_part_fig7_20.pptx`, slides 2–3) instead of the published figure.
- Paper summaries follow the papers' abstracts and results. PLOS Comput Biol 2024, Fig 5: higher phenotypic entropy is associated with shorter recurrence, higher genetic entropy with longer recurrence.
- Roles: first author where listed first; Nature Cell Biology "Modeling & simulation" per its author-contribution statement (in silico data, modeling analysis).
- The MTZ Award and the Reinhart Heinrich Award were both for the dissertation (TU Dresden news, May 2024 and August 2025). The site keeps the user's wording "Reinhart Heinrich Award".
- The live CV is the intended public version (user, October 2026).

## Revision — 11 October 2026 (later): removing doublings

- Selected publications became a plain citation list (five papers plus the thesis, with paper and code links). Explanations and figures now appear only in the research lines; the four figures used only by the old publication cards were removed.
- The headingless awards strip was removed; every award is a dated, linked item in News, which moved from the About section to directly below the intro (newest six shown, the rest under "Earlier news"). About now holds only the bio.
- The New Journal of Physics 2020 paper (Barua et al.) moved from the cancer-invasion line to the collective-behavior line.
- Section order is now intro, News, Research, Publications, Software, Talks, Funding & teaching, About, Contact. Each section has one plain heading; the eyebrow labels that repeated the headings were removed.
- The three research approaches moved to the top of Research. The collaboration note moved into Contact ("Get in touch"), which now lists only email and address; profile links stay in the intro.
- Removed the three-approach row and the selected-publications list: the research lines carry the papers, and Publications now only points to Google Scholar and the CV. Removed the Dana-Farber seminar from the selected talks.
