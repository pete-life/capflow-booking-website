---
title: "Capacity Pools"
description: "Manage member vs. public capacity"
order: 6
category: "Setup & Configuration"
---
Capacity pools let you reserve a portion of your capacity for members while keeping the rest open to the public. This ensures your loyal members can always find availability.

---

## How Pools Work

Each timeslot has three capacity numbers:

| Pool | Description |
|------|-------------|
| **Total (capTotal)** | Hard maximum for the timeslot |
| **Members (capMembers)** | Reserved exclusively for members |
| **Public (capPublic)** | Available for anyone |

**Example:** A timeslot with 12 total, 4 member, 8 public capacity:
- Members can book from their 4 reserved slots
- Public customers can book from the 8 public slots
- No one can exceed 12 total

Members book from the member pool first. Public customers book from the public pool. The pools are independent — public bookings never eat into member capacity, and vice versa.

---

## Who Counts as a "Member"?

Members are customers with an active entitlement:
- **Annual Pass** holders
- **Monthly Pass** holders
- **Clip Card** holders (with remaining clips)

Membership is detected automatically via Shopify customer tags. See [Membership Setup](/help/membership-setup) for configuration.

---

## Pool Release: Maximising Capacity

The pool release feature prevents member slots from going to waste. If member slots are still available close to the session time, they're "released" to the public pool.

### How it works:

1. You set a **release window** (e.g., 24 hours before start)
2. When the timeslot is more than 24 hours away: pools are separate
3. When the timeslot is within 24 hours: unused member slots become available to public

### Example:

Timeslot at 14:00 tomorrow with 4 member slots, 2 booked by members:
- **More than 24h before:** 2 member slots available (members only), 8 public slots
- **Within 24h:** 2 member slots released → public gets 8 + 2 = 10 available slots

This way, members get priority booking but capacity isn't wasted if they don't use it.

### Setting the Release Window

You can set pool release at two levels:

1. **Shop-wide default:** Settings > Booking Policies > Pool Release Default
2. **Per-schedule rule:** When creating schedule rules in a Schedule

Per-schedule settings override the shop-wide default. Leave the schedule setting empty to use the default.

### Choosing a Release Window

| Window | Best for |
|--------|---------|
| **48 hours** | High member activity, want to maximise member priority |
| **24 hours** | Good balance between member priority and public availability |
| **12 hours** | Priority for members, but don't want last-minute waste |
| **4–6 hours** | Minimal member priority, maximise overall utilisation |
| **Not set** | No release — member slots stay reserved even if unused |

---

## Capacity Rules

- **Total must be >= Members + Public** (enforced by the system)
- Total can be higher than Members + Public if you want overflow capacity
- Members and Public can be 0 (e.g., all-public or members-only slots)
- Pool settings are per-timeslot, configured via Schedule schedule rules

---

## Viewing Capacity in the Calendar

The calendar view shows capacity status with colour coding:

- **Green** — Plenty of availability
- **Yellow/Orange** — Filling up
- **Red** — Near or at capacity

Click any timeslot to see the detailed breakdown: total capacity, booked count, remaining by pool.

---

## Common Configurations

### No membership system (public only)
```
Cap Total: 12 | Cap Members: 0 | Cap Public: 12
```
All capacity is available to everyone. No pool release needed.

### Reserved member slots with release
```
Cap Total: 12 | Cap Members: 4 | Cap Public: 8 | Release: 24h
```
Members get priority up to 24h before. After that, unused member slots open up.

### Members-only timeslot
```
Cap Total: 8 | Cap Members: 8 | Cap Public: 0
```
Only members can book this slot (useful for member-only sessions).

### High member priority
```
Cap Total: 12 | Cap Members: 8 | Cap Public: 4 | Release: 48h
```
Most capacity reserved for members with a long release window.

---

## Tips

- Start with a small member pool (20–30% of total) and adjust based on actual usage
- Check the Analytics page to see the member vs. public booking split
- Pool release is your best tool for balancing member priority with overall utilisation
- If you don't have memberships yet, set member capacity to 0 everywhere

---

## What's Next?

- [Membership Setup](/help/membership-setup) — Configure membership types and Shopify product linking
- [Schedules](/help/schedules) — Set capacity pools in schedule rules
- [Settings Reference](/help/settings-reference) — Configure the global pool release default
