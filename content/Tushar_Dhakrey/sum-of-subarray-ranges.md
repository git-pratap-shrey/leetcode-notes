---
title: "Sum of Subarray Ranges"
slug: sum-of-subarray-ranges
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Sum of Subarray Ranges

**Pattern:** Monotonic Stack

**Brute Force:** Iterate through all possible subarray start and end points, maintaining a running minimum and maximum for each.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Decompose the problem using the identity: $\sum(\text{max} - \text{min}) = \sum \text{max} - \sum \text{min}$. Use a monotonic stack to calculate the "contribution" of each element $A[i]$ as the minimum and maximum across all subarrays. For each $i$, find the distance to the previous and next smaller/larger elements to determine how many subarrays $A[i]$ dominates.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The sum of ranges is linear, allowing you to decouple the total sum of maximums from the total sum of minimums and count per-element contributions instead of per-subarray values.

**Summary:** Use a monotonic stack to find the boundaries where each element is the min/max to calculate its total contribution to the global sum.

---