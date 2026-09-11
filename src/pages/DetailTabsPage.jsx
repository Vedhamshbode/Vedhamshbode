import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function normalizeParagraphs(paragraphs, fallback) {
  if (Array.isArray(paragraphs) && paragraphs.length > 0) {
    return paragraphs;
  }
  if (fallback) {
    return [fallback];
  }
  return [];
}

function ContentSections({ item }) {
  const sections = item.details?.length
    ? item.details
    : [
        {
          heading: "Overview",
          paragraphs: normalizeParagraphs([], item.description),
        },
      ];

  return (
    <div className="space-y-9">
      {sections.map((section, idx) => (
        <section key={`${item.id}-section-${idx}`} className="space-y-4">
          {section.heading && (
            <h3 className="font-display text-2xl text-bone">{section.heading}</h3>
          )}
          {normalizeParagraphs(section.paragraphs).map((paragraph, pIdx) => (
            <p key={`${item.id}-p-${idx}-${pIdx}`} className="text-ash leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

function MediaGallery({ item }) {
  if (!item.images?.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      {item.images.map((image, idx) => (
        <figure key={`${item.id}-image-${idx}`} className="space-y-3">
          <img
            src={image.src}
            alt={image.alt || ""}
            className="w-full h-auto rounded-sm border border-copper-dim/35"
          />
          {image.caption && <figcaption className="text-sm text-ash/75">{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default function DetailTabsPage({ id, title, subtitle, items, emptyMessage }) {
  const defaultId = items[0]?.id || null;
  const [activeId, setActiveId] = useState(defaultId);

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) || items[0] || null,
    [items, activeId],
  );

  return (
    <section id={id} className="px-6 sm:px-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 sm:mb-14">
          <h1 className="font-display text-4xl sm:text-5xl text-bone mb-4">{title}</h1>
          {subtitle && <p className="text-ash max-w-3xl leading-relaxed">{subtitle}</p>}
        </header>

        {items.length === 0 ? (
          <p className="text-ash">{emptyMessage}</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-3 mb-9">
              {items.map((item) => {
                const active = activeItem?.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`px-4 py-2 rounded-sm border text-sm transition-colors ${
                      active
                        ? "border-copper bg-copper text-ink"
                        : "border-copper-dim/40 text-copper-soft hover:border-copper-soft"
                    }`}
                    aria-pressed={active}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.article
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-copper-dim/35 bg-panel rounded-sm overflow-hidden"
                >
                  <img
                    src={activeItem.cover}
                    alt={activeItem.coverAlt || activeItem.title}
                    className="w-full max-h-[28rem] object-cover"
                  />

                  <div className="p-6 sm:p-9 space-y-8">
                    <div>
                      <h2 className="font-display text-3xl text-bone mb-3">{activeItem.title}</h2>
                      <p className="text-ash leading-relaxed">{activeItem.tagline}</p>
                    </div>

                    {activeItem.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {activeItem.tags.map((tag) => (
                          <span
                            key={`${activeItem.id}-${tag}`}
                            className="text-xs text-copper-soft border border-copper-dim/50 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <ContentSections item={activeItem} />

                    {activeItem.highlights?.length > 0 && (
                      <section className="space-y-4">
                        <h3 className="font-display text-2xl text-bone">Highlights</h3>
                        <ul className="space-y-2">
                          {activeItem.highlights.map((point, index) => (
                            <li key={`${activeItem.id}-point-${index}`} className="text-ash/90 flex gap-3">
                              <span className="text-copper mt-1.5 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    <MediaGallery item={activeItem} />

                    {activeItem.link && (
                      <a
                        href={activeItem.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-copper-soft border-b border-copper-dim hover:border-copper-soft transition-colors"
                      >
                        View project details
                      </a>
                    )}
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
