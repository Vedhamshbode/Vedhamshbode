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
    title: "Competition Name — Year",
    tagline: "One line on the event and your role in it.",
    tags: ["Team of 5", "Finalist"],
    cover:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    description:
      "What the competition asked teams to build, and what your team specifically built or contributed. Mention the result if you're proud of it, but the process is usually more interesting to read.",
    highlights: [
      "Your specific role or contribution",
      "The hardware/software constraints of the competition",
      "The result — finalist, ranking, award, etc.",
    ],
    link: "",
  },
  {
    id: "competition-two",
    title: "Another Competition — Year",
    tagline: "One line on the event and your role in it.",
    tags: ["Solo entry"],
    cover:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    description: "Same idea — write it plainly, with specifics.",
    highlights: [
      "Your specific role or contribution",
      "The hardware/software constraints of the competition",
      "The result",
    ],
    link: "",
  },
];
