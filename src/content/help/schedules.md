---
title: "Schedules"
description: "Set up your operating schedule and auto-generate timeslots"
order: 5
category: "Setup & Configuration"
---
Schedules are the most powerful feature in CapFlow. They let you define operating hours as weekly rules, and CapFlow automatically generates all the timeslots for you.

---

## How Schedules Work

Instead of creating timeslots one at a time, you create a **Schedule** with:
- A **date range** (e.g., June 1 – August 31)
- **Weekly schedule rules** per resource (e.g., "Monday–Friday, 10:00–18:00, hourly sessions")

CapFlow generates the actual timeslots from these rules. When you edit a schedule, it syncs the timeslots — creating, updating, or removing them as needed.

**Think of it this way:**
- A **Schedule** = your schedule template (the rules)
- **Timeslots** = the actual bookable slots (generated from the rules)

---

## Creating a Schedule

1. Go to **Calendar** in the sidebar
2. Switch to the **Schedules** tab
3. Click **Create Schedule**

### Basic Settings

| Field | Description |
|-------|-------------|
| **Name** | A descriptive name (e.g., "Summer 2025", "Winter Weekends") |
| **Active From** | Start date for this schedule |
| **Active To** | End date for this schedule |
| **Timezone** | Your venue's timezone (used to calculate day-of-week correctly) |
| **Active** | Toggle to enable/disable the schedule |

### Schedule Rules

For each resource, you add one or more weekly rules:

| Field | Description |
|-------|-------------|
| **Days** | Which days of the week (Mon–Sun) |
| **Start Time** | When sessions begin (e.g., 10:00) |
| **End Time** | When the last session ends (e.g., 18:00) |
| **Interval** | How often sessions start (e.g., every 60 min) |
| **Duration** | How long each session lasts (e.g., 60 min) |
| **Cap Total** | Maximum people per timeslot |
| **Cap Members** | Slots reserved for members |
| **Cap Public** | Slots available to the public |
| **Release Hours** | When unused member slots open to public (optional) |

### Example

A summer schedule for a climbing gym:

```
Season: Summer 2025 (June 1 – August 31)

Resource: Main Wall
├── Mon–Fri: 10:00–18:00, 60min interval, 60min duration
│   Cap: 20 total (6 members, 14 public), release 24h before
├── Sat–Sun: 09:00–20:00, 60min interval, 60min duration
│   Cap: 20 total (6 members, 14 public), release 24h before

Resource: Bouldering Area
├── Mon–Fri: 10:00–16:00, 60min interval, 60min duration
│   Cap: 15 total (4 members, 11 public)
```

This generates hundreds of timeslots automatically across the entire summer.

---

## Multiple Rules Per Day

You can add multiple rules for the same day to handle different time blocks:

```
Weekdays:
├── Morning: 10:00–12:00 (Cap: 8, lower capacity)
├── Afternoon: 12:00–17:00 (Cap: 12, peak capacity)
└── Evening: 17:00–20:00 (Cap: 10, moderate capacity)
```

This is useful when capacity changes throughout the day (e.g., more staff in the afternoon).

---

## Overlapping Schedules

You can have multiple schedules that cover different date ranges. Common patterns:

- **Seasonal:** "Summer" (Jun–Aug), "Autumn" (Sep–Nov), "Winter" (Dec–Feb)
- **Regular + Holiday:** "Regular Schedule" (all year) + "Christmas Hours" (Dec 23–Jan 2) — the more specific schedule takes priority for overlapping dates
- **Phased opening:** "Soft Launch" (first 2 weeks with reduced capacity) + "Full Schedule"

> **Note:** If two schedules generate timeslots for the same resource, date, and time, both timeslots will be created. Plan your schedule date ranges to avoid unintended overlaps.

---

## Saving and Syncing

When you save a schedule, CapFlow shows a **sync preview** before making changes:

### What the preview shows:
- **Timeslots to create** — New slots that will be generated
- **Timeslots to update** — Existing slots whose capacity will change
- **Timeslots to delete** — Slots that no longer match the rules
- **Bookings affected** — Any confirmed bookings on slots being deleted

### Important:
- Deleting a timeslot that has bookings will **cancel those bookings**
- The preview shows exactly which bookings are affected and the customer details
- You must confirm before destructive changes are applied
- Customers receive cancellation emails automatically

---

## Editing a Schedule

When you edit a schedule (change dates, add/remove rules, adjust capacity):

1. Make your changes
2. Click **Save**
3. Review the sync preview carefully
4. Confirm to apply

**Common edits:**
- **Extend the date range** — Generates additional timeslots
- **Reduce the date range** — Removes timeslots outside the new range
- **Change capacity** — Updates existing timeslots
- **Add a new day** — Generates timeslots for that day going forward
- **Remove a day** — Deletes timeslots for that day

---

## Schedule Timeline

The Schedules tab shows a visual timeline of all your schedules:

- Each schedule is shown as a coloured bar spanning its date range
- A "today" indicator shows where you currently are
- **Gaps** (dates with no schedule coverage) are highlighted as warnings
- The gap check covers the next 90 days per resource

If you see gap warnings, it means there are dates where no timeslots will be generated — customers won't be able to book for those dates.

---

## Deactivating vs. Deleting

- **Deactivate** a schedule to stop it from generating timeslots, but keep the rules for later reuse
- **Delete** a schedule to permanently remove it and its rules
- Both actions will show a preview of affected timeslots and bookings

---

## Tips

- **Start simple:** Create one schedule covering your immediate operating period, then add more as needed
- **Plan ahead:** Customers may want to book weeks in advance — make sure your schedules cover far enough into the future
- **Watch for gaps:** Check the timeline regularly to ensure continuous coverage
- **Test changes:** Use the sync preview to understand the impact before confirming
- **Name descriptively:** "Summer 2025 Weekdays" is better than "Season 1"
- **Capacity per rule:** Different rules within the same schedule can have different capacity settings (e.g., peak vs. off-peak)

---

## What's Next?

- [Capacity Pools](/help/capacity-pools) — Understand member vs. public capacity in detail
- [Calendar & Timeslots](/help/calendar-and-timeslots) — View and manage generated timeslots
