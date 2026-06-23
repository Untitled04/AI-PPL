/*
 * Question bank for the Conceptual Physics interactive quiz.
 *
 * Source material:
 *  - Chapter 3 (Linear Motion): Hewitt "Next-Time Questions" worksheet.
 *  - Chapter 4 (Newton's Second Law of Motion): Hewitt "Clicker Questions" slides.
 *
 * Each question:
 *   { q: prompt, options: [..], answer: index (0-based), explain: why }
 */

const QUIZ = {
  ch3: {
    title: "Chapter 3 — Linear Motion",
    subtitle: "Next-Time Questions (conceptual reasoning)",
    icon: "🏎️",
    questions: [
      {
        q: "Tracks A and B are made from channel iron of the same length, bent identically except for a small dip near the middle of Track B. Balls are released simultaneously on both tracks. The ball that races first to the end is on…",
        options: ["Track A", "Track B", "They both reach the end at the same time"],
        answer: 1,
        explain:
          "Track B wins. The ball that dips down speeds up along the dip, so its instantaneous speed everywhere on B (except in the dip) is at least as great as on A. Greater average speed means a shorter time, even though both tracks have the same length.",
      },
      {
        q: "A motorist wishes to travel 40 km at an average speed of 40 km/h. She drives the first 20 km at 40 km/h, then the next 10 km at only 20 km/h. To drive the last 10 km and average 40 km/h for the whole trip, she must drive…",
        options: ["60 km/h", "80 km/h", "90 km/h", "Faster than the speed of light"],
        answer: 3,
        explain:
          "To average 40 km/h over 40 km the whole trip must take exactly 1 hour. The first 20 km took ½ h, and the next 10 km at 20 km/h took another ½ h — a full hour is already used up. So the last 10 km would have to be covered in zero time, which is impossible.",
      },
      {
        q: "Two bikes approach each other, each moving at 10 km/h, starting 20 km apart. A bee flies back and forth between the front wheels at a steady 30 km/h until the bikes meet and SQUISH. How far does the bee travel in total?",
        options: ["20 km", "30 km", "45 km", "60 km"],
        answer: 1,
        explain:
          "Use d = v·t. The bikes close a 20 km gap at a combined 20 km/h, so they meet after t = 1 hour. The bee flies the whole time at 30 km/h, so d = 30 km/h × 1 h = 30 km.",
      },
      {
        q: "An airplane makes a straight back-and-forth round trip at the same airspeed. If it meets a mild steady tailwind going and the same steady headwind returning, the round trip takes…",
        options: ["Less time than with no wind", "The same time as with no wind", "More time than with no wind"],
        answer: 2,
        explain:
          "More time. Say each leg is 600 km at an airspeed of 300 km/h (no wind: 4 h total). With a 100 km/h wind: tailwind leg = 600/400 = 1.5 h, headwind leg = 600/200 = 3 h, total 4.5 h. The plane spends more time being slowed by the headwind than sped up by the tailwind.",
      },
    ],
  },

  ch4: {
    title: "Chapter 4 — Newton's Second Law of Motion",
    subtitle: "Clicker Questions (a = F/m, friction, air drag, free fall)",
    icon: "🍎",
    questions: [
      {
        q: "A motorcycle undergoes acceleration when…",
        options: ["ΣF = 0", "a nonzero net force acts on it", "it is in equilibrium", "All of these"],
        answer: 1,
        explain: "Acceleration requires a net force. No net force (equilibrium, ΣF = 0) means no acceleration.",
      },
      {
        q: "When a net force acts on an object, its acceleration depends on the object's…",
        options: ["initial speed", "volume", "weight", "mass"],
        answer: 3,
        explain:
          "From a = F/m, acceleration depends on mass. You could say weight in common Earth situations, but mass is the more general answer.",
      },
      {
        q: "The force of friction between two surfaces can act…",
        options: [
          "only when the surfaces move relative to each other",
          "whether or not the surfaces move relative to each other",
          "even when the surfaces are far apart and not touching",
          "only over microscopic distances",
        ],
        answer: 1,
        explain: "Friction acts both when surfaces slide (kinetic) and when they are at rest (static).",
      },
      {
        q: "The force of air friction (air drag) against a falling sack of potatoes…",
        options: ["acts upward", "increases with increased area", "increases with increased speed", "All of the above"],
        answer: 3,
        explain: "Air drag opposes motion (acts upward on a falling object) and grows with both frontal area and speed.",
      },
      {
        q: "Mass is most closely related to…",
        options: ["inertia", "weight", "volume", "location"],
        answer: 0,
        explain: "Mass is a measure of inertia — the resistance of an object to a change in its motion.",
      },
      {
        q: "An object with a mass of 1 kilogram on Earth…",
        options: [
          "has less mass on the Moon",
          "has the same mass on the Moon",
          "has more mass on the Moon",
          "has no mass on the Moon",
        ],
        answer: 1,
        explain: "Mass is the amount of matter and does not change with location. Only weight changes between Earth and the Moon.",
      },
      {
        q: "A 1-kilogram object on Earth…",
        options: [
          "weighs less on the Moon",
          "weighs the same on the Moon",
          "weighs more on the Moon",
          "weighs the same everywhere",
        ],
        answer: 0,
        explain: "Weight = mg. The Moon's gravity is weaker (about 1/6 of Earth's), so the same mass weighs less there.",
      },
      {
        q: "When we say that 1 kilogram weighs 10 N, we mean that…",
        options: ["1 kg is 10 N", "it's true at Earth's surface", "it's true everywhere", "mass and weight are one and the same"],
        answer: 1,
        explain: "Weight depends on gravity. The relation 1 kg ≈ 10 N holds at Earth's surface, not in general.",
      },
      {
        q: "When your mass increases, your weight…",
        options: ["may remain the same", "also increases", "decreases", "transforms to greater volume"],
        answer: 1,
        explain: "At a fixed location, weight is proportional to mass (W = mg), so more mass means more weight.",
      },
      {
        q: "The force of gravity acting on a 2-kg melon is…",
        options: ["2 kg", "10 N", "20 N", "more than 20 N"],
        answer: 2,
        explain: "Weight = mg = 2 kg × 10 m/s² = 20 N. (Note kg is mass, not force.)",
      },
      {
        q: "For a given force, acceleration and mass are…",
        options: [
          "directly proportional to each other",
          "inversely proportional to each other",
          "not related",
          "two words for the same concept",
        ],
        answer: 1,
        explain: "From a = F/m with F fixed, doubling the mass halves the acceleration — they are inversely proportional.",
      },
      {
        q: "As mass is added to a pushed object (same push force), its acceleration…",
        options: ["increases", "decreases", "remains constant", "quickly reaches zero"],
        answer: 1,
        explain: "Let a = F/m guide you. With the same force, more mass means less acceleration.",
      },
      {
        q: "A cart is pushed and undergoes a certain acceleration. If it were pushed with twice the force while its mass also doubles, its acceleration would be…",
        options: ["one-quarter", "one-half", "the same", "nearly but not quite double"],
        answer: 2,
        explain: "a = F/m. The ratios F/m and 2F/2m are equal, so the acceleration is unchanged.",
      },
      {
        q: "A cart is pushed and undergoes a certain acceleration. If the force is held constant and the mass of the cart doubles, its acceleration would be…",
        options: ["one-quarter", "one-half", "the same", "nearly but not quite twice"],
        answer: 1,
        explain: "a = F/(2m) = half the original acceleration when mass doubles and force stays the same.",
      },
      {
        q: "During each second of free fall, the speed of an object…",
        options: [
          "increases by the same amount",
          "changes by increasing amounts each second",
          "remains constant",
          "doubles each second",
        ],
        answer: 0,
        explain: "Free fall has constant acceleration g, so the speed increases by the same amount (about 10 m/s) every second.",
      },
      {
        q: "The reason a 10-kg rock falls no faster than a 5-kg rock in free fall is that…",
        options: [
          "the 10-kg rock has greater acceleration",
          "the 5-kg rock has greater acceleration",
          "the force of gravity is the same for both",
          "the force/mass ratio is the same for both",
        ],
        answer: 3,
        explain: "The heavier rock feels more gravitational force, but it also has more mass. The ratio F/m (= g) is the same, so both accelerate equally.",
      },
      {
        q: "Use Newton's second law: the acceleration of a vertically thrown ball at the very top of its path is…",
        options: ["0", "10 m/s²", "between 0 and 10 m/s²", "dependent on the initial speed of the ball"],
        answer: 1,
        explain: "A toughie! At the top the speed is momentarily zero, but gravity still acts and the ball still has mass. By a = F/m, the acceleration is g ≈ 10 m/s², not 0.",
      },
      {
        q: "The amount of air resistance that acts on a wingsuit flyer (or a flying squirrel) depends on the flyer's…",
        options: ["area", "speed", "area and speed", "acceleration"],
        answer: 2,
        explain: "Air drag depends on both the frontal area and the speed — that's why a wingsuit spreads out a large area.",
      },
      {
        q: "A lead-filled tennis ball and a regular tennis ball are dropped from a tall building at the same time. Air drag does affect the motion. Which reaches the ground first?",
        options: ["The lead-filled one", "The regular one", "They reach the ground at the same time", "No way to say"],
        answer: 0,
        explain: "Same size, so similar drag — but the heavier (lead-filled) ball has a greater terminal speed, so it reaches the ground first.",
      },
      {
        q: "The same two balls are dropped from a tall building (air drag matters). The ball that experiences the greater amount of air drag is the…",
        options: [
          "lead-filled one",
          "regular one",
          "Neither — both experience the same air resistance",
          "No way to say",
        ],
        answer: 0,
        explain: "The lead-filled ball falls faster, and for the same size the faster ball pushes through more air, so it experiences more air drag.",
      },
    ],
  },
};
