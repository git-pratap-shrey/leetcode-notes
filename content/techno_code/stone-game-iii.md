---
title: "Stone Game III"
slug: stone-game-iii
date: "2026-08-03"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was left blank.

---

# Question Revision
### Stone Game III

**Pattern:** Dynamic Programming / Game Theory (Minimax)

**Brute Force:** 
Recursively simulate every possible move (taking 1, 2, or 3 stones) for both players. Since each state branches into 3 possibilities, the time complexity is $O(3^n)$.

**Optimal Approach:**
Use a DP array where `dp[i]` represents the maximum relative score the current player can gain starting from index `i`. For each position, calculate the value of taking 1, 2, or 3 stones and subtract the opponent's optimal relative score from the remaining array:
$dp[i] = \max($
  $\text{sum}(i, 1) - dp[i+1],$
  $\text{sum}(i, 2) - dp[i+2],$
  $\text{sum}(i, 3) - dp[i+3]$
$)$

*   **Time Complexity:** $O(n)$ — each state is computed once.
*   **Space Complexity:** $O(n)$ — to store the DP table (can be optimized to $O(1)$ as only the last 3 states are needed).

**The 'Aha' Moment:** 
The requirement to "maximize the difference" in a zero-sum, turn-based game with fixed move options is a classic signal for Minimax DP.

**Summary:** 
Solve for the maximum relative lead by subtracting the opponent's future optimal score from the current turn's immediate gain.

---