---
title: "Pascal's Triangle"
slug: pascals-triangle
date: "2026-04-15"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Pascal's Triangle

**Pattern:** Array Simulation / Dynamic Programming

**Brute Force:** Calculate each element using the combination formula $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. This is inefficient due to repeated factorial calculations and potential integer overflow.

**Optimal Approach:** 
Build the triangle iteratively row-by-row. Start with `[1]`. For every subsequent row, the first and last elements are always `1`. Any element at index `j` is the sum of elements at index `j-1` and `j` from the previous row.
- **Time Complexity:** $O(n^2)$ where $n$ is the number of rows (total elements generated).
- **Space Complexity:** $O(n^2)$ to store the resulting triangle.

**The 'Aha' Moment:** The requirement that each number is the sum of the two directly above it identifies a direct dependency on the previous state, signaling an iterative build process.

**Summary:** Generate rows sequentially where `row[i] = prev[i-1] + prev[i]`, padded by `1`s at the boundaries.

---