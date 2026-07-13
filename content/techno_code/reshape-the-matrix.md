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

**Pattern:** Index Mapping / Matrix Transformation

**Brute Force:** 
Flatten the original $m \times n$ matrix into a 1D array, then iterate through that array to populate a new $r \times c$ matrix.

**Optimal Approach:**
Use a single loop from $0$ to $(m \times n) - 1$. For each index $k$, map it to the original matrix coordinates using `(k // n, k % n)` and to the new matrix coordinates using `(k // c, k % c)`.
- **Time Complexity:** $O(m \cdot n)$
- **Space Complexity:** $O(r \cdot c)$ to store the reshaped matrix.

**The 'Aha' Moment:** 
The total element count is invariant, meaning any 2D coordinate $(r, c)$ in a matrix with $C$ columns can be represented as a unique 1D index $i = r \cdot C + c$.

**Summary:** 
Use division (`//`) and modulo (`%`) to treat 2D matrices as virtual 1D arrays for seamless reshaping.

---