// ── Competitions ──────────────────────────────────────────────────────────
// For team competitions/events — the "Beebot", "eYRC", "ABU Robocon"-style
// entries. Same shape as projects.js, kept as a separate list so
// competitions and personal projects don't mix on one grid.
//
// To add one: copy a whole { ... } block, paste it as a new array item,
// and edit the fields.

export const competitions = [
  {
    id: "competition-one",
    title: "National Robotics Challenge - 2025",
    tagline: "Led controls and integration for an autonomous task robot in a six-member team.",
    tags: ["Team of 5", "Finalist"],
    cover:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    coverAlt: "Robotics team preparing hardware",
    description:
      "A task-driven robotics event requiring autonomous navigation, object pickup, and scoring under strict run-time limits.",
    highlights: [
      "Owned path planning and execution pipeline",
      "Reduced reruns through pre-check scripts and calibration flow",
      "Reached finalist stage with consistent mission completion",
    ],
    details: [
      {
        heading: "Event format",
        paragraphs: [
          "The robot had to detect task cues, navigate to dynamic targets, and complete pick-place operations in sequence. Minor execution delays accumulated fast, so efficiency in transitions mattered as much as raw speed.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I handled motion planning integration and wrote the run checklist for sensor calibration and controller verification. This made pre-run setup repeatable and cut random failures during judged rounds.",
          "During finals, I tuned fallback states so the robot could recover from temporary perception loss instead of hard stopping.",
        ],
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1400&auto=format&fit=crop",
        alt: "Robot base and tools during preparation",
        caption: "Pit setup before qualification rounds.",
      },
      {
        src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1400&auto=format&fit=crop",
        alt: "Engineering students working around a robot",
        caption: "Debugging and final tuning between attempts.",
      },
    ],
    link: "",
  },
  {
    id: "competition-two",
    title: "Autonomous Systems League - 2024",
    tagline: "Built and tested perception reliability benchmarks for a solo entry.",
    tags: ["Solo entry"],
    cover:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    coverAlt: "Robotics components and sensors",
    description: "A multi-stage challenge focused on sensor robustness and autonomous decision making.",
    highlights: [
      "Created repeatable stress scenarios for perception tests",
      "Documented failure modes and mitigation patterns",
      "Improved completion consistency in later rounds",
    ],
    details: [
      {
        heading: "Constraints",
        paragraphs: [
          "The arena had varied lighting and reflective surfaces that destabilized feature detection. Runs were short, so there was little time for in-mission correction.",
        ],
      },
      {
        heading: "Progress across rounds",
        paragraphs: [
          "I introduced precomputed exposure profiles and confidence-gated action switching. By the final round, false decisions dropped and route completion became more reliable.",
        ],
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1400&auto=format&fit=crop",
        alt: "Robot and laptop during field test",
        caption: "Field test session for perception threshold tuning.",
      },
    ],
    link: "",
  },
];
