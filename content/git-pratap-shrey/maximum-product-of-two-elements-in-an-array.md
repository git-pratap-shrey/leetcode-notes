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
### Maximum Product of Two Elements in an Array

**Pattern:** Tracking Top Elements

**Brute Force:**
Iterate through all possible pairs $(i, j)$ using nested loops, calculating the product for each and tracking the maximum.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
Maintain two variables, `max1` and `max2`, to track the two largest elements in the array during a single linear scan. The result is `(max1 - 1) * (max2 - 1)`.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
Because all elements are positive, the maximum product is guaranteed to come from the two largest integers in the set.

**Summary:**
Find the two largest numbers in one pass to maximize the product.

---