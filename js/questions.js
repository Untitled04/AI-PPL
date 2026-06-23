/* =====================================================================
 * questions.js  —  Course content for the interactive physics classroom
 *
 * Source material (Conceptual Physics, Hewitt):
 *   • Chapter 2 — Newton's First Law of Motion: Inertia   (Clicker Questions)
 *   • Chapter 3 — Linear Motion                            (Next-Time Questions)
 *
 * Each clicker question:
 *   { id, stem, choices:[...], answer:<index>, explain }
 *
 * Each Next-Time question:
 *   { id, stem, choices:[...], answer:<index>, explain, diagram:<svg id> }
 *
 * This file is plain data so it loads from file:// with a simple <script>
 * tag — no build step, no server, no dependencies.
 * ===================================================================== */

/* ---------------------------------------------------------------------
 * CHAPTER 2  —  CLICKER QUESTIONS  (Newton's First Law of Motion: Inertia)
 * ------------------------------------------------------------------- */
const CLICKER_QUESTIONS = [
  {
    id: "c1",
    stem: "Aristotle and his followers for many centuries thought Earth was at rest at the center of the universe because",
    choices: [
      "humans experience no sensation of a moving Earth.",
      "Earth rotates about its axis.",
      "Earth moves in a perfect circle.",
      "Earth moves in an elliptical path about the Sun."
    ],
    answer: 0,
    explain:
      "We feel motion only when it changes. Because Earth moves so smoothly, our bodies sense no motion at all — which is exactly why the idea of a moving Earth seemed absurd for so long."
  },
  {
    id: "c2",
    stem: "Science greatly advanced when Galileo favored",
    choices: [
      "philosophical discussions over experiment.",
      "experiment over philosophical discussions.",
      "nonmathematical thinking.",
      "the conclusions of Aristotle."
    ],
    answer: 1,
    explain:
      "Galileo's key contribution was insisting that ideas be tested by experiment rather than settled by argument or appeal to authority. This is the seed of the modern scientific method."
  },
  {
    id: "c3",
    stem: "Galileo said that if you rolled a ball along a level surface it would",
    choices: [
      "soon slow down due to its natural tendency to come to rest.",
      "keep rolling without slowing if no friction acted upon it.",
      "roll as long as its inertia nudged it along.",
      "soon roll in the opposite direction."
    ],
    answer: 1,
    explain:
      "A moving object slows only because friction acts on it. Remove friction and the ball keeps rolling forever — inertia keeps it moving, no force required."
  },
  {
    id: "c4",
    stem: "When Galileo rolled a ball down one incline so that at the bottom it rolled up another, he found that the ball rolled",
    choices: [
      "almost to its initial height.",
      "halfway to its original height.",
      "to its original height.",
      "higher than its original height."
    ],
    answer: 0,
    explain:
      "In the real experiment friction robs a little energy, so the ball reaches almost its starting height. Galileo reasoned that without friction it would reach exactly its original height — and on a level surface it would never stop."
  },
  {
    id: "c5",
    stem: "According to Galileo, inertia is a",
    choices: [
      "force like any other force.",
      "nonexistent idea, later disproved.",
      "property of all matter.",
      "concept opposite to force."
    ],
    answer: 2,
    explain:
      "Inertia is not a force — it is the property of every object to resist changes in its state of motion. More mass means more inertia."
  },
  {
    id: "c6",
    stem: "Which of these is NOT a vector quantity?",
    choices: [
      "acceleration",
      "velocity",
      "speed",
      "All are vector quantities."
    ],
    answer: 2,
    explain:
      "Speed is a scalar — it has magnitude only. Velocity and acceleration are vectors because they include direction. 'Speed' is just the magnitude of velocity."
  },
  {
    id: "c7",
    stem: "When dishes remain on a table while you yank away the tablecloth, you're illustrating",
    choices: [
      "inertia.",
      "friction.",
      "the equilibrium rule.",
      "the support force of the table."
    ],
    answer: 0,
    explain:
      "The dishes resist a change in their state of rest — that's inertia. The cloth is pulled out from under them before it can drag them along."
  },
  {
    id: "c8",
    stem: "If gravity between the Sun and Earth suddenly vanished, Earth would continue moving in",
    choices: [
      "a curved path.",
      "an outward spiral path.",
      "a straight-line path.",
      "a path directly away from the Sun."
    ],
    answer: 2,
    explain:
      "With no force to bend its path, Earth obeys inertia and flies off in a straight line — tangent to its former orbit, like a ball released from a whirling string."
  },
  {
    id: "c9",
    stem: "A space probe in remote outer space continues moving",
    choices: [
      "because some kind of force acts on it.",
      "because of the impetus given to it at launch.",
      "even though no force acts on it.",
      "only while its engines fire."
    ],
    answer: 2,
    explain:
      "No force is needed to keep something moving. In the near-emptiness of space, with essentially no friction, inertia carries the probe along indefinitely."
  },
  {
    id: "c10",
    stem: "Consider a ball resting in the middle of a cart. When you quickly jerk the cart forward, the ball",
    choices: [
      "hits the front of the cart.",
      "hits the back of the cart.",
      "remains in the middle of the cart.",
      "All are possible, depending on how quickly the cart is pulled."
    ],
    answer: 1,
    explain:
      "The ball tends to remain at rest (inertia). The cart moves forward beneath it, so the back wall of the cart sweeps forward and meets the ball."
  },
  {
    id: "c11",
    stem: "A girl pushes a cart to the left with a 100-N force. A boy pushes it to the right with a 50-N force. The net force on the cart is",
    choices: [
      "50 N to the left.",
      "50 N to the right.",
      "150 N to the left.",
      "zero."
    ],
    answer: 0,
    explain:
      "Forces in opposite directions subtract: 100 N − 50 N = 50 N, in the direction of the larger force (the girl's), so 50 N to the left."
  },
  {
    id: "c12",
    stem: "When a 10-kg block is simultaneously pushed eastward with 20 N and westward with 15 N, the combined force on the block is",
    choices: [
      "5 N westward.",
      "5 N eastward.",
      "35 N eastward.",
      "zero."
    ],
    answer: 1,
    explain:
      "Opposite forces subtract: 20 N − 15 N = 5 N, in the direction of the larger force (east). The mass is a distractor — net force here is about the forces, not the mass."
  },
  {
    id: "c13",
    stem: "When a 10-N object is suspended at rest by two vertical strands of rope, the tension in each rope is",
    choices: [
      "slightly less than 5 N.",
      "5 N.",
      "slightly more than 5 N.",
      "10 N."
    ],
    answer: 1,
    explain:
      "The object is in equilibrium, so the two upward tensions must add to the 10-N weight. By symmetry each rope carries half: 5 N."
  },
  {
    id: "c14",
    stem: "When sign painters Burl and Paul stand on opposite ends of a scaffold, the tensions in the two supporting ropes",
    choices: [
      "are equal.",
      "depend on the relative weights of Burl and Paul.",
      "combine to equal zero.",
      "are each greater than the total weight."
    ],
    answer: 1,
    explain:
      "If the weights are equal, the tensions are equal. If Burl is heavier, his rope supports more weight and carries the greater tension. The rope nearer the heavier person bears more load."
  },
  {
    id: "c15",
    stem: "If Burl carried Paul piggy-back while standing in the middle of a scaffold, the tensions in the two supporting ropes would",
    choices: [
      "each be half their combined weight.",
      "depend on who is heavier.",
      "be unequal.",
      "each equal their combined weight."
    ],
    answer: 0,
    explain:
      "Centered load + symmetric ropes ⇒ the two tensions are equal, and together they support the combined weight. So each rope carries half the total."
  },
  {
    id: "c16",
    stem: "Burl and Paul have a total weight of 1300 N. The tensions in the ropes supporting their scaffold add to 1700 N. The weight of the scaffold itself must be",
    choices: [
      "300 N.",
      "400 N.",
      "1300 N.",
      "3000 N."
    ],
    answer: 1,
    explain:
      "The system is in equilibrium, so total upward tension = total weight supported. 1700 N − 1300 N = 400 N is left over for the scaffold itself."
  },
  {
    id: "c17",
    stem: "Place a book that weighs 10 N on a table. The support (normal) force on the book is",
    choices: [
      "slightly less than 10 N.",
      "10 N.",
      "slightly greater than 10 N.",
      "dependent on whether the book lies flat or stands upright."
    ],
    answer: 1,
    explain:
      "The book is in equilibrium, so the upward support force exactly balances the 10-N weight. Orientation doesn't change the weight, so the support force is 10 N."
  },
  {
    id: "c18",
    stem: "The equilibrium rule, ΣF = 0, applies to",
    choices: [
      "objects or systems at rest.",
      "objects or systems in uniform motion in a straight line.",
      "both of these.",
      "neither of these."
    ],
    answer: 2,
    explain:
      "Equilibrium means no change in motion — zero net force. That covers both objects at rest and objects moving at constant velocity in a straight line."
  },
  {
    id: "c19",
    stem: "The net force on any object in equilibrium is",
    choices: [
      "zero.",
      "10 meters per second squared.",
      "equal to its weight.",
      "somewhat less than its weight."
    ],
    answer: 0,
    explain:
      "By definition, an object in equilibrium has no net force acting on it: ΣF = 0. (Note that m/s² are units of acceleration, not force — choice b is a unit trap.)"
  },
  {
    id: "c20",
    stem: "Earth moves about 30 km/s relative to the Sun. When you jump upward in front of a wall, the wall doesn't slam into you at 30 km/s. This is because the wall",
    choices: [
      "has too little gravity to influence you.",
      "moves in a direction opposite to you.",
      "and you are moving at the same horizontal speed before, during, and after your jump.",
      "has negligible inertia compared with the Sun."
    ],
    answer: 2,
    explain:
      "You share Earth's motion. Before, during, and after the jump you and the wall move together at the same 30 km/s, so there's no relative motion between you — a vivid demonstration of inertia."
  }
];

