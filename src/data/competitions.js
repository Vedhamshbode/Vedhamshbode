// ── Competitions ──────────────────────────────────────────────────────────
// For team competitions/events — the "Beebot", "eYRC", "ABU Robocon"-style
// entries. Same shape as projects.js, kept as a separate list so
// competitions and personal projects don't mix on one grid.
//
// To add one: copy a whole { ... } block, paste it as a new array item,
// and edit the fields.

//eyantra images
import eyantra1 from "../assets/eyantra/det.jpg";
import eyantra2 from "../assets/eyantra/eyantra_scene_setup.png";

//robocup images
import robocup1 from "../assets/robocup/bounding_box.jpg";
import robocup2 from "../assets/robocup/robocup_arm_challenge_scene.png";

export const competitions = [
    {
    id: "intrinsic-ai-for-industry-2026",
    title: "Intrinsic AI for Industry Challenge - 2026",
    tagline:
      "Secured 2nd place globally as Team TCS-PLGRM, finishing just over 3 points behind first place in a 5,000-participant challenge.",
    tags: ["Global Rank #2", "5,000 Participants", "115 Countries"],
    cover:
      "https://cdn.prod.website-files.com/660efb77a041930767e2971a/6ab139baada034c97404649e_AIC%20recap%20blog%20hero.png",
    coverAlt: "AI for Industry Challenge recap visual",
    description:
      "An international industrial robotics challenge focused on flexible cable routing and precision connector insertion for electronics assembly in a real UR5e workcell.",
    highlights: [
      "Team TCS-PLGRM placed 2nd overall, narrowly missing first by just over 3 points",
      "Successfully routed and inserted all 5 out of 5 cables in the final taskboard evaluation",
      "Evaluated by an expert panel including leaders from Intrinsic, NVIDIA, Google DeepMind, Open Robotics, Universal Robots, and Foxconn",
    ],
    details: [
      {
        heading: "What the challenge was",
        paragraphs: [
          "The AI for Industry Challenge asked teams to solve a difficult real-world robotics problem: detect cable connectors, route them across a cluttered taskboard, and insert them into the correct ports with reliable force control. It was designed around an industrially relevant sim-to-real workflow and drew 5,000 participants from 115 countries, with rankings published on the challenge leaderboard and winner recap.",
        ],
      },
      {
        heading: "Our approach and solution",
        paragraphs: [
          "We pursued a two-track strategy. Our primary system was a Narrow Physical AI Pipeline combining multi-view 3D perception with position-based motion and force-based insertion control for robust cable routing and connector seating. In earlier stages, we also developed a Unified Physical AI Pipeline as a fallback path to preserve end-to-end reliability when conditions changed. This architecture helped us complete all 5/5 cable routing and insertion tasks in final evaluation runs.",
        ],
      },
      {
        heading: "My contributions",
        paragraphs: [
          "Owned the simulation data collection pipeline in Isaac Sim and Gazebo, producing the demonstrations used to fine-tune Vision-Language-Action (VLA) models for cable insertion.",
          "Recreated the Gazebo task scene in Isaac Sim, modified assets and physical properties, built the environment in Isaac Lab, and wrote a ground-truth solver to enable parallel demonstration collection across multiple environments.",
        ],
      },
    ],
    images: [
      {
        src: "https://cdn.prod.website-files.com/660efb77a041930767e2971a/6ab139baada034c97404649e_AIC%20recap%20blog%20hero.png",
        alt: "Official AI for Industry Challenge recap visual",
        caption: "Official Intrinsic AI for Industry Challenge recap visual.",
      },
      {
        src: "https://cdn.prod.website-files.com/660efb77a041930767e2971a/6ab16c903169a8399fe7e43b_7c54dedf.png",
        alt: "AI for Industry Challenge article visual",
        caption: "Challenge recap image associated with the published leaderboard and final standings.",
      },
    ],
    link: "https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge",
  },
  
  {
    id: "robocup-arm-challenge-2024",
    title: "RoboCup Arm Challenge - 2024",
    tagline: "Part of a top-6 global finalist team, contributing to object detection and computer vision for robotic arm tasks.",
    tags: ["Global Finalist", "Top 6", "Computer Vision"],
    cover: robocup2,
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
        src: robocup1,
        alt: "Robot base and tools during preparation",
        caption: "Pit setup before qualification rounds.",
      },
      // {
      //   src: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1400&auto=format&fit=crop",
      //   alt: "Engineering students working around a robot",
      //   caption: "Debugging and final tuning between attempts.",
      // },
    ],
    link: "",
  },
  {
    id: "eyantra-2024-25",
    title: "e-Yantra 2024-25, IIT Bombay",
    tagline: "Semifinalist in a national robotics competition built around coordinated warehouse automation.",
    tags: ["Semifinalist", "Warehouse Robotics", "Manipulation + Navigation"],
    cover:
      eyantra2,
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
        src: eyantra1,
        alt: "Robot and laptop during field test",
        caption: "Field test session for perception threshold tuning.",
      },
    ],
    link: "",
  },
];
