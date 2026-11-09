# Performance Call — Booking & calendar setup

The landing page is **call.html**. The main site is unchanged.

## Make the calendar work (two steps)

### Step 1: Set your booking link (required)

The green **“Book your 15-minute call”** button must point to your real booking page.

1. Open **call.html**.
2. Find the booking section (search for `id="booking-link"` or “Book your 15-minute call”).
3. Set the `href` on that link to your Cal.com or Calendly page, for example:
   - **Cal.com:** `https://cal.com/yourusername/15min` (use your Cal.com username and event slug).
   - **Calendly:** your Calendly booking link (e.g. `https://calendly.com/yourname/15min`).

Once this is set, the button works and users can book even if the calendar does not show on the page.

### Step 2: Show the calendar on the page (optional)

**Option A — Cal.com (inline calendar on the page)**

1. In **call.html**, find the div with `id="cal-embed-container"`.
2. Set the `data-cal-link` attribute to your Cal.com link (no full URL, just the link part), for example:
   - `data-cal-link="andyplestergolf/15min"`  
   Use your Cal.com username and event type slug.
3. Save. When you load the page, the Cal.com script will load and the calendar will appear in the booking section.

**Option B — Calendly (iframe)**

1. In Calendly, create a 15 min event type and get the **inline embed** code.
2. In **call.html**, find the iframe with `id="calendly-iframe"`.
3. Set its `src` to your Calendly embed URL (from the embed code).
4. Change the iframe’s `style="display: none;"` to `style="display: block;"`.
5. Optionally hide the Cal.com container (e.g. remove or leave `data-cal-link` empty) so only the Calendly iframe shows.

## Cal.com / Calendly setup (reminder)

- **Cal.com:** [cal.com](https://cal.com) → connect Google Calendar, create a 15 min event type, set availability (UK time), add form fields (name, email, optional notes). Get your booking link and, for Option A, your “cal link” (e.g. `username/eventtype`).
- **Calendly:** Same idea — connect Google Calendar, 15 min event, set availability, then get your booking URL and inline embed code.

## What you get with Cal.com / Calendly + Google

- Only **available** times show.
- Booked slots are blocked in Google Calendar (no double booking).
- **You** get an email notification (set your address in Cal.com/Calendly).
- **Client** gets confirmation email and calendar invite.

Set your notification email (e.g. andrewplesterpga@gmail.com) in the tool you use.

## Optional: email list

To tag leads (e.g. “Performance Call Lead”) in MailerLite or ConvertKit, connect that integration in Cal.com or Calendly.
