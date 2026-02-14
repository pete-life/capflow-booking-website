---
title: "Membership Setup"
description: "Link Shopify products to membership types"
order: 7
category: "Setup & Configuration"
---
CapFlow supports memberships through Shopify products. When a customer purchases a membership product, they're automatically detected as a member and can book from the member capacity pool.

---

## How Membership Works

1. You create a Shopify product for each membership type (Annual Pass, Clip Card, etc.)
2. In CapFlow Settings, you link those products to membership types
3. When a customer buys the product, Shopify tags them automatically
4. CapFlow reads the tags to identify members
5. Members can book from the reserved member capacity pool

---

## Membership Types

### Annual Pass

A time-based membership granting full access for a set period.

**Setup:**
1. Create a Shopify product (e.g., "Annual Pass – 2025/2026")
2. Go to **Settings > Membership Products**
3. Under **Annual Pass**, search for and select the product
4. Set the **duration in days** (default: 365)
5. Save

**How it works:**
- Customer buys the product → tagged with `annual-pass` + `member`
- Member can book from the member pool for the configured duration
- When the pass expires, the customer loses member status

### Monthly Pass

Same as Annual Pass but for shorter periods.

**Setup:**
1. Create a Shopify product (e.g., "Monthly Pass")
2. In Settings, link it under **Monthly Pass**
3. Set duration (default: 30 days)
4. Save

**Tags applied:** `monthly-pass` + `member`

### Clip Card

A pre-paid credit system. Customers buy clips and spend them to book sessions.

**Setup:**
1. Create a Shopify product with variants for different clip counts:
   - "5 Clips" variant
   - "10 Clips" variant
   - "20 Clips" variant
2. In Settings, link the product under **Clip Card**
3. **Map each variant to its clip count:**
   - Select variant "5 Clips" → enter 5
   - Select variant "10 Clips" → enter 10
   - Select variant "20 Clips" → enter 20
4. Save

**How it works:**
- Customer buys "10 Clips" variant → receives 10 clip credits
- Each booking deducts clips based on the session
- Customer tagged with `clip-card` + `member`
- When all clips are used, member status for new bookings depends on remaining entitlements

**Tags applied:** `clip-card` + `member`

---

## Customer Tags

All membership products automatically tag the customer in Shopify:

| Membership | Tags Applied |
|-----------|-------------|
| Annual Pass | `annual-pass`, `member` |
| Monthly Pass | `monthly-pass`, `member` |
| Clip Card | `clip-card`, `member` |

The `member` tag is applied to **all** membership types. This is the primary tag CapFlow uses to detect member status.

---

## Checking Member Status

### In the Admin

- **Customers** page shows all members with their entitlement type and status
- Filter by type (Annual Pass, Clip Card, etc.)
- Status indicators: **Active**, **Expiring** (within 30 days), **Expired**
- Clip balance shown for Clip Card holders

### In the Booking Widget

When a member visits your storefront and is logged in to their Shopify account, the widget automatically:
- Detects their membership via customer tags
- Shows member-pool availability
- Allows booking from reserved member slots

---

## Troubleshooting Membership

### "Customer not detected as member"
1. Check their Shopify customer profile for the `member` tag
2. Verify the membership product is linked in Settings
3. Ensure the customer actually purchased the product (check order history)
4. If the tag is missing, you can add it manually in Shopify admin

### "Customer shows as expired"
- Annual/Monthly Pass: Check if the configured duration has elapsed since purchase
- Clip Card: Check if all clips have been used (Customers > Clip Balances)

### "Clips not credited after purchase"
- Verify the clip card variant mapping in Settings matches the purchased variant
- Check that the variant ID in CapFlow matches the Shopify variant

---

## Tips

- **Test with a staff account:** Create a test order for a membership product and verify the tags and entitlements work correctly
- **Multiple memberships:** A customer can have multiple entitlements (e.g., Annual Pass + Clip Card)
- **Manual tagging:** In a pinch, you can manually add the `member` tag to a customer in Shopify admin — but this won't create a proper entitlement record
- **Pricing:** Membership products are regular Shopify products — you set pricing, descriptions, and images in Shopify as usual

---

## What's Next?

- [Capacity Pools](/help/capacity-pools) — How member capacity works
- [Customers & Members](/help/customers-and-members) — Managing members day-to-day
- [Settings Reference](/help/settings-reference) — Member booking limits and cancellation policies
