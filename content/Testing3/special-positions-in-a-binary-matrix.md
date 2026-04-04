---
title: "Special Positions in a Binary Matrix"
slug: special-positions-in-a-binary-matrix

---
---

# My Solution
~~~java
class Solution {
    public int numSpecial(int[][] mat) {
        int r = mat.length, c = mat[0].length, res = 0;

        for(int k = 0; k < r; k++){
            for(int i = 0; i < c; i++){

                if(mat[k][i] == 1){
                    int count = 0;

                    // check row
                    for(int j = 0; j < c; j++){
                        if(mat[k][j] == 1) count++;
                    }

                    // check column
                    for(int j = 0; j < r; j++){
                        if(mat[j][i] == 1) count++;
                    }

                    if(count == 2) res++; 
                }
            }
        }

        return res;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force scanning.
*   **Optimality:** Suboptimal. The solution performs nested scans to verify row and column sums for every '1' found, resulting in redundant calculations.

## Complexity
*   **Time Complexity:** $O(R \cdot C \cdot (R + C))$, where $R$ is rows and $C$ is columns. For every cell (R*C), it iterates through the row (C) and column (R).
*   **Space Complexity:** $O(1)$ (excluding input storage).

## Efficiency Feedback
*   **Bottleneck:** The redundant scanning of rows and columns inside the nested loop causes unnecessary work.
*   **Optimization:** You can achieve $O(R \cdot C)$ by pre-calculating the sum of each row and each column into two arrays (`int[] rowSums`, `int[] colSums`) in one pass. Then, check the condition `rowSums[i] == 1 && colSums[j] == 1 && mat[i][j] == 1` in a second pass.

## Code Quality
*   **Readability:** Moderate. The intent is clear, but the nested loops make it slightly cluttered.
*   **Structure:** Moderate. While logically functional, the algorithm design lacks efficiency.
*   **Naming:** Good. Variable names (`r`, `c`, `res`, `mat`) are standard and clear for this context.
*   **Improvements:**
    *   Avoid the repeated counting logic.
    *   Use the pre-calculation approach mentioned above to reduce time complexity from cubic to linear.
    *   Initialize `count` outside the check logic to avoid confusion; currently, `count` tracks both row and column matches, which is clever but potentially confusing to readers.

---
---


# Question Revision
### Revision Report: Special Positions in a Binary Matrix

**Pattern:** Preprocessing / Counting

**Brute Force:**
For every '1' in the matrix, iterate through its entire row and column to verify if it is the only '1'. 
*   **Complexity:** $O((m \times n) \times (m + n))$

**Optimal Approach:**
1.  Precompute the sum of each row and each column into two separate arrays: `rowCount[]` and `colCount[]`.
2.  Traverse the matrix a second time; a position `(i, j)` is "special" if `matrix[i][j] == 1`, `rowCount[i] == 1`, and `colCount[j] == 1`.
*   **Time Complexity:** $O(m \times n)$
*   **Space Complexity:** $O(m + n)$

**The 'Aha' Moment:**
When the validity of an element depends on global properties of its row and column, decoupling those properties into auxiliary arrays transforms an expensive search into a constant-time lookup.

**Summary:**
Trade linear space for time by pre-calculating row and column constraints to eliminate redundant matrix scans.

---
