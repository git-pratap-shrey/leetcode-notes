---
title: "Reshape the Matrix"
slug: reshape-the-matrix
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Reshape the Matrix

**Pattern:** Matrix Manipulation / Index Mapping

**Brute Force:** 
Flatten the original matrix into a 1D array, then iterate through that array to fill a new matrix of size $r \times c$.

**Optimal Approach:**
Use a single loop from $0$ to $(\text{total elements} - 1)$ and map the linear index to 2D coordinates for both the source and destination matrices using division and modulo.
- **Source coordinate:** `mat[i / original_cols][i % original_cols]`
- **Destination coordinate:** `reshaped[i / new_cols][i % new_cols]`

- **Time Complexity:** $O(r \times c)$
- **Space Complexity:** $O(r \times c)$ (to store the output matrix)

**The 'Aha' Moment:** 
The requirement that the total number of elements must remain constant reveals that the matrix is just a 1D array wrapped in 2D coordinates.

**Summary:** 
Map linear indices to 2D coordinates using `/` for the row index and `%` for the column index.

---