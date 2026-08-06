---
title: "Triangle"
slug: triangle
date: "2026-07-31"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and the language used to proceed with the review.

---

# Question Revision
### LeetCode: Triangle

**Pattern:** Dynamic Programming (Bottom-Up)

**Brute Force:** Use recursive DFS to explore every possible path from the top to the base.
- **Time:** $O(2^n)$
- **Space:** $O(n)$ (Recursion stack)

**Optimal Approach:** Start from the second-to-last row and move upwards. For each element, add the minimum of its two children from the row below to its own value. This collapses the triangle into a single minimum value at the apex.
- **Time:** $O(n^2)$ where $n$ is the number of rows (visits each element once).
- **Space:** $O(1)$ if modifying the input array in-place, or $O(n)$ using a 1D array to store the current row's results.

**The 'Aha' Moment:** The decision at any cell depends only on the optimal results of the cells directly below it, making a bottom-up approach eliminate the need for complex boundary checks.

**Summary:** Work from the bottom row up to the top, accumulating the minimum path sum at each step.

---