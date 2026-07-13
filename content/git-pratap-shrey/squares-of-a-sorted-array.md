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
### Squares of a Sorted Array

**Pattern:** Two Pointers (Opposite Ends)

**Brute Force:** Square every element in the array and then apply a standard sorting algorithm.  
**Complexity:** Time: $O(n \log n)$ | Space: $O(1)$ or $O(n)$

**Optimal Approach:** Initialize two pointers at the start and end of the array. Compare the squares of the elements at these pointers; place the larger square at the end of the result array and move the pointer toward the center.  
**Complexity:** Time: $O(n)$ | Space: $O(n)$

**The 'Aha' Moment:** The largest squares are guaranteed to be at the extremities (far left or far right) of a sorted array containing negative numbers.

**Summary:** Use two pointers to harvest the largest squares from the boundaries and fill the result array backwards.

---