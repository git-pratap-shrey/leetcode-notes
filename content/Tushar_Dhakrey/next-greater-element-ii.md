---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-04-15"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Next Greater Element II

**Pattern:** Monotonic Stack

**Brute Force:** For every element, iterate through the remainder of the array and wrap around to the start until a larger element is found. 
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Use a monotonic decreasing stack to store indices of elements seeking their "next greater" value. To handle the circularity, simulate a doubled array by iterating from $0$ to $2n-1$ using $i \pmod n$. As you iterate, pop from the stack whenever the current element is greater than the element at the index on top of the stack, assigning the current element as the result for that popped index.

- **Time Complexity:** $O(n)$ (each index is pushed and popped at most twice).
- **Space Complexity:** $O(n)$ (to store the stack).

**The 'Aha' Moment:** The phrase "next greater element" is a classic trigger for a Monotonic Stack, and "circular" implies iterating through the array twice.

**Summary:** Use a monotonic decreasing stack and iterate $2n$ times (modulo $n$) to find the next larger element in a circular array.

---