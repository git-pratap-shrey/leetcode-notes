---
title: "Maximum Average Subarray I"
slug: maximum-average-subarray-i
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the **code snippet** you would like me to analyze. I am ready to review your solution for *Maximum Average Subarray I* as soon as you paste it.

---

# Question Revision
### Revision Report: Maximum Average Subarray I

**Pattern:** Sliding Window (Fixed-size)

**Brute Force:** 
Calculate the sum for every possible subarray of length $k$ by iterating through the array and using a nested loop to sum elements. 
*   **Time Complexity:** $O(n \cdot k)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
1. Calculate the sum of the first $k$ elements.
2. Slide the window one position at a time: subtract the element leaving the window and add the element entering it.
3. Keep track of the running maximum sum and divide by $k$ at the end.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement for a **fixed-size** window $(k)$ over a contiguous range strongly suggests that a sliding window is more efficient than recomputing sums from scratch.

**Summary:** 
When asked for a metric over a fixed-length contiguous subarray, use a sliding window to achieve $O(n)$ by updating the sum incrementally rather than re-summing.

---