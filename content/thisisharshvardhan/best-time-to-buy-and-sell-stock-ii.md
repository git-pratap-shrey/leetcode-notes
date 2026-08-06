---
title: "Best Time to Buy and Sell Stock II"
slug: best-time-to-buy-and-sell-stock-ii
date: "2026-07-31"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to receive a review based on the requested criteria.

---

# Question Revision
### Best Time to Buy and Sell Stock II

**Pattern:** Greedy

**Brute Force:** 
Explore all possible combinations of buying and selling days using recursion/backtracking to find the maximum sum of profits.
- **Complexity:** $O(2^n)$ time, $O(n)$ space.

**Optimal Approach:** 
Iterate through the price array once. Whenever the price on day `i` is higher than day `i-1`, add the difference to the total profit. This effectively captures every ascending slope in the price graph.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The ability to trade multiple times means we don't need to find the absolute minimum and maximum; we just need to capture every single single-day price increase.

**Summary:** 
Sum up all positive differences between consecutive days to maximize total profit.

---