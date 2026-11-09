# Round 1 — Website audit, positioning and foundations

Audit date: 3 November 2026. This is a findings report only; no redesign or live integration has been made.

## Executive summary

The site now gives online coaching suitable priority and has a polished visual base, clear calls to action, a dedicated page for *The Up & Down Game*, and a separate short-game system page. The strongest conversion path is the free Skillest assessment followed by the $89/month Performance Coaching plan.

The first corrections should be factual and structural rather than a full redesign: update 22+ years to 23 years everywhere, add Andy's UK/Ireland/New Zealand coaching background, use the full Ullesthorpe Court Hotel & Golf Club name consistently, retire the paused Club sign-up page, and standardise the navigation, footer and brand wording. The live Skillest profile must remain the source of truth for plans, prices, terms and reviews.

Live Skillest statistics should not be added as automatically updating figures until Skillest confirms an official API, widget or permitted data feed. GitHub Pages cannot safely store an API key or run a private scheduled task. Until an authorised source exists, the safest presentation is a link labelled “See current reviews and coaching activity on Skillest”, optionally accompanied by figures explicitly dated “Verified on [date]”.

## 1. Brand positioning and audience

Use this position consistently:

> Andy Plester — PGA Professional | Short Game Specialist | Complete Golf Coach

Supporting fact block:

> Andy Plester is a PGA Professional with 23 years of coaching experience across the UK, Ireland and New Zealand. Based at Ullesthorpe Court Hotel & Golf Club in Leicestershire, he coaches golfers of all abilities locally and online worldwide. His coaching covers the full swing, short game and wedge play, putting, course management, confidence and performance.

This resolves the current tension between the older “short game system” identity and the broader coaching offer. The short game should remain the specialist point of difference, supported by *The Up & Down Game*, while “complete golf coaching” explains the service being sold.

Target audiences should be stated plainly: beginners, improving club golfers and competitive players; in-person students in Leicestershire; and online students worldwide.

## 2. Homepage messaging and layout

### What works

- “Play Better Golf. Anywhere.” is concise and gives online coaching immediate priority.
- The opening copy says personalised PGA coaching and does not limit Andy to short-game coaching.
- The free assessment is repeated as the main next step.
- Coaching plans, Andy's story, the book, short-game system and in-person coaching are all accessible.
- The main hero image has fixed dimensions and the lower images use lazy loading, reducing layout movement.

### Improvements

1. Put a compact proof band immediately after the hero: 23 years, PGA Professional, international coaching experience, Skillest proof link and book author. The current trust strip still says “22+ Years”.
2. Add a short “Who this is for” statement covering beginners through competitive golfers.
3. Add the proposed Skillest proof area only under the evidence rules in section 10; never present snapshot figures as live.
4. Keep online coaching first, with in-person coaching as a clear secondary route.
5. Check every package against Skillest before publication. The current site shows $49, $89/month and $199/month with specific inclusions; these can become inaccurate independently of the website.

## 3. Navigation and page structure

The page set is sensible: Home, Online Coaching, About Andy, Short Game/System, Book, In Person and Privacy. Internal links to the book and coaching routes are generally good.

The navigation and footer are inconsistent. The homepage says “Online Coaching / About Andy / Short Game / Book / In Person”, while inner pages use “Home / The System / Book / Coaching / In Person”. Several inner-page footers still use the short-game strapline as the main brand. Standardise every page on one order and one identity:

1. Online Coaching
2. About Andy
3. Short Game
4. Book
5. In-Person Coaching
6. Free Assessment button

`up-and-down-club.html` is a paused offer but remains a functioning waiting-list page that sends personal details to a third-party form service. It is excluded from the sitemap and main navigation, but is still reachable directly. Recommended treatment: replace it with a simple paused notice and links to online coaching, the book and the short-game system, or redirect it later once the preferred destination is agreed. Do not continue collecting Club sign-ups while the offer is paused.

## 4. Mobile responsiveness and usability

The CSS is mobile-first, collapses major grids appropriately, supports a mobile menu, declares image dimensions, and respects reduced-motion preferences. Buttons wrap and the four coaching cards stack on narrow screens.

Items to test on real phones before the next release:

- Header and menu at 320px, 375px and 430px widths.
- Two side-by-side hero buttons at very narrow widths; a single-column layout may be easier to tap and read.
- Length of the coaching-plan scroll before visitors reach proof and FAQs.
- Keyboard focus trapping/return in the open mobile menu; Escape works, but focus is not currently contained within the menu.
- Mail links for in-person coaching. A direct booking route will work more reliably for visitors without a configured mail app.

