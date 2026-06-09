---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Language" and "Code" sections of your request were left empty.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Matrix Traversal (Single Pass)

**Brute Force:** 
Iterate through the matrix using two separate loops: one to sum the primary diagonal (`i == j`) and another to sum the secondary diagonal (`i + j == n - 1`). Subtract the center element once if the matrix dimension is odd.

**Optimal Approach:**
Use a single loop from $i = 0$ to $n-1$. In each iteration, add the primary diagonal element `mat[i][i]` and the secondary diagonal element `mat[i][n - 1 - i]`. To handle the overlap in odd-sized matrices, either skip the secondary element when $i == n - 1 - i$ or subtract the center element at the end.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The indices for both diagonals are dependent on the same row index $i$, allowing both to be accessed simultaneously in one pass.

**Summary:** 
Sum `mat[i][i]` and `mat[i][n-1-i]` in a single loop, ensuring the center element isn't counted twice for odd $n$.

---