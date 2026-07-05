# Muhammad Zahid — Portfolio

A modern, responsive personal portfolio built with **React + Vite + Tailwind CSS**. Phase 1 is a fully static front-end with a dark / light theme.

## Stack

- **Vite** — dev server & build
- **React 18** + **React Router 6** — multi-page routing
- **Tailwind CSS 3** — styling (class-based dark mode)
- **lucide-react** — icons

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Pages

| Route       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `/`         | Home — hero, about preview, services, featured projects, skills, experience, blog, CTA |
| `/about`    | About — bio, services, experience timeline, education, skills |
| `/projects` | Projects — filterable grid with category tabs + pagination |
| `/contact`  | Contact — message form (with demo captcha), info, social, map |

> The **Blog** nav link is intentionally marked "Soon" — reserved for a later phase.

## Editing content

All text/content lives in [`src/data.js`](src/data.js) — profile, services, skills,
experience, education, projects and blog posts. Edit that single file to update
the site; no component changes needed for routine updates.

- Profile photo: change `profile.avatar` (a URL or a path under `/public`).
- Theme colors: tweak the `brand` palette in [`tailwind.config.js`](tailwind.config.js).

## Notes for phase 2

- The contact form has no backend yet — `handleSubmit` just shows a success state.
  Wire it to an API / email service (e.g. Formspree, Resend) when ready.
- The captcha is a static client-side math check (placeholder).
- Add a real Blog section + post pages.
