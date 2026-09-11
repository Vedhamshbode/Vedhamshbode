import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Generic "grid of cards that expand in place" section. Used by both the
// Projects section and the Competitions section — same interaction, two
// different data sources. If you ever want a third section shaped like
// this (e.g. "Talks" or "Awards"), reuse this component the same way.
export default function ShowcaseGrid({ id, heading, subheading, items, keyPrefix }) {
  const [activeId, setActiveId] = useState(null);
  const active = items.find((p) => p.id === activeId) || null;
  const kp = keyPrefix || id;

  return (
    <section id={id} className="px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="font-display text-4xl text-bone mb-4"
        >
          {heading}
        </motion.h2>
        {subheading && (
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fade}
            className="text-ash mb-14 max-w-prose"
          >
            {subheading}
          </motion.p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <motion.button
              key={p.id}
              layoutId={`${kp}-card-${p.id}`}
              onClick={() => setActiveId(p.id)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fade}
              className="text-left group rounded-sm overflow-hidden border border-copper-dim/30 bg-panel"
            >
              <motion.div
                layoutId={`${kp}-image-${p.id}`}
                className="overflow-hidden"
              >
                <img
                  src={p.cover}
                  alt=""
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="p-5">
                <motion.h3
                  layoutId={`${kp}-title-${p.id}`}
                  className="font-display text-xl text-bone mb-2"
                >
                  {p.title}
                </motion.h3>
                <p className="text-ash text-sm leading-relaxed">{p.tagline}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
              onClick={() => setActiveId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              layoutId={`${kp}-card-${active.id}`}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-panel border border-copper-dim/40 rounded-sm"
            >
              <button
                onClick={() => setActiveId(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 text-bone/80 hover:text-copper-soft bg-ink/60 rounded-full p-2"
              >
                <X size={18} />
              </button>

              <motion.div layoutId={`${kp}-image-${active.id}`}>
                <img
                  src={active.cover}
                  alt=""
                  className="w-full h-60 sm:h-72 object-cover"
                />
              </motion.div>

              <div className="p-7 sm:p-9">
                <motion.h3
                  layoutId={`${kp}-title-${active.id}`}
                  className="font-display text-3xl text-bone mb-4"
                >
                  {active.title}
                </motion.h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-copper-soft border border-copper-dim/50 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.15 } }}
                  className="text-ash leading-relaxed mb-6"
                >
                  {active.description}
                </motion.p>

                {active.highlights?.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    className="space-y-2 mb-6"
                  >
                    {active.highlights.map((h, i) => (
                      <li key={i} className="text-ash/90 flex gap-3">
                        <span className="text-copper mt-1.5 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                        {h}
                      </li>
                    ))}
                  </motion.ul>
                )}

                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-copper-soft border-b border-copper-dim hover:border-copper-soft transition-colors"
                  >
                    View more
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
