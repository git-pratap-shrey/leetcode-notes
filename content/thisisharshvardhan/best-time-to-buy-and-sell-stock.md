---
title: "Best Time to Buy and Sell Stock"
slug: best-time-to-buy-and-sell-stock
date: "2026-04-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request is currently empty.

---

# Question Revision
### Best Time to Buy and Sell Stock

**Pattern:** Greedy / One-Pass

**Brute Force:**
Iterate through every possible pair of buy and sell days using nested loops to calculate all potential profits and return the maximum.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Maintain a running variable for the `min_price` encountered so far. For every new price, calculate the potential profit (`current_price - min_price`) and update the `max_profit` if the result is higher.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:**
Since you must buy before you sell, the maximum profit at any index is simply the current price minus the lowest price seen previously.

**Summary:**
Track the minimum price seen so far and the maximum difference found in a single traversal.

---