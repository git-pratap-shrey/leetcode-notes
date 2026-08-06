---
title: "Maximum Product of Three Numbers"
slug: maximum-product-of-three-numbers
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code and the language you would like me to analyze. The `Language` and `Code` sections of your request were left blank.

---

# Question Revision
### Maximum Product of Three Numbers

**Pattern:** Greedy / Sorting

**Brute Force:** 
Iterate through all possible triplets using three nested loops and track the maximum product.
- **Time:** $O(n^3)$
- **Space:** $O(1)$

**Optimal Approach:** 
The maximum product is always the maximum of two scenarios:
1. The three largest positive numbers.
2. The two most extreme negative numbers (their product is positive) multiplied by the largest positive number.

Scan the array once to find the 3 largest and 2 smallest values, or sort the array and compare `nums[n-1] * nums[n-2] * nums[n-3]` vs `nums[0] * nums[1] * nums[n-1]`.

- **Time:** $O(n)$ (single pass) or $O(n \log n)$ (sorting)
- **Space:** $O(1)$

**The 'Aha' Moment:** 
Two large negative numbers multiply to a positive, potentially outweighing the product of the second and third largest positive numbers.

**Summary:** 
Compare the product of the three largest elements against the product of the two smallest and the largest.

---