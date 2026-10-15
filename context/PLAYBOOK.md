# ARTEMIS winning playbook

**The goal is to win, not just to finish.** Every session reads this before research, before choosing an idea, and before building any feature. It was written the night before (15 Oct 2026) from the user's strategy and Claude's advice. The user's strategy:
1. Work out exactly what the sponsor needs and why they set this problem.
2. Build a to-the-point solution that gives them that.
3. Add a USP no other team will have.

## What wins a UI/UX and frontend hackathon
Judges often see many teams in a short time and form a view within the first 30 seconds of seeing the screen. They usually score some mix of: understanding of the problem, UI/UX quality, innovation, completeness, and presentation. So we need:
1. **Problem fit.** They can see we understood the sponsor's real pain, in the sponsor's own words, with evidence.
2. **First impression.** The first screen looks like a real product: one coherent design system, realistic content, no lorem ipsum, no broken images.
3. **One flow done perfectly.** A complete hero flow that works end to end beats ten half-built screens.
4. **Visible UX thinking.** Onboarding, feedback on every action, empty, loading and error states, mobile layout, accessibility.
5. **One thing they haven't seen all day.** That's the USP, and it must be demoable in 10 seconds.
6. **Believability.** The sponsor can imagine shipping it.
7. **A confident 2–3 minute story.**

## Research: what to find out, and why

| Question | Where to look | What it gives us |
|---|---|---|
| What does the statement literally ask for? List every deliverable. | The statement itself | A **must-hit checklist**. Missing a literal ask costs points however good the USP is. |
| Why does the sponsor care? Which business metric does this problem hurt? | Their website and About page, job posts, blog, news, LinkedIn | The pitch's "why": conversion, retention, support cost, time, trust, safety or compliance. |
| What do they already have? | Their own app or site. Use it and note 5 friction points, with screenshots. | A UX audit. "We used your product and found…" is the strongest opener with a sponsor judge. |
| Why don't existing solutions solve it? | Competitor apps, 1–3★ Play Store reviews, Reddit, X, YouTube comments | The gap. Common reasons: too complex, built for the wrong user, not built for India, no trust, no reason to come back, data scattered across tools. "Not built for India" covers language, UPI, low bandwidth and shared phones. |
| Who suffers, and in what situation? | Reviews, forums, news | A persona and their context: on the move, one hand free, poor network, first-time smartphone user. |
| 2–3 hard numbers | Reports, news | The hook for the pitch. |

## From problem to solution
1. Write the problem as: *How might we … for \<user\> so that \<sponsor outcome\>?*
2. List the root causes, pick the 1–2 with the biggest impact, and solve those deeply rather than everything shallowly.
3. Choose one primary persona and one hero flow of 3–5 screens. That flow is the demo.
4. **Traceability:** every feature maps to a sponsor problem (P1, P2…). If a feature has no mapping, cut it.
5. Build order: must-haves from the statement, then the USP, then extras.
6. Make it look shippable for this sponsor: use their domain language, their users, and realistic Indian data (names, ₹, cities, UPI, regional languages).

## A "crazy" USP that's still buildable
Run the problem through these lenses. Usually one or two produce something no other team has:
- **Invert the assumption** that every existing solution makes. If everyone makes the user fill in a form, use voice or a photo instead. If everyone shows a table, show a story or a map.
- **Design for the overlooked user:** elderly, regional-language, low-literacy or visually impaired users, or kids. Inclusive-by-default is rare at hackathons, and judges notice it.
- **Change the input:** voice (Web Speech API), camera (`getUserMedia`), gestures, drag and drop, vibration.
- **Make the invisible visible:** show progress, risk, impact, or money or time saved, live, as a visual.
- **Be proactive, not reactive:** the app anticipates and nudges instead of waiting to be asked.
- **Be context-aware:** adapt to the time of day, location, network quality (offline mode), or light and dark.
- **What-if simulation:** sliders that show consequences instantly.
- **One signature interaction:** a single delightful micro-moment at the key step, the thing judges mention to each other afterwards.
- **Close the loop:** after users act, show them what happened: status, impact, thanks.

**Don't make any of these the USP**, because every team builds them: a generic AI chatbot, "a dashboard with charts", login and signup, or a plain clone of an existing app. AI is fine *inside* a feature, as long as it's specific and invisible.

**USP test.** Keep the idea only if every answer is yes:
- Can we say it in one sentence?
- Would the sponsor say "we want that"?
- Can we demo it in 10 seconds?
- Is another team unlikely to have it?
- Can we build it in about 1.5 h with mock data?

## Polish that impresses judges
- One typeface pair, one brand colour plus neutrals, 8-pt spacing, and consistent radius and shadows. Use the tokens in `src/index.css`.
- Real copy and realistic mock data. Empty states have a clear call to action.
- Feedback on every action: hover, pressed, focus ring, toast, optimistic update, undo.
- Skeleton loaders with 400–800 ms of fake latency so judges actually see them, and an error state with a retry button.
- Responsive down to 360 px, because judges often resize the window or open the app on a phone.
- Accessibility: semantic HTML, labels, alt text, a full keyboard path, good contrast, and `prefers-reduced-motion` respected. A Lighthouse accessibility score of 95+ is a proof point for the pitch.
- Motion with a purpose: page transitions and the signature moment. Nothing that slows the flow down.
- Brand: a memorable product name, a simple logo, a favicon and a page title.
- No console errors and no dead buttons on the demo path. Hide or disable anything unfinished.

## Show the process
UI/UX judges reward the process, not just the pixels. Add one **case study** view, either an in-app page or 2–3 slides: problem → research insights → persona → user journey → design decisions → what we'd build next. It's mostly copy from `RESEARCH.md`, so it's cheap to make.

## Pitch and demo (2–3 min)
1. Hook: a statistic or a one-line user story.
2. The sponsor's problem in their words, and why existing solutions fail (the gap or the UX audit).
3. Our solution in one sentence.
4. A live demo of the hero flow, ending on the USP's wow moment.
5. Impact: which sponsor metric moves, and how.
6. Next steps (what we'd build with more time). Close with the product name.

To keep the demo safe:
- Use seeded data.
- Have a deployed link (Vercel or Netlify) and a local copy as backup, plus a 60-second screen recording as a last resort.
- Rehearse twice. One person drives, one person talks.

## Mistakes that lose hackathons
- Too many features and none of them complete.
- Missing a literal requirement from the statement.
- Hours spent in Figma. Design in code with the tokens instead.
- Lorem ipsum, placeholder images, or broken links on the demo path.
- Building authentication or a backend that nobody will judge. Fake them.
- No buffer. The last 45 minutes are for the build, deploy and rehearsal, not for new features.
- An app that's broken at judging time. Commit after every working feature.

## Team roles (2–3 people)
- **UX lead:** design tokens, layout, copy, states, case study, pitch.
- **Builder 1:** the hero flow, end to end.
- **Builder 2:** the USP feature, then polish and the responsive layout.

Claude supports all three. Whoever is using a seat keeps `HANDOFF.md` up to date.
