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
*   **Status:** Suboptimal. It iterates through the matrix and, for every '1' found, performs full row and column scans to verify if it is a "special" position.

## Complexity
*   **Time Complexity:** $O(R \times C \times (R + C))$, where $R$ is rows and $C$ is columns.
*   **Space Complexity:** $O(1)$ (ignoring input storage).
*   **Bottleneck:** The redundant $O(R+C)$ traversal for every single '1' element encountered.

## Efficiency Feedback
*   **Redundancy:** When a '1' is found at `(k, i)`, the current code re-counts all 1s in that row and column. This can be pre-calculated.
*   **Optimization:** Use two arrays, `rowCount[R]` and `colCount[C]`. Perform a single pass to populate these in $O(R \times C)$. Then, iterate through the matrix a second time; if `mat[k][i] == 1` and `rowCount[k] == 1` and `colCount[i] == 1`, increment the result. This reduces complexity to **$O(R \times C)$**.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The nested loop structure is clean, but the redundant logic inside makes it inefficient.
*   **Naming:** Moderate. `k`, `i`, and `j` are standard for coordinate iteration, but `k` is less conventional than `i` or `r` for row indices. `res` is clear.
*   **Improvements:** 
    *   Rename `k` to `rIdx` or `i` for better clarity.
    *   Implement the two-array pre-processing approach mentioned above to achieve linear time complexity relative to the number of cells.
    *   The `count == 2` check is clever (because the current `mat[k][i]` is counted twice), but it relies on the cell being a 1; ensure readability remains high if the logic grows more complex.

---
---


# Question Revision
### Revision Report: Special Positions in a Binary Matrix

**Pattern:** Preprocessing / Counting

**Brute Force:** For every cell `(i, j)` containing a `1`, iterate through its entire row and column to verify if it is the only `1` in both.
*   **Time Complexity:** $O((m \times n) \times (m + n))$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Precompute the sum of each row and each column into two auxiliary arrays. Iterate through the matrix once more; a cell `(i, j)` is "special" if `matrix[i][j] == 1`, `rowCount[i] == 1`, and `colCount[j] == 1`.
*   **Time Complexity:** $O(m \times n)$
*   **Space Complexity:** $O(m + n)$

**The 'Aha' Moment:** The requirement for global properties (entire row/column sums) indicates that the state of a cell depends on the aggregate data of its headers, which is best handled by caching counts upfront.

**Summary:** Whenever you need to validate conditions across entire rows or columns, precompute the counts first to turn an $O(N^3)$ search into an $O(N^2)$ lookup.

---
