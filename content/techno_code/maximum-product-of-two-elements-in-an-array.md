---
title: "Maximum Product of Two Elements in an Array"
slug: maximum-product-of-two-elements-in-an-array
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and the programming language used to receive a detailed review based on the requested criteria.

---

# Question Revision
### Revision Report: Maximum Product of Two Elements in an Array

**Pattern:** Array Traversal / Top-K Elements

**Brute Force:**
Iterate through all possible pairs $(i, j)$ using nested loops, calculate $(nums[i]-1) * (nums[j]-1)$, and track the maximum.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Maintain two variables, `max1` and `max2`, to track the largest and second-largest elements during a single pass through the array. Update them greedily as you encounter larger values.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:**
Since all elements are positive, the maximum product of $(x-1)(y-1)$ is guaranteed to be produced by the two largest integers in the set.

**Summary:**
Single-pass tracking of the two largest elements yields the optimal product in linear time.

---