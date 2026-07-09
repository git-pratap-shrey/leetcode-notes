--- title: "Guess Number Higher or Lower II" slug: guess-number-higher-or-lower-ii date: "2026-06-26" ---  # My Solution ~~~ - ~~~  # Submission Review No code was provided for analysis. Please provide the implementation you would like me to review, and I will analyze it according to the requested criteria.  ---  # Question Revision ### Guess Number Higher or Lower II

**Pattern:** Interval DP

**Brute Force:** 
Recursively try every possible number in the current range as the first guess and explore all subsequent sub-ranges, leading to exponential time complexity.

**Optimal Approach:**
Define $dp[i][j]$ as the minimum cost to guarantee a win for the range $[i, j]$. For every guess $k$ where $i \le k \le j$, the worst-case cost is $k + \max(dp[i][k-1], dp[k+1][j])$. The goal is to minimize this maximum cost across all possible values of $k$.

*   **Time Complexity:** $O(n^3)$
*   **Space Complexity:** $O(n^2)$

**The 'Aha' Moment:** 
The requirement to "guarantee a win" implies a minimax problem (minimizing the maximum possible cost), which is a hallmark of Interval DP.

**Summary:** 
Solve for the minimum of the worst-case costs using a 2D DP table representing number ranges.  ---