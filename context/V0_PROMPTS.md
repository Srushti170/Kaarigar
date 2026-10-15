# v0.dev prompts: कारीगर (Karigar) frontend

> **12:20: the user wants ONE prompt for the initial design, and the app is named "कारीगर" (Karigar), shown in Devanagari.** Use the SINGLE PROMPT below. The 5 step-by-step prompts further down are older (they say "Toli" as the app name). Use them only for follow-up detail, and replace the app name with कारीगर. **"Toli" is now the name of the group feature, not the app.**

## FOLLOW-UP PROMPT A (12:25): make the language toggle work + clarify the Nishaan

```
Two fixes to the existing app:

1) MAKE THE LANGUAGE TOGGLE ACTUALLY WORK. Create /lib/i18n.tsx with a LanguageProvider (React context) and a useT() hook. Supported languages: "hi" (हिंदी, default), "mr" (मराठी), "en" (English). Keep all UI strings in /lib/translations.ts as one object keyed by id, each with hi, mr and en values (no hard-coded text in components — replace every visible label, button, heading and helper line with t("key")). Persist the choice in localStorage and set <html lang>. The header toggle (हिं / मरा / EN) must switch the entire app instantly, with the active language visibly highlighted (marigold pill, aria-pressed). Behaviour: Hindi = Devanagari primary with a small English subtitle; Marathi = Marathi (Devanagari) primary with a small English subtitle; English = English primary with a small Hindi subtitle. Read-aloud (SpeakButton) must use the selected language: hi-IN for Hindi, mr-IN for Marathi (fall back to hi-IN voice if no Marathi voice exists), en-IN for English. Translate the real strings properly (e.g. "कल का काम पक्का ✓" → Marathi "उद्याचे काम पक्के ✓" → English "Tomorrow's work confirmed ✓"; "बयाना ₹100 मिल गया" → "बयाणा ₹100 मिळाला" → "₹100 token money received").

2) CLARIFY THE NISHAAN (the red triangle 7). It is NOT a button. Make it look like a printed token/badge, not a tappable control: no hover or press state, a subtle ticket-stub shape with a notch, and always put a caption above it: "आपका निशान · Your match mark" and a caption below it: "मालिक के पास भी यही निशान होगा — नाके पर इसे मिलाएँ" (the employer has the same mark — match it at the naka). Add a small ⓘ "यह क्या है?" (what's this?) link that opens a sheet with a 3-step picture explainer: (1) booking gets a mark → (2) employer and worker both see the same mark → (3) match at the naka, like Mumbai dabbawala codes. The accessible label stays "Red triangle 7".
```

## SINGLE PROMPT: initial design (use this one)

