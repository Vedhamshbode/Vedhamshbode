import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { education } from "../data/education";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const edu = education[0];

  return (
    <section id="about" className="px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto space-y-28">
        {/* About */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fade}
            className="order-2 md:order-1"
          >
            <h2 className="font-display text-4xl text-bone mb-6">About me</h2>
            <div className="space-y-4 text-ash leading-relaxed max-w-prose">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fade}
            className="order-1 md:order-2"
          >
            <div className="border border-copper-dim/40 p-2 rounded-sm">
              <img
                src={profile.aboutImage}
                alt=""
                className="w-[300px] h-[300px] object-cover rounded-sm mx-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fade}
          >
            <div className="border border-copper-dim/40 p-2 rounded-sm">
              <img
                src={edu.image}
                alt=""
                className="w-[300px] h-[300px] object-cover rounded-sm mx-auto"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fade}
          >
            <h2 className="font-display text-4xl text-bone mb-6">Education</h2>
            <p className="font-display text-2xl text-copper-soft mb-3">
              {edu.school}
            </p>
            <p className="text-ash leading-relaxed">{edu.detail}</p>
            {edu.note && <p className="text-ash leading-relaxed">{edu.note}</p>}
            <p className="text-ash/70 mt-2">{edu.years}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
