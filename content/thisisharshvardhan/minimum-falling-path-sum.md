---
title: "Minimum Falling Path Sum"
slug: minimum-falling-path-sum
date: "2026-06-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(vector<vector<int>>& matrix, int row, int col, vector<vector<int>>& dp){
        if (row>=matrix.size() || col>=matrix[0].size() || row<0 || col<0) return INT_MAX;
        if (row==matrix.size()-1) return matrix[row][col];
        if (dp[row][col]!=INT_MAX) return dp[row][col];

        int path1= solve(matrix,row+1,col-1,dp);
        int path2 = solve(matrix,row+1,col,dp);
        int path3= solve(matrix,row+1,col+1,dp);
        int final = matrix[row][col] + min(path1, min(path2,path3));
        dp[row][col] = final;

        return final;

    }
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int mini = INT_MAX;
        vector<vector<int>> dp (matrix.size()+1,vector<int>(matrix[0].size()+1,INT_MAX));

        for (int i=0;i<matrix[0].size();i++){
            int ans= solve(matrix,0,i,dp);
            mini =min(ans,mini);
        }
        return mini;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Top-down Dynamic Programming (Memoization).
*   **Optimality:** Optimal in terms of algorithmic complexity class ($O(N^2)$), though the implementation has a minor bug regarding state initialization and potential overflow.

## Complexity
*   **Time Complexity:** $O(N \times M)$, where $N$ is rows and $M$ is columns. Each cell is computed once.
*   **Space Complexity:** $O(N \times M)$ for the DP table plus $O(N)$ for the recursion stack.

## Efficiency Feedback
*   **Potential Overflow:** Adding `matrix[row][col]` to `INT_MAX` (from `min(path1, ...)` calls) will cause integer overflow. Since the problem typically constraints values, `INT_MAX` should be replaced with a sufficiently large constant or a dedicated sentinel value that won't overflow when added.
*   **DP Table Size:** The DP table size `(matrix.size()+1) x (matrix[0].size()+1)` is slightly larger than necessary; `matrix.size() x matrix[0].size()` is sufficient.

## Code Quality
*   **Readability:** Good. The logic flow is standard and easy to follow.
*   **Structure:** Moderate. The DP initialization and recursive calls are clear, but the handling of base cases (`INT_MAX`) is risky.
*   **Naming:** Good. Variable names (`path1`, `path2`, `mini`) are descriptive enough for this context.
*   **Concrete Improvements:**
    *   **Overflow Prevention:** Instead of `INT_MAX`, use `1e9` (assuming input values are reasonably bounded) or check if the returned path is `INT_MAX` before adding `matrix[row][col]`.
    *   **Loop Optimization:** The `dp` table is initialized with `INT_MAX`, which is correct, but ensure the logic explicitly handles the "out of bounds" `INT_MAX` returns to avoid propagating the overflow throughout the path sums.
    *   **Refinement:** Pass `matrix` by `const reference` to avoid unnecessary copies (though `vector<vector<int>>&` is used here, `const` adds safety).

---

# Question Revision
### Revision Report: Minimum Falling Path Sum

**Pattern:** Dynamic Programming (Bottom-Up)

**Brute Force:**
Use recursion to explore all possible paths from each element in the first row. At each step, branch into three possible columns in the next row.
*   **Time Complexity:** $O(3^n)$ (branching factor of 3 at each of $n$ rows).
*   **Space Complexity:** $O(n)$ (recursion stack depth).

**Optimal Approach:**
Use an in-place DP table where each cell `grid[i][j]` is updated to store the minimum path sum to reach that specific cell. The recurrence relation is `grid[i][j] += min(grid[i-1][j-1], grid[i-1][j], grid[i-1][j+1])`.
*   **Time Complexity:** $O(n^2)$, where $n \times n$ is the grid size.
*   **Space Complexity:** $O(1)$ (if modifying the input grid) or $O(n)$ (if using a single row buffer).

**The 'Aha' Moment:**
When a problem asks for an optimal path through a grid where the choice at any cell depends solely on a small, fixed subset of adjacent cells from the previous step, it is a clear signal that overlapping subproblems exist and can be solved iteratively.

**Summary:** 
Whenever the current state depends on a small range of previous states, transform the grid into a cumulative cost map to replace recursion with a bottom-up sweep.

---