---
title: "Minimum Operations to Transform Array into Alternating Prime"
slug: minimum-operations-to-transform-array-into-alternating-prime
date: "2026-04-15"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Revision Report: Minimum Operations to Transform Array into Alternating Prime

**Pattern:** Greedy / Case-Based Simulation

**Brute Force:** 
Iterate through all possible prime combinations for each index to find the minimum changes. This is computationally impossible due to the infinite nature of primes.

**Optimal Approach:**
Since the array must be "alternating," there are only two valid configurations:
1. Indices $0, 2, 4 \dots$ are prime AND indices $1, 3, 5 \dots$ are non-prime.
2. Indices $0, 2, 4 \dots$ are non-prime AND indices $1, 3, 5 \dots$ are prime.

Iterate through the array once, calculating the cost (operations) to satisfy both configurations simultaneously. The result is the minimum of these two costs.

*   **Time Complexity:** $O(n \sqrt{M})$ where $n$ is array length and $M$ is the maximum value in the array (for primality testing).
*   **Space Complexity:** $O(1)$ (excluding input storage).

**The 'Aha' Moment:** 
The "alternating" constraint restricts the entire array's validity to only two possible starting states, reducing the problem from a search space to a simple comparison of two scenarios.

**Summary:** 
Calculate the cost to fit the two possible parity patterns and return the minimum.

---