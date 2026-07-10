---
title: "Fibonacci Number"
slug: fibonacci-number
date: "2026-06-18"

---

# My Solution
~~~
class
 Solution {
public:
    int fib(int n) {
        if(n==0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        int ans1 = fib(n-1);
        int ans2 = fib(n-2);
        return ans1 + ans2;
    }

};
~~~

# Submission Review

## Approach

- **Technique**: Pure Recursion.
- **Optimality**: Not optimal. The solution recalculates the same Fibonacci numbers multiple times (overlapping subproblems), leading to exponential growth in function calls.

## Complexity

- **Time Complexity**: $O(2^n)$ — specifically $O(\phi^n)$ where $\phi \approx 1.618$.
- **Space Complexity**: $O(n)$ — proportional to the maximum depth of the recursion stack.

## Efficiency Feedback

- **Runtime**: Will be extremely slow or time out for even moderately large values of $n$ (e.g., $n > 40$).
- **Optimizations**: 
    - Use **Memoization** (Top-down DP) to store previously computed values, reducing time to $O(n)$.
    - Use an **Iterative approach** (Bottom-up DP) to reduce time to $O(n)$ and space to $O(1)$ by only storing the last two values.

## Code Quality

- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Follows the required class structure.
- **Naming**: Moderate. `ans1` and `ans2` are generic; names like `prev1` and `prev2` would be more descriptive.
- **Improvements**: Replace the recursive calls with a simple `for` loop to avoid stack overflow and redundant computations.

---

# Question Revision

#

## Fibonacci Number

**Pattern:** Dynamic Programming (Space-Optimized)

**Brute Force:** Naive recursion implementing $F(n) = F(n-1) + F(n-2)$.
*   **Time:** $O(2^n)$
*   **Space:** $O(n)$ (Recursion stack)

**Optimal Approach:** Iteratively compute values from $0$ to $n$, storing only the two most recent terms in variables to calculate the next one.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The current value depends strictly on the two preceding values, meaning we don't need to store the entire history (array), only the last two states.

**Summary:** Calculate the $n$-th term by iteratively summing the previous two values in a loop.

---
