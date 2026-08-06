---
title: "Unique Paths"
slug: unique-paths
date: "2026-07-24"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the **Language** and the **Code** you would like me to analyze. The fields in your request are currently empty, and I cannot perform a review without the source code.

---

# Question Revision
### Unique Paths

**Pattern:** Dynamic Programming / Combinatorics

**Brute Force:** 
Recursive DFS exploring all possible paths from $(0,0)$ to $(m-1, n-1)$.
- **Complexity:** $O(2^{m+n})$ time, $O(m+n)$ space.

**Optimal Approach:**
**DP Logic:** The number of ways to reach cell $(i, j)$ is the sum of ways to reach the cell above it $(i-1, j)$ and the cell to its left $(i, j-1)$.
- **Formula:** $dp[i][j] = dp[i-1][j] + dp[i][j-1]$
- **Complexity:** $O(m \times n)$ time, $O(n)$ space (using a 1D array).

**Alternative (Combinatorics):** 
The robot must take exactly $m-1$ down moves and $n-1$ right moves in any order.
- **Formula:** $\binom{(m-1) + (n-1)}{m-1}$
- **Complexity:** $O(\min(m, n))$ time, $O(1)$ space.

**The 'Aha' Moment:** 
The restriction to only "right" and "down" movements ensures a Directed Acyclic Graph (DAG) structure, where each state depends only on previously computed adjacent states.

**Summary:** 
Total paths to a cell equal the sum of paths from its only two possible predecessors (top and left).

---