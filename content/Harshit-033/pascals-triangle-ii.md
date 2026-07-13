---
title: "Pascal's Triangle II"
slug: pascals-triangle-ii
date: "2026-05-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Pascal's Triangle II

**Pattern:** Space-Optimized Dynamic Programming

**Brute Force:** 
Generate the entire triangle up to `rowIndex` using a 2D array where each element is the sum of the two elements above it.
- Time: $O(k^2)$
- Space: $O(k^2)$

**Optimal Approach:** 
Use a single array of size $k+1$. Iterate from $1$ to $k$, updating the array from **right to left**. By moving backwards, you can calculate the current element using the existing values in the array without overwriting the data required for the next element in that same row.
- Time: $O(k^2)$
- Space: $O(k)$ (output array)

**The 'Aha' Moment:** 
Updating the array from right-to-left allows you to reuse a single row of memory because the value at index $i$ only depends on the previous values at index $i$ and $i-1$.

**Summary:** 
Compute the target row in-place by iterating backwards to maintain the previous row's state without extra memory.

---