---
title: "Search a 2D Matrix"
slug: search-a-2d-matrix
date: "2026-05-30"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed, and specify the language used.

---

# Question Revision
### Search a 2D Matrix

**Pattern:** Binary Search

**Brute Force:** 
Iterate through every cell using nested loops until the target is found.
- Time: $O(m \times n)$
- Space: $O(1)$

**Optimal Approach:** 
Treat the $m \times n$ matrix as a single flattened sorted array. Perform a standard binary search on the range $[0, (m \times n) - 1]$. Convert the 1D `mid` index back to 2D coordinates using:
- `row = mid / cols`
- `col = mid % cols`

- **Time Complexity:** $O(\log(m \times n))$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The rule that the first element of a row is greater than the last element of the previous row signals that the matrix is logically a single sorted list.

**Summary:** 
Virtualize the 2D matrix as a 1D array to apply a single binary search via index mapping.

---