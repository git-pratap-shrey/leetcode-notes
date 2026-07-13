---
title: "Reshape the Matrix"
slug: reshape-the-matrix
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Simulation/Two-Pointer. The code verifies if the total element count matches ($rows \times cols == r \times c$) and then maps elements from the source matrix to a new destination matrix using target indices.
- **Optimality**: Optimal. Every element must be visited once to be moved, and the space complexity is the minimum required to store the result.

## Complexity
- **Time Complexity**: $O(M \times N)$, where $M$ is the number of rows and $N$ is the number of columns in the original matrix.
- **Space Complexity**: $O(r \times c)$ to store the reshaped matrix.

## Efficiency Feedback
- The runtime is optimal as it uses a single pass through the input data.
- Memory usage is optimal since only the required output matrix is allocated.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The guard clause handles the "impossible reshape" case early.
- **Naming**: Good. Variables like `rows`, `cols`, `res`, `row`, and `col` are intuitive.
- **Improvements**:
    - The nested loop with `row` and `col` counters is efficient, but the mapping could also be achieved using modulo arithmetic: `res[k / c][k % c] = mat[k / cols][k % cols]` where `k` ranges from $0$ to $(rows \times cols) - 1$. However, the current implementation is slightly more performant as it avoids division and modulo operations.

---

# Question Revision
### Reshape the Matrix

**Pattern:** Matrix Transformation / Index Mapping

**Brute Force:** Flatten the original matrix into a 1D list, then iterate through that list to populate a new matrix of dimensions $r \times c$.

**Optimal Approach:** Use a single pointer to track the total number of elements processed. Map this linear index $k$ to 2D coordinates for both matrices using division (for the row) and modulo (for the column).
- **Time Complexity:** $O(m \times n)$
- **Space Complexity:** $O(r \times c)$

**The 'Aha' Moment:** Any 2D matrix is logically a 1D array where `row = index / total_cols` and `col = index % total_cols`.

**Summary:** Treat the matrix as a flattened stream and re-project the linear index into the new dimensions using `/` and `%`.

---