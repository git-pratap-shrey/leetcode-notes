---
title: "House Robber"
slug: house-robber
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed.

---

# Question Revision
### House Robber

**Pattern:** Dynamic Programming (DP)

**Brute Force:** Recursive exploration of all possible combinations (rob current house and skip next vs. skip current house), resulting in an exponential time complexity of $O(2^n)$.

**Optimal Approach:** 
Iterate through the houses maintaining two variables to track the maximum loot possible up to the previous house and the house before that. For each house, the max value is the maximum of:
1. The previous house's max (skip current).
2. The house before the previous + current value (rob current).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The constraint "cannot rob two adjacent houses" indicates that the optimal solution for $i$ depends strictly on the optimal solutions of $i-1$ and $i-2$.

**Summary:** Maximize the sum of non-adjacent elements using a rolling-state DP transition: `max(prev1, prev2 + current)`.

---