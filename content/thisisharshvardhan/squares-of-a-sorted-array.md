---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review, and I will analyze it according to the requested criteria.

---

# Question Revision
### Revision Report: Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** 
Square every element in the array and then sort the resulting array.
- **Time:** $O(n \log n)$
- **Space:** $O(1)$ or $O(n)$ depending on sorting implementation.

**Optimal Approach:** 
Since the input is sorted, the largest squares are guaranteed to be at the extreme ends (most negative or most positive). Use two pointers at the `left` and `right` boundaries. Compare their squares, place the larger value at the end of the result array, and move the respective pointer inward.
- **Time:** $O(n)$
- **Space:** $O(n)$ (to store the output)

**The 'Aha' Moment:** 
The sorted nature of the input means that while the values are linear, their squares follow a "U-shape," placing the maximums at the boundaries.

**Summary:** 
Fill a result array backwards by comparing the absolute values of the two ends of the sorted input.

---