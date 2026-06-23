/* =====================================================================
 * diagrams.js  —  Hand-built inline SVG figures for the Next-Time
 * Questions. Pure code (no image files) so everything stays
 * self-contained and crisp at any size / on any projector.
 *
 * Each builder returns an SVG markup string. Look-ups go through
 * DIAGRAMS[name].
 * ===================================================================== */

const DIAGRAMS = {
  /* Two channel-iron tracks; Track B has a dip in the middle. */
  tracks: () => `
    <svg viewBox="0 0 460 220" role="img" aria-label="Track A is straight; Track B has a dip in the middle.">
      <defs>
        <marker id="ball" markerWidth="6" markerHeight="6" refX="3" refY="3">
          <circle cx="3" cy="3" r="3" fill="#e8554e"/>
        </marker>
      </defs>
      <!-- Track A: gentle straight ramp then flat -->
      <path d="M30 40 L150 70 L430 70" fill="none" stroke="#7f8c9b" stroke-width="6" stroke-linecap="round"/>
      <text x="30" y="30" class="dlabel">A</text>
      <circle cx="30" cy="40" r="7" fill="#e8554e" stroke="#fff" stroke-width="1.5"/>
      <!-- Track B: same ramp + a dip in the middle -->
      <path d="M30 120 L150 150 L210 150 C235 150 235 185 260 185 C285 185 285 150 310 150 L430 150"
            fill="none" stroke="#7f8c9b" stroke-width="6" stroke-linecap="round"/>
      <text x="30" y="110" class="dlabel">B</text>
      <circle cx="30" cy="120" r="7" fill="#e8554e" stroke="#fff" stroke-width="1.5"/>
      <text x="250" y="210" class="dnote" text-anchor="middle">dip speeds the ball up here</text>
      <line x1="430" y1="20" x2="430" y2="200" stroke="#c9d2dc" stroke-dasharray="4 4"/>
      <text x="438" y="115" class="dnote">finish</text>
    </svg>`,

  /* 80 km road split into two 40 km segments. */
  motorist: () => `
    <svg viewBox="0 0 460 150" role="img" aria-label="An 80 km trip split into two 40 km halves.">
      <rect x="30" y="70" width="400" height="22" fill="#3b4252" rx="4"/>
      <line x1="40" y1="81" x2="420" y2="81" stroke="#ffd166" stroke-width="3" stroke-dasharray="14 12"/>
      <line x1="230" y1="60" x2="230" y2="102" stroke="#c9d2dc" stroke-dasharray="3 3"/>
      <text x="130" y="50" class="dlabel" text-anchor="middle">first 40 km</text>
      <text x="130" y="125" class="dnote" text-anchor="middle">at 40 km/h  →  takes 1 h</text>
      <text x="330" y="50" class="dlabel" text-anchor="middle">last 40 km</text>
      <text x="330" y="125" class="dnote" text-anchor="middle">at ??? km/h</text>
      <!-- little car -->
      <g transform="translate(60 58)">
        <rect x="0" y="0" width="34" height="12" rx="4" fill="#e8554e"/>
        <rect x="7" y="-7" width="18" height="9" rx="3" fill="#e8554e"/>
        <circle cx="8" cy="13" r="4" fill="#222"/><circle cx="26" cy="13" r="4" fill="#222"/>
      </g>
    </svg>`,

  /* Two bikes closing in; a bee zig-zags between them. */
  bee: () => `
    <svg viewBox="0 0 460 170" role="img" aria-label="Two bikes 20 km apart approach each other; a bee flies back and forth between them.">
      <line x1="30" y1="120" x2="430" y2="120" stroke="#7f8c9b" stroke-width="3"/>
      <!-- left bike moving right -->
      <g transform="translate(40 96)">
        <circle cx="6" cy="20" r="10" fill="none" stroke="#3b4252" stroke-width="3"/>
        <circle cx="34" cy="20" r="10" fill="none" stroke="#3b4252" stroke-width="3"/>
        <path d="M6 20 L20 8 L34 20 M20 8 L24 4" stroke="#3b4252" stroke-width="3" fill="none"/>
      </g>
      <text x="55" y="80" class="dnote">10 km/h →</text>
      <!-- right bike moving left -->
      <g transform="translate(380 96)">
        <circle cx="6" cy="20" r="10" fill="none" stroke="#3b4252" stroke-width="3"/>
        <circle cx="34" cy="20" r="10" fill="none" stroke="#3b4252" stroke-width="3"/>
        <path d="M6 20 L20 8 L34 20 M20 8 L16 4" stroke="#3b4252" stroke-width="3" fill="none"/>
      </g>
      <text x="345" y="80" class="dnote">← 10 km/h</text>
      <!-- bee zig-zag -->
      <path d="M70 116 L150 96 L120 116 L210 92 L170 116 L270 94 L230 116 L330 100 L300 116 L390 110"
            fill="none" stroke="#ffd166" stroke-width="2.4" stroke-dasharray="2 3"/>
      <text x="250" y="60" class="dlabel" text-anchor="middle">bee at 30 km/h</text>
      <!-- distance bracket -->
      <line x1="50" y1="148" x2="410" y2="148" stroke="#c9d2dc"/>
      <line x1="50" y1="143" x2="50" y2="153" stroke="#c9d2dc"/>
      <line x1="410" y1="143" x2="410" y2="153" stroke="#c9d2dc"/>
      <text x="230" y="165" class="dnote" text-anchor="middle">20 km apart</text>
    </svg>`,

  /* Round trip with tail/head wind. */
  airplane: () => `
    <svg viewBox="0 0 460 170" role="img" aria-label="An airplane flies between two cities with a tailwind out and a headwind back.">
      <circle cx="55" cy="120" r="22" fill="#2e7d8a"/><text x="55" y="125" class="dlabel light" text-anchor="middle">A</text>
      <circle cx="405" cy="120" r="22" fill="#2e7d8a"/><text x="405" y="125" class="dlabel light" text-anchor="middle">B</text>
      <!-- outbound, tailwind -->
      <line x1="85" y1="70" x2="375" y2="70" stroke="#2ecc71" stroke-width="3" marker-end="url(#arrowG)"/>
      <text x="230" y="58" class="dnote" text-anchor="middle">out: tailwind → faster, less time</text>
      <!-- return, headwind -->
      <line x1="375" y1="160" x2="85" y2="160" stroke="#e8554e" stroke-width="3" marker-end="url(#arrowR)"/>
      <text x="230" y="152" class="dnote" text-anchor="middle">back: headwind → slower, more time</text>
      <!-- plane -->
      <g transform="translate(215 64) scale(1.1)">
        <path d="M0 6 L26 6 L34 0 L30 6 L40 6 L34 9 L26 12 L0 12 Z" fill="#3b4252"/>
        <path d="M12 6 L6 -4 L18 6 Z" fill="#3b4252"/>
      </g>
      <defs>
        <marker id="arrowG" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#2ecc71"/>
        </marker>
        <marker id="arrowR" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#e8554e"/>
        </marker>
      </defs>
    </svg>`
};