```
Design the initial frontend for "कारीगर" (Karigar) — a mobile-first web app for daily-wage workers in Mumbai (painters, plumbers, electricians, carpenters, masons, helpers) who wait at roadside hiring points called "nakas", and for the households and small contractors who hire them. Tagline: "कोई अकेला नहीं" (nobody stands alone). Promise: other apps help a worker find a job; कारीगर makes sure the job happens, the money comes, and the worker gets home safe.

USERS & PRINCIPLES
- Workers have low literacy and often basic phones; they speak Hindi/Marathi. The worker UI must work with almost NO reading: big icons, pictures, numbers, a 🔊 read-aloud button on every card, a big mic button, one decision per screen, min 56px tap targets, base font 18px. Hindi (Devanagari) labels first with a small English subtitle. Employers are literate: English-first UI with Hindi accents.
- Rule: employers type, workers only speak or tap. Every confirmation offers "1 = हाँ" and "2 = समस्या बताओ" (one-tap problem report).

TECH: Next.js App Router, TypeScript, Tailwind, shadcn/ui, lucide-react, framer-motion. No backend — mock data in /lib/data/*.ts, shared state in a React context (/lib/store.tsx). Small components in /components. Accessible: semantic HTML, aria-labels on icon buttons, visible focus rings, WCAG AA contrast, prefers-reduced-motion respected, works at 360px.

BRAND & VISUAL DIRECTION (warm, human, trustworthy, Indian — not a government site, not flashy)
- Name/wordmark: "कारीगर" in Devanagari, set in "Baloo 2" ExtraBold, ink colour, with a small marigold dot accent; English "Karigar" small underneath. Simple logo mark: three overlapping circles (people standing together). Use the wordmark in the app header and landing hero.
- Colours: paper background #FBF7EF, cards #FFFFFF, borders #E8E1D3; ink indigo #1C1A3A (text, primary buttons with white text); marigold #F2A900 (mic button, highlights, key CTAs — always dark ink text on marigold); leaf green #1F8A4C (paid/safe/verified); sindoor red #D7263D (danger/SOS/scam); sky #2F6FDE (info). Colour is never the only signal — pair with icon/shape/word.
- Fonts: "Baloo 2" for headings and big numbers, "Mukta" for body (both Devanagari-ready). Rounded 20px cards, soft shadows, generous spacing.

KEY COMPONENTS ("picture language")
- RupeeNotes: amount in big numerals + small currency-note chips (₹850 = 500+100+100+100+50).
- SunArc: sunrise-to-moon arc showing work hours (09:00–18:00).
- TravelChip: 🚶/🚌 + minutes. DurationTag: "1 दिन / 1 हफ़्ता / 1 महीना+".
- Nishaan (match mark, inspired by Mumbai dabbawala codes): coloured shape + number, e.g. red triangle 7; employer and worker see the same mark and match at the naka. Accessible label "Red triangle 7".
- EmployerRecord: "समय पर पैसा 23/24 · 0 शिकायत · 👩 महिलाओं के लिए सुरक्षित".
- ScamFlag: red chip "पैसे माँग रहा है — काम के लिए कभी पैसे न दें".
- SpeakButton: 🔊 reads text with window.speechSynthesis (lang hi-IN).
- MicButton: 72px marigold circle with states idle / listening (pulsing rings) / processing / understood. DEMO MODE: clicking types out "कल पेंटिंग का काम चाहिए, घाटकोपर के पास, 800 से कम नहीं" with a typing animation, then shows a read-back card in pictures (🎨 पेंटिंग · 📍 घाटकोपर · कल · ₹800+) with big ✓ हाँ / ✗ नहीं. Put speech logic in /lib/voice.ts with a TODO to wire the real Web Speech API later.

SCREENS (build these for the initial design)
1. Landing (/): कारीगर wordmark hero, tagline, value line, three entry cards — "मैं कामगार हूँ / I'm a worker" (/worker), "काम देना है / I'm hiring" (/employer), "Live demo". Three promise columns: 🛠 काम पक्का (work guaranteed) · 💰 पैसा सुरक्षित (money protected) · 🛡 सुरक्षा (safety). Strip: "Works on any phone — smartphone · basic phone · no phone (via toli)".
2. Worker home "काम" (/worker), persona Ramesh Yadav, painter, 42, Ghatkopar naka. App shell: header with कारीगर wordmark, language toggle (हिं/मरा/EN), "🔊 पढ़कर सुनाओ", avatar stack of his toli; bottom nav with 3 tabs and the big centre mic: 🛠 काम · 🎙 बोलो · 💰 पैसा · 🛡 सुरक्षा. Content: greeting "नमस्ते रमेश जी"; hero card "कल का काम पक्का ✓" (employer Meera Iyer, Powai; huge Nishaan red triangle 7; RupeeNotes 850; SunArc 9–18; TravelChip bus 25 min; "बयाना ₹100 मिल गया ✓" in green; buttons "🔊 सुनो" and "बीमार हो? साथी भेजो (2)"); a standing voice request card "🎙 ढूँढ रहे हैं: पेंटिंग · घाटकोपर · ₹800+ · कल" with a soft searching animation; "आज के काम" list of 4 picture job cards (RupeeNotes, SunArc, TravelChip, DurationTag, EmployerRecord, 🔊), one of them carrying a ScamFlag.
3. पक्की पर्ची — the digital work agreement (/worker/job/[id]): styled as a real paper slip (zig-zag perforated edges, faint कारीगर watermark). Rows as pictures: काम, पैसा, समय, जगह, पैसा कब ("आज शाम, नकद/UPI"), खाना/औज़ार ✓/✗. Transparency box: "मालिक देगा ₹850 → आपको मिलेगा ₹850 (100%) · कमीशन ₹0". EmployerRecord + green "भरोसेमंद मालिक" badge. Footer "डिजिटल समझौता · दोनों ने स्वीकार किया · समय-मुहर". Buttons "✓ हाँ, पक्का (1)" and "⚠ समस्या बताओ (2)". On accept, a rubber stamp "पक्का ✓" lands on the slip (rotated −8°), then go to the confirmation.
4. Booking confirmed (/worker/booked/[id]): huge Nishaan + "मालिक के पास भी यही निशान होगा"; "बयाना ₹100 — मालिक न आए तो ये आपका"; toli backup — avatars of 3 members (trade + verified days) and a sheet to send Suresh (painter, 48 पक्के दिन) → "सुरेश जाएंगे — मालिक को बता दिया".
5. पैसा (/worker/paisa): big card "₹850 मिला?" with giant "1 ✓ हाँ" (green) and "2 ⚠ समस्या" (red); a circular 90-day ring 62/90 — "28 दिन और — फिर कल्याण कार्ड (BOCW) का प्रमाणपत्र"; a month calendar (worked = green stamp, booked = marigold, no work = grey); chips "62 पक्के दिन · 9 बार दोबारा बुलाया · 100% हाज़िरी"; button "मेरा काम पासपोर्ट" opening an ID-style card with QR — "आपका काम आपका है, ऐप का नहीं" — and buttons WhatsApp / PDF / QR.
6. टोली (/worker/toli): "घाटकोपर पेंटर टोली" with 4 members (trade, verified days, phone type: smartphone / basic phone / no phone "टोली से जुड़े"), toli types (सामान्य, सहेली — women-only in calm purple, उस्ताद–चेला), "साथी जोड़ो", a feed with a backup event and a shared warning "⚠ XYZ Contractors ने पैसे नहीं दिए — 2 साथियों ने बताया", and "कोई मुखिया नहीं, कोई कटौती नहीं".
7. सुरक्षा (/worker/suraksha): "क्या हुआ? बोलकर बताओ" mic card + 5 picture tiles with routes: पैसा नहीं मिला → India Labourline 1800-833-9020; उत्पीड़न → 181 / SHe-Box; चोट → 108; साइट पर बच्चा → 1098; ख़तरा → 112. A women's safety card "घर पहुँची? — शाम 6 बजे कॉल, 1 दबाओ = सुरक्षित" with "जवाब न मिले तो टोली और परिवार को सूचना", an "बराबर वेतन जाँच" chip, and a note "सिर्फ़ 18+ ✓ (आधार से जाँचा)".
8. Employer (/employer), persona Meera Iyer, Powai: "What's the job? / क्या काम है?" grid of illustrated problem tiles (leaking tap, wall painting, switch not working, damp wall, broken door, cracked tiles, deep cleaning, loading) → result "You need: Painter · Fair rate ₹750–900/day"; a list of available workers and tolis for tomorrow (no star ratings — show "62 verified days · rehired by 9 · 100% show-up · backed by a toli of 4 · ID ✓ 18+"); a booking summary panel with transparent pay ("You pay ₹850 → Ramesh receives ₹850 (100%) · commission from worker ₹0"), "Pay ₹100 bayana (UPI)", the shared Nishaan red triangle 7, a "Society pass for the watchman" card, and a "Bharosemand Malik ✓" badge.

MOCK DATA: workers Ramesh Yadav (painter, 42, 14 yrs, 62 verified days, rehired by 9), Suresh Patil (painter, 48 days), Sunita Kamble (helper, 34, सहेली टोली), Imran Shaikh (plumber), Ganesh More (mason, 58, उस्ताद); employers Meera Iyer (paid on time 23/24), Sanjay Patil (contractor, 41/41), XYZ Contractors (2 unpaid complaints); nakas Ghatkopar, Kurla, Vikhroli, Chembur, Dadar; jobs ₹700–1100 mixing 1 day / 1 week / 1 month, plus one scam job asking a ₹500 "registration fee".

QUALITY BAR: polished, consistent spacing and type, real-looking content (no lorem ipsum), hover/focus/pressed states, empty and loading (skeleton) states, smooth but subtle motion, and npm run build must pass with no type errors.
```

