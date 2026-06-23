/* =====================================================================
 * app.js  —  Interactive classroom engine
 *
 * Two teaching modes built from the lecture material:
 *   • Clicker Mode  (Ch.2 Inertia)  — fast MCQ "clicker" round with a
 *     30 s timer, instant feedback, scoring, and an end-of-round review.
 *   • Next-Time Mode (Ch.3 Linear Motion) — think-first conceptual
 *     questions with figures and reveal-the-reasoning answers.
 *
 * Plain ES5-ish JS, no framework, runs straight from file://.
 * Keyboard: 1-4 / A-D to answer, Enter = reveal / next, ←/→ navigate.
 * ===================================================================== */

(function () {
  "use strict";

  /* ---- tiny DOM helpers ---- */
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const LETTERS = ["A", "B", "C", "D", "E"];

  /* ---- app state ---- */
  const state = {
    mode: null,        // 'clicker' | 'nexttime'
    deck: [],          // active question list
    i: 0,              // current index
    answered: false,   // has the current question been answered/revealed
    picked: null,      // chosen index for current question
    score: 0,
    results: [],       // {id, correct, picked} per question
    timer: null,
    timeLeft: 0,
    timed: true        // clicker timer on/off
  };

  const app = $("#app");

  /* =================================================================
   * HOME SCREEN
   * ============================================================== */
  function renderHome() {
    stopTimer();
    state.mode = null;
    app.innerHTML = "";

    const hero = el("section", "hero");
    hero.appendChild(el("p", "kicker", "Conceptual Physics · Interactive Classroom"));
    hero.appendChild(el("h1", null, "Think Fast. Reason Deep."));
    hero.appendChild(
      el("p", "lede",
        "Two ready-to-run teaching decks built straight from the lecture slides — " +
        "a rapid-fire clicker round and a set of think-first conceptual challenges.")
    );

    const cards = el("div", "mode-cards");

    cards.appendChild(modeCard({
      tag: "Chapter 2",
      title: "Clicker Round",
      subtitle: "Newton's First Law of Motion — Inertia",
      desc: "Fast multiple-choice questions with a 30-second timer, instant feedback, and live scoring. Perfect for a live poll.",
      count: CLICKER_QUESTIONS.length + " questions",
      accent: "accent-blue",
      onClick: () => startMode("clicker")
    }));

    cards.appendChild(modeCard({
      tag: "Chapter 3",
      title: "Next-Time Questions",
      subtitle: "Linear Motion",
      desc: "Think-first conceptual puzzles with figures. Commit to an answer, then reveal the full reasoning.",
      count: NEXT_TIME_QUESTIONS.length + " questions",
      accent: "accent-amber",
      onClick: () => startMode("nexttime")
    }));

    hero.appendChild(cards);

    const tip = el("p", "home-tip",
      "Tip: use number keys <kbd>1</kbd>–<kbd>4</kbd> (or <kbd>A</kbd>–<kbd>D</kbd>) to answer, " +
      "<kbd>Enter</kbd> to advance, and <kbd>←</kbd> / <kbd>→</kbd> to navigate.");
    hero.appendChild(tip);

    app.appendChild(hero);
  }

  function modeCard({ tag, title, subtitle, desc, count, accent, onClick }) {
    const c = el("button", "mode-card " + accent);
    c.type = "button";
    c.innerHTML =
      `<span class="mc-tag">${tag}</span>
       <h2>${title}</h2>
       <p class="mc-sub">${subtitle}</p>
       <p class="mc-desc">${desc}</p>
       <span class="mc-count">${count} &nbsp;›</span>`;
    c.addEventListener("click", onClick);
    return c;
  }

  /* =================================================================
   * START A MODE
   * ============================================================== */
  function startMode(mode) {
    state.mode = mode;
    state.deck = mode === "clicker" ? CLICKER_QUESTIONS : NEXT_TIME_QUESTIONS;
    state.i = 0;
    state.score = 0;
    state.results = [];
    renderQuestion();
  }

  /* =================================================================
   * QUESTION SCREEN
   * ============================================================== */
  function renderQuestion() {
    stopTimer();
    state.answered = false;
    state.picked = null;

    const q = state.deck[state.i];
    const isClicker = state.mode === "clicker";
    app.innerHTML = "";

    /* ---- top bar: progress + score + home ---- */
    const bar = el("div", "topbar");
    const back = el("button", "btn ghost", "‹ Menu");
    back.addEventListener("click", renderHome);
    bar.appendChild(back);

    const prog = el("div", "progress");
    prog.appendChild(el("span", "prog-text",
      (isClicker ? "Clicker" : "Next-Time") + " &nbsp;·&nbsp; " +
      (state.i + 1) + " / " + state.deck.length));
    const track = el("div", "prog-track");
    const fill = el("div", "prog-fill");
    fill.style.width = (100 * (state.i) / state.deck.length) + "%";
    track.appendChild(fill);
    prog.appendChild(track);
    bar.appendChild(prog);

    if (isClicker) {
      const score = el("div", "score-pill",
        "Score <strong>" + state.score + "</strong>");
      bar.appendChild(score);
    } else {
      bar.appendChild(el("div", "score-pill ghost-pill", "Reason it out"));
    }
    app.appendChild(bar);

    /* ---- card ---- */
    const card = el("section", "qcard");

    if (isClicker && state.timed) {
      const t = el("div", "timer", '<span class="t-num">30</span>');
      card.appendChild(t);
    }

    if (q.diagram && DIAGRAMS[q.diagram]) {
      const fig = el("figure", "diagram", DIAGRAMS[q.diagram]());
      card.appendChild(fig);
    }

    card.appendChild(el("h2", "stem", q.stem));

    const list = el("div", "choices");
    q.choices.forEach((choice, idx) => {
      const b = el("button", "choice");
      b.type = "button";
      b.dataset.idx = idx;
      b.innerHTML =
        `<span class="ch-letter">${LETTERS[idx]}</span><span class="ch-text">${choice}</span>`;
      b.addEventListener("click", () => pick(idx));
      list.appendChild(b);
    });
    card.appendChild(list);

    /* feedback + actions area */
    const fb = el("div", "feedback");
    fb.id = "feedback";
    card.appendChild(fb);

    const actions = el("div", "actions");
    actions.id = "actions";
    if (!isClicker) {
      const reveal = el("button", "btn primary", "Reveal answer");
      reveal.id = "revealBtn";
      reveal.addEventListener("click", () => reveal_(q));
      actions.appendChild(reveal);
    }
    card.appendChild(actions);

    app.appendChild(card);

    if (isClicker && state.timed) startTimer(card);
  }

  /* ---- pick a choice ---- */
  function pick(idx) {
    if (state.answered) return;
    state.picked = idx;

    if (state.mode === "clicker") {
      grade(idx);
    } else {
      // Next-Time: just highlight the commitment; grade on reveal.
      document.querySelectorAll(".choice").forEach((c) =>
        c.classList.toggle("picked", +c.dataset.idx === idx));
    }
  }

  /* ---- clicker grading (immediate) ---- */
  function grade(idx) {
    const q = state.deck[state.i];
    state.answered = true;
    stopTimer();

    const correct = idx === q.answer;
    if (correct) state.score++;
    state.results.push({ id: q.id, correct, picked: idx });

    paintChoices(q, idx);
    showFeedback(q, correct, idx === null);
    showAdvance();
  }

  /* ---- next-time reveal ---- */
  function reveal_(q) {
    if (state.answered) return;
    state.answered = true;
    const idx = state.picked;
    const correct = idx === q.answer;
    if (correct) state.score++;
    state.results.push({ id: q.id, correct: correct, picked: idx });

    paintChoices(q, idx);
    showFeedback(q, correct, idx === null);

    const rb = $("#revealBtn");
    if (rb) rb.remove();
    showAdvance();
  }

  /* ---- colour the choices after answering ---- */
  function paintChoices(q, picked) {
    document.querySelectorAll(".choice").forEach((c) => {
      const i = +c.dataset.idx;
      c.disabled = true;
      c.classList.remove("picked");
      if (i === q.answer) c.classList.add("correct");
      else if (i === picked) c.classList.add("wrong");
    });
  }

  /* ---- feedback panel ---- */
  function showFeedback(q, correct, timedOut) {
    const fb = $("#feedback");
    const head = timedOut
      ? '<span class="fb-icon">⏱</span> Time! The answer was ' + LETTERS[q.answer] + "."
      : correct
        ? '<span class="fb-icon">✓</span> Correct!'
        : '<span class="fb-icon">✕</span> Not quite — the answer is ' + LETTERS[q.answer] + ".";
    fb.className = "feedback show " + (correct ? "good" : "bad");
    fb.innerHTML = `<p class="fb-head">${head}</p><p class="fb-explain">${q.explain}</p>`;
  }

  /* ---- advance / finish button ---- */
  function showAdvance() {
    const actions = $("#actions");
    const last = state.i === state.deck.length - 1;
    const next = el("button", "btn primary",
      last ? "See results ›" : "Next question ›");
    next.id = "nextBtn";
    next.addEventListener("click", advance);
    actions.appendChild(next);
  }

  function advance() {
    if (state.i < state.deck.length - 1) {
      state.i++;
      renderQuestion();
    } else {
      renderResults();
    }
  }

  /* =================================================================
   * TIMER (clicker mode)
   * ============================================================== */
  function startTimer(card) {
    state.timeLeft = 30;
    const numEl = card.querySelector(".t-num");
    const timerEl = card.querySelector(".timer");
    updateTimerUI(numEl, timerEl);
    state.timer = setInterval(() => {
      state.timeLeft--;
      updateTimerUI(numEl, timerEl);
      if (state.timeLeft <= 0) {
        stopTimer();
        if (!state.answered) grade(null); // timed out
      }
    }, 1000);
  }
  function updateTimerUI(numEl, timerEl) {
    if (!numEl) return;
    numEl.textContent = state.timeLeft;
    if (timerEl) timerEl.classList.toggle("urgent", state.timeLeft <= 5);
  }
  function stopTimer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
  }

  /* =================================================================
   * RESULTS SCREEN
   * ============================================================== */
  function renderResults() {
    stopTimer();
    app.innerHTML = "";
    const total = state.deck.length;
    const pct = Math.round((100 * state.score) / total);

    const wrap = el("section", "results");
    wrap.appendChild(el("p", "kicker",
      state.mode === "clicker" ? "Clicker Round complete" : "Next-Time set complete"));
    wrap.appendChild(el("h1", null, state.score + " / " + total));

    const msg =
      pct === 100 ? "Flawless — textbook reasoning! 🏆" :
      pct >= 75  ? "Strong work. Inertia is on your side. 💪" :
      pct >= 50  ? "Good start — review the explanations below. 📖" :
                   "Worth another pass — the explanations make it click. 🔁";
    wrap.appendChild(el("p", "result-msg", msg));

    const ring = el("div", "ring");
    ring.style.setProperty("--pct", pct);
    ring.innerHTML = `<span>${pct}%</span>`;
    wrap.appendChild(ring);

    /* per-question review */
    const review = el("div", "review");
    state.deck.forEach((q, idx) => {
      const r = state.results.find((x) => x.id === q.id);
      const correct = r && r.correct;
      const row = el("div", "review-row " + (correct ? "ok" : "no"));
      const pickedTxt = r && r.picked != null
        ? LETTERS[r.picked] + ". " + q.choices[r.picked]
        : "— (no answer)";
      row.innerHTML =
        `<span class="rv-num">${idx + 1}</span>
         <div class="rv-body">
           <p class="rv-stem">${q.stem}</p>
           <p class="rv-line">${correct ? "✓" : "✕"} You: ${pickedTxt}</p>
           ${correct ? "" : `<p class="rv-line rv-correct">✓ Answer: ${LETTERS[q.answer]}. ${q.choices[q.answer]}</p>`}
         </div>`;
      review.appendChild(row);
    });
    wrap.appendChild(review);

    const actions = el("div", "actions center");
    const again = el("button", "btn primary", "↺ Run it again");
    again.addEventListener("click", () => startMode(state.mode));
    const menu = el("button", "btn ghost", "Back to menu");
    menu.addEventListener("click", renderHome);
    actions.appendChild(again);
    actions.appendChild(menu);
    wrap.appendChild(actions);

    app.appendChild(wrap);
  }

  /* =================================================================
   * KEYBOARD CONTROLS
   * ============================================================== */
  document.addEventListener("keydown", (e) => {
    if (!state.mode) return;
    const k = e.key.toLowerCase();

    // answer keys 1-4 / a-d
    const numMap = { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 };
    const letterMap = { a: 0, b: 1, c: 2, d: 3, e: 4 };
    let idx = numMap[k] != null ? numMap[k] : letterMap[k];
    if (idx != null && state.deck[state.i] && idx < state.deck[state.i].choices.length) {
      e.preventDefault();
      pick(idx);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (!state.answered && state.mode === "nexttime") {
        reveal_(state.deck[state.i]);
      } else if (state.answered) {
        advance();
      }
    } else if (e.key === "ArrowRight" && state.answered) {
      advance();
    } else if (e.key === "ArrowLeft" && state.i > 0) {
      state.i--;
      renderQuestion();
    } else if (e.key === "Escape") {
      renderHome();
    }
  });

  /* ---- go ---- */
  renderHome();
})();
