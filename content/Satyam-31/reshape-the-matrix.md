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
- **Technique**: Iterative flattening and re-mapping. The solution first validates if a reshape is possible by comparing the total number of elements. It then uses a linear counter (`count`) to map elements from the source matrix to the target matrix using integer division and modulo operators.
- **Optimality**: Optimal. Every element must be visited once to be moved to the new matrix.

## Complexity
- **Time Complexity**: $O(R \times C)$, where $R$ and $C$ are the rows and columns of the original matrix.
- **Space Complexity**: $O(r \times c)$ to store the reshaped matrix. This is the minimum required space for the output.

## Efficiency Feedback
- **Runtime**: The performance is optimal. The use of `count // c` and `count % c` inside the loop adds a small constant overhead compared to maintaining two separate pointers for the result matrix, but it does not change the complexity class.
- **Memory**: Memory usage is minimal and necessary for the output.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The edge case (impossible reshape) is handled immediately at the start.
- **Naming**: Moderate. While `r` and `c` follow the problem's parameter names, `res` is a generic shorthand for `result`.
- **Concrete Improvements**:
    - To avoid repeated division and modulo operations, the result matrix indices could be tracked with two variables: `curr_row` and `curr_col`.
    - Example:
      ```python
      res_r, res_c = 0, 0
      for i in range(rows):
          for j in range(cols):
              res[res_r][res_c] = mat[i][j]
              res_c += 1
              if res_c == c:
                  res_r += 1
                  res_c = 0
      ```

---

# Question Revision
### Reshape the Matrix

**Pattern:** Array Transformation / Index Mapping

**Brute Force:** 
Flatten the original $m \times n$ matrix into a 1D array, then iterate through that array to fill a new $r \times c$ matrix.

**Optimal Approach:** 
Directly map the elements using a single loop from $0$ to $(m \times n) - 1$. For any index $i$, the original element is at `mat[i / n][i % n]` and its new position is `result[i / c][i % c]`.

- **Time Complexity:** $O(m \times n)$
- **Space Complexity:** $O(r \times c)$ (to store the reshaped matrix)

**The 'Aha' Moment:** 
The total element count must remain constant, allowing any 2D coordinate to be treated as a 1D index via $index = row \times \text{total\_cols} + col$.

**Summary:** Use division and modulo to map a linear index between two different 2D dimensions.

---