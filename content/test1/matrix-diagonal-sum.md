---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze! Once you paste the source code, I will evaluate it based on the criteria provided.

---

# Question Revision
### Revision Report: Matrix Diagonal Sum

**Pattern:** Array Iteration / Coordinate Geometry

**Brute Force:** Iterate through every cell $(i, j)$ in the $n \times n$ matrix and check if $i == j$ (primary diagonal) or $i + j == n - 1$ (secondary diagonal).
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Iterate through the matrix rows $i$ from $0$ to $n-1$ and sum the elements at indices `[i][i]` and `[i][n - 1 - i]`. If $n$ is odd, subtract the middle element (where both diagonals overlap) once to avoid double-counting.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The realization that diagonals in a square matrix are defined by fixed coordinate relationships ($i=j$ and $i+j=n-1$) allows you to compute the sum using a single loop instead of nested iterations.

**Summary:** For diagonal traversal, replace nested loops with a single pass using the fixed index relationships $(i, i)$ and $(i, n-1-i)$, and always handle the center overlap for odd-sized matrices.

---