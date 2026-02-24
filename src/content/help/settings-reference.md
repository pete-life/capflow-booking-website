---
title: "Settings Reference"
description: "All app settings explained"
order: 8
category: "Setup & Configuration"
---
The Settings page is your central configuration hub. All app-wide policies and preferences are managed here.

**Location:** Sidebar > Settings

---

## Timezone

Set the timezone for your shop. All dates and times throughout the app — calendar, bookings, emails, and the booking widget — use this timezone.

| Setting | Description | Default |
|---------|-------------|---------|
| **Shop Timezone** | Timezone for all date/time display and calculations | Europe/Copenhagen |

Pick your venue's local timezone from the dropdown. This ensures customers see correct availability and receive emails with the right times.

---

## Membership Types

Define the membership types available for your shop. Each type maps to a Shopify customer tag and controls capacity pool access and weekday restrictions. See [Membership Setup](/help/membership-setup) for a detailed walkthrough.

| Field | Description |
|-------|-------------|
| **Key** | Internal identifier (e.g., `ANNUAL_PASS_FULL`) |
| **Display Label** | Shown in dropdowns and the Customers page |
| **Shopify Tag** | Tag synced to the customer in Shopify |
| **Grants Pool Access** | Whether this type can book from the member capacity pool |
| **Weekday Only** | Restrict member pool access to Mon–Fri |

You can add, edit, and remove types as needed. If no types are configured, CapFlow uses sensible defaults.

---

## Membership Products

Link Shopify products to CapFlow membership types. See [Membership Setup](/help/membership-setup) for a detailed walkthrough.

| Setting | Description | Default |
|---------|-------------|---------|
| **Annual Pass Product** | Shopify product for annual memberships | Not set |
| **Annual Pass Duration** | How long the pass is valid (days) | 365 |
| **Annual Pass Variant Mapping** | Maps each variant to a pass type (Full or Weekday) | Not set |
| **Monthly Pass Product** | Shopify product for monthly memberships | Not set |
| **Monthly Pass Duration** | How long the pass is valid (days) | 30 |
| **Clip Card Product** | Shopify product for clip cards | Not set |
| **Clip Variant Mapping** | Maps each variant to a clip count | Not set |

---

## Booking Policies

### Member Booking Limits

Prevents members from hogging capacity by limiting how many hours they can book.

| Setting | Description | Default |
|---------|-------------|---------|
| **Max hours per day** | Maximum hours a member can book on the same day | 2 |
| **Max future booking hours** | Maximum total hours a member can have booked in the future | 4 |

**Example:** With defaults, a member can book up to 2 hours on any given day, and can't have more than 4 hours of future bookings total. This ensures fair access for all members.

**When to adjust:**
- Increase if members complain about limits
- Decrease if a few members are taking up too much capacity
- Set high values (e.g., 99) to effectively disable limits

### Capacity – Pool Release Default

| Setting | Description | Default |
|---------|-------------|---------|
| **Release member slots to public** | Hours before start when unused member slots open to everyone | Not set |

This is the shop-wide default. Individual schedule rules can override it. See [Capacity Pools](/help/capacity-pools) for details.

**Recommendation:** Start with 24 hours. Adjust based on your member booking patterns.

---

## Cancellation Policies

CapFlow uses a three-window cancellation system. Each booking falls into one of three windows based on how far in advance the customer cancels:

```
Booking date ←——— Free window ———|——— Fee window ———|——— Blocked ———→ Session start
```

### Public Cancellation Policy

For non-member (public) bookings:

| Setting | Description | Default |
|---------|-------------|---------|
| **Free cancellation window** | Cancel for free if more than X hours before session | 168 hours (7 days) |
| **No-cancellation window** | Cannot cancel if less than X hours before session | 48 hours (2 days) |
| **Cancellation fee** | Fee charged for cancellations in the fee window | 150 DKK per person |

**Example with defaults:**
- **More than 7 days before:** Free cancellation
- **2–7 days before:** Can cancel, but 150 DKK fee per person
- **Less than 2 days before:** Cannot cancel

### Member Cancellation Policy

For members (Annual Pass, Clip Card, etc.):

| Setting | Description | Default |
|---------|-------------|---------|
| **Free cancellation window** | Cancel for free if more than X hours before session | 24 hours |
| **No-cancellation window** | Cannot cancel if less than X hours before session | 0 (always allow) |
| **Cancellation fee** | Fee charged for cancellations in the fee window | 0 DKK (free) |

**Example with defaults:**
- **More than 24 hours before:** Free cancellation
- **Less than 24 hours before:** Can cancel, no fee (since fee = 0)
- **Members can always cancel** (no-cancellation window = 0)

> **Note:** Members typically get more lenient cancellation policies since they're loyal customers.

### No-Show Fee

| Setting | Description | Default |
|---------|-------------|---------|
| **No-show fee** | Fee added when a member doesn't show up | 25 DKK per person |

This fee is added to the customer's fee account when staff marks a booking as no-show. It only applies to members (public customers have already paid).

### How Fees Work

Cancellation and no-show fees are **added to the customer's fee account** — they're not charged automatically. You collect fees separately (e.g., next time the customer visits, or via invoice).

View fee balances at: **Customers > Fee Balances**

---

## Email Notifications

CapFlow sends transactional emails automatically for key booking events.

### Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **Sender Name** | The "from" name on emails | CapFlow Bookings |
| **Reply-To Email** | Where customer replies go | Not set |

### Email Content Customisation

You can customise the content of confirmation and reminder emails:

| Setting | Description | Default |
|---------|-------------|---------|
| **Email Header** | Main heading shown at the top of the email | Booking Confirmed |
| **Information Header** | Header for the instructions section | Arrival Instructions |
| **Information Body** | Body text for the instructions section | Standard arrival instructions |

Use these to tailor emails with your venue's specific arrival instructions, parking information, or other details customers need before their visit.

### Automatic Emails

These emails are sent automatically — no configuration needed:

| Email | When it's sent |
|-------|---------------|
| **Booking Confirmation** | When a booking is confirmed |
| **Cancellation Confirmation** | When a booking is cancelled |
| **Reminder** | 24 hours before the session (when enabled) |

Emails include:
- Booking details (date, time, party size)
- Check-in token/QR code
- Link to manage the booking
- Cancellation policy information
- Your custom header and arrival instructions

---

## Tips

- **Start with defaults:** The default settings work well for most venues. Adjust as you learn your customers' behaviour.
- **Public vs. member policies:** Keep member policies more lenient to reward loyalty
- **Fee collection:** Decide upfront how you'll collect fees (at check-in, via invoice, etc.) and communicate this to customers
- **Email reply-to:** Set this to an email your staff monitors so you receive customer replies
- **Test changes:** After adjusting policies, make a test booking to verify the cancellation rules work as expected

---

## What's Next?

- [Membership Setup](/help/membership-setup) — Detailed guide for linking membership products
- [Capacity Pools](/help/capacity-pools) — Understanding member vs. public capacity
- [FAQ & Troubleshooting](/help/faq-and-troubleshooting) — Common questions about settings
