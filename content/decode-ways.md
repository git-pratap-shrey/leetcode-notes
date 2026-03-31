### Revision Report: Decode Ways (LeetCode #91)

**Pattern:** Dynamic Programming (1D)

**Brute Force:** 
Generate all possible recursive splits of the string and verify if each substring maps to a valid character (1-26). This results in an exponential $O(2^n)$ time complexity due to redundant calculations of overlapping subproblems.

**Optimal Approach:**
Define `dp[i]` as the number of ways to decode the substring `s[0...i-1]`.
*   **Transition:**
    1.  If the single digit `s[i-1]` is valid ('1'-'9'), add `dp[i-1]`.
    2.  If the two-digit combination `s[i-2...i-1]` is valid ('10'-'26'), add `dp[i-2]`.
*   **Base Case:** `dp[0] = 1` (empty string) and `dp[1] = 1` (if first char valid).
*   **Complexity:** Time $O(n)$, Space $O(n)$ (can be optimized to $O(1)$ by keeping only the last two variables).

**The 'Aha' Moment:**
When you realize that the number of ways to decode a string depends entirely on the outcomes of the two preceding positions, it reveals that you are solving a classic tiling or path-counting problem masked by character mappings.

**Summary:**
Decode Ways is just the Fibonacci sequence with constraints; treat it as a step-counting problem where each "step" is either 1 or 2 characters wide.
