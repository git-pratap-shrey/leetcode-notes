---
title: "Best Time to Buy and Sell Stock"
slug: best-time-to-buy-and-sell-stock
date: "2026-06-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Best Time to Buy and Sell Stock

**Pattern:** Sliding Window / Greedy

**Brute Force:** 
Nested loops to calculate the difference between every possible pair of buy and sell days $(i, j)$ where $j > i$.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Single pass through the array. Maintain a `min_price` variable to track the lowest price encountered so far and update `max_profit` whenever the difference between the current price and `min_price` exceeds the previous maximum.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
You only need to know the absolute minimum value encountered *before* the current element to calculate the potential maximum profit for that day.

**Summary:** 
Track the running minimum to find the maximum positive delta in a single linear scan.

---