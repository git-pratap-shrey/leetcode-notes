---
title: "Matrix Diagonal Sum"
slug: matrix-diagonal-sum
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code block in your message is currently empty.

---

# Question Revision
### Matrix Diagonal Sum

**Pattern:** Matrix Traversal (Single Pass)

**Brute Force:** 
Iterate through the matrix twice using two separate loops: once to sum the primary diagonal (`mat[i][i]`) and once to sum the secondary diagonal (`mat[i][n-1-i]`), then subtract the center element if $n$ is odd.

**Optimal Approach:** 
Traverse the matrix once using a single loop from $0$ to $n-1$. In each iteration, add both `mat[i][i]` (primary) and `mat[i][n-1-i]` (secondary) to the total. If $n$ is odd, the center element is added twice; subtract it once at the end.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Both the primary and secondary diagonal elements can be indexed using only the current row index $i$, allowing for a single-pass solution.

**Summary:** 
Sum both diagonals in one loop and subtract the center element if the matrix dimension is odd.

---