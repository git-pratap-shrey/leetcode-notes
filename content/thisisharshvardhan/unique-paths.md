--- title: "Unique Paths" slug: unique-paths date: "2026-06-25" ---  # My Solution ~~~class Solution {
public:
    int solve(int m, int n, vector<vector<int>>& dp){
        if (m==0 && n==0) return 1;
        if (m<0 || n<0) return 0;
        if (dp[m][n]!=-1) return dp[m][n];

        int down = solve(m-1,n,dp);
        int right = solve(m,n-1,dp);
        int final = down+right;
        dp[m][n] = final;
        return final;
    }
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m+1,vector<int>(n+1,-1));
        return solve(m-1,n-1,dp);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Top-down Dynamic Programming (Recursion with Memoization).
- **Optimality**: Optimal in terms of asymptotic time complexity for DP ($O(m \times n)$), though a mathematical approach using combinatorics ($\binom{m+n-2}{r-1}$) would be more optimal ($O(\min(m, n))$ time and $O(1)$ space).

## Complexity
- **Time Complexity**: $O(m \times n)$ — Each cell in the `dp` table is computed exactly once.
- **Space Complexity**: $O(m \times n)$ — Required for the memoization table, plus $O(m + n)$ for the recursion call stack.

## Efficiency Feedback
- **Memory usage**: The current implementation uses $O(m \times n)$ space. This could be reduced to $O(n)$ using a bottom-up iterative approach with a single row array.
- **Recursion Overhead**: For very large inputs, the recursion depth might lead to a stack overflow, though for standard "Unique Paths" constraints, this is typically not an issue.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation of the recursive helper from the main interface is standard.
- **Naming**: Moderate. 
    - The variables `m` and `n` inside the `solve` function are used as current coordinates (indices), while in `uniquePaths` they represent the grid dimensions. This is potentially confusing; `row` and `col` would be clearer.
    - `final` is a generic name for the result.
- **Concrete Improvements**:
    - Rename `solve(int m, int n, ...)` to `solve(int r, int c, ...)` to distinguish indices from dimensions.
    - Use a constant or `std::vector` size optimization to avoid `m+1` and `n+1` if the indices are already 0-indexed (the current code allocates $m+1$ but only uses up to index $m-1$).  ---  # Question Revision ### Unique Paths

**Pattern:** Dynamic Programming (DP) / Combinatorics

**Brute Force:** 
Recursive DFS exploring every possible path from $(0,0)$ to $(m-1, n-1)$. 
- **Time:** $O(2^{m+n})$
- **Space:** $O(m+n)$ (recursion stack)

**Optimal Approach:**
- **Logic:** Create a DP table where `dp[i][j]` represents the number of paths to reach cell $(i, j)$. Since movement is restricted to right and down, the value of any cell is the sum of the cell above it and the cell to its left: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.
- **Time:** $O(m \times n)$
- **Space:** $O(n)$ (Optimized by using a single 1D array to store the current row state).

**The 'Aha' Moment:** 
The total ways to reach a cell depend solely on the sum of the ways to reach its immediate predecessors.

**Summary:** 
Total paths to a cell is the sum of paths from its only possible predecessors (above and left).  ---