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
    title: "Autonomous Rover Navigation Stack",
    tagline: "A multi-sensor navigation system for waypoint travel in cluttered indoor tracks.",
    tags: ["Autonomy", "ROS2", "Computer Vision"],
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    coverAlt: "Autonomous rover hardware close-up",
    description:
      "A full autonomy stack to fuse camera and range readings, estimate lane boundaries, and guide a rover through repeated test loops.",
    highlights: [
      "Integrated perception and control into a single launch flow",
      "Reached stable tracking across repeated mock competition runs",
      "Added diagnostics dashboards that shortened debugging cycles",
    ],
    details: [
      {
        heading: "Problem",
        paragraphs: [
          "The rover had to move through a narrow lane with uneven lighting, reflective floor patches, and occasional static obstacles. Raw camera-only control drifted under these conditions and could not hold a stable centerline.",
          "The target was to improve repeatability so each run could complete without manual intervention while preserving safe braking if confidence dropped.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "I split the pipeline into perception, planner, and controller nodes in ROS2. The perception node estimated lane and obstacle masks, the planner produced short-horizon target points, and the controller converted target points into motor commands.",
          "A confidence score from perception was propagated downstream, and the controller reduced speed or stopped when uncertainty crossed a threshold.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "With calibration and filtering, the rover completed repeated route loops with far fewer off-track events than the baseline setup. The node-level logs also made it easier to localize failures quickly in later test sessions.",
        ],
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1581093588401-22a5d10f6939?q=80&w=1400&auto=format&fit=crop",
        alt: "Rover electronics and wiring on test bench",
        caption: "Bench setup used for sensor validation and launch checks.",
      },
      {
        src: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1400&auto=format&fit=crop",
        alt: "Laptop screen with robotics diagnostics",
        caption: "Runtime diagnostics that tracked confidence and control outputs.",
      },
    ],
    link: "",
  },
  {
    id: "project-two",
    title: "Smart Greenhouse Monitoring",
    tagline: "An embedded sensing platform with remote alerts and trend tracking.",
    tags: ["Embedded", "Control Systems"],
    cover:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200&auto=format&fit=crop",
    coverAlt: "Rows of plants in a greenhouse",
    description:
      "A modular controller that watches humidity, temperature, and soil moisture while triggering actuators based on configurable thresholds.",
    highlights: [
      "Designed firmware for reliable sensor polling and smoothing",
      "Implemented threshold-driven fan and irrigation control",
      "Built periodic snapshot reports for maintenance review",
    ],
    details: [
      {
        heading: "System design",
        paragraphs: [
          "The architecture combines sensor interfaces, a control loop, and a lightweight logging service. The device can run standalone, then sync snapshots to a dashboard when network is available.",
          "Priority was given to predictable behavior and easy maintenance so thresholds and sampling windows could be adjusted without reflashing every module.",
        ],
      },
      {
        heading: "Control logic",
        paragraphs: [
          "Readings are filtered using moving windows to reduce noise spikes. Actuators only trigger after sustained threshold violations to avoid rapid on-off cycles that wear relays.",
          "This reduced false triggers and kept the environment more stable across day-night transitions.",
        ],
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1400&auto=format&fit=crop",
        alt: "Close-up greenhouse plants",
        caption: "Test zone used to tune moisture threshold behavior.",
      },
    ],
    link: "",
  },
];
