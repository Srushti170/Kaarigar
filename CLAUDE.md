# ARTEMIS hackathon workspace

ARTEMIS is a UI/UX & frontend development competition run by the KJSSE ACM Student Chapter at Abhiyantriki 2026.

- **When:** 15 Oct 2026, 10:30 AM onwards, with 6–7 hours of building.
- **Where:** KJSSE, Somaiya Vidyavihar University.
- **Format:** teams of 2–3, 2 problem statements (revealed on the day), judged on UI/UX and frontend quality.

## Context continuity: read this first

The user switches between **several Claude enterprise seats** during the hackathon. No single chat survives an account switch, so **this folder is the shared memory**. Any session, on any account, must keep it up to date.

| File | What it is | Who updates it |
|---|---|---|
| `context/HANDOFF.md` | Current state: problem statement, decisions, done, next steps. Imported below, so you already see it. | **You**, after every meaningful step |
| `context/PLAYBOOK.md` | **How we win:** what judges reward, what to research, how to get from problem to solution, USP lenses and test, polish checklist, pitch, mistakes to avoid. **Read it before research, before choosing an idea, and before building features.** | Rarely; only if the strategy changes |
| `context/RESEARCH.md` | Sponsor research, ranked sponsor problems (P1, P2…), existing solutions and their gaps, the 3 concepts, the chosen USP, and the pitch. Created by `/kickoff`. **Read it before building any feature.** | **You**, during research and whenever the idea changes |
| `context/SESSION_LOG.md` | Append-only, timestamped log of what happened. | **You**, append after every meaningful step |
| `context/transcripts/*.md` | Full conversation exports, one per session. `INDEX.md` lists them newest first. | Automatic (Stop hook) |

When you start a session:
1. Read the imported HANDOFF below. A SessionStart hook may also inject the tail of the previous session's transcript.
2. If HANDOFF looks stale or doesn't match that tail, update HANDOFF first, then continue.
3. For older history, read `context/SESSION_LOG.md`, then the specific transcript.

While you work:
- **Update `HANDOFF.md` and append to `SESSION_LOG.md` without being asked**, after any decision, finished feature, fixed bug, or change of plan. Keep HANDOFF short and current: rewrite it, don't append to it. The user may run out of seat usage at any moment, so an unwritten handoff is lost work.
- Log timestamps as `YYYY-MM-DD HH:MM` in local time (IST).
- `/handoff` forces a full update before switching accounts. `/kickoff <problem statement>` starts the build.

@context/HANDOFF.md

## Workspace layout

```
D:\Hackathons\Artemis\
├─ CLAUDE.md               ← this file (auto-loaded by every Claude account)
├─ context\                ← shared memory across accounts (see above)
├─ starters\               ← pre-installed templates, node_modules already present
│  ├─ react-js\            React 19 + Vite + Tailwind v4 (JavaScript)   ← default pick
│  ├─ react-ts\            Same, in TypeScript
│  ├─ next-app\            Next.js (App Router, TS) + Tailwind v4
│  └─ html\                Plain HTML/CSS/JS, served by Vite for hot reload
├─ app\                    ← the real project, created on the day from one starter
└─ .claude\                ← hooks (transcript export, session start) and /commands
```

This lives outside OneDrive on purpose: syncing `node_modules` causes slow installs and EPERM file locks.

All React/Next starters already include `lucide-react` (icons), `motion` (animations, `import { motion } from 'motion/react'`), `clsx` + `tailwind-merge` (`cn()` in `src/lib/utils`), and the Vite ones include `react-router-dom`. Design tokens (`--color-brand`, `--radius-card`, `--font-sans`) live in `src/index.css` under `@theme`. Use them as `bg-brand`, `rounded-card` and so on, and change them to suit the problem statement. The `@/` alias points to `src/`.

## Starting the build on the day

1. Record the problem statement in `context/HANDOFF.md`, word for word.
2. **Research before building** (the user's strategy for winning; `/kickoff` runs it). Work out why the sponsor set this problem when existing solutions already exist: what they need, and where current solutions fail. Then pick an idea whose USP no other team will have, and make sure every feature maps back to a sponsor problem.
3. Pick a starter. Default: `react-js`, unless the team prefers TS or the brief needs SSR or routing that Next gives for free.
4. Run `Move-Item starters\<name> app` (instant, same drive; node_modules come along), then `cd app; npm run dev`.
5. `git init` inside `app\`, commit early and often (e.g. after every working feature), and push to the team repo when it exists.

## How to build here (hackathon priorities)

The full version is in `context/PLAYBOOK.md`. In short:

- Judges see the UI first: aim for polish, consistent spacing and type, responsive layout down to 360px, and visible hover, focus, empty, loading and error states.
- Get a working, clickable flow end-to-end early, then iterate on polish. Never leave the app broken for long.
- Accessibility counts: semantic HTML, alt text, labels on inputs, keyboard focus, sufficient contrast, and `prefers-reduced-motion` respected.
- Use mock data (local JSON) unless the brief requires a real API.
- Keep the team unblocked: small components in `src/components`, pages in `src/pages`.
- Before demo time: `npm run build` must pass. Deploy (Vercel/Netlify) if a live link helps judging.
