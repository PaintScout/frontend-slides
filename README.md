# Frontend Slides

A Claude Code skill for creating stunning, animation-rich HTML presentations — from scratch or by converting PowerPoint files. Defaults to the PaintScout brand, but can produce any visual style on request.

## What This Does

**Frontend Slides** helps non-designers create beautiful web presentations without knowing CSS or JavaScript. By default it builds decks on the **PaintScout brand** (colors, typography, voice, and the 13-layout slide library). Ask for a different look and it switches to a "show, don't tell" style discovery flow instead — it generates visual options and you pick what you like.

Every deck is a single self-contained HTML file: no dependencies, works offline, opens in any browser.

Here is a deck about the skill, made through the skill:

https://github.com/user-attachments/assets/ef57333e-f879-432a-afb9-180388982478

### Key Features

- **PaintScout brand by default** — On-brand decks with no setup; just describe your content.
- **Zero Dependencies** — Single HTML files with inline CSS/JS. No npm, no build tools, no frameworks.
- **Visual Style Discovery (on request)** — Want something off-brand? Pick from generated visual previews instead of describing preferences in words.
- **PPT Conversion** — Convert existing PowerPoint files to web, preserving all images and content.
- **Shareable output** — Download the HTML, or publish it to a private claude.ai link in one step.

## Quick Start

**This is a repository skill — there's nothing to install.** Open this repo in Claude Code (on the web at [claude.ai/code](https://claude.ai/code), or locally) and the skill loads automatically.

1. Open the repo in Claude Code and start a session.
2. Type `/frontend-slides`, or just describe what you want:
   > "Make me a 10-slide pitch deck about our commercial estimating workflow."
3. Answer a couple of quick questions, and you get a finished `.html` deck you can download or get a shareable link for.

**New to this?** See **[GETTING_STARTED.md](GETTING_STARTED.md)** — a plain-language, click-by-click guide written for non-technical teammates.

## Usage

### Create a New Presentation (PaintScout brand)

```
/frontend-slides

> "I want a pitch deck for winning bigger commercial painting jobs"
```

The skill will:

1. Confirm it's using the PaintScout brand (say the word for a different style)
2. Ask about your content and scope (length, what you have ready)
3. Build the full presentation on the PaintScout slide library
4. Hand it to you: a downloadable HTML file and, optionally, a private shareable link

### Create an Off-Brand / Custom-Style Deck

```
/frontend-slides

> "Make a fun, retro children's-book style deck — not PaintScout branded"
```

When you ask for a specific look (or a clearly non-PaintScout topic), the skill skips the brand and runs style discovery, letting you choose from curated visual presets.

### Convert a PowerPoint

```
/frontend-slides

> "Convert my presentation.pptx to a web slideshow"
```

It extracts all text, images, and notes, confirms the content with you, then generates an HTML presentation with your original assets.

## Included Styles (off-brand mode)

When you opt out of PaintScout branding, these curated presets are available:

**Dark:** Bold Signal · Electric Studio · Creative Voltage · Dark Botanical
**Light:** Notebook Tabs · Pastel Geometry · Split Pastel · Vintage Editorial
**Specialty:** Neon Cyber · Terminal Green · Swiss Modern · Paper & Ink

See [`samples/`](samples/) for three finished example decks (with the exact prompts that produced them) spanning very different styles.

## Architecture

This skill uses **progressive disclosure** — `SKILL.md` is a concise map, with supporting files loaded on-demand only when needed. Everything lives in [`.claude/skills/frontend-slides/`](.claude/skills/frontend-slides/):

| File                            | Purpose                                                | Loaded When                  |
| ------------------------------- | ------------------------------------------------------ | ---------------------------- |
| `SKILL.md`                      | Core workflow and rules                                | Always (skill invocation)    |
| `paintscout-brand.md`           | PaintScout brand rules, voice, color tokens, layouts   | Default (brand mode)         |
| `paintscout-slide-library.html` | Master template with all 13 PaintScout layouts         | Default (brand mode)         |
| `PROMPT.md`                     | PaintScout build workflow and constraints              | Default (brand mode)         |
| `STYLE_PRESETS.md`              | 12 curated visual presets                              | Style discovery (off-brand)  |
| `viewport-base.css`             | Mandatory responsive CSS                               | Generation                   |
| `html-template.md`              | HTML structure and JS features                         | Generation                   |
| `animation-patterns.md`         | CSS/JS animation reference                             | Generation                   |
| `scripts/inline-fonts.mjs`      | Embed fonts so a deck is self-contained for artifacts  | Publishing a shareable link  |
| `scripts/extract-pptx.py`       | PPT content extraction                                 | PPT conversion               |
| `scripts/export-pdf.sh`         | Export slides to PDF                                   | Sharing                      |
| `scripts/deploy.sh`             | Deploy to Vercel                                       | Sharing                      |

This follows [OpenAI's harness engineering](https://openai.com/index/harness-engineering/) principle: "give the agent a map, not a 1,000-page instruction manual."

## Sharing Your Presentations

- **Download** — The deck is a single self-contained `.html` file. Download it from Claude Code and double-click to open in any browser.
- **Shareable link** — Ask for a link and the skill embeds the fonts and publishes the deck to a private claude.ai page you can open anywhere and share.
- **PDF** — Ask to export a PDF (uses [Playwright](https://playwright.dev), installs automatically; animations become a static snapshot).
- **Live URL (Vercel)** — Ask to deploy for a permanent public link on the free tier.

## Requirements

- [Claude Code](https://claude.ai/code) — on the web or local. **In the web version, everything runs in the cloud; there's nothing to install.**
- For PPT conversion: Python with `python-pptx` (handled for you in the web container)
- For PDF export / Vercel deploy: Node.js (Playwright installs automatically; Vercel needs a free account)

## Philosophy

1. **You don't need to be a designer to make beautiful things.** You just need to react to what you see.
2. **Dependencies are debt.** A single HTML file will work in 10 years. A React project from 2019? Good luck.
3. **Generic is forgettable.** Every presentation should feel custom-crafted, not template-generated.
4. **Comments are kindness.** Code should explain itself to future-you.

## Credits

Adapted for PaintScout from the open-source skill maintained by [@ColtonRhyason](https://github.com/ColtonRhyason), originally created by [@zarazhangrui](https://github.com/zarazhangrui) with Claude Code.

## License

MIT — Use it, modify it, share it.
