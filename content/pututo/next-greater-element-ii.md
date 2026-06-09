---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section in your request is currently empty, and per my instructions, I cannot hallucinate a solution or provide generic theory without a specific implementation to review.

---

# Question Revision
### Next Greater Element II

**Pattern:** Monotonic Stack

**Brute Force:** For every element, iterate through the subsequent elements (including wrapping around to the start) until a larger value is encountered.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** Use a monotonic decreasing stack to store indices of elements looking for their next greater neighbor. To handle the circular constraint, simulate a doubled array by iterating from $0$ to $2n - 1$ and using `i % n` to access elements. While the current element is greater than the element at the index on top of the stack, pop the index and assign the current element as its "next greater."
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** "Next greater" is a classic signal for a monotonic stack, and "circular" implies simulating a $2n$ length traversal.

**Summary:** Use a monotonic decreasing stack and iterate twice ($2n$) to resolve wrap-around dependencies.

---