---
title: "Min Cost Climbing Stairs"
slug: min-cost-climbing-stairs
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    // int solve(vector<int>& cost, int i, vector<int>& dp){
    //     if (i >= cost.size()) return 0;
    //     if (dp[i]!=-1) return dp[i];
    //     int step1= cost[i] + solve(cost,i+1,dp);
    //     int step2= cost[i] + solve(cost,i+2,dp);
    //     int ans= min(step1,step2);
    //     dp[i]=ans;
    //     return ans;
    // }
    int tab(vector<int> cost){
        vector<int> dp (cost.size()+2,0);
        vector<int> sp (cost.size()+2,0);

        for (int i=cost.size()-1;i>=0;i--){
            int step1= cost[i] + dp[i+1];
            int step2= cost[i] + dp[i+2];
            int ans= min(step1,step2);
            dp[i]=ans;
        }
        for (int i=cost.size()-1;i>=1;i--){
            int step1= cost[i] + sp[i+1];
            int step2= cost[i] + sp[i+2];
            int ans= min(step1,step2);
            sp[i]=ans;
        }
        return min(dp[0],sp[1]);
    }
    int minCostClimbingStairs(vector<int>& cost) {
        return tab(cost);
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Tabulation (Bottom-Up Dynamic Programming).
- **Optimality**: Suboptimal. While the time complexity is linear, the implementation contains redundant logic and unnecessary space allocation. The code computes the same values twice using two different arrays (`dp` and `sp`).

## Complexity

- **Time Complexity**: $O(N)$ — The code iterates through the input array twice.
- **Space Complexity**: $O(N)$ — Two vectors of size $N+2$ are allocated.

## Efficiency Feedback

- **Redundant Computation**: The `sp` loop is a duplicate of the `dp` loop (calculating the exact same state transitions), merely stopping at index 1. `sp[1]` is equivalent to `dp[1]`.
- **Pass-by-Value**: The `tab` function accepts `vector<int> cost` by value, creating an unnecessary copy of the entire input array.
- **Space Bottleneck**: The problem can be solved in $O(1)$ space by using two variables to track the costs of the previous two steps instead of full arrays.

## Code Quality

- **Readability**: Moderate. The presence of a large block of commented-out recursive code clutters the class.
- **Structure**: Moderate. The logic is split into a helper function `tab` that provides no abstraction benefit.
- **Naming**: Poor. `tab` is an abbreviation for tabulation and `sp` is ambiguous; they do not describe the purpose of the variables.

**Concrete Improvements**:
1. Remove the `sp` vector and its associated loop; use `min(dp[0], dp[1])`.
2. Change `tab(vector<int> cost)` to `tab(const vector<int>& cost)` to avoid copying.
3. Remove commented-out code.
4. Use two variables (e.g., `prev1`, `prev2`) to reduce space complexity to $O(1)$.

---

# Question Revision

#

## Min Cost Climbing Stairs

**Pattern:** Dynamic Programming (Bottom-Up)

**Brute Force:** Use recursion to explore every possible combination of 1-step and 2-step jumps to reach the top, resulting in $O(2^n)$ time complexity.

**Optimal Approach:** 
Maintain the minimum cost to reach the current step by taking the current step's cost and adding the minimum of the costs to reach the two preceding steps. Instead of a full array, use two variables to track the previous two minimums to optimize space.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The "minimum cost" requirement combined with a decision at step $i$ that depends solely on the optimal results of steps $i-1$ and $i-2$ signals a DP approach with optimal substructure.

**Summary:** The cost to reach the top is the cumulative minimum of the costs of the two preceding steps.

---
