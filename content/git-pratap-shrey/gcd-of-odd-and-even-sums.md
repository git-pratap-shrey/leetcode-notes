---
title: "GCD of Odd and Even Sums"
slug: gcd-of-odd-and-even-sums
date: "2026-07-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int gcdOfOddEvenSums(int n) {
        return n;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code returns `n` regardless of input.
*   **Correctness:** This is **incorrect** for the problem "GCD of Odd and Even Sums." The GCD of the sum of odd numbers and the sum of even numbers up to $n$ generally depends on the specific mathematical properties of the sums (e.g., for $n=4$, odds are $1+3=4$, evens are $2+4=6$, $\gcd(4, 6)=2 \neq 4$). The logic is non-existent.

## Complexity
*   **Time Complexity:** $O(1)$.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The approach is mathematically invalid, not just inefficient.

## Efficiency Feedback
*   While $O(1)$ is optimal for any algorithm, this solution fails to solve the problem. You must implement the sum calculations:
    *   Sum of odds up to $n$: $\lceil n/2 \rceil^2$.
    *   Sum of evens up to $n$: $\lfloor n/2 \rfloor \times (\lfloor n/2 \rfloor + 1)$.
    *   Then, compute `std::gcd` of these two results.

## Code Quality
*   **Readability:** Good (concise, but lacks logic).
*   **Structure:** Poor (fails the functional requirements).
*   **Naming:** Good (the method name is descriptive).
*   **Improvements:** 
    *   Replace the body with the closed-form mathematical formulas for sums.
    *   Use `std::gcd` from the `<numeric>` header.
    *   Ensure data types (e.g., `long long`) are used if sums exceed `int` range.

---

# Question Revision
### Revision Report: GCD of Odd and Even Sums

**Pattern:** Prefix Sums / Parity Tracking

**Brute Force:**
Iterate through every possible subarray, calculate the sum of elements at odd indices and even indices respectively, and compute their Greatest Common Divisor (GCD). 
*   **Time:** $O(n^3)$ (or $O(n^2)$ with optimized sum calculation).
*   **Space:** $O(1)$.

**Optimal Approach:**
Maintain two running prefix sums—one for elements at even indices and one for elements at odd indices. As you iterate through the array, update the current even/odd sums and compute the `gcd(even_sum, odd_sum)` for the current prefix. If a specific range is required, utilize the difference of prefix sums: `sum(range) = prefix[r] - prefix[l-1]`.
*   **Time:** $O(n \log(\min(A, B)))$ where $n$ is the array length and the log factor comes from the Euclidean algorithm.
*   **Space:** $O(1)$ (if computing globally) or $O(n)$ (if storing prefix arrays).

**The 'Aha' Moment:**
When a problem asks for properties of sums partitioned by index parity, treating even and odd positions as two distinct interleaved sequences allows you to reduce a 2D subarray problem into a 1D prefix sum manipulation.

**Summary:** 
Whenever you see alternating index requirements, split the array into two virtual streams based on parity and track their prefix sums independently.

---