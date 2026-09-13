// ── Your basic info ──────────────────────────────────────────────────────
// Shown in the Home section (hero + about). See docs/ADDING_CONTENT.md
// for a walkthrough with screenshots-in-words of exactly what each field
// controls.

import profileImage from "../assets/pp.png";

export const profile = {
  name: "Vedhamsh Bode",
  role: "Robotics Researcher",
  tagline:
    "I build autonomous robots, simulation workflows, and embodied AI systems that hold up beyond the demo.",
  location: "India",

  // Full-bleed-ish image used near the top of the About block.
  aboutImage: profileImage,

  // Each string in this array becomes its own paragraph.
  bio: [
    "I'm a robotics researcher with experience across robot manipulation, autonomous navigation, simulation pipelines, and embodied AI. My work spans real hardware as well as simulation-first workflows in ROS2, Isaac Sim, MuJoCo, and Gazebo.",
    "I currently work on benchmarking Vision-Language-Action models, building scalable inference pipelines, and creating data collection and teleoperation systems that reduce iteration time between research ideas and deployable robotics workflows.",
  ],
};
