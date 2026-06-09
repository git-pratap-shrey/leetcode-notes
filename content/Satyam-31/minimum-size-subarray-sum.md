---
title: "Minimum Size Subarray Sum"
slug: minimum-size-subarray-sum
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in your request. Please provide the implementation you would like me to analyze, and I will review it according to the specified criteria (Approach, Complexity, Efficiency, and Code Quality).

---

# Question Revision
### Minimum Size Subarray Sum

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** Iterate through all possible subarrays using nested loops, calculate the sum of each, and track the minimum length that meets the target. 
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Maintain two pointers (`left`, `right`) to represent a window. Expand `right` to increase the window sum. Once the sum $\ge$ target, shrink the window from the `left` to find the smallest possible length that still satisfies the condition.
- **Time:** $O(n)$ (each element is visited at most twice)
- **Space:** $O(1)$

**The 'Aha' Moment:** The requirement for a **contiguous** subarray with a **minimum length** based on a **sum threshold** strongly indicates a dynamic sliding window.

**Summary:** Expand the window to find a valid sum, then contract it from the left to optimize for the minimum length.

---