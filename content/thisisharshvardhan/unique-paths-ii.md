--- title: "Unique Paths II" slug: unique-paths-ii date: "2026-06-27" ---  # My Solution ~~~ - ~~~  # Submission Review No code was provided for analysis. Please provide the implementation to proceed with the review.  ---  # Question Revision ### Unique Paths II

**Pattern:** Dynamic Programming (DP)

**Brute Force:** Recursive DFS exploring all possible paths from $(0,0)$ to $(m-1, n-1)$, backtracking when an obstacle is hit. 
- Time: $O(2^{m+n})$
- Space: $O(m+n)$ (recursion stack)

**Optimal Approach:** Use a DP table where `dp[i][j]` represents the number of ways to reach cell $(i, j)$. If `grid[i][j] == 1`, then `dp[i][j] = 0`. Otherwise, `dp[i][j] = dp[i-1][j] + dp[i][j-1]`. This can be optimized to a 1D array by overwriting the current row.
- Time: $O(m \times n)$
- Space: $O(n)$

**The 'Aha' Moment:** The problem asks for the *number of ways* to reach a destination with restricted movement, indicating that each state is the sum of its possible preceding states.

**Summary:** Treat obstacles as zeros and accumulate paths from the top and left neighbors using a 1D DP array.  ---