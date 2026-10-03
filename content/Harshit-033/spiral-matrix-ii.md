---
title: "Spiral Matrix II"
slug: spiral-matrix-ii
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> matrix(n,vector<int>(n,0));

        int top=0;
        int bottom=n-1;
        int left=0;
        int right=n-1;
        int count=1;

        while(top<=bottom && left<=right){
            for (int col = left; col <= right; col++) {
            matrix[top][col]=count;
            count++;
        }
        top++;

    
        for (int row = top; row <= bottom; row++) {
            matrix[row][right]=count;
            count++;
        }
        right--;

        
        if (top <= bottom) {
            for (int col = right; col >= left; col--) {
                matrix[bottom][col]=count;
                count++;
            }
            bottom--;
        }

        
        if (left <= right) {
            for (int row = bottom; row >= top; row--) {
                matrix[row][left]=count;
                count++;
            }
            left++;
        }
        }

        return matrix;


    }
};
~~~

# Submission Review
## Approach
- **Technique**: Simulation using boundary pointers (`top`, `bottom`, `left`, `right`).
- **Optimality**: Optimal. The algorithm visits each cell exactly once to populate the matrix.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the dimension of the matrix. Every element is filled exactly once.
- **Space Complexity**: $O(n^2)$ to store the resulting matrix. Auxiliary space is $O(1)$.

## Efficiency Feedback
- **Runtime**: Optimal. The logic avoids redundant checks or revisited cells.
- **Memory**: Optimal. Only the required output structure is allocated.
- **Optimization**: The `if (top <= bottom)` and `if (left <= right)` checks inside the `while` loop are necessary for rectangular matrices but redundant for square matrices ($n \times n$); however, they do not impact performance.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Moderate. Indentation is inconsistent (e.g., the first `for` loop body is indented differently than others), which slightly hinders visual scanning.
- **Naming**: Good. Variables `top`, `bottom`, `left`, `right`, and `count` clearly describe their purpose.
- **Concrete Improvements**: 
    - Fix indentation for consistency.
    - For square matrices, the `while` loop condition could be simplified to `while (count <= n * n)` to remove the need for internal `if` boundary checks.

---

# Question Revision
### Spiral Matrix II

**Pattern:** Simulation / Boundary Tracking

**Brute Force:** Attempting to derive a complex mathematical formula to map a linear value $k$ directly to its $(i, j)$ coordinates based on the current "layer" of the spiral.

**Optimal Approach:**
Initialize a matrix of size $n \times n$ and four boundaries: `top = 0`, `bottom = n-1`, `left = 0`, and `right = n-1`. Use a `while` loop to fill the matrix in a clockwise cycle:
1. Fill from `left` to `right` along the `top` row, then increment `top`.
2. Fill from `top` to `bottom` along the `right` column, then decrement `right`.
3. Fill from `right` to `left` along the `bottom` row, then decrement `bottom`.
4. Fill from `bottom` to `top` along the `left` column, then increment `left`.

- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$ (excluding the output matrix)

**The 'Aha' Moment:** The "spiral" requirement signals a repeating cycle of four directions where the available workspace shrinks after every completed edge.

**Summary:** Simulate the spiral by iterating through four directions and contracting the boundaries inward until all $n^2$ cells are filled.

---