---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code for the "Matrix Diagonal Sum" problem to proceed with the review.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Array Indexing / Linear Traversal

**Brute Force:** Use nested loops to visit every cell $(i, j)$ in the $n \times n$ matrix. Add the value to the total if $i = j$ (primary diagonal) or $i + j = n - 1$ (secondary diagonal).
- **Complexity:** Time: $O(n^2)$, Space: $O(1)$

**Optimal Approach:** Use a single loop from $0$ to $n-1$. In each iteration $i$, access the primary diagonal at `mat[i][i]` and the secondary diagonal at `mat[i][n - 1 - i]`. If $n$ is odd, subtract the center element `mat[n/2][n/2]` once at the end to prevent double-counting.
- **Complexity:** Time: $O(n)$, Space: $O(1)$

**The 'Aha' Moment:** The diagonals are defined by simple linear relationships: $i = j$ for the primary and $i + j = n - 1$ for the secondary.

**Summary:** Iterate once through the rows, summing elements at indices $(i, i)$ and $(i, n-1-i)$, then subtract the center overlap if the matrix dimension is odd.

---