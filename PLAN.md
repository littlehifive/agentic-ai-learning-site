# Plan: Interactive Slide-Deck Learning Site for "The Hitchhiker's Guide to Agentic AI"

## Context

The book exists as a 603-page PDF (`docs/The Hitchhiker's Guide to Agentic AI.pdf`) and a distilled 29-chapter Claude Code skill (`~/.claude/skills/agentic-ai-guide/`). The goal is to **learn agentic AI quickly** from a single **interactive, visually appealing website** where the slides for all chapters live in one site, with navigation to switch between chapters. The aesthetic must match the **`taf-web-design`** skill (navy/gold/Montserrat). **Chapter 1 is built first as a reviewable sample** before the other 28 chapters are generated.

The deck is **pedagogy-first and built for a LAY audience**: each chapter is a curated *learning arc* that follows the **book's own section structure (headers/subheaders from the PDF)**, explains every technical term in plain English with a concrete analogy, shows the **evolution** of methods (what fixed what), pairs them with concrete examples and **interactive** learning moments, and embeds selected **original figures from the book** where they aid understanding.

**Decisions confirmed:**
- **Navigation:** Deck-style — a home launcher of chapter cards grouped by the book's 6 Parts (plus a `ch00` Introduction "Start here" card), and a slim in-chapter top bar (home + chapter label + slide dots + prev/next + counter). The launcher shows each chapter's book title + a one-line description, and credits the author (Haggai Roitman).
- **Density:** Thorough learning arc — **~16–20 slides per chapter**, following the book's section order. One concept per slide, every jargon term explained. (Earlier chapters were drafted at ~12; the lay-audience rework raised this.)
- **Book-faithful structure + lay explanations:** backbone = the PDF's headers/subheaders; lead with intuition + an analogy, name the term second; every concept slide carries an **"In plain terms"** callout defining its 1–3 jargon terms in one plain line each.
- **Concepts & evolution over coverage:** prioritize the *spine* concept, the *lineage* of methods, good worked examples, and interactivity. Reference tables are trimmed/carded/toggled, not exhaustively reproduced.
- **Original book figures:** embed **1–2 curated figures per chapter** where the book diagram is information-dense and a CSS redraw would lose meaning; simple diagrams are rebuilt CSS-native and on-brand. Each figure shows its source + page.
- **Credit:** all ideas, structure, and figures are the author's; the deck is a simplified, interactive companion for newcomers, stated on the launcher and in the Introduction.
- **Output location:** this repo, `/Users/michaelfive/Code/mystuff/agentic-ai-learning-site/`.

## Goal / Outcome

A self-contained static site: a forked TAF deck shell whose home screen is a 6-Part chapter launcher, where clicking a chapter opens its 1920×1080 slide deck with animated reveals, keyboard + click navigation, deep-linking, and PDF export — all pixel-matching the TAF brand. Each chapter is a curated learning arc (concept → evolution → annotated book figure → interactive worked example → check-yourself), not a reference dump. Chapter 1 ships first for sign-off; it establishes the **visual + pedagogical grammar** (evolution rail, figure-spotlight, and the interactive learning patterns) that chapters 2–29 follow.

## Architecture: fork the existing TAF deck shell (per-slide files)

The shell at `~/.claude/skills/taf-web-design/slides/assets/deck_index.html` already loads each slide as an **iframe** and communicates via **`postMessage`** (`deckFontsReady`, `deckKey`) — so it already survives `file://`, and the verification tooling (`shoot.mjs`, `export_deck_pdf.mjs`) operates per slide file. We keep that model and fork the shell to hold a nested manifest + chapter navigator. We do NOT invent a single-file-per-chapter or fetch-based SPA (both lose tooling and/or break on `file://`).

The shell's present-mode iframe scaler (`fit`/`show`), font-ready reveal, keyboard handler, print stack, and transition CSS are reused **unchanged**. Only the overview (home) and a new navigator bar + nested-manifest routing are added.