---

**How to use:**
1. Open **v0.dev** and start ONE new chat.
2. Paste **Prompt 1**, wait for it to finish, then paste Prompts 2 → 5 **in order in the same chat**.
3. Check the preview after each prompt. If something breaks, tell v0 "fix X" before moving on.
4. When it's done, click **Download ZIP** (or copy the `npx shadcn add …` command) and extract it into `D:\Hackathons\Artemis\app\`. Claude takes it from there: `npm install`, real voice wiring, polish, build check.

_v0 generates **Next.js (App Router) + Tailwind + shadcn/ui**. The preview config for that is `app-next` on port 3000._

---

## PROMPT 1: foundation + worker home, job agreement, booking

```
Build the frontend of "Toli" — a mobile-first web app for daily-wage "naka" workers in Mumbai (painters, plumbers, electricians, carpenters, masons, helpers who wait at roadside hiring points called nakas) and the people who hire them. Tagline: "कोई अकेला नहीं — Koi akela nahi" (nobody stands alone).

Workers have LOW LITERACY, often basic phones, and speak Hindi/Marathi. So the worker UI must work with almost NO reading: big icons, pictures, numbers, a 🔊 read-aloud button on every card, a big mic button, one decision per screen. Employers type; workers only speak or tap.

TECH: Next.js App Router, TypeScript, Tailwind, shadcn/ui, lucide-react, framer-motion. NO backend: all data mocked in /lib/data/*.ts; shared client state in a React context at /lib/store.tsx. Small reusable components in /components. Respect prefers-reduced-motion. Semantic HTML, aria-labels on every icon button, visible focus rings, WCAG AA contrast, works at 360px width.

VISUAL DIRECTION — warm, human, trustworthy, Indian, NOT a government site, NOT flashy:
- Background "paper" #FBF7EF, cards #FFFFFF, border #E8E1D3
- Primary "ink" indigo #1C1A3A (text, headers, primary buttons with white text)
- Accent "marigold" #F2A900 (highlights, mic button, key CTAs — always DARK ink text on marigold, never white)
- "leaf" green #1F8A4C = paid / safe / verified; "sindoor" red #D7263D = danger / SOS / scam; "sky" #2F6FDE = info
- Fonts (Google): "Baloo 2" for headings and big numbers, "Mukta" for body — both support Devanagari. Worker app base size 18px.
- Rounded cards (20px), big tap targets (min 56px), soft shadows, generous spacing. Colour is never the only signal — always pair with an icon/shape/word.
- Worker app: Hindi (Devanagari) primary with a small English subtitle under each label. Language toggle in the top bar: हिं / मरा / EN.

APP SHELL for worker (/worker): top bar = Toli logo (3 overlapping circles = people), language toggle, a "🔊 पढ़कर सुनाओ" (read screen) button, and an avatar stack of the worker's toli. Bottom nav = 3 tabs with a big round MIC button in the centre: 🛠 काम Kaam (/worker) · [🎙 Bolo] · 💰 पैसा Paisa (/worker/paisa) · 🛡 सुरक्षा Suraksha (/worker/suraksha).

REUSABLE "PICTURE LANGUAGE" COMPONENTS (build these carefully, they are the heart of the design):
- <RupeeNotes amount={850}/> — shows the amount in big Baloo numerals AND as small illustrated currency-note chips (500 + 100 + 100 + 100 + 50).
- <SunArc start="09:00" end="18:00"/> — a half-arc from sunrise to moon with the work window highlighted and start/end times.
- <TravelChip mode="walk|bus|train" minutes={20}/> — 🚶/🚌/🚆 icon + "20 min".
- <DurationTag type="day|week|month"/> — "1 दिन / 1 हफ़्ता / 1 महीना+" pill.
- <Nishaan shape="triangle" color="red" number={7}/> — a "match mark" inspired by Mumbai dabbawala codes: a big coloured shape with a number inside (shapes: triangle, circle, square, diamond, star; colours: red, blue, green, orange, purple). Accessible label "Red triangle 7".
- <EmployerRecord paidOnTime="23/24" complaints={0} safeForWomen /> — compact trust row: ✓ "समय पर पैसा 23/24", "0 शिकायत", 👩 "महिलाओं के लिए सुरक्षित".
- <ScamFlag reason="..."/> — red warning chip, e.g. "पैसे माँग रहा है — काम के लिए कभी पैसे न दें".
- <SpeakButton text="..."/> — 🔊 icon button; uses window.speechSynthesis with lang "hi-IN" (pick a Hindi voice if available) to read the given text.
- <MicButton/> — 72px marigold circle; states: idle, listening (pulsing rings), processing (spinner), understood, not-understood. Clicking opens a bottom sheet: live transcript bubble → "read-back" card showing what was understood as pictures (trade icon + area pin + day chip + ₹) with big ✓ हाँ and ✗ नहीं buttons. Implement a DEMO MODE: instead of real speech recognition, clicking the mic types out a scripted Hindi utterance (e.g. "कल पेंटिंग का काम चाहिए, घाटकोपर के पास, 800 से कम नहीं") with a typing animation, then shows the read-back. Put the speech logic in /lib/voice.ts with a clear TODO for wiring the real Web Speech API (hi-IN) later.

SCREEN 1 — Worker home "काम" (/worker), persona Ramesh Yadav, painter, 42, Ghatkopar naka:
- Greeting "नमस्ते रमेश जी" + 🔊.
- Hero card "कल का काम पक्का ✓" (tomorrow's booked job): employer "Meera Iyer, Powai", <Nishaan red triangle 7> very large, <RupeeNotes 850>, <SunArc 9–18>, <TravelChip bus 25>, "बयाना ₹100 मिल गया ✓" (token money received) in leaf green, and two buttons: "🔊 सुनो" and "मेरा साथी भेजो (2)" (send my toli partner).
- Standing voice request card: "🎙 ढूँढ रहे हैं: पेंटिंग · घाटकोपर के पास · ₹800+ · कल" with a soft animated searching indicator and an "edit by voice" button.
- "आज के काम" (jobs today) list of 4 picture job cards: trade icon, <RupeeNotes>, <SunArc>, <TravelChip>, <DurationTag>, <EmployerRecord>, 🔊, and one card with a <ScamFlag> ("asks for ₹500 registration fee"). Tapping a card → /worker/job/[id].
- Empty-state variant (no jobs) linking to "खाली दिन" (/worker/khaali-din) — just a link for now.

SCREEN 2 — Job + "पक्की पर्ची" Pakki Parchi (/worker/job/[id]): the digital work agreement.
- Styled like a real paper slip: off-white paper texture, perforated/zig-zag top and bottom edges, a faint watermark of the Toli logo.
- Rows as pictures: काम (trade icon + "दीवार पेंटिंग, 2 कमरे"), पैसा <RupeeNotes>, समय <SunArc>, जगह (area + <TravelChip>), पैसा कब (when paid: "आज शाम, नकद/UPI"), खाना/औज़ार (food/tools icons ✓/✗).
- EARNINGS TRANSPARENCY box: "मालिक देगा ₹850 → आपको मिलेगा ₹850 (100%) · कमीशन ₹0".
- <EmployerRecord> + a green "भरोसेमंद मालिक" (trusted employer) badge.
- Scam check result: green "सब ठीक ✓" or red flags.
- Footer: "डिजिटल समझौता · दोनों ने स्वीकार किया · समय-मुहर" (digital agreement · accepted by both · time-stamped) and small "IT Act 2000".
- Big buttons: "✓ हाँ, पक्का (1)" (accept) and "⚠ समस्या बताओ (2)" (report a problem). On accept: animate a rubber stamp "पक्का ✓" landing on the slip (rotated −8°, ink-red), then go to /worker/booked/[id].

SCREEN 3 — Booking confirmed (/worker/booked/[id]):
- Huge <Nishaan> with "आपका निशान: लाल त्रिकोण 7 — मालिक के पास भी यही निशान होगा" (your mark — the employer has the same mark).
- "बयाना ₹100 आपको मिल गया ✓ — मालिक न आए तो ये आपका" (₹100 token received — yours to keep if the employer doesn't come).
- Toli backup: avatars of 3 toli members with trade + verified days; button "बीमार हो? साथी भेजो (2)" opens a sheet to pick Suresh (painter, 48 verified days) → confirmation "सुरेश जाएंगे — मालिक को बता दिया".
- 🔊 read-aloud of the whole booking.

MOCK DATA (/lib/data): workers (Ramesh Yadav painter 42 Ghatkopar 14yrs 62 verified days rehired by 9; Suresh Patil painter 48 days; Sunita Kamble helper 34 Saheli toli; Imran Shaikh plumber; Ganesh More mason 58 "Ustad"), employers (Meera Iyer household Powai paid 23/24; Sanjay Patil contractor Vikhroli paid 41/41; one bad employer "XYZ Contractors" 2 unpaid complaints), nakas (Ghatkopar, Kurla, Vikhroli, Chembur, Dadar with usual trade counts), jobs (mix of 1 day / 1 week / 1 month, ₹700–1100), and one scam job.
```

