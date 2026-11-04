# Andy Plester Golf — SEO and measurement plan

Prepared 4 November 2026 from the supplied audit and current website files. The commercial goal is qualified free golf assessments and paid coaching relationships, not traffic alone.

## 1. Technical SEO audit, ranked by priority

### High priority

1. **Measurement is not active.** GA4 is not installed and there are no conversion events. This prevents reliable measurement of free-assessment and coaching-button demand. Installation requires Andy's GA4 measurement ID and confirmation that the property belongs to him.
2. **Search Console status is unknown.** No HTML verification tag or verification file is present. DNS verification may already exist, so this must be checked in Andy's Google account before adding anything.
3. **Skillest completion data is unavailable on the website.** The site can measure an outbound click, but not a completed assessment or paid subscription. Keep clicks, completed assessments and subscribers as separate funnel stages.

### Medium priority

4. **Offer facts can become stale.** Prices, terms, review totals and Skillest fragments require a monthly manual check unless Skillest provides an approved reporting feed.
5. **The homepage and coaching page previously competed for the same search phrase.** Their titles are now separated: the homepage targets Andy as an online and Leicestershire PGA coach; Coaching targets online golf lessons.
6. **The short-game page needed stronger search intent.** Its title, description, visible FAQs and matching FAQ structured data now target online short-game coaching, chipping and pitching without adding a new page.
7. **The main social image is a relatively large JPEG.** The visible hero already uses WebP, but a dedicated compressed social image would reduce sharing-image overhead when one is prepared.

### Low priority / healthy foundations

- Every public page has one H1, a canonical URL, a unique title and a meta description under 155 characters.
- Open Graph tags are present across the public pages.
- Person, LocalBusiness, Service/Offer, Book, Course and FAQ structured data are used where relevant.
- `robots.txt`, `sitemap.xml` and `llms.txt` are present and current.
- Hero content is visible without waiting for animation; below-the-fold images use lazy loading where appropriate.
- Internal page and asset links resolve in the website copy. External destinations still need periodic signed-out phone checks.

## 2. Search Console and Analytics status

| System | Status | Next action |
|---|---|---|
| Google Search Console | Not verifiable from the website files | Andy checks whether `andyplestergolf.com` is already a domain property and whether `sitemap.xml` is submitted. |
| Google Analytics 4 | Not installed | Andy decides whether to use privacy-conscious GA4 and supplies only the `G-` measurement ID; no password or account access is needed. |
| Conversion tracking | Not installed | Add the approved event set below at the same time as GA4 and update the privacy wording. |
| Skillest outcomes | No site-side completion connection | Use monthly totals from Skillest unless Skillest confirms an approved export, webhook or integration. |
| Reporting dashboard | Planned, not connected | Build after GA4 and Search Console access are confirmed so the dashboard uses real properties. |

Analytics must remain inactive until the measurement ID and tracking choice are confirmed. The current privacy page accurately reflects that state.

## 3. Actions requiring Andy's involvement

1. Decide whether to activate privacy-conscious GA4 tracking. If yes, provide the GA4 `G-` measurement ID only.
2. Open Google Search Console, confirm ownership of `andyplestergolf.com`, and submit `https://andyplestergolf.com/sitemap.xml` if it is not already listed.
3. Confirm the live Skillest names, prices, inclusions, minimum term and cancellation wording once a month.
4. Ask Skillest whether coach reporting can export completed free assessments, new subscribers, cancellations and active subscribers, and whether it preserves campaign parameters.
5. Confirm whether the free assessment has a permanent direct URL beyond the current Skillest profile fragment.
6. Confirm the preferred in-person booking route when one is ready; keep email as the fallback.

## 4. Keyword targets and page mapping

| Page | Primary target | Supporting intent | Conversion role |
|---|---|---|---|
| Home | PGA golf coach online and Leicestershire | personal golf coach, Andy Plester golf | Introduce trust and drive free assessments |
| Online Coaching | online golf lessons | online golf coaching, Skillest golf coach, personalised golf coaching | Compare coaching and start an assessment or paid plan |
| About Andy | Andy Plester PGA Professional | PGA golf coach Leicestershire, Master Club Fitter | Establish experience and credibility |
| Up & Down System | online short-game golf coaching | chipping lessons online, pitching coaching, improve short game | Demonstrate specialist method and drive assessments |
| Book | The Up & Down Game book | golf short-game book, golf practice under pressure | Build authority and generate book interest |
| Home in-person section | golf lessons Leicestershire | golf coach Ullesthorpe, in-person PGA lessons | Generate local lesson enquiries |

