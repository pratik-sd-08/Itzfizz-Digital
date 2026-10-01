# ITZFIZZ Web Development Internship — Assignment Documentation

## 1. Assignment objective

The assignment asks for a premium hero section with:
- Above-the-fold hero layout.
- Letter-spaced `WELCOME ITZFIZZ` headline.
- Impact statistics.
- Smooth initial-load animation.
- Scroll-driven movement of a main visual.
- Scroll progress rather than time-based autoplay.
- Easing/interpolation.
- Transform-first, performant animation.
- HTML/CSS/JavaScript.
- GSAP.
- React/Next.js.
- Tailwind.
- Optional Bootstrap/WordPress.
- Free hosting, preferably GitHub Pages.
- Clean and readable code.

## 2. Implementation mapping

| Requirement | Implementation |
|---|---|
| Hero above the fold | Sticky 100vh hero viewport inside a tall scroll section |
| Headline | React-rendered `WELCOME ITZFIZZ` characters |
| Letter spacing | Tailwind tracking + display typography |
| Load animation | GSAP timeline |
| Headline reveal | Per-character stagger, opacity, Y movement and rotateX |
| Statistics | Four metric blocks with staggered GSAP entrance |
| Scroll-driven visual | Abstract sports-car SVG controlled by ScrollTrigger |
| Scroll progress | ScrollTrigger timeline with `scrub: 1.5` |
| Smooth interpolation | Numeric scrub lets animation catch up to scrollbar |
| Performance | Transform/opacity animations, `force3D`, `will-change` |
| React | Functional components + `useLayoutEffect` |
| Tailwind | Tailwind 3 utility classes throughout the UI |
| GSAP | GSAP + ScrollTrigger |
| Responsive | Tailwind breakpoints + clamp-based sizing |
| GitHub Pages | Included GitHub Actions workflow |
| Documentation | This file + README |

## 3. Why ScrollTrigger is used

GSAP's official ScrollTrigger documentation describes `scrub` as linking animation progress to scrollbar progress. A numeric value such as `1.5` adds smoothing so the animation catches up to the scrollbar rather than moving abruptly.

This project therefore uses:

```js
scrollTrigger: {
  trigger: section.current,
  start: "top top",
  end: "bottom top",
  scrub: 1.5
}
```

The main visual is animated using transform properties (`x`, `y`, `rotate`, `scale`) rather than layout properties.

## 4. React lifecycle and cleanup

The GSAP setup is inside `useLayoutEffect()` and wrapped with `gsap.context()`. Cleanup calls `ctx.revert()` so GSAP-created animations and ScrollTriggers are reverted when the component unmounts.

This is important for React development behavior and prevents stale animation instances.

## 5. Visual direction

The provided reference is used as an interaction/design reference. This submission does not copy its source code or assets. The visual is an original SVG sports-car illustration created specifically for this assignment.

The car:
- Enters during the initial page-load sequence.
- Moves horizontally as scroll progresses.
- Changes vertical position, rotation and scale.
- Uses transform-only motion for the scroll animation.
- Remains responsive across desktop and mobile layouts.

## 6. Local setup

Requirements:
- Node.js 20+ recommended.
- npm.

Run:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 7. GitHub Pages deployment

The included workflow automatically:
1. Installs dependencies.
2. Builds the Vite application.
3. Uses the repository name as Vite's base path.
4. Uploads `dist`.
5. Deploys through GitHub Pages.

### GitHub settings

After pushing to GitHub:

1. Open repository **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to `main` or manually run the workflow from **Actions**.

For a repository named:

```text
itzfizz-scroll-animation
```

the expected project-page URL is:

```text
https://YOUR_USERNAME.github.io/itzfizz-scroll-animation/
```

## 8. Submission checklist

Before submitting:

- [ ] `npm install` works.
- [ ] `npm run build` succeeds.
- [ ] Test desktop scrolling.
- [ ] Test mobile width.
- [ ] Confirm headline entrance animation.
- [ ] Confirm stats stagger animation.
- [ ] Confirm car moves with scroll.
- [ ] Confirm no console errors.
- [ ] Push complete repository to GitHub.
- [ ] Wait for GitHub Actions deployment.
- [ ] Open the final GitHub Pages URL in an incognito window.
- [ ] Submit live URL.
- [ ] Submit GitHub repository URL.

## 9. Technical references

- GSAP ScrollTrigger documentation: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Vite static deployment documentation: https://vite.dev/guide/static-deploy
- React documentation: https://react.dev/

## 10. Important note

The assignment text lists both "vanilla web technologies" and React/Next.js + Tailwind as the mandatory stack. This implementation chooses React + Tailwind + GSAP because those technologies are explicitly listed in the mandatory stack while still using standard HTML/CSS/JavaScript underneath.
