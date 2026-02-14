---
title: "Services & Pricing"
description: "Link Shopify products and configure pricing"
order: 4
category: "Setup & Configuration"
---
Services are the bookable offerings your customers see on the storefront. Each service links a Shopify product to a CapFlow resource.

---

## What Is a Service?

A service connects three things:
1. **A Resource** — where the activity happens (e.g., "Studio A")
2. **A Shopify Product** — for pricing and checkout
3. **Duration Variants** — mapping session lengths to Shopify product variants

When a customer books through the widget, they're selecting a service. The widget shows availability based on the linked resource's timeslots.

---

## Creating a Service

1. Go to **Services** in the sidebar
2. Click **Create Service**
3. Fill in the details:

| Field | Description |
|-------|-------------|
| **Name** | What customers see (e.g., "Group Yoga", "Court Booking") |
| **Category** | Optional grouping (e.g., "Water Sports") |
| **Resource** | Which resource this service uses |
| **Shopify Product** | Search and link a product from your store |
| **Sort Order** | Controls display order in the widget |

4. Configure duration variants (see below)
5. Click **Save**

---

## Understanding Duration Variants

Duration variants are the core of CapFlow's pricing model. They map session lengths (1 hour, 2 hours, etc.) to Shopify product variants.

### How Pricing Works

Prices are **per person for the full duration** — not per hour.

**Example pricing:**
| Duration | Adult Price | Child Price |
|----------|-----------|-------------|
| 1 hour | 350 DKK | 250 DKK |
| 2 hours | 500 DKK | 375 DKK |
| 3 hours | 650 DKK | 475 DKK |

A 2-hour session costs 500 DKK per adult — not 350 x 2. This lets you offer volume discounts for longer sessions.

### Setting Up Variants

For each duration you offer:

1. **Session Count** — How many consecutive hourly timeslots (1 = 1 hour, 2 = 2 hours)
2. **Adult Variant** — Select the Shopify product variant for adult pricing
3. **Adult Price** — Confirm the price matches the Shopify variant
4. **Child Variant** — Select the variant for child pricing (optional)
5. **Child Price** — Confirm the child price

> **Important:** The prices in CapFlow must match the prices on your Shopify product variants. CapFlow uses the variant ID to create the Shopify cart, and Shopify uses the variant's price for checkout.

### Shopify Product Setup

Your Shopify product needs variants that match your pricing structure. A typical setup:

```
Product: Court Booking
├── Variant: 1 Hour - Adult (350 DKK)
├── Variant: 1 Hour - Child (250 DKK)
├── Variant: 2 Hours - Adult (500 DKK)
├── Variant: 2 Hours - Child (375 DKK)
├── Variant: 3 Hours - Adult (650 DKK)
└── Variant: 3 Hours - Child (475 DKK)
```

---

## Cart Quantities

When a customer books, the cart quantity equals the **number of people** — not multiplied by session count.

**Example:** A family of 2 adults and 1 child booking a 2-hour session creates:
- 2x "2 Hours - Adult" (@ 500 DKK each)
- 1x "2 Hours - Child" (@ 375 DKK each)
- **Total: 1,375 DKK**

---

## Variant Slots (Advanced)

By default, services support Adult and Child pricing tiers. If you need different categories (e.g., "Senior", "Student"), you can configure custom variant slots.

Variant slots let you define any number of pricing tiers, each mapped to a different Shopify product variant.

---

## Display Options

| Option | Description |
|--------|-------------|
| **Default** | Standard display in the widget |
| **Featured** | Highlighted or promoted in the widget |
| **Compact** | Minimal display (useful when you have many services) |

---

## Tips

- **One product per service:** Each service links to exactly one Shopify product
- **Multiple services per resource:** You can have several services using the same resource (e.g., "Beginner Climbing" and "Advanced Climbing" both using "Main Wall")
- **Price consistency:** Always ensure CapFlow prices match Shopify variant prices
- **Test the flow:** After setting up a service, test a booking on your storefront to verify pricing appears correctly

---

## What's Next?

- [Schedules](/help/schedules) — Set up operating hours for your resources
- [Capacity Pools](/help/capacity-pools) — Configure member vs. public capacity
