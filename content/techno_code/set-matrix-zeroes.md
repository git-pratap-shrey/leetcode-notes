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
- **Technique**: In-place marking using the first row and first column of the matrix as storage for zero indicators. A separate variable `col0` is used to track the state of the first column to avoid conflict with the first row's marker at `matrix[0][0]`.
- **Optimality**: Optimal. It achieves the minimum possible time complexity and the minimum auxiliary space complexity.

## Complexity
- **Time Complexity**: $O(n \times m)$, where $n$ is the number of rows and $m$ is the number of columns. The matrix is traversed twice.
- **Space Complexity**: $O(1)$. No additional data structures are used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- The decision to iterate backwards in Step 2 is a critical optimization; it ensures that the markers in the first row and column are not overwritten before they are processed for the rest of the matrix.

## Code Quality
- **Readability**: Good. The logic is split into two distinct, commented steps.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Moderate. While `n`, `m`, and `col0` are common in competitive programming, using `rows`, `cols`, and `firstColZero` would improve maintainability in a professional codebase.
- **Improvements**:
    - Use `const` for `n` and `m` as they do not change.
    - Replace `n` and `m` with more descriptive names.

---

# Question Revision
### Set Matrix Zeroes

**Pattern**: In-place Matrix Manipulation

**Brute Force**: Create a duplicate matrix. Iterate through the original; whenever a `0` is encountered, update the corresponding row and column in the duplicate to `0`. 
- **Time**: $O(m \times n)$
- **Space**: $O(m \times n)$

**Optimal Approach**: Use the first row and first column of the matrix as markers to track which rows/cols should be zeroed.
1. Use a boolean variable `firstColZero` to track if the first column needs to be zeroed (since `matrix[0][0]` is shared).
2. Iterate through the matrix; if `matrix[i][j] == 0`, set `matrix[i][0] = 0` and `matrix[0][j] = 0`.
3. Iterate through the matrix again (starting from `i=1, j=1`), updating cells to `0` if their corresponding first row or first column marker is `0`.
4. Finally, update the first row and first column based on their markers and the `firstColZero` flag.

- **Time**: $O(m \times n)$
- **Space**: $O(1)$

**The 'Aha' Moment**: The $O(1)$ space constraint implies that the input matrix must serve as its own auxiliary storage for state tracking.

**Summary**: Treat the first row and column as hash sets to mark zero-targets, using one extra variable to resolve the overlap at `(0,0)`.

---