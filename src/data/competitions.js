// ── Competitions ──────────────────────────────────────────────────────────
// For team competitions/events — the "Beebot", "eYRC", "ABU Robocon"-style
// entries. Same shape as projects.js, kept as a separate list so
// competitions and personal projects don't mix on one grid.
//
// To add one: copy a whole { ... } block, paste it as a new array item,
// and edit the fields.

export const competitions = [
  {
    id: "robocup-arm-challenge-2024",
    title: "RoboCup Arm Challenge - 2024",
    tagline: "Part of a top-6 global finalist team, contributing to object detection and computer vision for robotic arm tasks.",
    tags: ["Global Finalist", "Top 6", "Computer Vision"],
    cover:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    coverAlt: "Robotics team preparing hardware",
    description:
      "An international challenge centered on manipulation and perception performance for robotic arm tasks under competition constraints.",
    highlights: [
      "Ranked among the top 6 teams in the world",
      "Worked on the team's object detection and computer vision pipeline",
      "Contributed to competition-grade robotics perception under time pressure",
    ],
    details: [
      {
        heading: "Competition scope",
        paragraphs: [
          "The challenge demanded robust perception for robotic arm interactions, where visual errors quickly translated into failed task execution. Competition conditions placed extra pressure on reliability, speed, and repeatability.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I contributed to the object detection and vision pipeline used by the team during the challenge. The work focused on making perception outputs more dependable for downstream manipulation tasks and helping the full system stand up under competition constraints.",
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
    id: "eyantra-2024-25",
    title: "e-Yantra 2024-25, IIT Bombay",
    tagline: "Semifinalist in a national robotics competition built around coordinated warehouse automation.",
    tags: ["Semifinalist", "Warehouse Robotics", "Manipulation + Navigation"],
    cover:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    coverAlt: "Robotics components and sensors",
    description: "A competition project that coordinated a UR5 robotic arm and an autonomous mobile rover to complete package pick-and-drop tasks in a simulated warehouse.",
    highlights: [
      "Advanced to semifinal stage",
      "Reached 100% pick-and-place success in simulation",
      "Explored Nav2, MoveIt2, ArUco, and IK planning tradeoffs",
    ],
    details: [
      {
        heading: "Challenge setup",
        paragraphs: [
          "The task required integrating autonomous navigation, manipulation, and perception in a single workflow. The warehouse scenario rewarded repeatability and clean subsystem handoffs more than isolated subsystem performance.",
        ],
      },
      {
        heading: "What I worked on",
        paragraphs: [
          "I helped build the coordinated arm-plus-AMR pipeline, iterating across planners, controllers, and localization approaches to improve robustness. ArUco-based pose estimation was used to support automated pick-and-place behavior.",
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
