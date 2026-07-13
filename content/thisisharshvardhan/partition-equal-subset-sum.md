---
title: "Partition Equal Subset Sum"
slug: partition-equal-subset-sum
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Partition Equal Subset Sum

**Pattern:** 0/1 Knapsack (Dynamic Programming)

**Brute Force:** 
Use recursive backtracking to explore all $2^n$ possible subsets, calculating the sum of each to see if any equal exactly $\frac{\text{total\_sum}}{2}$.

**Optimal Approach:**
1. If `total_sum` is odd, return `false` immediately.
2. Define `target = total_sum / 2`.
3. Maintain a boolean array `dp` of size `target + 1`, where `dp[i]` indicates if a sum of `i` is possible.
4. Initialize `dp[0] = true`.
5. For each number `num` in the input:
   - Iterate **backwards** from `target` down to `num`: `dp[i] = dp[i] || dp[i - num]`.
   - *Note: Backward iteration prevents using the same element multiple times (0/1 constraint).*

- **Time Complexity:** $O(n \cdot \text{target})$
- **Space Complexity:** $O(\text{target})$

**The 'Aha' Moment:** 
The problem asks to split a set into two equal halves, which is logically identical to finding a single subset that sums to exactly half of the total sum.

**Summary:** 
Reduce the problem to a Subset Sum target of $\frac{\text{total\_sum}}{2}$ using a space-optimized 1D DP array.

---