---
title: "Search a 2D Matrix"
slug: search-a-2d-matrix
date: "2026-06-06"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Search a 2D Matrix

**Pattern:** Binary Search

**Brute Force:** 
Iterate through every element in the matrix using nested loops until the target is found.
- Time: $O(m \times n)$
- Space: $O(1)$

**Optimal Approach:** 
Treat the matrix as a virtual 1D sorted array. Perform a single binary search from index `0` to `(m * n) - 1`. Map the 1D index `mid` back to 2D coordinates using:
- `row = mid / cols`
- `col = mid % cols`

- **Time Complexity:** $O(\log(m \times n))$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The fact that the first element of a row is greater than the last element of the previous row indicates the entire matrix is a single, contiguous sorted list.

**Summary:** 
Use division and modulo to perform a single binary search over a flattened representation of the matrix.

---