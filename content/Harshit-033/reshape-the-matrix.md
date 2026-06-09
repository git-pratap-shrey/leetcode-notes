---
title: "Reshape the Matrix"
slug: reshape-the-matrix
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used to proceed with the review.

---

# Question Revision
### Reshape the Matrix

**Pattern:** Simulation / Coordinate Mapping

**Brute Force:** 
Flatten the original matrix into a 1D array, then iterate through that array to populate the new $r \times c$ matrix.

**Optimal Approach:**
Iterate through all elements using a single loop from $0$ to $(m \times n - 1)$. Map the linear index $i$ to the source and destination coordinates using division and modulo:
- Source: `mat[i / n][i % n]`
- Destination: `result[i / c][i % c]`

**Complexity:**
- Time: $O(m \times n)$
- Space: $O(r \times c)$ to store the reshaped matrix.

**The 'Aha' Moment:**
A 2D matrix can be treated as a 1D array where any linear index $i$ maps to `(i / width, i % width)`.

**Summary:**
Use division and modulo to map linear indices between two different 2D coordinate systems.

---