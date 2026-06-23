# Interactive Physics Classroom ⚛️

A ready-to-use, self-contained web app that turns two Conceptual Physics
lectures into a live, interactive teaching experience. No build step, no
server, no dependencies — just open it in a browser.

Built from the source lecture material:

| Mode | Source lecture | Topic | Questions |
|------|----------------|-------|-----------|
| **Clicker Round** | `02_Clicker_Questions` (PRS) | Chapter 2 — Newton's First Law of Motion: **Inertia** | 20 |
| **Next-Time Questions** | `03_Next_Time_Questions` | Chapter 3 — **Linear Motion** | 4 |

## What it does

**Clicker Round** — a fast, poll-style multiple-choice round, mirroring the
original PRS clicker slides:
- 30-second countdown timer per question (turns red in the last 5 s)
- Instant right/wrong feedback with a plain-language explanation
- Live score and progress bar
- End-of-round results: percentage ring + per-question review of misses

**Next-Time Questions** — the "think first, then reveal" conceptual
challenges (tracks A/B, the average-speed trap, the bee between the bikes,
the headwind/tailwind round trip):
- Custom inline SVG figure for every question
- Commit to an answer, then **Reveal** the full worked reasoning
- Same scoring and review flow

## How to use it

Just open `index.html` in any modern browser:

```bash
# from the project folder
xdg-open index.html      # Linux
open index.html          # macOS
start index.html         # Windows
```

It works straight from the local file system (`file://`) — perfect for the
classroom, even offline. For a projector, press the browser's full-screen
key (usually `F11`).

### Keyboard controls (great for live teaching)

| Key | Action |
|-----|--------|
| `1`–`4` or `A`–`D` | Select an answer |
| `Enter` | Reveal answer / go to next question |
| `→` | Next question (after answering) |
| `←` | Previous question |
| `Esc` | Back to the main menu |

## Project layout

```
index.html          # app shell, loads the scripts below
css/styles.css      # projector-friendly dark theme
js/questions.js     # all question content + answers + explanations
js/diagrams.js      # hand-built inline SVG figures (no image files)
js/app.js           # the interactive engine (modes, timer, scoring)
```

## Customizing

- **Add or edit questions:** open `js/questions.js`. Each entry is
  `{ id, stem, choices, answer, explain }` (the `answer` is the zero-based
  index of the correct choice). Next-Time questions may also set a
  `diagram` name that points at a figure in `js/diagrams.js`.
- **Change the look:** all colors and sizing live in the `:root` block at
  the top of `css/styles.css`.
- **Turn the clicker timer off:** in `js/app.js`, set `timed: false` in the
  `state` object.

---

*Content adapted from Paul G. Hewitt, Conceptual Physics (Clicker /
Next-Time Questions) for classroom teaching use.*
