# Copilot Instructions — GitHub PPTX Starter

This repository is a starter kit for building on-brand GitHub `.pptx` decks.

## When the user asks to create a presentation, slide deck, or .pptx file

**Read [.copilot/skills/github-presentation.md](../.copilot/skills/github-presentation.md) first**, then follow it strictly. It contains:

- The official "GitHub 2025" theme (colors, fonts, typography scale)
- Brand asset filenames and usage rules
- Slide layout catalog
- Hard rules (e.g. never use `#` in hex, never reuse option objects)
- The mandatory QA pipeline

## Output rules

- Write generated decks to `decks/`.
- Use `LAYOUT_16x9` (10" × 5.625").
- Pick **dark mode or light mode** and keep it consistent for the entire deck. Default to dark mode.
- Reference brand assets from `.copilot/assets/` using `path.resolve(__dirname, "../.copilot/assets", filename)`.
- After generating, run the QA pipeline from the skill file (`markitdown` text extraction at minimum). Fix any leftover placeholders, overflow, or contrast issues, then re-render.

## Coding style

- Use CommonJS (`require`) for the deck scripts — matches PptxGenJS conventions.
- Define style option objects inline at each `addText` / `addShape` call. **Do not reuse option objects** — PptxGenJS mutates them in place.
- Hex colors as strings without `#`: `"5EEC83"` not `"#5EEC83"`.

## Fonts

- Headings: Mona Sans SemiBold (fallback Arial Black)
- Body: Mona Sans / Mona Sans Medium (fallback Arial)
- Code: Monaspace Neon (fallback Roboto Mono / Consolas)

If the user hasn't installed Mona Sans / Monaspace Neon, the deck still renders — fonts fall back gracefully — but suggest installing from https://brand.github.com for an exact brand match.

## Product → color mapping (not optional)

| Product | Color |
|---|---|
| Copilot / AI | Purple `8241FA` (or `8534F3`) |
| GHAS / Security | Red `FE4B25` |
| Actions / CI-CD | Yellow `D8BD0E` |
| Generic CTA / Data callouts | Green `5EEC83` |
| Links / Info | Blue `006EDB` |

## Mascot rules

- **Use** Mona / Copilot bot / Ducky for community, events, developer engagement.
- **Don't use** for enterprise sales, security, money, or serious topics.
- Use sparingly — surprise and delight, not fill space.

## Don't

- Don't add accent lines under titles. Use whitespace.
- Don't alternate dark → light → dark per slide ("sandwich" pattern is deprecated).
- Don't use third-party logo sources (Flaticon, Icons8, etc.) — only `.copilot/assets/`.
- Don't put more than one consecutive slide with the same layout.
- Don't skip the QA pipeline.