Do not create new landing pages until Search Console shows demand or Andy approves the topic. The first candidates are a dedicated Leicestershire lessons page, chipping-contact guidance and wedge-distance control; each should contain genuinely useful coaching rather than repeat existing sales copy.

## 5. Proposed conversion tracking plan

Track only actions that support the coaching funnel:

| Event | Trigger | Meaning |
|---|---|---|
| `free_assessment_click` | Any free-assessment button | Visitor leaves for the primary offer |
| `online_coaching_click` | A paid Skillest offer button | Paid coaching interest, with offer name |
| `skillest_profile_click` | Skillest proof or reviews link | Trust/review interest |
| `intro_call_click` | Free confidence-call button | Call intent |
| `in_person_enquiry_click` | Email or future booking link | Local coaching intent |
| `book_click` | Amazon purchase button | Book interest, not a confirmed sale |

Never call an outbound click a lead or sale. Report the funnel as sessions → free-assessment clicks → completed assessments → new paid subscribers → active subscribers. The last three stages should come from Skillest reports for the same date range. Do not send names, email addresses, video details or free-text content to Analytics.

Use campaign tags only on links Andy controls outside the site, such as Instagram, YouTube and email. Example: `utm_source=instagram&utm_medium=social&utm_campaign=free_assessment`.

## 6. First three SEO improvements

1. **Separate page search intent — completed in this website copy.** The homepage, Online Coaching and short-game page now target distinct, useful searches.
2. **Strengthen the existing short-game landing page — completed in this website copy.** Added concise golfer questions and matching structured data without creating an unnecessary page.
3. **Measure the primary funnel — ready once Andy chooses GA4 and supplies his measurement ID.** Install the approved events, update the privacy page and connect a simple monthly report.

## 7. Practical 30/60/90-day roadmap

### Days 1–30: establish clean measurement

- Confirm Search Console ownership and sitemap submission.
- If approved, install GA4 with the six events above and update privacy wording.
- Record a baseline: organic clicks, free-assessment clicks, completed assessments, new subscribers and active subscribers.
- Check every Skillest offer and assessment destination signed out on a phone.
- Start a monthly offer-fact and reporting checklist.

### Days 31–60: improve qualified demand

- Review Search Console queries and landing pages; group them by online coaching, short game and local lessons.
- Improve copy on the page already receiving impressions before creating a new page.
- Ask recent suitable students for honest feedback on the platform where coaching occurred; never manufacture or copy unsupported reviews.
- If the data supports it and Andy approves it, prepare one genuinely useful priority page, most likely Leicestershire golf lessons or a specific short-game problem.
- Compare free-assessment clicks with completed assessments and remove friction from the weakest step.

### Days 61–90: scale what produces clients

- Publish a second approved problem-led page only if the first attracts relevant impressions or assists conversions.
- Build a one-page monthly dashboard using Search Console, GA4 and aggregate Skillest totals.
- Compare source quality by completed assessments and paid subscribers, not session volume.
- Refresh underperforming titles and calls to action based on real query and conversion evidence.
- Set the next 90-day plan around the page, source and offer producing the strongest assessment-to-client rate.

## Monthly scorecard

Report these figures once per month using the same date range:

- Google organic impressions and clicks;
- visits to Home, Online Coaching and Up & Down System;
- free-assessment clicks and click-through rate;
- completed free assessments from Skillest;
- paid coaching clicks by offer;
- new paid subscribers, cancellations and active subscribers from Skillest;
- assessment-to-paid conversion rate where matching totals are available;
- top five non-brand search queries and top converting traffic sources.

The primary business measures are completed assessments, new paid clients, active clients and retention. Rankings, impressions and traffic are diagnostic measures, not the goal.
