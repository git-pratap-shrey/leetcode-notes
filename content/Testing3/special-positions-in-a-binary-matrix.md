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
*   **Technique:** Brute force simulation. It iterates through every cell; if a `1` is found, it performs a linear scan of the entire row and column to verify the "special" condition.
*   **Optimal:** No. The current approach performs redundant scans of the same rows and columns multiple times.

## Complexity
*   **Time Complexity:** $O(R \cdot C \cdot (R + C))$, where $R$ is rows and $C$ is columns.
*   **Space Complexity:** $O(1)$ (excluding input).
*   **Bottleneck:** The redundant $O(R+C)$ scans inside the nested loops result in cubic complexity, which is unnecessary for this problem.

## Efficiency Feedback
*   **Redundancy:** The code re-scans the same row and column every time it hits a `1`. If a row contains three `1`s, the row is scanned three times.
*   **Optimization:** Pre-compute the sum of each row and each column into two arrays (`rowCount[]`, `colCount[]`) in $O(R \cdot C)$. Then, iterate through the matrix once ($O(R \cdot C)$) and check if `mat[i][j] == 1 && rowCount[i] == 1 && colCount[j] == 1`. This reduces the total time to $O(R \cdot C)$.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The logic is nested deeply; extracting the row/column sum logic would improve clarity.
*   **Naming:** Moderate. `k`, `i`, `j` are standard but generic; `r` and `c` are acceptable shorthand for dimensions.
*   **Improvements:**
    *   Use more descriptive variable names (e.g., `rows`, `cols`).
    *   Implement the pre-computation strategy described above to bring performance down to linear time relative to the number of elements.
    *   Avoid the `count == 2` logic; it is fragile and only works because you know `mat[k][i]` is `1` (counting itself once in both row and column checks). It is conceptually clearer to count total `1`s per row/column separately.

---
---


# Question Revision
### Revision Report: Special Positions in a Binary Matrix

**Pattern:** Preprocessing / Counting

**Brute Force:** For every '1' in the matrix, iterate through its entire row and column to verify if it is the only '1' present. 
*   **Complexity:** $O((m \times n) \times (m + n))$ where $m$ is rows and $n$ is columns.

**Optimal Approach:**
1.  Use two arrays: `row_counts[m]` and `col_counts[n]`.
2.  Perform a single pass to populate these arrays with the sum of 1s in each respective row and column.
3.  Perform a second pass: if `matrix[i][j] == 1` and both `row_counts[i] == 1` and `col_counts[j] == 1`, increment the result.
*   **Time Complexity:** $O(m \times n)$ to traverse the matrix twice.
*   **Space Complexity:** $O(m + n)$ to store the counts.

**The 'Aha' Moment:** When a problem requires global constraints (sum of entire rows/columns) for every local element, preprocessing these aggregates into auxiliary arrays allows for $O(1)$ lookups during the main validation pass.

**Summary:** Whenever you need to validate specific elements against row and column aggregate constraints, precompute the row and column sums first to turn $O(N)$ validation into $O(1)$ lookups.

---
