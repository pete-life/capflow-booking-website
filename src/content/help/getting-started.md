---
title: "Getting Started with CapFlow"
description: "First-time setup walkthrough"
order: 1
category: "Getting Started"
---
This guide walks you through the initial setup of CapFlow Booking after installing the app on your Shopify store.

---

## Overview

CapFlow is a capacity-based booking system designed for activity venues — fitness studios, climbing gyms, surf schools, courts, and more. It lets customers book timeslots directly from your Shopify storefront and handles capacity management, memberships, and check-in.

**What you'll set up:**

1. Resources (your physical capacity units)
2. A Schedule (your operating schedule)
3. Services (bookable products linked to Shopify)
4. The booking widget on your storefront

---

## Step 1: Create Your Resources

Resources represent your physical capacity units — the things customers actually use. For a fitness studio, this might be "Studio A" and "Studio B". For a climbing gym, it could be "Main Wall" or "Bouldering Area".

1. Go to **Resources** in the sidebar
2. Click **Create Resource**
3. Enter a name (e.g., "Studio A")
4. Save

Each resource gets its own schedule and capacity settings. Most venues have 1–3 resources.

> **Tip:** Think of resources as the physical things you need to manage capacity for. If two activities share the same physical space and capacity, they should be one resource.

---

## Step 2: Create a Schedule

Schedules define your operating hours. Instead of creating timeslots one by one, you define weekly rules and CapFlow generates all your timeslots automatically.

1. Go to **Calendar** in the sidebar
2. Switch to the **Schedules** tab
3. Click **Create Schedule**
4. Set a name (e.g., "Summer 2025") and date range
5. Add schedule rules for each resource:
   - Select days of the week
   - Set start and end times
   - Set capacity (total, member, public)
6. Save — timeslots are generated automatically

See [Schedules](/help/schedules) for a detailed walkthrough.

---

## Step 3: Create a Service

Services are what customers see and book. Each service links to a Shopify product (for pricing and checkout).

1. Go to **Services** in the sidebar
2. Click **Create Service**
3. Enter a name and select a resource
4. Search for and link a Shopify product
5. Map duration variants (1hr, 2hr, etc.) to Shopify product variants
6. Save

See [Services & Pricing](/help/services-and-pricing) for details on pricing configuration.

---

## Step 4: Add the Booking Widget

The booking widget is a Shopify theme app extension that appears on your storefront.

1. In your Shopify admin, go to **Online Store > Themes > Customize**
2. Navigate to the product page template
3. Add the **CapFlow Booking Widget** block
4. Position it where you want the booking interface to appear
5. Save

The widget will automatically show availability, handle reservations, and redirect to Shopify checkout.

---

## Step 5: Verify Everything Works

1. Go to your **Calendar** and confirm timeslots appear for upcoming dates
2. Visit your storefront product page and check the booking widget loads
3. Try making a test booking to verify the full flow works
4. Check the **Bookings** page to see your test booking

---

## Setup Checklist

| Step | What to do | Where |
|------|-----------|-------|
| 1 | Create at least one resource | Resources page |
| 2 | Create a schedule with schedule rules | Calendar > Schedules |
| 3 | Verify timeslots were generated | Calendar view |
| 4 | Create a service linked to a Shopify product | Services page |
| 5 | Add booking widget to theme | Shopify Theme Editor |
| 6 | Make a test booking | Your storefront |
| 7 | Set your timezone | Settings > Timezone |
| 8 | Configure settings (optional) | Settings page |
| 9 | Set up membership types (optional) | Settings > Membership Types |
| 10 | Link membership products (optional) | Settings > Membership Products |

---

## What's Next?

- [Key Concepts](/help/key-concepts) — Understand the terminology
- [Schedules](/help/schedules) — Deep dive into schedule management
- [Capacity Pools](/help/capacity-pools) — Learn about member vs. public capacity
- [Settings Reference](/help/settings-reference) — Configure cancellation policies, email, and more
