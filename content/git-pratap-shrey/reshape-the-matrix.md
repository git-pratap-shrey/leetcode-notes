---
title: "Reshape the Matrix"
slug: reshape-the-matrix
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the "Code:" section. Please provide the implementation you would like me to analyze, and I will review it according to the requested criteria.

---

# Question Revision
### Reshape the Matrix

**Pattern:** Array Simulation / Matrix Mapping

**Brute Force:**
Flatten the original matrix into a 1D array, then iterate through that array to populate a new matrix of dimensions $r \times c$.

**Optimal Approach:**
Iterate through all elements using a single counter from $0$ to $(rows \times cols) - 1$. Use integer division and modulo to map the linear index to the coordinates of both the original and the reshaped matrix.
- **Time Complexity:** $O(m \times n)$ where $m, n$ are the original dimensions.
- **Space Complexity:** $O(r \times c)$ to store the result.

**The 'Aha' Moment:**
The requirement that the total number of elements must remain constant suggests treating the 2D grid as a virtual 1D array.

**Summary:**
Remap 2D coordinates to a 1D index using $i \times \text{cols} + j$, then back to 2D using $\text{index} // \text{new\_cols}$ and $\text{index} \% \text{new\_cols}$.

---