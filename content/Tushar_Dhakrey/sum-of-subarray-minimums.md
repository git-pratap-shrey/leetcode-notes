---
title: "Sum of Subarray Minimums"
slug: sum-of-subarray-minimums
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. There was no code included in your request.

---

# Question Revision
### Sum of Subarray Minimums

**Pattern:** Monotonic Stack

**Brute Force:** Iterate through all possible subarrays using nested loops, find the minimum of each, and sum them.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
Instead of iterating subarrays, calculate the **contribution** of each element $arr[i]$. Determine the distance to the nearest smaller element to the left (PLE) and the nearest smaller element to the right (PRE).
- **Logic:** If $arr[i]$ is the minimum for $L$ elements to its left and $R$ elements to its right, it is the minimum in $(L+1) \times (R+1)$ subarrays.
- **Handling Duplicates:** Use a strict inequality ($<$) for one side and a non-strict inequality ($\leq$) for the other to ensure each subarray is counted exactly once.
- **Complexity:** 
    - Time: $O(n)$ (each element is pushed/popped from the stack once).
    - Space: $O(n)$ to store the stack.

**The 'Aha' Moment:** When asked for the sum of a property across all subarrays, pivot from "iterating subarrays" to "calculating the contribution of each individual element."

**Summary:** Use a monotonic stack to find the left and right boundaries where each element remains the minimum to compute its total contribution.

---