import { motion } from "framer-motion";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 sm:px-10 pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full"
      >
        <motion.p variants={item} className="text-copper-soft text-sm mb-5">
          {profile.role} · {profile.location}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-bone max-w-3xl"
        >
          Hi, I'm {profile.name}.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-7 text-ash text-lg max-w-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 border border-copper text-copper-soft rounded-sm hover:bg-copper hover:text-ink transition-colors duration-300"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-ash hover:text-bone transition-colors duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
