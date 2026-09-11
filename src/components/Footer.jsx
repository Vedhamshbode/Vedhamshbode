import { profile } from "../data/profile";
import { contact } from "../data/contact";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-10 border-t border-copper-dim/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ash/70">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-6">
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-copper-soft transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
