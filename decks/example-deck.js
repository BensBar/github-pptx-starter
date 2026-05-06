// Example deck — demonstrates the GitHub 2025 brand theme.
// Run: node decks/example-deck.js
// Output: decks/example.pptx

const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"
pres.title = "GitHub PPTX Starter — Example";
pres.author = "GitHub PPTX Starter";

// Brand assets
const assetsDir = path.resolve(__dirname, "../.copilot/assets");
const logoWhite = path.join(assetsDir, "github-invertocat-white.png");

// GitHub 2025 theme — never include "#" in hex
const GH = {
  black: "0C1116",
  white: "FFFFFF",
  muted: "B0BAC3",
  darkSurface: "20262C",
  green: "5EEC83",
  yellow: "D8BD0E",
  red: "FE4B25",
  pink: "FF4AC0",
  purple: "8241FA",
  blue: "006EDB",
};

const FONT_HEAD = "Mona Sans SemiBold";
const FONT_BODY = "Mona Sans";

// --- SLIDE 1: Title ---
const s1 = pres.addSlide();
s1.background = { color: GH.black };

s1.addImage({ path: logoWhite, x: 0.5, y: 0.3, w: 0.8, h: 0.8 });

s1.addText("GitHub PPTX Starter", {
  x: 0.5, y: 1.8, w: 9, h: 1.0,
  fontSize: 45, bold: true, color: GH.white,
  fontFace: FONT_HEAD, align: "left", margin: 0,
});

s1.addText("On-brand decks in minutes — built with Copilot + PptxGenJS", {
  x: 0.5, y: 2.9, w: 8.5, h: 0.5,
  fontSize: 18, color: GH.muted,
  fontFace: FONT_BODY, align: "left", margin: 0,
});

// Green accent bar at bottom
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 5.325, w: 10, h: 0.3,
  fill: { color: GH.green }, line: { color: GH.green },
});

// --- SLIDE 2: Agenda ---
const s2 = pres.addSlide();
s2.background = { color: GH.black };
s2.addImage({ path: logoWhite, x: 9.0, y: 0.25, w: 0.5, h: 0.5 });

s2.addText("Agenda", {
  x: 0.5, y: 0.5, w: 6, h: 0.6,
  fontSize: 24, bold: true, color: GH.white,
  fontFace: FONT_HEAD, margin: 0,
});

const agendaItems = [
  ["01", "Why this exists"],
  ["02", "What's in the box"],
  ["03", "How to build a deck"],
  ["04", "QA + brand rules"],
];

agendaItems.forEach(([num, label], i) => {
  const y = 1.4 + i * 0.85;
  s2.addText(num, {
    x: 0.5, y, w: 1.0, h: 0.7,
    fontSize: 30, bold: true, color: GH.green,
    fontFace: FONT_HEAD, margin: 0,
  });
  s2.addText(label, {
    x: 1.5, y: y + 0.1, w: 7.5, h: 0.5,
    fontSize: 18, color: GH.white,
    fontFace: FONT_BODY, margin: 0,
  });
});

// --- SLIDE 3: Statement + supporting text ---
const s3 = pres.addSlide();
s3.background = { color: GH.black };
s3.addImage({ path: logoWhite, x: 9.0, y: 0.25, w: 0.5, h: 0.5 });

s3.addText("One source of truth for GitHub-branded decks.", {
  x: 0.5, y: 1.5, w: 9, h: 1.5,
  fontSize: 36, bold: true, color: GH.white,
  fontFace: FONT_HEAD, align: "left", margin: 0,
});

s3.addText("Reusable across every customer, every quarter, every team.", {
  x: 0.5, y: 3.2, w: 9, h: 0.6,
  fontSize: 16, color: GH.muted,
  fontFace: FONT_BODY, align: "left", margin: 0,
});

// --- SLIDE 4: Big-number callout ---
const s4 = pres.addSlide();
s4.background = { color: GH.black };
s4.addImage({ path: logoWhite, x: 9.0, y: 0.25, w: 0.5, h: 0.5 });

s4.addText("Build a deck in", {
  x: 0.5, y: 1.4, w: 9, h: 0.5,
  fontSize: 18, color: GH.muted,
  fontFace: FONT_BODY, margin: 0,
});

s4.addText("< 60 seconds", {
  x: 0.5, y: 2.0, w: 9, h: 1.5,
  fontSize: 80, bold: true, color: GH.green,
  fontFace: FONT_HEAD, margin: 0,
});

s4.addText("from prompt to polished .pptx, with one Copilot command.", {
  x: 0.5, y: 3.8, w: 9, h: 0.6,
  fontSize: 16, color: GH.white,
  fontFace: FONT_BODY, margin: 0,
});

// --- SLIDE 5: Closing ---
const s5 = pres.addSlide();
s5.background = { color: GH.black };

s5.addImage({ path: logoWhite, x: 0.5, y: 0.3, w: 0.8, h: 0.8 });

s5.addText("Ship the deck.", {
  x: 0.5, y: 2.0, w: 9, h: 1.2,
  fontSize: 60, bold: true, color: GH.white,
  fontFace: FONT_HEAD, align: "left", margin: 0,
});

s5.addText("brand.github.com", {
  x: 0.5, y: 3.4, w: 9, h: 0.5,
  fontSize: 14, color: GH.muted,
  fontFace: FONT_BODY, align: "left", margin: 0,
});

s5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 5.325, w: 10, h: 0.3,
  fill: { color: GH.green }, line: { color: GH.green },
});

pres.writeFile({ fileName: path.join(__dirname, "example.pptx") }).then((f) => {
  console.log(`Wrote ${f}`);
});
