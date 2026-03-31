### Revision Report: Maximum Product Subarray

**Pattern:** Dynamic Programming (State Tracking)

**Brute Force:** 
Generate all possible subarrays using nested loops, calculate the product for each, and track the maximum.
*   **Complexity:** $O(n^2)$

**Optimal Approach:**
Maintain two variables, `max_so_far` and `min_so_far`, to track the current running product. Because multiplying by a negative number flips the sign (turning the minimum into a potential maximum), you must update both variables at each step by comparing `current`, `max * current`, and `min * current`.
*   **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When negative numbers are involved, the "local minimum" is just as valuable as the "local maximum" because it can become the "global maximum" if multiplied by another negative value.

**Summary:** 
Whenever you need to track an extremum across products with negative numbers, maintain both the current min and max to capture potential sign flips.
