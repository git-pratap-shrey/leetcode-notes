---
title: "Max Consecutive Ones"
slug: max-consecutive-ones
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used to receive a detailed review.

---

# Question Revision
### Max Consecutive Ones

**Pattern:** Iterative Counting / Sliding Window

**Brute Force:** 
Iterate through all possible subarrays, check if all elements are 1, and track the maximum length found.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
Maintain a `current_count` variable. Traverse the array once: increment the count when encountering a `1`, and reset it to `0` when encountering a `0`. Update a `max_count` variable at each step to capture the peak streak.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement for a *contiguous* sequence of a single value suggests a linear scan where state is reset upon encountering the "breaker" element (0).

**Summary:** 
Traverse the array once, incrementing a counter for 1s and resetting it on 0s, while tracking the global maximum.

---