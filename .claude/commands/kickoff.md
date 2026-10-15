---
description: Start the hackathon build from the announced problem statement
argument-hint: <paste the problem statement(s)>
---

The ARTEMIS problem statement has been announced:

$ARGUMENTS

Our goal is to **win**, not just to finish. That takes two things:
1. Solving the exact problem the sponsor has. There are always existing solutions, so ask why the sponsor still set this problem.
2. A USP that no other team will think of.

So research first, then generate ideas, then build. The clock is running: time-box every phase, run work in parallel where possible, and update `context/HANDOFF.md` at the end of each phase.

**Read `context/PLAYBOOK.md` first.** It covers what judges reward, what to research and why, the USP lenses and test, and the polish checklist. Apply it in every phase below.

## Phase 0 · Save it (2 min)
1. Save the problem statement(s) **verbatim** in `context/HANDOFF.md` under "Problem statement" and log the kickoff in `context/SESSION_LOG.md`. Create `context/RESEARCH.md`. Every finding below goes there, so an account switch loses nothing.
2. Read the statement closely before searching. Note:
   - the sponsor, if named;
   - the exact verbs and nouns, which are what they literally asked for;
   - any constraints and the target users;
   - phrases that hint at a pain they live with, such as "currently", "manual", "fragmented", "low engagement", "time-consuming".

## Phase 1 · Deep research (about 20 min, in parallel)
In one message, launch three background research agents (general-purpose, with web search). Tell each one to cite sources and to return bullets, not essays:
- **Sponsor:**
  - who they are: products, customers and business model;
  - recent news and launches, and the metrics they care about;
  - public signs of this pain: job posts, blog posts, app reviews, press.
  - Answer: *why would this company spend a hackathon on this problem?*
- **Existing solutions:** the 5–8 closest products, apps or open-source projects. For each, record:
  - what it does well;
  - where it fails: 1–3★ reviews, Reddit and X complaints, UX gaps, accessibility gaps, gaps specific to India;
  - why the sponsor still isn't satisfied.
- **Users and the problem:**
  - who suffers this problem, their real pain points and their workarounds;
  - useful statistics;
  - overlooked groups in India: elderly, low-literacy, regional-language, disabled and low-bandwidth users.

While the agents run, ask the user one question round (AskUserQuestion) about things only they know:
- what the organisers or sponsor said in person;
- the judging criteria and the rules (required tech? frontend only? submission format?);
- team size and each person's strengths;
- if there are two statements, whether the team prefers one.

After the user answers, and while the agents are still running: if the sponsor has a public website or app, open it in the browser pane and do a quick **UX audit**. Record 5 friction points with screenshots in `RESEARCH.md`; they become a pitch slide.

If there are two problem statements, run a lighter version of this research on both. Recommend the one we're more likely to win: clearer sponsor pain, more room for a visual or UX USP, and buildable in about 6 h of frontend work.

## Phase 2 · Synthesis (5 min) → `context/RESEARCH.md`
- **Must-hit checklist:** every deliverable the statement literally asks for. The final app must cover each one.
- **Why this problem statement exists:** the sponsor's underlying need, as ranked problems P1, P2, P3…, each with evidence.
- **Explicit vs implicit requirements:** what they asked for, and what they need but didn't say.
- **Existing solutions table:** product · what it does · where it falls short.
- **The gap:** one sentence on what nobody solves yet.
- **What most teams will build:** the 2–3 obvious solutions, such as "a dashboard", "a chatbot" or "a clone of X". Ours must not be one of them.

## Phase 3 · Ideas and USP (10 min)
Run the problem through the USP lenses in `PLAYBOOK.md`, and drop any concept that fails its USP test. Propose **3 distinct concepts**. For each one:
- a one-line pitch;
- how it solves P1, P2, P3…, mapped explicitly so every problem is covered;
- the USP: 1–2 features no other team will have. They should be hard to *think of*, not hard to *build*;
- the demo "wow moment": the 10 seconds the judges will remember;
- feasibility in about 6 h of frontend work with mock data, and which browser APIs can stand in for a backend (speech, camera, geolocation, offline/PWA, localStorage, notifications).

Score each concept from 1 to 5 on:
- sponsor fit;
- uniqueness;
- demo wow;
- UI/UX showcase (this is a UI/UX competition);
- buildability.

Recommend one, and say what we would cut first if time runs short.

## Phase 4 · Confirm (one question round)
In a single AskUserQuestion call, ask the user to confirm:
- the concept, or a mix of concepts;
- the starter from `starters/`, with a one-line reason (default `react-js`);
- the visual direction: palette, type, mood, and 1–2 reference styles.

## Phase 5 · Scaffold and plan
1. Run `Move-Item starters\<name> app`, update the design tokens in `app/src/index.css`, run `git init` and make the first commit, then run `npm run dev`.
2. Write a time-boxed build plan into HANDOFF.md, with a per-teammate task split if there's a team. Research and ideas take the first ~45 min. Then:
   - **+1:30** scaffold and layout done;
   - **+3:30** core flow works end to end;
   - **+4:30** USP feature works;
   - **+5:30** polish and states done: hover, focus, empty, loading and error states, mobile down to 360px, reduced motion;
   - after that: `npm run build` check and demo prep.
3. Draft a 60-second pitch in `context/RESEARCH.md`: the sponsor's problem → why existing solutions fail → our idea → the USP → the demo flow. Every feature in the demo must map back to a sponsor problem.
4. Add a small **case study** page or slides to the plan (problem → insights → persona → journey → decisions). UI/UX judges reward the process.