## 5. SEO and AI-search foundations

### Good foundations

- Every main indexed page has one H1, a canonical URL and a meta description.
- Titles are generally within the requested length and focus on online coaching, short game or the book.
- Open Graph information is present on the indexed pages.
- Person, LocalBusiness/ProfessionalService, Service/Offer, Book, Course and FAQ structured data are already used where relevant.
- `sitemap.xml`, `robots.txt` and `llms.txt` exist and the paused Club page is absent from the sitemap.

### Corrections and opportunities

- About has an overlong, short-game-led title and a generic H1 (“My story”). Target “Andy Plester | PGA Golf Coach in Leicestershire”.
- Privacy still uses “The Up & Down System” in its title and opening identity; use Andy Plester Golf consistently.
- Change every 22/22+ experience reference in visible copy, metadata, structured data, `llms.txt` and the Project 50 plan to 23 years.
- Add UK, Ireland and New Zealand and the complete coaching disciplines to About, homepage facts, structured data and `llms.txt`.
- Use one venue name consistently: Ullesthorpe Court Hotel & Golf Club, Leicestershire, England.
- Add short, visible FAQs to the homepage and coaching page, not only machine-readable FAQ data.
- Future SEO growth should use useful problem-led pages, for example wedge distance control, chipping contact, putting confidence and course management. Each should answer the question directly, show Andy's expertise and lead naturally to the free assessment.
- The homepage social image URL points to `/coaching-hero.jpeg` and is valid in the current layout; keep social-image paths checked whenever images move.

## 6. Performance

The HTML, CSS and JavaScript are modest in size and GitHub Pages is appropriate for a fast static site. No heavy framework is used. The largest visible risk is imagery:

- `coaching-hero.jpeg`: about 463 KB and loaded immediately.
- `book-cover.jpg`: about 165 KB.
- `andy-portrait.jpeg`: about 99 KB.

Convert the hero to responsive WebP/AVIF variants and aim for roughly 100–150 KB on a typical phone. Use `srcset`/`sizes`, retain explicit width and height, and keep `fetchpriority="high"` only on the true above-the-fold hero. Keep all below-fold images lazy loaded. The external Google font adds connection time but already uses `display=swap`.

Measure the live homepage with PageSpeed Insights before and after image work; local file inspection cannot supply real Core Web Vitals.

## 7. Calls to action and internal links

The free assessment is consistently prominent and paid plans link directly to Skillest. “Skillest is the source of truth” is a useful safeguard.

Recommended conversion hierarchy:

1. Primary: Get Your Free Golf Assessment.
2. Paid: Performance Coaching, presented as the main route to an active subscription.
3. Secondary: Personal Golf Review and Elite Performance Coaching.
4. Other: In-person coaching, the short-game system and the book.

Verify that `#evaluation` and each package/plan fragment still lands on the intended Skillest item. Fragment links and offer IDs can change. Replace the in-person email-only route with a confirmed booking link when Andrew chooses one, retaining email as a fallback.

## 8. Offers and outdated content

Current displayed offers are Personal Golf Review ($49), Performance Coaching ($89/month, three-month minimum) and Elite Performance Coaching ($199/month), plus a free assessment. These match the recent desk notes, but the Skillest profile must be checked before they are treated as current.

Known corrections:

- Replace all 22/22+ claims with 23 years.
- Pause or retire `up-and-down-club.html`; it currently advertises a waiting list and benefits for a paused Club.
- No “Skool” reference appears in the current public page copy.
- The wording “practice” is used correctly; no “practise” occurrence was found.
- Remove or revise unsupported facts unless Andrew confirms them. “TaylorMade Ambassador” appears repeatedly but was not included in this Round 1 brief.
- Update internal project notes that still assign decisions or approvals to another person; customer-data, CRM and tracking choices belong to Andrew.

## 9. Trust, photography and branding

Strong existing signals are PGA Professional, coaching experience, the Skillest profile, international online availability, the book, social channels and the Leicestershire venue. The supplied Skillest screenshot adds verified snapshot figures: 176 reviews, 671 lessons, 37 followers and a $49 starting price.

Photography is relevant and has useful alternative text, but the hero JPEG is oversized. `object-fit: cover` prevents obvious stretching in the main frames. Check the crop on small screens and replace WhatsApp-derived or visibly compressed images when a better original is available. The root also contains unused WhatsApp images and duplicate PGA badge files; they do not slow visitors unless loaded, but should be rationalised in a later housekeeping round.

