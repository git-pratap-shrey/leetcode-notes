---
title: "Best Time to Buy and Sell Stock II"
slug: best-time-to-buy-and-sell-stock-ii
date: "2026-07-22"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** and **Language** sections of your request were left blank.

---

# Question Revision
### Best Time to Buy and Sell Stock II

**Pattern:** Greedy

**Brute Force:**
Use recursion to explore every possible combination of buying and selling days, calculating the profit for each valid sequence. Time Complexity: $O(2^n)$.

**Optimal Approach:**
Iterate through the price array once. Whenever the price on day $i$ is greater than day $i-1$, add the difference to the total profit. This captures every single upward price movement.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The permission to trade multiple times means the maximum total profit is simply the sum of every positive slope in the price graph.

**Summary:**
Maximize profit by summing every positive increment between consecutive days.

---