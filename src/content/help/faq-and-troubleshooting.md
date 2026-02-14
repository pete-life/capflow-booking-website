---
title: "FAQ & Troubleshooting"
description: "Common questions and solutions"
order: 15
category: "Reference"
---
Common questions and solutions for CapFlow.

---

## Setup & Configuration

### "I created a schedule but no timeslots appeared"

**Check these:**
1. Is the schedule **Active** (not deactivated)?
2. Does the date range include today or future dates? Past dates won't generate timeslots.
3. Did you add at least one **schedule rule** with days, times, and capacity?
4. Did you click **Save** and confirm the sync preview?
5. Check the Calendar view — switch to the correct date range and resource filter.

### "The booking widget doesn't show any availability"

**Check these:**
1. Are there timeslots for the dates the customer is viewing? (Check Calendar)
2. Is there a Service linked to the correct resource?
3. Is the Service linked to a Shopify product?
4. Is the booking widget added to the correct product page in your Shopify theme?
5. Does the timeslot have remaining capacity? (It might be fully booked)

### "How do I change capacity for just one day?"

Use a **Timeslot Override** instead of editing the entire schedule:
1. Go to Calendar
2. Click the timeslot you want to change
3. Adjust the capacity
4. Save — this creates an override for that slot only

### "My schedules overlap — is that a problem?"

It depends. If two schedules generate timeslots for the same resource, date, and time, you'll get duplicate timeslots. Plan your schedule date ranges to avoid unintended overlap.

**Intentional overlap** (e.g., "Regular Schedule" + "Holiday Hours") can work if the date ranges don't produce conflicting timeslots.

---

## Bookings & Checkout

### "A customer says they can't complete checkout"

**Check these:**
1. Is the booking hold still active? Holds expire after 10 minutes.
2. Are the Shopify product variants still published and in stock?
3. Check your Shopify payment provider settings — payment issues are Shopify-side.
4. Look at the booking in CapFlow — does it show a checkout URL?

### "A booking was created but the customer didn't pay"

This can happen if the customer abandoned Shopify checkout. The booking exists in CapFlow but the Shopify order was never completed. Options:
- Cancel the booking in CapFlow to release the capacity
- Wait for the customer to return (the checkout URL remains valid for a while)
- Contact the customer via the email on the booking

### "Can customers book multiple consecutive hours?"

Yes. When a customer selects a 2-hour or 3-hour session, CapFlow books consecutive timeslots. The server validates that the hours are actually consecutive and have available capacity.

### "How do I block a timeslot for maintenance?"

Create a **Block Booking** from the Calendar page:
1. Click the timeslot
2. Choose "Create Block"
3. Set the party size to match the capacity you want to block
4. Save — capacity is now reserved

---

## Members & Capacity

### "A member says they can't book but there's capacity showing"

**Possible causes:**
1. **Booking limits:** The member may have hit their max hours per day or max future bookings (check Settings > Booking Policies)
2. **Expired membership:** Check the Customers page for their entitlement status
3. **Wrong pool:** The available capacity might be public-only. Check if member capacity exists for that timeslot.
4. **Not logged in:** The customer must be logged in to their Shopify account for member detection to work

### "Member slots aren't releasing to public"

**Check these:**
1. Is a pool release window configured? (Settings > Pool Release Default, or in the schedule rule)
2. Has enough time passed? Release happens at the configured hours before the session.
3. The release is checked at booking time — it doesn't change the displayed capacity in advance.

### "How do I manually add a member?"

If you need to give someone member access without them purchasing a product:
1. Go to the customer's profile in **Shopify Admin > Customers**
2. Add the `member` tag plus the relevant type tag (`annual-pass`, `clip-card`, etc.)
3. CapFlow will detect the tags and treat them as a member

> **Note:** Manual tagging doesn't create a proper entitlement record with expiration dates. For full membership tracking, the customer should purchase the membership product.

---

## Cancellations & Fees

### "A customer wants to cancel but the button is greyed out"

They're within the **no-cancellation window**. With the default settings:
- Public: Can't cancel within 48 hours of the session
- Members: Can always cancel (no-cancellation window = 0)

Adjust these windows in Settings > Cancellation Policies if needed. You can also cancel bookings manually from the admin.

### "How do I waive a cancellation fee?"

Fees are tracked in the customer's fee account. To waive:
1. Go to Customers > Fee Balances
2. Find the customer
3. View their fee account details
4. Adjust or clear the balance

### "Do clips get refunded on cancellation?"

- **Free window:** Yes, clips are fully refunded
- **Fee window:** Clips are refunded, but the cancellation fee applies
- **Blocked window:** Cancellation not possible, no refund

---

## Email Notifications

### "Customers aren't receiving confirmation emails"

**Check these:**
1. Is the `RESEND_API_KEY` environment variable set?
2. Check the sender email in Settings > Email Notifications
3. Ask customers to check their spam/junk folder
4. Verify the customer's email address is correct on the booking

### "Can I customise the email content?"

Currently, emails use built-in templates. The configurable options are:
- Sender name
- Reply-to address

Custom email templates are planned for a future update.

---

## Calendar & Schedule

### "The timeline shows gaps — what does this mean?"

Gaps mean there are dates in the next 90 days where no schedule provides timeslot coverage for a resource. Customers won't be able to book for those dates.

**Fix:** Create a new schedule or extend an existing schedule to cover the gap dates.

### "I changed a schedule but old timeslots still exist"

When you edit a schedule, the sync only affects timeslots generated by that schedule. If timeslots were created manually or by a different schedule, they won't be affected.

Check which schedule (if any) the timeslot belongs to from the timeslot detail view.

### "Can I move a timeslot to a different time?"

Yes. From the Calendar page, you can drag and drop timeslots to different times (within the same day). You can also edit the time from the timeslot detail view.

> **Caution:** Moving a timeslot that has bookings means those bookings now happen at the new time. Consider notifying affected customers.

---

## General

### "How do I test the booking flow without a real customer?"

1. Visit your storefront product page
2. Use the booking widget to select a service, date, and time
3. Complete the booking flow
4. The booking appears in CapFlow > Bookings
5. Cancel the test booking when done to release capacity

### "Can I have different cancellation policies for different services?"

Currently, cancellation policies are set at the shop level (separate policies for public and members). Per-service policies are planned for a future update.

### "How do I export my bookings data?"

Go to Analytics, select your date range, and use the **CSV Export** button. Choose from Summary, Daily, By Resource, Detailed, or Full Report exports.

### "The app is slow / not loading"

**Try these:**
1. Refresh the page
2. Clear your browser cache
3. Check your internet connection
4. If the issue persists, check your Shopify admin for any app-wide issues

---

## Getting Help

If you can't find the answer here:
1. Check the other help articles in this guide
2. Review the [Settings Reference](/help/settings-reference) for configuration options
3. Contact support at [your support email]