---

## PROMPT 2: Paisa tab, Kaam Passport, Toli, Khaali Din

```
Continue the same app and design system. Add these worker screens:

SCREEN 4 — "पैसा" Paisa (/worker/paisa):
- Top: today's payment check card "₹850 मिला?" with two giant buttons "1 ✓ हाँ मिला" (leaf green) and "2 ⚠ नहीं / समस्या" (sindoor red). "Yes" → the day gets a stamp and a confetti-free subtle success animation; "Problem" → /worker/suraksha/report prefilled with this parchi.
- "मेरा काम" work record: a big circular 90-DAY RING (62/90) with text "28 दिन और — फिर कल्याण कार्ड (BOCW) का प्रमाणपत्र तैयार" and what it unlocks (icons: health, accident cover, education, tools).
- Earnings calendar for this month: each day a cell — worked (green stamp + ₹), booked (marigold), no work (grey); monthly total in big numerals.
- Stats chips: "62 पक्के दिन", "9 बार दोबारा बुलाया" (rehired by 9), "100% हाज़िरी".
- List of past Pakki Parchis (mini paper slips) with status: paid ✓ / pending / problem reported.
- Button "मेरा काम पासपोर्ट" → /worker/passport.

SCREEN 5 — Kaam Passport (/worker/passport): "आपका काम आपका है — ऐप का नहीं" (your work belongs to you, not the app).
- A beautiful ID-style card: photo, name, trade icon, years, verified days, rehired count, toli name, 90-day progress, languages, and a QR code (use a simple QR component or placeholder) labelled "स्कैन करके जाँचें" (scan to verify).
- Buttons: "WhatsApp पर भेजो", "PDF डाउनलोड", "QR दिखाओ" (fullscreen QR). Explain in one line that this works with any employer or any app.

SCREEN 6 — Toli (/worker/toli): "मेरी टोली — कोई अकेला नहीं".
- Toli card: name "घाटकोपर पेंटर टोली", 4 member avatars with trade, verified days, and phone status icons (smartphone / basic phone / no phone — "reached through toli").
- Toli types explained with icons: सामान्य टोली, सहेली टोली (women-only, pink-free — use a calm purple), उस्ताद–चेला (senior + junior pair).
- "साथी को जोड़ो" (add member by phone number) → shows "उन्हें कॉल जाएगा: 1 दबाकर जुड़ें".
- Toli feed: backups given/received ("सुरेश ने आपका काम संभाला 3 अक्टूबर"), team jobs, and a shared warning card "⚠ XYZ Contractors ने पैसे नहीं दिए — 2 साथियों ने बताया".
- Note "कोई मुखिया नहीं, कोई कटौती नहीं" (no leader, no cut).

SCREEN 7 — Khaali Din (/worker/khaali-din): shown when there's no work by 11:30. Title "आज काम नहीं मिला? दिन बेकार नहीं जाएगा".
- 3 big option cards: "₹500/दिन ट्रेनिंग" (PM Vishwakarma skill training nearby, dates, map pin), "कल्याण पंजीकरण कैंप" (BOCW registration camp — documents needed shown as photo icons), "मुफ़्त स्वास्थ्य जाँच" (free health check). Each with 🔊 and "चलो" button.
- Plus "कल का काम पहले से ढूँढो" → opens the mic.
```

