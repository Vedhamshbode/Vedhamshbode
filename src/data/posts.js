// ── Blog posts ────────────────────────────────────────────────────────────
// This is the file you'll come back to most. To publish a new post:
//
//   1. Copy the block below (from "{" to "},").
//   2. Paste it as a NEW FIRST ITEM in the `posts` array (newest on top).
//   3. Fill in title / date / excerpt / content.
//   4. Save. That's it — no build step, no CMS login, nothing else to touch.
//
// Template (copy from here down to the matching "}," ):
// {
//   id: "unique-url-safe-id",       // lowercase, hyphens, no spaces
//   title: "Your post title",
//   date: "Month Year",              // just a display string, e.g. "June 2026"
//   excerpt: "One or two sentences shown in the collapsed list view.",
//   content: `Write the full post here. Use backticks (\`) instead of quotes
//     if your post has multiple paragraphs, so you can use real line breaks.`,
// },
//
// See docs/ADDING_CONTENT.md for the same steps with more explanation.

export const posts = [
  {
    id: "post-one",
    title: "What I learned debugging a motor controller at 2am",
    date: "March 2026",
    excerpt:
      "A short summary of the post — enough to make someone want to read the rest, without giving away the ending.",
    content:
      "The full body of your post goes here. Write it the way you'd explain it to a friend — plain sentences, specific details, no filler. You can break this into multiple paragraphs by adding more strings to the array below, or just keep it as one block.",
  },
  {
    id: "post-two",
    title: "Notes from my first competition",
    date: "January 2026",
    excerpt:
      "A short summary of the post — enough to make someone want to read the rest, without giving away the ending.",
    content:
      "The full body of your post goes here. Swap this placeholder for your own writing.",
  },
];
