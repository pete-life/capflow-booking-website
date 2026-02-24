---
title: "Managing Bookings"
description: "View, search, and manage customer bookings"
order: 10
category: "Daily Operations"
---
The Bookings page shows all customer reservations and staff blocks.

**Location:** Sidebar > Bookings

---

## Bookings List

The main view shows all bookings sorted by **session date** (most recent first), so upcoming and recent bookings appear at the top.

| Column | Description |
|--------|-------------|
| **Time** | Session start time |
| **Service** | Which service was booked |
| **Customer** | Customer name and email |
| **Pool** | Which capacity pool was used (Members/Public) |
| **Party Size** | Number of people |
| **Status** | CONFIRMED, CANCELLED, or NO_SHOW |
| **Check-in** | Check-in timestamp (if checked in) |

### Filtering

- **Search** — By email address, booking ID, or customer ID
- **Status** — Filter by CONFIRMED, CANCELLED
- **Kind** — Filter by CUSTOMER or BLOCK bookings
- **Pagination** — 20 bookings per page with numbered page navigation

---

## Booking Detail

Click a booking to see full details:

- Customer information (name, email, Shopify customer link)
- Booking times (all timeslots if multi-hour)
- Party composition (adults, children)
- Capacity pool used
- Check-in status and token
- Shopify cart/checkout URL
- Booking creation time

### Actions

From the booking detail page:

- **Check in** — Mark the customer as arrived
- **Cancel** — Cancel the booking (applies cancellation policy)
- **Mark as no-show** — For members who didn't arrive (applies no-show fee)

---

## Booking Types

### Customer Bookings

Regular bookings made by customers through the storefront widget. These go through the full flow: hold → confirm → Shopify checkout.

### Block Bookings

Staff-created bookings that block capacity without a customer. Use these for:
- **Maintenance** — Block a court or studio for repairs
- **Private events** — Reserve capacity for a group
- **Staff training** — Block slots during training
- **Weather** — Reduce capacity in bad conditions

Create block bookings from the Calendar page by clicking an empty timeslot.

---

## Multi-Slot Bookings

When a customer books a 2-hour or 3-hour session, a single booking spans multiple consecutive timeslots. The booking detail page shows all the timeslots included.

All timeslots in a multi-slot booking are booked and released together — you can't partially cancel.

---

## Cancellations

When a booking is cancelled:
1. Capacity is immediately released for all timeslots
2. Cancellation policy is applied (fee or free, based on timing)
3. Customer receives a cancellation email
4. For clip card bookings, clips are refunded (if within free window)
5. The booking status changes to CANCELLED

---

## Tips

- **Use search** to quickly find a specific customer's booking
- **Filter by CONFIRMED** to see only active bookings
- **Check the Pool column** to understand your member vs. public booking mix
- **Block bookings** are your friend for maintenance and schedule flexibility

---

## What's Next?

- [Check-in](/help/checkin) — Process customer arrivals
- [Calendar & Timeslots](/help/calendar-and-timeslots) — View bookings in calendar context
- [Analytics](/help/analytics) — Understand booking trends