---

## PROMPT 3: Suraksha tab, rights, onboarding

```
Continue the same app and design system. Add:

SCREEN 8 — "सुरक्षा" Suraksha (/worker/suraksha):
- Top: "क्या हुआ? बोलकर बताओ" big mic card (voice report) + 5 big picture tiles, each routing to the right help:
  पैसा नहीं मिला (unpaid) → India Labourline 1800-833-9020 + Samadhan portal, parchi attached, employer gets "Hisaab Lock";
  बदतमीज़ी / उत्पीड़न (harassment) → Women helpline 181 + SHe-Box portal;
  चोट लगी (injury) → 108 ambulance + BOCW claim;
  साइट पर बच्चा काम कर रहा है (child at site) → Childline 1098 / PENCiL portal, anonymous;
  ख़तरा (danger) → 112.
- Report flow (/worker/suraksha/report): step 1 choose/recognise problem (pictures), step 2 auto-attached Pakki Parchi preview, step 3 "किसको भेजें" with the route and a tap-to-call button, step 4 tracking timeline (भेजा → देखा गया → कार्रवाई) with status chips.
- WOMEN'S SAFETY section (shown for Sunita's profile; add a profile switcher in the top bar for demo): "घर पहुँची?" card — scheduled 6 PM safety call status with "1 दबाओ = सुरक्षित", and what happens if no answer ("आपकी टोली और परिवार को सूचना"); a HIDDEN SOS — long-press (2 seconds) on the Toli logo triggers a discreet full-screen "मदद आ रही है" with 112 + toli alerted (show a tiny hint in settings only); "बराबर वेतन जाँच" (equal pay check: her offer vs men's rate for same work); site facility icons (toilet, water, shade).
- YOUNG WORKERS note: "18+ ही काम कर सकते हैं ✓ (आधार से जाँचा)", and for 18–21 "नया — उस्ताद के साथ, रात की शिफ्ट नहीं".

SCREEN 9 — Haq rights (/worker/haq): "मेरे हक़" — schemes filtered for the worker's trade (painter): e-Shram (free, helpline 14434), BOCW welfare board (needs 90 days — link to the ring), PMSBY accident cover ₹20/year, PM-JAY health ₹5 lakh, PM Vishwakarma (for carpenters/masons — show as "not for painters" greyed, to show filtering). Each scheme card: what you get (₹ in big numerals + icons), cost, documents needed as PHOTO-STYLE ICONS (Aadhaar, bank passbook, photo, ration card), where to go (map pin), 🔊, tap-to-call. Add a small "अनुमानित — केंद्र पर जाँचें" (approximate — verify at centre) disclaimer.

SCREEN 10 — Onboarding (/worker/onboarding), 4 steps with a progress dots row:
1) Language: 4 big tiles with a speaking-face illustration and the language in its own script (हिंदी, मराठी, भोजपुरी, বাংলা) — tapping plays a greeting.
2) Voice profile: mic + demo transcript "मैं रमेश, पेंटर, 14 साल, घाटकोपर नाका" → read-back as pictures (🎨 पेंटर · 14 साल · 📍 घाटकोपर) with ✓/✗; fallback tap chips for trade grid (8 trade icons), years stepper, naka list.
3) Age check: "आधार QR स्कैन करें" camera-frame UI (mock) → "18+ ✓ सत्यापित"; show the under-18 blocked state as a variant ("माफ़ करें, 18 साल से कम उम्र वाले काम नहीं ले सकते" + Childline info).
4) Toli: "टोली में जुड़ें या बनाएं" → done screen "स्वागत है, कोई अकेला नहीं".
```

