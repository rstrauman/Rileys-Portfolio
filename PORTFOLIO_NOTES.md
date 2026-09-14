# Portfolio Update — Working Notes

Status as of this session. Dev server was running at `http://localhost:3000` via `npm run dev`.

## ✅ Done and confirmed working

Extensive polish pass across the whole site this session, including:

- **Root-caused and fixed the "responsive classes don't work" bug** — was two CSS cascade issues: a duplicate Tailwind compilation in `src/App.css` (leftover `@tailwind utilities;` directive competing with `index.css`'s real one), and an unlayered global reset (`* { margin: 0 }`) in `index.css` silently beating every Tailwind margin/layout utility sitewide per the CSS Cascade Layers spec. Both fixed (`App.css` cleaned up, reset wrapped in `@layer base`).
- **Header**: fixed spacing (was too much dead space above the card), fixed the headshot rendering as an oval instead of a circle (same unlayered-`img`-rule root cause as above), fixed the GitHub icon being stretched/dark (source PNG has a wide canvas — added `object-cover` + `scale-75`), matched the socials pill's background to the header card's glass style.
- **Background**: fixed a hard visual seam between the starfield hero and the page's gradient body (a mispositioned `absolute` fade div, `position` context bug); capped the gradient's brightest stop so the Contact/Fun Facts sections at the bottom don't wash out light text.
- **Techstack**: added missing resume tech (TypeScript, .NET, C++, Java, Dart, Flutter, PHP, SQL, React Native, EF Core, SSMS, Jira, NuGet, Supabase, Firebase) with devicon icons; fixed invisible/near-black icons (JSON, Express, GitHub) with explicit `text-white`; made both icon-grid cards equal height via flex-stretch; added horizontal/vertical padding.
- **Tech Journey**: fixed the desktop timeline needing horizontal+vertical scrollbars and clipping top-row cards (fixed pixel widths didn't fit, `overflow-x-auto` combined with `overflow-x-hidden`'s CSS spec quirk was forcing `overflow-y: auto`); added matching `rounded-xl`; fixed typos in the milestone copy.
- **Projects section**: rebuilt as a horizontally auto-scrolling image-card carousel (styled after theboboapp.com) — screenshot background, bottom-left title + links, top-right glass description panel, pause-on-hover, working prev/next arrows (fixed a bug where the autoplay loop was fighting the manual scroll). Added 3 real projects (Workout Tracker, Veltra Online Store, LinkedIn But Better) with screenshots pulled from their live deployments/repos. Reordered per Riley's preference: Workout Tracker → Veltra → Goober Eats → LinkedIn But Better → Calculator → Task Manager.
- **Games section**: fixed the same "empty bottom gap" `min-h` pattern bug found elsewhere.
- **Navbar**: matched glass style to the rest of the site (was flat `bg-gray-900`); fixed hover icon reveal to properly slide the text over rather than just fading in with a too-wide gap.
- **Design cleanup**: removed the white/red text-shadow outlines site-wide (title text reads cleaner without them now that contrast is fixed everywhere) and deleted the now-dead CSS.
- **Content**: added a "Download Resume" button to Contact (`public/R.Strauman_Resume.pdf`), added a custom favicon (`{RS}` badge), fixed several copy typos (expaned→expanded, Calcualtor→Calculator, Institue→Institute, knoweldge→knowledge, etc.).
- **Technical hygiene**: fixed the site loading Inter font but never applying it (`font-family: sans-serif` → `'Inter', sans-serif`), added meta description + Open Graph/Twitter tags to `index.html` for link previews.
- **Mobile**: confirmed fine by Riley (viewport resize testing was unreliable in this session's browser automation, so this was a manual check on his end, not automated verification).

## Deliberately not done (asked, decided against for now)

- **Workout Tracker live demo link** — its Firebase Hosting URL is real and working, but Riley's own dev notes call it "unlisted, not shared anywhere," so only the GitHub link is shown, no live demo link.

## Future ideas (not started, explicitly deferred)

- **A "featured project" case-study treatment** for Workout Tracker specifically (it's the most substantial build — real auth, Firestore, security rules — but currently gets the same brief description as every other project). Would show technical depth a one-liner can't.
- **An explicit availability line** (e.g. "Currently seeking co-op/internship opportunities") near the name or in Contact, if true — tells recruiters what to do with the info instead of making them guess.
- Lower priority / optional, only if wanted later: compress the project screenshot images (a couple are full-res PNG/JPG), consider unifying Games' static-grid style with Projects' new carousel (or keep the contrast intentional).

## Reference

- Dev server: `npm run dev` (port 3000 — 5173 is used by another local project, `workout-tracker`, on this machine).
- Live site: `rstrauman.github.io/Rileys-Portfolio` — after any future deploy, double-check the resume link (`/R.Strauman_Resume.pdf`) still resolves given the GitHub Pages subpath.
