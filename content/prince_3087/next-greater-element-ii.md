---
title: "Next Greater Element II"
slug: next-greater-element-ii
date: "2026-04-15"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. You have specified the problem (**Next Greater Element II**), but the code section is empty.

---

# Question Revision
### Next Greater Element II

**Pattern:** Monotonic Stack

**Brute Force:** 
For every element, iterate linearly through the remaining array and wrap around to the start using modulo arithmetic until a larger element is found.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
Use a monotonic decreasing stack to store indices of elements awaiting their "next greater" value. To handle the circular property, simulate a doubled array by iterating from $0$ to $2n-1$ and accessing elements via `nums[i % n]`. When the current element is greater than the element at the stack's top index, pop the index and update its result in the output array.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
The requirement to find the "next greater" element combined with a circular array suggests a Monotonic Stack paired with a virtual $2n$ iteration.

**Summary:** 
Iterate through the array twice and use a monotonic decreasing stack to map each element to its first subsequent larger value.

---