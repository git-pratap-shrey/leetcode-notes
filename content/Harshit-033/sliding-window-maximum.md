---
title: "Sliding Window Maximum"
slug: sliding-window-maximum
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. You have left the **Code** section blank. Once provided, I will review it according to the requested criteria.

---

# Question Revision
### Sliding Window Maximum

**Pattern:** Monotonic Deque

**Brute Force:** 
Iterate through every possible window of size $k$ and perform a linear scan to find the maximum value.
- Time: $O(n \cdot k)$
- Space: $O(1)$

**Optimal Approach:** 
Maintain a deque of indices where the corresponding values are kept in strictly decreasing order. For each new element:
1. Pop indices from the back if their values are $\le$ the current element (they can never be the maximum).
2. Push the current index to the back.
3. Pop the index from the front if it has fallen outside the current window range.
4. The element at the front of the deque is always the maximum for the current window.

- **Time Complexity:** $O(n)$ (Each element is pushed and popped exactly once)
- **Space Complexity:** $O(k)$ (Deque stores at most $k$ indices)

**The 'Aha' Moment:** 
When you need the extremum (min/max) of a sliding range, a monotonic deque allows you to discard "useless" elements that are both smaller and older than the current element.

**Summary:** 
Maintain a decreasing deque of indices, pruning the back for value and the front for window expiration.

---