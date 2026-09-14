# Portfolio Update — Working Notes

Status as of this session. Dev server was running at `http://localhost:3000` via `npm run dev`.

## ✅ Done and confirmed working

- **Image swap bug fixed** — `src/components/Projects.jsx`: Goober Eats and Calculator now show the correct screenshots (verified visually in browser).
- **Contact email contrast fixed** — `src/components/Contact.jsx`: email link changed from `text-black` (unreadable on the glass card) to `text-white font-semibold`.
- **Dead import removed** — `src/components/TechJourney.jsx` had a stray `import AOS from 'react'` shadowing nothing, doing nothing. Removed.
- **Anchor-scroll offset** — added `scroll-mt-24` to the Projects and Contact section containers (About already had `scroll-mt-20`) so clicking nav links doesn't land content under the floating navbar.
- **MITT timeline copy** — updated "2025-2026" entry from future tense ("I will begin") to present tense since Riley is now actually in the program.

## ✅ Root cause found and fixed (this session)

The "responsive classes don't work at all" bug was **not** a Tailwind v4/Vite config problem — it was two separate CSS cascade bugs, both now fixed:

1. **Stale dev server holding port 3000.** A node process from a previous session (started 2026-09-11) was still running and serving old/cached CSS. Killed it, cleared `node_modules/.vite`, restarted `npm run dev` clean. This alone made `sm:`/`md:`/`lg:` selectors start appearing in the compiled CSS again.
2. **Duplicate Tailwind compilation in `src/App.css`.** This leftover-from-scaffold file had `@tailwind utilities;` (the old Tailwind v3 directive) in addition to the real `@import "tailwindcss";` already in `index.css`. This produced a second, non-variant-scoped utilities stylesheet that loaded *after* `index.css` and won cascade ties (e.g. its plain `.flex-col-reverse` beat `index.css`'s properly-scoped `.sm:flex-row`) — this is why nothing responsive ever visibly applied, at any width. **Fix:** removed the `@tailwind utilities;` line from `App.css` (kept its other custom classes — `.text-outline`, `.bg-parallax`, etc. — those are plain CSS, not Tailwind-generated).
3. **Unlayered global reset beating Tailwind utilities.** `index.css`'s `*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }` reset was written outside any `@layer`. Tailwind v4 puts all its utilities inside cascade layers (`@layer theme, base, components, utilities`), and per spec, **unlayered CSS always beats layered CSS regardless of specificity**. So that reset's `margin: 0` was silently overriding every Tailwind margin utility (`mt-8`, `ml-4`, etc.) sitewide — this is why the Header headshot's `sm:mt-8`/`sm:ml-4` offset always computed to `0px` even once the `sm:` bug above was fixed. **Fix:** wrapped the reset in `@layer base { ... }` so it now participates in the layer cascade at the correct (lowest) priority.

Also fixed as part of re-verifying Header against the live reference site (rstrauman.github.io/Rileys-Portfolio) at desktop width:
- Header `h1` lost `whitespace-nowrap` when its text-size classes were changed to `text-3xl sm:text-4xl lg:text-5xl`, causing the name to wrap to two lines at desktop widths (it's one line on the live reference). Restored as `lg:whitespace-nowrap` (nowrap only at desktop; still allowed to wrap on mobile where space is tight).

**Verified working:** Header at 1696px now matches the live reference — name single-line, headshot offset to the right with no overlap on the intro paragraph, flex-direction correctly resolves to `row` via `getComputedStyle`.

**Not yet re-verified:** Could not get the browser automation's `resize_window` tool to actually shrink the viewport this session (window appears locked/maximized in this environment — `innerWidth` stayed 1696 regardless of requested size). So the *mobile* (`flex-col-reverse`, stacked) side of Header, plus all the other components' mobile layouts, have not been visually re-checked yet — only reasoned about (flex-direction isn't touched by the reset bug, so there's no known reason it wouldn't apply, but it hasn't been *seen*). Worth a manual check on a real device or a working devtools device-toolbar before calling this fully done.

## Next steps (in order)

1. **Visually re-verify mobile layout** (~390px) for real, once viewport resizing is working (try a fresh browser tab/window, or check manually) — Header, Navbar, About, Techstack, ProjectCard, Projects, Games, TechJourney, ParallaxBackground/App.jsx hero spacing.
2. **Re-verify the rest of desktop** (~1400-1700px) against the live reference site the same way Header was checked — specifically: Projects/Games grids are multi-column; Techstack is two columns; TechJourney desktop timeline (`hidden lg:block`) shows and the stacked mobile version (`lg:hidden`) is hidden.
3. Still outstanding from the original review (not started):
   - Add new/current projects to the Projects section (this portfolio itself, anything else built since August).
   - Decide on the About Me photo (currently a joke childhood photo) — keep, replace, or move elsewhere.
   - Minor polish items from the school portfolio worth borrowing: `{RS}` logo badge in the nav, envelope icon next to contact email (already fairly close since email fix).

## Reference

- Dev server: `npm run dev` (port 3000 — 5173 is used by another local project, `workout-tracker`, on this machine).
- Both live reference sites reviewed in browser: original (`rstrauman.github.io/Rileys-Portfolio`) and school project (`rstrauman.github.io/riley_strauman_portfolio`).
