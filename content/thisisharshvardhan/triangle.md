---
title: "Triangle"
slug: triangle
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    // int solve(vector<vector<int>>& triangle, int i ,int row,vector<vector<int>>& dp){
    //     if (row == triangle.size()-1) return triangle[row][i];
    //     if (row >= triangle.size()) return INT_MAX;
    //     if (i >= triangle[row].size()) return INT_MAX;
    //     if (dp[row][i]!=-1) return dp[row][i];

    //     int path1 = INT_MAX;
    //     int path2 = INT_MAX;

    //     int temp1 = solve(triangle,i,row+1,dp);
    //     if (temp1 != INT_MAX) path1 = triangle[row][i] + temp1;
         
    //     int temp2 = solve(triangle,i+1,row+1,dp);
    //     if (temp2 != INT_MAX) path2 = triangle[row][i] + temp2;

    //     int final = min(path1,path2);
    //     dp[row][i] = final;
    //     return final; 

    // }

    int tab (vector<vector<int>>& triangle){
        int m = triangle.size();
        vector<vector<int>> dp (m+1,vector<int>(triangle[m-1].size()+1,INT_MAX));
        int row=triangle.size();
        for(int i=0;i<triangle[row-1].size();i++){
            dp[row-1][i]= triangle[row-1][i];
        }

        for (int i=triangle.size()-2;i>=0;i--){
            for (int j=triangle[i].size()-1;j>=0;j--){
                int path1 = INT_MAX;
                int path2 = INT_MAX;

                int temp1 = dp[i+1][j];
                if (temp1 != INT_MAX) path1 = triangle[i][j] + temp1;
                
                int temp2 = dp[i+1][j+1];
                if (temp2 != INT_MAX) path2 = triangle[i][j] + temp2;

                int final = min(path1,path2);
                dp[i][j] = final;
            }
        }
        return dp[0][0];

    }
    int minimumTotal(vector<vector<int>>& triangle) {
        return tab(triangle);
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Tabulation (Bottom-Up Dynamic Programming).
- **Optimality**: Optimal in terms of time complexity. Suboptimal in terms of space complexity.

## Complexity

- **Time Complexity**: $O(N^2)$, where $N$ is the number of rows in the triangle. Every element in the triangle is visited exactly once.
- **Space Complexity**: $O(N^2)$ to store the 2D `dp` table. This is suboptimal as the state only depends on the row immediately below it.

## Efficiency Feedback

- **Space Bottleneck**: The `vector<vector<int>> dp` table replicates the structure of the input. This can be reduced to $O(N)$ by using a 1D vector to store only the results of the "previous" row.
- **Redundant Checks**: The `INT_MAX` checks (e.g., `if (temp1 != INT_MAX)`) are unnecessary for this specific problem because the triangle is guaranteed to be a valid pyramid structure where `dp[i+1][j]` and `dp[i+1][j+1]` always exist for any `dp[i][j]`.
- **Initialization**: The `dp` table is initialized with `INT_MAX` for all cells, then partially overwritten. This is slightly less efficient than initializing only the required dimensions.

## Code Quality

- **Readability**: Moderate. The presence of a large block of commented-out code (the recursive `solve` function) creates noise and reduces maintainability.
- **Structure**: Moderate. The logic is separated into a helper function `tab`, but the helper is defined inside the class without being `private`.
- **Naming**: Poor. 
    - `tab` is a generic abbreviation.
    - `final` is a poor variable name (often a keyword in other languages).
    - `temp1` and `temp2` are non-descriptive.
- **Concrete Improvements**:
    - Remove dead/commented code.
    - Use a 1D vector `vector<int> dp(m)` to achieve $O(N)$ space.
    - Rename `tab` to `calculateMinimumPath` and `final` to `minPath`.
    - Simplify the inner loop logic to: `dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1]);`.

---

# Question Revision

#

## LeetCode: Triangle

**Pattern:** Dynamic Programming (Bottom-Up)

**Brute Force:** 
Use recursion to explore every possible path from the apex to the base.
- **Complexity:** $O(2^n)$ time, $O(n)$ space (recursion stack).

**Optimal Approach:** 
Start from the second-to-last row and move upwards. For each element, update its value to be the sum of itself and the minimum of its two children directly below it. The value at the apex will eventually hold the global minimum path sum.
- **Time Complexity:** $O(n^2)$ where $n$ is the number of rows (total elements processed).
- **Space Complexity:** $O(n)$ if using a separate 1D array for the bottom row, or $O(1)$ if modifying the input triangle in-place.

**The 'Aha' Moment:** 
The "minimum path" requirement combined with a structure where each node depends on a small, fixed set of children suggests that solving from the bottom up eliminates the need for complex boundary checks required by top-down approaches.

**Summary:** 
Collapse the triangle upwards by iteratively adding the minimum of the two adjacent children to each parent node.

---
