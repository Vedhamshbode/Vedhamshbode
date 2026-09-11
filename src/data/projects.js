// ── Projects ──────────────────────────────────────────────────────────────
// Your personal/independent builds. These show up as cards on the Projects
// grid; clicking one expands it into a full detail view.
//
// To add a new project: copy one whole { ... } block below, paste it as a
// new item in the array, and edit the fields. `id` just needs to be unique
// and URL-safe (lowercase, hyphens, no spaces).

export const projects = [
  {
    id: "project-one",
    title: "Project One",
    tagline: "A short line on what it does and why it exists.",
    tags: ["Autonomy", "ROS2", "Computer Vision"],
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    description:
      "A longer description of the project: the problem you were solving, the approach you took, and the constraints you were working under. Two or three sentences is plenty — let the specifics do the work rather than general praise.",
    highlights: [
      "The specific technical challenge you solved",
      "The stack or hardware you used",
      "The measurable outcome, if you have one",
    ],
    link: "",
  },
  {
    id: "project-two",
    title: "Project Two",
    tagline: "A short line on what it does and why it exists.",
    tags: ["Embedded", "Control Systems"],
    cover:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200&auto=format&fit=crop",
    description:
      "A longer description of the project, written the same way — plain and specific.",
    highlights: [
      "The specific technical challenge you solved",
      "The stack or hardware you used",
      "The measurable outcome, if you have one",
    ],
    link: "",
  },
];
