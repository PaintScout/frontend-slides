// inline-fonts.mjs — Make a deck fully self-contained for Claude Artifact publishing.
//
// Why: Claude Artifacts run under a strict CSP that blocks ALL external requests,
// including Google Fonts / Fontshare stylesheets. A deck that links to those fonts
// would render with fallback system fonts once published. This script downloads the
// linked web fonts and rewrites them as base64 @font-face rules so the deck carries
// its own fonts and looks identical offline / inside an artifact.
//
// Usage:
//   node inline-fonts.mjs <input.html> [output.html]
//   (if output is omitted, writes <input>.artifact.html next to the input)
//
// It rewrites any <link href="https://fonts.googleapis.com/..."> or Fontshare
// stylesheet into an inline <style> block of @font-face rules with data: URIs.

import { readFileSync, writeFileSync } from 'fs';

const input = process.argv[2];
if (!input) { console.error('Usage: node inline-fonts.mjs <input.html> [output.html]'); process.exit(1); }
const output = process.argv[3] || input.replace(/\.html?$/i, '') + '.artifact.html';

// A modern browser UA makes Google Fonts return compact woff2 (not ttf).
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

let html = readFileSync(input, 'utf8');

// Find every external font stylesheet <link ... href="...">.
const linkRe = /<link[^>]*href="(https:\/\/fonts\.googleapis\.com\/[^"]+|https:\/\/api\.fontshare\.com\/[^"]+)"[^>]*>/gi;
const links = [...html.matchAll(linkRe)];
if (links.length === 0) { console.log('No external font stylesheets found — nothing to inline.'); writeFileSync(output, html); process.exit(0); }

const urlInCss = /url\((https:\/\/[^)]+\.woff2)\)/g;
let inlinedCss = '';

for (const [, cssUrl] of links) {
  const cssRes = await fetch(cssUrl, { headers: { 'User-Agent': UA } });
  let css = await cssRes.text();
  // Find each woff2 URL, fetch it, base64 it, swap it inline.
  const fontUrls = [...new Set([...css.matchAll(urlInCss)].map(m => m[1]))];
  for (const fu of fontUrls) {
    const buf = Buffer.from(await (await fetch(fu, { headers: { 'User-Agent': UA } })).arrayBuffer());
    const dataUri = `url(data:font/woff2;base64,${buf.toString('base64')}) format("woff2")`;
    // Replace the url(...) and any trailing format("woff2") with our self-contained version.
    css = css.split(`url(${fu}) format("woff2")`).join(dataUri).split(`url(${fu})`).join(dataUri);
  }
  inlinedCss += `\n/* Inlined from ${cssUrl} */\n${css}\n`;
}

// Remove all external font links + the now-pointless preconnect hints.
html = html.replace(linkRe, '');
html = html.replace(/<link[^>]*href="https:\/\/fonts\.g(oogleapis|static)\.com"[^>]*>\s*/gi, '');

// Inject the inlined @font-face rules right before </head>.
const styleBlock = `<style data-inlined-fonts>${inlinedCss}</style>\n</head>`;
html = html.replace(/<\/head>/i, styleBlock);

writeFileSync(output, html);
const kb = Math.round(Buffer.byteLength(html) / 1024);
console.log(`✓ Wrote self-contained, artifact-ready deck: ${output} (${kb} KB)`);
