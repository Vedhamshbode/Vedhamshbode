# Making the site live

This is a static site once built (plain HTML/CSS/JS output) — no server to
run, no database. You have two easy free options; Vercel is the simplest.

## Option A — Vercel (recommended)

**One-time setup:**

1. Create a free account at https://vercel.com (sign up with GitHub — makes
   step 3 automatic).
2. Put this project in a GitHub repository:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   ```
   Then create a new empty repo on https://github.com/new, and push:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. In Vercel: **Add New… → Project → Import** your GitHub repo.
4. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. In about a minute you'll get a live URL like
   `portfolio-yourname.vercel.app`.

**From then on:** every time you `git push` to `main`, Vercel automatically
rebuilds and redeploys — including every time you add a new blog post or
project to the `src/data/` files.

**Custom domain:** if you own a domain (e.g. from Namecheap or GoDaddy), in
your Vercel project go to **Settings → Domains**, add your domain, and
follow the DNS instructions it gives you (usually adding a CNAME or A
record at your domain registrar). Takes a few minutes to a few hours to
propagate.

## Option B — Netlify

Nearly identical:

1. Free account at https://netlify.com.
2. **Add new site → Import an existing project**, connect the same GitHub
   repo.
3. Build command: `npm run build`, publish directory: `dist`.
4. Deploy. Custom domains work the same way, under **Domain settings**.

## Option C — no GitHub account yet

If you'd rather not set up Git/GitHub right now, both Vercel and Netlify
also support dragging and dropping a pre-built `dist` folder directly on
their site to deploy it once — but you'll lose the auto-redeploy-on-push
convenience, and have to re-upload manually after every content change.
To build that folder yourself:

```bash
npm run build
```

This creates `dist/`, which is what you'd drag onto Vercel/Netlify's
"deploy manually" drop zone. Using Git (Option A/B) is worth setting up
even if it takes 10 extra minutes now, since publishing new blog posts
afterwards becomes as simple as `git push`.

## Checklist before going live

- [ ] Replaced placeholder name/bio/photos in `src/data/`
- [ ] Set your real Formspree endpoint in `src/data/contact.js`
      (see `FORMSPREE_SETUP.md`)
- [ ] Updated the page title in `index.html` (`<title>Your Name — Portfolio</title>`)
- [ ] Tested the contact form once after deploying, and confirmed the
      Formspree verification email
