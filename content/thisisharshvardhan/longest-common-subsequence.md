---
title: "Longest Common Subsequence"
slug: longest-common-subsequence
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    int solve(string& a , string& b, int i, int j,vector<vector<int>>& dp){
        if (i>=a.size()) return 0;
        if (j>=b.size()) return 0;
        if (dp[i][j]!=-1) return dp[i][j];
        int ans;
        if (a[i]==b[j]){
            ans = 1 + solve(a,b,i+1,j+1,dp);
            dp[i][j] = ans;
        }
        else {
            ans = 0 + max(solve(a,b,i+1,j,dp),solve(a,b,i,j+1,dp));
            dp[i][j] = ans;
        }
        return ans;
    }
    int longestCommonSubsequence(string text1, string text2){
        vector<vector<int>> dp (text1.size(),vector<int>(text2.size(),-1));
        return solve(text1,text2,0,0,dp);
    }
};
~~~

# Submission Review

## Approach

- **Technique:** Top-down Dynamic Programming (Recursion with Memoization).
- **Optimality:** Optimal in terms of asymptotic time complexity. It correctly explores all possible subsequences while avoiding redundant computations.

## Complexity

- **Time Complexity:** $O(N \times M)$, where $N$ and $M$ are the lengths of the two strings. Each state $(i, j)$ is computed exactly once.
- **Space Complexity:** $O(N \times M)$ to store the memoization table, plus $O(N + M)$ for the recursive call stack.

## Efficiency Feedback

- **Runtime:** The current recursive approach carries a slight overhead due to function calls. An iterative (bottom-up) approach would be marginally faster.
- **Memory:** Space usage is high ($O(N \times M)$). Since the LCS value for a row only depends on the current and previous rows, this could be optimized to $O(\min(N, M))$ using an iterative approach with two rows.

## Code Quality

- **Readability:** Good. The logic is straightforward and follows standard LCS implementation.
- **Structure:** Good. Separation of the recursive helper and the main driver function is appropriate.
- **Naming:** Moderate. Variable names `a`, `b`, `i`, `j` are acceptable for competitive programming but could be more descriptive (e.g., `s1`, `s2`, `idx1`, `idx2`).
- **Improvements:** 
    - Pass `text1` and `text2` by reference in the driver function or use the existing reference in `solve` to avoid any implicit copies (though the current code already uses references in `solve`).
    - Use `size_t` for indices to avoid signed/unsigned comparison warnings with `.size()`.

---

# Question Revision

#

## Longest Common Subsequence (LCS)

**Pattern:** Dynamic Programming (2D)

**Brute Force:** 
Recursive exploration of all possible subsequences. At each pair of characters, if they match, move both pointers; if they don't, branch into two recursive calls (skip character in string A, then skip character in string B) and return the maximum. 
- **Complexity:** $O(2^{n+m})$ time.

**Optimal Approach:** 
Build a 2D DP table `dp[i][j]` representing the LCS of $s1[0...i-1]$ and $s2[0...j-1]$.
- **Logic:**
    - If $s1[i-1] == s2[j-1]$, then $dp[i][j] = 1 + dp[i-1][j-1]$.
    - If they differ, $dp[i][j] = \max(dp[i-1][j], dp[i][j-1])$.
- **Time Complexity:** $O(n \cdot m)$
- **Space Complexity:** $O(n \cdot m)$ (can be optimized to $O(\min(n, m))$ using two rows).

**The 'Aha' Moment:** The requirement for the "longest" commonality combined with the ability to skip characters suggests that the optimal solution for a pair of strings depends on the optimal solutions of their prefixes.

**Summary:** Use a 2D grid to accumulate matches; if characters clash, inherit the best result from either the top or left neighbor.

---
