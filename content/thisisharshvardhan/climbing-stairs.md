--- title: "Climbing Stairs" slug: climbing-stairs date: "2026-06-25" ---  # My Solution ~~~class Solution {
public:
    int solve(int n,vector<int>& dp){
        if (n==0) return 1;
        if (n<0) return 0;
        if(dp[n]!=-1) return dp[n];
        int count =  solve(n-1,dp) + solve(n-2,dp);
        dp[n]=count;
        return count;
    }
    int climbStairs(int n) {
        vector<int> dp(n+1,-1);
        return solve(n,dp);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique:** Top-down Dynamic Programming (Recursion with Memoization).
- **Optimality:** Optimal in terms of time complexity, though space can be further optimized to $O(1)$ using an iterative approach.

## Complexity
- **Time Complexity:** $O(n)$ — Each state from $0$ to $n$ is computed exactly once.
- **Space Complexity:** $O(n)$ — Required for the `dp` vector and the recursive call stack.

## Efficiency Feedback
- **Runtime:** Efficient; memoization prevents the exponential growth associated with naive recursion.
- **Memory:** Higher than necessary. The problem can be solved iteratively using only two variables to track the previous two states, reducing space from $O(n)$ to $O(1)$.

## Code Quality
- **Readability:** Good. The logic is clear and follows standard DP patterns.
- **Structure:** Good. Separation of the recursive helper function and the main driver is clean.
- **Naming:** Good. `solve` and `climbStairs` are descriptive enough for this context.
- **Concrete Improvements:**
    - Change `vector<int>& dp` to `vector<int>& memo` to better reflect its purpose.
    - Pass `n` by value (already done) but consider using an iterative loop to avoid potential stack overflow for very large $n$ (though $n$ is typically small in this specific problem).  ---  # Question Revision ### Climbing Stairs

**Pattern:** Dynamic Programming (Fibonacci Sequence)

**Brute Force:**
Recursive exploration of all paths: from step $i$, you can move to $i+1$ or $i+2$.
- **Time:** $O(2^n)$
- **Space:** $O(n)$ (recursion stack)

**Optimal Approach:**
Each step $n$ can only be reached from step $n-1$ (by taking 1 step) or step $n-2$ (by taking 2 steps). The total ways $f(n) = f(n-1) + f(n-2)$. Use two variables to track the previous two states instead of a full array to optimize space.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
The realization that the current state depends exclusively on the sum of the two immediately preceding states identifies this as a Fibonacci-style recurrence.

**Summary:**
The number of ways to reach the top is the sum of the ways to reach the two previous steps.  ---