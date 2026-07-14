---
title: "Predict the Winner"
slug: predict-the-winner
date: "2026-06-23"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(vector<int>& nums, int i, int j,vector<vector<int>>& dp){
        if (i == j) return nums[i];
        if (dp[i][j]!=-1) return dp[i][j];
        int sum1=nums[i] - solve(nums,i+1,j,dp);
        int sum2=nums[j] - solve(nums,i,j-1,dp);
        dp[i][j] = max(sum1,sum2);
        return max(sum1,sum2);

    }
    bool predictTheWinner(vector<int>& nums) {
        vector<vector<int>> dp (nums.size()+1,vector<int>(nums.size()+1,-1));
        int i=0;
        int j=nums.size()-1;
        return solve(nums,i,j,dp) >= 0 ;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Top-down Dynamic Programming (Recursion with Memoization).
- **Strategy**: Minimax relative scoring. The function calculates the maximum difference a player can achieve over their opponent.
- **Optimality**: Optimal. The $O(N^2)$ approach is the standard efficient solution for this game theory problem.

## Complexity
- **Time Complexity**: $O(N^2)$, where $N$ is the size of `nums`. There are $N \times N$ possible states $(i, j)$, and each state is computed once.
- **Space Complexity**: $O(N^2)$ to store the memoization table, plus $O(N)$ for the recursion stack.

## Efficiency Feedback
- **Redundant Calculation**: The code calls `max(sum1, sum2)` twice (once for assignment and once for the return statement). While the compiler likely optimizes this, it is logically redundant.
- **Memory**: The `dp` table is initialized as $(N+1) \times (N+1)$. Since $i$ and $j$ never exceed $N-1$, $N \times N$ is sufficient.

## Code Quality
- **Readability**: Good. The logic is clean and easy to follow.
- **Structure**: Good. Logic is properly decoupled into a helper function.
- **Naming**: Moderate. `solve` is generic; a name like `getMaxScoreDiff` would be more descriptive. `sum1` and `sum2` are misleading as they represent relative score differences, not sums.
- **Improvements**:
    - Store the result of `max(sum1, sum2)` in a variable to avoid double evaluation.
    - Initialize the `dp` table size to `nums.size()` instead of `nums.size() + 1`.

---

# Question Revision
### Predict the Winner

**Pattern:** Dynamic Programming (Minimax / Interval DP)

**Brute Force:** 
Use recursion to simulate every possible move (picking from the left or right end). For each turn, the current player chooses the option that maximizes their total score while the opponent does the same.
*   **Complexity:** $O(2^n)$ time, $O(n)$ space.

**Optimal Approach:**
Use a 2D DP table `dp[i][j]` representing the maximum **relative score** (Player 1's score minus Player 2's score) the current player can achieve from the subarray `[i, j]`.
*   **Logic:** The current player picks either `nums[i]` or `nums[j]`. Their score increases by the value of the pick, but the opponent then gets to play on the remaining subarray, reducing the current player's relative lead.
*   **Transition:** $dp[i][j] = \max(nums[i] - dp[i+1][j], \ nums[j] - dp[i][j-1])$
*   **Complexity:** $O(n^2)$ time, $O(n^2)$ space (reducible to $O(n)$).

**The 'Aha' Moment:** 
The game is zero-sum, meaning maximizing my own score is equivalent to maximizing the difference between my score and my opponent's.

**Summary:** 
Track the maximum relative score difference across all possible subarrays using interval DP to determine if Player 1 ends with a non-negative lead.

---