# Setting up the contact form (Formspree)

The Contact section submits directly to Formspree, a free service that turns
a plain HTML form into an email to you — no backend server needed.

## 1. Create an account and a form

1. Go to https://formspree.io and sign up (free — no credit card required).
2. Click **New Form**, give it a name like "Portfolio contact form".
3. Formspree will show you an endpoint URL that looks like:
   ```
   https://formspree.io/f/abcdwxyz
   ```
   Copy it.

## 2. Plug it into the site

Open `src/data/contact.js` and replace the placeholder:

```js
export const contact = {
  formspreeEndpoint: "https://formspree.io/f/abcdwxyz", // <- paste yours here
  email: "you@example.com",
  ...
};
```

Save the file. The form on the Contact section will now send to this
endpoint.

## 3. Confirm your first submission

Formspree requires you to confirm one real submission before it starts
forwarding messages to your inbox (a spam-prevention step). After you deploy
the site (or while running it locally with `npm run dev`):

1. Fill out the contact form yourself and submit it.
2. Check the email inbox you signed up to Formspree with — you'll get a
   confirmation email. Click confirm.
3. From then on, every submission through the form gets emailed to you
   automatically.

## Free plan limits (worth knowing)

As of when this was set up, Formspree's free plan includes:
- 50 submissions per month
- Unlimited forms/projects
- 30 days of submission history
- Up to 2 notification emails

For a personal portfolio this is normally plenty — most people get well
under 50 messages a month through a contact form. If you ever outgrow it,
paid plans start around $10/month for higher volume. Double check current
limits at https://formspree.io/plans since pricing can change.

## If something goes wrong

The form shows an inline error ("Something went wrong…") if the submission
fails, with a fallback prompt to email you directly. Common causes:
- The endpoint in `contact.js` still has the placeholder `YOUR_FORM_ID` in it.
- You haven't confirmed the first submission yet (step 3 above).
- You've hit the monthly submission cap.
