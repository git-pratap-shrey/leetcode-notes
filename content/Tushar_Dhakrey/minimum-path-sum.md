---
title: "Minimum Path Sum"
slug: minimum-path-sum
date: "2026-07-25"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to proceed with the review.

---

# Question Revision
### Minimum Path Sum

**Pattern:** Dynamic Programming (Grid/2D)

**Brute Force:** 
Use recursion (DFS) to explore every possible path from $(0,0)$ to $(m-1, n-1)$.
- **Time:** $O(2^{m+n})$
- **Space:** $O(m+n)$ (recursion stack)

**Optimal Approach:** 
Use a bottom-up DP table (or modify the grid in-place) to store the minimum cost to reach each cell. Since you can only move down or right, the cost to reach `grid[i][j]` is its own value plus the minimum of the values from the cell above it or the cell to its left.
- **Time:** $O(m \times n)$
- **Space:** $O(1)$ (if modifying input grid) or $O(m \times n)$ (if using a separate DP table).

**The 'Aha' Moment:** 
The restriction to move only "down or right" creates a directed acyclic graph (DAG) where each cell's optimal value depends solely on two previously computed neighbors.

**Summary:** 
Accumulate the minimum path cost at each cell by adding its value to the minimum of its top or left neighbor.

---