---

## PROMPT 4: employer web app

```
Continue the same app and design system, now the EMPLOYER side (/employer). Employers are literate smartphone/laptop users: English primary with Hindi accents, denser layout, still friendly. Responsive: desktop (two-column) and mobile. Top nav: Find workers · My bookings · (for contractors) Register. Persona switcher: Meera Iyer (household, Powai) / Sanjay Patil (contractor, Vikhroli).

SCREEN E1 — "What's the job? / क्या काम है?" (/employer): a grid of illustrated PROBLEM tiles (leaking tap, wall painting, switch not working, damp wall/seepage, broken door, tiles cracked, deep cleaning, shifting/loading). Selecting one shows a result card: "You need: Painter · 2 days · Fair rate ₹750–900/day (govt minimum ≈ ₹850)" + "Find painters for tomorrow" button.

SCREEN E2 — Find (/employer/find): left = a stylised SVG map of Mumbai east-suburbs with naka pins (Ghatkopar, Kurla, Vikhroli, Chembur, Dadar) showing "usually 14 painters · 7–10 AM"; right = list of available workers AND tolis for tomorrow, sorted by verified days + show-up rate. Filters: trade, day, single worker vs whole toli, "Saheli toli (women)". No star ratings anywhere.

SCREEN E3 — Worker card (/employer/worker/[id]): photo, name, trade, years, big stats "62 verified days · Rehired by 9 employers · 100% show-up", "Backed by a toli of 4 — backup guaranteed" with avatars, badges "ID verified ✓ · 18+ ✓", a voice-intro player ("Hear Ramesh introduce himself" — plays an English translation via speechSynthesis en-IN), past work photos grid (placeholders), and the Kaam Passport QR.

SCREEN E4 — Book (/employer/book/[id]): a stepper.
1) Terms form: work description, date, start/end time, place, pay per day (with a live fair-rate meter: below minimum = red warning, fair = green), when you'll pay (same evening / end of week), food/tools toggles, and "Pledge: no one under 18 at my site" checkbox (required).
2) TRANSPARENT PAY summary: "You pay ₹850 → Ramesh receives ₹850 (100%) · Commission from worker: ₹0 · Bayana ₹100 is part of the wage".
3) Pay ₹100 bayana — mock UPI sheet (UPI app icons, "Pay ₹100") with copy: "If you cancel or don't show up, the worker keeps it."
4) Confirmation: the shared <Nishaan red triangle 7> huge — "Look for this mark at the naka", the Pakki Parchi preview marked "Digital agreement · accepted by both", and a SOCIETY PASS card (worker photo, ID ✓, today's job, time window, QR) with "Share with watchman on WhatsApp".

SCREEN E5 — My bookings (/employer/bookings): cards for tomorrow/today/past. Include: a BACKUP NOTIFICATION modal — "Ramesh is unwell. His toli partner Suresh Patil (painter, 48 verified days) is coming instead. [Accept] [Decline]"; a "Mark as paid ₹850 (Cash / UPI)" button that stamps the parchi; "Would you rehire?" yes/no; "Rehire in one tap". Show a HISAAB LOCK state for the bad employer persona: red banner "Booking locked — a worker reported unpaid wages of ₹1,700 on 12 Oct. Settle to unlock." Show the "Bharosemand Malik ✓" (trusted employer) badge for good employers with a tooltip "Paid on time + safe for women → priority with top workers".

SCREEN E6 — Contractor register (/employer/register, Sanjay only): auto-filled attendance & wage register table (worker, dates, days present, wage, paid ✓) with "Export (Labour Codes 2025)" and "Issue 90-day work certificate" buttons per worker; a "Book whole toli (5 painters, 1 week)" CTA.
```

