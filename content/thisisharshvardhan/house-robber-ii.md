--- title: "House Robber II" slug: house-robber-ii date: "2026-06-25" ---  # My Solution ~~~class Solution {
public:
    int solve (vector<int>& nums, int i, int end, vector<int>& dp){
        if (i>=end) return 0;
        if (dp[i]!=-1) return dp[i];
        int inc = nums[i] + solve (nums,i+2,end,dp);
        int exc = 0 + solve (nums,i+1,end,dp);
        int final = max(inc,exc);
        dp[i] = final;
        return final;
        
    }
    int rob(vector<int>& nums) {
        vector<int> dp (nums.size()+1,-1);
        vector<int> sp (nums.size()+1,-1);
        if (nums.size()==1) return nums[0];
        int case1= solve(nums,0,nums.size()-1,dp);
        int case2= solve(nums,1,nums.size(),sp);
        return max(case1,case2);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Top-down Dynamic Programming (Recursion with Memoization).
- **Optimality**: Optimal in terms of time complexity. The problem is broken into two linear House Robber problems (one excluding the last house, one excluding the first) to handle the circular constraint.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of houses. Each state in the `dp` and `sp` arrays is computed exactly once.
- **Space Complexity**: $O(N)$ to store the memoization arrays and the recursion stack.

## Efficiency Feedback
- **Recursion Overhead**: The use of recursion adds overhead compared to an iterative approach.
- **Memory Usage**: The space complexity can be reduced from $O(N)$ to $O(1)$ by using an iterative approach with only two variables to track the previous maximums, as only the last two states are needed.
- **Unnecessary Allocation**: `vector<int> dp (nums.size()+1,-1)` is allocated, but for `case1`, indices up to `nums.size()-1` are used; for `case2`, indices from `1` to `nums.size()` are used. The allocation is safe but slightly loose.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but variable naming is inconsistent.
- **Structure**: Good. The logic is cleanly separated between the recursive solver and the main driver function.
- **Naming**: Poor. 
    - `sp` is vague (likely stands for "second pass" or "space").
    - `final` is a keyword in some languages (though not C++), making it a suboptimal choice for a variable name.
- **Concrete Improvements**:
    - Rename `sp` to `dp2` or `memo2`.
    - Rename `final` to `res` or `max_robbed`.
    - Use `std::max` directly without the intermediate `inc`/`exc` variables if brevity is desired, though the current way is readable.  ---  # Question Revision ### House Robber II

**Pattern:** Dynamic Programming

**Brute Force:** Use recursion to explore every possible combination of houses, skipping adjacent ones, and returning the maximum sum. Time: $O(2^n)$.

**Optimal Approach:**
Since the houses are in a circle, the first and last houses are adjacent. This breaks the linear DP pattern. To solve this, treat it as two separate linear House Robber I problems:
1. Rob houses from index `0` to `n-2` (ignore the last house).
2. Rob houses from index `1` to `n-1` (ignore the first house).
The answer is the maximum of these two scenarios. For each linear pass, maintain two variables (`prev1`, `prev2`) to track the maximum loot.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The circular constraint is simply a dependency between the first and last element, which can be neutralized by splitting the problem into two linear sub-problems.

**Summary:** Run the standard linear House Robber DP twice—once excluding the first house and once excluding the last—and take the maximum.  ---