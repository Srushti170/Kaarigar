# ARTEMIS: hackathon workspace

ARTEMIS is the UI/UX & frontend competition at Abhiyantriki 2026, held at KJSSE on **15 Oct 2026 from 10:30 AM**.

## On the day (5-minute start)

1. Open **Claude Code in `D:\Hackathons\Artemis`** (any of your Claude seats; they all share context through this folder).
2. Type `/kickoff` and paste the problem statement after it.
3. Claude recommends a starter. To do it by hand instead:

```powershell
cd D:\Hackathons\Artemis
Move-Item starters\react-js app
cd app
npm run dev
```

## Switching Claude accounts

- **Before switching:** type `/handoff`. Claude writes the current state to `context/HANDOFF.md` and commits work.
- **After switching:** open Claude Code in `D:\Hackathons\Artemis` again. It automatically reads `CLAUDE.md` and `HANDOFF.md`, and gets the tail of the last conversation injected.
- Even if you forget `/handoff`, every conversation is auto-saved to `context/transcripts/` after each Claude reply.

## What's ready

| Starter | Stack | Run |
|---|---|---|
| `starters/react-js` | React 19, Vite, Tailwind v4, JS | `npm run dev` |
| `starters/react-ts` | Same, TypeScript | `npm run dev` |
| `starters/next-app` | Next.js (App Router, TS), Tailwind v4 | `npm run dev` |
| `starters/html` | Plain HTML/CSS/JS with Vite hot reload | `npm run dev` |

The React and Next starters include `lucide-react`, `motion`, `clsx` and `tailwind-merge`. The Vite React starters also include `react-router-dom`. Everything is already installed, so you can work even on bad venue wifi.

## Files

- `CLAUDE.md`: instructions every Claude session loads automatically.
- `context/HANDOFF.md`: current state (problem, decisions, next steps).
- `context/SESSION_LOG.md`: running log.
- `context/transcripts/`: auto-saved conversations (`INDEX.md` lists them).
- `.claude/`: hooks that power the above, plus the `/handoff` and `/kickoff` commands.
