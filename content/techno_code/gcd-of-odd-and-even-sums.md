---
title: "GCD of Odd and Even Sums"
slug: gcd-of-odd-and-even-sums
date: "2026-07-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int gcdOfOddEvenSums(int n) {
        return n ;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code returns the input $n$ directly.
*   **Optimality:** **Incorrect.** This is a trivial placeholder or a failure to implement the required logic (calculating the GCD of the sum of odd-indexed elements and the sum of even-indexed elements).

## Complexity
*   **Time Complexity:** $O(1)$.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The logic is entirely missing; it does not solve the problem described by the function name.

## Efficiency Feedback
*   The implementation is functionally useless despite being $O(1)$. To optimize a correct implementation, ensure the sums of odd/even elements are computed in a single pass ($O(N)$) and use `std::gcd` from the `<numeric>` header.

## Code Quality
*   **Readability:** Poor. The code does not perform the implied task.
*   **Structure:** Poor. It lacks the necessary loop or accumulation logic required to process input values.
*   **Naming:** The function name `gcdOfOddEvenSums` implies it expects an input (likely a vector/array) and logic to calculate sums, yet it only accepts an integer `n`. The signature itself is likely mismatched for the problem requirements.
*   **Concrete Improvements:** 
    1.  Redefine the function signature to accept a container (e.g., `vector<int>& nums`).
    2.  Use two variables to track sums of elements at odd and even indices.
    3.  Include `<numeric>` and return `std::gcd(evenSum, oddSum)`.

---

# Question Revision
### Revision Report: GCD of Odd and Even Sums

**Pattern:** Prefix Sums / Parity Tracking

**Brute Force:**
Iterate through all possible subarrays, calculate the sum of elements at odd indices and even indices for each, compute their GCD, and track the maximum. 
*   **Time Complexity:** $O(n^3)$ (or $O(n^2)$ with precomputed prefix sums).
*   **Space Complexity:** $O(1)$.

**Optimal Approach:**
Observe that the GCD of two numbers $a$ and $b$ is also the GCD of $a$ and $b-a$. By maintaining the running prefix sum of odd-indexed elements and even-indexed elements, we can transform the problem into finding the GCD of these cumulative sums. Use the Euclidean Algorithm to calculate the GCD efficiently.
*   **Time Complexity:** $O(n \cdot \log(\text{max\_sum}))$.
*   **Space Complexity:** $O(1)$ (if calculated on the fly).

**The 'Aha' Moment:**
When a problem asks for a property (like GCD) that is distributive or invariant under subtraction, look to maintain running prefix sums rather than recomputing the range sums from scratch.

**Summary:** 
Whenever a range-based operation depends on independent sub-totals (odd vs. even), use prefix tracking to convert a nested loop into a linear scan.

---