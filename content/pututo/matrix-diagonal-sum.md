---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code:" section in your request was left empty.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Matrix Traversal

**Brute Force:** Use two separate loops to iterate through the primary diagonal and then the secondary diagonal, finally checking if the matrix size is odd to subtract the overlapping center element.

**Optimal Approach:** Use a single loop from $0$ to $n-1$ to sum both `mat[i][i]` (primary) and `mat[i][n-1-i]` (secondary) simultaneously. If $n$ is odd, subtract the center element `mat[n/2][n/2]` once to account for the overlap.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The symmetry of a square matrix allows both diagonals to be accessed using a single index $i$ and its complement $n-1-i$.

**Summary:** Sum both diagonals in one pass and subtract the middle element if the dimension is odd.

---