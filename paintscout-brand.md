# PaintScout Brand Preset

Comprehensive brand guide for generating on-brand PaintScout presentations. **Read this file in full whenever the PaintScout preset is selected or whenever PaintScout context is detected.** Do not infer or guess brand rules — everything documented here comes from the official PaintScout brand guidelines (paintscout.com/internal/brand, last updated Aug 2025).

---

## When to Use This Preset

Default to the PaintScout preset when any of these are true:

- User explicitly asks for a "PaintScout" deck, presentation, or workshop
- User mentions painting contractors, estimating, or painting-business-scaling topics in a PaintScout context
- User uploads PaintScout-branded source material (existing decks, logos, screenshots)
- User identifies themselves as someone who works at/consults for PaintScout
- Conversation memory indicates PaintScout work context

When the preset applies, skip Phase 2 style discovery — the brand is already decided. Go straight to Phase 3 using `paintscout-slide-library.html` as the starting template.

---

## Source of Truth

Two files work together for this preset:

| File | Purpose |
|------|---------|
| `paintscout-brand.md` (this file) | Rules, voice, layout catalog, decision guidance |
| `paintscout-slide-library.html` | Pre-built template with all 13 layouts, inline editing, official logos embedded |

**Workflow:** Copy `paintscout-slide-library.html`, keep the layouts that fit the user's content, delete the rest, swap placeholder copy for real content following the voice rules below. Never regenerate the CSS or layouts from scratch — the template is the authoritative implementation.

---

## Colors (Official Palette)

All values from the PaintScout brand system. These are already encoded as CSS variables at the top of `paintscout-slide-library.html`. Do not substitute approximations.

### PaintScout Blues

| Token | Hex | Use |
|-------|-----|-----|
| Blue50 | `#0559d2` | Hover states, pressed buttons |
| **Blue55 (Primary)** | **`#0766ee`** | **Primary brand accent — CTAs, headlines, logo** |
| Blue60 | `#2377fd` | Secondary accent |
| Blue65 | `#438aff` | Lighter accent |
| Blue70 | `#639dfe` | Muted accents on dark backgrounds |
| Blue80 | `#98bffe` | Subtle accents, text on dark navy |

### PaintScout Neutrals

| Token | Hex | Use |
|-------|-----|-----|
| **N30 (Navy)** | **`#1b2e4c`** | **Dark backgrounds, primary text on light bg** |
| N35 | `#283b5a` | Secondary dark text |
| N40 | `#2f4870` | Tertiary dark text |
| N50 | `#4a648e` | Body text secondary |
| N60 | `#6b81a5` | Muted text |
| N70 | `#8e9fbb` | Borders on dark backgrounds |
| N80 | `#b3bfd2` | Dividers, subtle UI |
| N90 | `#d8dee8` | Card borders on light bg |
| **N95** | **`#ebeff5`** | **Light alternate background** |
| **N98** | **`#f6f9fc`** | **Primary light background** |
| White | `#ffffff` | Card fills, text on dark/blue |

### Color Rules

- **Lead with the primary blue palette.** Do not introduce new colors outside the official system.
- **Dominant colors with sharp accents outperform timid, evenly-distributed palettes.** Blue55 should feel like a punctuation mark, not wallpaper.
- **Secondary palettes (12 hues available in the brand guide) are functionally interchangeable.** Only pull from secondaries if a specific data visualization or category distinction actually requires more colors. Default is blue + navy + neutrals.

---

## Typography

### Primary Typeface: Euclid Circular A

Used for all headings, subheadings, buttons, and UI labels.

- Weights: **Semibold (600)** for large sizes, **Medium (500)** for small sizes
- **Never use the Bold (700) weight** — this is an explicit brand rule

### Documented Fallback: Poppins

