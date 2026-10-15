# RESEARCH: Beyond the Waiting Line

_Started 2026-10-15 10:22 IST. The problem statement, verbatim, is in `HANDOFF.md`. Read `PLAYBOOK.md` for how we use this._

## 0. Close reading (before any search)

**Who it's for (two sides):**
- **Workers:** "hawkers" at roadside hiring points: plumbers, carpenters, electricians, painters, sweepers, labourers. In Mumbai these hiring points are called *nakas*, and the workers are naka workers or day labourers. Strictly, "hawker" means a street vendor, so the brief uses it loosely.
- **Employers:** "people who need reliable workers [and] don't know where to look": households, small contractors and shopkeepers.

**Pain phrases in the brief, and what each one means:**

| Phrase | What it tells us |
|---|---|
| "whether the right person happens to approach **that day**" | Work depends on chance and on being physically present: daily uncertainty. |
| "despite **years of experience** … no résumé, digital profile, or network" | Their skill exists, but nobody can see it. |
| "little access to information about **welfare schemes and worker protections**" | There's a rights gap as well as a jobs gap. |
| "people who need reliable workers **don't know where to look**" | Employers have a discovery and trust problem too. |
| "**without abandoning their existing way of working**" | **Key constraint:** we must complement the naka, not replace it. |
| "**irregular employment**" + "**limited digital literacy**" | These two must drive every design decision. |
| "**not** another conventional job portal or home-services marketplace" | No Apna or WorkIndia clone, and no Urban Company clone. |
| "starting point, **not a checklist**" | They reward creativity beyond the four points. |

**Literal asks: must-hit checklist.** The final app must visibly cover every one:
- [ ] **Find work:** nearby **daily-wage, short-term and longer-term** jobs, with **location, hours and pay** easy to understand without reading.
- [ ] **Showcase skills:** **trade, experience and availability**, with no résumé and no advanced digital literacy needed.
- [ ] **Trust:** job **and payment** terms clear **before** anyone commits, plus help **spotting suspicious listings**.
- [ ] **Rights:** **welfare schemes, documents, registration channels and grievance routes**, in a clear and accessible form.
- [ ] **Connect with employers.** The employer side exists, even if it's light.
- [ ] **Fits the existing way of working,** meaning the naka.
- [ ] **Judged on:** UI/UX, inclusive design and frontend execution. Mock data is fine.

**Implicit needs (asked for in spirit, not in words):**
- **Irregular income:** idle days, planning ahead, and building a work history over time.
- **Two-way trust:** workers need to trust employers (payment), and employers need to trust workers (reliability, skill).
- **Low literacy:** voice, icons, numbers, regional languages, low-end or shared phones, and possibly a helper using the app on someone's behalf.
- **Bridging physical and digital:** the worker still stands at the naka, so their digital presence should work *there*.

## 0b. Requirements: a line-by-line reading (v2, 10:32)

| What the brief says | What it really means for our design |
|---|---|
| Title: "**Beyond the waiting line** · connecting hawkers to **better** employment" | Move past *waiting and chance*. "Better", not just "more": fairer pay, safer work, longer-term work, protection. |
| Theme: **Inclusive Design · Employment · Digital Empowerment** | These are the three judging lenses. *Empowerment* means the worker owns something digital (an identity or a record) instead of depending on middlemen. |
| "wait at roadside hiring points and markets" | The naka is the physical starting point. We design *around* it. |
| "livelihood depends on whether the right person **happens** to approach **that day**" | A matching problem that resets every day. Fix the randomness. |
| "**years of experience** … no résumé, digital profile, or network" | The experience exists but nobody can see it, and the worker has no network to vouch for them. |
| "little access to information about **welfare schemes and worker protections**" | An information gap: schemes *and* legal protections (minimum wage, grievance routes). |
| "people who need reliable workers **don't know where to look**" | **There's an employer side:** discovery *and* reliability. |
| "find work, showcase their skills, **connect with employers**, and access their rights" | Four verbs. "Connect" means both sides have to be in the product. |
| "**without abandoning their existing way of working**" | **A hard constraint:** complement the naka, don't replace it. No "stay home and wait for app bookings". |
| 1. "nearby **daily-wage, short-term, and longer-term** jobs … **location, hours, and pay** easy to understand" | Three job lengths must be visible, and three attributes must make sense without reading. |
| 2. "**trade, experience, and availability** without a résumé or advanced digital literacy" | Three profile attributes, with icons and voice instead of typing. |
| 3. "job **and payment** terms clear before **anyone** commits … spot **suspicious listings**" | "Anyone" means both sides agree to the terms up front. Payment terms are named separately, so cover *when* and *how* the worker gets paid. Listings get a safety check. |
| 4. "**welfare schemes, documents, registration channels, and grievance routes** … clear, accessible" | Four kinds of rights content, presented as steps rather than a directory. |
| "**not** another conventional job portal or home-services marketplace" | No Apna, Urban Company or Justdial clone. |
| "human-centred … **irregular employment** and **limited digital literacy**" | Design for idle days, shared phones, voice, icons and local languages. |
| "UI/UX, inclusive design, **frontend execution** over backend · mock data fine" | Polish and accessibility will be scored, not architecture. |
| "a starting point, **not a checklist**" | Cover all four points, then go *beyond* them with one novel idea. |

## 1. Research findings
_From 4 parallel research agents (10:22–10:35)._

### 1A. Naka context and the real problem

**Terminology.** A "hawker" is a street vendor, covered by the Street Vendors Act and PM SVANidhi. The people in the brief are **naka / labour chowk workers**, who are covered by **BOCW + e-Shram**. Saying "naka worker / kaamgar" in the UI and pitch shows we know the domain.

**How nakas work:**
- Workers gather **from about 7 AM until noon**. One worker estimates **about 500 workers per naka a day** at Kapurbawdi in Thane.
- Workers stand with their tools while small subcontractors (*chhota thekedars*) and mukadams pick them. There's no shade, water or toilets.
- **Workers are picked on age, looks, strength and migrant status.** One worker dyes his beard to look younger.
- Hiring runs on word of mouth, and low literacy makes workers depend on middlemen.

**Work and pay:**
- **8–10 days of work a month** (Thane women, ₹500–800/day). Skilled men get ₹700–1,000/day. Delhi: about 15 days/month, roughly ₹7,500/month. Mumbai after COVID: 10–15 days.
- PLFS 2023-24: **19.8% of workers are casual labourers**. Average urban casual pay is ₹516/day; men ₹537, **women ₹364**.
- Indicative Mumbai day rates (rough): helper ₹384, painter ₹611, mason ₹664, plumber/electrician ₹718, carpenter ₹778.

**Pain points:**
- **Wage theft is the #1 grievance.** India Labourline handled 3,600+ cases worth ₹8 crore disputed, of which **only ₹2.1 crore (about 26%) was recovered**. In Kerala, 98% of 1,093 complaints were about unpaid wages. A typical case: the subcontractor hires and then disappears.
- Unsafe work: the Borivali scaffolding collapse (2024, 3 dead), and many deaths that are "quietly settled".
- **Women** are hired last and face police harassment. Only about 15–20 are seen at a Thane naka.
- **Welfare:** the last BOCW registration drives at nakas were in 2018. The **90-day certificate is "the real bottleneck"** because naka workers have no fixed employer. e-Shram has **30.68 crore registered (53.68% women)**, but those are sign-ups, not benefits received.
- **Migrants:** 43% of Mumbai's urban area are migrants, mostly from UP and Bihar. Languages: Hindi, Bhojpuri/Awadhi and Marathi, plus Bengali, Odia and Kannada.

**Digital access:**
- GSMA 2022: 81% of men and 72% of women own a phone, but **only 48% of men and 29% of women own a smartphone**.
- Phone sharing is 20% among women vs 5% among men.
- Migrant workers **all watch YouTube** and use WhatsApp to *call or send videos, not to text*.

**Employers** (UK proxy data; no Indian survey found):
- 62% worry the worker won't show up.
- About half re-hire someone they've used before. Under 4% use trade websites; word of mouth dominates.

_Sources: Citizen Matters (Thane nakas), IDR / Indus Action (Delhi chowks, Feb 2026), IJURR (Navi Mumbai), Counterview, PLFS 2023-24 (PARI), infralens.in (rough rates), Scroll + The Leaflet (India Labourline), South First (Kerala), Al Jazeera (Tarapur middlemen), Free Press Journal (Mumbai site deaths), ClearTax (MahaBOCW), PIB (e-Shram), YUVA policy brief, GSMA via BOOM, Pew 2019, arXiv 2002.12387 (migrants and YouTube), Which? / HVP (employer trust)._

### 1B. Existing solutions and where they fail

