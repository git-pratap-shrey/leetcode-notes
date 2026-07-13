---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-06-03"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Square every element in the array and then apply a sorting algorithm.
- **Time:** $O(n \log n)$
- **Space:** $O(n)$ or $O(1)$ (depending on sorting implementation)

**Optimal Approach:** Since the input is sorted, the largest squares must exist at either the extreme left (large negative) or extreme right (large positive). Initialize two pointers at the start and end of the array; compare their squares, place the larger value at the end of a new result array, and move the corresponding pointer inward.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** The sorted property is preserved in magnitude but flipped for negative numbers, meaning the maximum values are always at the boundaries.

**Summary:** Use two pointers at the edges to pick the largest square and fill the result array from back to front.

---