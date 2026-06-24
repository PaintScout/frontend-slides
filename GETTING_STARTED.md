# Getting Started — Make a Slide Deck (No Tech Skills Needed)

This repo turns a plain-English description into a beautiful, animated slide
presentation that opens in any web browser. You don't need to know any code,
install anything, or be a designer. You just describe what you want, answer a
couple of questions, and download a file.

It takes about 5 minutes for your first deck.

---

## The fastest path: Claude Code on the web

This is the recommended way for most people because **nothing gets installed on
your computer**. Everything runs in the cloud, and you download a finished file
at the end.

### Step 1 — Open the project in Claude Code

1. Go to **[claude.ai/code](https://claude.ai/code)** and sign in with your
   work account (`@paintscout.com`).
2. Open this repository (`frontend-slides`). If a teammate shared a link,
   just click it. Otherwise pick it from your list of projects.
3. Start a new session. Claude spins up a private "container" — think of it as
   a clean, temporary computer in the cloud that already has everything this
   project needs. Wait a few seconds for it to be ready.

> You don't have to set anything up. This project already includes the slide
> skill (in a folder called `.claude/skills`), so Claude finds it automatically
> the moment the session starts.

### Step 2 — Tell it what you want

In the message box, just describe your presentation in normal words. You can
start by typing `/frontend-slides` to launch the skill directly, or simply say
what you need. For example:

> Make me a 10-slide pitch deck for a painting company that wants to win bigger
> commercial jobs. Confident and professional.

or

> Build a fun presentation explaining how our estimating tool works, for a
> training session.

### Step 3 — Answer a few quick questions

Claude will ask a handful of simple, multiple-choice questions:

- **What's it for?** (pitch, teaching, talk, internal)
- **About how many slides?**
- **Do you already have the content, or just the topic?**
- **What feeling do you want?** (impressed, excited, calm, inspired)

It then proposes a visual style. Pick the one you like and it builds the whole
thing. There are no wrong answers — you can always ask it to change anything
afterward ("make it darker," "use a different font," "add a slide about pricing").

### Step 4 — Download your deck

When it's done, Claude saves a single file ending in **`.html`** (for example,
`my-pitch-deck.html`) and tells you exactly where it is.

To get it onto your computer:

1. Find the file in the **file browser** on the left side of Claude Code.
2. **Right-click it → Download** (or use the download button).
3. On your computer, **double-click the downloaded file**. It opens in your web
   browser as a full presentation.

That file is completely self-contained — it works offline, on any computer, with
nothing else installed. You can email it, drop it in Slack, or present straight
from your browser.

### Step 5 — Present it

- **Arrow keys** or **spacebar** move between slides.
- You can also scroll, swipe (on a touchscreen), or click the little dots on
  the side.
- Press **F11** (Windows) or **Ctrl+Cmd+F** (Mac) for full screen.

---

## Want to change something?

Just ask in the same session, in plain English:

- "Slide 3 has too much text — split it into two."
- "Change the accent color to PaintScout orange."
- "Add a closing slide with our contact info."

Claude edits the file and you download the new version the same way.

---

## See examples first

The **[`samples/`](samples/)** folder has three finished example decks, each
with the exact prompt that produced it:

- `samples/uss-enterprise-d/` — a detailed technical readout (Star Trek themed)
- `samples/seussian-storybook/` — a playful, rhyming children's storybook
- `samples/bro-business/` — an over-the-top comedy business pitch

Open any `.html` file in those folders to see what's possible, and read the
`prompt.md` next to it to see how it was asked for.

---

## Optional extras (only if you need them)

You can ignore all of this for normal use. These are available if you want them:

| You want to…                         | What to ask Claude                              | Needs                          |
| ------------------------------------ | ----------------------------------------------- | ------------------------------ |
| Turn an existing PowerPoint into web | "Convert my `.pptx` to a web slideshow"         | (Claude handles it)            |
| Get a **PDF** of the slides          | "Export this to a PDF"                          | Runs in the cloud session      |
| Put it on a **shareable web link**   | "Deploy this to a live URL"                     | A free Vercel account          |

For PDF or a live link, Claude walks you through it step by step.

---

## Doing this on your own computer instead?

If you'd rather run Claude Code in a terminal on your own machine (most people
don't need to), the only requirement to *create* decks is the
[Claude Code CLI](https://claude.ai/code). The optional PDF and PowerPoint
features need Node.js and Python respectively — but the web option above avoids
all of that. See the main [README](README.md) for the technical details.

---

## Quick troubleshooting

- **"I don't see my file to download."** Ask Claude: "What's the file path, and
  can you list it?" It will point you right to it.
- **"The downloaded file opened as code/text, not a presentation."** Make sure
  the file name ends in `.html`, then double-click it (don't open it from inside
  a code editor).
- **"Fonts look plain."** The deck pulls nice fonts from the internet. If you're
  fully offline it falls back to standard fonts — reconnect and refresh and
  they'll appear.
- **Stuck?** Just tell Claude what happened in plain words. It can fix it.
