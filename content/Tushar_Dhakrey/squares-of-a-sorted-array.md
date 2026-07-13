---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-06-03"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Revision Report: Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:**
Square every element in the array and then apply a standard sorting algorithm.
*   **Time:** $O(n \log n)$
*   **Space:** $O(1)$ (excluding output array)

**Optimal Approach:**
Since the array is sorted, the largest squares are guaranteed to be at the extremes (far left for negative, far right for positive). Use two pointers (`left` at $0$, `right` at $n-1$). Compare the squares at both ends, place the larger value at the end of a new result array, and move the corresponding pointer inward.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
The input is sorted, meaning the maximum possible square must be at one of the two boundaries.

**Summary:**
Use two pointers at the array boundaries to pick the largest square and fill the result array from back to front.

---