### File / folder structure

```
index.html                 # NEW: fork of deck_index.html — home launcher grid + in-chapter
                           #      top navigator + nested-manifest swap + #chNN/N hash routing
manifest.js                # NEW: window.SITE_MANIFEST = 6 Parts -> chapters -> ordered slide list + labels
shared/                    # copied VERBATIM from taf-web-design/slides/assets/
  taf.css  anim.css  anim.js  fonts.css  fonts/montserrat-var.woff2
  code.css                 # NEW: code/table styling using SYSTEM MONOSPACE only (SF Mono/Menlo)
  learn.css                # NEW: styles for evolution rail/tree, figure-spotlight, and the D1-D4 patterns
  learn.js                 # NEW: ~40-line generic click delegation for the interactive patterns
figures/
  figures-manifest.json    # NEW: single source of truth: id -> chapter/page/file/caption/source/whatToNotice[]
chapters/
  ch01-llm-architecture/  01-cover.html 02-core-idea.html ... 12-connects.html
    figures/              # NEW: chapter's curated book-figure PNGs (figNN-slug.png)
  ch02-systems-gpu/       ...  figures/
  ...
  ch29-conclusion/
scripts/
  shoot.mjs  export_deck_pdf.mjs   # copied verbatim from taf-web-design/slides/scripts/
  shoot-all.mjs                    # NEW: thin loop running shoot.mjs over every chapters/chNN dir
  extract_figures.mjs              # NEW: pdftoppm + sips render-and-crop pipeline -> chapters/chNN/figures + manifest
.github/workflows/deploy-pages.yml # copied (GitHub Pages auto-deploy)
.nojekyll                          # copied from nojekyll.txt
README.md                          # update with run/deploy instructions + figure attribution note
```

Each slide file is an ordinary TAF slide (links `../shared/taf.css` etc. — one level deeper than the stock template) and keeps the verbatim bottom `postMessage` script so the shell's font-ready reveal and key-forwarding work.

## Navigation UI (deck-style, grouped by 6 Parts)

- **Home launcher** (default landing): navy page reusing the shell's animated grid background. Six groups (one per Part) with a gold eyebrow ("PART I" … "PART VI") over the Part name, then chapter cards (`.card`) showing a large tabular gold chapter number + title, with the existing gold-ring hover/lift. Click → opens that chapter at slide 1. This is the "tabs" expressed as a scalable 6-group grid rather than a 29-tab strip.
- **In-chapter top bar** (present mode): left = six Part pills (gold = active Part); center = the active Part's chapters as numbered chips (gold = current chapter; Part V's 12 chapters wrap on one row); right = slide dots (one per slide), prev/next arrows, and a Home button back to the launcher.
- **Routing:** extend the shell's `#N` hash to `#chNN/N` (chapter + slide) for deep links and resume; keep `localStorage` last-position.
- Keyboard stays as the shell defines it (←/→/Space/Home/End/digits/P-print/Esc). The 6 Parts: I Foundations (ch1–3), II RL Methods for LLMs (ch4–12), III Reasoning (ch13), IV Evaluation (ch14), V Agentic AI (ch15–26), VI Assessment & Reference (ch27–29).

## Per-chapter slide sequence (BOOK-FAITHFUL LEARNING ARC, ~16–20 slides)

**Backbone = the book's own section headers/subheaders (read from the PDF, not the condensed skill md).** Each chapter walks the author's sections in order; the arc steps below are the *roles* those slides play. Built for a LAY audience: each concept slide leads with intuition + an analogy, names the term second, and carries an **"In plain terms"** callout that defines its 1–3 jargon terms in one plain line each. **Required** steps always appear; **conditional** steps emit only when the chapter has that material. Most chapters land at **16–20 slides** (one concept per slide); the reference-heavy ch27/ch28 use a table/activity-heavy variant.

Source-of-truth for content is the **PDF chapter** (`docs/...pdf`); use the skill md only as a cross-check. Extract the chapter's section list with `pdftotext -f <start> -l <end> -layout`.

