### Revision Report: Maximum Product Subarray

**Pattern:** Dynamic Programming (State Tracking)

**Brute Force:** 
Generate all possible subarrays using nested loops, calculate the product for each, and track the global maximum. 
*Complexity:* $O(n^2)$.

**Optimal Approach:**
Since multiplying by a negative number flips the sign (making the smallest product potentially become the largest), maintain two variables while iterating: `max_so_far` and `min_so_far`. At each index, update both by comparing the current element with the product of the current element and the previous min/max.
*Complexity:* $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When you see a "subarray" problem involving multiplication and negative numbers, recognize that the current maximum is dependent on both the previous maximum *and* the previous minimum.

**Summary:**
Always track both the local maximum and minimum to account for sign-flipping negatives during multiplication.
