---
title: "Maximum Value of an Alternating Sequence"
slug: maximum-value-of-an-alternating-sequence
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    long long maximumValue(int n, int s, int m) {
        if (n==1) return s;
        long long peaks = n/2;
        return s + m + (peaks-1)* (m-1);
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Mathematical/Greedy construction.
* **Optimality:** Optimal. The problem requires maximizing an alternating sum $\sum (-1)^i a_i$ with constraints on element range $[1, m]$ and fixed sum $s$. The solution correctly identifies that the sum is maximized by placing $m$ at peak positions and $1$ at valley positions to minimize subtractions.

## Complexity
* **Time Complexity:** $O(1)$.
* **Space Complexity:** $O(1)$.

## Efficiency Feedback
* The logic is highly efficient ($O(1)$). No further algorithmic optimizations are possible.
* The solution assumes $s$ is large enough to accommodate the required distribution (at least $n + \text{peaks} \times (m-1)$). If $s$ is smaller, the logic might fail, though the problem constraints typically imply valid inputs for this pattern.

## Code Quality
* **Readability:** Good. The logic is concise and easy to follow.
* **Structure:** Good. The handle of the $n=1$ edge case is appropriate.
* **Naming:** Moderate. `peaks` is descriptive, but `n`, `s`, and `m` match standard competitive programming shorthand; for production code, more descriptive names (e.g., `sequenceLength`, `targetSum`, `maxValue`) would be preferred.
* **Concrete Improvements:** 
    * Add a comment explaining the mathematical derivation or the constraint assumptions (e.g., "Assumes $s$ is sufficient to support $m$ at all peaks and 1 at all valleys").
    * Explicitly handle the case where $s$ is insufficient if the problem constraints allow for such inputs.

---

# Question Revision
### Revision Report: Maximum Alternating Subsequence Sum

**Pattern:** Dynamic Programming (State Machine)

**Brute Force:** 
Generate all possible subsequences, calculate the alternating sum for each, and track the global maximum.
*   **Time Complexity:** $O(2^n)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
Maintain two variables: `sumEven` (the maximum alternating sum ending with an even-indexed element) and `sumOdd` (the maximum alternating sum ending with an odd-indexed element). Iterate through the array once:
*   `sumEven = max(sumEven, sumOdd + num)`
*   `sumOdd = max(sumOdd, sumEven - num)`
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement for an alternating sign ($+ - + -$) implies that at any index, you only care about the *state* of the previous calculation—whether you are currently adding or subtracting—which collapses the search space into a simple state machine.

**Summary:** 
When a problem asks for an alternating sequence sum, treat it as a state machine where you toggle between "add" and "subtract" modes at each step.

---