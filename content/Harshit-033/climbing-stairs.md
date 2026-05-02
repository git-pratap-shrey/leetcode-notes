---
title: "Climbing Stairs"
slug: climbing-stairs
date: "2026-05-01"
---

# My Solution
~~~cpp
class Solution {
public:
    int fibbonaci(int x){
        
        int first=1;
        int second=2;
        int third;
        for(int i=3;i<=x;i++){
            third=first+second;
            first=second;
            second=third;
        }
        return second;


    }
    int climbStairs(int n) {
        if (n <= 2) return n;

        return fibbonaci(n);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative Dynamic Programming (Space-Optimized).
- **Optimality**: Optimal. It computes the $n$-th value using the recurrence $f(n) = f(n-1) + f(n-2)$ without redundant calculations or extra memory.

## Complexity
- **Time Complexity**: $O(n)$ — a single linear pass from 3 to $n$.
- **Space Complexity**: $O(1)$ — uses only three integer variables regardless of input size.

## Efficiency Feedback
- The implementation is highly efficient in terms of both time and memory.
- No significant bottlenecks.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but there is a spelling error in the function name (`fibbonaci` $\rightarrow$ `fibonacci`).
- **Structure**: Moderate. Creating a separate helper function for a simple loop adds unnecessary overhead/boilerplate. The logic could be integrated directly into `climbStairs`.
- **Naming**: Moderate. `first`, `second`, and `third` are generic; names like `prev2`, `prev1`, and `current` would be more descriptive.
- **Improvements**:
    - Fix the spelling of "fibonacci".
    - Merge `fibbonaci` into `climbStairs` to simplify the call stack.
    - Consider using `unsigned int` or `long` if $n$ exceeds 45 to prevent integer overflow (though `int` is typically sufficient for standard "Climbing Stairs" constraints).

---

# Question Revision
### Climbing Stairs

**Pattern:** Dynamic Programming / Fibonacci Sequence

**Brute Force:** Recursive exploration of all possible paths; calculating $f(n) = f(n-1) + f(n-2)$ without storing results, leading to redundant calculations.

**Optimal Approach:** Iteratively calculate the number of ways to reach each step from $1$ to $n$. Since the current state only depends on the two preceding states, use two variables to track the counts instead of a full array.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** To reach step $n$, you must have arrived from either step $n-1$ (via a 1-step jump) or step $n-2$ (via a 2-step jump).

**Summary:** It is a Fibonacci sequence where the total ways to reach the current step is the sum of the ways to reach the previous two steps.

---