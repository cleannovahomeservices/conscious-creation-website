# Conscious Creation — Website Prototype

A complete static HTML/CSS prototype of the Conscious Creation website, designed in unified language with the books, the practice booklet, and the brand book.

**For the implementer (developer):** Everything you need to bring this site live — page structure, design system, content, components — is here. Read this once, then dive in.

---

## File Structure

```
/site
  ├── index.html          The home page — the door to everything
  ├── about.html          About Constantin Cranz
  ├── books.html          The two paired booklets
  ├── app.html            The Practice Companion App
  ├── course.html         The Online Course (placeholder until recorded)
  ├── coaching.html       The four coaching offerings (Community, Group, Circle, 1:1)
  ├── sovereign-year.html The high-ticket year program (placeholder, by inquiry)
  ├── writings.html       Contemplative blog (placeholder until first essays)
  ├── contact.html        Contact form + direct email
  └── styles.css          The complete design system, shared across all pages
```

---

## How to Implement

You can implement this site on any platform you prefer. The HTML and CSS are written cleanly so the structure is portable. A few suggestions:

- **Webflow**: Import the design directly. The component structure (cards, principle-blocks, decree-blocks, callouts) maps cleanly to Webflow's symbol system.
- **WordPress**: A custom theme using the styles.css and the page templates as the basis for each page type. Great if Constantin wants easy CMS editing of the Writings/blog later.
- **Custom static site (Astro, Next.js, Eleventy)**: Each HTML file becomes a page; the styles.css becomes a global stylesheet. Simple to maintain.
- **Plain hosting (Netlify, Vercel)**: Drop these files as-is. Works immediately.

The HTML uses semantic markup, no JavaScript dependencies, no frameworks. SSL is automatic on any modern host.

---

## Design System

The design system is fully documented in **the Conscious Creation Brand Book** (separate PDF). When in doubt about colors, typography, voice, or spacing, **consult the Brand Book before improvising**.

Key references in `styles.css`:

- **Colors**: defined as CSS variables at the top of the file (`--indigo`, `--violet`, `--gold`, `--cream`, `--paper`, `--ink`, `--ink-soft`)
- **Typography**: Cormorant Garamond (display) + EB Garamond (body), loaded from Google Fonts
- **Components**: cards, principle-blocks, decree-blocks, callouts, buttons, hero, page-header, etc.
- **Responsive**: breakpoints at 900px and 768px

---

## Content Notes

- **Course page** is currently a placeholder — fill with real content when the videos are recorded.
- **Sovereign Year page** is intentionally a placeholder. Constantin will rewrite this entirely in a future dedicated session. Treat it as "structure to be filled" rather than "design to be rebuilt."
- **Writings page** lists upcoming essays as placeholders. Replace with real essays as they are written. Consider connecting this to a CMS for ease of updating.
- **Contact form** uses a basic mailto fallback. You'll want to wire it to a proper form handler (Formspree, Netlify Forms, or backend) for production.

---

## Voice & Tone

The voice across the site is elevated, contemplative, and direct. **Never motivational. Never urgent. Never marketing-speak.** When adding or editing copy, refer to the Voice & Tone section of the Brand Book — there is a list of forbidden words and phrases that should never appear on the brand.

---

## Domain

The site is destined for **consciouscreation.art** (or whatever domain Constantin has registered). Point the domain to your hosting platform of choice. SSL will be automatic.

---

## Contact

For implementation questions:
**Constantin Cranz** — constantincranz@gmail.com — www.realitycheck.one

---

*The brand is a teaching, not a personality. Steward it accordingly.*
