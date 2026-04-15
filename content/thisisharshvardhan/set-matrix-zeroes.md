---
title: "Set Matrix Zeroes"
slug: set-matrix-zeroes
date: "2026-04-14"
---

# My Solution
~~~cpp
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int m = matrix[0].size();
        int col0 = 1;

        // Step 1: mark using first row & col
        for(int i = 0; i < n; i++){
            if(matrix[i][0] == 0) col0 = 0;
            for(int j = 1; j < m; j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        // Step 2: update matrix
        for(int i = n - 1; i >= 0; i--){
            for(int j = m - 1; j >= 1; j--){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
            if(col0 == 0) matrix[i][0] = 0;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: In-place marker technique. It uses the first row and first column of the matrix as storage to track which rows and columns need to be zeroed, with an auxiliary variable `col0` to handle the overlap at `matrix[0][0]`.
- **Optimality**: Optimal. It achieves the theoretical minimum time and space complexity for this problem.

## Complexity
- **Time Complexity**: $O(n \times m)$, where $n$ is the number of rows and $m$ is the number of columns. The matrix is traversed twice.
- **Space Complexity**: $O(1)$. Only a single integer variable `col0` is used regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. The backward traversal in Step 2 ensures that marker values are not overwritten before they are processed for subsequent cells.
- **Memory**: Minimal. By repurposing the input matrix for markers, it avoids the $O(n + m)$ space typically required by separate boolean arrays.

## Code Quality
- **Readability**: Good. The logic is split into two distinct phases (marking and updating).
- **Structure**: Good. The backward loop correctly prevents the "cascade effect" where markers are prematurely zeroed.
- **Naming**: Moderate. `n`, `m`, and `col0` are acceptable in competitive programming but lack descriptiveness (e.g., `rowCount`, `colCount`, `firstColNeedsZero`).
- **Concrete Improvements**:
    - Use `bool` for `col0` instead of `int` to better reflect its purpose as a flag.
    - Add a check for empty input `if (matrix.empty()) return;` to prevent crashes on `matrix[0].size()`.

---

# Question Revision
### Set Matrix Zeroes

**Pattern:** In-place State Marking

**Brute Force:** Create a copy of the matrix; iterate through the original, and for every `0` found, mark its entire row and column as `0` in the copy. 
- **Complexity:** Time: $O(m \times n)$, Space: $O(m \times n)$

**Optimal Approach:** 
Use the first row and first column of the matrix as markers to track which rows and columns need to be zeroed. Since the cell `matrix[0][0]` overlaps, use a separate boolean flag to track the state of the first column.
1. Scan the matrix: if `matrix[i][j] == 0`, set `matrix[i][0] = 0` and `matrix[0][j] = 0`.
2. Iterate through the matrix (excluding the first row/col) and update cells based on the markers.
3. Finally, update the first row and first column based on their respective markers and the column flag.

- **Time Complexity:** $O(m \times n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement for "in-place" modification suggests that the input matrix itself must be repurposed to store the metadata needed for the update.

**Summary:** Use the first row and column as markers to track zeroes, utilizing a single flag for the overlap to achieve constant space.

---