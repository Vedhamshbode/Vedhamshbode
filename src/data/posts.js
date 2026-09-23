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
    id: "Why are VLA models still predicting positions rather than predicting planned trajectories",
    title: "Why are VLA models still predicting positions rather than predicting planned trajectories",
    date: "23 September 2026",
    cover:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop",
    coverAlt: "Robotics workstation with sensors and compute hardware",
    coverCaption: "Evolving from modular classical control stacks to end-to-end continuous trajectory generation.",
    excerpt:
      "A deep dive into why current VLA models still rely on classical motion planners, how diffusion policies and flow matching enable direct joint trajectory output, and how safety is guaranteed without a search planner.",
    body: [
      {
        type: "heading",
        text: "The Classical Robotics Pipeline: Perception, Planning, and Control",
      },
      {
        type: "paragraph",
        text: "Traditionally, robotic manipulation relied on a strictly decoupled, three-tier software stack. First, a perception module processed camera frames to estimate 3D object poses. Second, a motion planner (such as MoveIt, RRT*, or A*) calculated a collision-free path in joint space. Finally, a high-frequency low-level controller (running at 500 Hz – 1000 Hz) converted those waypoints into motor torques.",
      },
      {
        type: "paragraph",
        text: "While this classical stack provided deterministic safety guarantees, it was fragile. Any slight error in object pose estimation or unexpected environmental change caused the entire planning chain to stall.",
      },
      {
        type: "heading",
        text: "The VLA Paradigm: Unifying Perception and Intent",
      },
      {
        type: "paragraph",
        text: "Vision-Language-Action (VLA) foundation models like RT-2, OpenVLA, and Octo transformed this pipeline by merging visual perception and semantic language understanding into a single transformer backbone. Instead of running separate object detectors, a VLA ingests camera frames and text commands (e.g., 'Pick up the red mug') to directly predict physical actions.",
      },
      {
        type: "paragraph",
        text: "However, a major bottleneck remains in how most current VLAs operate: they do not actually output motor movements or continuous trajectories. Instead, they output discrete target positions—typically Cartesian 6-DoF end-effector displacements (Δx, Δy, Δz, roll, pitch, yaw) at low inference frequencies (5 Hz – 10 Hz).",
      },
      {
        type: "subheading",
        text: "Why motion planners stay stuck in the middle",
      },
      {
        type: "paragraph",
        text: "Because a 7-billion-parameter VLA cannot run fast enough to drive motor voltages directly, an intermediate motion planning layer is still required. The discrete position targets predicted by the VLA must be fed into an Inverse Kinematics (IK) solver and a path planner to generate joint trajectories that avoid self-collision before reaching the physical motors.",
      },
      {
        type: "quote",
        text: "Predicting isolated target positions keeps the safety net of classical kinematics, but it leaves the VLA trapped as a high-level goal generator rather than a true end-to-end policy.",
      },
      {
        type: "heading",
        text: "Bypassing the Planner: Direct Continuous Trajectory Generation",
      },
      {
        type: "paragraph",
        text: "The cutting edge of robotics is moving toward completely removing the motion planner from the software loop. Instead of predicting isolated poses, newer architectures directly generate dense, smooth, multi-step joint trajectories that stream straight to low-level motor PD controllers.",
      },
      {
        type: "list",
        items: [
          "Diffusion Policies: Treat action prediction as an iterative denoising process, outputting continuous 16-to-64-step trajectory curves conditioned directly on visual observations.",
          "Flow Matching (e.g., Physical Intelligence's Pi0): Uses continuous flow matching to generate dense 50-step joint angle sequences, completely bypassing Cartesian space and IK solvers.",
          "Action Chunking with Transformers (ACT): Predicts multi-step joint chunks and uses Temporal Ensembling to dynamically smooth overlapping predictions into a fluid trajectory.",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1400&auto=format&fit=crop",
        alt: "Robotics testing setup with instrumentation",
        caption: "Direct trajectory generation bypasses motion planners by outputting smooth joint sequences straight to motor controllers.",
      },
      {
        type: "heading",
        text: "The Collision Problem: How to Stay Safe Without a Planner",
      },
      {
        type: "paragraph",
        text: "Deleting the classical motion planner raises a critical issue: without an explicit path-finding algorithm like RRT*, how do you mathematically guarantee the robot won't collide with obstacles or itself?",
      },
      {
        type: "paragraph",
        text: "Direct trajectory generation models solve collision avoidance through two complementary techniques:",
      },
      {
        type: "list",
        items: [
          "Implicit Data-Driven Learning: Diffusion and flow models learn the probability distribution of human demonstrations. In this landscape, obstacles represent high-energy (improbable) states, naturally guiding the model's denoising process toward safe paths around objects.",
          "Constraint-Guided Diffusion (Control Barrier Functions): For explicit mathematical guarantees, safety gradients are injected directly into each step of the diffusion generation loop. The trajectory is physically nudged away from obstacle boundaries while it is being drawn from noise.",
        ],
      },
      {
        type: "paragraph",
        text: "By integrating collision constraints directly into the generative loop of the neural network, modern robotics architectures achieve the best of both worlds: fluid, end-to-end physical control with real-time safety guarantees.",
      },
    ],
  },
  // {
  //   id: "what-simulation-saved-me-in-robotics-projects",
  //   title: "What simulation saved me in robotics projects",
  //   date: "January 2026",
  //   cover:
  //     "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1400&auto=format&fit=crop",
  //   coverAlt: "Robotics team working between hardware and simulation",
  //   excerpt:
  //     "A short reflection on how Isaac Sim, MuJoCo, and Gazebo reduced physical test time and made system integration less chaotic.",
  //   body: [
  //     {
  //       type: "heading",
  //       text: "The real value of simulation",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Simulation helped most when it was used to answer specific engineering questions: will this planner recover, will this trajectory collide, and will the sensor arrangement even provide the information we think it does?",
  //     },
  //     {
  //       type: "subheading",
  //       text: "Where it saved time",
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         "Testing integration logic before hardware was available",
  //         "Comparing planners and control strategies faster than physical reruns",
  //         "Collecting structured data for later debugging and evaluation",
  //       ],
  //     },
  //     {
  //       type: "image",
  //       src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
  //       alt: "Engineer reviewing simulation workflows on laptop",
  //       caption: "Simulation paid off most when it stayed connected to real deployment constraints.",
  //     },
  //     {
  //       type: "heading",
  //       text: "The limit",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Simulation cannot replace the edge cases that appear on physical systems, but it can dramatically reduce wasted effort before those edge cases become expensive. The best results came when the simulated workflow and the real pipeline stayed structurally similar.",
  //     },
  //   ],
  // },
];
