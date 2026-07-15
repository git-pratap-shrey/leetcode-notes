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
        return n;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The solution implements a constant-time mapping (returning $n$ directly).
*   **Optimality:** Incorrect. The code fails to perform the logic required to calculate the GCD of the sum of odd-indexed elements and the sum of even-indexed elements. It returns the input size $n$ instead of the mathematical result.

## Complexity
*   **Time Complexity:** $O(1)$.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The logic is absent; the complexity is trivial because the function ignores the mathematical requirements of the problem.

## Efficiency Feedback
*   **Performance:** While $O(1)$ is theoretically ideal, the solution is functionally useless.
*   **Optimizations:** The problem requires calculating the sums of specific elements. Depending on the input constraints (likely an array input, though the signature provided only includes `int n`), this would typically require $O(n)$ to traverse the input data.

## Code Quality
*   **Readability:** Good (The code is syntactically correct and clear).
*   **Structure:** Poor (The implementation does not represent a solution to the problem).
*   **Naming:** Moderate (Function name `gcdOfOddEvenSums` is descriptive, but the logic does not match the name).
*   **Concrete Improvements:** 
    1.  The function signature is likely incorrect for the problem; it should accept a collection (e.g., `vector<int>& nums`).
    2.  Implement a loop to accumulate `sumEven` and `sumOdd`.
    3.  Use `std::gcd` (available in `<numeric>` since C++17) to compute the final result.

---

# Question Revision
### Revision Report: GCD of Odd and Even Sums

**Pattern:** Prefix Sums / Parity Tracking

**Brute Force:**
Iterate through all possible subarrays, calculate the sum of odd-indexed elements and even-indexed elements for each, and compute the GCD.
*   **Complexity:** $O(n^3)$ or $O(n^2)$ depending on optimization.

**Optimal Approach:**
Use two separate prefix sum arrays (or variables) to track the cumulative sum of values at odd indices and even indices. For any subarray $[i, j]$, the sum of odd/even elements is the difference between prefix sums at index $j$ and $i-1$. Compute the GCD of these two differences.
*   **Time Complexity:** $O(n + \log(\min(S_{odd}, S_{even})))$ 
*   **Space Complexity:** $O(1)$ (by using running variables).

**The 'Aha' Moment:**
When a problem asks for properties (like GCD) of independent subset sums derived from indices, transforming the problem into a prefix sum difference allows you to query any range in constant time.

**Summary:** 
Whenever a range calculation involves distinct parity-based subsets, treat them as two independent prefix sum problems to unlock $O(1)$ range queries.

---