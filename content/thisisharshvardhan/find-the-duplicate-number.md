---
title: "Find the Duplicate Number"
slug: find-the-duplicate-number
date: "2026-04-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Find the Duplicate Number

**Pattern:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare)

**Brute Force:** 
Sort the array and check for adjacent identical elements, or use a Hash Set to track seen numbers.
- Time: $O(n \log n)$ (sorting) or $O(n)$ (set)
- Space: $O(1)$ (sorting) or $O(n)$ (set)

**Optimal Approach:**
Treat the array as a linked list where each value `arr[i]` is a pointer to the index `arr[i]`. 
1. **Phase 1:** Use a `slow` pointer (one step) and a `fast` pointer (two steps) until they meet inside the cycle.
2. **Phase 2:** Reset `slow` to the start; move both `slow` and `fast` one step at a time. The point where they meet is the duplicate number (cycle entrance).
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The constraint that the array is read-only and contains values within the range $[1, n]$ transforms the array into a functional graph where a duplicate value inevitably creates a cycle.

**Summary:** 
Treat the array as a linked list and use Floyd's Cycle Detection to find the entrance of the cycle.

---