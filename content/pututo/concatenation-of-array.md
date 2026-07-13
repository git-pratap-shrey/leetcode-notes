---
title: "Concatenation of Array"
slug: concatenation-of-array
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please include the implementation you would like me to review.

---

# Question Revision
### Concatenation of Array

**Pattern:** Array Manipulation

**Brute Force:** 
Iterate through the input array twice, appending each element to a new list sequentially.

**Optimal Approach:** 
Pre-allocate an array of size $2n$. Use a single pass through the original array to assign `ans[i] = nums[i]` and `ans[i + n] = nums[i]` simultaneously.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (for the output array)

**The 'Aha' Moment:** 
The requirement for an output length of exactly $2n$ suggests a direct index mapping where $i \to i$ and $i \to i+n$.

**Summary:** 
Pre-allocate a $2n$ array and populate it using a single loop to map indices $i$ and $i+n$.

---