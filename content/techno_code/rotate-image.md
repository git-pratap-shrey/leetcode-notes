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
- **Technique**: Matrix transformation (Transpose followed by Row Reversal).
- **Optimality**: Optimal. Rotating a matrix by 90 degrees clockwise is mathematically equivalent to transposing it and then reversing each row. It operates in-place without requiring additional memory.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the dimension of the matrix. The code iterates through the matrix twice (once for transpose, once for reversal).
- **Space Complexity**: $O(1)$. The rotation is performed in-place.

## Efficiency Feedback
- The runtime is optimal as every element must be visited at least once.
- Using `std::swap` and `std::reverse` is highly efficient in C++ as they are optimized standard library functions.

## Code Quality
- **Readability**: Good. The logic is clear, and the two-step process is explicitly commented.
- **Structure**: Good. The method is concise and follows a logical flow.
- **Naming**: Good. Variable `n` is standard for square matrix dimensions.
- **Improvements**: No functional improvements needed. Minor stylistic cleanup could involve removing unnecessary whitespace at the end of the function.

---

# Question Revision
### Rotate Image

**Pattern:** Matrix Manipulation

**Brute Force:** 
Create a secondary matrix of the same size and map elements from the original to the new position using the formula `new_matrix[col][n - 1 - row] = matrix[row][col]`.
- **Time:** $O(n^2)$
- **Space:** $O(n^2)$

**Optimal Approach:** 
Perform two linear transformations in-place:
1. **Transpose:** Swap `matrix[i][j]` with `matrix[j][i]` (convert rows to columns).
2. **Reverse:** Reverse each individual row.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
A 90-degree clockwise rotation is mathematically equivalent to a reflection across the main diagonal followed by a horizontal reflection.

**Summary:** 
Transpose the matrix and then reverse each row to rotate 90° clockwise in-place.

---