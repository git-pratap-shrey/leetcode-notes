### Revision Report: Maximum Product Subarray

**Pattern:** Dynamic Programming (State Tracking)

**Brute Force:**
Iterate through all possible subarrays using nested loops to calculate products, tracking the global maximum.
*   **Complexity:** $O(n^2)$

**Optimal Approach:**
Since a negative number can turn a small product into a large maximum (or vice versa), maintain both a `current_max` and `current_min` at each index. Update these by comparing the current element with the product of itself and the previous min/max.
*   **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When the sign of a number can flip your "best" product into your "worst" product, you must track both extremes simultaneously to handle future sign flips.

**Summary:**
Whenever a local extremum can be inverted by a negative multiplier, store both the running minimum and maximum to account for the pivot.
