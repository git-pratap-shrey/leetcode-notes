### Revision Report: Pascal's Triangle

**Pattern:** Dynamic Programming / Iterative Construction

**Brute Force:**
Calculate each row by iteratively summing values from the previous row. Since each element `row[i][j]` is the sum of `row[i-1][j-1]` and `row[i-1][j]`, you simply maintain a 2D array and fill it row by row.

**Optimal Approach:**
Construct the triangle row-by-row using the property that the first and last elements are always `1`, and intermediate elements are the sum of the two elements directly above them from the previous row.
*   **Time Complexity:** $O(numRows^2)$ — We visit each element in the triangle exactly once.
*   **Space Complexity:** $O(numRows^2)$ — Required to store the full triangle (or $O(numRows)$ if only storing the current row).

**The 'Aha' Moment:**
The requirement to generate the *entire* triangle (rather than just one value) makes the inherent dependency on the previous row explicit, signaling a bottom-up DP build.

**Summary:**
Each cell is just the sum of its two parents, so build row $N$ by sliding a window of size 2 across row $N-1$.
