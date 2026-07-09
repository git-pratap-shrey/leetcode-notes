--- title: "Minimum Falling Path Sum" slug: minimum-falling-path-sum date: "2026-06-27" ---  # My Solution ~~~ - ~~~  # Submission Review Please provide the code you wish to be analyzed. The `Code:` section in your prompt is currently empty.  ---  # Question Revision ### Minimum Falling Path Sum

**Pattern:** Dynamic Programming (DP) / Tabulation

**Brute Force:** Recursively explore every possible path from the top row to the bottom row, calculating the sum for each. Time complexity: $O(3^n)$.

**Optimal Approach:** 
- **Logic:** Use a bottom-up approach to update the grid in-place. For each cell `(r, c)` from the second row downwards, add the minimum of its three possible predecessors from the row above: `(r-1, c-1)`, `(r-1, c)`, and `(r-1, c+1)`. The result is the minimum value in the last row.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(1)$ (when modifying the input grid)

**The 'Aha' Moment:** The optimal path to a cell depends only on the minimum paths of the three cells directly above it, indicating a state-based dependency.

**Summary:** Accumulate the minimum falling sum row-by-row by selecting the cheapest of the three available predecessors.  ---