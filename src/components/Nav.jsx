import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/competitions", label: "Competitions" },
  { to: "/blogs", label: "Blogs" },
];

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        <Link
          to="/"
          className="font-display text-lg text-bone tracking-wide"
        >
          {"</>"}
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-300 ${
                    isActive ? "text-copper-soft" : "text-ash hover:text-copper-soft"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}

          <li>
            <a
              href="/#contact"
              className={`text-sm transition-colors duration-300 ${
                location.pathname === "/" ? "text-ash hover:text-copper-soft" : "text-ash hover:text-copper-soft"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-bone"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-bone mb-1.5" />
          <span className="block w-6 h-px bg-bone" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-ink overflow-hidden"
          >
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? "text-copper-soft" : "text-ash hover:text-copper-soft"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}

            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block py-2 text-ash hover:text-copper-soft"
              >
                Contact
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