| # | Step (role in the arc) | TAF archetype | Required? | Source md section |
|---|---|---|---|---|
| 1 | Cover / hook — title with one gold accent word + one-line core idea + Part/chapter eyebrow | hero/cover (dark) | always | Core Idea (first sentence) |
| 2 | The core question / concept — single assertion the chapter answers | divider (dark) | always | Core Idea |
| 3 | Orientation / the spine — the one diagram that frames the chapter (pipeline, stack, loop) | explainer/orientation | always | the "spine" section |
| 4 | Concept build — how the core mechanism works, click-stepped; hosts inline ≤8-line code | explainer + interactive step-through (D2) | always | Key Concepts (load-bearing 3–5) |
| 5 | Evolution / lineage — "what fixed what" + dates where confident | timeline / method-tree (see *Concept-evolution slide pattern*) | if a lineage exists | Frameworks + Mental Models |
| 6 | Annotated book figure — original diagram + "what to notice" list | figure-spotlight (see *Original book figure*) | if a curated figure exists | book PDF figure |
| 7 | Worked example (interactive) — the chapter's signature example, click-revealed | activity + interactive reveal/trace (D2) | if Worked Examples present | Worked Examples |
| 8 | When to use / decision — the reusable judgment call (folds in reference tables) | decision/comparison | if a clear rule/tradeoff exists | Mental Models / "when to use" |
| 9 | Anti-patterns | warning (navy panel, gold load-bearing phrase) | if Anti-patterns present | Anti-patterns |
| 10 | Key takeaways — cap at the 3 best | synthesis (gold-numeral cards) | always | Key Takeaways |
| 11 | Check yourself — 2–3 click-to-reveal Q&A | activity + interactive Q&A flip (D1) | always | mapped ch27 sections |
| 12 | Connects to — link cards to related chapters | closing (dark) | always | Connects To |

**Content rules (lay-audience first):**
- **Use the book's section headers** as the slide eyebrows (e.g. "1.2 Tokenization", "1.3.5 Self-attention") so the deck mirrors the source.
- **Explain every term.** No jargon without a plain-English unpacking. Each concept slide = intuitive `.lead` paragraph + an `.analogy` ("Think of it like ...") + an **"In plain terms"** `.plain` callout. Fill the gaps the technical book assumes.
- **Frameworks** become nodes on the evolution slide or rows in the decision slide — never a bare term dump.
- **Reference tables** become an interactive before/after comparison (D3) or a carded "top rows + footnote" — never a wall of cells.
- **Code** is inline (≤8 lines, system mono), never a standalone slide.
- If a chapter has no lineage (e.g. a structural chapter like MCP), skip the evolution slide; never fabricate one.

