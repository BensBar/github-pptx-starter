# GitHub PPTX Starter

A drop-in Copilot starter for building **on-brand GitHub `.pptx` decks** with PptxGenJS.

Hand this to GitHub Copilot (CLI, VS Code, or macOS app) in this directory and ask:

> "Build me a 5-slide deck for a Copilot enterprise rollout kickoff."

It will read [.copilot/skills/github-presentation.md](.copilot/skills/github-presentation.md), follow the brand rules, and write a `.pptx` into `decks/`.

---

## What's in the box

```
github-pptx-starter/
├── .copilot/
│   ├── skills/github-presentation.md   # Full brand + code skill (the source of truth)
│   └── assets/                         # Official GitHub brand PNGs (logos + mascots)
├── .github/
│   └── copilot-instructions.md         # Tells Copilot to read the skill
├── decks/
│   └── example-deck.js                 # Working scaffold — title, content, closing
├── package.json
└── README.md
```

## Setup

```bash
# 1. Install Node deps (PptxGenJS)
npm install

# 2. Install Python deps (markitdown — for QA text extraction)
pip3 install "markitdown[pptx]"

# 3. (Optional, recommended) Install LibreOffice + poppler for visual QA
brew install --cask libreoffice
brew install poppler
```

## Build the example deck

```bash
node decks/example-deck.js
open decks/example.pptx
```

## Build a new deck with Copilot

In Copilot CLI / VS Code / macOS app, in this directory:

> "Read `.copilot/skills/github-presentation.md`, then build me a 6-slide deck for a GHAS QBR with Acme Corp. Dark mode. Save it as `decks/acme-ghas-qbr.pptx`."

Copilot will follow the brand rules (dark mode throughout, Mona Sans, product→color mapping, no `#` in hex, etc.) and produce a deck.

## QA your deck

```bash
# Text extraction — confirm content is right and no placeholders survived
python3 -m markitdown decks/example.pptx

# Visual extraction (optional) — get one image per slide for eyeball review
soffice --headless --convert-to pdf --outdir decks decks/example.pptx
pdftoppm -jpeg -r 150 decks/example.pdf decks/slide
ls decks/slide-*.jpg
```

Inspect for: overflow, overlap, low contrast, misalignment, leftover placeholders. Fix → re-render → re-inspect.

## Refreshing brand assets

If the GitHub brand kit updates:

```bash
curl -fsSL "https://brand.github.com/GitHub_Logos.zip" -o /tmp/github-logos.zip
unzip -o /tmp/github-logos.zip -d /tmp/github-logos
# Replace the files in .copilot/assets/ with the matching PNGs from the unzipped kit.
```

Logo filename mapping is in the skill file under "Available assets — Logos".

## The non-obvious rules that make decks good

1. **Pick dark or light and stay in it for the whole deck.** No sandwich pattern.
2. **Type at the right scale.** Body 8–9pt, hero 45pt, big stats 30pt. Bigger feels safer but reads like a townhall.
3. **Never use `#` in hex strings** — `"5EEC83"` not `"#5EEC83"`. Silently corrupts the file.
4. **Never reuse option objects** across `addShape` / `addText` calls — PptxGenJS mutates them in place.
5. **Install Mona Sans + Monaspace Neon** locally for true brand match. Fonts available at https://brand.github.com.
6. **Run the QA pipeline every render.** First render is always wrong somewhere.
7. **Mascots (Mona, Copilot bot, Ducky) are for community / dev content only.** Never on enterprise sales, security, or money slides.
8. **Product → color is not optional.** Copilot = purple. GHAS = red. Actions = yellow. Generic = green.

Full details in the skill file.

---

Built for anyone making GitHub-branded `.pptx` decks. All brand assets and design patterns are sourced from the public [brand.github.com](https://brand.github.com).