/* ---------------------------------------------------------------------
 * CHAPTER 3  —  NEXT-TIME QUESTIONS  (Linear Motion)
 * Conceptual reasoning questions with reveal-the-answer explanations.
 * 'diagram' names an SVG builder in diagrams.js.
 * ------------------------------------------------------------------- */
const NEXT_TIME_QUESTIONS = [
  {
    id: "n1",
    diagram: "tracks",
    stem:
      "Tracks A and B are made from pieces of channel iron of the same length. They are bent identically except for the small dip near the middle of Track B. When two balls are released simultaneously, the ball that reaches the end of the track first travels on",
    choices: ["Track A.", "Track B.", "...both reach the end at the same time."],
    answer: 1,
    explain:
      "Track B. Both balls have the same speed at the start and at the end. But on the dip, the ball on Track B speeds up — it rolls faster everywhere along the lower part of the dip and never falls behind anywhere else. A greater average speed over the same distance means a shorter time, so Ball B wins. (The extra distance of the dip is more than made up for by the higher speed there.)"
  },
  {
    id: "n2",
    diagram: "motorist",
    stem:
      "A motorist wishes to travel 80 km at an average speed of 40 km/h. During the first 40 km the speed is exactly 40 km/h. To average 40 km/h for the whole 80-km trip, the motorist must drive the last 40 km at",
    choices: ["40 km/h.", "80 km/h.", "90 km/h.", "faster than the speed of light."],
    answer: 3,
    explain:
      "Faster than the speed of light — that is, it's impossible! To average 40 km/h over 80 km you have a time budget of just 2 hours. But the first 40 km at 40 km/h already used the entire 2 hours. There is zero time left for the second 40 km, so no finite speed can rescue the average. This is the classic trap of averaging speeds."
  },
  {
    id: "n3",
    diagram: "bee",
    stem:
      "Two bikes, each moving at 10 km/h, start 20 km apart and head toward each other. At the same instant a bee leaves the front wheel of one bike and flies at a steady 30 km/h to the other, then turns and flies back, repeating until the bikes meet — SQUISH! How far does the bee travel in total?",
    choices: ["20 km", "30 km", "45 km", "an infinite distance"],
    answer: 1,
    explain:
      "30 km. Forget the messy back-and-forth — focus on time. The bikes close the 20-km gap at 10 + 10 = 20 km/h, so they meet after t = distance ÷ speed = 20 ÷ 20 = 1 hour. The bee flies the whole time at 30 km/h, so it covers d = v·t = 30 km/h × 1 h = 30 km. (This is the puzzle John von Neumann reportedly solved in his head — instantly.)"
  },
  {
    id: "n4",
    diagram: "airplane",
    stem:
      "An airplane makes a straight back-and-forth round trip, always at the same airspeed, between two cities. If it meets a mild steady tailwind going and the same steady headwind returning, will the round trip take more, less, or the same time as with no wind?",
    choices: ["More time", "Less time", "The same time"],
    answer: 0,
    explain:
      "More time. The tailwind speeds you up, but only for a short while; the headwind slows you down, and you're stuck in it longer. You spend more time at the slow (headwind) speed than at the fast (tailwind) speed, so the slow leg dominates. Worked example: 300-km legs, 300 km/h airspeed, 100 km/h wind. Out (tailwind): groundspeed 400 km/h ⇒ 300÷400 = 0.75 h. Back (headwind): groundspeed 200 km/h ⇒ 300÷200 = 1.5 h. Total = 2.25 h, versus 1 h + 1 h = 2 h with no wind. Any nonzero wind makes the round trip take longer."
  }
];
