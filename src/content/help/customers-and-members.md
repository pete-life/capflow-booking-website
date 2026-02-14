---
title: "Customers & Members"
description: "Member management, clips, and fees"
order: 14
category: "Insights"
---
The Customers page helps you manage memberships, clip balances, and fee accounts.

**Location:** Sidebar > Customers

---

## Overview

The Customers page has three tabs:

1. **Members** — Active memberships and entitlements
2. **Fee Balances** — Outstanding fees from cancellations and no-shows
3. **Clip Balances** — Pre-paid clip credit tracking

---

## Members Tab

Shows all customers with active (or recently expired) memberships.

### What You See

| Column | Description |
|--------|-------------|
| **Customer** | Name and email (from Shopify) |
| **Type** | Annual Pass, Monthly Pass, or Clip Card |
| **Status** | Active, Expiring (within 30 days), or Expired |
| **Expires** | Expiration date for time-based passes |
| **Clip Balance** | Remaining clips (for Clip Card holders) |

### Filtering

- **By type** — Show only Annual Pass, Clip Card, etc.
- **By status** — Filter Active, Expiring, or Expired
- **Search** — Find by customer ID

### Member Statuses

| Status | Meaning |
|--------|---------|
| **Active** | Membership is current and valid |
| **Expiring** | Expires within the next 30 days |
| **Expired** | Past expiration date, no longer valid |

---

## Customer Detail

Click a member to see their full profile:

- Membership details (type, dates, status)
- Booking history
- Clip balance and transaction history (if applicable)
- Fee account balance
- Shopify customer link

---

## Fee Balances Tab

Tracks fees owed by customers from:
- **Late cancellations** — Cancelled within the fee window (not the free window)
- **No-shows** — Marked as no-show by staff

### What You See

| Column | Description |
|--------|-------------|
| **Customer** | Name and email |
| **Balance** | Outstanding amount in DKK |
| **Last Activity** | Most recent fee event |

### Filtering
- **Outstanding only** — Toggle to show only customers with unpaid balances

### Collecting Fees

Fees are tracked in CapFlow but **not auto-charged**. You'll need to collect them through your own process:
- Charge at the next check-in
- Send an invoice
- Deduct from a future refund
- Waive the fee (update the balance manually)

---

## Clip Balances Tab

Shows all customers with clip card credits.

### What You See

| Column | Description |
|--------|-------------|
| **Customer** | Name and email |
| **Balance** | Remaining clips |
| **Total Purchased** | All clips ever purchased |
| **Total Used** | Clips consumed by bookings |

### How Clips Work

1. Customer purchases a Clip Card product on Shopify
2. Clips are credited to their account (based on variant mapping in Settings)
3. Each booking deducts clips
4. Cancelled bookings refund clips (if within free cancellation window)
5. When balance reaches 0, they need to purchase more

### Clip Refunds on Cancellation

- **Free cancellation window:** Clips are fully refunded
- **Fee cancellation window:** Clips are refunded, but cancellation fee applies
- **Blocked window:** Cannot cancel, clips not refunded

---

## Tips

- **Check Expiring members** regularly — reach out to encourage renewal
- **Review fee balances monthly** — don't let outstanding fees accumulate
- **Monitor clip balances** — customers with low balances might be ready to purchase more
- **Use the search** to quickly look up a specific customer before they arrive

---

## What's Next?

- [Membership Setup](/help/membership-setup) — Configure membership products
- [Settings Reference](/help/settings-reference) — Adjust member booking limits and cancellation policies
- [Check-in](/help/checkin) — Process member arrivals
