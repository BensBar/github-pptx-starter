# Skill: GitHub Presentation Builder

## Purpose
Generate GitHub-branded `.pptx` presentations using PptxGenJS (Node.js). Produces polished, on-brand slide decks for customer meetings, demos, reviews, and general presentations.

All design patterns and brand assets below are derived from the public GitHub brand guidelines at [brand.github.com](https://brand.github.com).

## Toolchain

```bash
npm install pptxgenjs
pip3 install "markitdown[pptx]"
```

| Tool | Role |
|---|---|
| pptxgenjs | Generates .pptx via JS |
| markitdown | Text extraction for content QA |
| LibreOffice + pdftoppm | (Optional) Converts .pptx → PDF → slide images for visual QA |

## Official Theme: "GitHub 2025"

Color palette and typography derived from [brand.github.com](https://brand.github.com).

```javascript
const GH = {
  // Core (from theme dk1/lt1/lt2)
  black:       "0C1116",  // dk1 — primary dark background
  white:       "FFFFFF",  // lt1 — primary light / text on dark
  muted:       "B0BAC3",  // dk2 — secondary text, muted labels
  darkSurface: "20262C",  // lt2 — dark surface alt

  // Accents (from theme accent1–accent6)
  green:       "5EEC83",  // accent1 — primary CTA, numbering, data callouts
  yellow:      "D8BD0E",  // accent2
  red:         "FE4B25",  // accent3 — GHAS/security
  pink:        "FF4AC0",  // accent4
  purple:      "8241FA",  // accent5 — Copilot brand
  blue:        "006EDB",  // accent6

  // Extended from brand.github.com Copilot palette
  copilotPurple: "8534F3",
  purpleLight:   "C898FD",
  purpleDark:    "43179E",
  purpleDeep:    "26115F",
  copilotIndigo: "000239",  // used on slide 12

  // Links
  hlink:       "EEF6FC",
  folHlink:    "5EEC83",
};
```

### Fonts

The official deck uses **Mona Sans** (GitHub's custom typeface family) and **Monaspace Neon** (for code). Fall back to Arial if Mona Sans is not installed.

| Use | Font | Fallback |
|---|---|---|
| Headings | Mona Sans SemiBold | Arial Black |
| Body text | Mona Sans / Mona Sans Medium | Arial |
| Code / terminal | Monaspace Neon / Monaspace Neon Light | Roboto Mono, Consolas |

### Product-to-color mapping
- **Copilot / AI** → `purple` (8241FA) or `copilotPurple` (8534F3)
- **Actions / CI-CD** → `yellow` (D8BD0E) or `red` (FE4B25)
- **GHAS / Security** → `red` (FE4B25)
- **General / CTA / Data** → `green` (5EEC83)
- **Links / Info** → `blue` (006EDB)

### Typography scale (at 10"×5.625" output)

The official deck is authored at 40"×22.5" (4× standard 16:9). All sizes below are scaled to standard 10"×5.625" PptxGenJS output — divide the original by 4.

| Element | Size | Style |
|---|---|---|
| Hero statement (title/closing) | 45pt | Bold, white on dark |
| Section headline | 24pt | Bold |
| Subtitle / tagline | 18pt | Regular, muted color |
| Body text | 8–9pt | Regular |
| Data callout (big number) | 30pt | Bold, green accent |
| Labels / captions | 6pt | Muted |
| Code blocks | 8pt | Monaspace Neon |

### Slide background mode

**Pick one mode and stay in it for the entire deck.** Do not mix dark and light content slides.

Default to **dark mode throughout** — `0C1116` (dk1) background on all slides with white (lt1) text. Use deep indigo `000239` for occasional variety.

#### Dark mode (default)
- **All slides**: background `0C1116`, text `FFFFFF`
- Subtitle/muted text: `B0BAC3` (dk2)
- Accent numbers: `5EEC83` (green)
- Phase/wave labels: `BFFFD1` (light green tint)
- Use `white` logo variants throughout

#### Light mode (alternate)
- **All slides**: background `FFFFFF` or `F6F8FA`, text dark
- Title text: `0C1116`, subtitle: `20262C`
- Use `black` logo variants throughout

**Do not alternate** dark → light → dark per slide.

**Do not alternate** dark → light → dark per slide. The old "sandwich" pattern (dark title, light content, dark closing) is deprecated — it creates visual inconsistency.

## Brand Assets

**Source:** [brand.github.com](https://brand.github.com/foundations/logo) — the single source of truth for all GitHub brand assets.

Download: `https://brand.github.com/GitHub_Logos.zip`

Official logos live at `.copilot/assets/`. All PNGs are transparent (RGBA). **Never use third-party logo sources** (Flaticon, Icons8, etc.) — they are lower quality, often modified, and carry attribution or licensing restrictions.

### Available assets — Logos

| File | Use on |
|---|---|
| `github-invertocat-white.png` | Dark background slides (title, closing) |
| `github-invertocat-black.png` | Light background slides (content) |
| `github-lockup-white.png` | Dark slides where full wordmark is needed |
| `github-lockup-black.png` | Light slides where full wordmark is needed |
| `copilot-icon-white.png` | Copilot-specific dark slides |
| `copilot-icon-black.png` | Copilot-specific light slides |
| `github-copilot-lockup-white.png` | Copilot product lockup on dark |
| `github-copilot-lockup-black.png` | Copilot product lockup on light |

### Available assets — Mascots

Multi-pose reference sheets from brand.github.com. These have a grey (#F0F0F0) background — crop or remove background before embedding in slides.

| File | Character | Description |
|---|---|---|
| `mona-mascot.png` | **Mona** | Purple/pink cat-octopus. GitHub's primary mascot. Use for community, open source, developer culture. |
| `copilot-mascot.png` | **Copilot** | Blue/purple robot helmet. AI pair programmer avatar. Use for Copilot-specific content. |
| `ducky-mascot.png` | **Ducky** | Yellow rubber duck. Represents developers, debugging. Use for developer-facing content. |
| `copilot-logo-lockups-ref.png` | — | Copilot product icon lockup reference (shows proper lockup arrangements). |

**Mascot usage rules** (from brand.github.com):
- **DO** use for community, events, developer engagement, internal content
- **DON'T** use for enterprise sales, security, money, support, or serious topics
- **DON'T** use as logos or sub-brand marks
- Use sparingly — they should surprise and delight, not fill space

### Copilot color palette (from brand.github.com)

For Copilot-themed presentations, use these colors alongside the core GitHub palette:

| Name | Hex | Use |
|---|---|---|
| Copilot Purple | `8534F3` | Primary Copilot accent |
| Purple 1 | `C898FD` | Light purple highlights |
| Purple 2 | `B870FF` | Secondary purple |
| Purple 4 | `43179E` | Dark purple backgrounds |
| Purple 5 | `26115F` | Deep purple backgrounds |
| Orange 2 | `F08A3A` | Warm accent |
| Orange 3 | `FE4C25` | Bold accent / CTAs |

Copilot theme ratio: **80% black or white, 10% neutral, 5% green, 5% purple.** Purple highlights Copilot features without competing with GitHub Green.

### Logo placement rules
- **Title slide**: Invertocat top-left, large (~0.8" square)
- **Content slides**: Invertocat top-right watermark (~0.5" square)
- **Closing slide**: Invertocat top-left, same as title
- Use `white` variants on dark backgrounds, `black` variants on light backgrounds
- Logo should only appear in white, black, or grey — never colorized
- Maintain clear space around the logo (no text or shapes crowding it)
- Resolve logo path with: `path.join(__dirname, "../../.copilot/assets/", filename)` or use absolute path

### Refreshing assets
If the brand kit updates, re-download and replace:
```bash
curl -fsSL "https://brand.github.com/GitHub_Logos.zip" -o /tmp/github-logos.zip
unzip -o /tmp/github-logos.zip -d /tmp/github-logos
cp "/tmp/github-logos/GitHub Logos/PNG/GitHub_Invertocat_White.png" .copilot/assets/github-invertocat-white.png
cp "/tmp/github-logos/GitHub Logos/PNG/GitHub_Invertocat_Black.png" .copilot/assets/github-invertocat-black.png
# ... repeat for other files as needed
```

### Brand guidelines (from brand.github.com)
- GitHub is always one word: capital G, capital H
- The Invertocat and wordmark may only appear in white, black, or grey/green
- Never rearrange, recolor, distort, add shadows/gradients, or place over busy backgrounds
- Use highest-contrast option when in doubt

## Scaffold Template

```javascript
const pptxgen = require("pptxgenjs");
const path = require("path");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";  // 10" x 5.625"
pres.title = "Your Title";
pres.author = "GitHub PPTX Starter";

// Official brand assets
const assetsDir = path.resolve(__dirname, "../../.copilot/assets");
const logoWhite = path.join(assetsDir, "github-invertocat-white.png");
const logoBlack = path.join(assetsDir, "github-invertocat-black.png");

// GitHub 2025 theme
const GH = {
  black: "0C1116", white: "FFFFFF", muted: "B0BAC3", darkSurface: "20262C",
  green: "5EEC83", yellow: "D8BD0E", red: "FE4B25", pink: "FF4AC0",
  purple: "8241FA", blue: "006EDB", copilotIndigo: "000239",
};

// --- SLIDE 1: Title ---
let s1 = pres.addSlide();
s1.background = { color: GH.black };

s1.addImage({ path: logoWhite, x: 0.5, y: 0.3, w: 0.8, h: 0.8 });

s1.addText("PRESENTATION TITLE", {
  x: 0.5, y: 1.8, w: 9, h: 1.0,
  fontSize: 45, bold: true, color: GH.white,
  fontFace: "Mona Sans SemiBold", align: "left", margin: 0
});

s1.addText("Subtitle or tagline", {
  x: 0.5, y: 2.9, w: 7, h: 0.5,
  fontSize: 18, color: GH.muted,
  fontFace: "Mona Sans", align: "left", margin: 0
});

// Green accent bar at bottom
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 5.325, w: 10, h: 0.3,
  fill: { color: GH.green }, line: { color: GH.green }
});

pres.writeFile({ fileName: "output.pptx" });
```

## Slide Layout Catalog

Use these layout types as mental models when designing slides:

| Layout type | Description | When to use |
|---|---|---|
| **Title card** | Full-bleed background image/dark, large title text bottom-left | Opening and closing slides |
| **Large statement** | One big headline (~45pt), optional subtitle | Key message, transition |
| **Statement + graphic** | Left: headline + description. Right: image or screenshot | Feature showcase |
| **Large number + statement** | Oversized stat (30pt+) with supporting text | Data callout, impact metrics |
| **Agenda** | Numbered list (01, 02, 03) with green accent numbers | Agenda/roadmap |
| **Browser screenshot** | Centered screenshot with subtle browser chrome frame | Demo walkthrough |
| **Demo** | Minimal text, large visual area | Live demo placeholder |
| **Blank** | No placeholders — fully custom layout | Complex diagrams, custom visuals |

## Hard Rules

1. **NEVER** use `"#"` in hex colors — corrupts the file silently.
2. **NEVER** reuse option objects across `addShape`/`addText` calls — PptxGenJS mutates them in-place.
3. **NEVER** use unicode "bullet" for bullets — use `bullet: true` in the options array.
4. **NEVER** add accent lines under titles — use whitespace or background color instead.
5. **ALWAYS** set `margin: 0` on text boxes aligned to shapes at the same x position.
6. **ALWAYS** vary slide layouts (two-column, icon-grid, stat callouts) — no two consecutive slides should use the same structure.
7. **ALWAYS** add at least one visual element per slide (image, icon, shape, or chart).

## QA Pipeline

Run after every generation. Fix and re-render at least once before declaring done.

```bash
# 1. Content QA — extract all text
python3 -m markitdown output.pptx

# 2. Check for leftover placeholders
python3 -m markitdown output.pptx | grep -iE "\bx{3,}\b|lorem|ipsum|\bTODO|\[insert"

# 3. (Optional — requires LibreOffice) Convert to images for visual inspection
# soffice --headless --convert-to pdf output.pptx
# pdftoppm -jpeg -r 150 output.pdf slide
# ls -1 "$PWD"/slide-*.jpg
```

Inspect each image for: **overflow, overlap, low contrast, misalignment, placeholder text**. Fix → re-render → re-inspect.

## When to Use This Skill

Invoke when the user asks to:
- Create a presentation or slide deck
- Build a `.pptx` file
- Make slides for a customer meeting, QBR, demo, or internal pitch
- Generate a GitHub-branded deck
