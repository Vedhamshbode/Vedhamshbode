import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../data/contact";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="font-display text-4xl text-bone mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="text-ash mb-12 max-w-prose"
        >
          Whether it's about a project, a role, or something you read here —
          send a note and I'll get back to you.
        </motion.p>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-ash text-sm mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-copper-dim/40 rounded-sm px-4 py-3 text-bone placeholder:text-ash/40 focus:border-copper outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-ash text-sm mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-copper-dim/40 rounded-sm px-4 py-3 text-bone placeholder:text-ash/40 focus:border-copper outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-ash text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-transparent border border-copper-dim/40 rounded-sm px-4 py-3 text-bone placeholder:text-ash/40 focus:border-copper outline-none transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <div className="flex items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-7 py-3 bg-copper text-ink rounded-sm hover:bg-copper-soft transition-colors duration-300 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <span className="text-moss">Sent — thank you.</span>
            )}
            {status === "error" && (
              <span className="text-red-400">
                Something went wrong. Try emailing {contact.email} directly.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
