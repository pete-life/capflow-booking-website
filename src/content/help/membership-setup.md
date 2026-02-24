---
title: "Membership Setup"
description: "Configure membership types and link Shopify products"
order: 7
category: "Setup & Configuration"
---
CapFlow supports memberships through Shopify products. When a customer purchases a membership product, they're automatically detected as a member and can book from the member capacity pool.

---

## How Membership Works

1. You define your **membership types** in Settings (or use the defaults)
2. You create a Shopify product for each membership type
3. In CapFlow Settings, you link those products to membership types
4. When a customer buys the product, CapFlow tags them in Shopify automatically
5. CapFlow reads the tags to identify members and grant pool access

---

## Configuring Membership Types

Membership types are fully configurable per shop. Go to **Settings > Membership Types** to define the types that match your business.

Each membership type has:

| Field | Description | Example |
|-------|-------------|---------|
| **Key** | Internal identifier (uppercase, underscores) | `ANNUAL_PASS_FULL` |
| **Display Label** | Shown in dropdowns and the Customers page | Annual Pass (Full) |
| **Shopify Tag** | Tag synced to the customer in Shopify | `annual-pass-full` |
| **Grants Pool Access** | Whether this type can book from the member capacity pool | Yes |
| **Weekday Only** | Restrict member pool access to Mon–Fri | No |

### Adding a New Type

1. Go to **Settings > Membership Types**
2. Click **Add type**
3. Fill in the key, label, and Shopify tag
4. Check **Grants member pool access** if this type should book from the member pool
5. Check **Weekday only** if this type should only have member access on weekdays
6. Click **Save**

### Editing or Removing Types

Click **Edit** next to any existing type to change its properties or remove it.

> **Note:** If you haven't configured any membership types, CapFlow uses sensible defaults. Once you save your own types, they replace the defaults entirely.

---

## Common Membership Types

### Annual Pass

A time-based membership granting full access for a set period.

**Setup:**
1. Create a Shopify product (e.g., "Annual Pass – 2025/2026")
2. Ensure you have a matching membership type in Settings (e.g., key: `ANNUAL_PASS_FULL`, tag: `annual-pass-full`)
3. Go to **Settings > Membership Products**
4. Under **Annual Pass**, search for and select the product
5. Set the **duration in days** (default: 365)
6. Save

**How it works:**
- Customer buys the product → tagged with the configured Shopify tag + `member`
- Member can book from the member pool for the configured duration
- When the pass expires, the customer loses member status

### Full vs. Weekday Pass

If your annual pass product has multiple variants (e.g., "Full" and "Weekday"), CapFlow can automatically assign the correct access level based on which variant was purchased.

**Setup:**
1. Create a Shopify product with variants: "Full Pass" and "Weekday Pass"
2. In Settings, create two membership types:
   - `ANNUAL_PASS_FULL` — Grants pool access, **not** weekday only
   - `ANNUAL_PASS_WEEKDAY` — Grants pool access, **weekday only**
3. Under **Annual Pass**, link the product and map each variant to its pass type

**How weekday passes work:**
- **Monday–Friday:** Weekday pass holders book from the member pool as normal
- **Weekends:** Weekday pass holders can still book, but they book from the **public pool** at regular pricing and are redirected to Shopify checkout for payment
- The booking widget shows an info banner: *"Your weekday pass covers Mon–Fri. Weekend bookings use standard pricing."*

### Monthly Pass

Same as Annual Pass but for shorter periods.

**Setup:**
1. Create a Shopify product (e.g., "Monthly Pass")
2. Ensure a matching membership type exists in Settings
3. Link it under **Monthly Pass** in Settings
4. Set duration (default: 30 days)
5. Save

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
- Customer tagged with the configured Shopify tag + `member`
- When all clips are used, member status for new bookings depends on remaining entitlements

---

## Customer Tags

When a customer purchases a membership product, CapFlow automatically syncs the configured Shopify tag to their customer profile. The tags are derived from your membership type configuration.

**Example configuration:**

| Membership Type | Shopify Tag |
|----------------|-------------|
| Annual Pass (Full) | `annual-pass-full` |
| Annual Pass (Weekday) | `annual-pass-weekday` |
| Monthly Pass | `monthly-pass` |
| Clip Card | `clip-card` |

Tags are added when a membership is granted and removed when it's revoked (if no other active entitlements of the same type exist).

---

## Checking Member Status

### In the Admin

- **Customers** page shows all members with their entitlement type and status
- Filter by type using the dropdown (types come from your configuration)
- Status indicators: **Active**, **Expiring** (within 30 days), **Expired**
- Clip balance shown for Clip Card holders

### In the Booking Widget

When a member visits your storefront and is logged in to their Shopify account, the widget automatically:
- Detects their membership via customer tags
- Shows member-pool availability (or public availability for weekday-only passes on weekends)
- Allows booking from the appropriate pool

---

## Troubleshooting Membership

### "Customer not detected as member"
1. Check their Shopify customer profile for the expected tag (as configured in your membership types)
2. Verify the membership product is linked in Settings
3. Ensure the customer actually purchased the product (check order history)
4. If the tag is missing, you can add it manually in Shopify admin

### "Customer shows as expired"
- Annual/Monthly Pass: Check if the configured duration has elapsed since purchase
- Clip Card: Check if all clips have been used (Customers > Clip Balances)

### "Clips not credited after purchase"
- Verify the clip card variant mapping in Settings matches the purchased variant
- Check that the variant ID in CapFlow matches the Shopify variant

### "Weekday pass holder can't book on a weekday"
- Verify the membership type has **Grants pool access** checked
- Verify the membership type has **Weekday only** checked (not unchecked — that would be a full pass)
- Check that the customer's entitlement is active and not expired

---

## Tips

- **Test with a staff account:** Create a test order for a membership product and verify the tags and entitlements work correctly
- **Multiple memberships:** A customer can have multiple entitlements (e.g., Annual Pass + Clip Card)
- **Manual tagging:** In a pinch, you can manually add the Shopify tag to a customer in Shopify admin — but this won't create a proper entitlement record
- **Pricing:** Membership products are regular Shopify products — you set pricing, descriptions, and images in Shopify as usual
- **Custom types:** You can create membership types beyond the standard ones — for example, a "Student Pass" or "Corporate Membership" — each with its own tag and pool access rules

---

## What's Next?

- [Capacity Pools](/help/capacity-pools) — How member capacity works, including weekday pass behaviour
- [Customers & Members](/help/customers-and-members) — Managing members day-to-day
- [Settings Reference](/help/settings-reference) — Member booking limits and cancellation policies
