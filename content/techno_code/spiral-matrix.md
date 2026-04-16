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
- **Technique**: Two-pointer/Boundary contraction. It maintains four boundaries (`top`, `bottom`, `left`, `right`) and shrinks them inward as each side of the spiral is traversed.
- **Optimality**: Optimal. Every element in the matrix must be visited exactly once to construct the result.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output vector), or $O(N \times M)$ including the output.

## Efficiency Feedback
- **Performance**: The runtime is optimal as it performs a single pass over the data.
- **Optimization**: The `ans` vector could be initialized with `ans.reserve(n * m)` to prevent multiple memory reallocations during `push_back` operations.

## Code Quality
- **Readability**: Good. The comments clearly delineate the direction of traversal.
- **Structure**: Good. The boundary checks (`if (top <= bottom)` and `if (left <= right)`) inside the loop correctly handle non-square matrices to prevent duplicate processing of rows/columns.
- **Naming**: Good. Variable names are intuitive and descriptive.
- **Improvements**: Use `const` for `n` and `m` as they do not change.

---

# Question Revision
### Spiral Matrix

**Pattern:** Boundary Simulation

**Brute Force:** Use a `visited` boolean matrix and a direction vector `[(0,1), (1,0), (0,-1), (-1,0)]`. Move in the current direction until a boundary or a visited cell is hit, then rotate the direction vector.

**Optimal Approach:** Maintain four boundary pointers: `top`, `bottom`, `left`, and `right`. Traverse the current outer perimeter in four distinct steps (Right $\rightarrow$ Down $\rightarrow$ Left $\rightarrow$ Up), shrinking the respective boundary inward after each completed side. Continue until the boundaries overlap.

*   **Time Complexity:** $O(M \times N)$
*   **Space Complexity:** $O(1)$ (excluding output array)

**The 'Aha' Moment:** The requirement to change direction specifically upon hitting the current "edge" of the remaining elements signals a boundary-shrinking simulation.

**Summary:** Process the matrix perimeter and contract boundaries inward in a clockwise cycle until all elements are visited.

---