---
title: "Rotate Image"
slug: rotate-image
date: "2026-04-14"
---

# My Solution
~~~cpp
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
       int n = matrix.size();

    // Step 1: Transpose the matrix
    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }

    // Step 2: Reverse each row
    for(int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }

 
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Matrix Transformation (Transpose followed by Row Reversal).
- **Optimality**: Optimal. Rotating a matrix 90 degrees clockwise is mathematically equivalent to transposing it and then reversing each row. This achieves the result in-place.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the number of rows/columns. Each element is visited a constant number of times.
- **Space Complexity**: $O(1)$, as the transformation is performed in-place without auxiliary data structures.

## Efficiency Feedback
- **Runtime**: The implementation is highly efficient. Using `std::swap` and `std::reverse` leverages optimized STL functions.
- **Memory**: Minimal footprint due to in-place operations.

## Code Quality
- **Readability**: Good. The logic is straightforward and the comments clearly delineate the two phases of the algorithm.
- **Structure**: Good. The separation of the transpose and reverse steps makes the code easy to verify.
- **Naming**: Good. `n`, `i`, and `j` are standard conventions for matrix indexing.
- **Improvements**: No meaningful improvements needed; the code is concise and follows best practices for this specific problem.

---

# Question Revision
### Rotate Image

**Pattern:** Matrix Manipulation

**Brute Force:** 
Create a secondary matrix and map each element from `matrix[i][j]` to `newMatrix[j][n-1-i]`.
- Time: $O(n^2)$
- Space: $O(n^2)$

**Optimal Approach:** 
Perform an in-place transformation in two steps:
1. **Transpose**: Swap `matrix[i][j]` with `matrix[j][i]` to turn rows into columns.
2. **Reverse**: Reverse the elements of each individual row.
- Time: $O(n^2)$
- Space: $O(1)$

**The 'Aha' Moment:** 
A 90-degree clockwise rotation is mathematically equivalent to a reflection over the main diagonal followed by a vertical reflection.

**Summary:** 
Transpose the matrix, then reverse each row.

---