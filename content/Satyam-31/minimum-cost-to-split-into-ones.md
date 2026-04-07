---
title: "Minimum Cost to Split into Ones"
slug: minimum-cost-to-split-into-ones
date: "2026-03-07"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int minCost(int n) {
        return n*(n-1)/2;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical formula (Arithmetic series summation).
*   **Optimality:** Optimal. The problem asks for the minimum cost to split an integer $n$ into $n$ ones using a process where splitting an integer $x$ into $a$ and $b$ costs $x$. The total cost to reduce $n$ to $n$ ones is $\sum_{i=1}^{n-1} i$, which is equivalent to the triangular number formula $n(n-1)/2$.

## Complexity
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

## Efficiency Feedback
*   The solution is highly efficient as it reduces a process simulation to a constant-time arithmetic operation. No further optimization is possible.

## Code Quality
*   **Readability:** Good. The code is concise and the logic is immediately apparent.
*   **Structure:** Good. The class-method structure is standard for competitive programming environments.
*   **Naming:** Good. The method name `minCost` is descriptive.
*   **Concrete Improvements:** 
    *   **Data Type Safety:** If $n$ can be large (e.g., $n > 65,535$), $n(n-1)$ might overflow a 32-bit `int`. Using `long long` for the calculation would be safer if the constraints on $n$ allow it to exceed ~46,340. 
    *   **Example:** `return (long long)n * (n - 1) / 2;`

---
---


# Question Revision
### Revision Report: Minimum Cost to Split into Ones

**Pattern:** Dynamic Programming (DP) / Greedy Optimization

**Brute Force:**
Recursively attempt every possible split point to partition the string into segments of '1's, calculating the cost of each partition and keeping the minimum. This leads to $O(2^n)$ complexity due to overlapping subproblems.

**Optimal Approach:**
Observe that the cost is determined by the number of zeros and the number of ones. Since we can only split at indices where a '1' exists, the problem simplifies to calculating the cost to remove all '0's and then applying the cost function to the resulting segments of '1's. By pre-calculating prefix sums or iterating linearly, we can determine the optimal split points based on the local cost of segments.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (or $O(n)$ if storing prefix sums)

**The 'Aha' Moment:**
When the cost function relies on the count of elements within a segment rather than their specific positions, look for a way to map the problem to a prefix-sum array to achieve constant-time range queries.

**Summary:**
Whenever a problem asks for an optimal partitioning cost, check if the cost function is additive, allowing you to replace expensive recursion with a linear pass over pre-calculated prefix metrics.

---
