---
title: "House Robber II"
slug: house-robber-ii
date: "2026-07-21"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### House Robber II

**Pattern:** Dynamic Programming (DP)

**Brute Force:** 
Recursive exploration of all valid subsets of non-adjacent houses. 
Time: $O(2^n)$ | Space: $O(n)$ (recursion stack).

**Optimal Approach:** 
The circular constraint means house $0$ and house $n-1$ cannot both be robbed. Break the problem into two linear sub-problems:
1. Rob houses from index $0$ to $n-2$ (ignore last).
2. Rob houses from index $1$ to $n-1$ (ignore first).

Run the standard linear DP state transition for both: $dp[i] = \max(dp[i-1], dp[i-2] + \text{nums}[i])$. The final answer is the maximum of the two results.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (by using two variables instead of a DP array).

**The 'Aha' Moment:** 
The circular dependency is broken by realizing that the optimal solution must either exclude the first house or exclude the last house.

**Summary:** 
Treat the circle as two separate linear arrays (one without the first element, one without the last) and return the maximum of their DP results.

---