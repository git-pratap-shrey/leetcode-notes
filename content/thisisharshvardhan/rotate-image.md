---
title: "Rotate Image"
slug: rotate-image
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Two-step matrix transformation: Transpose (swap `matrix[i][j]` with `matrix[j][i]`) followed by a horizontal reflection (reverse each row).
- **Optimality**: Optimal. This is the standard in-place method to achieve a 90-degree clockwise rotation without requiring additional space.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the side length of the matrix. The transpose step visits approximately $n^2/2$ elements, and the reverse step visits $n^2/2$ elements.
- **Space Complexity**: $O(1)$. All operations are performed in-place.

## Efficiency Feedback
- **Runtime**: Very efficient. The use of Python's built-in `.reverse()` method is implemented in C, making it faster than a manual loop for reversing rows.
- **Memory**: Minimal overhead; no auxiliary data structures are used.

## Code Quality
- **Readability**: Good. The logic is split into two clear, commented steps.
- **Structure**: Good. The nested loop for transposing correctly starts the inner loop at `i + 1` to avoid swapping elements back to their original positions.
- **Naming**: Good. `n`, `i`, and `j` are conventional and appropriate for matrix indexing.
- **Improvements**: No concrete improvements needed; the code is concise and idiomatic.

---

# Question Revision
### Rotate Image

**Pattern:** Matrix Manipulation (Transpose & Reflect)

**Brute Force:** 
Create a new $n \times n$ matrix and map each element from the original matrix using the transformation `new_matrix[j][n - 1 - i] = matrix[i][j]`.
- **Time:** $O(n^2)$
- **Space:** $O(n^2)$

**Optimal Approach:** 
Perform the rotation in-place using two linear transformations:
1. **Transpose:** Swap `matrix[i][j]` with `matrix[j][i]` to turn rows into columns.
2. **Reverse:** Reverse each individual row.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
A $90^\circ$ clockwise rotation is mathematically identical to reflecting the matrix across its main diagonal (transpose) followed by a horizontal reflection (reverse rows).

**Summary:** 
To rotate a matrix $90^\circ$ clockwise in-place, transpose it and then reverse each row.

---