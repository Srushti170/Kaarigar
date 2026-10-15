# HANDOFF: current state

_Last updated: 2026-10-15 15:00 IST by session 84126829 (hackathon day)._

## Status
**15:00: LOGO IN TOP BARS + FIRST-LOGIN TOUR + COMPACT CONFIRMED CARD** (commit 7cce425; not browser-tested at the user's request, but the bundle check and build pass).
- The header now shows `LogoArt` (h-12) in place of the text Wordmark: WorkerShell, EmployerShell, auth, Welcome, Verify.
- **`src/components/Tour.jsx`**: a 4-step spotlight tour (welcome, first job card `data-tour="job"`, mic `data-tour="mic"` in the nav, tap a job). It's trilingual and read aloud on each step. It shows once per worker (`karigar-tour-<id>`, cleared by Demo reset) and is mounted in Home.
- **Home ConfirmedCard** now shows only the Booked summary (trade, title, employer, record chips, ₹ notes, sun arc, place/travel/when, the Pakki Parchi line), plus backup status and "साथी भेजो". The full detail is behind "पूरा देखो".


**14:40: SKILLS + MATCHED JOBS + DEMO DATA FOR ALL, SMOOTHER INTRO** (commit 384cf3e).
- **Logo:** `public/brand/logo-clear.webp` (transparent, from the user) is now used everywhere through `LogoArt`. There's no off-white box any more.
- **Intro, about 7.6 s:** map trace, tools pop, tools fly out, then the logo emerges from central India. It starts tiny and blurred, then grows into focus while the map zooms past and fades. The map blur was removed for phone performance.
- **Skills:**
  - `WORKERS[x].skills` (first = main trade); `skillsOf(w)` lives in data/index.js.
  - Sign-up lets workers pick several skills (the first is marked "मुख्य").
  - Skills show in the account menu, Passport ("और हुनर") and Verify.
- **Work tab:** only jobs matching the worker's skills, main trade first, with skill filter chips. The overnight search follows the worker's own trade and naka.
- **Demo data:**
  - JOBS now j1–j20 across all trades; new employers `priya` (Andheri household) and `shree` (Chembur society).
  - Seeded bookings for every worker (store key `karigar-state-v3`):
    - Imran and Lata have a "पैसा मिला?" pending;
    - Ganesh has a new offer;
    - the others have tomorrow confirmed.
  - `src/data/demo.js` generates each worker's month, receipts, passport entries and sub-skills.
  - **Logins for all 9 workers:**

    | Worker | Login |
    |---|---|
    | Ramesh | 9820011111 |
    | Sunita | 9820022222 |
    | Imran | 9820033333 |
    | Suresh | 9820044444 |
    | Ganesh | 9820055555 |
    | Lata | 9820066666 |
    | Shabana | 9820077777 |
    | Vijay | 9820088888 |
    | Arjun | 9820099999 |

    OTP 1234. The login screen shows 3, with "सभी देखें" for the rest.
- **The user asked what the ₹ note chips are for:** they show the amount as the actual notes, so a worker who can't read numbers recognises the pay by the note colours.

**14:20: OPENING ANIMATION + LOGO PALETTE** (commit 558cd8a).
- **`src/components/IntroAnimation.jsx`** plays on every app open (a fresh load of `/`), about 5.6 s, skippable:
  1. the India map traces itself and settles into an outline;
  2. 14 round tool buttons pop out of states (the state glows yellow);
  3. the tools swipe off-screen;
  4. the logo pops from small to big, then the tagline.
  - Then it shows the welcome slides, or home if logged in.
  - The desktop frame has a "इंट्रो फिर से / Replay intro" button.
  - Dev only: `/?intro=hold`, then `window.__intro('tools'|'fly'|'logo')` steps through the stages.
  - Map data: `src/data/india-map.js`, from @svg-maps/india, **CC BY 4.0** (credited in the file). It shows India's official northern boundary.
- **Palette = the logo only**, all set via tokens in `src/index.css`:

  | Token | Colour |
  |---|---|
  | paper | #fffbf3 (logo background) |
  | marigold / saffron | #feab13 |
  | ink | #1a1f3c |
  | forest / leaf | #1a7650 |
  | sindoor | #d43f4c (bandana red) |
  | sky | #26406b (overalls blue) |
  | saheli | #c23a5c (bandana rose) |
  | brown / sand | skin #a46133 / skyline #e8dbcb |

  - **Primary buttons are sun yellow with navy text.**
  - Rupee-note colours are kept as real currency colours.
  - App icons were regenerated in this palette.

**14:04: IT IS NOW A PHONE APP (the user's request: "it should look like an app, it will be installed on phones").** Commit 9ecedf0.
- **Laptop/desktop (≥768px):** `DeviceStage` shows the app inside a phone frame. It's an iframe at true 390×844; the status bar and notch are drawn by the frame.
  - Side panels: install button, "open on your phone" QR, demo logins, and **डेमो रीसेट** (clears all `karigar-*` localStorage).
  - The iframe syncs the address bar, so a refresh reopens the same screen.
  - `?noframe` disables the frame.
- **Phone, or the installed app:** full-screen, no frame (`shouldFrame()` in `src/lib/pwa.js`).
- **`/` is now the app start:** a splash (once per session), then 3 swipeable welcome slides (read aloud), ending in "शुरू करें" (sign-up) or "लॉग-इन". A logged-in user goes straight to their home. **The marketing Landing page was deleted.**
- **Installable PWA:**
  - `public/manifest.json` with shortcuts for काम, पैसा and शिकायत;
  - `public/icons/*` (generated: "का" on a marigold sun);
  - `public/sw.js`: network first with an offline fallback; it skips `/__live`;
  - the install button is in the account menu and on the welcome screen (when the browser offers it).

**13:48: THE WORKER PLATFORM IS COMPLETE and committed** (`app/` git repo, commit acda0eb). **Scope = worker system only** (the user's order at 13:25). Do NOT build employer pages: the employer login exists but lands on a "coming soon" placeholder (`/employer/*`). **The live demo was removed** entirely.
- **Login:** `/login`: pick a role (worker / employer), then phone, then OTP (demo code **1234**, auto-fills), then the app.
  - Guards (`RequireRole`, `src/lib/auth.jsx`) keep each role on its own side. Log-out goes to the plain role choice.
  - Demo accounts: **Ramesh 9820011111, Sunita 9820022222** (workers); Meera 9819033333, Sanjay 9819044444 (employers). An unknown worker number goes to sign-up.
- **Worker sign-up:** `/worker/start`, 6 steps: a language face, phone + OTP, name and work by voice (editable picture card), the Aadhaar QR age check (under 18 blocked; 18–21 naya + Ustad), toli join, done.
  - New workers are saved in localStorage `karigar-registered` and merged into WORKERS; they start with empty Paisa and Passport.
- **Worker pages, all done and checked in the browser:**
  - Home, JobParchi, Booked, Paisa, Passport, Toli, KhaaliDin, Suraksha, Report, Haq.
  - Public `/verify/:id` (Passport QR).
  - The header avatar opens the account menu.
  - Tested as Ramesh, as Sunita, and as a freshly registered worker: no console errors, no overflow at 375px.
- **To fact-check before the pitch** (the helpers added these): PMSBY 1800-180-1111, PM Vishwakarma 1800-267-7777, cyber fraud 1930.
- **Next:** the user reviews the app in their own browser; then polish whatever they flag, and optionally deploy (vercel.json exists). Testing note: a hidden browser pane pauses rAF, so motion transitions freeze there; it works in a normal browser.
- **⚠ Windows Smart App Control is ENFORCING on this laptop and blocks unsigned native Node modules** (rolldown/Vite, Tailwind oxide, lightningcss). Workaround in place:
  - **esbuild-wasm** (scripts/dev.mjs, scripts/build.mjs, scripts/esb.mjs);
  - **Tailwind v4 compiled in the browser** (`@tailwindcss/browser`, tokens in src/index.css injected by src/tw-setup.js).
  
  Commands:
  - `npm run dev` → http://localhost:5173 (auto-reload);
  - `npm run build` → dist/;
  - `node scripts/check.mjs` → in-memory bundle check.
  
  Do NOT use `vite` here, and do NOT change security settings.
- **Architecture:**
  - `src/lib/auth.jsx`: login, guards, registry.
  - `src/lib/i18n.jsx`: trilingual hi/mr/en inline `{hi,mr,en}`, `<L t sub/>`.
  - `src/lib/store.jsx`: localStorage booking lifecycle, synced across tabs.
  - `src/lib/voice.js`: TTS, Web Speech, a demo mode, a Hindi/Marathi parser.
  - `src/data/index.js`: all mock data.
  - Components: ui, picture, voice, shells (WorkerShell + ProfileSheet, EmployerShell), auth, brand.

**12:20: APP NAME = "कारीगर" (Karigar), always shown in Devanagari** (Baloo 2 ExtraBold wordmark, "Karigar" small underneath). **"Toli" is now the group feature, not the app name.** Tagline stays "कोई अकेला नहीं". The user is generating the initial design in v0 with the **SINGLE PROMPT** at the top of `context/V0_PROMPTS.md`.

**12:15: THE USER IS GENERATING THE FRONTEND IN v0.dev** using the 5 prompts in **`context/V0_PROMPTS.md`**.
- The user will download the v0 code and **extract it into `D:\Hackathons\Artemis\app\`**. Then Claude continues: `npm install` (needs internet), check the build, wire the real Web Speech API (hi-IN) in `/lib/voice.ts`, polish, and get the demo ready.
- v0 output is **Next.js App Router + Tailwind + shadcn/ui**, so use the `app-next` preview config (port 3000).
- Visual direction chosen for the prompts: warm "paper" #FBF7EF, ink indigo #1C1A3A, marigold #F2A900, leaf #1F8A4C, sindoor #D7263D; fonts Baloo 2 + Mukta. The user can swap these.
- The user added 4 points to the solution (SOLUTION 6b): **Kaam Passport** (export a portable, verifiable work record), **earnings transparency** ("worker receives 100%"), **Pakki Parchi as a digital agreement** (IT Act Sec 10A; don't over-claim), and **press 2 = one-tap report** everywhere.

**12:03: FINAL SOLUTION AGREED = `context/SOLUTION.md` v3. Read it before doing anything.** The user confirmed adding **Toli** and the **Suraksha protection layer**. The app is 3 tabs (Kaam / Paisa / Suraksha) plus a mic button (Bolo Kaam). The novelties are: Toli backup, Bayana, Milan Nishaan, an agent that books for you, Hisaab Lock, women's safety, protecting minors, Khaali Din, a fair employer record, and research depth. The suggested name is "Toli" ("Koi akela nahi"); the name is the team's call, and not "Pakka". **Still no building until the user says "build".**

_Older status notes (kept for history):_
**STILL IN RESEARCH MODE (11:10). The user said: do NOT ask to build; they'll say when the final solution is settled.**
- **The consolidated, plain-language solution is in `context/SOLUTION.md`.** Read it first. It covers 6 worker features, 6 employer features, both journeys, and the USP.
- **⚠ 11:25: the USP is under revision.** A rival-AI test (RESEARCH 2e) showed 5/5 AIs suggest the "Pakka" deal card and work record, so Pakki Parchi is table stakes.
- **11:50: SOLUTION.md is now v2 (a proposal awaiting the user's OK): "Tomorrow's work, guaranteed from both sides".** It combines the Bolo Kaam voice agent, Bayana token money, a Toli backup, and a Milan Nishaan match mark, plus Hisaab Lock, Khaali Din and Ustad–Chela. Built on broadened research (RESEARCH 2g–2i). **Don't name the app "Pakka".**
- The design rule: **the employer does the typing, the worker just says yes** (2 taps per job).
- The user asked follow-ups about workers with a basic phone, no phone, and no phone and no helper; those answers are in RESEARCH 2d-v2 to 2d-v5.
- The user rejected the first concept question because they wanted a structured analysis first: requirements, then existing solutions, then gaps and solutions from both the worker and employer side, then one simple, novel USP that isn't flashy, is easy to understand, and looks good.
- That analysis is in `context/RESEARCH.md`: 0b requirements; 1A–1F findings, including employer-side research and a feature gap matrix; 2b gaps and solutions (W1–W6 for workers, E1–E6 for employers); 2c the USP.
- **The proposed USP is "Pakki Parchi", a receipt for every day of work** ("Kaam pakka. Paisa pakka."). The receipt is agreed at the naka by QR scan and read aloud; once stamped as paid, it builds the Kaam Diary, which gives skill proof, a 90-day BOCW ring with a certificate, and wage-theft evidence. Employers get a rate card, verified history, a society pass, and auto-generated registers.
- **⚠ Maharashtra already runs a government naka job app (MAHABOCW "Naka Kamgar"), so do NOT build a naka job board.**
- The app is not scaffolded yet.

## Problem statement (verbatim, as given by the user)
> **BEYOND THE WAITING LINE** Connecting Hawkers to Better Employment Opportunities
> **Theme:** Inclusive Design · Employment · Digital Empowerment
>
> **The Context** Across Indian cities, many hawkers, including plumbers, carpenters, electricians, painters, sweepers, and labourers, wait at roadside hiring points and markets for someone to hire them. Their livelihood depends on whether the right person happens to approach that day. Despite years of experience, many have no résumé, digital profile, or network, and little access to information about welfare schemes and worker protections. People who need reliable workers don't know where to look.
>
> **The Challenge** Design a digital platform that helps hawkers find work, showcase their skills, connect with employers, and access their rights, without abandoning their existing way of working. The product should help them:
> 1. Find work more reliably. Discover nearby daily-wage, short-term, and longer-term jobs, with location, hours, and pay easy to understand.
> 2. Showcase skills without credentials. Show trade, experience, and availability without a résumé or advanced digital literacy.
> 3. Build trust. Make job and payment terms clear before anyone commits, and help spot suspicious listings.
> 4. Access rights and support. Find welfare schemes, documents, registration channels, and grievance routes in clear, accessible form.
>
> **What we're looking for** We are not looking for another conventional job portal or home-services marketplace. We want a human-centred experience built around irregular employment and limited digital literacy. The emphasis is on UI/UX, inclusive design, and frontend execution over backend complexity. Mock data is fine. Creativity is encouraged: treat the points above as a starting point, not a checklist.

## Decisions
- Workspace: **`D:\Hackathons\Artemis`**, outside OneDrive on purpose.
- Stack: **not decided yet**. The default suggestion is `react-js`; it gets confirmed in Phase 4 together with the concept.
- **Strategy: research first, then build to win.** Follow `context/PLAYBOOK.md` and the phases in `.claude/commands/kickoff.md`. The user doesn't have to type `/kickoff`: when they give a problem statement, run the flow.
- Context continuity: CLAUDE.md, this file, SESSION_LOG.md, RESEARCH.md, and auto-saved transcripts.

## Team
- The user didn't specify the team size or skills, or the deadline. Plan for judging at **about 5:00 PM** with a buffer.
- **Submission: live demo + pitch** on the laptop. No extra criteria, sponsor or rules were given.

## Done
- Environment ready: 4 starters pre-installed and build-tested, with hooks for transcript export and session-start context.
- `PLAYBOOK.md` (how we win) and the research-first `/kickoff` flow are written.
- 10:22: problem statement saved; first close read written in RESEARCH.md; 4 research agents launched.

## Next steps
1. The user confirms the concept, starter and visual direction.
2. Run `Move-Item starters\<name> app`, set the tokens, run git init, and start `npm run dev`.
3. Write a time-boxed build plan here: the hero flow first, then the USP moment (90/90 ring → certificate), then polish.

## Open questions / blockers
- Team size and skills, judging criteria, submission format and the deadline are being asked now.
