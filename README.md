# AI-PPL — Conceptual Physics Interactive Quiz

An easy, interactive way to learn the physics from two lectures:

- **Chapter 3 — Linear Motion** (from the *Next-Time Questions* worksheet): 4 conceptual
  reasoning questions (tracks with a dip, the 40 km/h motorist, the bee between two bikes,
  the round-trip airplane with wind).
- **Chapter 4 — Newton's Second Law of Motion** (from the *Clicker Questions* slides): 20
  multiple-choice questions on force, mass, acceleration, friction, air drag, mass vs.
  weight, free fall, and terminal speed.

The whole thing is a single, dependency-free web app — **no install, no build step**.

## ▶️ How to run

Just open `index.html` in any web browser:

- **Double-click** `index.html`, **or**
- Serve it locally (optional):
  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

## ✨ Features

- Pick a topic: **Linear Motion**, **Newton's Second Law**, or a **shuffled mix of both**.
- **Instant feedback** — correct answers turn green, wrong ones red.
- A short **explanation** appears after every answer so you actually learn the "why".
- **Progress bar**, live **score**, and a final results screen with a percentage ring.
- **Keyboard friendly** — press `1`–`4` or `A`–`D` to answer, `Enter` for the next question.

## 📁 Files

| File            | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `index.html`    | The interactive quiz app (UI + logic).               |
| `questions.js`  | The question bank (prompts, options, answers, why).  |

## ➕ Adding your own questions

Open `questions.js` and add an object to the relevant chapter's `questions` array:

```js
{
  q: "Your question text?",
  options: ["choice A", "choice B", "choice C", "choice D"],
  answer: 1,            // 0-based index of the correct option
  explain: "Why that answer is correct."
}
```

The "Mixed Challenge" set is generated automatically from all chapters.
