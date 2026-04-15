---
title: "Spiral Matrix"
slug: spiral-matrix
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int m = matrix[0].size();

        int left = 0, right = m - 1;
        int top = 0, bottom = n - 1;

        vector<int> ans;

        while (top <= bottom && left <= right) {

            // left → right
            for (int i = left; i <= right; i++) {
                ans.push_back(matrix[top][i]);
            }
            top++;

            // top → bottom
            for (int i = top; i <= bottom; i++) {
                ans.push_back(matrix[i][right]);
            }
            right--;

            // right → left
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    ans.push_back(matrix[bottom][i]);
                }
                bottom--;
            }

            // bottom → top
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    ans.push_back(matrix[i][left]);
                }
                left++;
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Boundary Simulation using four pointers (`top`, `bottom`, `left`, `right`).
- **Optimality**: Optimal. Each element of the matrix is visited exactly once.

## Complexity
- **Time Complexity**: $O(n \times m)$, where $n$ is the number of rows and $m$ is the number of columns.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output vector).

## Efficiency Feedback
- **Runtime**: Optimal. The algorithm performs a single pass over the data.
- **Memory**: Low. Only a few integer variables are used for boundary tracking.
- **Optimization**: Adding `ans.reserve(n * m);` before the `while` loop would prevent multiple memory reallocations as the vector grows.

## Code Quality
- **Readability**: Good. The comments clearly delineate the four directions of movement.
- **Structure**: Good. The boundary checks (`if (top <= bottom)` and `if (left <= right)`) correctly handle non-square matrices to prevent duplicate processing of rows/columns.
- **Naming**: Good. Variable names (`top`, `bottom`, `left`, `right`) are intuitive and standard for this problem.
- **Improvement**: Ensure the code handles an empty matrix input (e.g., `if (matrix.empty()) return {};`) to avoid a segmentation fault when accessing `matrix[0].size()`.

---

# Question Revision
### Spiral Matrix

**Pattern:** Simulation / Boundary Management

**Brute Force:** 
Use a `visited` 2D array and a direction vector `[(0,1), (1,0), (0,-1), (-1,0)]`. Traverse and change direction whenever a boundary or a visited cell is encountered.

**Optimal Approach:** 
Maintain four pointers representing the current boundaries: `top`, `bottom`, `left`, and `right`. Traverse in a cycle (Right $\rightarrow$ Down $\rightarrow$ Left $\rightarrow$ Up), incrementing/decrementing the respective boundary after each edge is completed. Continue until boundaries overlap.

*   **Time Complexity:** $O(m \times n)$ where $m$ is rows and $n$ is columns.
*   **Space Complexity:** $O(1)$ (excluding the output list).

**The 'Aha' Moment:** 
The fixed sequence of directional shifts combined with a shrinking search area indicates that boundary variables are more efficient than tracking visited cells.

**Summary:** 
Traverse the perimeter of the remaining matrix using four boundaries and shrink them inward after every directional pass.

---