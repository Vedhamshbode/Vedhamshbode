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
    tags: ["ROS2", "C++", "Inverse Kinematics", "Bezier Gaits", "ros2_control"],
    cover: quad1,
    coverAlt: "Quadruped robot hardware on a workbench",
    description:
      "Built a 12-joint quadruped control pipeline in ROS2 with custom 3-DoF leg inverse kinematics, Bezier-based gait generation, per-leg trajectory controllers, and a serial hardware bridge for servo execution.",
    highlights: [
      "Implemented analytical plus Jacobian-refined IK for each 3-DoF leg",
      "Converted /cmd_vel body commands into per-leg foot velocities, headings, stride lengths, and gait frequency",
      "Mapped 12 ROS2 joint commands to Arduino-driven PCA9685 servo outputs with calibration offsets",
    ],
    details: [
      {
        heading: "Control stack",
        paragraphs: [
          "The robot is organized around four independent ROS2 joint trajectory controllers, one for each leg, with a shared gait node coordinating synchronized commands across all 12 joints. That separation kept low-level actuation modular while still allowing whole-body gait timing to be controlled from one place.",
          "I also implemented a ROS2 control hardware interface that gathers commanded joint positions, converts them from radians to degrees, orders them per leg, and transmits them as a compact serial packet to the onboard microcontroller.",
        ],
      },
      {
        heading: "Kinematics and gait generation",
        paragraphs: [
          "I wrote the inverse kinematics solver in C++ for the 3-DoF leg chain. The solver starts from a closed-form branch selection, distinguishes left and right leg solutions, then refines the result numerically using forward kinematics, a Jacobian, and iterative updates until the foot reaches the requested Cartesian position.",
          "For locomotion, I built a Bezier-based gait generator that plans swing trajectories from stride length, step height, and leg heading. The teleoperation pipeline converts body-frame velocity commands into per-leg tip velocities and directions, derives gait frequency from the most demanding leg, and then generates synchronized trot and rotation trajectories for all four legs.",
        ],
      },
      {
        heading: "Embedded execution",
        paragraphs: [
          "On the firmware side, the Arduino decodes the 12-angle serial message and maps each joint to its PCA9685 servo channel with leg-specific sign inversions and offset tuning. That calibration was necessary because mirrored legs and servo mounting orientations could not share a single direct angle mapping.",
          "The final execution path runs from /cmd_vel to footstep generation, to IK, to joint trajectories, to servo PWM output, and was exercised in Gazebo as well as on the physical robot.",
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
    tags: ["ROS2", "SLAM Toolbox", "Nav2", "OpenCV ArUco", "ros2_control"],
    cover:
      amr1,
    coverAlt: "Mobile robot electronics and sensor stack",
    description:
      "Built a ROS2 AMR stack around a differential-drive base, combining xacro-based robot modeling, Gazebo ros2_control integration, SLAM and navigation bringup, marker-based perception, and a custom serial hardware layer.",
    highlights: [
      "Modeled the robot with lidar, camera, optical frame, wheel joints, and differential-drive control in Gazebo",
      "Implemented ArUco pose estimation from /camera/image_raw and published marker transforms through tf2",
      "Built a custom ROS2 hardware plugin that validates wheel interfaces and reads controller data over serial",
    ],
    details: [
      {
        heading: "Robot model and navigation stack",
        paragraphs: [
          "I defined the robot in xacro with a differential-drive base, camera frame, optical frame, and lidar mounted on the chassis, then connected it to Gazebo through gazebo_ros2_control. The controller setup uses a diff_drive_controller and joint state broadcaster so the base can be driven and observed through standard ROS2 interfaces.",
          "I also wired launch flows that spawn the robot into an ArUco-marked Gazebo world, start SLAM Toolbox, bring up navigation, and expose teleoperation so the full mapping and navigation loop could be tested together instead of as isolated nodes.",
        ],
      },
      {
        heading: "Perception and docking",
        paragraphs: [
          "For visual localization near the docking station, I wrote an ArUco pose estimator that subscribes to /camera/image_raw, runs OpenCV ArUco detection using calibrated camera intrinsics, estimates rvec and tvec marker poses, converts the rotation matrix to quaternions, and publishes the marker frames through tf2.",
          "That made the perception output immediately usable by the rest of the robotics stack, instead of ending at raw image-space detections, and supported marker-guided docking experiments in simulation.",
        ],
      },
      {
        heading: "Hardware interface",
        paragraphs: [
          "I implemented a custom ROS2 hardware interface in C++ for the base that checks each wheel exposes the expected velocity command and position/velocity state interfaces before activation. The plugin opens and configures the serial device manually, issues read requests to the controller board, and unpacks returned float data for wheel-state handling.",
          "Alongside that, I added lightweight ROS-to-serial transmitter nodes in both C++ and Python plus Arduino-side serial handling, so the same control architecture could be exercised across simulation and hardware-facing workflows.",
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