---

## PROMPT 5: demo layer (landing, split screen, basic-phone simulator)

```
Continue the same app and design system. Add the DEMO LAYER for judges:

LANDING (/): hero with the Toli logo, tagline "कोई अकेला नहीं — Nobody stands alone at the naka", one-line value prop "Other apps help workers find a job. Toli makes sure the job happens, the money comes, and they get home safe." Three big entry cards: "I'm a worker / मैं कामगार हूँ" (/worker/onboarding), "I'm hiring / काम देना है" (/employer), "Live demo" (/demo). Below: 3 promise columns (🛠 Kaam guaranteed · 💰 Paisa protected · 🛡 Suraksha), and a strip "Works on any phone: Smartphone · Basic phone · No phone (via toli)".

SPLIT-SCREEN DEMO (/demo): left = the worker app rendered inside a realistic phone frame (390×844); middle = a BASIC-PHONE SIMULATOR; right = the employer app. They share state through the store so the story flows live:
1) Employer books Ramesh and pays bayana → the basic phone RINGS (shake + ringtone-style animation), shows caller "Toli" and subtitles while speechSynthesis (hi-IN) speaks: "कल का काम मिला. विक्रोली, आठ सौ पचास रुपये, सुबह नौ बजे. बयाना सौ रुपये आपको मिल गया. आपका निशान: लाल त्रिकोण, सात. हाँ के लिए 1 दबाइए." The keypad's "1" and "2" are clickable; pressing 1 updates both other screens (booking confirmed, Nishaan shown).
2) A "Ramesh is sick" demo button → worker presses 2 on the basic phone → backup modal appears on the employer screen → accept → Suresh assigned.
3) Evening: employer marks paid → basic phone rings "₹850 मिला? 1 हाँ, 2 समस्या" → 1 → worker app's 90-day ring animates 62→63.
Basic-phone simulator design: a chunky keypad phone (rounded rectangle, small monochrome-green screen, physical-looking keys 0–9 * #, call/end keys), screen shows the call and big subtitle text.
DEMO CONTROLS: a small floating "Demo" panel (collapsible) with step buttons 1–6 and a "Reset" button; keyboard shortcuts 1–6 trigger the steps; a toggle "Voice: Demo mode / Live mic".
Make sure everything works without internet except optional speech, and that npm run build passes with no type errors.
```
