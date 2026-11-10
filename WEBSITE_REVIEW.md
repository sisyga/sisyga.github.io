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

# Revision — 30 October 2026

Goal: the page read as one long block (measured before: 1,423 words, 7,460 px at 1440 px width, 12,040 px at 390 px; Research 46% of the words), and AI-assisted modeling was missing from Research. Decisions by the user: cancer lines first, AI second, no AI-centered rewrite; video only on LinkedIn, labeled as such; five terms of Discrete Models tutorials.

## Changes

- Research: new line 03 "LLM agents that build tissue models from the literature" (Morpheus.AI), drafted from the arXiv version of the manuscript (morpheus-ai-manuscript/main.tex, 29 Oct 2026; abstract and results). Former lines 03 and 04 became 04 and 05. Its figure (`assets/figures/morpheus-ai-2026.webp`) combines Fig. 1c of the preprint (the agent loop) with the germ-line model the agent built; both are the authors' own and contain no third-party material. Links point to the two public Apache-2.0 repositories until the arXiv ID exists.
- Research layout: each line shows a one-sentence `summary`; question, finding, next steps and notes open under "Read more". The intro paragraph gained one sentence on methods and LLM agents.
- Publications section removed; its sentence is now the closing line of Research (anchor `#publications` kept). Nav item removed.
- Intro: the second sentence now names agent-based models, mathematical analysis, inference from experimental data and LLM agents (it said "stochastic models, mathematical analysis and experimental data"). New button "Video portrait (LinkedIn)" to the CIDS "Driven by people" portrait (posted 13 Oct 2026; two minutes, German with English subtitles; not hosted elsewhere). New GoatCounter event `video-portrait`.
- News shows four items (was six), talks four (was all seven; the rest under "More talks").
- Software: the Morpheus.AI card no longer says "in development" or "human-supervised" (the preprint reports runs without human intervention); it describes the skill, MCP server and benchmark and links both repositories.
- Funding & teaching: "Four terms" corrected to "Five terms" of Discrete Models tutorials (winter 2026 included).
- Metadata: page description and link preview use the user's wording ("agent-based models of cells and tissues, their analysis and inference, and LLM agents that build simulation models; applied to tumor evolution and therapy resistance"); `knowsAbout` gained "Large language model agents" and "Virtual tissue models".
- Visual rhythm: a light tint on News, Software and Funding & teaching; section headings one step smaller; figure height capped at 380 px.
- Printing opens all collapsed text.

## Validation

Built with Jekyll 3.10 and rendered with Playwright at 1440 × 900 and 390 × 844 in both themes: no horizontal overflow, no script errors. Heights after: 7,070 px (laptop) and 10,540 px (phone). The laptop height is now set mostly by the figures, not the text.

## Open

When the arXiv ID appears: add the news item, add the preprint to line 03's links (and drop `refs_label: Code`), and check the arXiv license.

## Follow-up, same day

Requested by the user after review of the live page:

- Removed the side text next to the section headings (Research, Selected talks).
- About: removed the grade of the PhD and its link to the thesis.
- Contact: removed the Marusyk group from the collaborations; the profile links (Google Scholar, ORCID, GitHub, Bluesky, LinkedIn) now also appear below the email.
- Funding: FOSTER.AI moved to the top of "Collaborative projects & roles", dated 2026–2027. The teaching & supervision block was removed, so the section and its nav item are now called "Funding".
- Research line 01, "Now": removed the lung-cancer collaboration, in line with Contact.
- Contact: removed the collaborations paragraph (misplaced there) and Google Scholar and ORCID from its links, which are now GitHub, Bluesky and LinkedIn.
- Software: the Morpheus.AI card now describes the agentic workflow (agents turn a published study into a model, run it, inspect the output and revise it, without human intervention); the skill is named as one of its components.
- Contact: the email, social links and address sit in one card (top row email in the display font, then social links, then the postal address on four lines), vertically centered next to the text. The rule-separated rows and pills were removed.

# Revision — 10 November 2026

The preprint is public: arXiv:2611.05413, submitted 29 October 2026, CC BY 4.0. This closes the open item of 30 October.

- News: new first item (Nov 2026) linking the preprint. News still shows four items, so the EPJ Special Topics item of February 2026 moved under "Earlier news".
- Research line 03: the preprint is the first link and the label above the links is "Papers" again (`refs_label: Code` removed). The summary names MorpheusAI. The figure caption links the preprint and states its license. One sentence added to "What we found": a cheaper LLM met 60–73% of the criteria at about a tenth of the cost (preprint results: 0.60–0.73 against 0.83–0.86; mean US$0.32 against US$3.74 per run).
- Naming: "MorpheusAI" without the dot in the Software card and in Funding (see CLAUDE.md). The public CV still says "Morpheus.AI".
- Software: the MorpheusAI card gained an internal link "Results and preprint" to research line 03, so the preprint itself is still linked only from the research line and News.
- The preprint links use `https://arxiv.org/abs/2611.05413`, because arXiv showed the DOI as pending registration on 10 November. Switch to `https://doi.org/10.48550/arXiv.2611.05413` once it resolves, to match line 04.
- Footer date: November 2026.

Checked: built with Jekyll 3.10 and rendered at 1440 × 900 and 390 × 844 in both themes; no horizontal overflow, no script errors. External links could not be opened from the build machine, except the arXiv page.
