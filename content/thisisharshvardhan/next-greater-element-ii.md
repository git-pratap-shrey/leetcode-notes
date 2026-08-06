---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to receive a review.

---

# Question Revision
### Next Greater Element II

**Pattern:** Monotonic Stack

**Brute Force:** For every element, iterate through the remaining array and wrap around to the start until a larger element is found.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Iterate through the array twice (using `i % n`) to simulate circularity. Maintain a **monotonic decreasing stack** of indices. While the current element is greater than the element at the index on top of the stack, pop the index and set the current element as its "next greater."
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** The need to find the first larger element to the right in a circular sequence signals a monotonic stack processed over a virtual $2n$ range.

**Summary:** Use a monotonic decreasing stack and iterate twice through the array to resolve "next greater" dependencies for circular indices.

---