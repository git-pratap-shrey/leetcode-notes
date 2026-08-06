---
title: "Maximum Product of Three Numbers"
slug: maximum-product-of-three-numbers
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review, including the programming language used.

---

# Question Revision
### Maximum Product of Three Numbers

**Pattern:** Greedy / Sorting

**Brute Force:** 
Iterate through all possible triplets using three nested loops to find the maximum product.
- Time: $O(n^3)$
- Space: $O(1)$

**Optimal Approach:** 
Identify the three largest values and the two smallest values in the array. The maximum product is the maximum of:
1. The product of the three largest numbers (all positive or mixed).
2. The product of the two smallest numbers (highly negative) and the largest number.

- **Time:** $O(n)$ (single pass to find 5 extrema) or $O(n \log n)$ (sorting).
- **Space:** $O(1)$.

**The 'Aha' Moment:** 
Two negative numbers multiply to a positive, meaning the smallest values in the array could contribute to the maximum product.

**Summary:** Compare the product of the three largest numbers against the product of the two smallest numbers and the largest number.

---