There is also a **`ch00` Introduction deck** (built from the book's Preface/Introduction): cover + credit, the big-picture full-stack thesis, the 10-milestone history timeline, the "architecture + scale + learning signal" pattern, a how-it-is-organized slide using Figure 1 (p.33), what-you-will-gain, how-to-read, and a "Start with Part I" closing.

## Concept-evolution slide pattern

Two variants, both built on the **timeline archetype** primitives (a gold rule that grows in via `data-grow-w`, nodes revealing left-to-right). Order is by **problem-pressure ("what fixed what"), not chronology** — but real publication years/paper names are added **where confident** (see dates rule).

- **B1 Linear lineage rail** (`.evo-rail`): a horizontal gold rule (`data-grow-w`, final width set inline so it rests correct under `?static=1`) with ordered `.evo-node` cards. Each node carries: the **method name** (navy, 800), a gold **"fixes:"** one-liner (the limitation the previous step left open), and — where confident — a real **year/paper** label. The final/current node gets `.evo-node--now` (gold ring). The `.evo-link` connector between nodes captions the limitation being removed (e.g. "high variance →").
- **B2 Branching method tree** (`.evo-tree`): for lineages that fork (e.g. `RLHF → DPO → {KTO, IPO, ORPO}`; `GRPO → {DAPO, Dr.GRPO, GSPO}`). CSS grid with explicit gaps (never absolute positioning — same overlap-prevention rule as the synthesis archetype); vertical branch connectors grown via `data-grow-h`; the surviving/best leaves get `.evo-node--now`.

**Ready examples from the content:** reasoning ladder `CoT → Self-Consistency → ToT → GoT → MCTS` (each adds exactly one capability); policy-gradient `REINFORCE → A2C → Actor-Critic/GAE`; self-improvement `STaR → Reflexion → Voyager → LATS`; alignment `RLHF → DPO → {KTO, IPO, ORPO}` and `GRPO → {DAPO, Dr.GRPO, GSPO}`.

**Dates rule:** add a real year/paper only where the fact is well-established and verifiable (e.g. PPO 2017, DPO 2023, DeepSeek-R1/GRPO 2024–2025). Omit the date when unsure; **never guess**. This is a verification gate (see *Verification*).

**Authoring rule:** a chapter gets an evolution slide ONLY if its md contains a lateral chain (a "→" sequence in Core Idea / Mental Models, or a "variants" table). Structural chapters (e.g. MCP) get none.

## Original book figure — extraction pipeline + slide pattern

**Why this exists:** the book has ~72 information-dense, on-brand (white-background, navy/line-art) diagrams. Selected originals are embedded where a CSS redraw would lose meaning.

**Pipeline** (`scripts/extract_figures.mjs`, new build artifact; reuses installed `pdfimages`/`pdftoppm`/`sips`, no pymupdf):
1. Enumerate candidates: `pdfimages -list "docs/The Hitchhiker's Guide to Agentic AI.pdf"` → rows of `(page, w, h, ppi)` (72 candidates / 69 pages).
2. **Primary path — render + crop** (handles the alpha masks and any vector overlays cleanly): `pdftoppm -f P -l P -r 200 -png` → full-page PNG, then `sips --cropOffset Y X --cropToHeightWidth H W` to the figure bbox (offsets = pdfimages bbox × `200/72`, hand-tuned per kept figure).
3. Normalize for the deck: `sips --resampleWidth ~1400` (longest edge ≤ ~1500px) so the stock 12px-radius `img` rule and card framing look right. Keep PNG (lossless, small for flat diagram regions).
4. Write the manifest `figures/figures-manifest.json` — one entry per **kept** figure: `{ id, chapter, page, file, caption, source, whatToNotice[] }`.

**Repo layout:** figures co-located per chapter — `chapters/chNN-*/figures/figNN-slug.png` (relative `./figures/...` paths survive `file://` + GitHub Pages). Root `figures/figures-manifest.json` is the single source of truth subagents read and append to.

**Figure-spotlight slide** (`.fig-spotlight`, a light explainer, two columns):
- **Left (~60%):** `<figure class="card">` (white surface, 1px border, 12px radius) wrapping `<img data-reveal="scale">`, plus a `<figcaption>` row: a gold mark (`.fig-cap .mark`, reuse the footnote gold-bar) + caption, and a muted **source line** `.fig-src` — "Source: Roitman, *Hitchhiker's Guide to Agentic AI*, p.NN" (always present; verification gate).
- **Right (~40%):** `<ol class="fig-notes">` "What to notice" — 3–4 numbered points (gold tabular numerals, reuse `.step .num`) from the manifest `whatToNotice`, revealing staggered after the figure scales in.

**Curation rubric** (for rollout subagents): map figures to chapters by page range; keep **≤1–2 per chapter**; keep only if the figure shows the chapter's core mechanism/lineage and would lose meaning if redrawn. **Skip** logos/banners (e.g. the p1 image), code/text screenshots, low-res scans, and CSS-trivial 2–3-box diagrams (rebuild those native). Prefer a clean CSS redraw over a poor scan.

**Attribution / copyright:** README gets — "Figures © Haggai Roitman, reproduced from *The Hitchhiker's Guide to Agentic AI* for personal study; not for redistribution." Keep the repo private or clearly mark figures; subagents must not strip source captions.

## Learning interactivity patterns (click-only, PDF-safe)

A small `shared/learn.js` (~40 lines) loaded after `anim.js` provides generic `data-toggle-target` / `data-tab-group` click delegation, so most slides need zero bespoke JS. **Every pattern:** ships all states in the DOM, pre-shows a complete default, mutates only a class (0.2–0.4s transition), uses unique names, never adds a global listener that swallows nav keys (arrows are reserved by the shell), and includes a `?static=1`/`@media print` rule that reveals the full state so PDF export reads complete.

- **D1 Q&A flip** (`.qa-card`/`.is-open`) — check-yourself; attaches to **activity**. Default shows the question + uppercase "REVEAL" hint; click reveals the answer + "Review: Chapter X" pointer. Print reveals **all** answers (study sheet). Content sourced from the chapter's mapped ch27 sections.
- **D2 Step-through build** (`.build`/`.bc-step` + `.bc-nav`) — concept build + worked-example trace; attaches to **explainer/activity**. Cumulative build; default = final step complete so print reads finished. Hosts ≤8-line code snippets and traces (Game-of-24, Reflexion three-attempt).
- **D3 Tabbed before/after compare** (`.cmp`/`.cmp-tab`/`.cmp-panel`) — attaches to **decision/chart**. First tab pre-selected; print stacks all panels. Turns a wide reference table into two digestible toggled cards.
- **D4 Hover-to-explain diagram** (`.diagram`/`.hot` + `.explain-caption`) — attaches to **orientation/figure-spotlight**. Default caption (first part) always shown; pointer/click updates it; print adds a numbered legend of all parts.

## Chapter 1 — as built (20 slides, book sections 1.1–1.17)

Ch1 is the visual + pedagogical grammar for the rollout. It follows the PDF's section order and explains every term for a lay reader. Slide files in `chapters/ch01-llm-architecture/`:

cover → core-idea (divider) → **(1.1)** the pipeline → **(1.2)** tokenization (Lego analogy) → **(1.3.4)** embeddings (map-of-meaning) → **(1.3.5)** self-attention (Q/K/V, causal mask) → **(1.3.6–7)** multi-head + RoPE → **(GQA + KV cache)** (scratchpad analogy) → **(1.3)** the Transformer block + **Figure 1.3** → **(1.6)** Flash Attention + evolution rail (HBM vs SRAM) → **(1.5)** the optimizer (AdamW + learning rate; downhill-in-fog analogy) → **(1.5)** training stability (warmup, schedule, clipping, mixed precision) → **(1.9)** LoRA/QLoRA (sticky-notes analogy) → **(1.14)** smaller & cheaper (quantization, distillation, pruning) → **(1.10)** Mixture of Experts + **Figure 1.11** → **(1.12)** decoding (interactive top-p vs top-k) → anti-patterns → takeaways → check-yourself (D1) → connects-to.

Every concept slide uses the book section as its eyebrow and carries an "In plain terms" callout. Figures used: Fig 1.3 (transformer block, p.40), Fig 1.11 (MoE, p.79); the intro uses Fig 1 (modern AI pipeline, p.33). All with source + page lines.

## Reuse vs new code

- **Verbatim copies:** `taf.css`, `anim.css`, `anim.js`, `fonts.css` + font, both slide templates (keep the `postMessage` script verbatim), `shoot.mjs`, `export_deck_pdf.mjs`, `deploy-pages.yml`, `nojekyll.txt`. The shell's `fit`/`show` scaler, font-ready reveal, key handler, print stack, the `data-reveal`/`data-grow-*` animation system, the `?static=1` contract, and the postMessage protocol are all reused unchanged.
- **New:** `index.html` (forked shell: home launcher with credit + `ch00` Start-here card + per-chapter descriptions + `#chNN/N` routing), `manifest.js` (book-exact titles + per-chapter descriptions + part blurbs + `intro`), `shared/code.css` (system monospace), `shared/learn.css` + `shared/learn.js`. `learn.css` carries the evolution rail/tree, figure-spotlight, the D1–D4 interactive patterns, and the **lay-audience patterns**: `.lead`, `.analogy`, the **`.plain` "In plain terms" callout**, the vertical `.timeline` (intro history), `.gains`, and `.parts-list`. Plus `scripts/extract_figures.mjs` + `figures/figures-manifest.json`, per-chapter `figures/` dirs, and the `ch00-introduction/` deck. Nothing about the shell, routing, or PDF tooling changes.

## Phased workflow

- **Phase 1 — Pilot (build + review):** scaffold `shared/` (incl. `code.css`, `learn.css`, `learn.js`), `index.html` shell, `manifest.js`, and the per-chapter template. Build `scripts/extract_figures.mjs` and run it to produce Chapter 1's 1–2 curated figures into `chapters/ch01-llm-architecture/figures/` plus the seeded root `figures/figures-manifest.json`. Build the **revised ~12-slide Chapter 1 deck** (above), which exercises every new pattern at least once (evolution rail, figure-spotlight, D1/D2/D3). Wire the home grid (all 29 chapters listed, only Ch1 active/linked) so navigation is demonstrable. Verify with `shoot.mjs` (incl. a clicked state for each interactive slide and the `?static=1`/PDF render). **Stop for review of Chapter 1** — it is now the visual + pedagogical grammar.
- **Phase 2 — Rollout (after approval):** generate chapters 2–29 using the approved Ch1 as the grammar. Run as **parallel subagents in small batches (~4 per wave)** — one chapter each. Each subagent: reads its `chNN-*.md`, its slice of `figures-manifest.json`, and its mapped ch27 quiz sections; **curates and extracts ≤1–2 book figures** for its chapter (rubric above); builds an **evolution slide only if a lineage exists** (no fabricated dates); fills the learning-arc template (conditional steps per the checklist); builds the interactive slides with the shared helpers; and self-verifies with `shoot.mjs` (clicked + `?static=1` states). Then populate `manifest.js` fully and do a whole-site QA pass.

## Serving / deployment

- **Local review:** `cd agentic-ai-learning-site && python3 -m http.server 8000`, open `http://localhost:8000/`. (Double-clicking a single chapter works via postMessage, but the home grid's live thumbnails + hash routing are only reliable over http; optionally pre-render thumbnail PNGs via `shoot.mjs` for a file://-robust grid.)
- **Publish:** GitHub Pages via the copied `deploy-pages.yml` + `.nojekyll`; all paths are relative so it serves from the repo subpath.

## Verification

1. Per chapter: `node scripts/shoot.mjs chapters/chNN _verify/chNN` — screenshots every slide at 1920×1080 (`?static=1`), flags `OVERFLOW` past canvas bounds and console errors; read the PNGs. Capture a clicked state for each interactive (D1–D4) slide. Pay attention to figure slides, evolution rails, and folded comparison/decision slides (the ones that used to be tables) for overflow.
2. **Figures:** every `<img>` resolves (no broken / 0-byte), longest edge ≤ ~1500px, sits in a 12px-radius `.card`; every figure-spotlight slide has a non-empty `.fig-src` source+page line (grep the manifest that each kept figure has `source` + `page`).
3. **Interactive default renders complete for PDF:** `node scripts/export_deck_pdf.mjs --slides chapters/chNN --out chNN.pdf` (and a `?static=1` shoot) — confirm D1 answers revealed, D3 panels stacked, D2 builds at final step, D4 default caption + legend present.
4. **No fabricated dates on evolution slides:** `grep -nE "\b(19|20)[0-9]{2}\b" chapters/chNN/*.html` → every year must be a known, verifiable fact (spot-check); omit if unsure.
5. `grep -n "—" chapters/chNN/*.html` (excluding `<title>`) → confirm **zero em dashes** (TAF rule).
6. Manual pass over `index.html` on the local server: home grid renders, Part pills switch the chapter rail, slide dots/prev/next page, `#chNN/N` deep links resolve, arrow keys page after clicking inside a slide.
7. TAF QA checklist: one H1 per slide, gold only on accents/CTAs/metrics, navy-tinted shadows only, no italics/emoji/gradients, Montserrat-only (mono only inside code blocks), reduced-motion respected.

## Risks / edge cases

- **Wide tables at 1920×1080** (ch01 decoding & PEFT tables; ch07 GRPO variants; ch25 frameworks): in the new arc these become a D3 toggle or a "top rows + footnote" card rather than a full table. `shoot.mjs` overflow detection is the gate.
- **Figure crop offsets need per-figure tuning** (`sips` crop is manual-ish): mitigate by rendering at 200 dpi and hand-verifying each kept figure during the pilot; only commit figures that pass review.
- **Evolution rails can overflow long chains:** cap node count, allow a two-row rail, or fall back to the branching tree (`.evo-tree`). `shoot.mjs` overflow is the gate.
- **Interactivity must never break the static export:** enforced by the `?static=1`/`@media print` "reveal-all" CSS baked into each D1–D4 pattern and gated by `export_deck_pdf.mjs`.
- **Code/formulas need monospace**, but TAF forbids a second display typeface → resolved by the design system's explicit carve-out: system monospace (`SF Mono`/`Menlo`) is allowed for code/terminal only; `shared/code.css` ships no downloaded font. Keep snippets ≤8 lines.
- **Scale (~290–350 slide files):** the curated learning arc × 29 chapters. Mitigated by per-chapter folders, the fixed arc template, parallel batched subagents, and per-chapter `shoot.mjs` gating. Phase 1 de-risks the grammar before the rollout.
- **Cross-chapter visual consistency:** enforced by identical `shared/` assets, the approved Ch1 handed to every Phase-2 subagent, and a fixed arc-sequence + class-name template.
- **Node/Playwright dependency:** `shoot.mjs`/`export_deck_pdf.mjs` need `npm install playwright pdf-lib` + `npx playwright install chromium`. Figure pipeline needs poppler (`pdfimages`/`pdftoppm`) + `sips` (built-in macOS) — all confirmed present. If unavailable, fall back to manual in-browser review on the local static server.

## Critical files (sources to reuse)
- `~/.claude/skills/taf-web-design/slides/assets/deck_index.html` — shell to fork into `index.html`
- `~/.claude/skills/taf-web-design/slides/assets/slide-template-content.html` + `slide-template-divider.html` — per-slide starters (verbatim postMessage script)
- `~/.claude/skills/taf-web-design/slides/assets/taf.css` + `anim.css` + `anim.js` + `fonts.css` + `fonts/` — the aesthetic/animation backbone (copy to `shared/`)
- `~/.claude/skills/taf-web-design/slides/scripts/shoot.mjs` + `export_deck_pdf.mjs` — verification
- `~/.claude/skills/taf-web-design/slides/references/slide-archetypes.md` — archetype patterns to apply (esp. Timeline/Explainer/Comparison/Activity for evolution, figure, and interactive slides)
- `~/.claude/skills/agentic-ai-guide/chapters/ch01-llm-architecture-optimization.md` — Phase 1 content source (and ch02–29 for Phase 2)
- `~/.claude/skills/agentic-ai-guide/chapters/ch27-quiz-self-test.md` — source for the D1 check-yourself Q&A + "Review:" pointers (mapped per chapter)
- `~/.claude/skills/agentic-ai-guide/SKILL.md` — Parts grouping + chapter index for `manifest.js`
- `docs/The Hitchhiker's Guide to Agentic AI.pdf` — figure source for `scripts/extract_figures.mjs` (render-and-crop via `pdftoppm` + `sips`)
