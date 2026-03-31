### Revision Report: Decode Ways (LeetCode #91)

**Pattern:** Dynamic Programming (1D)

**Brute Force:**
Use recursion to explore every possible valid split of the string (1-char or 2-char tokens). This results in an exponential $O(2^n)$ time complexity due to redundant subproblems.

**Optimal Approach:**
Define `dp[i]` as the number of ways to decode the substring `s[0...i-1]`.
*   **Transition:**
    1.  If the single digit `s[i-1]` is valid (1-9), add `dp[i-1]`.
    2.  If the two-digit substring `s[i-2...i-1]` is valid (10-26), add `dp[i-2]`.
*   **Base Case:** `dp[0] = 1` (empty string).
*   **Complexity:** Time $O(n)$, Space $O(n)$ (can be optimized to $O(1)$ by storing only the last two states).

**The 'Aha' Moment:**
When a problem asks for the *number of ways* to interpret a sequence where current choices depend on immediate past decisions (previous 1 or 2 digits), it is a classic tiling/partitioning DP problem.

**Summary:**
Think of it as a variation of the "Climbing Stairs" problem where your step size is constrained by the valid numeric range of 1–26.
