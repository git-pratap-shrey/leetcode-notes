---
title: "Min Cost Climbing Stairs"
slug: min-cost-climbing-stairs
date: "2026-03-29"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        vector<int> reachCost(cost.size() + 1);
        for (int i = 2; i <= cost.size(); i++) {

            reachCost[i] = min(reachCost[i - 1] + cost[i - 1],
                               reachCost[i - 2] + cost[i - 2]);
        }

        return reachCost.back();
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Dynamic Programming (Bottom-up).
*   **Optimality**: Optimal. It correctly computes the minimum cost to reach each step by considering the two possible preceding steps.

## Complexity
*   **Time Complexity**: $O(n)$, where $n$ is the size of `cost`. The loop iterates through the array exactly once.
*   **Space Complexity**: $O(n)$ due to the `reachCost` vector. 
*   **Bottleneck**: The space complexity is $O(n)$, which is suboptimal; it can be reduced to $O(1)$ by using only two variables to track the previous two states.

## Efficiency Feedback
*   **Memory**: The current solution allocates an auxiliary vector of size $n+1$. Since each state only depends on the two immediately preceding values, you can achieve $O(1)$ space by using two integers (e.g., `prev1`, `prev2`) to store previous costs.
*   **Runtime**: The runtime is already optimal at $O(n)$; no further improvements are needed for execution speed.

## Code Quality
*   **Readability**: Good. The logic is concise and easy to follow.
*   **Structure**: Good. The use of a vector for DP is standard, though space-inefficient for large inputs.
*   **Naming**: Moderate. `reachCost` is descriptive, but it technically represents the cost *required to step onto or beyond* a stair.
*   **Concrete Improvements**:
    *   **Space Optimization**:
        ```cpp
        int prev2 = 0, prev1 = 0;
        for (int i = 2; i <= cost.size(); ++i) {
            int current = min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
        ```
    *   **Input Handling**: The logic relies on `i - 1` and `i - 2` accessing `cost`. Ensure `cost.size() >= 2` (standard constraints usually guarantee this, but it is worth noting).

---
---


# Question Revision
### Revision Report: Min Cost Climbing Stairs

**Pattern:** Dynamic Programming (Bottom-Up)

**Brute Force:**
Use recursion to explore every path from step 0 or 1 to the top. This results in an exponential tree ($O(2^n)$) due to redundant calculations of the same sub-problems.

**Optimal Approach:**
Define `dp[i]` as the minimum cost to reach step `i`. Since you can arrive at step `i` from either `i-1` or `i-2`, the recurrence relation is `dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])`. You can optimize space to $O(1)$ by keeping track of only the previous two states.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the current state's optimal decision depends solely on the optimal results of a fixed number of immediately preceding states, it is a clear signal to use DP.

**Summary:**
If your next move is determined by the cumulative best of your previous steps, cache those results to build the solution forward.

---