| Product | What it does | Why it fails naka workers |
|---|---|---|
| **Apna** | Profile + chat with recruiters | Mostly grey-collar jobs (66% of applications are sales, BPO or telecalling; 18% blue-collar), paid monthly, smartphone and text required. Fee scams got bad enough that it launched "Apna Safety" (Sep 2025) to score recruiters asking for registration fees or deposits. |
| **WorkIndia / Job Hai** | Blue-collar listings | Scammers buy listings, move workers to WhatsApp, then charge "verification" or "interview" fees. Delhi police seized about 100 résumés and Aadhaar cards from a Job Hai racket. |
| **Vahan** | WhatsApp + voice AI recruiter | Built for bulk delivery and logistics hiring. The worker is a lead in a funnel. No day-wage trades and no rights. |
| **Babajob** (sold to Quikr) | No-résumé voice profile, SMS alerts, missed call, "jobs near home" | Right design, but growth was paid for and died when the spending stopped. Blue-collar hiring runs on **recommendations**. |
| **Digital Labour Chowk / Rojgar** (closest competitor) | Construction day-wage app in 15 languages, "digital resume", help centres | Still app-first and built around a résumé, centred on contractors. A student startup, BigBrick, is building the same thing. |
| **Urban Company** | Home services | Background check, skill test, kit loans (₹25k), 25–35% commission, ID blocked if the rating falls below about 4.7. Only top-tier workers get in. |
| **Justdial / Sulekha** | The worker pays for leads | Fake or far-away leads, the same lead sold several times, no refunds. |
| **e-Shram** | National register of unorganised workers (₹2 lakh accident cover) | Needs a smartphone, a mobile number linked to Aadhaar, and a bank account. **0 of 400 registered workers in a Gurugram study got any benefit**: registration happened, entitlement didn't. |
| **NCS** | Government job portal | Formal jobs. Placements aren't tracked. |
| **MahaBOCW** | Construction worker welfare board | **Registration must be renewed every year with a 90-days-of-work certificate**, which workers who move between contractors can't get. Middlemen charge up to 200× the ₹20 fee. |
| **Haqdarshak** | Assisted scheme checker (7,500+ schemes, Yojana Card) | Works because of a **human agent**, who charges a fee. Not linked to work. |
| **Mobile Vaani** | Missed call → IVR (automated phone menu) callback → voice posts | Accessible, but separate from jobs. |
| **Jan Sahas** | Migrant helpline (1800 2000 211, check it's current) | Acts only after a problem happens, and **the worker has to prove they worked**. |
| **Instawork** (US) | Shift marketplace | Worth borrowing: pay, hours and place shown upfront, the employer pays after the shift, and workers have a visible reliability score. |

**Field context:**
- Delhi chowks run from about 7 AM to noon, with no shade, water or toilets, and older workers get passed over.
- Thane naka workers get **8–10 days of work a month at ₹500–800 a day**.
- At Tardeo naka, about 150 workers compete for a handful of jobs.
- **Transport eats about 25% of informal earnings.**

**THE GAP (agent 2):** Every product asks the worker to leave the naka and *become someone else*: a résumé holder, an app user, a rated "partner", a form-filler. **None turns today's day of work into the proof that unlocks tomorrow's rights**: the BOCW 90-day certificate, evidence of wage theft, scheme eligibility.

**What other teams will build (avoid):**
1. "Urban Company / Uber for labourers": a map of workers, booking, stars.
2. An Apna clone: job board, filters, language toggle, chatbot.
3. A scheme-finder quiz bolted on as a separate "Rights" tab.
4. A voice-to-résumé or AI profile with a QR "digital ID".
5. An "AI scam detector" badge.

**Agent 2's insights:**
- **Proof of work is the hidden currency.** A two-sided "employer confirms day + pay" handshake builds a work ledger, and that one mechanic covers all 4 pillars.
- **Design for the naka, not instead of it:** in person, 7 AM to noon, built on recommendations.
- **#1 scam signal: the worker is asked to pay.** Make "you never pay to get work" a hard rule.
- **Stars punish workers. Vouching and rehire counts build trust.** Let workers rate employers ("paid on time").
- **Registration is not entitlement.** Show immediate ₹ benefits, the next step, and "Ramesh from your naka got this".

_Sources: Babajob (The Ken, IIMA), Apna Safety (Business Today 25 Sep 2025), Job Hai racket (IANS Jun 2025), Digital Labour Chowk (YourStory Jun 2025), BigBrick (Kashmir Reader May 2026), Urban Company (BOOM, MediaNama), e-Shram (Scroll, IIPS brief, Zenodo Gurugram study), MahaBOCW renewal rules (mahabocw.in), Haqdarshak (Acumen), Jan Sahas, Instawork, IDR (Delhi chowks), Citizen Matters (Thane nakas), Scroll (Mumbai nakas). Full URLs are in this session's transcript._

### 1C. Rights, schemes, minimum wages, scams
_Use this as the in-app data. Items marked (unverified) need a softer wording in the app, e.g. "approx." or "check at the centre"._

| Scheme | Benefit | Who | Documents | How | Cost / helpline |
|---|---|---|---|---|---|
| **e-Shram** (UAN card) | A national ID that is the gateway to other schemes. **The card pays no money itself**; fake "₹1,000 payment status" sites exist | Age 16–59, unorganised worker, not a taxpayer | Aadhaar, Aadhaar-linked mobile, bank account | eshram.gov.in or a CSC | Free · **14434** |
| **MahaBOCW** | Medical, accident/death, maternity, marriage, housing, education, safety and essential kits, toolkit (about ₹5k, unverified) | Age 18–60, **≥90 days of construction work in the last 12 months** | Form-V, **90-day certificate** (contractor letterhead or the municipal body), age, ID and address proof, photos, Aadhaar-seeded bank account | mahabocw.in, then an appointment at a facilitation centre; **renew yearly** | Fees waived from 13 Aug 2025 |
| **PM Vishwakarma** | Toolkit ₹15,000, ₹500/day training stipend, loans of ₹1L then ₹2L at **5%** | Age 18+, **18 trades including carpenter and mason** (not plumber, electrician or painter) | Aadhaar, bank, mobile | CSC / pmvishwakarma.gov.in | Free |
| **PM-SYM** | ₹3,000/month pension from 60 | Age 18–40, income ≤₹15k/month | Aadhaar, savings account | CSC / maandhan.in | ₹55–200/month (₹55 at 18), matched by the government |
| **Atal Pension Yojana** | ₹1,000–5,000/month at 60 | Age 18–40, not a taxpayer | Bank, Aadhaar | Bank / post office | From ₹42/month |
| **PMJJBY** | ₹2L life cover | Age 18–50 | Bank, Aadhaar, nominee | Bank auto-debit | **₹436/yr** |
| **PMSBY** | ₹2L accident death or disability, ₹1L partial | Age 18–70 | Same as PMJJBY | Bank | **₹20/yr** |
| **PM-JAY + MJPJAY** | **₹5L per family per year** of cashless hospital care | Maharashtra: Yellow / AAY / Annapurna / Orange ration card | Ration card, Aadhaar | Empanelled hospital, CSC | Free · **14555** |
| **ONORC** | Ration from any shop in India; family back home keeps its share | NFSA ration card holder | Ration card + Aadhaar biometric | Mera Ration app | Free · **14445** |
| **PM SVANidhi** | Loans of ₹15k → ₹25k → ₹50k, UPI credit card | **Street vendors** (true "hawkers") | Vending certificate / ULB letter, Aadhaar | Bank / portal | Free |

**Minimum wages (approximate, revised twice a year):**
- All four Labour Codes took effect on 21 Nov 2025, including the Code on Wages with a national floor wage.
- **Maharashtra construction Zone I, from Jan 2026:** unskilled ₹22,094/month, semi-skilled ₹23,174, skilled ₹24,689. That's about **₹850–950/day**.
- General scheduled employment, Zone I unskilled: about ₹575/day.
- So most naka rates (₹500–800) are **below the construction minimum**. The Fair-Wage Meter will flag this, which is the truth.

**Grievance routes:**

| Problem | Where to go |
|---|---|
| Unpaid wages | **Samadhan portal** (samadhan.labour.gov.in), online, on UMANG or at a CSC |
| Wage theft or injury: counselling, mediation, legal aid | **India Labourline 1800-833-9020** (Aajeevika Bureau) |
| Free legal aid | **NALSA 15100** |
| Emergency | **Police 112** |
| Cyber fraud | **1930** |
| Women's helpline | **181** |
| Child labour | **1098** |
| Overseas job fraud | **1800-11-3090** |

**10 scam red flags** for checking a listing:
1. Asks the worker for **any money** before work starts.
2. Pay **below the zone's minimum wage**, or too good to be true.
3. No employer name, address or verifiable phone number.
4. Contact only through WhatsApp or Telegram.
5. Vague hours, duration, or when and how pay comes.
6. Asks for Aadhaar, OTP, bank PIN or original documents up front.
7. Pressure: "decide today".
8. A private or odd meeting place.
9. An overseas job with no eMigrate licence.
10. Payment terms not written down.

_Sources: e-Shram FAQ, housing.com and mahabocw.in, myScheme (PMV, APY), Vikaspedia (PM-SYM), MJPJAY, DoT (14445), newsonair (SVANidhi), WageIndicator, KSA&K, Outlook (Labour Codes), Samadhan manual, Aajeevika, NALSA, MEA, Business Today (Apna Safety), NASSCOM community, Jobrise._

### 1E. The employer side (India / Mumbai)
_No Indian survey breaks down hiring by employer type or by how employers find workers. The figures below come from a Redseer market study, the National Consumer Helpline and a CAG audit; everything else is qualitative._

**Who hires:**
- Contractors and **mukadams**, who act as "part recruiter, part advance lender, part site supervisor". They supply builders *and* people renovating homes or offices. Mumbai nakas see 500,000+ casual workers. **Over 92% of Mumbai construction workers have no legal employment relationship** with the builder.
- **Households** are the big offline market. Home services are worth about **₹5.1 trillion (FY25)**, but **under 1% is booked online** (about 3.2% in the top 8 cities). Redseer calls the informal segment weak on "availability, pricing, quality and post-service support".

**How they find workers today:**
- They go to the naka (about 7:30–11 AM), call a known mukadam, or ask around. Word of mouth dominates. Proxy data: about half prefer someone they've hired before.
- Apps proved there's demand for urgent help: UC Insta Help passed **50k bookings a day**, and Snabbit does **40k+ jobs a day**, promising "verified" pros within 10–15 minutes.

**Pain points:**
- **No-shows and unreliability.** Contractors cite "absenteeism, effort, quality" (Berkeley Haas). Customers pay an advance and the worker disappears.
- **Platform failures.** Complaints against UC to the National Consumer Helpline (Jan–Jul 2025): 97 delayed service, 52 not delivered, 10 overcharging. Customers also report silent cancellations with a ₹200–300 fee kept, and prepayment-only booking.
- **Trust and theft at home.** A Mumbai woman lost **₹4 lakh in gold** after a NoBroker cleaning booking, and police asked whether the worker was verified. In a counter-case, Thane police **recovered a mangalsutra within an hour** using Snabbit's registration data.
- **Housing societies are gatekeepers.** They ask for worker ID or police verification, gate passes, fixed hours (about 9–1 and 2–6, no Sundays) and a renovation NOC. Mumbai Police verification takes **15–30 days**.
- **No fair-rate anchor.** Skilled day rates vary from ₹700 to ₹1,200, and there's no trusted public rate card.
- **Seasonal labour flight.** In May 2026, Mumbai projects stalled as workers went home. One site lost 18 of 20 workers.

**Contractor duties under the law:**
- **BOCW cess:** 1% of construction cost, *including renovation*. The owner and contractor are jointly liable.
- The **90-day certificate is signed by the employer or contractor**. A CAG audit found **6 contractors certified 6,178 workers while actually employing 133**, so certificate fraud is real.
- **Labour Codes** (in force 21 Nov 2025, central rules 8 May 2026): appointment letters, wages within 7 days, muster rolls and wage registers. Principal employers carry vicarious liability. The direction is digital registers and Shram Suvidha.

**Employer-side insights:**
1. **Show trust before booking.** Every worker card gets an ID/verified badge and a **"society-ready pass"** (ID, photo, trade, today's job).
2. **Measure reliability.** Show the **show-up rate and "rehired by N"** instead of stars.
3. **A transparent rate card per trade and area,** with the agreed price locked in. No prepayment or cancellation fees.
4. **One-tap rehire,** team booking for jobs that need several trades, and an urgent "available now nearby" mode.
5. **Every completed job becomes a digital work record.** The worker gets proof towards the 90-day certificate and welfare. The contractor gets an **automatic muster roll and wage register** for Labour Codes compliance. **Genuine** day-by-day records also counter certificate fraud.

_Sources: Berkeley Haas IBSI, Citizen Matters, PARI (Mahabubnagar migrants), Project MUSE, PrimeInvestor / Groww (Redseer via the UC filing), Inc42 (Insta Help), TechCrunch (Snabbit), Voxya, National Consumer Helpline dashboard, ConsumerComplaints.in, Trustpilot, Free Press Journal (NoBroker theft, Thane recovery), NoBrokerHood (society rules), SalaryBox (verification), infralens.in, rentu.in, The CSR Journal, Bar & Bench (BOCW cess), CAG 2025 audit, mahabocw.in, LKS and Treelife (Labour Codes)._

### 1F. Wider landscape and feature gap matrix

**⚠ Maharashtra already has a government naka app:** "Maharashtra Naka Kamgar" by MAHABOCW (https://maharashtranakakamgar.mahabocw.in/), privacy policy dated Jul 2026, so it's live.
- What it does: workers build a profile of skills, experience and education; employers post jobs and search for nearby workers; login is by OTP.
- **Gap:** it's a text-profile job board for construction only. Welfare is a separate system, there's no layer for terms or scam safety, and it assumes a smartphone.
- **Mumbai judges may know it. We must NOT build another naka job board.**

**Other solutions:**

| Type | Solution | Gap |
|---|---|---|
| Government | Nagaland LabourChowk app (Sep 2026): chowk online + schemes | Only for registered workers (a CAG audit found 0 of 69 registered) |
| Government | Kerala Athidhi: migrant ID | Built for surveillance, no jobs |
| Government | Delhi registration vans | Registration only |
| Government | Odisha / Jharkhand migrant helplines | Only act after something goes wrong |
| Government | UP Rojgaar Sangam, Telangana / Karnataka labour cards | Portals |
| Government | MH welfare board registration | Needs 90-day proof and a trip to one of 366 taluka centres, losing a day's wage |
| NGO | Aajeevika Shramik Sahayata Kendras (including Mumbai) | In person, doesn't scale, no digital proof |
| NGO | YUVA helpline | Only acts after wages are stolen |
| NGO | Hamal Panchayat (Pune) | Collective wage board for one trade, offline |
| NGO | LabourNet / on-site skill certification | Needs a formal certification event, invisible at the naka |
| Startup | BetterPlace | CV-based monthly jobs |
| Startup | The Mestri (Karnataka) | Regional marketplace |
| Startup | Sevikr | Contractor-owned attendance and payroll: **the contractor owns the record, not the worker** |
| Concept | MazdoorMitra (MIT Solve) | Shared contract and wage record, concept only |
| International | **Lynk (Kenya)** | Verified trades, loans, a "digital career identity", but a 10% commission and top tier only |
| International | **Kandua (SA)** | Quotes, invoices, portfolio; a marketplace |
| International | GetNinjas (Brazil) | Workers pay for leads, an anti-pattern |
| International | **Fairwork's 5 principles** (fair pay, conditions, contracts, management, representation) | A ready-made trust checklist |
| International | **US day-labour hiring halls (NDLON)** | They formalise the physical corner: **wage theft is 9% at the hall vs 38% on the street corner** (Casa Latina, Seattle) |
| International | **Jornaler@ (US, 2016–17)** | Workers log hours and wages, report wage theft, and warn others about bad employers. **The closest thing to our idea, likely inactive, and not in India.** |

**Feature gap matrix** ("employer trust" means the employer can trust the worker):

| Solution | Find work | Skill without résumé | Terms / scam safety | Rights | Works with the naka | Low-literacy | Employer trust |
|---|---|---|---|---|---|---|---|
| Apna / WorkIndia / Job Hai | ✔ | ~ | ~ | ✘ | ✘ | ~ | ~ |
| Urban Company | ✔ | ~ | ✔ | ✘ | ✘ | ✘ | ✔ |
| Justdial / Sulekha | ~ | ✘ | ✘ | ✘ | ✘ | ✘ | ~ |
| MH Naka Kamgar / Digital Labour Chowk | ✔ | ~ | ✘ | ~ | ✘ | ✘ | ~ |
| e-Shram / MahaBOCW | ~ | ✘ | ✘ | ✔ | ✘ | ✘ | ✘ |
| Haqdarshak / helplines | ✘ | ✘ | ~ | ✔ | ~ | ✔ | ✘ |
| Aajeevika / YUVA centres | ~ | ~ | ~ | ✔ | ✔ | ✔ | ✘ |
| Lynk / Kandua | ✔ | ✔ | ~ | ~ | ✘ | ✘ | ✔ |
| NDLON hiring halls | ✔ | ~ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Jornaler@ | ✘ | ✘ | ✔ | ~ | ~ | ~ | ✘ |

**What NO solution does:**
1. Nobody in India digitises the naka *where it stands*. Everyone moves it onto the phone.
2. Nobody builds a worker-owned work record out of jobs actually done.
3. Nobody locks the terms before work in a voice or icon format, or warns workers about employers who don't pay.
4. Nobody links jobs to rights: the jobs done prove the 90 days.
5. Nobody offers employer-side trust without a commission.

_Sources: maharashtranakakamgar.mahabocw.in, Governance Now, Deccan Herald, Morung Express, GKToday, IDR, Odisha labour directorate, UP Rojgaar Sangam, ClearTax, Aajeevika, YUVA, Wikipedia (Baba Adhav), National Skills Network, People Matters, Asianet, Product Hunt (Sevikr), MIT Solve, GSMA (Lynk), BFA (Kandua), Fairwork, NDLON, NBC News (Jornaler@)._

### 1D. Inclusive design for low-literacy users

**Research:**
- **Medhi, Sagar & Toyama (MSR India, 2007)** built a text-free **job-search UI for domestic labourers** in Bangalore, almost exactly our problem. What worked: semi-abstract graphics, **voice feedback on every element**, and an always-visible help button.
- A short video of someone *like the user* using the app greatly improved task completion. The barriers were fear and mistrust, not only reading.
- **Medhi, CHI 2009** (58 users): text UIs are "unusable" for first-time low-literacy users. Pain points were **hierarchical menus, scroll bars, soft keys, typing text, jargon**. Use **flat, linear flows**.
- **Numeracy is partial but common.** Pair numbers with icons and audio.
- Google's Next Billion Users voice playbook: **voice makes low-literacy users self-sufficient**.
- **Assisted use is the norm.** Sambasivan et al. (CHI 2010) describe proximate enabling, proximate translation and surrogate use, so design for two people at one screen. Shared phones are normal. Digital Sakhis connect villagers to schemes, a model for a "Naka Mitra".

**Case studies:**
- **Mobile Vaani:** missed call → free callback → voice posts.
- **UPI 123PAY:** feature phones, IVR, sound-based payment.
- **Paytm Soundbox:** trust comes from *hearing* "₹500 received".
- **Vahan:** WhatsApp, mixed-language voice.
- **Google Bolo:** offline, on-device speech, a helper character.
- **Digital Green:** peer videos, "people like me", 44% adoption vs 11% for conventional methods.
- **Khatabook:** WhatsApp payment reminders, so the user avoids the awkward conversation.

**Trust and scams:**
- Upfront "registration" or deposit fees over UPI are the classic scam.
- Recruitment-app data: **90.9% of labouring jobs in Delhi pay below the ₹711/day minimum wage**, which justifies a wage-floor check.

**Open space:** no HCI study of Mumbai nakas and no QR worker-ID pilots were found.

**Agent 4's 15 ideas (★ = wow factor out of 5):**

| # | Idea | ★ |
|---|---|---|
| 1 | Naka QR Badge (printed card; the contractor scans it at the naka) | 5 |
| 2 | Kaam Diary: work history that builds itself as employers confirm jobs | 4 |
| 3 | Voice profile in 30 seconds (speech fills in trade, years and area chips, then reads them back) | 4 |
| 4 | Proof-of-work photo wall with voice notes | 3 |
| 5 | Ustaad Vouch (peers and employers vouch by scanning the QR) | 4 |
| 6 | Pay-in-pictures job card (₹ note visuals, sun-to-moon hours arc, travel minutes, 🔊 read-aloud) | 5 |
| 7 | Fair-Wage Meter (traffic light against the minimum wage) | 4 |
| 8 | Scam Shield red flags with a spoken warning | 4 |
| 9 | Pakka Deal handshake (both sides confirm the terms as an icon card with voice playback; it becomes evidence) | 5 |
| 10 | Kamai Calendar (earnings heatmap, lean weeks, schemes) | 3 |
| 11 | Haq Navigator ("What happened?" picture tiles lead to steps and a helpline) | 4 |
| 12 | Scheme eligibility in 3 taps | 3 |
| 13 | Naka Mitra helper mode (one helper registers many workers, with voice consent) | 4 |
| 14 | Naka Board ("today: 14 painters at Ghatkopar naka", "I'm here today" tap) | 5 |
| 15 | Missed-call and offline PWA | 3 |

_Sources: MSR India (Medhi 2007, ICTD 2007, CHI 2009, ToCHI), Google NBU voice playbook, IBM spoken web, Sambasivan CHI 2010, The Better India (Digital Sakhi), GSMA (Mobile Vaani), Razorpay (UPI 123PAY), The Hard Copy (Paytm Soundbox), Inc42/CRN (Vahan), Business Call to Action (Babajob), Google blog (Bolo), ONE (Digital Green), Groww (job scams), The Construction Index (90.9% below minimum wage). Full URLs are in this session's transcript._

## 2. Synthesis

**Why this problem statement exists.** Apna, Urban Company and e-Shram all exist, yet they ask the worker to leave the naka and *become someone else*: a résumé holder, a smartphone user, a 4.7-star "partner", a form-filler. The organisers explicitly ruled out a "conventional job portal or home-services marketplace" because those are exactly the things that already failed these workers.

**Ranked problems:**

| # | Problem | Evidence |
|---|---|---|
| **P1** | **Wage theft and unclear terms.** Work is agreed verbally with no record. | #1 grievance: ₹8 crore disputed, 26% recovered. 98% of Kerala complaints were unpaid wages. The worker has to *prove* they worked. Scams always start with "the worker pays". |
| **P2** | **Work depends on chance; many days are idle.** | 8–15 days of work a month, a 7–11 AM window, about 500 workers at one naka, transport eats about 25% of earnings. Employers don't know where to look and rely on word of mouth. |
| **P3** | **Skills are invisible, and bias fills the gap.** | Picked on age and looks (the dyed beard). No résumé. Star ratings punish workers. |
| **P4** | **Registration isn't the same as getting benefits.** | e-Shram: 30 crore registered, but 0 of 400 got benefits in Gurugram. The **BOCW 90-day certificate is the bottleneck**. Middlemen charge 200× the fee. Schemes are listed but never explained by trade. |
| **P5** | **Digital exclusion.** | Only 48% of men and 29% of women own a smartphone. Phones are shared. Low literacy. WhatsApp is used for voice and video, not text. |

**What the organisers asked for, and what's implied:**
- **Explicit:** the 4 pillars, plus keeping the existing way of working, irregular employment, and limited literacy.
- **Implicit:**
  - Proof of work, which is what links all 4 pillars.
  - Two-way trust: workers rate employers on "paid on time".
  - Assisted use.
  - Bridging the physical and digital: the worker is still at the naka.
  - Visible fairness: the minimum wage vs the naka rate.

**THE GAP:** No product turns **today's day of work into the proof that unlocks tomorrow's rights**: the BOCW 90-day certificate, wage-theft evidence, scheme eligibility, and a reputation that beats age and appearance bias. Three of the four agents arrived at this independently.

**What most teams will build (avoid):**
1. Uber or Urban Company for labourers.
2. An Apna-style job board with a chatbot.
3. A separate scheme-finder tab.
4. A voice résumé or QR "digital ID".
5. An "AI scam detector" badge.

## 2b. Gaps and solutions from both sides (v2, 10:40, after the user asked for this structure)

**Root gap in one line:** every app moves the naka onto the phone, and nobody gives the *work itself* a record.

**Worker-side gaps, and our solution for each:**

| # | Gap | Solution |
|---|---|---|
| W1 | Work depends on luck. If you're not at the naka at 7 AM, nobody can find you (8–15 days of work a month). | **Aaj ka Kaam** (Today's work): nearby jobs as picture cards showing ₹, a sun arc for hours, walk or bus minutes, a 1 day / 1 week / 1 month+ tag, and 🔊 read-aloud. A toggle for "I'm at the naka" or "available from home". |
| W2 | Years of skill but no proof, so contractors pick by age and looks. | A **printed QR naka card** (photo + trade icon). The profile is built by voice and from photos of past work, and shows verified days and the rehire count. |
| W3 | Deals are verbal, so wages get stolen (₹8 crore disputed, 26% recovered), and the worker has to prove they worked. | **Pakki Parchi** (USP): a receipt for every job. |
| W4 | No way to tell a fair job from a fake one (most naka pay is below the minimum; scams ask the worker for fees). | A **Fair-Wage Meter** (vs the minimum wage and the local rate) and **red flags** ("asks you for money" = stop). |
| W5 | Rights are locked behind proof they don't have (the 90-day certificate, English portals, middlemen). | A **Haq** (rights) screen organised by situation: "What happened?" tiles, documents shown as pictures, tap-to-call helplines, schemes filtered by trade, and the 90-day ring. |
| W6 | Apps need a smartphone, typing and English (48% of men and 29% of women own a smartphone). | Voice in Hindi and Marathi, icons, several profiles on one shared phone, **Naka Mitra** helper mode, and a voice-call confirmation for basic phones. |

**Employer-side gaps, and our solution for each:**

| # | Gap | Solution |
|---|---|---|
| E1 | Nowhere to look except the naka gamble, and the apps are expensive. | Nakas near me, with who's available today by trade. **One-tap rehire.** Post a job to a naka. |
| E2 | Can't judge skill or reliability; no-shows are the #1 complaint. | The worker card shows **verified days, show-up rate and "rehired by 9"** instead of stars. |
| E3 | No fair-price anchor: haggle or get overcharged. | A **rate card per trade and area**, with the price locked in the receipt. |
| E4 | Letting a stranger into the home; housing societies demand ID (police verification takes 15–30 days). | An ID-verified badge and a **society pass** to show the watchman. |
| E5 | No record after the job: disputes, and no memory of whom to rehire. | Receipt history. |
| E6 | Contractors face paperwork under the 2025 Labour Codes (muster rolls, wage registers, 90-day certificates). | All of it is **generated automatically from the receipts**. |

## 2c. THE USP: Pakki Parchi, "a receipt for every day of work"

**Tagline: *Kaam pakka. Paisa pakka.*** ("The work is confirmed. The pay is confirmed.")

How it works:
1. **Agree (10 seconds at the naka):** the employer scans the worker's card, and both see the same picture receipt: work, ₹, hours, place, when pay comes. The worker *hears* it read aloud, by voice call on a basic phone, and confirms.
2. **Pay:** after the work, the employer taps "Paid ₹800" and the receipt gets a stamp.
3. **Grow:** each stamped receipt adds a day to the worker's **Kaam Diary**, which becomes:
   - **skill proof:** "62 verified days · rehired by 9";
   - **welfare:** a ring filling to 90 days, which then produces the BOCW certificate;
   - **protection:** if the worker isn't paid, the receipt is the evidence for a one-tap complaint.

Why it wins:
- **Novel:** everyone, even Maharashtra's government app, builds somewhere to *find* jobs. Nobody records the *work*. The only precedent is a likely-inactive US app (Jornaler@).
- **Easy to understand:** everyone knows a parchi or raseed from the kirana shop, the ration shop or the hospital. There's nothing new to learn.
- **Respects the naka:** the worker still stands there and the employer still walks up. We only add 10 seconds.
- **Employers win too:** a clear price, no disputes, a verified history, and compliance paperwork for free.
- **Looks good without being flashy:** a paper receipt with a perforated edge, a rubber-stamp animation and a ring filling up.
- **Evidence:** US hiring halls that formalised the street corner cut wage theft from 38% to 9%.

**Demo moment:** "Paid" → the stamp thuds → the day flies into the diary → the ring reaches 90/90 → "Welfare card unlocked" and the certificate appears.

## 2d. How it works without a smartphone (the user asked this at 10:45)

**Principle: put the smartphone burden on the side that has the smartphone.**
- Employers (contractors, households) almost always have one, and they get the benefits (rate card, verified history, registers).
- The worker's record belongs to their **card number, not their phone**, so a lost, shared or basic phone loses nothing.

| What the worker has | How they use it |
|---|---|
| **Smartphone** (48% of men, 29% of women) | The full app: voice, icons, Kaam Diary, Haq. |
| **Basic phone** (81% of men, 72% of women own *some* phone) | Receives an **automatic voice call in their language** that reads the receipt aloud ("Press 1 for yes"), plus an SMS receipt. A **missed call to a number** gets a call back: "62 days pakka, 28 to go" and today's jobs near their naka. (Proven models: UPI 123PAY, Mobile Vaani, Babajob IVR, Paytm Soundbox.) |
| **No phone at all** | The **printed QR card** is enough. The worker confirms on the employer's phone with one big green ✔ and hears it read aloud. A **Naka Mitra** (naka leader, NGO volunteer, nearby shopkeeper or literate co-worker) has the app and can check the diary, register workers and help with schemes. |

**For the demo:** a **basic-phone simulator** on screen. When the employer creates a receipt, a basic phone in the corner "rings" and the receipt is read aloud in Hindi with speech synthesis. The worker presses 1. This shows the inclusive design in about 10 seconds. A printable **QR card** view (print CSS) goes with it.

### 2d-v2. SIMPLIFIED (10:50): the user found the printed QR card and the "no phone" case confusing
- **The worker's ID is their mobile number.** A basic phone is enough, and about 8 in 10 workers have at least one. **No printed card is needed.**
- **Flow:** the employer enters the worker's number, or taps them in the "available near you" list. The worker gets a voice call that reads the receipt aloud and presses 1 to accept. After the job, the employer taps "Paid" and the worker gets a call: "₹800 received, 63 days confirmed."
- **Optional extra, not required:** show the worker's QR on screen if they have a smartphone (it doubles as the employer's "society pass" to show the watchman). We won't build printed cards.
- **No phone at all** (an edge case): a Naka Mitra helper registers them with a family member's number. **Mention this in the pitch only; don't build it.**
- **Demo:** two screens side by side, the employer's smartphone and the worker's basic phone. The basic phone rings and reads the receipt aloud in Hindi.

### 2d-v3. Workers with NO phone at all (10:55): research mode, the user asked for a real answer

**How big is the group?**
- No survey covers naka workers specifically.
- Nationally (GSMA 2022), **about 1 in 5 men and 1 in 4 women have no phone**, so this is mostly an *inclusion of women* question.
- Phone sharing is common: 20% of women vs 5% of men (Pew).

**Precedents for serving people who have no device:**
- **US worker centres / hiring halls:** workers sign in on a list in person. The hall keeps the records, verifies skill and reliability, and settles complaints. It's free (LA Day Labor Resource Centers). This is the **physical place acting as the system**.
- **India's banking correspondents and ration shops:** people with no phone are served on *someone else's device* (the agent's or the shop's) and identified by fingerprint.
- **Aadhaar face authentication (FaceRD):** a person is identified by a live photo on *any Android phone camera*. It has been used **500+ crore times by about 200 organisations** since 2021. A private app needs UIDAI approval, so treat it as future integration via MAHABOCW / e-Shram, and simulate it in the prototype.
- Haqdarshak agents and Digital Sakhis: a human helper with a device.

**Solution: "If the worker has no phone, the naka becomes his phone."** It answers three questions:

| Question | Answer |
|---|---|
| **How does an employer find him?** | Same as today: at the naka. The **Naka Mitra** marks him "here today", so he also shows in the "available near you" list. |
| **How does he agree to the receipt?** | **On the employer's phone, in front of him.** The receipt is read aloud in Hindi, he taps a big green ✔, and the app takes his **photo as his "signature"**. A copy also goes to the Naka Mitra. |
| **How does he see his days, pay and welfare progress?** | He **asks the Naka Mitra**, who opens his diary by name and photo and plays it aloud. The record is tied to *him* (name + photo, later Aadhaar face), not to a phone. If he buys a phone one day, the record moves to it. |

**Who is the Naka Mitra?** One person per naka with a smartphone:
- a worker the naka trusts;
- an NGO field worker who already visits Mumbai nakas (YUVA, Aajeevika);
- or the tea or paan stall owner who is there every morning.

The Mitra also helps with welfare forms (the BOCW 90-day certificate), like Haqdarshak agents do.
- **Open question:** what's the Mitra's incentive? Options: an NGO stipend, a welfare-board facilitation fee, or more footfall for the stall. **Unverified; don't claim it in the pitch as fact.**

### 2d-v4. The worker is completely alone: no phone, no Naka Mitra (11:00)

**Principle:**
- **Every job already has one person with a smartphone: the employer.** So the work always passes through a phone. The worker only has to prove *who he is*, and he already carries proof the government gave him.
- **The record goes where it's needed. The worker doesn't have to carry it.**

**Fact check: the Aadhaar Secure QR.**
- It is printed on **every form of Aadhaar** (letter, PVC card, e-Aadhaar printout) and contains the **photo, name, date of birth and address, signed by UIDAI**. It can be verified **offline** by scanning it, using UIDAI's free scanner app.
- It does **not** contain the full Aadhaar number, only the last 4 digits and a timestamp.
- UIDAI tells verifiers to check the QR rather than accept a photocopy.
- **Limit:** a plain QR scan is *display-only* and can't be saved. Storing records linked to Aadhaar needs registration as an OVSE (Offline Verification Seeking Entity) under the 2025 Aadhaar regulations. So in a real rollout this runs through MAHABOCW or e-Shram as a registered verifier, and the **prototype simulates it**.
- Sources: UIDAI's dos and don'ts for OVSEs (uidai.gov.in), Surepass, Gridlines, Superkalam (Aadhaar app offline sharing, Dec 2025).
- Adult Aadhaar coverage is about **99%** (GKToday, secondary source; UIDAI's saturation reports measure total population).

**Flow for a worker who is completely alone (Ramesh):**
1. **Hire:** the employer scans Ramesh's **Aadhaar card QR**, and his photo appears, so the employer knows it's him. If Ramesh doesn't have the card on him, the employer takes his photo and enters his name, village and birth year.
2. **Agree:** the receipt is read aloud on the employer's phone, Ramesh taps a big green ✔, and the photo is his signature.
3. **Pay:** the employer taps "Paid".
4. **Ramesh's record reaches him without a device:**
   - **Next employer:** when they scan his Aadhaar, his record shows up: "62 verified days · rehired by 9". His reputation follows him.
   - **Welfare board:** at the MAHABOCW facilitation centre (he has to go in person anyway), the officer looks up his verified days. **No contractor letter needed for the 90 days.**
   - **Unpaid:** India Labourline (toll-free 1800-833-9020) or Samadhan looks up his receipts as evidence.
   - **To hear it himself:** he calls a **free toll-free number from any phone** (a co-worker's or a shopkeeper's), says his name and birth year, and hears his days read aloud.

**Honest limits:**
- **It only works if the employer uses it.** If they don't, nothing changes from today. Employers need their own reason to use it: the rate card, verified workers, the society pass, automatic paperwork.
- The Aadhaar rules above.
- With no Aadhaar on him, identifying him by photo, name and village is weaker.

### 2d-v5. Finding work when the worker is alone with no phone (11:05)

**Honest truth:** a worker with no phone and no helper can only be reached *in person*. We don't fight that; it's the brief's "existing way of working". **We make the in-person place work better: "the naka is his address".**

**How the employer finds him:**
1. **Naka Map:** "Ghatkopar naka · usually 14 painters, 6 masons · 7–10 AM, Mon–Sat". It's built from receipts, since every receipt records the naka and trade. This answers the brief's "people who need reliable workers don't know where to look": *go to this naka at this time*.
2. **At the naka, choose fairly:** scanning a worker's Aadhaar QR shows "62 verified days · rehired by 9", so experience beats age and looks bias.
3. **Rehire without a phone:** "Ramesh is usually at Ghatkopar naka, 7–10 AM", worked out from where his past receipts were made, with his consent. The employer goes there.
4. **Book ahead in person:** at the end of a job, a multi-day receipt ("same site, next 5 days") covers short-term and longer-term work without any phone.

**How the worker finds work:**
1. He keeps going to his naka, but **more employers now come there**, because the map sends them.
2. His **record gets him picked** over bias.
3. Optional: he **borrows any phone and calls the free toll-free number** to hear "jobs near Ghatkopar naka tomorrow", then presses 1 to accept.
4. Repeat employers book him again face to face with multi-day receipts.

**The cycle that grows it:** more receipts make the naka map more accurate, which sends more employers to the naka, which means more receipts.

**Honest limit:** the fully unconnected worker still has to be physically present to be found, just like today. But he's **never worse off**, and every in-person hire now gives him fair terms, a record and a reputation.

## 2e. RIVAL-AI TEST (11:25): is our USP really unique? **No.**
The user asked: "what makes you sure no other team will get this from AI?" We gave the bare problem statement to **5 fresh AI agents** (Sonnet ×2, Opus ×2, Haiku), phrased the way other teams would ask. They had no access to our research. (The command-line Claude wasn't signed in, so we used subagents; they only saw the pre-PS HANDOFF snapshot with no idea in it.)

**How many of the 5 suggested each idea:**

| Idea | Count |
|---|---|
| Deal card agreed before work, read aloud (**all 5 even used the word "Pakka"**) | **5/5** |
| Work record / stamps / verified jobs (= our receipt diary) | **5/5** |
| "Paid?" after the job, plus a complaint with the deal attached as evidence | **5/5** |
| Picture pay (₹ notes, sun arc, travel minutes) plus 🔊 read-aloud | **5/5** |
| Scam radar / fair-wage meter | **5/5** |
| Rights tab with picture questions and a document checklist | **5/5** |
| QR skill card scanned at the naka | 4/5 |
| Naka check-in / live naka board | 4/5 |
| Basic-phone missed-call simulator | 4/5 |
| Peer and employer vouches | 3/5 |
| High-contrast "sunlight mode" | 3/5 |
| Assisted / Saathi mode; split-screen demo; workers rate employers | 2/5 each |
| Work days → BOCW 90-day proof (Opus) | 1/5 |
| "Kaam ka Mausam" naka forecast; No-text mode; fair queue | 1/5 each |

**Verdict:** about 90% of our SOLUTION.md is what *every* AI-assisted team will get. **These are table stakes.** We must still build them, because the brief asks for them, but they won't win on their own.

**What NONE of the 5 suggested (0/5), all from our research:**
- **worker groups and a backup guarantee;**
- empty days (no work);
- women workers;
- a housing-society / watchman pass;
- the employer's legal paperwork (Labour Codes 2025), i.e. *why* contractors would use the app;
- that the government already runs a naka app;
- age bias.

### 2f. PROPOSED NEW USP: **"Toli": nobody stands alone at the naka** (awaiting the user's decision)

**Insight:**
- Every app, and all 5 AIs, treats the worker as **one person competing alone**.
- In reality, naka workers **live with people from their hometown and stand in language groups** at the naka (Citizen Matters, Thane nakas).
- Today only the **mukadam** (middleman) uses these groups, and he takes a cut.

**What it is:** a worker's trusted group of 3–6 co-workers, digitised.

**For employers** (the #1 complaint is no-shows; the brief literally says "people who need **reliable** workers"):
- **Toli guarantee:** if your worker can't come, his saathi (partner) with the same trade and verified days comes instead. The employer sees who is coming and can decline.
- **Book a whole toli** for jobs that need several workers, in one tap.

**For workers:**
- A job is never lost when he's sick; it goes to his saathi, and next time comes back to him.
- When one member gets a 5-person job, the toli works together.
- Members vouch for each other's skills, and **warn each other about employers who don't pay**.
- **No phone? His toli is his phone:** a saathi with a smartphone accepts for him. This solves the "alone with no phone" problem without needing a Naka Mitra.
- **Women can form women-only tolis** and go to jobs together, for safety.

**Easy for the worker:**
- *Make a toli:* one member adds co-workers' numbers, and each gets a call: "Suresh wants you in his toli. Press 1."
- *Hand over a job:* on the receipt call, "Can't come? Press 2 to send your saathi."

**Uniqueness evidence:**
- 0 of 5 AIs suggested it.
- A web search found **no labour app with crew booking or a backup guarantee** (Labour Chowks app, the MH Naka Kamgar app and Digital Labour Chowk are all individual matching).

**Risks and answers:**
- 5 AI runs are not every team, so it isn't a 100% guarantee.
- A member might send an unskilled friend: the backup must have the same trade and verified days, and the employer can decline.
- The toli might become a new mukadam: keep it flat, with no leader cut.

**The receipt stays as the base layer,** but our version links to the **90-day welfare certificate** (1/5) and the **employer's legal paperwork** (0/5).

**Other 0/5 options (weaker, single-sided):**
- **Khali Din:** empty days become paid training (PM Vishwakarma ₹500/day) or a "go register today" day. Helps workers only.
- **Society Pass:** helps employers only, and it's small.

_Sources: 5 rival-AI transcripts (this session, 11:20–11:25); Citizen Matters (Thane nakas: hometown housing, language groups); PARI (mukadam role); mwm.ai (Labour Chowks app listing); maharashtranakakamgar.mahabocw.in; biharhelp.in (planned Labour Chowk Facilitation Centres)._

### 2g. Voice agent "Bolo Kaam": feasibility and design (11:35)

**Tech verdict:** it works, with two risks: internet and noise in the hall.

**Speech recognition:** Chrome's Web Speech API with `hi-IN` (Marathi `mr-IN` should work; **test it on the day**).
- It **needs internet**, because audio goes to Google's servers. Chrome's on-device mode has no confirmed Indian-language packs.
- Hinglish words come back in Devanagari ("पेंटिंग"), so our dictionaries need **both scripts**.
- Settings: `continuous=false`, `maxAlternatives=3`, and run the parser over every alternative.

**Speech output:** "Google हिन्दी" is available in Chrome on Windows. There's **no Google Marathi voice**, so Marathi uses the Hindi voice or pre-recorded clips. Wait for the `voiceschanged` event before picking a voice.

**Alternatives considered:**

| Option | Verdict |
|---|---|
| Bhashini | Needs registration and 2 API calls per request, quotas are unclear, CORS problems. Too risky for 6 hours. |
| Sarvam AI (Saaras v3 `codemix`) | ₹1,000 free credits, but the API key is exposed in the browser. Optional upgrade only. |
| AI4Bharat models | Need a server. Skip. |

**Demo safety:**
- Bring a **phone hotspot and a lapel or wired mic**.
- **Fallbacks:**
  1. typed text into the same parser;
  2. tap chips (trade, area, day icons);
  3. a hidden **Demo mode** where keys 1–6 inject scripted transcripts with the listening animation.

**Precedents:**

| Product | What it shows |
|---|---|
| Jugalbandi (MS + AI4Bharat, WhatsApp voice) | Worked because it lived inside WhatsApp, and gave "one answer at a time". |
| Kisan e-Mitra | **49 fixed query categories** with template answers, i.e. a closed set of intents, not free chat. |
| Vahan | Voice AI recruiting over **phone calls**, 1M+ placements, Hindi/English. |
| CGNet Swara | IVR voice forums. Oral users prefer speaking. |

**UX rules:**
1. **Push-to-talk** (one big mic, with a sound when listening starts and stops).
2. Show the live transcript as it comes in.
3. **Read it back with pictures** (trade icon, area, day, ₹) plus ✓ / ✗. Ask for **explicit** confirmation before accepting a job or filing a complaint.
4. If something is missing, ask for that one thing ("कौन सा इलाका?", which area?). After 2 failures, switch to tap chips.
5. Accept mixed languages and any word order.
6. Say and show numbers together ("आठ सौ / ₹800").
7. **Privacy:** don't speak wages owed aloud by default.

**Intents (parsed without an LLM, using keyword dictionaries in both scripts plus fuzzy place matching):**

| Intent | Example utterance |
|---|---|
| FIND_JOB | "मुझे पेंटिंग का काम चाहिए, घाटकोपर में, कल" / "kal plumber ka kaam hai kya" / "मला उद्या घाटकोपरला रंगकाम पाहिजे" |
| ACCEPT / DECLINE | "हाँ, पहला वाला" / "nahi" / "हो, चालेल" / "नको" |
| SET_AVAILABILITY | "मैं कल और परसों खाली हूँ" |
| BUILD_PROFILE | "मैं राजू, दस साल से पेंटर, कुर्ला, रोज़ 800" |
| REPORT_UNPAID | "सेठ ने तीन दिन का पैसा नहीं दिया" |
| WELFARE | "मज़दूर कार्ड कैसे बनेगा" |
| HELP / REPEAT | "फिर से बोलो" / "परत सांगा" |

**Dictionaries:**
- Trades: painter = पेंटिंग/पेंटर/रंग/रंगकाम/पुट्टी; plumber = नल/पाइप/प्लंबर; mason = मिस्त्री/गवंडी; carpenter = बढ़ई/सुतार; labour = हेल्पर/बिगारी/लोडिंग.
- Time: आज = today, कल/उद्या = +1 day, परसों/परवा = +2 days.
- Places: Mumbai areas, matched with Levenshtein distance ≤2.

**How to make it DIFFERENT** (every team will have voice-first search and read-aloud):
1. **Bolo acts for the worker.** "कल के लिए काम ढूंढ लो, कम से कम ₹800" ("find me work for tomorrow, at least ₹800") becomes a **standing task**. Overnight it gathers offers, and in the morning says "3 offers, best ₹900 Ghatkopar. हाँ?" It's an *agent with a goal*, not a search box.
2. **Bolo speaks for the worker to the employer.** It plays his spoken profile in the employer's language, negotiates within his floor price, and saves both sides' spoken "हाँ" as a **timestamped voice agreement**, which becomes evidence if he isn't paid.
3. **Works over a normal phone call** (IVR / missed call), so no smartphone is needed. One phone can serve a whole toli.

**Name:** "Bolo" is already used by Google Read Along and Bhashini's "Bolo India", so use **"Bolo Kaam"**.

_Sources: MDN Web Speech API, Chromium blink-dev "Intent to Ship", W3C list, Hackernoon (Android Hinglish test), Chrome developers blog (speech synthesis), Bhashini ULCA GitHub, Sarvam docs and pricing, AI4Bharat GitHub, Microsoft News (Jugalbandi), MediaNama, Wadhwani AI and Apolitical (Kisan e-Mitra), NITI Frontier Tech (Vahan), ICTD'12 (CGNet Swara), UC Berkeley Sahay._

### 2h. Broadened research (11:40): new 0/5 USP ideas

**Worker life, money and inclusion:**
- **Shrinking work:** one Mumbai worker's income fell from ₹6k to ₹2k a month even as day rates rose. Another gets 5–6 days a month.
- **Age:** a mason in his late 50s is "rarely picked", and one worker dyed his beard with ink to look younger.
- **Women** earn 30–40% less and face exploitation by contractors. Subcontractors keep 60–100% margins.
- **Unused BOCW cess: about ₹70,000 crore nationally.**
- **Advance bondage:** a ₹30k advance grew through interest and "fines for being sick", and workers were never shown their accounts (IJM).
- **Moneylenders** charge 5–10% a month in Mumbai (PARI). Maharashtra's **bhishi** savings circles are a lender of last resort.
- **Injury** costs ₹23,491 out of pocket. BOCW pays ₹5 lakh for a death at work, but only to registered workers.
- **⭐ SEWA:** Karmika training raised the share of women getting 21–30 days of work a month from 26% to 40%. **The Rachaita co-op raised wages from ₹170 to ₹350, partly because EMPLOYERS PREFER HIRING GROUPS** (WIEGO). This is strong evidence for Toli.
- **PM Vishwakarma:** ₹500/day training stipend, a ₹15k toolkit, loans at 5%.
- **The Labour Ministry launched a Digital Labour Chowk app in Nov 2025:** another job portal to beat.

**Employer adoption:**
- Households **don't know which trades they need, or in what order.** A bathroom runs plumbing → pressure test → waterproofing → curing → tiling, and leaks if done out of order.
- **Costing is confusing:** a painter is ₹600–1,500/day or ₹8–25/sq ft, materials are 55–65% of the bill, and **surprise extras appear on site**.
- **Society gate apps** (MyGate) give daily help a code; the guard decides.
- **Contractor tools:** HajariBook (photo + GPS muster roll) and attendance apps that track advances. Digital Labour Chowk charges a ₹499–1,999 subscription, and **70% of daily-wage pay is cash**.
- Monsoon seepage, and 80%+ of pre-1990s buildings "in distress".
- **Insight:** the tools are either *directories* or *muster rolls*. **Nobody turns "something is broken" into "the right crew, in the right order".** That planning is what the mukadam really sells.

**New ideas (all 0/5 in the rival test).** Scores are ease / novelty / buildable, each out of 5.

| Idea | What it is | Scores |
|---|---|---|
| **Khaali Din** | At 11:30, if not hired, one button turns the day into ₹500 training (PM Vishwakarma), a BOCW registration camp or a health check | 5/4/5 |
| **Ustad–Chela** | An older master paired with a young helper, so age becomes a premium | 4/5/4 |
| **Udhaar Ghadi** | An open ledger of mukadam advances; each day worked cuts the balance; new fines flagged | 4/5/5 |
| **Ghar Chalo** | A season planner: save towards the trip home, and a "wapas aaunga" date holds the worker's place | 4/5/4 |
| **Naka Bhishi** | A peer savings circle for emergencies, instead of a moneylender | 3/4/4 |
| **Chot Kavach** | Injury SOS tied to today's site and employer, plus the compensation claim | 5/4/4 |
| **Saheli Shift** | Women booked as a pair, site facility icons, a ₹ gap meter | (overlaps Toli) |
| **Dikhao-Batao** | Tap or photo the *problem* (leak, damp wall), get trades, order, days, cost | 4/4/5 |
| **Kaam Relay** | A multi-trade timeline: "plumber → wait for curing → tiler on Thursday" | 4/5/4 |
| **Saman Parchi** | A picture materials list, priced, bought at the naka hardware shop | 4/4/5 |
| **Wapas Aaunga** | A 30-day comeback promise (a warranty without Urban Company prices) | 4/4/5 |
| **Ghar ka Haal** | A home health card from the worker's notes, which rebooks him | 3/5/4 |

_Sources: Citizen Matters (Thane), Scroll (Mumbai nakas), IDR (Delhi chowks), USAID, IJM, Ashoka, PARI (street vendors' credit, Mahabubnagar migrants), RePEc (bhishi), PMC (injury cost), Deccan Herald, the420.in (BOCW), FinDev Gateway (remittances), **WIEGO (SEWA Karmika and Rachaita)**, myScheme (PMV), YourStory, Studio Matrx and Team-BHP (bathroom sequence, surprise extras), MyBuilder, Berger and Asian Paints (costing), Inc42 and MyGate help (gate apps), Jaago Re (police registration), App Store (HajariBook), AppBrain, Powerplay, MIT Solve (DLC), Petpooja, Asian Paints (waterproofing), Track2Realty._

### 2i. Cross-domain mechanisms (11:45) and the v2 pick

**Mechanisms from other fields:**
- **Dabbawala codes:** colour + dash + number marks let non-readers route lunch boxes across Mumbai. The error-rate figures are popular claims, not audited.
- **Mathadi boards (Maharashtra, 1969):** a three-party board sets wages, employers pay a levy, and **registered workers get "disappointment money" on days with no work.**
- **Chicago street corners:** a collectively agreed base wage ($12 vs the $8.25 minimum). It breaks down when job-seekers mob a car.
- **Grameen:** repayment above 95%. Randomised trials show **future access to credit, not joint liability**, drives repayment. This supports dynamic incentives: a *trust ladder*.
- **Korea's Gada app:** construction day labour where workers **pick tomorrow's job the night before** and are paid 100% the same day.
- **Japan's yoseba:** dawn recruiters skimmed wages. Lesson: make any cut visible.
- **Booking deposits:** about **60% fewer no-shows** (OpenTable, a vendor claim).
- **Khata:** a shared memory both sides accept.
- **Paytm Soundbox:** audio confirmation.
- **M-Pesa:** trust grows through a uniform agent experience.
- **⭐ Gojek:** drivers ignored the official shelters and kept stopping where their friends gathered. **Don't replace the naka.**
- **ROSCAs:** peer enforcement works.
- **Duolingo streak freeze:** forgiving missed days keeps users active.

**New 0/5 ideas** (scores are ease / novelty / buildable):

| Idea | What it is | Scores |
|---|---|---|
| **Milan Nishaan** | A dabbawala-style match mark (colour + shape + number, e.g. red ▲ 7) on both phones; worker and employer match at the crowded naka | 5/5/5 |
| **Bayana Booking** | A ₹50–100 token from the employer when booking for tomorrow; the worker keeps it if the employer cancels; it counts towards the wage if he works | 4/4/4 |
| **Seedhi + Hisaab Lock** | An employer trust ladder; **unpaid dues lock new bookings**, which prevents wage theft *before* it happens | 5/5/4 |
| Naka Kitty | A pooled levy | 3/5/3 |
| Mausam Rate | A floor rate per trade and season, set collectively by the naka | 4/4/4 |
| Chutti-safe streak | A reliability streak with leave tokens | 4/3/5 |

_Sources: Outlook Traveller and MetaFilter (dabbawalas), Vidhi Legal and India Code (Mathadi), NDLON, World Bank and Indiana State (Grameen), App Store and NextUnicorn (Gada), Wikipedia (Doya-gai), Elavon and SimpleERB (deposits), Finns n Marks (khata), The Hard Copy (Soundbox), IFIP (M-Pesa), detik (Gojek), Monash and Cenfri (ROSCAs), Duolingo blog._

**v2 SYNTHESIS (proposed; see SOLUTION.md v2):** the USP is **"Tomorrow's work, guaranteed from both sides"**, built on the Toli backup, Bayana, Milan Nishaan, and the Bolo Kaam voice agent.
- Supporting features: Hisaab Lock, Khaali Din, and Ustad–Chela as a type of toli.
- The receipt, scam check and rights screens stay as **table stakes**.
- **⚠ Do NOT name the product "Pakka":** all 5 rival AIs used that word.

### 2j. Worker-protection layer (12:00, the user's idea): grievances, employer history, women, minors

**Legal facts:**
- **Child labour:** the Child & Adolescent Labour Act (2016 amendment) **bans all work under 14**, and bans 14–18 year olds in the *hazardous* occupations in its Schedule (Part A). **We could NOT confirm whether construction is in Part A,** so don't claim it.
- **Our safe policy:** the platform is **18+ only**, matching the BOCW board's own age rule (18–60). Check age from the date of birth on the Aadhaar QR.
- **Reporting child labour:** the **PENCiL portal** (Ministry of Labour; complaints go to the District Nodal Officer; being revamped into a unified child / bonded / women labour portal), or **Childline 1098**, which is being integrated with **ERSS 112** ("One Nation One Helpline", phased from 2023).
- **Women:** the POSH Act. For the unorganised sector, small workplaces, or a complaint *against the employer*, the complaint goes to the **district Local Committee**. **SHe-Box 2.0** (shebox.wcd.gov.in, revamped Aug 2024) takes online complaints from women in **organised and unorganised** sectors in 22–23 languages, with tracking; 777 Local Committees are listed (Mar 2026). File within 3 months, extendable by 3 more. Women's helpline **181**, emergency **112**.
- The Code on Wages bars gender discrimination in pay. (Already noted: women earn 30–40% less at chowks.)

**Evaluation:**
- ✅ **Fits the brief:** pillar 4 (rights and grievance routes), pillar 3 (trust), and the theme "Inclusive Design".
- In the rival test, **women's safety (0/5) and protecting minors (0/5) are unique.** Grievance reporting (5/5) and employer rating (2/5) are table stakes.
- ⚠ **Risk 1: if it becomes a "complaint app", employers won't join, so there are no jobs.** Fix: reward good employers ("Bharosemand", trustworthy, badge), not just punish bad ones.
- ⚠ **Risk 2: employer history from open accusations invites fake complaints and defamation.** Fix: **history comes only from facts**: receipts (paid / not paid), bayana kept, and complaints **filed through a completed job**.
- ⚠ **Risk 3: we can't see children at a site.** Promise only: "no one under 18 is ever hired through us, and reporting takes one tap". Don't promise to "stop child labour".

**Design ("Suraksha", the safety layer):**
1. **Employer record on every job card**, from facts: "Paid on time 23 of 24 · 0 open complaints · ✓ Safe for women (rated by women workers only)", read aloud.
2. **Bolo: report by voice.** "सेठ ने पैसे नहीं दिए" ("the boss didn't pay") / "मेरे साथ गलत हुआ" ("something wrong happened to me") goes to the right route, with the receipt attached and status tracked.

   | Problem | Route |
   |---|---|
   | Unpaid | Labourline 1800-833-9020 / Samadhan, plus Hisaab Lock |
   | Harassment | 181 / SHe-Box / Local Committee |
   | Injury | 108 + BOCW claim |
   | Child at site | 1098 / PENCiL |
   | Danger | 112 |
3. **Women:**
   - **Saheli Toli:** go in pairs or women-only groups.
   - **Nishaan** check: she knows exactly which employer is coming (stops fake employers and trafficking).
   - **"Ghar pahunchi?" ("did you get home?") check:** at 6 PM her phone gets a call, "safe? press 1". No answer means her toli and family are alerted. Works on basic phones.
   - A **discreet SOS** (a hidden tap or code word) to 112 and the toli.
   - An **equal-pay check** against the men's rate for the same work.
   - Site facility icons (toilet, water), from women's reviews.
4. **Minors and young workers:**
   - 18+ check at sign-up and at hiring (Aadhaar date of birth).
   - Employers confirm "no one under 18 on site".
   - A one-tap anonymous report of a child at a site (1098 / PENCiL).
   - **First-job protection for 18–21 year olds:** paired with an Ustad in a toli, no night shifts.
5. **Positive side:** the "Bharosemand Malik" (trustworthy employer) badge means more and better workers choose that employer.

_Sources: officerspulse.com (PENCiL), labour.tn.gov.in (child labour FAQ), Rajya Sabha PQ 267 (13 Feb 2025), tilakmarg.com / childlineindia.org (Act and Schedule), impriindia, ssrana, elearnposh, thepeoplesboard, anantamias, sansalegal (SHe-Box 2.0 and Local Committees), vikaspedia and childlineindia.org (1098 → 112 integration)._

## 3. Concepts (first pass, 10:27; replaced by the structure in 2b/2c)
_The concept the user picks gets recorded here and in HANDOFF._

### Concept A: "Pakka": every day of work becomes proof (RECOMMENDED)
**The core primitive is the *Pakki Parchi* (confirmed work slip).**
- **Before work:** the employer scans the worker's **printed QR naka card** (no app needed on the worker's side). Both sides confirm the terms as a picture card read aloud: ₹ shown as notes, a sun-to-moon arc for hours, travel minutes, when and how pay comes, food and tools. The **Fair-Wage Meter** and **Scam Shield** check it first.
- **After work:** the employer taps "paid", and a stamped day lands in the worker's **Kaam Diary**.
- **What the diary unlocks:**
  - **Skills proof:** "62 verified days · rehired by 9 employers · 14 years painter", with photos, beating age bias.
  - A **BOCW 90-day ring:** "62/90: 28 days to unlock ₹ benefits", which then **generates the work certificate** and the document checklist.
  - **Unpaid?** One tap starts a grievance with the slip attached (Samadhan / Labourline).
- **Find work:** a voice-and-picture "Aaj" (today) screen with nearby jobs and an "I'm at the naka" toggle.
- **Employers:** see nakas and verified workers, post a parchi, and confirm payment.
- **Pillars covered:** P1 ✔ (slip + evidence + red flags), P2 ✔ (today's jobs + naka board), P3 ✔ (verified days + rehires + vouches), P4 ✔ (90-day ring → certificate → schemes by trade), P5 ✔ (voice, icons, QR card, shared phone, helper mode).
- **Demo wow:** scan the card → the slip is confirmed → the employer taps paid → the day stamp flies into the diary → the BOCW ring fills to 90/90 → "🎉 You can now register: benefits unlocked", and a certificate appears.

### Concept B: "Naka Live": the digital naka board
A live map of nakas: "Ghatkopar naka · 14 painters here now". Workers tap "I'm here today" by voice. An employer posts a job *to a naka*, a **Naka Mitra** (helper) relays it, and workers accept by missed call (simulated). Rights live in a helper-run kiosk view.
- **Covers:** P2 strongly; P1, P3 and P4 weakly.
- **Wow:** a pulsing live map.
- **Risk:** it's close to "Uber for labourers", and it doesn't solve wage theft.

### Concept C: "Bolo Kaam": a text-free voice companion
The whole app is a voice-and-pictogram assistant in Hindi, Marathi and Bhojpuri, with jobs as picture cards, spoken scam warnings, and "What happened?" rights tiles.
- **Covers:** P5 strongly, and P2 and P4 in part.
- **Wow:** talking to the app.
- **Risk:** the chatbot cliché, speech recognition in a noisy demo hall, and Hindi voice support on the laptop.

**Scores (out of 5):**

| Concept | Sponsor fit | Uniqueness | Demo wow | UI/UX showcase | Buildable | Total |
|---|---|---|---|---|---|---|
| **A · Pakka** | 5 | 5 | 5 | 5 | 4 | **24** |
| B · Naka Live | 4 | 3 | 4 | 4 | 4 | 19 |
| C · Bolo Kaam | 4 | 3 | 4 | 5 | 3 | 19 |

**Recommendation:** use A as the spine, and borrow C's text-free voice and icon UI (a 🔊 on every card) and B's naka board on the employer side.

**What to cut first if time runs short:** the employer naka map, then helper mode, then photo uploads.
