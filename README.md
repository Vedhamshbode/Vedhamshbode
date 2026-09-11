# Portfolio

A minimal, dark, robotics-flavored portfolio built with React, Vite,
Tailwind CSS, and Framer Motion.

**Sections:** Home (intro, about, education, work timeline) → Projects →
Competitions → Blogs → Contact.

## Quick start

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Where things live

```
src/
  data/            ← you'll spend 95% of your editing time in here
    profile.js       name, tagline, bio
    education.js
    experience.js
    projects.js
    competitions.js
    posts.js         blog posts — the one you'll touch most
    contact.js       email, socials, Formspree endpoint

  components/      the actual page code — you shouldn't need to touch
                    this unless you're changing layout/design

docs/              full written guides:
  ADDING_CONTENT.md   how to add/edit projects, competitions, blog posts
  FORMSPREE_SETUP.md  how to connect the contact form to your email
  DEPLOYMENT.md       how to put the site live on the internet
  CUSTOMIZING.md      colors, fonts, section order, motion
```

## The three things to do before going live

1. Read `docs/ADDING_CONTENT.md` and replace the placeholder text/images
   in `src/data/` with your own.
2. Read `docs/FORMSPREE_SETUP.md` to connect the contact form to your
   email (takes ~2 minutes).
3. Read `docs/DEPLOYMENT.md` to publish it — Vercel is the easiest option
   and is free.

Everything else (colors, fonts, adding a brand new section) is covered in
`docs/CUSTOMIZING.md` if and when you want it.
