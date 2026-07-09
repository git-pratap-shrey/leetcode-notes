--- title: "Minimum Path Sum" slug: minimum-path-sum date: "2026-06-25" ---  # My Solution ~~~class Solution {
public:
    int solve(vector<vector<int>>& grid, int m, int n,vector<vector<int>>& dp){
        if (m<0 || n<0) return INT_MAX;
        if (m==0 && n==0) return grid[0][0];
        if (dp[m][n]!=-1) return dp[m][n];

        int path1 = INT_MAX;
        int path2 = INT_MAX;

        int temp1 = solve(grid,m-1,n,dp);
        if (temp1!=INT_MAX) path1 = grid[m][n] + temp1;

        int temp2 = solve(grid,m,n-1,dp);
        if (temp2!=INT_MAX) path2 = grid[m][n] + temp2;

        int final = min(path1, path2);
        dp[m][n] = final;
        return final;
    }
    int minPathSum(vector<vector<int>>& grid) {
        
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<int>> dp (m,vector<int>(n,-1));
        return solve(grid,m-1,n-1,dp);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Top-down Dynamic Programming (Recursion with Memoization).
- **Optimality**: Optimal in terms of time complexity. While space can be optimized further (to $O(n)$ using iterative DP), the current $O(m \times n)$ approach is standard for this problem.

## Complexity
- **Time Complexity**: $O(m \times n)$ — Each cell in the grid is computed exactly once.
- **Space Complexity**: $O(m \times n)$ — Required for the `dp` table, plus $O(m + n)$ for the recursion stack.

## Efficiency Feedback
- **Runtime**: Efficient due to memoization avoiding redundant calculations.
- **Memory**: The use of a 2D `vector` for memoization is appropriate. To reduce memory, an iterative approach with a 1D array could be used to achieve $O(\min(m, n))$ space.
- **Overflow Prevention**: The code correctly checks `if (temp != INT_MAX)` before adding the current cell value, preventing integer overflow.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Separation of the helper function `solve` and the main entry point `minPathSum` is clear.
- **Naming**: Moderate. 
    - Inside `minPathSum`, `m` and `n` represent the dimensions of the grid.
    - Inside `solve`, `m` and `n` are used as current coordinates (indices). Using names like `row` and `col` would improve clarity.
- **Improvements**:
    - Change parameter names in `solve` to `row` and `col` to distinguish them from grid dimensions.
    - The variables `path1` and `path2` are slightly redundant; the result could be calculated directly in the `min()` function.  ---  # Question Revision ### Minimum Path Sum

**Pattern:** Dynamic Programming (Grid DP)

**Brute Force:**
Recursive DFS to explore all possible paths from $(0,0)$ to $(m-1, n-1)$.
- **Time:** $O(2^{m+n})$
- **Space:** $O(m+n)$ (recursion stack)

**Optimal Approach:**
Use a bottom-up DP table (or modify the input grid in-place) where each cell `dp[i][j]` stores the minimum cost to reach that point. The value is the current cell's weight plus the minimum of the values from the cell directly above or to the left.
- **Logic:** `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`
- **Time:** $O(m \times n)$
- **Space:** $O(1)$ (if modifying input grid) or $O(n)$ (if using a 1D array)

**The 'Aha' Moment:**
The restriction to only move **right or down** creates a Directed Acyclic Graph (DAG) with a clear topological order, signaling that the optimal solution for a cell depends solely on previously computed neighbors.

**Summary:**
Accumulate the minimum path cost from top-left to bottom-right by iteratively choosing the cheaper of the two possible entry directions for every cell.  ---