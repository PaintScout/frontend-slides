# PaintScout Slide Deck — Master Prompt
# Copy everything below this line into your Claude Code session

---

/frontend-slides

## Workshop Details
- **Workshop Name:** [e.g. "PaintScout 101", "Estimating Deep Dive", "Communications Workshop"]
- **Workshop Type:** [Onboarding | Deep Dive | Workshop Series]
- **Host/Speaker:** [Name(s), e.g. "Sam" or "Craig" — leave blank to use placeholder]
- **Audience:** [New customers | Existing customers]

## Source Material
Attach whichever you have. More context = better slides. If something critical is missing, ask before building — otherwise proceed.
- Transcript: [attach file or paste below]
- Existing PPTX or PDF: [attach file — images will be extracted and embedded]
- Outline or notes: [paste below if no transcript]

[PASTE OUTLINE / NOTES HERE]

---

## Build Instructions

You are building a PaintScout workshop presentation using the `/frontend-slides` skill.
Use the skill throughout. Do not build slides outside of it.

### Step 1 — Read everything first
Read all attached source material in full before doing anything else.
If a PPTX or PDF is attached, extract images using:
`python3 ~/.claude/skills/frontend-slides/scripts/extract-pptx.py [filepath]`
View the key screenshots so you know exactly what's in each one.

### Step 2 — Draft a plan, confirm before building
Output a numbered slide list with: slide title, layout type, and a one-line content summary.
Wait for approval. Do not start writing HTML until the plan is confirmed.

### Step 3 — Build the HTML deck
Build all slides as a single self-contained HTML file.
Save to: `~/Downloads/paintscout-[workshop-slug].html`

### Step 4 — Export PDF
Run: `bash ~/.claude/skills/frontend-slides/scripts/export-pdf.sh ~/Downloads/paintscout-[workshop-slug].html`
PDF must be **1920×1080** page size. The script captures each slide at **2× device pixel ratio** (3840×2160 screenshots) rendered into 1920×1080 PDF pages — this ensures crisp, non-grainy output on all displays. Do not reduce the DPR.

---

## Standard Slide Structure

Use this order for every deck. Adapt the content per workshop — do not skip slides.

1. **Title**
   Tag line pulled from workshop purpose. Date placeholder bottom-right.

2. **Meet the Team**
   Circular photo placeholders (or real images if provided). First name + title beneath each. 2–5 people.

3. **Housekeeping**
   *Onboarding (101 / Deep Dive):* Session recorded → replay sent ~30 min after. Sit back & absorb. Send questions in chat throughout. Support: chat bubble in PaintScout → support team. CSM available for complex questions / 1:1 calls. Resources (articles + YouTube) sent after. Paid onboarding packages available.
   *Workshop Series (scaled CS):* Recorded session — late joiners get recording. Drop-in format: Thursdays 11:30 MT. Questions, feature updates, feedback welcome. Craig passes enhancement requests to dev team. Support team + CSM always available.

4. **What You'll Learn**
   3–5 concrete outcomes the attendee walks away with. Pulled from the transcript intro or outline.

5. **Agenda**
   Topic list matching the session flow. Keep to 5–8 items.

6. **Workshop Purpose**
   One clear "why this matters" slide. Frame it around the contractor's business outcome.

7–N. **Content Slides**
   Extracted from source material. Match the original session order unless the transcript suggests a better flow.
   — Use actual screenshots/images where they exist. Do not replace UI screenshots with illustrated mockups.
   — Vary layouts: step-by-step, screenshot + caption, callout tip, split panel, full-bleed.
   — Keep each slide to one idea.

N+1. **Recap / Key Takeaways**
   3–5 bullets summarising what was covered.

N+2. **Next Steps & Resources**
   Links / follow-up webinars. For onboarding: Estimating Deep Dive, Invoicing & Work Orders, CRM webinar.
   For workshop series: next Thursday's topic, 1:1 with CSM, support chat.

N+3. **Closing / CTA**
   Contact your CSM · Support chat bubble · Attend next webinar.

---

## PaintScout Brand

| Token | Value |
|---|---|
| Primary blue | `#0766EE` |
| Navy | `#1B2E4C` |
| Light bg | `#F5F7FA` |
| Heading font | Poppins 800 |
| Body font | Inter 400/500 |

**Style:** Clean, modern SaaS — confident and approachable, not corporate.
Hero / transition slides → blue or navy, white text.
Content slides → light background, navy headings, body text in dark grey.
Screenshots → drop shadow, rounded corners, never stretched.

---

## Constraints

- HTML only (no PPTX output)
- Single self-contained file, zero external dependencies
- Always use the skill's PDF export script — do not use Playwright or any other method directly
- 1920×1080 is the only acceptable export resolution
- If source material has UI screenshots, embed the real ones — never substitute illustrated mockups
