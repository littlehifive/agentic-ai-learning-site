# The Hitchhiker's Guide to Agentic AI — Interactive Deck

A self-contained static website that teaches the book chapter by chapter as a curated
**learning arc**: concepts, how the methods evolved, worked examples, original book figures,
and click-to-reveal self-checks. Built on the TAF deck system (navy / gold / Montserrat),
one 1920x1080 HTML file per slide, with a 6-Part home launcher and `#chNN/N` deep links.

Status: **Chapter 1 pilot** is complete (12 slides). Chapters 2 to 29 are listed on the
launcher as "coming soon" and are filled in during rollout.

## Run locally

```
python3 -m http.server 8000
# open http://localhost:8000/
```

Click a chapter on the home grid to present it. Inside a chapter: arrow keys / Space page,
click the slide dots to jump, `Esc` returns to the launcher, `P` prints the current chapter.
Deep links resolve, e.g. `http://localhost:8000/#ch01/6`.

## Layout

```
index.html              forked deck shell: 6-Part launcher + in-chapter navigator + #chNN/N routing
manifest.js             window.SITE_MANIFEST: parts -> chapters -> ordered slides
shared/                 taf.css anim.css anim.js fonts.css (verbatim) + code.css learn.css learn.js (new)
figures/figures-manifest.json   curated book figures: id, chapter, page, caption, source, whatToNotice
chapters/chNN-*/        one HTML file per slide + figures/ (curated book-figure PNGs)
scripts/                shoot.mjs, export_deck_pdf.mjs (verbatim), extract_figures helper
```

## Verify

```
npm i playwright pdf-lib && npx playwright install chromium      # once
node scripts/shoot.mjs chapters/ch01-llm-architecture _verify/ch01   # screenshots + overflow + error scan
node scripts/export_deck_pdf.mjs --slides chapters/ch01-llm-architecture --out _verify/ch01.pdf
grep -n "—" chapters/ch01-llm-architecture/*.html                # expect none (TAF rule)
```

Read the PNGs in `_verify/`. Interactive slides (check-yourself, decoding compare, build) are
captured in `?static=1`, which reveals their full state so the PDF reads complete.

## Extracting book figures

Figures are rendered from the source PDF in `docs/` with poppler + sips (page render, then crop):

```
pdftoppm -f <page> -l <page> -r 200 -png "docs/The Hitchhiker's Guide to Agentic AI.pdf" scratch/p
# crop the figure region (Python/PIL or sips), save to chapters/chNN-*/figures/figNN-slug.png
# add an entry to figures/figures-manifest.json
```

Keep at most 1 to 2 figures per chapter, only where the book diagram is information-dense and
a CSS redraw would lose meaning. Simple diagrams are rebuilt CSS-native instead.

## Figure attribution

Figures are © Haggai Roitman, reproduced from *The Hitchhiker's Guide to Agentic AI:
From Foundations to Systems* (2026) for personal study only, not for redistribution. Each
figure slide carries an inline source and page line; do not remove it.

## Deploy

Push to `main`; `.github/workflows/deploy-pages.yml` deploys to GitHub Pages. All paths are
relative, so the site works from a subpath and offline.