Use “Andy Plester Golf” as the master brand and the AP logo consistently. Treat “The Up & Down System” as the named short-game method and *The Up & Down Game* as the book, not as competing site-wide brands.

## 10. Skillest live social-proof investigation

### Current evidence

- Profile: `https://skillest.com/coach/andyplester`
- Verified screenshot snapshot supplied for this round: 176 reviews, 671 lessons, 37 followers, starting price $49.
- The current repository contains no Skillest API client, widget or live statistics integration.
- No official API endpoint, API documentation, authorised widget or embed code has been supplied with the site materials.
- An external check could not be completed in this workspace, so this report does **not** claim that Skillest has no API or widget. Permission to scrape has not been confirmed, so scraping is ruled out.

### Required investigation order and decision

1. **Official API:** ask Skillest support whether coaches have an official read-only profile/statistics API, what fields it exposes, its authentication method, rate limits, caching rules and display/attribution requirements.
2. **Official widget:** ask for an embeddable coach profile or reviews widget. This is preferable if Skillest maintains it and permits its use, although its external script/frame would need to be allowed by the site's security policy before loading.
3. **Permitted public feed:** only consider a public JSON/feed endpoint if Skillest documents or explicitly authorises this use. Do not infer permission because data appears publicly in a browser.
4. **Fallback:** link to “See current reviews and coaching activity on Skillest”. If numbers are displayed, label them “Verified on 3 November 2026” and do not call them live. A dated snapshot is honest but still needs periodic review; the link-only version cannot become stale.

### Secure implementation if Skillest authorises access

A static browser script is not suitable for a credentialled API because it would expose the credential. Use a small server-side scheduled function or approved automation that:

- requests only the public counts;
- stores no customer information;
- refreshes every 12–24 hours;
- validates that values are non-negative numbers and rejects unexpected responses;
- caches the last successful response;
- serves a tiny same-site JSON file to the homepage;
- times out quickly and keeps showing the last verified value, with its update date, if Skillest is unavailable;
- never replaces a good value with zero after an error.

This requires hosting beyond plain GitHub Pages or an authorised workflow that writes a generated JSON file. It should only be designed after Skillest confirms the permitted method.

### Homepage presentation

Place a compact proof strip after the hero and before “How online coaching works”. Preferred live version:

> 176 Skillest Reviews  ·  671 Coaching Lessons  ·  View Andy on Skillest

Accessible labels should be used instead of relying on emoji alone. On failure, hide the numeric items and keep the profile link. Do not show followers unless there is a clear business reason; reviews and lessons are stronger buying signals.

## 11. Proposed Round 1 changes

Implement in this order after Andrew approves the scope:

1. **Correct the core facts:** change 22/22+ years to 23 years, add the UK/Ireland/New Zealand background, use the full venue name and remove or confirm unsupported claims.
2. **Clarify the brand and routes:** standardise navigation, footers and page wording around Andy Plester Golf; keep online coaching and the free assessment as the main journey.
3. **Retire the paused Club sign-up:** replace its waiting-list form with a paused notice and links to current coaching, the short-game system and the book. This also removes its four broken links and stops unnecessary data collection.
4. **Add honest Skillest proof:** add a prominent direct link to current reviews and coaching activity. Use live figures only through an official Skillest method; otherwise use a dated snapshot only if Andrew wants one.
5. **Fix the highest-value destinations:** verify the free assessment and three plan links while signed out, then add the confirmed introductory-call, venue and social links where appropriate.
6. **Measure the conversion journey:** if Andrew chooses GA4, install one privacy-conscious setup, update the privacy page and track the small event set in section 14. Keep website clicks separate from confirmed Skillest assessments and subscribers.
7. **Improve speed and search presentation:** optimise the hero image, correct About and Privacy titles/identity, and add short visible FAQs to Home and Coaching.

Round 1 should stop after these contained changes have been tested on a phone and desktop. New search-content pages, a reporting dashboard and any server-side Skillest service should wait for the results and official access information.

## 12. Link and tracking audit — complete link audit

This audit checked every `href` in the seven HTML pages, including file destinations and same-page/cross-page anchors. External destinations could not be loaded from this workspace because public DNS access is unavailable, so the findings distinguish a correct-looking destination from a live, mobile-tested destination. A final phone test remains necessary before publication.

### Results by route

