# Customizing the look

## Colors

Open `tailwind.config.js`:

```js
colors: {
  ink: "#0E0D0C",        // page background
  panel: "#161412",      // card backgrounds
  bone: "#EDE7DD",       // main text / headings
  ash: "#948E84",        // secondary/muted text
  copper: "#BE7C4D",     // accent — buttons, links, highlights
  "copper-dim": "#8C5A34", // borders, dividers
  "copper-soft": "#D9A876", // accent hover/lighter variant
  moss: "#5F6E5C",       // used for the "message sent" success color
},
```

Change any hex value and every component using that color name updates
everywhere at once (e.g. change `copper` and every button/link/border using
it follows).

## Fonts

Two fonts are loaded from Google Fonts in `index.html`:
- **Fraunces** — used for all headings (`font-display` class)
- **Sora** — used for body text (`font-body` class, applied at the root in
  `App.jsx`)

To swap either:
1. Find a replacement at https://fonts.google.com
2. Update the `<link href="https://fonts.googleapis.com/css2?family=...">`
   tag in `index.html` with the new font's embed code.
3. Update `fontFamily` in `tailwind.config.js`:
   ```js
   fontFamily: {
     display: ["YourNewHeadingFont", "serif"],
     body: ["YourNewBodyFont", "sans-serif"],
   },
   ```

## Section order / nav

The 5 nav items (Home, Projects, Competitions, Blogs, Contact) are defined
in `src/components/Nav.jsx`, and the sections themselves are stacked in
`src/App.jsx`. To reorder sections, reorder the component list in
`App.jsx` — the nav's `href="#id"` values will still scroll to the right
place as long as the section `id` (set inside each component) stays the
same.

## Motion

Animation timings live inline in each component as small `fade`/`item`
variant objects near the top of the file (e.g. in `Hero.jsx`,
`Projects.jsx`). Adjust `duration` or the `y` offset there if you want
things snappier or slower. The one thing to leave alone unless you're
comfortable with Framer Motion: the shared `layoutId` values in
`ShowcaseGrid.jsx` — those are what make the card-to-detail-view expansion
animate smoothly instead of jump-cutting.

## Adding a whole new section

If you want a section beyond the current five (e.g. "Talks" or "Awards"):

1. Create `src/data/yourSection.js` following the pattern of `projects.js`.
2. If it's a card-grid-style section, reuse `ShowcaseGrid` the same way
   `Projects.jsx`/`Competitions.jsx` do — copy one of those files as a
   starting point.
3. Add it to `src/App.jsx` in the position you want it to appear.
4. Add a nav link for it in `src/components/Nav.jsx` if it should be a
   top-level stop.
