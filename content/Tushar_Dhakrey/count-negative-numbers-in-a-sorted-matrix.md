---
title: "Count Negative Numbers in a Sorted Matrix"
slug: count-negative-numbers-in-a-sorted-matrix
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like reviewed.

---

# Question Revision
### Count Negative Numbers in a Sorted Matrix

**Pattern:** Two Pointers (Staircase Search)

**Brute Force:** Iterate through every element using nested loops and increment a counter if the value is negative.
- **Time:** $O(m \cdot n)$
- **Space:** $O(1)$

**Optimal Approach:** Start at the bottom-left corner $(m-1, 0)$. If the current element is negative, all elements to its right in that row are also negative ($n - \text{col}$); add this count and move up one row. If the element is non-negative, move right one column to find the boundary.
- **Time:** $O(m + n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** Since both rows and columns are sorted, the boundary between non-negative and negative numbers forms a monotonic "staircase" path across the matrix.

**Summary:** Use a staircase traversal starting from the bottom-left (or top-right) to count negatives in $O(m+n)$ by eliminating a row or column at every step.

---