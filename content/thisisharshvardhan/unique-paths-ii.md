---
title: "Unique Paths II"
slug: unique-paths-ii
date: "2026-06-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(vector<vector<int>>& obstacleGrid, int m, int n, vector<vector<int>>& dp ){
        if (m<0 || n<0 ) return 0;
        if (m==0 && n==0 && obstacleGrid[m][n]!=1) return 1;
        if (obstacleGrid[m][n]==1) return 0;
        if (dp[m][n]!=-1) return dp[m][n];


        int path1 = solve(obstacleGrid,m-1,n,dp);
        int path2 = solve(obstacleGrid,m,n-1,dp);
        int final = path1 + path2;
        dp[m][n]=final;

        return final;
    }
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        int m=obstacleGrid.size();
        int n=obstacleGrid[0].size();
        vector<vector<int>> dp (m+1,vector<int>(n+1,-1));

        return solve(obstacleGrid,m-1,n-1,dp);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Top-down Dynamic Programming (Memoization).
*   **Optimality:** Optimal in terms of algorithmic complexity (visiting each cell once). However, a bottom-up iterative approach is generally preferred in competitive programming to avoid recursion depth limits and overhead.

## Complexity
*   **Time Complexity:** $O(M \times N)$, where $M$ and $N$ are grid dimensions. Each state $(m, n)$ is computed exactly once.
*   **Space Complexity:** $O(M \times N)$ for the memoization table + $O(M+N)$ for the recursion stack.

## Efficiency Feedback
*   **Overhead:** Recursive calls introduce stack frame overhead. For large grids, this is slightly slower than a 2D iterative DP array.
*   **Memory:** The `dp` table is $O(M \times N)$. If space optimization is required, this can be reduced to $O(N)$ using a 1D array, as only the previous row/column is needed for calculation.

## Code Quality
*   **Readability:** Good. The logic flow is clear and easy to follow.
*   **Structure:** Moderate. The recursion logic is standard, but the `dp` table initialization `dp(m+1, vector<int>(n+1, -1))` creates more space than necessary; `(m, n)` would suffice.
*   **Naming:** Good. Variable names (`obstacleGrid`, `path1`, `path2`) accurately reflect their purpose.

### Concrete Improvements
1.  **Initialize DP to grid size:** Change `dp` size to `(m, vector<int>(n, -1))` to match the indices accessed.
2.  **Iterative DP:** Consider transitioning to an iterative approach to eliminate recursion overhead and potential stack overflow issues for very large grids.
3.  **Data Type:** The problem constraints for "Unique Paths II" usually suggest the return value could exceed the capacity of a 32-bit `int` (though not specified here, it is common). Using `long long` for the `dp` table and return type is safer against overflow.
4.  **Base Case:** The current `if (m==0 && n==0 && obstacleGrid[m][n]!=1) return 1;` is correct, but can be simplified by checking the obstacle condition first at the start of the function.

---

# Question Revision
### Revision Report: Unique Paths II

**Pattern:** Dynamic Programming (Grid-based)

**Brute Force:** 
Use recursion to explore every path from $(0,0)$ to $(m-1, n-1)$, branching into right and down moves at every step, while returning 0 if a cell is an obstacle. 
*   **Time Complexity:** $O(2^{m+n})$
*   **Space Complexity:** $O(m+n)$ (recursion stack depth)

**Optimal Approach:** 
Use a 2D DP table (or 1D array optimization) where `dp[i][j]` represents the number of ways to reach cell $(i, j)$. If `grid[i][j]` is an obstacle, `dp[i][j] = 0`; otherwise, `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.
*   **Time Complexity:** $O(m \times n)$
*   **Space Complexity:** $O(n)$ (using a 1D rolling array)

**The 'Aha' Moment:** 
The presence of "obstacles" acts as a state constraint, transforming a simple combinatorial problem into one requiring path-dependent accumulation where previous results are invalidated by specific cells.

**Summary:** 
Whenever a grid problem asks for the number of paths and provides local constraints, replace recursive exploration with a DP table that treats obstacles as zero-value sinks.

---