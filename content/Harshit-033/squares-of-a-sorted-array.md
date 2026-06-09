---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-05-31"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Square every element in the array and then sort the resulting array. 
- Time: $O(n \log n)$
- Space: $O(1)$ (ignoring output array)

**Optimal Approach:** Since the input is sorted, the largest squares are guaranteed to be at the boundaries (extreme negative or extreme positive). Initialize two pointers at the start and end of the array; compare their squares, place the larger one at the end of a new result array, and move that pointer inward.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The largest squared value must always be at either the far left or far right of the sorted input.

**Summary:** Fill the result array from back to front by comparing the absolute values of the two outer pointers.

---