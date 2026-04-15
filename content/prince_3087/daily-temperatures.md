---
title: "Daily Temperatures"
slug: daily-temperatures
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution code to receive a review based on the specified criteria.

---

# Question Revision
### Daily Temperatures

**Pattern:** Monotonic Stack

**Brute Force:** Use nested loops to iterate through every subsequent day for each element until a higher temperature is found.
*   Time: $O(n^2)$
*   Space: $O(1)$

**Optimal Approach:** Maintain a stack of indices for temperatures that have not yet found a warmer day. As you iterate, if the current temperature is higher than the temperature at the index on top of the stack, pop the index and calculate the distance (`current_index - popped_index`).
*   Time: $O(n)$ (Each element is pushed and popped exactly once)
*   Space: $O(n)$

**The 'Aha' Moment:** The requirement to find the "next greater element" for every index is the signature trigger for a monotonic stack.

**Summary:** Use a monotonic decreasing stack to store indices and resolve their waiting period the moment a larger value is encountered.

---