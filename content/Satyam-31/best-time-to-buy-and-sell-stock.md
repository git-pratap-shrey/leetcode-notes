---
title: "Best Time to Buy and Sell Stock"
slug: best-time-to-buy-and-sell-stock
date: "2026-06-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to receive a review.

---

# Question Revision
### Best Time to Buy and Sell Stock

**Pattern:** Greedy / Sliding Window

**Brute Force:**
Use nested loops to calculate the profit for every possible pair of buy and sell days.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Iterate through the array once while maintaining two variables: the minimum price encountered so far and the maximum profit found. At each step, update the minimum price or calculate the potential profit (current price minus minimum price) and update the maximum.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:**
The constraint that you must buy before you sell means you only need to track the lowest historical point to maximize the potential gain at any current price.

**Summary:**
Track the lowest price seen so far and calculate the maximum difference at every step.

---