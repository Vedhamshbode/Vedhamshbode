// ── Projects ──────────────────────────────────────────────────────────────
// Your personal/independent builds. These show up as cards on the Projects
// grid; clicking one expands it into a full detail view.
//
// To add a new project: copy one whole { ... } block below, paste it as a
// new item in the array, and edit the fields. `id` just needs to be unique
// and URL-safe (lowercase, hyphens, no spaces).

// quadruped robot images
import quad1 from "../assets/quadruped/quad.jpg";
import quad2 from "../assets/quadruped/dog.jpg";
import quadcircuit from "../assets/quadruped/circuit2.png";
import quadvideo from "../assets/quadruped/singleleg_traj.mp4";
// import quadmovingdog from "../assets/quadruped/movingdog.png";

// AMR images
import amr1 from "../assets/bbot/bbot.jpg";
import amr2 from "../assets/bbot/isometric_view.png";
import amr_objdet_video from "../assets/bbot/obj_detection.webm";

// Robotic palm images
import palm1 from "../assets/robotic_palm/3d+printed.png";
import palm2 from "../assets/robotic_palm/fusion.png";

export const projects = [
  {
    id: "teleoperable-quadruped-robot",
    title: "Teleoperable Quadruped Robot",
    tagline: "A ROS2 quadruped platform with 3-DoF legs, gait generation, and teleoperated motion control.",
    tags: ["ROS2", "C++", "Kinematics", "Gazebo", "ros2_control"],
    cover: quad1,
    coverAlt: "Quadruped robot hardware on a workbench",
    description:
      "Designed and developed a teleoperable quadruped with analytical and numerical inverse kinematics, smooth gait planning, and parameterized stride control.",
    highlights: [
      "Achieved 0.8 m/s trot speed",
      "Reached 2.3 cm positioning accuracy",
      "Implemented teleoperation for stride length, direction, and in-place rotation",
    ],
    details: [
      {
        heading: "System design",
        paragraphs: [
          "This project focused on building a legged robot that could move reliably under teleoperation while still maintaining smooth, mathematically grounded gait behavior. The core challenge was balancing real-time control responsiveness with stable motion generation.",
          "The robot uses 3-DoF legs and a ROS2-based control stack, allowing joint-level actuation and higher-level gait planning to coexist in a clean architecture.",
        ],
      },
      {
        heading: "Motion planning and control",
        paragraphs: [
          "I developed 3-DoF leg kinematics and combined analytical and numerical IK approaches to support accurate foot placement. For locomotion, I used optimized 6th-degree trajectories to produce smoother joint motion during trot cycles.",
          "The teleoperation layer exposed stride length, direction, and turning controls, making the system flexible enough for both demonstration and experimental tuning.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The resulting platform achieved a 0.8 m/s trot and 2.3 cm positioning accuracy while remaining controllable through a teleoperation interface inspired by research-driven gait parameterization.",
        ],
      },
    ],
    images: [
      { type: "video", src: quadvideo, caption: "Trot gait demo at 0.8 m/s." },
      // { type: "video", src: quadvideo, caption: "Trot gait demo at 0.8 m/s." },
      {
        src: quadcircuit,
        alt: "Rover electronics and wiring on test bench",
        caption: "Bench setup used for sensor validation and launch checks.",
      },
      {
        src: quad2,
        alt: "Laptop screen with robotics diagnostics",
        caption: "Runtime diagnostics that tracked confidence and control outputs.",
      },
    ],
    link: "",
  },
  // {
  //   id: "logistics-cobot-and-amr",
  //   title: "Logistics Cobot and AMR",
  //   tagline: "A coordinated UR5 arm and autonomous mobile robot workflow for warehouse pick-and-drop tasks in e-Yantra 2024-25.",
  //   tags: ["ROS2", "Nav2", "MoveIt2", "Python", "ArUco"],
  //   cover:
  //     amr1,
  //   coverAlt: "Industrial robotic arm in a warehouse environment",
  //   description:
  //     "Built a warehouse automation stack where a UR5 manipulator and an autonomous mobile rover worked together to pick, transport, and place packages in simulation.",
  //   highlights: [
  //     "Achieved 100% pick-and-place success in simulation",
  //     "Advanced to the semifinal round of a national robotics competition",
  //     "Evaluated multiple Nav2 planners, controllers, and IK pipelines for robustness",
  //   ],
  //   details: [
  //     {
  //       heading: "Multi-robot coordination",
  //       paragraphs: [
  //         "The project required close coordination between mobile navigation and arm manipulation in a warehouse-style environment. The AMR handled movement across the map while the UR5 executed package pick-and-place operations.",
  //         "The challenge was not just getting either subsystem to work individually, but making the handoff between navigation and manipulation dependable across repeated task cycles.",
  //       ],
  //     },
  //     {
  //       heading: "Perception and planning",
  //       paragraphs: [
  //         "I used ArUco marker detection and pose estimation to update UR5 target poses dynamically. On the planning side, I experimented with Nav2 controllers such as DWB, TEB, and Vector Pursuit, and compared MoveIt2 planning and IK options including OMPL, TRAC-IK, and pick_ik.",
  //         "This iterative comparison process improved navigation stability and manipulation accuracy while exposing real deployment constraints around localization.",
  //       ],
  //     },
  //   ],
  //   images: [
  //     {
  //       src: amr2,
  //       alt: "Robot arm over containers in an industrial setting",
  //       caption: "Manipulation and navigation had to stay synchronized for smooth package handling.",
  //     },
  //   ],
  //   link: "",
  // },
  {
    id: "Autonomous-Mobile-Robot",
    title: "Autonomous Mobile Robot",
    tagline: "A differential-drive robot with self-localization, visual navigation, and autonomous docking using onboard sensors.",
    tags: ["ROS2", "Navigation", "SLAM", "Arduino", "ESP32"],
    cover:
      amr1,
    coverAlt: "Mobile robot electronics and sensor stack",
    description:
      "Designed a localization and navigation pipeline for a differential-drive AMR and integrated visual docking based on ArUco markers.",
    highlights: [
      "Built visual navigation and autonomous docking logic",
      "Compared micro-ROS and rosserial for embedded communication",
      "Integrated custom hardware interfaces with ROS 2 Control",
    ],
    details: [
      {
        heading: "Architecture",
        paragraphs: [
          "This system combined onboard sensing, embedded interfaces, and ROS2 navigation into a full-stack mobile robotics workflow. The base platform had to support both regular navigation and a more precise docking behavior near the base station.",
        ],
      },
      {
        heading: "Embedded integration",
        paragraphs: [
          "I evaluated micro-ROS and rosserial for communication between embedded hardware and the higher-level ROS2 stack. The final setup used rosserial for better practical scalability in this system and connected motors, the IMU, and ultrasonic sensors through custom ROS 2 Control interfaces.",
        ],
      },
    ],
    images: [
      { type: "video", src: amr_objdet_video, caption: "Object detection demo." },
      {
        src: amr2,
        alt: "Robot platform during a test run",
        caption: "Docking behavior relied on marker-based visual localization near the base station.",
      },
      // {
      //   src: amr2,
      //   alt: "Robot platform during a test run",
      //   caption: "Docking behavior relied on marker-based visual localization near the base station.",
      // },
    ],
    link: "",
  },
  {
    id: "robotic-palm",
    title: "Robotic Palm",
    tagline: "A tendon-routed anthropomorphic hand prototype designed for future motorized actuation experiments.",
    tags: ["Fusion 360", "3D Printing", "Mechanism Design"],
    cover:
      palm2,
    coverAlt: "Prototype robotic hand components",
    description:
      "Designed and fabricated a robotic hand prototype with internal tendon routing and elastic antagonistic return motion.",
    highlights: [
      "Modeled and 3D-printed an anthropomorphic hand",
      "Designed internal channels for fingertip-to-palm tendon routing",
      "Prepared the structure for later motorized string actuation",
    ],
    details: [
      {
        heading: "Mechanical concept",
        paragraphs: [
          "The goal was to create a physically plausible palm and finger structure that could support future string-driven actuation. That required routing tendons internally without interfering with joint motion.",
        ],
      },
      {
        heading: "Prototype behavior",
        paragraphs: [
          "Elastic thread under induced tension was used to create an antagonistic return-to-rest mechanism. This made the prototype useful for evaluating the geometry and routing logic before moving to fully motorized actuation.",
        ],
      },
    ],
    images: [
      {
        src: palm1,
        alt: "Mechanical hand prototype close-up",
        caption: "Early prototype work focused on tendon routing and finger return motion.",
      },
    ],
    link: "",
  },
];
