# How to Build the Conscious Creation Website
## A step-by-step guide for the implementer

Hello — you're building the website for *Conscious Creation*, your dad's teaching brand. This guide walks through what to do, in order. Read it once, then follow the steps. It should take a few hours start to finish.

If anything is unclear, write him: **constantincranz@gmail.com**

---

## What You Have

A folder with these files — all already designed, written, and styled:

```
/site
  ├── index.html           ← Home
  ├── about.html           ← About Constantin
  ├── books.html           ← The two booklets
  ├── app.html             ← The Practice App page
  ├── course.html          ← Online Course (placeholder)
  ├── coaching.html        ← The 4 coaching offerings
  ├── sovereign-year.html  ← Sovereign Year (placeholder)
  ├── writings.html        ← Writings/blog (placeholder)
  ├── contact.html         ← Contact form
  ├── styles.css           ← The shared design system
  ├── favicon.svg          ← Browser tab icon
  ├── logo-mark.svg        ← The mark alone (for monogram use)
  ├── logo-square.svg      ← Square logo lockup (vector, social media)
  ├── logo-square.png      ← Square logo lockup (1080×1080, ready to use)
  └── README.md            ← (more technical reference)
```

That's the whole site. It works as-is — drop it on any host and it's live. Your job is to:

1. Pick a hosting platform
2. Upload the files
3. Connect the domain (consciouscreation.art)
4. Wire up the contact form

That's it. Five steps below.

---

## Step 1 — Pick a Hosting Platform

You have three good options. **Pick whichever you're most comfortable with.**

### Option A — Netlify *(easiest, recommended)*
- Free for this kind of site
- Drag-and-drop the folder, you're live in 5 minutes
- SSL automatic and free
- Form handling built-in
- *Best for: getting it live fast*

### Option B — Webflow
- Has a visual designer interface, so your dad can edit text later without code
- Costs ~€15-30/month
- *Best for: long-term ease of editing if your dad wants to update content himself*

### Option C — Vercel
- Free, slightly more developer-oriented
- Requires connecting a Git repository
- *Best for: if you already use it*

**Recommendation: Start with Netlify.** Cheapest, fastest, and you can always migrate later.

---

## Step 2 — Deploy the Site

### If you chose Netlify (recommended):

1. Go to **netlify.com** and sign up (use Google account for fastest signup)
2. From your dashboard, click **"Add new site" → "Deploy manually"**
3. Drag the entire `site` folder into the upload zone
4. The site will be live within 30 seconds at a random URL like `random-name-12345.netlify.app`
5. Click around — verify all pages load and links work
6. *(Don't worry about the random URL — you'll connect the real domain in Step 3)*

### If you chose Vercel:
1. Push the `site` folder to a GitHub repo
2. Go to **vercel.com** → "New Project" → import the repo
3. Deploy with default settings — done

### If you chose Webflow:
- This requires more work — you'd recreate the structure in Webflow's designer using the HTML/CSS as reference
- Or use Webflow's HTML import for static content
- Honestly: Netlify is faster. Switch back if you can.

---

## Step 3 — Connect the Domain (consciouscreation.art)

Once the site is live on Netlify, point your domain to it.

1. Log in to **world4you.com** (where consciouscreation.art is registered)
2. Find DNS settings for the domain
3. In your **Netlify dashboard**, go to your site → **Domain management** → **Add custom domain**
4. Enter `consciouscreation.art`
5. Netlify will show you DNS records to add — typically:
   - An **A record** pointing to a Netlify IP
   - A **CNAME record** for `www` subdomain
6. In **world4you's DNS panel**, add those exact records
7. Save and wait — DNS can take **1 to 24 hours** to propagate
8. SSL will be issued automatically once DNS resolves (Netlify uses Let's Encrypt, free)

**That's the only complicated step. Take your time. Verify each record carefully.**

---

## Step 4 — Wire Up the Contact Form

The contact form on `contact.html` currently uses a basic `mailto:` fallback (clicking submit opens the user's email client). To make submissions go directly to your dad's inbox without that step:

### Easiest method (Netlify):
1. Open `contact.html` in any text editor
2. Find the `<form>` tag (around the middle of the file)
3. Add `name="contact"` and `data-netlify="true"` attributes:
   ```html
   <form name="contact" data-netlify="true" class="contact-form">
   ```
4. Re-deploy the site (drag the updated folder to Netlify again, or Netlify will pick it up automatically)
5. Form submissions will appear in your **Netlify dashboard** under **Forms**
6. Connect Netlify Forms to send notifications to constantincranz@gmail.com

### Alternative (any platform): Formspree
- Sign up at **formspree.io** (free tier handles up to 50 submissions/month)
- They give you a form URL — paste it into the form's `action` attribute
- Submissions get forwarded to your dad's email automatically

---

## Step 5 — Final Checks

Before announcing the site:

- [ ] All 9 pages load without errors
- [ ] Navigation works on every page (clicking links goes where expected)
- [ ] The favicon shows in the browser tab (the gold ❖)
- [ ] The site looks good on mobile (use Chrome DevTools or test on a real phone)
- [ ] The contact form sends to constantincranz@gmail.com
- [ ] SSL is active (URL starts with `https://`)
- [ ] Domain shows `consciouscreation.art`, not the random Netlify URL

---

## Optional — Setting Up a Branded Email

If your dad later wants emails like `hello@consciouscreation.art`, that's a separate setup:

- **Google Workspace**: ~€6/user/month, professional, integrates with the Gmail he already uses
- Add MX records in world4you DNS → done

This is **completely optional**. The current `constantincranz@gmail.com` works perfectly fine. Set this up later, whenever your dad asks for it.

---

## What to Update Over Time

The site has placeholder content in three places that will be filled in over time:

| Page | Current State | When to Update |
|------|---------------|----------------|
| `course.html` | Placeholder, "Coming Soon" | When your dad records the videos |
| `sovereign-year.html` | Placeholder, "Details Unfolding" | When he rewrites it (he's planning a dedicated session for this) |
| `writings.html` | Placeholder essay titles | As he writes real essays |

When you update content, just edit the HTML file directly and re-deploy.

---

## When You're Confused or Stuck

- **For design questions** (colors, fonts, components): the *Brand Book PDF* explains everything
- **For implementation questions**: write your dad — constantincranz@gmail.com
- **For Netlify/Webflow specifics**: their docs are excellent. Search.

---

## A Final Word

The site is designed to be quiet and dignified. Resist the urge to add animations, popups, gradients, or "modern" touches that don't belong. The brand is its restraint. When in doubt: leave it alone.

Welcome to the project. ❖
