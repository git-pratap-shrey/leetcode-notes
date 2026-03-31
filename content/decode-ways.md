### Revision Report: Decode Ways (LeetCode #91)

**Pattern:** Dynamic Programming (1D)

**Brute Force:** 
Generate all possible recursive partitions of the string by branching on 1-digit and 2-digit substrings, validating each against the mapping (1-26).
*   **Complexity:** $O(2^n)$ due to redundant subproblems in the recursion tree.

**Optimal Approach:**
Define `dp[i]` as the number of ways to decode the prefix of length `i`. 
*   **Transitions:**
    1. If `s[i-1]` is '1'-'9', add `dp[i-1]`.
    2. If `s[i-2:i]` is '10'-'26', add `dp[i-2]`.
*   **Space Optimization:** Since `dp[i]` only depends on the previous two states, reduce space from $O(n)$ to $O(1)$ by using two variables.
*   **Complexity:** Time $O(n)$, Space $O(1)$.

**The 'Aha' Moment:**
When a problem asks for the *number of ways* to interpret a sequence where each choice depends on one or two preceding elements, it is a classic indicator that the problem can be broken down into overlapping sub-problems solvable via DP.

**Summary:** 
Think of this as "Climbing Stairs" with a constraint: each step can be a single digit (1–9) or a valid pair (10–26), where invalid moves (like '0' or >26) act as zero-probability branches.
