---
title: "Maximum Product of Two Elements in an Array"
slug: maximum-product-of-two-elements-in-an-array
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Revision Report: Maximum Product of Two Elements in an Array

**Pattern:** Tracking Extremes (Max-K Elements)

**Brute Force:**
Use nested loops to calculate the product of every possible pair $(i, j)$ and maintain a global maximum.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
Maintain two variables, `max1` and `max2`, to track the two largest integers found during a single linear scan. For each element, if it exceeds `max1`, shift `max1` to `max2` and update `max1`. Otherwise, if it only exceeds `max2`, update `max2`.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
Since the array contains positive integers, the maximum product is mathematically guaranteed to be the product of the two largest elements.

**Summary:**
Track the two largest values in one pass to avoid $O(n \log n)$ sorting or $O(n^2)$ pairing.

---