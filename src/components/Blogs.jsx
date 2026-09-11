import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { posts } from "../data/posts";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Post content can be one string or an array of paragraph strings —
// this splits either into paragraphs so you don't have to think about it
// when writing a new post.
function renderContent(content) {
  const paragraphs = Array.isArray(content)
    ? content
    : content.split(/\n\s*\n/);
  return paragraphs.map((p, i) => (
    <p key={i} className="mb-4 last:mb-0">
      {p}
    </p>
  ));
}

export default function Blogs() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="blogs" className="px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="font-display text-4xl text-bone mb-14"
        >
          Blogs
        </motion.h2>

        {posts.length === 0 ? (
          <p className="text-ash">
            Nothing published yet — add your first post in
            src/data/posts.js.
          </p>
        ) : (
          <div className="space-y-2">
            {posts.map((post) => {
              const isOpen = openId === post.id;
              return (
                <motion.div
                  key={post.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fade}
                  className="border-b border-copper-dim/30"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : post.id)}
                    className="w-full text-left py-7 flex flex-col gap-2"
                    aria-expanded={isOpen}
                  >
                    <span className="text-ash/70 text-sm">{post.date}</span>
                    <span className="font-display text-2xl text-bone">
                      {post.title}
                    </span>
                    {!isOpen && (
                      <span className="text-ash leading-relaxed">
                        {post.excerpt}
                      </span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="text-ash leading-relaxed pb-8 max-w-prose">
                          {renderContent(post.content)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
