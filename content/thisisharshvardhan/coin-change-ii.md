--- title: "Coin Change II" slug: coin-change-ii date: "2026-06-25" ---  # My Solution ~~~class Solution {
public:
    int solve(vector<int>& coins, int amount,  int ind, vector<vector<int>>& dp){
        if (amount==0) return 1;
        if (amount<0) return 0;
        if (ind==coins.size()) return 0;
        if (dp[ind][amount]!=-1) return dp[ind][amount];

        if (coins[ind]<=amount){
                int ans1 = solve(coins, amount-coins[ind],ind,dp);
                int ans2 = solve(coins, amount,ind+1,dp);
                dp[ind][amount] = ans1+ans2;
                return dp[ind][amount];
            }
        else {
            dp[ind][amount] = solve(coins, amount, ind+1,dp);
            return dp[ind][amount];
        }

    }
    int change(int amount, vector<int>& coins) {
        vector<vector<int>> dp (coins.size()+1,vector<int>(amount+1,-1));
        return solve(coins, amount, 0, dp);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Top-down Dynamic Programming (Memoization).
- **Optimality**: Optimal in terms of time complexity. It correctly explores the state space of `(coin_index, remaining_amount)` to count unique combinations.

## Complexity
- **Time Complexity**: $O(N \times A)$, where $N$ is the number of coins and $A$ is the target amount. Each state is computed once.
- **Space Complexity**: $O(N \times A)$ to store the memoization table, plus $O(N + A)$ for the recursion stack.

## Efficiency Feedback
- **Memory Usage**: The $O(N \times A)$ space is higher than necessary. This problem can be optimized to $O(A)$ space using a bottom-up 1D DP array.
- **Recursion Overhead**: While correct, the recursive approach incurs function call overhead compared to an iterative approach.

## Code Quality
- **Readability**: Good. The logic clearly distinguishes between picking and skipping a coin.
- **Structure**: Good. The separation between the driver function (`change`) and the recursive helper (`solve`) is standard.
- **Naming**: Moderate. `solve` is a generic name; `countCombinations` would be more descriptive. `ind` is a common shorthand for index.
- **Improvements**: 
    - Use a 1D vector for space optimization.
    - Use `const vector<int>& coins` in the `solve` signature to avoid any implicit copying (though it is passed by reference here).
    - The `if (coins[ind] <= amount)` block can be simplified: the logic for `ans2` (skipping the coin) is identical in both the `if` and `else` branches and can be moved outside the conditional.  ---  # Question Revision ### Coin Change II

**Pattern:** Dynamic Programming (Unbounded Knapsack / Counting Combinations)

**Brute Force:** Recursive DFS exploring all possible coin combinations to reach the target amount, resulting in exponential time complexity due to overlapping subproblems.

**Optimal Approach:** 
Use a 1D DP array `dp` where `dp[i]` represents the number of ways to make amount `i`. Initialize `dp[0] = 1`. To ensure we count **combinations** (not permutations), iterate through each coin first, then update all reachable amounts in the `dp` array.
- **Time Complexity:** $O(n \cdot m)$ where $n$ is the amount and $m$ is the number of coins.
- **Space Complexity:** $O(n)$ to store the DP state.

**The 'Aha' Moment:** Iterating through coins in the outer loop and the amount in the inner loop prevents counting the same set of coins in different orders (e.g., $\{1, 2\}$ vs $\{2, 1\}$).

**Summary:** Use a 1D DP array and process coins one by one to count unique combinations.  ---