---
title: "Unique Paths II"
slug: unique-paths-ii
date: "2026-07-25"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Unique Paths II

**Pattern:** Dynamic Programming (DP)

**Brute Force:** 
Recursive DFS to explore every possible path from $(0,0)$ to $(m-1, n-1)$, returning 1 if the destination is reached and 0 if an obstacle or boundary is hit. 
- **Complexity:** $O(2^{m+n})$ time, $O(m+n)$ space.

**Optimal Approach:**
Use a 1D DP array (space-optimized from 2D) to track the number of ways to reach each cell in the current row. 
1. Initialize `dp[0] = 1` (if start is not an obstacle).
2. For each cell $(i, j)$, if `grid[i][j] == 1`, set `dp[j] = 0`.
3. Otherwise, `dp[j] = dp[j] + dp[j-1]` (current value is the "top" cell, `dp[j-1]` is the "left" cell).

- **Time Complexity:** $O(m \times n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The problem asks for the total number of ways to reach a destination where each state depends solely on the sum of its immediate predecessors (top and left).

**Summary:** 
Compute paths by summing the top and left neighbors, resetting the value to zero whenever an obstacle is encountered.

---