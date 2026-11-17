---
title: "Partition Equal Subset Sum"
slug: partition-equal-subset-sum
date: "2026-11-15"
---

# My Solution
~~~java
class Solution {
    public boolean canPartition(int[] nums) {
        int total =0 ;
        for(int i=0;i<nums.length;i++){
            total += nums[i];
        }
        if(total%2!=0){
            return false;
        }
        int target = total/2;
        boolean[] dp = new boolean[target+1];
        dp[0] = true;
        for(int num:nums){
            for(int s=target;s>=num;s--){
                if(dp[s-num]){
                    dp[s] = true;
                }
            }
        }
        return dp[target];
    }
}
~~~

# Submission Review
<thought>*   Problem: Partition Equal Subset Sum.
    *   Language: Java.
    **   Problem: Partition Equal Subset Sum.
    *   Language: Java.
    *   Task: Analyze correctness, efficiency, and code quality based on strict system instructions.

    *   Calculates total sum.
    *   Checks if the sum is odd (if so, impossible to split into two equal integer subsets).
    *   Target is `total / 2`.
    *   Uses a 1D boolean array `dp` of size `target + 1`.
    *   Initializes `dp[0] = true`.
    *   Iterates through each `num` in `nums`.
    *   Iterates backwards from `target` down to `num` to update `dp`.
    *   Returns `dp[target]`.

    *   *Approach:* This is a 0/1 Knapsack variation. It's a Dynamic Programming approach using space optimization (1D array).
    *   *Optimality:* Yes, $O(n \cdot \text{target})$ is the standard optimal approach for this NP-complete problem.

    *   *Time Complexity:* $O(n \cdot \text{target})$, where $n$ is the number of elements and $\text{target}$ is half the total sum.
    *   *Space Complexity:* $O(\text{target})$ to store the boolean array.

    *   The backward loop `for(int s=target;s>=num;s--)` correctly prevents using the same element multiple times in the same subset.
    *   Early exit optimization: If `dp[target]` becomes `true` inside the inner loop, we could theoretically return `true` immediately.

    *   Readability: Good. Simple logic, standard implementation.
    *   Structure: Good. Concise method.
    *   Naming: Moderate. `total`, `target`, `s`, `num` are acceptable, but `s` is a bit generic (could be `currentSum`).
    *   Improvements:
        *   Early return inside the loop.
        *   Use an enhanced for-loop for the total sum calculation for consistency.

    *   Ensure concise, structured Markdown.
    *   Follow rules: no problem explanation, focus on code, no hallucinations.</thought>## Approach
- **Technique**: Dynamic Programming (0/1 Knapsack variation).
- **Optimality**: Optimal. The solution uses space-optimized DP to determine if a subset sum equals half of the total sum.

## Complexity
- **Time Complexity**: $O(n \cdot T)$, where $n$ is the number of elements in `nums` and $T$ is the target sum (half of the total sum).
- **Space Complexity**: $O(T)$ to store the `dp` boolean array.

## Efficiency Feedback
- **Runtime**: The runtime is efficient. However, a small optimization is missing: the function could return `true` immediately as soon as `dp[target]` becomes `true`, rather than completing all iterations.
- **Memory**: Memory usage is minimal due to the 1D array optimization.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard DP patterns.
- **Structure**: Good. The flow is linear and logical.
- **Naming**: Moderate. While `total` and `target` are clear, `s` is a generic variable name; `currentSum` would be more descriptive.
- **Concrete Improvements**:
    - Add an early exit: `if (dp[target]) return true;` inside the outer loop.
    - Use an enhanced for-loop for the initial total sum calculation to maintain consistency with the DP loop.

---

# Question Revision
<thought>
*   Problem: Partition Equal Subset Sum (LeetCode 416).
*   Goal: Create a concise, high-signal Markdown revision report.
*   Persona: Senior DSA trainer.
*   Constraints: Standard Big-O, 'Aha' moment = one sentence, no introductory pleasantries.

    *   *Problem Description:* Given a non-empty array of positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
    *   *Key Insight:* If the total sum is odd, it's impossible. If even, we need to find if a subset sums to `total_sum / 2`. This is exactly the 0/1 Knapsack problem.
    *   *Brute Force:* Recursion (Try including or excluding each element). $O(2^n)$.
    *   
*   Problem: Partition Equal Subset Sum (LeetCode 416).
*   Goal: Create a concise, high-signal Markdown revision report.
*   Persona: Senior DSA trainer.
*   Constraints: Standard Big-O, 'Aha' moment = one sentence, no introductory pleasantries.

    *   *Problem Description:* Given a non-empty array of positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
    *   *Key Insight:* If the total sum is odd, it's impossible. If even, we need to find if a subset sums to `total_sum / 2`. This is exactly the 0/1 Knapsack problem.
    *   *Brute Force:* Recursion (Try including or excluding each element). $O(2^n)$.
    *   *Optimal Approach:* Dynamic Programming (0/1 Knapsack).
        *   State: `dp[i]` is true if sum `i` can be achieved.
        *   Transition: `dp[i] = dp[i] || dp[i - num]`.
        *   Complexity: Time $O(n \times \text{target})$, Space $O(\text{target})$.
    *   *The 'Aha' Moment:* "Partition into two equal subsets" $\implies$ "Find a subset that sums to $\frac{\text{total\_sum}}{2}$" $\implies$ 0/1 Knapsack.

    *   Pattern: Dynamic Programming (0/1 Knapsack variation).
    *   Brute Force: Recursive exploration of all possible subsets to see if any sum to `total_sum / 2`. Complexity: $O(2^n)$.
    *   Optimal Approach: Use a 1D DP boolean array where `dp[i]` indicates if a sum of `i` is possible. For each number, update the array from right to left to avoid using the same element twice.
        *   Time: $O(n \times S)$ where $n$ is number of elements and $S$ is `total_sum / 2`.
        *   Space: $O(S)$.
    *   'Aha' Moment: The goal of splitting an array into two equal sums is mathematically identical to finding a single subset that sums to exactly half of the total sum.
    *   Summary: Transform a "partition" problem into a "target sum" problem using 0/1 Knapsack DP.</thought>### Revision Report: Partition Equal Subset Sum

- **Pattern**: Dynamic Programming (0/1 Knapsack)
- **Brute Force**: Recursively explore all $2^n$ subset combinations to check if any subset sums to $\text{total\_sum} / 2$. Time: $O(2^n)$, Space: $O(n)$ (recursion stack).
- **Optimal Approach**: 
    1. If $\text{total\_sum}$ is odd, return `false` immediately.
    2. Define `target = total_sum / 2`.
    3. Use a boolean DP array `dp` of size `target + 1`, where `dp[i]` is true if sum `i` is achievable.
    4. For each number `num` in the input, iterate **backwards** from `target` down to `num` to update `dp[i] = dp[i] || dp[i - num]`.
    - **Time Complexity**: $O(n \cdot S)$ where $n$ is the number of elements and $S$ is the target sum.
    - **Space Complexity**: $O(S)$ for the DP array.
- **The 'Aha' Moment**: Realizing that partitioning an array into two equal subsets is mathematically equivalent to finding a single subset that sums to exactly half of the total sum.
- **Summary**: Reduce the partition problem to a target-sum 0/1 Knapsack problem using a space-optimized boolean DP array.

---