| Route | Current destination | Finding and action |
|---|---|---|
| Skillest profile and reviews | `skillest.com/coach/andyplester` | Used consistently and is the right canonical profile pattern. Keep this as the visible proof link. Live response and current review score still need verification on a phone. |
| Free Golf Assessment | Skillest profile with `#evaluation` | Prominent across all main pages. The profile URL is consistent, but the fragment cannot prove that Skillest still opens the free assessment. Confirm that the assessment exists, is free and opens the intended item in the Skillest app and a mobile browser. |
| Personal Golf Review | Skillest package `NYbRpT5sR65aeDj5v` | The same ID is used on Home and Coaching. Current availability, $49 price and inclusions must be checked against Skillest before publication. |
| Performance Coaching | Skillest plan `ESWcXmhJSN8nLbb2G` | The same ID is used on Home and Coaching. Current availability, $89/month price, two lessons and three-month minimum must be checked against Skillest. |
| Elite Performance Coaching | Skillest plan `GfDfyPRKSPhj6cGip` | The same ID is used on Home and Coaching. Current availability, $199/month price, lesson allowance and cancellation wording must be checked against Skillest. |
| Free introductory/confidence call | No public site link | `CALENDAR_SETUP.md` describes a future call page, but `call.html` does not exist and no confirmed Cal.com/Calendly URL is present. Do not advertise this route until Andrew supplies and tests the booking URL. |
| Instagram | `instagram.com/andyplestergolf/` | Consistent on the pages where it appears. Add to the shared footer later if this is the confirmed account. Live/mobile check outstanding. |
| Facebook | `facebook.com/andyplestergolf/` | Consistent on the pages where it appears. Live/mobile check outstanding. |
| TikTok | No link anywhere | Confirm whether Andy has an official account before adding one. |
| YouTube | `youtube.com/@andyplestergolf` | Consistent; the homepage adds `?sub_confirmation=1`, while other pages open the channel normally. Prefer the normal channel URL unless an explicit subscription prompt is intended. Live/mobile check outstanding. |
| Amazon book | `amazon.co.uk/dp/B0H3FBJCKP` | The ASIN is consistent across every page. Live product, author, edition and mobile-app opening still need checking. |
| In-person coaching | Email to `andrewplesterpga@gmail.com` | The email address and useful pre-filled subjects are consistent. This is not a true booking system and may fail for visitors without a mail app. Retain it as a fallback after a confirmed booking route is added. |
| Venue map | Google Maps search for Ullesthorpe Court Golf Club | Likely to open on mobile, but it is a search query rather than a stable place link and uses the older venue wording. Replace later with the confirmed Google Maps place/share link. |
| Club waiting list | Web3Forms submission | This is the only contact form. It collects name, email, handicap, location and marketing consent for a paused offer; it should not remain the site's active enquiry mechanism. |

All internal file links resolve. Four links on `up-and-down-club.html` are broken because `index.html` has no `#system` or `#connect` section. The paused Club page also has no H1 and its meta description is 159 characters. No other missing internal page or anchor was found.

### Link priority corrections

1. Verify the free assessment and three current offers while signed out, in both a phone browser and the Skillest app. Treat the resulting Skillest display as the only authority for price and inclusions; do not alter anything inside Skillest.
2. Confirm the introductory-call URL, TikTok account and stable venue link before placing them on the site.
3. Retire or simplify the paused Club page and stop its form from collecting new waiting-list details, subject to Andrew's approval.
4. Add consistent shared-footer links after the destinations are verified, then repair the Club page's four broken anchors if that page remains public.

## 13. Link and tracking audit — tracking, forms and conversion assessment

### Current state

- **Google Analytics 4:** not installed. There is no GA4 measurement ID, Google tag, Tag Manager container, `dataLayer` or event code. The security policy permits Google Analytics connections, but permission alone is not tracking. The privacy page correctly says analytics are inactive.
- **Google Search Console:** no HTML verification tag or verification file is present. Search Console could still be verified through DNS, which cannot be established from these files, so account status must be checked in Andrew's Google account.
- **Conversion events:** none. Skillest, assessment, plan, Amazon, email and social clicks are not distinguished or measured.
- **Forms:** the main coaching journey has no enquiry form. The only form is the paused Club waiting list through Web3Forms. Its real delivery cannot be confirmed from static files, and a real submission should not be made merely as a test because that would send personal information.
- **Mobile calls to action:** the free assessment is prominent in the header, mobile menu, hero and closing sections, and buttons stack/wrap responsively. The weakest mobile routes are email-only in-person enquiries and the absent free-call booking link.

