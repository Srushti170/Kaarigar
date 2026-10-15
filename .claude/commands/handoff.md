---
description: Save everything to the shared context files before switching Claude accounts
---

The user is about to switch to another Claude account. Make sure the next account can continue with zero re-explaining:

1. Rewrite `context/HANDOFF.md` so it reflects the state **right now**: status, the problem statement (verbatim), every decision and its reason, the team split, what's done (with file paths), what's in progress (exact file and what's half-finished), the next 3–5 concrete steps, and open questions or blockers. Keep it skimmable. Remove anything stale.
2. Append an entry to `context/SESSION_LOG.md` using its format, covering this session: what was built, changed, or decided. Include the first 8 characters of the session id if you know it.
3. If there is a git repo in `app/`, run `git status`. If there are uncommitted working changes, commit them with a clear message so nothing is lost.
4. Reply with a 3-line summary of where things stand. Mention that the transcript is auto-saved in `context/transcripts/`.

$ARGUMENTS
