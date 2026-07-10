---
title: "Reshape the Matrix"
slug: reshape-the-matrix
date: "2026-06-04"

---

# My Solution
~~~
class
 Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m=mat.size();
        int n=mat[0].size();

        if(m*n!=r*c){
            return mat;
        }
        vector<vector<int>> ans(r,vector<int>(c));
        int row=0,col=0;

        for(int i=0;i<m;i++) {
            for(int j=0;j<n;j++) {
                ans[row][col]=mat[i][j];
                col++;
                if(col==c) {
                    col=0;
                    row++;
                }
            }
        }

        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Simulation / Linear Mapping. The code iterates through the source matrix and maps each element sequentially into a pre-allocated target matrix using coordinates.
- **Optimality**: Optimal. Every element must be visited once, and the output matrix must be constructed.

## Complexity

- **Time Complexity**: $O(m \times n)$, where $m$ is the number of rows and $n$ is the number of columns in the original matrix.
- **Space Complexity**: $O(r \times c)$, which is equivalent to $O(m \times n)$ for the output matrix.

## Efficiency Feedback
- The implementation is efficient. Memory allocation is handled upfront by initializing the `ans` vector with the required dimensions, avoiding expensive `push_back` operations.
- No significant bottlenecks present.

## Code Quality

- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The guard clause `if(m*n != r*c)` correctly handles invalid reshape requests immediately.
- **Naming**: Moderate. While `m`, `n`, `r`, and `c` are conventional for matrix dimensions, more descriptive names (e.g., `originalRows`, `targetCols`) would improve clarity.
- **Improvements**:
    - The logic `ans[row][col] = mat[i][j]` can be written using a single loop from $0$ to $(m \times n) - 1$ by calculating indices: `ans[k / c][k % c] = mat[k / n][k % n]`. However, the current nested loop approach is slightly more performant as it avoids repeated division/modulo operations.

---

# Question Revision

#

## Reshape the Matrix

**Pattern:** Array Transformation / Simulation

**Brute Force:**
Flatten the original $m \times n$ matrix into a 1D array, then iterate through that array to populate a new $r \times c$ matrix.

**Optimal Approach:**
Iterate through the original matrix and use a single pointer (or modulo arithmetic) to map the linear index of the current element to the coordinates of the new matrix.
- **Time Complexity:** $O(m \times n)$
- **Space Complexity:** $O(r \times c)$ to store the reshaped matrix.

**The 'Aha' Moment:**
The requirement that $m \times n$ must equal $r \times c$ signals that the problem is simply a coordinate transformation of a continuous 1D stream.

**Summary:**
Treat the 2D matrix as a flattened 1D array and map the index $i$ to `(i / c, i % c)` in the new matrix.

---