GA4 can reliably measure visits, traffic sources and outbound button clicks. It cannot by itself prove that a visitor completed an assessment or bought a Skillest subscription after leaving the site. Those later stages require a Skillest-supported integration, a return/confirmation page controlled by Andy, or careful aggregate reconciliation with Skillest reports. Do not describe outbound clicks as leads or subscribers.

## 14. Proposed measurement solution — review before implementation

Use one GA4 web data stream, owned by Andrew, with enhanced measurement reviewed to avoid duplicates. Add one site-wide Google tag only after checking the live site and Analytics account for any tag already injected outside these files. Update the privacy wording at the same time and use the least intrusive setup appropriate to the audience; do not send names, email addresses, free-text form content or Skillest customer details to Analytics.

Track a small, stable set of events:

| Event | Trigger | What it measures |
|---|---|---|
| `skillest_profile_click` | Current reviews/profile link | Interest in proof and Andy's full Skillest profile |
| `free_assessment_click` | Any free-assessment button | Website visitors sent towards the primary offer |
| `online_coaching_click` | Any paid package or plan button, with a non-personal `offer_name` parameter | Interest in each online coaching offer |
| `intro_call_click` | Confirmed free-call booking button | Demand for an introductory call |
| `in_person_enquiry_click` | Email or future booking button | In-person coaching intent |
| `book_click` | Amazon button | Book purchase intent, not a confirmed sale |

Use UTMs on campaigns that Andy controls—Instagram bio, Facebook, YouTube, email and paid promotions—using a short naming convention such as `utm_source=instagram`, `utm_medium=social`, `utm_campaign=free_assessment`. Do not add UTMs to ordinary internal links. Preserve Google Search Console as the source for search queries, impressions, clicks and landing pages; GA4 is the source for on-site journeys.

For completed assessments and paid subscribers, first ask Skillest whether it supports coach analytics, conversion exports, webhooks, pixels or an approved API, and whether it preserves inbound campaign parameters. If it does not, keep a monthly aggregate record: completed free assessments, new paid subscribers, cancellations and active subscribers. Compare trends with website clicks without claiming person-level attribution. This is privacy-light and honest about the limits.

### Simple dashboard for the 50-subscriber goal

Use one Looker Studio page connected to GA4 and Search Console, plus a small monthly aggregate sheet populated from Skillest reports if Skillest provides no direct connection. Show:

- website users and sessions;
- Google organic, social, direct and campaign traffic;
- free-assessment clicks and click-through rate;
- paid-coaching clicks by offer;
- completed assessments, new subscribers, cancellations and active subscribers, labelled by data source;
- progress to 50 active subscribers;
- month-over-month trend and the top landing pages.

Keep “website click”, “completed assessment” and “paid subscriber” as separate stages. A useful funnel is: sessions → free-assessment clicks → completed assessments → new subscribers → active subscribers. Only calculate later-stage conversion rates when the Skillest figures cover the same date range and are reliable.

## 15. Questions or approvals required

No tracking, integration or link changes have been implemented in this audit. Before Round 1 begins, Andrew needs to answer:

1. **Club page:** may the paused Club waiting-list form be removed and replaced with a simple paused notice?
2. **Skillest offers:** are the free assessment, $49 review, $89/month plan and $199/month plan still current, including the stated lesson allowances and terms?
3. **Skillest access:** will Andrew ask Skillest support for an official review/lesson-count API, widget or permitted feed, plus completion/subscription reporting? Any documentation or embed code they provide will be needed before implementation.
4. **Displayed proof:** while official access is being investigated, should the homepage use only a direct Skillest proof link, or also show the supplied figures as a clearly dated snapshot?
5. **Rating:** what star rating does the live Skillest profile show, and how many reviews is it based on? Do not display a rating until both can be verified from Skillest.
6. **Tracking:** does Andrew want privacy-conscious GA4 conversion tracking, and does he already own GA4 and Search Console properties for this domain? A GA4 measurement ID is required; no password or account access should be supplied.
7. **Destinations:** what are the confirmed introductory-call booking URL, TikTok profile (if any) and stable Google Maps venue link?
8. **Credentials:** should “TaylorMade Ambassador” remain on the site? It needs Andrew's confirmation because it was not established by the supplied Round 1 material.

Once these answers are available, the Round 1 checklist in section 11 can be implemented and tested without guessing. External scripts or embeds for Skillest or analytics may also need to be allowed by the site's existing security policy before a browser can load them.
