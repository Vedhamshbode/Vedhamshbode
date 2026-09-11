import { motion } from "framer-motion";
import { experience } from "../data/experience";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="work" className="px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="font-display text-4xl text-bone mb-14"
        >
          Work experience
        </motion.h2>

        <div className="relative border-l border-copper-dim/40 pl-8 space-y-12 max-w-2xl">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fade}
              className="relative"
            >
              <span className="absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 rounded-full bg-copper" />
              <p className="text-ash/70 text-sm mb-1">{e.period}</p>
              <h3 className="font-display text-2xl text-bone">{e.company}</h3>
              <p className="text-copper-soft">{e.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
