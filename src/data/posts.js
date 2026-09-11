// ── Blog posts ────────────────────────────────────────────────────────────
// This is the file you'll come back to most. To publish a new post:
//
//   1. Copy the block below (from "{" to "},").
//   2. Paste it as a NEW FIRST ITEM in the `posts` array (newest on top).
//   3. Fill in title / date / excerpt / content.
//   4. Save. That's it — no build step, no CMS login, nothing else to touch.
//
// Template (copy from here down to the matching "}," ):
// {
//   id: "unique-url-safe-id",       // lowercase, hyphens, no spaces
//   title: "Your post title",
//   date: "Month Year",              // just a display string, e.g. "June 2026"
//   excerpt: "One or two sentences shown in the collapsed list view.",
//   cover: "https://...",             // optional lead image
//   body: [
//     { type: "heading", text: "Section heading" },
//     { type: "paragraph", text: "A normal paragraph." },
//     { type: "subheading", text: "Sub section" },
//     { type: "image", src: "https://...", alt: "", caption: "Optional" },
//     { type: "list", items: ["Point one", "Point two"] },
//   ],
// },
//
// See docs/ADDING_CONTENT.md for the same steps with more explanation.

export const posts = [
  {
    id: "benchmarking-vla-models-for-real-world-robotics",
    title: "Benchmarking VLA models for real-world robotics",
    date: "March 2026",
    cover:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop",
    coverAlt: "Robotics workstation with sensors and compute hardware",
    coverCaption: "Benchmarking matters only if the evaluation setup matches the real task constraints.",
    excerpt:
      "Notes on measuring accuracy, inference speed, and deployment tradeoffs when testing Vision-Language-Action models on real robotic tasks.",
    body: [
      {
        type: "heading",
        text: "Why benchmarking is harder than it sounds",
      },
      {
        type: "paragraph",
        text: "Evaluating a Vision-Language-Action model on robotics tasks is not just about measuring raw inference speed. The real questions are whether the policy survives sensor noise, whether it tolerates imperfect actuation, and whether it can stay useful once wrapped inside a practical control stack.",
      },
      {
        type: "paragraph",
        text: "The most useful benchmark setups are the ones that force models through the same friction they will see later: variable lighting, repeated resets, action latency, and task completion pressure.",
      },
      {
        type: "subheading",
        text: "What I pay attention to",
      },
      {
        type: "list",
        items: [
          "Task success under repeated runs, not just one clean demo",
          "Inference latency under the actual deployment architecture",
          "Failure modes that appear only when perception and action loops are tightly coupled",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1400&auto=format&fit=crop",
        alt: "Robotics testing setup with instrumentation",
        caption: "The important numbers are the ones that remain meaningful after you move from notebooks to deployed systems.",
      },
      {
        type: "heading",
        text: "Why simulation still matters",
      },
      {
        type: "paragraph",
        text: "Simulation is still essential, but only when it is used to shorten iteration cycles rather than to hide reality. The best workflow is using simulation to eliminate obvious design mistakes early, then carrying the same evaluation logic into real hardware tests.",
      },
      {
        type: "quote",
        text: "A robotics benchmark is only useful if it tells you something about the next deployment decision.",
      },
    ],
  },
  {
    id: "what-simulation-saved-me-in-robotics-projects",
    title: "What simulation saved me in robotics projects",
    date: "January 2026",
    cover:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1400&auto=format&fit=crop",
    coverAlt: "Robotics team working between hardware and simulation",
    excerpt:
      "A short reflection on how Isaac Sim, MuJoCo, and Gazebo reduced physical test time and made system integration less chaotic.",
    body: [
      {
        type: "heading",
        text: "The real value of simulation",
      },
      {
        type: "paragraph",
        text: "Simulation helped most when it was used to answer specific engineering questions: will this planner recover, will this trajectory collide, and will the sensor arrangement even provide the information we think it does?",
      },
      {
        type: "subheading",
        text: "Where it saved time",
      },
      {
        type: "list",
        items: [
          "Testing integration logic before hardware was available",
          "Comparing planners and control strategies faster than physical reruns",
          "Collecting structured data for later debugging and evaluation",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
        alt: "Engineer reviewing simulation workflows on laptop",
        caption: "Simulation paid off most when it stayed connected to real deployment constraints.",
      },
      {
        type: "heading",
        text: "The limit",
      },
      {
        type: "paragraph",
        text: "Simulation cannot replace the edge cases that appear on physical systems, but it can dramatically reduce wasted effort before those edge cases become expensive. The best results came when the simulated workflow and the real pipeline stayed structurally similar.",
      },
    ],
  },
];
