---
title: "Guess Number Higher or Lower II"
slug: guess-number-higher-or-lower-ii
date: "2026-06-26"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(int s , int e,vector<vector<int>>& dp){
        if (s>=e) return 0;
        if(dp[s][e]!= -1) return dp[s][e];
        int ans= INT_MAX;
        for (int i=s;i<=e;i++){
            ans = min (ans, i + max(solve(s,i-1,dp),solve(i+1,e,dp)));
            dp[s][e]=ans;
        }
        return ans;
    }
    int getMoneyAmount(int n) {
        vector<vector<int>> dp (n+1,vector<int>(n+1,-1));
        return solve(1,n,dp);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Minimax with Top-Down Dynamic Programming (Memoization).
*   **Optimality:** Optimal. The problem requires exploring all possible split points to find the minimum cost for the worst-case scenario, which this approach correctly does via recursion and state caching.

## Complexity
*   **Time Complexity:** $O(n^3)$. There are $O(n^2)$ states in the `dp` table, and each state takes $O(n)$ time to compute due to the loop iterating from `s` to `e`.
*   **Space Complexity:** $O(n^2)$ to store the `dp` table.

## Efficiency Feedback
*   **Performance:** The runtime is efficient for typical constraints ($n \le 200$). 
*   **Optimization:** The memory usage is minimal for the constraints. While the current implementation is optimal for this problem, ensure that `n` does not exceed ~500 to avoid stack overflow or $O(n^3)$ TLE issues in more constrained environments.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a helper function `solve` to manage recursion and memoization is clean.
*   **Naming:** Moderate. `s` and `e` are acceptable for `start` and `end`, but `start` and `end` would be more descriptive. `dp` is standard nomenclature.
*   **Concrete Improvements:**
    *   **Loop bounds:** The inner loop currently performs `dp[s][e] = ans;` inside every iteration. This assignment should be moved outside the loop to be more efficient (only one write operation per state).
    *   **Safety:** While `INT_MAX` works here, be cautious if adding values to `ans` later, as it could lead to integer overflow. Given the problem constraints ($n \le 200$), it is safe here.
    *   **Const correctness:** The `dp` table could be passed by reference (which you are currently doing, which is correct).

### Suggested minor fix:
```cpp
for (int i = s; i <= e; i++) {
    ans = min(ans, i + max(solve(s, i - 1, dp), solve(i + 1, e, dp)));
}
return dp[s][e] = ans; // Move assignment outside loop
```

---

# Question Revision
### Revision Report: Guess Number Higher or Lower II

**Pattern:** Minimax Dynamic Programming (Interval DP)

**Brute Force:** 
A recursive approach explores all possible guesses $i \in [1, n]$. For each guess, the worst-case cost is $i + \max(\text{solve}(1, i-1), \text{solve}(i+1, n))$. This leads to exponential time complexity due to redundant subproblems.

**Optimal Approach:**
Use a 2D memoization table `dp[i][j]` to store the minimum cost to guarantee a win in the range $[i, j]$. 
- **Transition:** $dp[i][j] = \min_{k=i}^j \{ k + \max(dp[i][k-1], dp[k+1][j]) \}$
- **Base Case:** $dp[i][j] = 0$ if $i \ge j$.
- **Complexity:** $O(n^3)$ time (state space $O(n^2)$ multiplied by $O(n)$ for the loop) and $O(n^2)$ space.

**The 'Aha' Moment:**
When a problem asks for the *minimum cost to guarantee a win* against an *adversary* who forces you into the worst-case scenario, you must minimize the maximum possible cost across all sub-intervals.

**Summary:** 
Whenever a decision depends on an opponent playing perfectly to maximize your cost, frame the problem as finding the minimum of the maximums across all possible interval partitions.

---