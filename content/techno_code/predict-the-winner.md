---
title: "Predict the Winner"
slug: predict-the-winner
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution code you would like me to review.

---

# Question Revision
### Predict the Winner

**Pattern:** Dynamic Programming (Interval DP / Minimax)

**Brute Force:**
Recursive exploration of all possible move combinations. At each step, the current player chooses either the leftmost or rightmost element, and the next player does the same with the remaining subarray.
- **Time:** $O(2^n)$
- **Space:** $O(n)$ (recursion depth)

**Optimal Approach:**
Use DP to track the maximum relative score (Player 1's score minus Player 2's score). Let $dp[i][j]$ be the maximum net score a player can achieve from the subarray $[i, j]$.
The recurrence is: $dp[i][j] = \max(\text{nums}[i] - dp[i+1][j], \text{nums}[j] - dp[i][j-1])$.
- **Time:** $O(n^2)$
- **Space:** $O(n^2)$ (can be optimized to $O(n)$)

**The 'Aha' Moment:**
The requirement for "optimal play" by both players combined with a choice between two boundaries of a range indicates a Minimax problem solvable via Interval DP.

**Summary:**
Maximize the current pick while subtracting the opponent's best possible future relative score to determine if the first player maintains a non-negative lead.

---