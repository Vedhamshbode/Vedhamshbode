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
    id: "debugging-motor-controller-midnight",
    title: "What I learned debugging a motor controller at midnight",
    date: "March 2026",
    cover:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop",
    coverAlt: "Embedded board and motor controller",
    coverCaption: "The exact kind of test bench setup that exposes hidden edge cases.",
    excerpt:
      "A practical breakdown of the issue, the wrong assumptions, and the step-by-step checks that led to a stable fix.",
    body: [
      {
        type: "heading",
        text: "Symptoms",
      },
      {
        type: "paragraph",
        text: "The drive kept stuttering only under loaded turns. Straight-line tests looked clean, which made the issue easy to miss during quick checks.",
      },
      {
        type: "paragraph",
        text: "At first I suspected noisy encoder readings, but logs showed timing jitter between command publication and controller update windows.",
      },
      {
        type: "subheading",
        text: "The first two wrong turns",
      },
      {
        type: "list",
        items: [
          "Over-tuned PID gains to hide jitter symptoms",
          "Added filtering before validating scheduler timing",
          "Tested only no-load scenarios for too long",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1400&auto=format&fit=crop",
        alt: "Wiring and measurement probes on controller board",
        caption: "Instrumenting the system revealed timing drift rather than sensor noise.",
      },
      {
        type: "heading",
        text: "Fix and validation",
      },
      {
        type: "paragraph",
        text: "I aligned publication timing with the controller cycle, reduced queue depth, and added guardrails for stale commands. After that, response became smooth under the same loaded turn profile.",
      },
      {
        type: "quote",
        text: "The best late-night debugging rule: verify timing assumptions before tuning gains.",
      },
    ],
  },
  {
    id: "notes-from-first-competition",
    title: "Notes from my first competition",
    date: "January 2026",
    cover:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1400&auto=format&fit=crop",
    coverAlt: "Team working on robotics assembly",
    excerpt:
      "How preparation discipline mattered more than flashy features, and what I would do differently in the next event.",
    body: [
      {
        type: "heading",
        text: "Before the event",
      },
      {
        type: "paragraph",
        text: "The most useful work happened before travel day: checklists, spare-part mapping, and runbook notes for known failure modes.",
      },
      {
        type: "subheading",
        text: "What helped most on competition day",
      },
      {
        type: "list",
        items: [
          "A strict setup order for calibration",
          "Role ownership during pit fixes",
          "Short post-run debriefs after every attempt",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
        alt: "Team reviewing laptop diagnostics",
        caption: "Debriefing immediately after each run kept improvements focused.",
      },
      {
        type: "heading",
        text: "What I would change next time",
      },
      {
        type: "paragraph",
        text: "I would budget more test time for transitions between tasks, not just isolated task success. Most lost points came from handoff mistakes, not core algorithm quality.",
      },
    ],
  },
];
