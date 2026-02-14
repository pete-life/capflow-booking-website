---
title: "Resources"
description: "Define your physical capacity units"
order: 3
category: "Setup & Configuration"
---
Resources are the physical capacity units at your venue — the things customers actually use when they book.

---

## What Is a Resource?

A resource represents a physical space or piece of equipment with a limited number of people who can use it at the same time.

**Examples:**
- Fitness studio: "Studio A" (20 people), "Studio B" (15 people)
- Climbing gym: "Main Wall" (20 climbers), "Bouldering Area" (15 climbers)
- Tennis club: "Court 1", "Court 2", "Court 3"

Each resource gets its own:
- Schedule (timeslots via Schedules)
- Capacity limits (per timeslot)
- Booking calendar

---

## Creating a Resource

1. Go to **Resources** in the sidebar
2. Click **Create Resource**
3. Enter a **name** — this is what staff and customers see
4. A URL-friendly **slug** is generated automatically
5. Click **Save**

That's it. Resources are simple — the complexity lives in Schedules (scheduling) and Services (pricing).

---

## How Many Resources Do You Need?

**Rule of thumb:** Create one resource for each independently scheduled area at your venue.

| Scenario | Resources needed |
|----------|-----------------|
| One studio, one schedule | 1 resource |
| Two courts with different schedules | 2 resources |
| Two studios with the same schedule but separate capacity | 2 resources |
| One court used for beginners and advanced (shared capacity) | 1 resource |

If two activities share the **same physical space** and **same capacity limit**, they should be one resource. Create separate Services to distinguish the activities.

---

## Editing and Deleting Resources

- Click a resource to edit its name
- You can only delete a resource if it has **no associated services or timeslots**
- To delete a resource that's in use: first remove the services and schedules that reference it

---

## What's Next?

After creating resources, you'll need to:
1. [Create a Schedule](/help/schedules) to define operating hours for each resource
2. [Create Services](/help/services-and-pricing) to link bookable products to resources