When Euclid Circular A is not licensed or available (including Google Slides, HTML presentations, and most of Claude's output contexts), use **Poppins** from Google Fonts. This is the PaintScout-sanctioned fallback. Do not substitute Inter, Roboto, Arial, or any generic system font as display type.

### Secondary Typeface: Inter

Used only for body text. Weight: Regular (400).

### Hierarchy (Brand Spec)

| Level | Font | Weight | Size | Line Height | Tracking |
|-------|------|--------|------|-------------|----------|
| Display | Euclid/Poppins | 600 | 6.0rem | 100% | -5% |
| H1 | Euclid/Poppins | 600 | 4.5rem | 100% | -4% |
| H2 | Euclid/Poppins | 600 | 3.5rem | 100% | -3% |
| H3 | Euclid/Poppins | 600 | 2.5rem | 110% | -3% |
| H4 | Euclid/Poppins | 500 | 1.5rem | 110% | -2% |
| H5 | Euclid/Poppins | 500 | 1.25rem | 110% | 0% |
| H6 | Euclid/Poppins | 500 | 1.0rem | 110% | 0% |
| Body | Inter | 400 | 1.0rem | 140% | 0% |

In the HTML template, these sizes are wrapped in `clamp()` for viewport fitting. Do not hardcode fixed sizes — the clamp ranges in the template are tuned for readable output across screen sizes.

---

## Logo Usage (Brand Rules)

The template inlines official logo SVGs. Three versions are available in the brand guide:

1. **Horizontal Small** — default. Use when the logo width is less than 16rem (256px). Optimized for legibility. **When in doubt, use this one.**
2. **Logomark** — pin-icon only, no wordmark. Use when space is limited or when the horizontal logo is already visible elsewhere. **Never larger than 6rem (96px) in isolation.**
3. **Horizontal Large** — tighter letter spacing. Use only when the logo is larger than 16rem (256px).

Placement rules (implemented in the template):
- **Content slides:** Horizontal Small, bottom-left corner
- **Section dividers, cover, full-bleed:** Logomark only, bottom-left, inverted to white on dark/blue backgrounds
- **Closing slide:** Logomark, centered above the thank-you headline

---

## Voice Principles (From Brand Guide)

### Core Principles

1. **Here for business pros.** Audience is painting business owners, not painters. Speak to someone running a company.
2. **Get to the point.** Business owners are busy. Be concise.
3. **Keep it casual.** Content should feel like a conversation with a good friend.

### Brand Tone Pillars

- **Bold** — confident, hyper-knowledgeable. Show, don't tell.
- **Community** — painting contractors are all trying to do the same thing. Frame growth as collective, not competitive.
- **Approachable** — experts who share knowledge, not gatekeepers.
- **Empowering** — give contractors tools and inspiration to run the most successful business possible.

### Reference Rules (Non-Negotiable)

- **"PaintScout"** — always capital P and S. Never "paintscout," "Paintscout," "paint scout," or any space.
- **"Painting contractors" or "painting business owners"** — never "painters." The customer is the business owner, not the person holding the brush.

### Voice Examples (From Brand Guide)

**Bold pillar:**
- ✅ "Get control of your painting business"
- ❌ "PaintScout helps your business"

**Community pillar:**
- ✅ "Thousands of companies are levelling up with PaintScout"
- ❌ "Crush your competition with PaintScout"

**Approachable pillar:**
- ✅ "The ultimate sales tool for painting businesses"
- ❌ "The ultimate sales tool for top painting businesses"

**Empowering pillar:**
- ✅ "PaintScout enables business growth"
- ❌ "Our features are the best"

### When Writing Slide Copy

- Prefer active verbs and imperatives ("Get," "Build," "Scale")
- Avoid hype words: "crush," "dominate," "secret weapon," "game-changer"
- Avoid diminishing words: "just," "simply," "only" (when used to minimize effort — "We simply make it easier" reads weak)
- Avoid em dashes. Use periods or commas. (User preference + matches PaintScout's direct tone.)
- Questions to the audience are encouraged — workshops are conversations.

---

## Layout Catalog (13 Slides in the Template)

All layouts are implemented in `paintscout-slide-library.html`. Each has a comment block in the HTML explaining its purpose and editable areas.

| # | Layout | Background | Use For |
|---|--------|------------|---------|
| 1 | Cover / Title | Light (N98) + dotted grid | Workshop opening, topic title |
| 2 | Section Divider — Blue | Blue55 | Chapter breaks, new sections |
| 3 | Section Divider — Navy | N30 | Alternate chapter breaks for variation |
| 4 | Purpose / Key Takeaway | Blue55 with white card overlay | Early-workshop frame-setting |
| 5 | Agenda — 3 numbered cards | Blue55 | Opening pillars, three-part structure |
| 6 | Big Statement / Impact | Light + dotted grid | Single bold claim deserving full slide |
| 7 | Content + UI Mockup | Light + dotted grid | Teaching a feature with UI reference |
| 8 | Numbered List — Dark | N30 | Progression, framework, stages |
| 9 | Stats Row — 3-up | N30 | Metrics, ROI, proof points |
| 10 | Testimonial | Light + dotted grid | Customer quote with photo and logo |
| 11 | Audience Prompt / Poll | Blue55 | Workshop interaction, live questions |
| 12 | Recap Grid — 3 columns | Light + dotted grid | End-of-section summary |
| 13 | Closing / Thanks + Contact | N30 | Workshop close, contact info |

### Layout Selection Guidance

- **Workshops** typically use: Cover → Purpose → Agenda → [Section Divider + Content + Mockup + Big Statement + Stats + Testimonial + Audience Prompt, repeat per topic] → Recap → Closing
- **Internal pitches** typically use: Cover → Purpose → Content + Mockup → Stats → Testimonial → Closing
- **Sales decks** typically use: Cover → Big Statement → Stats → Content + Mockup → Testimonial → Closing
- **Never exceed ~25 slides** for a workshop. Attention dies.

### Content Density (Non-Negotiable)

The underlying `frontend-slides` skill enforces strict viewport-fitting. The PaintScout template already respects these limits per slide:

- Cover: 1 eyebrow + 1 headline + 1 subtitle
- Content + Mockup: 1 heading + 1 paragraph + up to 4 bullets + 1 UI card
- Numbered List: 1 heading + 3-5 items
- Stats: 1 heading + 1 sub + 3 stat cards
- Recap Grid: 1 heading + 1 sub + 3 columns, 4 bullets each max

**If content exceeds a layout's limits, split into multiple slides. Never cram.**

---

## Decision Flow When a User Asks for a PaintScout Deck

1. **Ask scope questions briefly** — what's the topic, audience, approximate length? Skip style questions (brand is locked).
2. **Open `paintscout-slide-library.html` as reference** — don't regenerate from scratch.
3. **Choose layouts that match the content** from the catalog above.
4. **Write copy following the voice rules** — confident, casual, direct, "painting contractors."
5. **For UI mockups:** prefer real screenshots if the user provides them. If not, the template includes CSS-built mockup examples that are workshop-appropriate.
6. **For testimonials:** if the user provides a real quote + photo + logo, use them. Don't fabricate customer stories.
7. **Generate the final HTML** by cloning the template and editing — preserving the edit-mode JS so the user can tweak in-browser after delivery.

---

## What NOT to Do

- Do not introduce new colors outside the official palette.
- Do not use Bold (700) weight of Euclid/Poppins — Semibold (600) max.
- Do not write "painters" when you mean "painting contractors."
- Do not write "paintscout" or "Paintscout" — always "PaintScout."
- Do not use hype language ("crush," "dominate," "secret weapon").
- Do not fabricate customer names, companies, or quotes for testimonials.
- Do not regenerate the CSS from scratch — edit the template.
- Do not use em dashes — periods or commas instead.
- Do not exceed content density limits per slide — split instead.
