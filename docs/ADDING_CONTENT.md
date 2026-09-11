# Adding & editing content

Everything you'd want to change day-to-day lives in `src/data/`, as plain
JavaScript files with arrays of objects. You never need to touch a component
file (the `.jsx` files) just to add a project or a blog post — only the
`data` files.

```
src/data/
  profile.js        your name, tagline, bio
  education.js      school(s)
  experience.js     work history timeline
  projects.js        personal/independent projects
  competitions.js    competitions & team events
  posts.js            blog posts
  contact.js          email, socials, Formspree endpoint
```

Each file starts with a comment explaining its own fields — this doc is the
longer version with more context, plus how it all fits together.

---

## Adding a blog post (the one you'll do most)

Open `src/data/posts.js`. You'll see an array like:

```js
export const posts = [
  {
    id: "post-one",
    title: "What I learned debugging a motor controller at 2am",
    date: "March 2026",
    excerpt: "A short summary shown in the collapsed list.",
    content: "The full text of the post.",
  },
  // ...
];
```

To publish a new one:

1. Copy one whole `{ ... },` block.
2. Paste it **above** the others (posts render in the order they appear in
   the array — put newest first).
3. Change `id` to something unique (lowercase, hyphens, no spaces — e.g.
   `"first-robocon-attempt"`).
4. Fill in `title`, `date`, `excerpt`, and `content`.
5. Save the file. If the site is running locally (`npm run dev`), it updates
   instantly. If it's deployed, commit and push the change (see
   `DEPLOYMENT.md`) — most hosts redeploy automatically within a minute.

**Multi-paragraph posts:** you can either write `content` as one long string
with blank lines between paragraphs:

```js
content: `First paragraph.

Second paragraph.

Third paragraph.`,
```

(note the backticks `` ` `` instead of quotes `"` — backticks let a string
span multiple lines) — or as an array of paragraph strings:

```js
content: ["First paragraph.", "Second paragraph.", "Third paragraph."],
```

Both work; use whichever is easier to read while you're writing.

**Deleting a post:** delete its whole `{ ... },` block from the array.

---

## Adding a project

Open `src/data/projects.js`. Same idea — copy a block, paste it, edit the
fields:

```js
{
  id: "unique-id",
  title: "Project Title",
  tagline: "One line for the card.",
  tags: ["Tag One", "Tag Two"],
  cover: "https://... or a local image import",
  description: "A paragraph shown in the expanded view.",
  highlights: [
    "A bullet point",
    "Another bullet point",
  ],
  link: "", // optional — a GitHub repo or demo URL. Leave "" to hide the link.
},
```

## Adding a competition

Same shape, in `src/data/competitions.js`. This is the separate section for
team competitions/hackathons (the "Beebot" / "eYRC" / "ABU Robocon"-style
entries) — kept apart from personal projects so the two don't blur together
on one grid.

## Using your own images instead of the placeholder URLs

Two options:

**A. Host it somewhere and paste the URL** (simplest) — any image URL works
as-is (Google Drive share links won't work directly; use something like
Imgur, Cloudinary, or your own hosting).

**B. Bundle it with the project:**
1. Drop the image file into `src/assets/` (e.g. `src/assets/my-robot.jpg`).
2. At the top of the relevant data file, add:
   ```js
   import myRobot from "../assets/my-robot.jpg";
   ```
3. Use `myRobot` (no quotes) instead of a URL string wherever you'd put
   `cover:` or `image:`.

Bundling (option B) means the image ships with your deployed site and never
breaks even if an external host goes down — worth it for anything important.

## Editing your bio / education / work history

- `src/data/profile.js` — name, role, tagline, and the `bio` array (each
  string becomes its own paragraph in the About section).
- `src/data/education.js` — an array, so you can list more than one degree.
- `src/data/experience.js` — an array rendered as a timeline, most recent
  first.

All three follow the same copy-a-block-and-edit pattern as posts/projects.
