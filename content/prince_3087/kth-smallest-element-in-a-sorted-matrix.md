---
title: "Kth Smallest Element in a Sorted Matrix"
slug: kth-smallest-element-in-a-sorted-matrix
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Revision Report: Kth Smallest Element in a Sorted Matrix

**Pattern:** Binary Search on Value Range

**Brute Force:** 
Flatten the $N \times N$ matrix into a 1D array, sort it, and return the element at index $k-1$. 
- Time: $O(N^2 \log N^2)$
- Space: $O(N^2)$

**Optimal Approach:** 
Perform binary search on the **range of values** (between the top-left minimum and bottom-right maximum). For each `mid` value, count how many elements in the matrix are less than or equal to `mid` using a "staircase" traversal starting from the bottom-left corner. If the count is $\ge k$, the answer lies in the lower half of the value range.

- **Time Complexity:** $O(n \log(\text{max} - \text{min}))$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The dual-sorting (rows and columns) allows counting elements $\le X$ in $O(n)$ time by traversing only the boundary where elements transition from $\le X$ to $> X$.

**Summary:** 
Binary search the value range and use a staircase traversal to count elements in linear time.

---