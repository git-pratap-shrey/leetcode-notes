---
title: "Maximum Subarray"
slug: maximum-subarray
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed.

---

# Question Revision
### Maximum Subarray

**Pattern:** Dynamic Programming (Kadane's Algorithm)

**Brute Force:** Calculate the sum of every possible subarray using nested loops to find the maximum. 
- Time: $O(n^2)$ | Space: $O(1)$

**Optimal Approach:** Iterate through the array once, maintaining a `current_sum`. At each element, decide whether to add the element to the existing subarray or start a new subarray from the current element (resetting `current_sum` if the previous sum was negative). Track the highest `current_sum` encountered in a `global_max`.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** If the sum of a prefix becomes negative, it will only decrease the value of any subsequent subarray it is attached to.

**Summary:** Discard negative prefix sums immediately to maximize the potential of the remaining sequence.

---