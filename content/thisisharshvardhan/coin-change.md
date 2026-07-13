---
title: "Coin Change"
slug: coin-change
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was left empty.

---

# Question Revision
### Coin Change

**Pattern:** Dynamic Programming (Bottom-Up)

**Brute Force:** Recursive exploration of all possible coin combinations to find the minimum count, resulting in exponential time due to overlapping subproblems.

**Optimal Approach:** 
Initialize a `dp` array of size `amount + 1` with a value greater than the target (e.g., `amount + 1`), setting `dp[0] = 0`. For every value from $1$ to `amount`, iterate through each coin; if the coin is less than or equal to the current value, update the state: $dp[i] = \min(dp[i], dp[i - \text{coin}] + 1)$.

*   **Time Complexity:** $O(S \cdot n)$ where $S$ is the amount and $n$ is the number of coins.
*   **Space Complexity:** $O(S)$ to store the DP table.

**The 'Aha' Moment:** The requirement for a "minimum" number of elements to reach a target value, where the optimal solution for $X$ depends on the optimal solution for $X - \text{coin}$, signals DP.

**Summary:** Build a DP table that iteratively computes the minimum coins needed for every increment up to the target amount.

---