---
title: "Spiral Matrix"
slug: spiral-matrix
date: "2026-06-23"
---

# My Solution
~~~java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        ArrayList<Integer> nums = new ArrayList<>();

        int top = 0;
        int bottom = matrix.length - 1;
        int left = 0;
        int right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {

            // Left to Right
            for (int j = left; j <= right; j++) {
                nums.add(matrix[top][j]);
            }
            top++;

            // Top to Bottom
            for (int i = top; i <= bottom; i++) {
                nums.add(matrix[i][right]);
            }
            right--;

            // Right to Left
            if (top <= bottom) {
                for (int j = right; j >= left; j--) {
                    nums.add(matrix[bottom][j]);
                }
                bottom--;
            }

            // Bottom to Top
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    nums.add(matrix[i][left]);
                }
                left++;
            }
        }

        return nums;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Simulation using boundary pointers (`top`, `bottom`, `left`, `right`).
*   **Optimality:** Optimal. The algorithm visits each element exactly once, which is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity:** $O(M \times N)$, where $M$ is the number of rows and $N$ is the number of columns.
*   **Space Complexity:** $O(1)$ auxiliary space (excluding the output list), as it uses only a fixed number of integer pointers.

## Efficiency Feedback
*   **Performance:** Excellent. The logic correctly handles non-square matrices by checking the boundary conditions (`if (top <= bottom)` and `if (left <= right)`) before the inward traversals. This prevents duplicate element processing in cases where the matrix has an odd number of rows or columns.
*   **Optimization:** The solution is already as efficient as possible for this problem.

## Code Quality
*   **Readability:** Good. The logic is segmented into clear directional blocks.
*   **Structure:** Good. The while-loop structure naturally handles the shrinking matrix boundaries.
*   **Naming:** Good. Variable names (`top`, `bottom`, `left`, `right`) clearly correspond to the matrix boundaries.
*   **Concrete Improvements:** 
    *   **Defensive Programming:** Add a check for `if (matrix == null || matrix.length == 0)` at the beginning to handle empty inputs gracefully, preventing an `ArrayIndexOutOfBoundsException` on `matrix[0].length`.
    *   **Capacity Initialization:** Since the total number of elements is known ($M \times N$), initialize the `ArrayList` with `new ArrayList<>(matrix.length * matrix[0].length)` to avoid unnecessary array resizing during additions.

---

# Question Revision
### Revision Report: Spiral Matrix

**Pattern:** Simulation / Boundary Management

**Brute Force:**
Maintain a 2D `visited` array of the same dimensions. Traverse in the order (Right → Down → Left → Up). At each step, check if the next cell is within bounds and not yet visited. If blocked, change direction.
*   **Time:** $O(m \times n)$
*   **Space:** $O(m \times n)$

**Optimal Approach:**
Define four boundaries: `top`, `bottom`, `left`, and `right`. Traverse along the current boundary, then shrink the boundary (e.g., `top++` after finishing the top row). Repeat until `top > bottom` or `left > right`.
*   **Time:** $O(m \times n)$
*   **Space:** $O(1)$ (excluding the output array)

**The 'Aha' Moment:**
When a problem requires traversing a matrix in a predictable geometric path that consumes the grid layer by layer, managing shrinking boundaries is cleaner than tracking visited cells.

**Summary:** 
Use the "Shrinking Boundary" pattern to transform a complex path traversal into four simple, repetitive pointer updates.

---