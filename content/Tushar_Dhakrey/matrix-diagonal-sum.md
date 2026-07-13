---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the code snippet you would like me to review.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Matrix Traversal (Single Pass)

**Brute Force:** 
Run two separate loops: one to sum the primary diagonal (`i, i`) and another to sum the secondary diagonal (`i, n-1-i`). If the matrix dimension is odd, manually subtract the center element to avoid double-counting.

**Optimal Approach:**
Use a single loop to traverse the rows. In each iteration `i`, add both the primary diagonal element `matrix[i][i]` and the secondary diagonal element `matrix[i][n - 1 - i]` to a running total. After the loop, if $n$ is odd, subtract the center element `matrix[n/2][n/2]` once.

*   **Time Complexity:** $O(n)$ where $n$ is the side length of the matrix.
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Both diagonal elements for any given row `i` can be accessed simultaneously using `i` and `n-1-i`, eliminating the need for nested loops.

**Summary:** 
Sum elements where `row == col` and `row + col == n - 1`, then subtract the center element if the matrix size is odd.

---