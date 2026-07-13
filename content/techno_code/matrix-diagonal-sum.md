---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Matrix Traversal (Single Pass)

**Brute Force:** Iterate through the matrix using nested loops to identify elements where `row == col` (primary) or `row + col == n - 1` (secondary), summing them while using a set or boolean flag to avoid double-counting the center.

**Optimal Approach:** 
Use a single loop to traverse the rows. For each row `i`, add the primary diagonal element `mat[i][i]` and the secondary diagonal element `mat[i][n - 1 - i]`. If the matrix size is odd and the current element is the center (`i == n - 1 - i`), add it only once.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The secondary diagonal index is always the mirror of the primary index relative to the matrix width ($n - 1 - i$).

**Summary:** Sum elements at `(i, i)` and `(i, n-1-i)` in one pass, subtracting the center element if $n$ is odd.

---